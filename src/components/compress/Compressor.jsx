import { useState, useRef, useEffect } from "react";
import { PDFDocument } from "pdf-lib";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, Loader2, Minimize2, FileDown, CheckCircle2, AlertCircle } from "lucide-react";
import { cn } from "../../lib/utils";
import { Button } from "../ui/button";

let pdfjsLib = null;
async function getPdfjs() {
    if (!pdfjsLib) {
        pdfjsLib = await import("pdfjs-dist/build/pdf.mjs");
        pdfjsLib.GlobalWorkerOptions.workerSrc = '/pdf.worker.min.mjs';
    }
    return pdfjsLib;
}

export default function Compressor({ file, onBack, dict }) {
    const [isProcessing, setIsProcessing] = useState(false);
    const [progress, setProgress] = useState(0);
    const [status, setStatus] = useState("idle");
    const [resultUrl, setResultUrl] = useState(null);
    const [mode, setMode] = useState("strong");
    const [originalSize, setOriginalSize] = useState(0);
    const [newSize, setNewSize] = useState(0);

    useEffect(() => {
        if (file) setOriginalSize(file.size);
    }, [file]);

    const formatSize = (bytes) => {
        if (bytes === 0) return "0 Bytes";
        const k = 1024;
        const sizes = ["Bytes", "KB", "MB", "GB"];
        const i = Math.floor(Math.log(bytes) / Math.log(k));
        return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
    };

    const compressLight = async () => {
        const arrayBuffer = await file.arrayBuffer();
        const srcDoc = await PDFDocument.load(arrayBuffer);
        const newDoc = await PDFDocument.create();
        const indices = srcDoc.getPageIndices();
        const copiedPages = await newDoc.copyPages(srcDoc, indices);
        copiedPages.forEach((page) => newDoc.addPage(page));
        return await newDoc.save();
    };

    const compressStrong = async () => {
        const pdfjs = await getPdfjs();
        const arrayBuffer = await file.arrayBuffer();
        const pdf = await pdfjs.getDocument(arrayBuffer).promise;
        const newDoc = await PDFDocument.create();
        const totalPages = pdf.numPages;

        for (let i = 1; i <= totalPages; i++) {
            setProgress(Math.round(((i - 1) / totalPages) * 100));
            const page = await pdf.getPage(i);
            const viewport = page.getViewport({ scale: 1.0 });
            const canvas = document.createElement("canvas");
            const context = canvas.getContext("2d");
            canvas.width = viewport.width;
            canvas.height = viewport.height;
            await page.render({ canvasContext: context, viewport: viewport }).promise;
            const imageUrl = canvas.toDataURL("image/jpeg", 0.5);
            const imageBytes = await fetch(imageUrl).then((res) => res.arrayBuffer());
            const jpgImage = await newDoc.embedJpg(imageBytes);
            const newPage = newDoc.addPage([viewport.width, viewport.height]);
            newPage.drawImage(jpgImage, { x: 0, y: 0, width: viewport.width, height: viewport.height });
        }
        return await newDoc.save();
    };

    const handleCompress = async () => {
        setIsProcessing(true);
        setStatus("processing");
        setProgress(0);
        setResultUrl(null);

        try {
            let resultBytes = mode === "light" ? await compressLight() : await compressStrong();
            setProgress(100);
            const blob = new Blob([resultBytes], { type: "application/pdf" });
            if (blob.size >= originalSize) {
                setNewSize(originalSize);
                setResultUrl(URL.createObjectURL(file));
            } else {
                setNewSize(blob.size);
                setResultUrl(URL.createObjectURL(blob));
            }
            setStatus("complete");
        } catch (error) {
            console.error("Compression error:", error);
            setStatus("error");
        } finally {
            setIsProcessing(false);
        }
    };

    if (status === "complete") {
        return (
            <div className="max-w-md mx-auto bg-white p-8 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 text-center space-y-6">
                <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 size={32} />
                </div>
                <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">{dict?.tools?.compress?.editor?.success}</h3>
                    <div className="flex items-center justify-center gap-4 text-sm mt-4 p-4 bg-slate-50 rounded-xl">
                        <div className="text-right">
                            <p className="text-slate-400 mb-1">{dict?.tools?.compress?.editor?.original}</p>
                            <p className="font-semibold text-slate-700 decoration-slate-400 line-through">{formatSize(originalSize)}</p>
                        </div>
                        <div className="w-px h-8 bg-slate-200" />
                        <div className="text-left">
                            <p className="text-slate-400 mb-1">{dict?.tools?.compress?.editor?.compressed}</p>
                            <p className="font-bold text-green-600">{formatSize(newSize)}</p>
                        </div>
                    </div>
                    <p className="text-xs text-green-600 font-medium mt-2">
                        {(dict?.tools?.compress?.editor?.reduction || "{percent}% reduction").replace("{percent}", Math.round(((originalSize - newSize) / originalSize) * 100))}
                    </p>
                </div>
                <div className="grid gap-3">
                    <a href={resultUrl} download={`compressed-${file.name}`} className="w-full">
                        <Button className="w-full bg-green-600 hover:bg-green-700 h-12 text-lg">
                            <FileDown className="mr-2" size={20} />
                            {dict?.tools?.compress?.editor?.download}
                        </Button>
                    </a>
                    <Button variant="ghost" onClick={onBack} className="text-slate-500">
                        {dict?.tools?.compress?.editor?.compressAnother}
                    </Button>
                </div>
            </div>
        );
    }

    return (
        <div className="max-w-2xl mx-auto space-y-8">
            <div className="flex items-center gap-4 mb-8">
                <button onClick={onBack} className="p-2 hover:bg-slate-100 rounded-full transition-colors text-slate-600 bg-white shadow-sm border border-slate-200">
                    <ArrowLeft size={20} />
                </button>
                <div className="flex-1">
                    <h2 className="font-semibold text-slate-800 text-lg flex items-center gap-2">
                        <Minimize2 size={20} className="text-orange-500" />
                        {dict?.tools?.compress?.title}
                    </h2>
                    <p className="text-sm text-slate-500">{file.name} ({formatSize(originalSize)})</p>
                </div>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
                <div onClick={() => setMode("light")} className={cn("relative p-6 rounded-2xl border-2 transition-all cursor-pointer hover:shadow-md", mode === "light" ? "border-orange-500 bg-orange-50/50" : "border-slate-100 bg-white hover:border-orange-200")}>
                    <div className="flex justify-between items-start mb-4">
                        <span className="font-bold text-slate-800">{dict?.tools?.compress?.editor?.basic}</span>
                        {mode === "light" && <div className="w-4 h-4 rounded-full bg-orange-500" />}
                    </div>
                    <p className="text-sm text-slate-600 leading-relaxed">{dict?.tools?.compress?.editor?.basicDesc}</p>
                </div>
                <div onClick={() => setMode("strong")} className={cn("relative p-6 rounded-2xl border-2 transition-all cursor-pointer hover:shadow-md", mode === "strong" ? "border-orange-500 bg-orange-50/50" : "border-slate-100 bg-white hover:border-orange-200")}>
                    <div className="flex justify-between items-start mb-4">
                        <span className="font-bold text-slate-800">{dict?.tools?.compress?.editor?.strong}</span>
                        {mode === "strong" && <div className="w-4 h-4 rounded-full bg-orange-500" />}
                    </div>
                    <p className="text-sm text-slate-600 leading-relaxed">
                        {dict?.tools?.compress?.editor?.strongDesc}
                        <span className="block mt-1 text-orange-600 text-xs font-semibold">{dict?.tools?.compress?.editor?.strongNote}</span>
                    </p>
                </div>
            </div>
            {status === "error" && (
                <div className="p-4 bg-red-50 text-red-600 rounded-xl flex items-center gap-3 text-sm">
                    <AlertCircle size={18} />
                    {dict?.tools?.compress?.editor?.error}
                </div>
            )}
            <Button onClick={handleCompress} disabled={isProcessing} className="w-full h-14 text-lg bg-slate-900 hover:bg-slate-800 rounded-xl shadow-xl shadow-slate-200/50 transition-all hover:scale-[1.01] active:scale-[0.99]">
                {isProcessing ? (
                    <div className="flex items-center gap-3">
                        <Loader2 className="animate-spin" />
                        <span>{(dict?.tools?.compress?.editor?.processing || "Compressing...").replace("{percent}", progress)}</span>
                    </div>
                ) : (dict?.tools?.compress?.editor?.button)}
            </Button>
        </div>
    );
}
