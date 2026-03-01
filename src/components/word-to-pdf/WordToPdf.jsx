import { useState } from "react";
import { Button } from "../ui/button";
import { FileText, Loader2, Download, AlertCircle } from "lucide-react";
import mammoth from "mammoth";

export default function WordToPdf({ dict }) {
    const [file, setFile] = useState(null);
    const [isConverting, setIsConverting] = useState(false);
    const [error, setError] = useState(null);

    const handleFileChange = (e) => {
        const selectedFile = e.target.files[0];
        if (selectedFile && selectedFile.name.endsWith(".docx")) { setFile(selectedFile); setError(null); }
        else { setError(dict?.tools?.wordToPdf?.editor?.error); }
    };

    const convertToPdf = async () => {
        if (!file) return;
        setIsConverting(true); setError(null);
        try {
            const arrayBuffer = await file.arrayBuffer();
            const result = await mammoth.convertToHtml({ arrayBuffer });
            const htmlContent = `<html><head><style>body{font-family:Arial,sans-serif;padding:20px;line-height:1.6}p{margin-bottom:1em}h1,h2,h3{margin-top:1.5em;margin-bottom:0.5em}table{border-collapse:collapse;width:100%;margin-bottom:1em}td,th{border:1px solid #ddd;padding:8px}</style></head><body>${result.value}</body></html>`;
            const html2pdf = (await import("html2pdf.js")).default;
            await html2pdf().set({ margin: 10, filename: file.name.replace(".docx", ".pdf"), image: { type: "jpeg", quality: 0.98 }, html2canvas: { scale: 2 }, jsPDF: { unit: "mm", format: "a4", orientation: "portrait" } }).from(htmlContent).save();
        } catch (err) { console.error("Conversion failed:", err); setError(dict?.tools?.wordToPdf?.editor?.conversionError); }
        finally { setIsConverting(false); }
    };

    return (
        <section className="py-20 bg-slate-50 min-h-screen">
            <div className="container-custom max-w-4xl mx-auto text-center">
                <h1 className="text-4xl font-bold text-slate-900 mb-4">{dict?.metadata?.wordToPdf?.h1 || dict?.tools?.wordToPdf?.editor?.title}</h1>
                <p className="text-slate-500 mb-12">{dict?.tools?.wordToPdf?.editor?.desc}</p>
                <div className="bg-white p-12 rounded-3xl shadow-xl border border-slate-100">
                    {!file ? (
                        <div className="relative border-2 border-dashed border-slate-200 rounded-2xl p-12 flex flex-col items-center justify-center gap-4 transition-colors hover:border-blue-400 hover:bg-blue-50/10">
                            <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mb-4"><FileText size={32} /></div>
                            <h3 className="text-xl font-medium text-slate-900">{dict?.tools?.wordToPdf?.editor?.uploadTitle}</h3>
                            <p className="text-slate-400">{dict?.tools?.wordToPdf?.editor?.uploadDesc}</p>
                            <input type="file" accept=".docx" onChange={handleFileChange} className="absolute inset-0 w-full h-full opacity-0 cursor-pointer" />
                        </div>
                    ) : (
                        <div className="flex flex-col items-center gap-6">
                            <div className="flex items-center gap-4 p-4 bg-slate-50 rounded-xl w-full max-w-md border border-slate-200">
                                <FileText className="text-blue-600" size={24} />
                                <div className="text-left flex-1 min-w-0"><p className="font-medium text-slate-900 truncate">{file.name}</p><p className="text-sm text-slate-400">{(file.size / 1024).toFixed(2)} KB</p></div>
                                <Button variant="ghost" size="icon" onClick={() => setFile(null)}><AlertCircle size={20} className="text-slate-400 hover:text-red-500" /></Button>
                            </div>
                            {error && (<div className="text-red-500 bg-red-50 px-4 py-2 rounded-lg text-sm flex items-center gap-2"><AlertCircle size={16} /> {error}</div>)}
                            <Button size="lg" onClick={convertToPdf} disabled={isConverting} className="min-w-[200px] h-12 bg-blue-600 hover:bg-blue-700">
                                {isConverting ? (<><Loader2 className="mr-2 h-4 w-4 animate-spin" /> {dict?.tools?.wordToPdf?.editor?.converting}</>) : (<><Download className="mr-2 h-4 w-4" /> {dict?.tools?.wordToPdf?.editor?.convert}</>)}
                            </Button>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}
