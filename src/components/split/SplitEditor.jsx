import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Check, Download, ArrowLeft, Loader2, Split } from "lucide-react";
import { cn } from "../../lib/utils";

let pdfjsLib = null;
async function getPdfjs() {
    if (!pdfjsLib) {
        pdfjsLib = await import("pdfjs-dist/build/pdf.mjs");
        pdfjsLib.GlobalWorkerOptions.workerSrc = '/pdf.worker.min.mjs';
    }
    return pdfjsLib;
}

export default function SplitEditor({ file, onBack, dict }) {
    const [pages, setPages] = useState([]);
    const [selectedPages, setSelectedPages] = useState(new Set());
    const [isProcessing, setIsProcessing] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [totalNumPages, setTotalNumPages] = useState(0);
    const isSelectionDragging = useRef(false);
    const selectionTargetState = useRef(true);

    useEffect(() => {
        const handleGlobalMouseUp = () => { isSelectionDragging.current = false; };
        window.addEventListener('mouseup', handleGlobalMouseUp);
        return () => window.removeEventListener('mouseup', handleGlobalMouseUp);
    }, []);

    useEffect(() => {
        if (!file) return;
        let isCancelled = false;
        const loadPDF = async () => {
            try {
                setIsLoading(true);
                setPages([]);
                const pdfjs = await getPdfjs();
                const arrayBuffer = await file.arrayBuffer();
                const pdf = await pdfjs.getDocument(arrayBuffer).promise;
                if (isCancelled) return;
                setTotalNumPages(pdf.numPages);

                const canvas = document.createElement("canvas");
                const context = canvas.getContext("2d", { alpha: false });
                const renderedPages = [];

                for (let i = 1; i <= pdf.numPages; i++) {
                    if (isCancelled) return;
                    const page = await pdf.getPage(i);
                    const viewport = page.getViewport({ scale: 0.35 });
                    canvas.height = viewport.height;
                    canvas.width = viewport.width;
                    await page.render({ canvasContext: context, viewport }).promise;

                    renderedPages.push({
                        id: i - 1,
                        image: canvas.toDataURL("image/jpeg", 0.65),
                        pageNumber: i
                    });
                    page.cleanup();

                    if (i === 1 || i % 4 === 0 || i === pdf.numPages) {
                        setPages([...renderedPages]);
                        setIsLoading(false);
                    }
                }
            } catch (error) {
                console.error("Error loading PDF:", error);
            } finally {
                if (!isCancelled) setIsLoading(false);
            }
        };
        loadPDF();
        return () => { isCancelled = true; };
    }, [file]);

    const handleMouseDown = (id) => {
        isSelectionDragging.current = true;
        selectionTargetState.current = !selectedPages.has(id);
        togglePage(id, selectionTargetState.current);
    };
    const handleMouseEnter = (id) => { if (isSelectionDragging.current) togglePage(id, selectionTargetState.current); };

    const togglePage = (id, forceState = null) => {
        setSelectedPages(prev => {
            const newSelected = new Set(prev);
            const shouldSelect = forceState !== null ? forceState : !newSelected.has(id);
            shouldSelect ? newSelected.add(id) : newSelected.delete(id);
            return newSelected;
        });
    };

    const handleExtract = async () => {
        if (selectedPages.size === 0) return;
        setIsProcessing(true);
        try {
            const { PDFDocument } = await import("pdf-lib");
            const arrayBuffer = await file.arrayBuffer();
            const srcDoc = await PDFDocument.load(arrayBuffer);
            const newDoc = await PDFDocument.create();
            const indices = Array.from(selectedPages).sort((a, b) => a - b);
            const copiedPages = await newDoc.copyPages(srcDoc, indices);
            copiedPages.forEach((page) => newDoc.addPage(page));
            const pdfBytes = await newDoc.save({ useObjectStreams: true });
            const blob = new Blob([pdfBytes], { type: "application/pdf" });
            const url = URL.createObjectURL(blob);
            const link = document.createElement("a");
            link.href = url;
            link.download = `split-${file.name}`;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            setTimeout(() => URL.revokeObjectURL(url), 10000);
        } catch (error) { console.error("Error splitting PDF:", error); }
        finally { setIsProcessing(false); }
    };

    const selectAll = () => {
        selectedPages.size === pages.length ? setSelectedPages(new Set()) : setSelectedPages(new Set(pages.map(p => p.id)));
    };

    if (isLoading && pages.length === 0) {
        return (
            <div className="flex flex-col items-center justify-center p-12 space-y-4">
                <Loader2 className="w-8 h-8 animate-spin text-indigo-600" />
                <p className="text-slate-500">{dict?.tools?.split?.editor?.loading}</p>
            </div>
        );
    }

    return (
        <div className="space-y-6 select-none">
            <div className="sticky top-0 z-20 bg-white/80 backdrop-blur-md p-4 rounded-xl border border-slate-200 shadow-sm flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <button onClick={onBack} className="p-2 hover:bg-slate-100 rounded-full transition-colors text-slate-600"><ArrowLeft size={20} /></button>
                    <div>
                        <h2 className="font-semibold text-slate-800">{file.name}</h2>
                        <p className="text-sm text-slate-500">
                            {pages.length < totalNumPages
                                ? `${pages.length} / ${totalNumPages} ${(dict?.tools?.split?.editor?.loading || "loading...")}`
                                : (dict?.tools?.split?.editor?.pageCount || "{count} pages found").replace("{count}", pages.length)}
                        </p>
                    </div>
                </div>
                <div className="flex items-center gap-3">
                    <button onClick={selectAll} className="px-4 py-2 text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">
                        {selectedPages.size === pages.length ? dict?.tools?.split?.editor?.deselect : dict?.tools?.split?.editor?.selectAll}
                    </button>
                    <button onClick={handleExtract} disabled={selectedPages.size === 0 || isProcessing} className={cn("flex items-center gap-2 px-6 py-2 rounded-lg font-medium transition-all shadow-sm", selectedPages.size > 0 ? "bg-indigo-600 text-white hover:bg-indigo-700 hover:shadow-indigo-200 shadow-lg" : "bg-slate-100 text-slate-400 cursor-not-allowed")}>
                        {isProcessing ? <Loader2 size={18} className="animate-spin" /> : <Split size={18} />}
                        {selectedPages.size > 0 ? (dict?.tools?.split?.editor?.extract || "Extract {count} Pages").replace("{count}", selectedPages.size) : dict?.tools?.split?.editor?.selectPages}
                    </button>
                </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 p-4">
                {pages.map((page) => (
                    <motion.div key={page.id} layout initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} onMouseDown={() => handleMouseDown(page.id)} onMouseEnter={() => handleMouseEnter(page.id)} className={cn("relative group cursor-pointer rounded-xl transition-all duration-200", selectedPages.has(page.id) ? "ring-2 ring-indigo-600 ring-offset-2 scale-[1.02]" : "hover:ring-2 hover:ring-slate-200 hover:ring-offset-2")}>
                        <div className="pointer-events-none aspect-[1/1.4] rounded-lg overflow-hidden bg-slate-100 shadow-sm border border-slate-100 relative">
                            <img src={page.image} alt={`Page ${page.pageNumber}`} className="w-full h-full object-contain" />
                            <div className={cn("absolute inset-0 transition-colors duration-200 flex items-center justify-center", selectedPages.has(page.id) ? "bg-indigo-900/10" : "group-hover:bg-black/5")} />
                            <div className={cn("absolute top-3 right-3 w-6 h-6 rounded-full flex items-center justify-center transition-all duration-200 shadow-sm", selectedPages.has(page.id) ? "bg-indigo-600 text-white scale-110" : "bg-white text-transparent border border-slate-200 group-hover:border-indigo-300")}><Check size={14} strokeWidth={3} /></div>
                            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 px-2 py-0.5 bg-black/50 text-white text-[10px] rounded-full backdrop-blur-sm">{page.pageNumber}</div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
