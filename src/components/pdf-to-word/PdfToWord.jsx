import { useState } from "react";
import { Button } from "../ui/button";
import { FileText, Loader2, Download, AlertCircle } from "lucide-react";
import { Document, Packer, Paragraph } from "docx";
import saveAs from "file-saver";

export default function PdfToWord({ dict }) {
    const [file, setFile] = useState(null);
    const [isConverting, setIsConverting] = useState(false);
    const [error, setError] = useState(null);

    const handleFileChange = (e) => {
        const selectedFile = e.target.files[0];
        if (selectedFile && selectedFile.type === "application/pdf") { setFile(selectedFile); setError(null); }
        else { setError(dict?.tools?.pdfToWord?.editor?.error); }
    };

    const convertToWord = async () => {
        if (!file) return;
        setIsConverting(true); setError(null);
        try {
            const pdfjsLib = await import("pdfjs-dist/build/pdf.mjs");
            pdfjsLib.GlobalWorkerOptions.workerSrc = '/pdf.worker.min.mjs';
            const arrayBuffer = await file.arrayBuffer();
            const pdf = await pdfjsLib.getDocument({ data: arrayBuffer }).promise;
            let extractedText = [];
            for (let i = 1; i <= pdf.numPages; i++) {
                const page = await pdf.getPage(i);
                const textContent = await page.getTextContent();
                extractedText.push(textContent.items.map(item => item.str).join(" "));
            }
            const doc = new Document({ sections: [{ properties: {}, children: extractedText.map(text => new Paragraph({ text, spacing: { after: 200 } })) }] });
            const blob = await Packer.toBlob(doc);
            saveAs(blob, file.name.replace(".pdf", ".docx"));
        } catch (err) { console.error("Conversion failed:", err); setError(dict?.tools?.pdfToWord?.editor?.conversionError); }
        finally { setIsConverting(false); }
    };

    return (
        <section className="py-20 bg-slate-50 min-h-screen">
            <div className="container-custom max-w-4xl mx-auto text-center">
                <h1 className="text-4xl font-bold text-slate-900 mb-4">{dict?.metadata?.pdfToWord?.h1 || dict?.tools?.pdfToWord?.editor?.title}</h1>
                <p className="text-slate-500 mb-12">{dict?.tools?.pdfToWord?.editor?.desc}</p>
                <div className="bg-white p-12 rounded-3xl shadow-xl border border-slate-100">
                    {!file ? (
                        <div className="relative border-2 border-dashed border-slate-200 rounded-2xl p-12 flex flex-col items-center justify-center gap-4 transition-colors hover:border-blue-400 hover:bg-blue-50/10">
                            <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mb-4"><FileText size={32} /></div>
                            <h3 className="text-xl font-medium text-slate-900">{dict?.tools?.pdfToWord?.editor?.uploadTitle}</h3>
                            <p className="text-slate-400">{dict?.tools?.pdfToWord?.editor?.uploadDesc}</p>
                            <input type="file" accept=".pdf" onChange={handleFileChange} className="absolute inset-0 w-full h-full opacity-0 cursor-pointer" />
                        </div>
                    ) : (
                        <div className="flex flex-col items-center gap-6">
                            <div className="flex items-center gap-4 p-4 bg-slate-50 rounded-xl w-full max-w-md border border-slate-200">
                                <FileText className="text-blue-600" size={24} />
                                <div className="text-left flex-1 min-w-0"><p className="font-medium text-slate-900 truncate">{file.name}</p><p className="text-sm text-slate-400">{(file.size / 1024).toFixed(2)} KB</p></div>
                                <Button variant="ghost" size="icon" onClick={() => setFile(null)}><AlertCircle size={20} className="text-slate-400 hover:text-red-500" /></Button>
                            </div>
                            {error && (<div className="text-red-500 bg-red-50 px-4 py-2 rounded-lg text-sm flex items-center gap-2"><AlertCircle size={16} /> {error}</div>)}
                            <Button size="lg" onClick={convertToWord} disabled={isConverting} className="min-w-[200px] h-12 bg-blue-600 hover:bg-blue-700">
                                {isConverting ? (<><Loader2 className="mr-2 h-4 w-4 animate-spin" /> {dict?.tools?.pdfToWord?.editor?.converting}</>) : (<><Download className="mr-2 h-4 w-4" /> {dict?.tools?.pdfToWord?.editor?.convert}</>)}
                            </Button>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}
