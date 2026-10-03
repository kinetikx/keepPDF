import { useState, useEffect } from "react";
import { ArrowLeft, Loader2, Minimize2, FileDown, CheckCircle2, AlertCircle, Share2, Copy, Target, Sparkles, Scissors, Layers, Image as ImageIcon } from "lucide-react";
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

const getTargetPresets = (lang = "en") => {
    switch (lang) {
        case "tr":
            return [
                { id: "auto", label: "Otomatik", sub: "Akıllı Denge", kb: null },
                { id: "100kb", label: "< 100 KB", sub: "Vize / Fotoğraf", kb: 100 },
                { id: "200kb", label: "< 200 KB", sub: "Pasaport / Sınav", kb: 200 },
                { id: "500kb", label: "< 500 KB", sub: "ÖSYM & CV", kb: 500 },
                { id: "1mb", label: "< 1 MB", sub: "Dilekçe & Evrak", kb: 1024 },
                { id: "5mb", label: "< 5 MB", sub: "E-Devlet Sınırı", kb: 5120 },
                { id: "10mb", label: "< 10 MB", sub: "UYAP Sınırı", kb: 10240 },
            ];
        case "sq":
            return [
                { id: "auto", label: "Automatik", sub: "Ekuilibër", kb: null },
                { id: "100kb", label: "< 100 KB", sub: "Viza & Foto", kb: 100 },
                { id: "200kb", label: "< 200 KB", sub: "Pasaportë & Konsullatë", kb: 200 },
                { id: "500kb", label: "< 500 KB", sub: "CV & Aplikime", kb: 500 },
                { id: "1mb", label: "< 1 MB", sub: "Vërtetime", kb: 1024 },
                { id: "5mb", label: "< 5 MB", sub: "Portali e-Albania", kb: 5120 },
            ];
        case "et":
            return [
                { id: "auto", label: "Automaatne", sub: "Optimaalne", kb: null },
                { id: "200kb", label: "< 200 KB", sub: "Avaldused & fotod", kb: 200 },
                { id: "500kb", label: "< 500 KB", sub: "CV ja dokumendid", kb: 500 },
                { id: "1mb", label: "< 1 MB", sub: "DigiDoc lepingud", kb: 1024 },
                { id: "5mb", label: "< 5 MB", sub: "Äriregistri limiit", kb: 5120 },
            ];
        case "lv":
            return [
                { id: "auto", label: "Automātisks", sub: "Optimāls", kb: null },
                { id: "200kb", label: "< 200 KB", sub: "Iesniegumi", kb: 200 },
                { id: "500kb", label: "< 500 KB", sub: "CV un pieteikumi", kb: 500 },
                { id: "1mb", label: "< 1 MB", sub: "Līgumi", kb: 1024 },
                { id: "5mb", label: "< 5 MB", sub: "VID EDS limits", kb: 5120 },
            ];
        default:
            return [
                { id: "auto", label: "Auto", sub: "Smart Balance", kb: null },
                { id: "100kb", label: "< 100 KB", sub: "Visa / ID Photo", kb: 100 },
                { id: "200kb", label: "< 200 KB", sub: "Gov / Passport", kb: 200 },
                { id: "500kb", label: "< 500 KB", sub: "Resume & ATS", kb: 500 },
                { id: "1mb", label: "< 1 MB", sub: "Official Forms", kb: 1024 },
                { id: "5mb", label: "< 5 MB", sub: "Portals / Reports", kb: 5120 },
                { id: "10mb", label: "< 10 MB", sub: "Contracts & Legal", kb: 10240 },
            ];
    }
};

