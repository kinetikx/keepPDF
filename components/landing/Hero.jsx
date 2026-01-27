"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { motion, Reorder } from "framer-motion";
import { FileText, Image as ImageIcon, PenTool, Type, MousePointer2, FileType, X, GripVertical } from "lucide-react";
import PDFDropzone from "./PDFDropzone";

export default function Hero() {
    const [files, setFiles] = useState([]);

    // Preview URL logic isn't needed for list view, but keeping state cleaner if we need it later
    // For now we just display file names

    const handleFilesSelect = (selectedFiles) => {
        if (selectedFiles && selectedFiles.length > 0) {
            const newFiles = selectedFiles.map(file => ({
                file,
                id: Math.random().toString(36).substring(7) + "-" + Date.now()
            }));
            setFiles((prev) => [...prev, ...newFiles]);
        }
    };

    const handleReset = () => {
        setFiles([]);
    };

    const [isMerging, setIsMerging] = useState(false);

    const handleMerge = async () => {
        if (files.length < 2) return;

        setIsMerging(true);
        try {
            const { PDFDocument } = await import("pdf-lib");
            const mergedPdf = await PDFDocument.create();

            for (const fileItem of files) {
                try {
                    const fileBuffer = await fileItem.file.arrayBuffer();
                    // Attempt to load with ignoreEncryption: true
                    const pdf = await PDFDocument.load(fileBuffer, { ignoreEncryption: true });
                    const copiedPages = await mergedPdf.copyPages(pdf, pdf.getPageIndices());
                    copiedPages.forEach((page) => mergedPdf.addPage(page));
                } catch (err) {
                    console.error(`Failed to load file ${fileItem.file.name}:`, err);
                    alert(`Could not merge file "${fileItem.file.name}". Is it password protected?`);
                    setIsMerging(false); // Stop here if one file critical
                    return;
                }
            }

            const mergedPdfBytes = await mergedPdf.save();
            const blob = new Blob([mergedPdfBytes], { type: "application/pdf" });
            const url = URL.createObjectURL(blob);

            const link = document.createElement("a");
            link.href = url;
            link.download = `merged-document-${Date.now()}.pdf`;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            URL.revokeObjectURL(url);
        } catch (error) {
            console.error("Error merging PDFs:", error);
            // Ideally show a toast notification here
            alert("Error merging PDFs. Please check the console for details.");
        } finally {
            setIsMerging(false);
        }
    };

    const removeFile = (id) => {
        setFiles((prev) => prev.filter((file) => file.id !== id));
    };

    return (
        <section className="relative pt-32 pb-20 overflow-hidden bg-white">
            {/* Background Decor */}
            <div className="absolute top-20 left-10 w-4 h-4 rounded-full bg-blue-400 opacity-20 animate-pulse" />
            <div className="absolute top-40 right-20 w-3 h-3 rounded-full bg-pink-400 opacity-20 animate-pulse delay-700" />

            <div className="container-custom relative z-10 flex flex-col items-center text-center">

                {/* Visual Mockup / Preview Area */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.4 }}
                    className="relative w-full max-w-5xl mx-auto min-h-[500px]"
                >
                    {/* Floating Icons around mockup (Hide when file is open) */}
                    {files.length === 0 && (
                        <>
                            <motion.div animate={{ y: [0, -10, 0] }} transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }} className="absolute -left-4 top-10 bg-indigo-500 text-white p-3 rounded-xl shadow-lg z-20 hidden md:block">
                                <FileType size={24} />
                            </motion.div>
                            <motion.div animate={{ y: [0, -15, 0] }} transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }} className="absolute -right-4 top-20 bg-red-500 text-white p-3 rounded-xl shadow-lg z-20 hidden md:block">
                                <FileText size={24} />
                            </motion.div>
                        </>
                    )}

                    {/* Main Interface Window */}
                    <div className="bg-white rounded-2xl shadow-2xl border border-slate-100 overflow-hidden relative z-10 w-full h-full flex flex-col">
                        {/* Toolbar */}
                        <div className="bg-slate-50 border-b border-slate-100 p-4 flex items-center justify-between shrink-0">
                            <div className="flex gap-2">
                                <div className="w-3 h-3 rounded-full bg-red-400" />
                                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                                <div className="w-3 h-3 rounded-full bg-green-400" />
                            </div>
                            <div className="flex gap-4 text-slate-400">
                                {files.length > 0 && (
                                    <span className="text-sm font-medium text-slate-600">
                                        {files.length} file(s) selected
                                    </span>
                                )}
                            </div>
                            <div className="flex gap-4 text-slate-400 items-center">
                                {files.length > 0 ? (
                                    <Button variant="ghost" size="icon" onClick={handleReset} className="h-8 w-8 text-slate-500 hover:text-red-500" aria-label="Reset selection">
                                        <X size={18} />
                                    </Button>
                                ) : (
                                    <>
                                        <Type size={16} />
                                        <ImageIcon size={16} />
                                        <PenTool size={16} />
                                    </>
                                )}
                            </div>
                        </div>

                        {/* Content Area */}
                        <div className={`relative bg-slate-100/50 ${files.length > 0 ? "flex-1 overflow-hidden" : "p-8 md:p-12 min-h-[300px]"}`}>
                            {files.length > 0 ? (
                                <div className="flex flex-col gap-4 p-8 max-w-3xl mx-auto w-full h-full overflow-y-auto">
                                    <Reorder.Group axis="y" values={files} onReorder={setFiles} className="flex flex-col gap-4">
                                        {files.map((fileItem) => (
                                            <Reorder.Item key={fileItem.id} value={fileItem} className="relative">
                                                <div className="bg-white border border-slate-200 rounded-xl p-4 flex items-center gap-4 shadow-sm hover:shadow-md transition-shadow group">
                                                    <div className="cursor-grab active:cursor-grabbing p-2 text-slate-400 hover:text-slate-600">
                                                        <GripVertical size={20} />
                                                    </div>
                                                    <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center text-red-600 shrink-0">
                                                        <FileText size={24} />
                                                    </div>
                                                    <div className="flex-1 min-w-0 text-left">
                                                        <h4 className="font-medium text-slate-900 truncate" title={fileItem.file.name}>
                                                            {fileItem.file.name}
                                                        </h4>
                                                        <p className="text-sm text-slate-500">
                                                            {(fileItem.file.size / 1024 / 1024).toFixed(2)} MB
                                                        </p>
                                                    </div>
                                                    <Button
                                                        variant="ghost"
                                                        size="icon"
                                                        onClick={() => removeFile(fileItem.id)}
                                                        className="opacity-0 group-hover:opacity-100 text-slate-400 hover:text-red-500 transition-opacity"
                                                        aria-label="Remove file"
                                                    >
                                                        <X size={18} />
                                                    </Button>
                                                </div>
                                            </Reorder.Item>
                                        ))}
                                    </Reorder.Group>

                                    <div className="mt-8 flex flex-col gap-4">
                                        <PDFDropzone onFileSelect={handleFilesSelect} />

                                        <div className="flex justify-end pt-4">
                                            <Button
                                                size="lg"
                                                className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-6 text-lg rounded-xl shadow-lg shadow-indigo-200 transition-all hover:scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
                                                disabled={files.length < 2 || isMerging}
                                                onClick={handleMerge}
                                            >
                                                {isMerging ? "Merging..." : `Merge ${files.length > 0 ? files.length : ""} PDFs`}
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                <div className="h-full flex flex-col items-center justify-start pt-12 p-8 text-center space-y-8">
                                    <div className="space-y-4">
                                        <motion.div
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-50 text-green-600 text-xs font-bold uppercase tracking-wider"
                                        >
                                            Make PDF Easily
                                        </motion.div>
                                        <motion.h1
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.1 }}
                                            className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight"
                                        >
                                            We make PDF Easy.
                                        </motion.h1>
                                        <motion.p
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.2 }}
                                            className="text-lg text-slate-500 max-w-lg mx-auto"
                                        >
                                            All the tools you'll need to be more productive and work smarter with documents.
                                        </motion.p>
                                    </div>

                                    <div className="w-full max-w-xl">
                                        <PDFDropzone onFileSelect={handleFilesSelect} />
                                    </div>
                                </div>
                            )}

                        </div>
                    </div>
                </motion.div>

            </div>
        </section>
    );
}
