import { useState } from "react";
import PDFDropzone from "../landing/PDFDropzone";
import Compressor from "../compress/Compressor";

export default function CompressClient({ dict }) {
    const [file, setFile] = useState(null);
    const handleFileSelect = (files) => { if (files && files.length > 0) setFile(files[0]); };
    if (file) return (<section className="py-12 bg-slate-50 min-h-screen"><div className="container-custom"><Compressor file={file} onBack={() => setFile(null)} dict={dict} /></div></section>);
    return (
        <section className="py-20 bg-slate-50 min-h-screen">
            <div className="container-custom max-w-4xl mx-auto">
                <div className="text-center mb-12"><h1 className="text-4xl font-bold text-slate-900 mb-4">{dict?.metadata?.compress?.h1 || dict?.tools?.compress?.title}</h1><p className="text-slate-500 text-lg max-w-2xl mx-auto">{dict?.tools?.compress?.description}</p></div>
                <PDFDropzone onFileSelect={handleFileSelect} title={dict?.common?.clickToUpload} limit={dict?.common?.limit} buttonText={dict?.common?.browse} />
            </div>
        </section>
    );
}