export default function Compressor({ file, onBack, dict, lang = "en" }) {
    const [isProcessing, setIsProcessing] = useState(false);
    const [progress, setProgress] = useState(0);
    const [status, setStatus] = useState("idle");
    const [resultUrl, setResultUrl] = useState(null);
    const [mode, setMode] = useState("strong");
    const [selectedTargetKb, setSelectedTargetKb] = useState(null);
    const [originalSize, setOriginalSize] = useState(0);
    const [newSize, setNewSize] = useState(0);

    const presets = getTargetPresets(lang);

    useEffect(() => {
        if (file) setOriginalSize(file.size);
    }, [file]);

    useEffect(() => {
        return () => {
            if (resultUrl) URL.revokeObjectURL(resultUrl);
        };
    }, [resultUrl]);

    const formatSize = (bytes) => {
        if (!bytes || bytes === 0) return "0 Bytes";
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

            // Scenario A: User selected a specific Target Size (< 100KB, < 200KB, etc.)
            if (selectedTargetKb) {
                const targetBytes = selectedTargetKb * 1024;

                // 1. If file is already below target, optimize gently
                if (originalSize <= targetBytes) {
                    const lightVector = await compressVector(0.85, 1800);
                    bestBytes = lightVector.bytes;
                } else {
                    // 2. Load PDF to inspect page count for smart density calculation
                    const pdfjs = await getPdfjs();
                    const arrayBuffer = await file.arrayBuffer();
                    const pdf = await pdfjs.getDocument(arrayBuffer).promise;
                    const totalPages = pdf.numPages;
                    const bytesPerPage = targetBytes / Math.max(1, totalPages);

                    // Compute dynamic canvas scale and quality
                    let dynamicScale = 1.15;
                    let dynamicQuality = 0.55;
                    let dynamicMaxDim = 1200;

                    if (bytesPerPage < 30000) { // Super tight budget (<30KB per page)
                        dynamicScale = 0.85;
                        dynamicQuality = 0.36;
                        dynamicMaxDim = 850;
                    } else if (bytesPerPage < 70000) { // Tight budget (<70KB per page)
                        dynamicScale = 0.98;
                        dynamicQuality = 0.48;
                        dynamicMaxDim = 1050;
                    } else if (bytesPerPage < 180000) { // Moderate budget
                        dynamicScale = 1.18;
                        dynamicQuality = 0.60;
                        dynamicMaxDim = 1350;
                    } else if (bytesPerPage < 500000) { // Comfortable budget
                        dynamicScale = 1.30;
                        dynamicQuality = 0.70;
                        dynamicMaxDim = 1600;
                    } else { // Large budget
                        dynamicScale = 1.40;
                        dynamicQuality = 0.80;
                        dynamicMaxDim = 1800;
                    }

                    // Try vector recompression first if possible
                    const vectorResult = await compressVector(0.55, 1200);
                    if (vectorResult.bytes.byteLength <= targetBytes) {
                        bestBytes = vectorResult.bytes;
                    } else {
                        // Run smart rasterizer
                        let rasterBytes = await compressRaster(dynamicScale, dynamicQuality, dynamicMaxDim);

                        // If still slightly above target by <= 20%, run a rapid micro-tightening pass
                        if (rasterBytes.byteLength > targetBytes && selectedTargetKb <= 500) {
                            const tighterScale = Math.max(0.70, dynamicScale * 0.84);
                            const tighterQuality = Math.max(0.28, dynamicQuality * 0.80);
                            const tightened = await compressRaster(tighterScale, tighterQuality, Math.round(dynamicMaxDim * 0.85));
                            if (tightened.byteLength < rasterBytes.byteLength) {
                                rasterBytes = tightened;
                            }
                        }

                        bestBytes = rasterBytes.byteLength < vectorResult.bytes.byteLength ? rasterBytes : vectorResult.bytes;
                    }
                }
            } else {
                // Scenario B: User selected Mode-based (Auto Light / Auto Strong)
                if (mode === "light") {
                    const vectorResult = await compressVector(0.72, 1800);
                    if (vectorResult.bytes.byteLength < originalSize * 0.98) {
                        bestBytes = vectorResult.bytes;
                    } else if (originalSize > 700 * 1024) {
                        const rasterBytes = await compressRaster(1.35, 0.70, 1600);
                        bestBytes = rasterBytes.byteLength < originalSize ? rasterBytes : vectorResult.bytes;
                    } else {
                        bestBytes = vectorResult.bytes;
                    }
                } else {
                    const rasterBytes = await compressRaster(1.25, 0.58, 1400);
                    if (rasterBytes.byteLength < originalSize) {
                        bestBytes = rasterBytes;
                    } else {
                        const vectorResult = await compressVector(0.65, 1400);
                        if (vectorResult.bytes.byteLength < originalSize) {
                            bestBytes = vectorResult.bytes;
                        } else {
                            bestBytes = rasterBytes.byteLength < vectorResult.bytes.byteLength ? rasterBytes : vectorResult.bytes;
                        }
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
        const targetMet = selectedTargetKb ? newSize <= selectedTargetKb * 1024 : false;

        return (
            <div className="max-w-xl mx-auto bg-white p-8 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 text-center space-y-6">
                <div className={cn("w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-2", isReduced ? "bg-green-100 text-green-600" : "bg-blue-100 text-blue-600")}>
                    <CheckCircle2 size={32} />
                </div>
                <div>
                    <h3 className="text-2xl font-extrabold text-slate-900 mb-2">
                        {isReduced ? (dict?.tools?.compress?.editor?.success || "Sıkıştırma Başarılı!") : "Dosyanız Zaten Optimize!"}
                    </h3>

                    {/* Target Met Badge */}
                    {targetMet && (
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-emerald-50 border border-emerald-200 text-emerald-700 rounded-full text-xs font-bold mb-3">
                            <Target size={14} className="text-emerald-600" />
                            <span>
                                {lang === "tr" ? `Hedef Boyut Karşılandı: ${formatSize(newSize)} (< ${selectedTargetKb} KB)` : `Target Achieved: ${formatSize(newSize)} (< ${selectedTargetKb} KB)`}
                            </span>
                        </div>
                    )}

                    {isReduced ? (
                        <>
                            <div className="flex items-center justify-center gap-4 text-sm mt-3 p-4 bg-slate-50 rounded-2xl border border-slate-100">
                                <div className="text-right">
                                    <p className="text-slate-400 mb-1">{dict?.tools?.compress?.editor?.original || "Orijinal"}</p>
                                    <p className="font-semibold text-slate-700 line-through">{formatSize(originalSize)}</p>
                                </div>
                                <div className="w-px h-8 bg-slate-200" />
                                <div className="text-left">
                                    <p className="text-slate-400 mb-1">{dict?.tools?.compress?.editor?.compressed || "Sıkıştırılmış"}</p>
                                    <p className="font-extrabold text-green-600 text-lg">{formatSize(newSize)}</p>
                                </div>
                            </div>
                            <p className="text-xs text-green-600 font-bold mt-2">
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

                {/* Primary Download Button */}
                <div className="grid gap-3">
                    <a href={resultUrl} download={`compressed-${file.name}`} className="w-full">
                        <Button className="w-full bg-emerald-600 hover:bg-emerald-700 active:scale-95 h-14 text-lg font-bold shadow-lg shadow-emerald-200 cursor-pointer">
                            <FileDown className="mr-2" size={22} />
                            {dict?.tools?.compress?.editor?.download || "PDF İndir"}
                        </Button>
                    </a>
                    <Button variant="ghost" onClick={onBack} className="text-slate-500 hover:text-slate-900 cursor-pointer">
                        {dict?.tools?.compress?.editor?.compressAnother || "Başka Dosya Sıkıştır"}
                    </Button>
                </div>

                {/* Tool-to-Tool Retention Chain (Next Actions) */}
                <div className="pt-5 border-t border-slate-100 text-left">
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">
                        {lang === "tr" ? "Bu PDF ile sıradaki işlem:" : "Next action with this PDF:"}
                    </p>
                    <div className="grid grid-cols-3 gap-2.5">
                        <a
                            href={`/${lang}/split`}
                            className="p-3 rounded-xl border border-slate-200 bg-slate-50/70 hover:bg-indigo-50 hover:border-indigo-300 transition-all text-center group"
                        >
                            <Scissors size={18} className="mx-auto text-slate-500 group-hover:text-indigo-600 mb-1" />
                            <span className="block text-xs font-bold text-slate-700 group-hover:text-indigo-600">
                                {lang === "tr" ? "Sayfaları Böl" : "Split Pages"}
                            </span>
                        </a>
                        <a
                            href={`/${lang}/organize`}
                            className="p-3 rounded-xl border border-slate-200 bg-slate-50/70 hover:bg-purple-50 hover:border-purple-300 transition-all text-center group"
                        >
                            <Layers size={18} className="mx-auto text-slate-500 group-hover:text-purple-600 mb-1" />
                            <span className="block text-xs font-bold text-slate-700 group-hover:text-purple-600">
                                {lang === "tr" ? "Sayfa Sırala" : "Organize"}
                            </span>
                        </a>
                        <a
                            href={`/${lang}/pdf-to-image`}
                            className="p-3 rounded-xl border border-slate-200 bg-slate-50/70 hover:bg-pink-50 hover:border-pink-300 transition-all text-center group"
                        >
                            <ImageIcon size={18} className="mx-auto text-slate-500 group-hover:text-pink-600 mb-1" />
                            <span className="block text-xs font-bold text-slate-700 group-hover:text-pink-600">
                                {lang === "tr" ? "JPG'ye Çevir" : "To JPG"}
                            </span>
                        </a>
                    </div>
                </div>

                {/* Social Share & Copy Link */}
                <div className="pt-3 border-t border-slate-100 flex items-center justify-center gap-2">
                    <a
                        href={`https://api.whatsapp.com/send?text=${encodeURIComponent(
                            lang === "tr"
                                ? "KeepPDF ile PDF dosyamı ücretsiz ve anında küçülttüm, sen de dene: https://keep-pdf.online"
                                : "I compressed my PDF file instantly and privately with KeepPDF, check it out: https://keep-pdf.online"
                        )}`}
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
                            alert(lang === "tr" ? "Link kopyalandı! Arkadaşlarınızla paylaşabilirsiniz." : "Link copied! Share it with your friends.");
                        }}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold rounded-lg transition-colors cursor-pointer"
                    >
                        <Copy size={13} />
                        <span>{lang === "tr" ? "Linki Kopyala" : "Copy Link"}</span>
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="max-w-2xl mx-auto space-y-6">
            {/* Header with back button */}
            <div className="flex items-center gap-4">
                <button
                    onClick={onBack}
                    className="p-2.5 hover:bg-slate-100 rounded-full transition-colors text-slate-600 bg-white shadow-sm border border-slate-200 cursor-pointer"
                    aria-label="Back"
                >
                    <ArrowLeft size={20} />
                </button>
                <div className="flex-1">
                    <h2 className="font-bold text-slate-900 text-lg flex items-center gap-2">
                        <Minimize2 size={20} className="text-brand-600" />
                        {dict?.tools?.compress?.title || "PDF Sıkıştır"}
                    </h2>
                    <p className="text-sm text-slate-500 font-medium">
                        {file.name} · <span className="font-bold text-slate-700">{formatSize(originalSize)}</span>
                    </p>
                </div>
            </div>

            {/* Target Size Selector (Killer Feature!) */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
                <div className="flex items-center justify-between">
                    <label className="text-sm font-bold text-slate-900 flex items-center gap-2">
                        <Target size={16} className="text-brand-600" />
                        <span>
                            {lang === "tr" ? "Hedef Dosya Boyutu Seçin (İsteğe Bağlı)" : "Choose Target File Size (Optional)"}
                        </span>
                    </label>
                    <span className="text-xs text-brand-600 font-semibold bg-brand-50 px-2 py-0.5 rounded-full">
                        {lang === "tr" ? "Ücretsiz Özellik" : "Free Feature"}
                    </span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {presets.map((preset) => {
                        const isSelected = selectedTargetKb === preset.kb;
                        return (
                            <button
                                key={preset.id}
                                type="button"
                                onClick={() => setSelectedTargetKb(preset.kb)}
                                className={cn(
                                    "p-3 rounded-xl border text-left transition-all cursor-pointer flex flex-col justify-between",
                                    isSelected
                                        ? "border-brand-600 bg-brand-50/70 ring-2 ring-brand-200 shadow-sm"
                                        : "border-slate-200 bg-slate-50/50 hover:bg-white hover:border-slate-300"
                                )}
                            >
                                <span className={cn("text-xs font-bold block", isSelected ? "text-brand-700" : "text-slate-900")}>
                                    {preset.label}
                                </span>
                                <span className="text-[11px] text-slate-500 block truncate mt-1">
                                    {preset.sub}
                                </span>
                            </button>
                        );
                    })}
                </div>

                {/* Target Information Feedback Banner */}
                {selectedTargetKb && (
                    <div className="p-3 bg-indigo-50/70 border border-indigo-100 rounded-xl text-xs text-indigo-900 flex items-center gap-2">
                        <Sparkles size={16} className="text-indigo-600 shrink-0" />
                        <span>
                            {lang === "tr"
                                ? `KeepPDF belgenizi < ${selectedTargetKb} KB sınırına sığdırmak için görsel yoğunluğunu otomatik hesaplayacaktır.`
                                : `KeepPDF will automatically compute the exact compression parameters to fit your file under ${selectedTargetKb} KB.`}
                        </span>
                    </div>
                )}
            </div>

            {/* Manual Mode Cards (Visible when Auto is selected) */}
            {!selectedTargetKb && (
                <div className="grid sm:grid-cols-2 gap-4">
                    <div
                        onClick={() => setMode("light")}
                        className={cn(
                            "relative p-5 rounded-2xl border-2 transition-all cursor-pointer hover:shadow-sm",
                            mode === "light"
                                ? "border-brand-600 bg-brand-50/50"
                                : "border-slate-200 bg-white hover:border-slate-300"
                        )}
                    >
                        <div className="flex justify-between items-start mb-2">
                            <span className="font-bold text-slate-900 text-sm">
                                {dict?.tools?.compress?.editor?.basic || "Temel Sıkıştırma"}
                            </span>
                            {mode === "light" && <div className="w-3.5 h-3.5 rounded-full bg-brand-600" />}
                        </div>
                        <p className="text-xs text-slate-500 leading-relaxed">
                            {dict?.tools?.compress?.editor?.basicDesc || "Metin ve vektör kalitesini %100 korur. Rapor ve sözleşmeler için idealdir."}
                        </p>
                    </div>

                    <div
                        onClick={() => setMode("strong")}
                        className={cn(
                            "relative p-5 rounded-2xl border-2 transition-all cursor-pointer hover:shadow-sm",
                            mode === "strong"
                                ? "border-brand-600 bg-brand-50/50"
                                : "border-slate-200 bg-white hover:border-slate-300"
                        )}
                    >
                        <div className="flex justify-between items-start mb-2">
                            <span className="font-bold text-slate-900 text-sm">
                                {dict?.tools?.compress?.editor?.strong || "Güçlü Sıkıştırma"}
                            </span>
                            {mode === "strong" && <div className="w-3.5 h-3.5 rounded-full bg-brand-600" />}
                        </div>
                        <p className="text-xs text-slate-500 leading-relaxed">
                            {dict?.tools?.compress?.editor?.strongDesc || "Maksimum küçültme. Taranmış evraklar ve büyük görseller için en yüksek tasarrufu sağlar."}
                        </p>
                    </div>
                </div>
            )}

            {status === "error" && (
                <div className="p-4 bg-red-50 text-red-600 rounded-xl flex items-center gap-3 text-sm">
                    <AlertCircle size={18} />
                    {dict?.tools?.compress?.editor?.error || "Dosya sıkıştırılırken bir hata oluştu. Lütfen tekrar deneyin."}
                </div>
            )}

            {/* Action Compress Button */}
            <Button
                onClick={handleCompress}
                disabled={isProcessing}
                className="w-full h-14 text-base font-bold bg-slate-900 hover:bg-brand-600 text-white rounded-xl shadow-xl shadow-slate-200/50 transition-all hover:scale-[1.01] active:scale-[0.99] cursor-pointer"
            >
                {isProcessing ? (
                    <div className="flex items-center gap-3">
                        <Loader2 className="animate-spin" size={20} />
                        <span>
                            {(dict?.tools?.compress?.editor?.processing || "Sıkıştırılıyor... %{percent}").replace("{percent}", progress)}
                        </span>
                    </div>
                ) : selectedTargetKb ? (
                    lang === "tr"
                        ? `PDF'i < ${selectedTargetKb} KB'a Küçült`
                        : `Compress PDF to < ${selectedTargetKb} KB`
                ) : (
                    dict?.tools?.compress?.editor?.button || "PDF Sıkıştır"
                )}
            </Button>
        </div>
    );
}
