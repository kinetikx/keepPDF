import { useState, useCallback, useRef } from "react";
import { CloudUpload, FileText, Plus, ShieldCheck } from "lucide-react";
import { cn } from "../../lib/utils";

export default function PDFDropzone({ onFileSelect, ...props }) {
    const [isDragging, setIsDragging] = useState(false);
    const fileInputRef = useRef(null);

    const handleDragEnter = useCallback((e) => {
        e.preventDefault();
        e.stopPropagation();
        setIsDragging(true);
    }, []);

    const handleDragLeave = useCallback((e) => {
        e.preventDefault();
        e.stopPropagation();
        setIsDragging(false);
    }, []);

    const handleDragOver = useCallback((e) => {
        e.preventDefault();
        e.stopPropagation();
        setIsDragging(true);
    }, []);

    const handleDrop = useCallback(
        (e) => {
            e.preventDefault();
            e.stopPropagation();
            setIsDragging(false);

            const files = [...e.dataTransfer.files];
            if (files && files.length > 0) {
                const pdfFiles = files.filter(
                    (file) => file.type === "application/pdf" || file.name.toLowerCase().endsWith(".pdf")
                );

                if (pdfFiles.length > 0) {
                    onFileSelect?.(pdfFiles);
                }
            }
        },
        [onFileSelect]
    );

    const handleFileInput = useCallback((e) => {
        const files = [...e.target.files];
        if (files && files.length > 0) {
            onFileSelect?.(files);
        }
        e.target.value = "";
    }, [onFileSelect]);

    return (
        <div
            onDragEnter={handleDragEnter}
            onDragLeave={handleDragLeave}
            onDragOver={handleDragOver}
            onDrop={handleDrop}
            onClick={() => fileInputRef.current?.click()}
            className={cn(
                "relative flex flex-col items-center justify-center px-6 py-10 w-full cursor-pointer overflow-hidden rounded-2xl border-2 border-dashed transition-all duration-200 group select-none",
                isDragging
                    ? "bg-indigo-50/70 border-indigo-500 shadow-indigo-200/50 ring-4 ring-indigo-50 scale-[1.01]"
                    : "bg-white/95 border-slate-300 hover:border-indigo-400 hover:bg-slate-50/60 shadow-sm hover:shadow-md"
            )}
        >
            <input
                ref={fileInputRef}
                type="file"
                className="hidden"
                accept=".pdf"
                multiple
                onChange={handleFileInput}
            />

            {/* Subtle background decoration (GPU-friendly, no heavy blur filters) */}
            <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden rounded-2xl opacity-40">
                <div className="absolute inset-0 bg-[radial-gradient(#6366f1_1px,transparent_1px)] [background-size:24px_24px] opacity-20" />
            </div>

            <div className="relative z-10 w-full flex flex-col items-center pointer-events-none">
                {/* Visual Illustration Composition with hardware-accelerated CSS transforms */}
                <div className="relative w-full max-w-md h-40 flex items-center justify-center mb-4">
                    {/* Back Folder Tab */}
                    <div
                        className={cn(
                            "absolute bottom-3 w-48 h-28 bg-[#e0e7ff] rounded-xl shadow-inner border border-indigo-100 transition-transform duration-300 ease-out",
                            isDragging && "scale-105 -translate-y-1"
                        )}
                    >
                        <div className="absolute top-0 left-0 w-20 h-6 bg-[#c7d2fe] rounded-tl-xl rounded-tr-lg transform -translate-y-full" />
                    </div>

                    {/* Floating Document 1: Left PDF */}
                    <div
                        className={cn(
                            "absolute top-0 left-8 w-28 h-36 bg-white rounded-lg shadow-sm border border-slate-100 p-3 transform origin-bottom-left transition-transform duration-300 ease-out",
                            isDragging
                                ? "-rotate-[22deg] -translate-y-4 -translate-x-3 scale-105"
                                : "-rotate-[12deg] group-hover:-rotate-[16deg] group-hover:-translate-y-1"
                        )}
                    >
                        {/* Red PDF Badge */}
                        <div className="absolute -top-2 -left-3 bg-red-500 text-white text-[10px] font-black tracking-wider px-2 py-0.5 rounded shadow-sm transform -rotate-12">
                            PDF
                        </div>
                        <div className="w-1/2 h-2 bg-blue-500 rounded-full mb-3 mt-4" />
                        <div className="w-full h-2 bg-slate-100 rounded-full mb-2" />
                        <div className="w-5/6 h-2 bg-slate-100 rounded-full mb-2" />
                        <div className="w-full h-2 bg-slate-100 rounded-full" />
                    </div>

                    {/* Floating Document 2: Right Doc */}
                    <div
                        className={cn(
                            "absolute top-2 right-8 w-24 h-32 bg-white rounded-lg shadow-sm border border-slate-100 p-3 transform origin-bottom-right transition-transform duration-300 ease-out",
                            isDragging
                                ? "rotate-[22deg] -translate-y-3 translate-x-3 scale-105"
                                : "rotate-[12deg] group-hover:rotate-[16deg] group-hover:-translate-y-1"
                        )}
                    >
                        <div className="w-3/4 h-1.5 bg-indigo-100 rounded-full mb-2 mt-3" />
                        <div className="w-full h-1.5 bg-indigo-100 rounded-full mb-2" />
                        <div className="w-1/2 h-1.5 bg-indigo-100 rounded-full" />
                        <div className="absolute bottom-3 right-3 text-indigo-300">
                            <FileText size={22} />
                        </div>
                    </div>

                    {/* Front Folder Cover */}
                    <div
                        className={cn(
                            "absolute bottom-0 w-56 h-24 bg-white/95 rounded-xl shadow-md border flex justify-center items-center transition-all duration-300 ease-out",
                            isDragging
                                ? "border-indigo-400 bg-indigo-50/90 shadow-indigo-100 translate-y-1"
                                : "border-slate-200/90 group-hover:border-indigo-200"
                        )}
                    >
                        {/* Interactive Upload Button floating on folder */}
                        <div
                            className={cn(
                                "w-14 h-14 rounded-full flex items-center justify-center shadow-md transition-all duration-300 transform -translate-y-4",
                                isDragging
                                    ? "bg-indigo-600 text-white scale-110 shadow-indigo-300/50"
                                    : "bg-white text-indigo-600 group-hover:scale-105 group-hover:bg-indigo-50"
                            )}
                        >
                            <CloudUpload size={28} strokeWidth={isDragging ? 2.5 : 2} />
                        </div>

                        {/* Dotted accents on folder */}
                        <div className="absolute bottom-4 left-6 flex gap-1.5 opacity-40">
                            <div className="w-1.5 h-1.5 rounded-full bg-slate-400" />
                            <div className="w-1.5 h-1.5 rounded-full bg-slate-400" />
                            <div className="w-1.5 h-1.5 rounded-full bg-slate-400" />
                        </div>
                    </div>
                </div>

                {/* Text & Primary Call to Action */}
                <h3
                    className={cn(
                        "text-2xl font-extrabold transition-colors mb-2 tracking-tight text-center z-20",
                        isDragging ? "text-indigo-600" : "text-slate-900"
                    )}
                >
                    {isDragging
                        ? (props.dropTitle || "Drop files here to upload!")
                        : (props.title || "Click to upload or drag & drop")}
                </h3>

                <p className="text-sm text-slate-500 font-medium tracking-wide text-center max-w-sm z-20">
                    {props.limit || "PDF files up to 50MB"}
                </p>

                <div className="mt-5 z-20 pointer-events-auto">
                    <button
                        type="button"
                        className="px-8 py-3 bg-slate-900 hover:bg-indigo-600 active:scale-95 text-white rounded-xl text-sm font-bold shadow-md shadow-slate-200/50 hover:shadow-indigo-200 transition-all flex items-center justify-center gap-2 cursor-pointer"
                    >
                        <Plus size={18} strokeWidth={2.5} />
                        {props.buttonText || "Select Files"}
                    </button>
                </div>

                {/* 100% Client-Side Privacy Badge */}
                <div className="mt-5 z-20 flex items-center gap-1.5 text-xs text-slate-500 bg-slate-50/90 border border-slate-200/80 px-3.5 py-1.5 rounded-full font-medium shadow-sm">
                    <ShieldCheck size={14} className="text-emerald-500 shrink-0" />
                    <span>{props.securityBadge || "100% Private · Processed locally in your browser, never uploaded"}</span>
                </div>
            </div>
        </div>
    );
}
