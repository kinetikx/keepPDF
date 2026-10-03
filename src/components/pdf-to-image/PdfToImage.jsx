import { useState, useEffect } from "react";
import JSZip from "jszip";
import { ArrowLeft, Loader2, Image as ImageIcon, Download, Check, Share2, Copy } from "lucide-react";
import { Button } from "../ui/button";
import { cn } from "../../lib/utils";
import { motion } from "framer-motion";

let pdfjsLib = null;
async function getPdfjs() {
    if (!pdfjsLib) {
        pdfjsLib = await import("pdfjs-dist/build/pdf.mjs");
        pdfjsLib.GlobalWorkerOptions.workerSrc = '/pdf.worker.min.mjs';
    }
    return pdfjsLib;
}

export default function PdfToImage({ file, onBack }) {
    const [pages, setPages] = useState([]);
    const [selectedPages, setSelectedPages] = useState(new Set());
    const [status, setStatus] = useState("loading");
    const [progress, setProgress] = useState(0);
    const [zipUrl, setZipUrl] = useState(null);
    const [convertedCount, setConvertedCount] = useState(0);
    const [loadCount, setLoadCount] = useState({ current: 0, total: 0 });

    useEffect(() => {
        return () => {
            if (zipUrl) URL.revokeObjectURL(zipUrl);
        };
    }, [zipUrl]);

    useEffect(() => {
        if (!file) return;
        let isCancelled = false;
        const loadPDF = async () => {
            try {
                setStatus("loading");
                const pdfjs = await getPdfjs();
                const arrayBuffer = await file.arrayBuffer();
                const pdf = await pdfjs.getDocument(arrayBuffer).promise;
                if (isCancelled) return;
                setLoadCount({ current: 0, total: pdf.numPages });

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
                        id: i,
                        image: canvas.toDataURL("image/jpeg", 0.65),
                        pageNumber: i
                    });
                    page.cleanup();
                    setLoadCount({ current: i, total: pdf.numPages });
                }

                if (!isCancelled) {
                    setPages(renderedPages);
                    setSelectedPages(new Set(renderedPages.map(p => p.id)));
                    setStatus("selecting");
                }
            } catch (error) {
                console.error("Error loading PDF:", error);
                if (!isCancelled) setStatus("error");
            }
        };
        loadPDF();
        return () => { isCancelled = true; };
    }, [file]);

    const togglePage = (id) => { setSelectedPages(prev => { const n = new Set(prev); n.has(id) ? n.delete(id) : n.add(id); return n; }); };
    const toggleAll = () => { selectedPages.size === pages.length ? setSelectedPages(new Set()) : setSelectedPages(new Set(pages.map(p => p.id))); };

    const convertToImages = async () => {
        if (selectedPages.size === 0) return;
        setStatus("converting"); setProgress(0);
        try {
            const pdfjs = await getPdfjs();
            const arrayBuffer = await file.arrayBuffer();
            const pdf = await pdfjs.getDocument(arrayBuffer).promise;
            const zip = new JSZip();
            const imgFolder = zip.folder("images");
            const pagesToConvert = Array.from(selectedPages).sort((a, b) => a - b);
            setConvertedCount(pagesToConvert.length);

            const canvas = document.createElement("canvas");
            const context = canvas.getContext("2d", { alpha: false });

            for (let i = 0; i < pagesToConvert.length; i++) {
                const pageNum = pagesToConvert[i];
                setProgress(Math.round((i / pagesToConvert.length) * 100));
                const page = await pdf.getPage(pageNum);
                const viewport = page.getViewport({ scale: 2.0 });
                canvas.width = viewport.width; canvas.height = viewport.height;
                await page.render({ canvasContext: context, viewport }).promise;
                const blob = await new Promise(resolve => canvas.toBlob(resolve, "image/jpeg", 0.9));
                imgFolder.file(`page-${pageNum.toString().padStart(3, "0")}.jpg`, blob);
                page.cleanup();
            }
            setProgress(100);
            const content = await zip.generateAsync({ type: "blob" });
            setZipUrl(URL.createObjectURL(content));
            setStatus("complete");
        } catch (error) { console.error("Error converting:", error); setStatus("error"); }
    };

    if (status === "loading") {
        return (
            <div className="flex flex-col items-center justify-center p-12 space-y-4 min-h-[50vh]">
                <Loader2 className="w-8 h-8 animate-spin text-indigo-600" />
                <p className="text-slate-500 font-medium">
                    Loading PDF Pages...
                    {loadCount.total > 0 && ` (${loadCount.current}/${loadCount.total})`}
                </p>
                {loadCount.total > 0 && (
                    <div className="w-48 bg-slate-100 rounded-full h-1.5 overflow-hidden">
                        <div
                            className="bg-indigo-600 h-full transition-all duration-150"
                            style={{ width: `${(loadCount.current / loadCount.total) * 100}%` }}
                        />
                    </div>
                )}
            </div>
        );
    }
    if (status === "complete") return (
        <div className="max-w-md mx-auto bg-white p-8 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 text-center space-y-6 mt-12">
            <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4"><ImageIcon size={32} /></div>
            <div><h3 className="text-xl font-bold text-slate-900 mb-2">Conversion Ready!</h3><p className="text-slate-500">Successfully converted {convertedCount} pages to images.</p></div>
            <div className="grid gap-3">
                <a href={zipUrl} download={`${file.name.replace(/\.pdf$/i, "")}-images.zip`} className="w-full"><Button className="w-full bg-green-600 hover:bg-green-700 h-12 text-lg"><Download className="mr-2" size={20} />Download ZIP</Button></a>
                <Button variant="ghost" onClick={onBack} className="text-slate-500">Convert Another File</Button>
            </div>
            <div className="pt-3 border-t border-slate-100 flex items-center justify-center gap-2">
                <a
                    href={`https://api.whatsapp.com/send?text=${encodeURIComponent("KeepPDF ile PDF sayfalarımı ücretsiz ve anında resme dönüştürdüm: https://keep-pdf.online")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-emerald-50 hover:bg-emerald-100 text-emerald-700 text-xs font-semibold rounded-lg transition-colors"
                >
                    <Share2 size={13} />
                    <span>WhatsApp</span>
                </a>
                <button
                    type="button"
                    onClick={() => {
                        navigator.clipboard.writeText("https://keep-pdf.online");
                        alert("Link kopyalandı! Arkadaşlarınızla paylaşabilirsiniz.");
                    }}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold rounded-lg transition-colors"
                >
                    <Copy size={13} />
                    <span>Linki Kopyala</span>
                </button>
            </div>
        </div>
    );

    return (
        <div className="space-y-6">
            <div className="sticky top-0 z-40 bg-white/80 backdrop-blur-md p-4 rounded-2xl border border-slate-200 shadow-sm flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                    <button onClick={onBack} className="p-2 hover:bg-slate-100 rounded-full transition-colors text-slate-600"><ArrowLeft size={20} /></button>
                    <div><h2 className="font-semibold text-slate-800 flex items-center gap-2"><ImageIcon size={20} className="text-pink-500" />PDF to JPG</h2><p className="text-sm text-slate-500">{file.name} ({pages.length} pages)</p></div>
                </div>
                <div className="flex items-center gap-3">
                    <Button variant="ghost" size="sm" onClick={toggleAll} className="text-slate-600">{selectedPages.size === pages.length ? "Deselect All" : "Select All"}</Button>
                    <Button onClick={convertToImages} disabled={selectedPages.size === 0 || status === "converting"} className="bg-indigo-600 hover:bg-indigo-700 min-w-[140px]">
                        {status === "converting" ? (<div className="flex items-center gap-2"><Loader2 size={18} className="animate-spin" /><span>{progress}%</span></div>) : (<><Download size={18} className="mr-2" />Convert {selectedPages.size} Pages</>)}
                    </Button>
                </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 pb-12">
                {pages.map((page) => (
                    <motion.div key={page.id} initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} onClick={() => togglePage(page.id)} className={cn("relative group cursor-pointer rounded-xl transition-all duration-200", selectedPages.has(page.id) ? "ring-2 ring-indigo-600 ring-offset-2 scale-[1.02]" : "hover:ring-2 hover:ring-slate-200 hover:ring-offset-2")}>
                        <div className="pointer-events-none aspect-[1/1.4] rounded-lg overflow-hidden bg-slate-100 shadow-sm border border-slate-100 relative">
                            <img src={page.image} alt={`Page ${page.pageNumber}`} className="w-full h-full object-contain" />
                            <div className={cn("absolute inset-0 transition-colors duration-200", selectedPages.has(page.id) ? "bg-indigo-900/10" : "group-hover:bg-black/5")} />
                            <div className={cn("absolute top-3 right-3 w-6 h-6 rounded-full flex items-center justify-center transition-all duration-200 shadow-sm", selectedPages.has(page.id) ? "bg-indigo-600 text-white scale-110" : "bg-white text-transparent border border-slate-200 group-hover:border-indigo-300")}><Check size={14} strokeWidth={3} /></div>
                            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 px-2 py-0.5 bg-black/50 text-white text-[10px] rounded-full backdrop-blur-sm">{page.pageNumber}</div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
