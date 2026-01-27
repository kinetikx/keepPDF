import { useState, useCallback } from "react";
import { Wand2, Upload, FileUp, Plus } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

export default function PDFDropzone({ onFileSelect }) {
    const [isDragging, setIsDragging] = useState(false);

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
    }, []);

    const handleDrop = useCallback(
        (e) => {
            e.preventDefault();
            e.stopPropagation();
            setIsDragging(false);

            const files = [...e.dataTransfer.files];
            if (files && files.length > 0) {
                const pdfFiles = files.filter((file) => file.type === "application/pdf");

                if (pdfFiles.length > 0) {
                    onFileSelect?.(pdfFiles);
                } else {
                    console.warn("No PDF files dropped");
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
    }, [onFileSelect]);

    return (
        <motion.div
            onDragEnter={handleDragEnter}
            onDragLeave={handleDragLeave}
            onDragOver={handleDragOver}
            onDrop={handleDrop}
            onClick={() => document.getElementById("file-upload").click()}
            whileHover={{ scale: 1.01, borderColor: "rgba(99, 102, 241, 0.5)" }}
            animate={{
                backgroundColor: isDragging ? "rgba(238, 242, 255, 1)" : "rgba(255, 255, 255, 0.5)",
                borderColor: isDragging ? "rgb(99, 102, 241)" : "rgb(226, 232, 240)",
                scale: isDragging ? 1.02 : 1
            }}
            transition={{ duration: 0.2 }}
            className={cn(
                "h-64 rounded-2xl border-2 border-dashed flex flex-col items-center justify-center gap-4 cursor-pointer relative overflow-hidden group shadow-sm hover:shadow-md",
                isDragging ? "border-indigo-500 shadow-indigo-100" : "border-slate-200"
            )}
        >
            <input
                id="file-upload"
                type="file"
                className="hidden"
                accept=".pdf"
                multiple
                onChange={handleFileInput}
            />

            {/* Animated Background Pattern (Optional subtle effect) */}
            <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[radial-gradient(#6366f1_1px,transparent_1px)] [background-size:16px_16px]" />

            <motion.div
                className={cn(
                    "w-20 h-20 rounded-full flex items-center justify-center mb-2 transition-all duration-300 relative z-10",
                    isDragging ? "bg-indigo-100 text-indigo-600" : "bg-indigo-50 text-indigo-500 group-hover:bg-indigo-100 group-hover:text-indigo-600"
                )}
                animate={{
                    y: isDragging ? -10 : 0,
                    scale: isDragging ? 1.1 : 1
                }}
            >
                {isDragging ? (
                    <motion.div
                        initial={{ scale: 0.5, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.5, opacity: 0 }}
                    >
                        <Upload size={40} />
                    </motion.div>
                ) : (
                    <FileUp size={40} strokeWidth={1.5} />
                )}

                {/* Pulse ring */}
                {!isDragging && (
                    <div className="absolute inset-0 rounded-full border border-indigo-200 opacity-0 group-hover:opacity-100 group-hover:animate-ping" />
                )}
            </motion.div>

            <div className="text-center relative z-10 space-y-2">
                <h3 className={cn(
                    "text-xl font-semibold transition-colors",
                    isDragging ? "text-indigo-600" : "text-slate-700 group-hover:text-indigo-600"
                )}>
                    {isDragging ? "Drop it like it's hot!" : "Click to upload or drag & drop"}
                </h3>
                <p className="text-sm text-slate-400 group-hover:text-slate-500 transition-colors">
                    PDF files up to 50MB
                </p>

                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="mt-4 px-6 py-2 bg-indigo-600 text-white rounded-full text-sm font-medium shadow-lg shadow-indigo-200 opacity-0 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0"
                >
                    Browse Files
                </motion.button>
            </div>
        </motion.div>
    );
}
