import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, Loader2, Minimize2, FileDown, CheckCircle2, AlertCircle, Share2, Copy } from "lucide-react";
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

    useEffect(() => {
        return () => {
            if (resultUrl) URL.revokeObjectURL(resultUrl);
        };
    }, [resultUrl]);

    const formatSize = (bytes) => {
        if (bytes === 0) return "0 Bytes";
        const k = 1024;
        const sizes = ["Bytes", "KB", "MB", "GB"];
        const i = Math.floor(Math.log(bytes) / Math.log(k));
        return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
    };

    // 1. Vector & Embedded Image Optimization (Preserves crisp vector text & hyperlinks)
    const compressVector = async (quality = 0.72, maxDimension = 1800) => {
        const { PDFDocument, PDFName, PDFRawStream } = await import("pdf-lib");
        const arrayBuffer = await file.arrayBuffer();
        const doc = await PDFDocument.load(arrayBuffer, { ignoreEncryption: true });

        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d", { alpha: false });

        let imageCount = 0;
        let imagesCompressed = 0;

        for (const [ref, obj] of doc.context.enumerateIndirectObjects()) {
            if (obj && obj.dict) {
                const subtype = obj.dict.get(PDFName.of("Subtype"));
                const filter = obj.dict.get(PDFName.of("Filter"));

                if (subtype?.toString() === "/Image" && filter?.toString() === "/DCTDecode") {
                    imageCount++;
                    const rawBytes = obj.contents;
                    if (rawBytes && rawBytes.length > 25000) { // Recompress images > 25KB
                        try {
                            const blob = new Blob([rawBytes], { type: "image/jpeg" });
                            const bitmap = await createImageBitmap(blob);
                            let targetWidth = bitmap.width;
                            let targetHeight = bitmap.height;

                            if (Math.max(targetWidth, targetHeight) > maxDimension) {
                                const ratio = maxDimension / Math.max(targetWidth, targetHeight);
                                targetWidth = Math.max(1, Math.round(targetWidth * ratio));
                                targetHeight = Math.max(1, Math.round(targetHeight * ratio));
                            }

                            canvas.width = targetWidth;
                            canvas.height = targetHeight;
                            ctx.drawImage(bitmap, 0, 0, targetWidth, targetHeight);
                            if (bitmap.close) bitmap.close();

                            const compressedBytes = await new Promise((resolve) => {
                                canvas.toBlob((b) => {
                                    if (b) b.arrayBuffer().then(resolve);
                                    else resolve(null);
                                }, "image/jpeg", quality);
                            });

                            if (compressedBytes && compressedBytes.byteLength < rawBytes.length * 0.90) {
                                const dictObj = {
                                    Type: "XObject",
                                    Subtype: "Image",
                                    Filter: "DCTDecode",
                                    Width: targetWidth,
                                    Height: targetHeight,
                                    BitsPerComponent: 8,
                                    ColorSpace: "DeviceRGB",
                                };
                                const smask = obj.dict.get(PDFName.of("SMask"));
                                if (smask) dictObj.SMask = smask;

                                const newStream = PDFRawStream.of(doc.context.obj(dictObj), new Uint8Array(compressedBytes));
                                doc.context.assign(ref, newStream);
                                imagesCompressed++;
                            }
                        } catch (imgErr) {
                            console.warn("Could not recompress embedded image:", imgErr);
                        }
                    }
                }
            }
        }

        const savedBytes = await doc.save({ useObjectStreams: true });
        return { bytes: savedBytes, imagesCompressed, imageCount };
    };

    // 2. High-Fidelity Raster Page Compression (For scanned documents or strong mode)
    const compressRaster = async (targetScale = 1.35, quality = 0.60, maxDimension = 1400) => {
        const { PDFDocument } = await import("pdf-lib");
        const pdfjs = await getPdfjs();
        const arrayBuffer = await file.arrayBuffer();
        const pdf = await pdfjs.getDocument(arrayBuffer).promise;
        const newDoc = await PDFDocument.create();
        const totalPages = pdf.numPages;

        const canvas = document.createElement("canvas");
        const context = canvas.getContext("2d", { alpha: false });

        for (let i = 1; i <= totalPages; i++) {
            setProgress(Math.round(((i - 1) / totalPages) * 100));
            const page = await pdf.getPage(i);

            let viewport = page.getViewport({ scale: targetScale });
            const maxDim = Math.max(viewport.width, viewport.height);
            if (maxDim > maxDimension) {
                const adjustedScale = (targetScale * maxDimension) / maxDim;
                viewport = page.getViewport({ scale: adjustedScale });
            }

            canvas.width = Math.round(viewport.width);
            canvas.height = Math.round(viewport.height);

            // Fill white background to avoid black rectangles on transparent pages
            context.fillStyle = "#ffffff";
            context.fillRect(0, 0, canvas.width, canvas.height);

            await page.render({ canvasContext: context, viewport: viewport }).promise;

            const imageBytes = await new Promise((resolve, reject) => {
                canvas.toBlob((blob) => {
                    if (blob) {
                        blob.arrayBuffer().then(resolve).catch(reject);
                    } else {
                        try {
                            const dataUrl = canvas.toDataURL("image/jpeg", quality);
                            fetch(dataUrl).then((res) => res.arrayBuffer()).then(resolve).catch(reject);
                        } catch (e) {
                            reject(e);
                        }
                    }
                }, "image/jpeg", quality);
            });

            const jpgImage = await newDoc.embedJpg(imageBytes);
            const origViewport = page.getViewport({ scale: 1.0 });
            const newPage = newDoc.addPage([origViewport.width, origViewport.height]);
            newPage.drawImage(jpgImage, { x: 0, y: 0, width: origViewport.width, height: origViewport.height });
            page.cleanup();
        }
        return await newDoc.save({ useObjectStreams: true });
    };

    const handleCompress = async () => {
        setIsProcessing(true);
        setStatus("processing");
        setProgress(0);
        setResultUrl(null);

        try {
            let bestBytes = null;

            if (mode === "light") {
                // Temel Sıkıştırma: Vektör korumalı görsel optimizasyonu
                const vectorResult = await compressVector(0.72, 1800);
                if (vectorResult.bytes.byteLength < originalSize * 0.98) {
                    bestBytes = vectorResult.bytes;
                } else if (originalSize > 700 * 1024) {
                    // 700KB üzeri taranmış/ham Flate dökümanlar için yüksek kaliteli raster
                    const rasterBytes = await compressRaster(1.35, 0.70, 1600);
                    bestBytes = rasterBytes.byteLength < originalSize ? rasterBytes : vectorResult.bytes;
                } else {
                    bestBytes = vectorResult.bytes;
                }
            } else {
                // Güçlü Sıkıştırma: Maksimum küçültme
                const rasterBytes = await compressRaster(1.25, 0.58, 1400);
                if (rasterBytes.byteLength < originalSize) {
                    bestBytes = rasterBytes;
                } else {
                    // Metin dökümanlarında raster büyütmüş olabilir; vektör dene
                    const vectorResult = await compressVector(0.65, 1400);
                    if (vectorResult.bytes.byteLength < originalSize) {
                        bestBytes = vectorResult.bytes;
                    } else {
                        bestBytes = rasterBytes.byteLength < vectorResult.bytes.byteLength ? rasterBytes : vectorResult.bytes;
                    }
                }
            }

            setProgress(100);
            const blob = new Blob([bestBytes], { type: "application/pdf" });

            if (blob.size < originalSize) {
                setNewSize(blob.size);
                setResultUrl(URL.createObjectURL(blob));
            } else {
                setNewSize(originalSize);
                setResultUrl(URL.createObjectURL(file));
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
        const isReduced = newSize < originalSize;
        const reductionPercent = isReduced ? Math.round(((originalSize - newSize) / originalSize) * 100) : 0;

        return (
            <div className="max-w-md mx-auto bg-white p-8 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 text-center space-y-6">
                <div className={cn("w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4", isReduced ? "bg-green-100 text-green-600" : "bg-blue-100 text-blue-600")}>
                    <CheckCircle2 size={32} />
                </div>
                <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">
                        {isReduced ? (dict?.tools?.compress?.editor?.success || "Sıkıştırma Başarılı!") : "Dosyanız Zaten Optimize!"}
                    </h3>
                    {isReduced ? (
                        <>
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
                                {(dict?.tools?.compress?.editor?.reduction || "{percent}% reduction").replace("{percent}", reductionPercent)}
                            </p>
                        </>
                    ) : (
                        <div className="p-4 bg-slate-50 rounded-xl text-sm text-slate-600 mt-4">
                            <p className="font-medium text-slate-800 mb-1">Dosya Boyutu: {formatSize(originalSize)}</p>
                            <p className="text-xs text-slate-500">
                                Bu belge zaten minimum dosya boyutunda ve en verimli şekilde optimize edilmiştir.
                            </p>
                        </div>
                    )}
                </div>
                <div className="grid gap-3">
                    <a href={resultUrl} download={`compressed-${file.name}`} className="w-full">
                        <Button className="w-full bg-green-600 hover:bg-green-700 h-12 text-lg">
                            <FileDown className="mr-2" size={20} />
                            {dict?.tools?.compress?.editor?.download || "PDF İndir"}
                        </Button>
                    </a>
                    <Button variant="ghost" onClick={onBack} className="text-slate-500">
                        {dict?.tools?.compress?.editor?.compressAnother || "Başka Dosya Sıkıştır"}
                    </Button>
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-center gap-2">
                    <a
                        href={`https://api.whatsapp.com/send?text=${encodeURIComponent("KeepPDF ile PDF dosyamı ücretsiz ve anında küçülttüm, sen de dene: https://keep-pdf.online")}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-emerald-50 hover:bg-emerald-100 text-emerald-700 text-xs font-semibold rounded-lg transition-colors"
                    >
                        <Share2 size={13} />
                        <span>WhatsApp ile Paylaş</span>
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
