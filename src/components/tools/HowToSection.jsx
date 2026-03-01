import { howTo } from "../../data/howTo";
import { Scissors, Files, Minimize2, Image, FileText, FileSpreadsheet, FileCode, CheckCircle, UploadCloud, DownloadCloud, PenTool, ScanLine, LayoutTemplate, Settings2 } from "lucide-react";

const getTheme = (slug) => {
    const themes = {
        split: { color: "text-orange-500", bg: "bg-orange-50", iconBg: "bg-orange-500", ring: "ring-orange-100", blob: "bg-orange-200" },
        "merge-pdf": { color: "text-pink-500", bg: "bg-pink-50", iconBg: "bg-pink-500", ring: "ring-pink-100", blob: "bg-pink-200" },
        compress: { color: "text-red-500", bg: "bg-red-50", iconBg: "bg-red-500", ring: "ring-red-100", blob: "bg-red-200" },
        organize: { color: "text-purple-500", bg: "bg-purple-50", iconBg: "bg-purple-500", ring: "ring-purple-100", blob: "bg-purple-200" },
        "image-to-pdf": { color: "text-blue-500", bg: "bg-blue-50", iconBg: "bg-blue-500", ring: "ring-blue-100", blob: "bg-blue-200" },
        "pdf-to-word": { color: "text-blue-600", bg: "bg-blue-100", iconBg: "bg-blue-600", ring: "ring-blue-200", blob: "bg-blue-300" },
        "word-to-pdf": { color: "text-blue-600", bg: "bg-blue-100", iconBg: "bg-blue-600", ring: "ring-blue-200", blob: "bg-blue-300" },
        "pdf-to-image": { color: "text-pink-500", bg: "bg-pink-50", iconBg: "bg-pink-500", ring: "ring-pink-100", blob: "bg-pink-200" },
        "sign-pdf": { color: "text-purple-600", bg: "bg-purple-100", iconBg: "bg-purple-600", ring: "ring-purple-200", blob: "bg-purple-300" },
        "edit-pdf": { color: "text-cyan-500", bg: "bg-cyan-50", iconBg: "bg-cyan-500", ring: "ring-cyan-100", blob: "bg-cyan-200" },
        "pdf-to-txt": { color: "text-orange-600", bg: "bg-orange-100", iconBg: "bg-orange-600", ring: "ring-orange-200", blob: "bg-orange-300" },
        "pdf-to-excel": { color: "text-green-500", bg: "bg-green-50", iconBg: "bg-green-500", ring: "ring-green-100", blob: "bg-green-200" },
        "ocr-pdf": { color: "text-indigo-500", bg: "bg-indigo-50", iconBg: "bg-indigo-500", ring: "ring-indigo-100", blob: "bg-indigo-200" },
    };
    return themes[slug] || themes["merge-pdf"];
};

const getIcon = (slug, className) => {
    const icons = {
        split: <Scissors className={className} />,
        "merge-pdf": <Files className={className} />,
        compress: <Minimize2 className={className} />,
        organize: <LayoutTemplate className={className} />,
        "image-to-pdf": <Image className={className} />,
        "pdf-to-word": <FileText className={className} />,
        "word-to-pdf": <FileText className={className} />,
        "pdf-to-image": <Image className={className} />,
        "sign-pdf": <PenTool className={className} />,
        "edit-pdf": <Settings2 className={className} />,
        "pdf-to-txt": <FileCode className={className} />,
        "pdf-to-excel": <FileSpreadsheet className={className} />,
        "ocr-pdf": <ScanLine className={className} />,
    };
    return icons[slug] || <CheckCircle className={className} />;
};

export default function HowToSection({ slug, lang }) {
    const toolData = howTo[slug];
    if (!toolData || !toolData[lang]) return null;

    const data = toolData[lang];
    const theme = getTheme(slug);

    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="container-custom max-w-6xl">
                <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

                    {/* Left Column: Playful Illustration */}
                    <div className="w-full lg:w-1/2 relative flex justify-center items-center">
                        {/* Background Blob/Glow */}
                        <div className={`absolute w-80 h-80 ${theme.blob} rounded-full blur-3xl opacity-30`}></div>
                        <div className={`absolute top-10 right-10 w-64 h-64 bg-slate-200 rounded-full blur-3xl opacity-20`}></div>

                        {/* Illustration Composition */}
                        <div className="relative w-full max-w-md h-96 flex items-center justify-center">

                            {/* Fake Browser Window Backdrop */}
                            <div className="absolute top-8 left-0 right-12 bottom-16 bg-white rounded-xl shadow-xl border border-slate-200 overflow-hidden transform -rotate-2 hover:rotate-0 transition-transform duration-500">
                                {/* Browser Top Bar */}
                                <div className="h-8 bg-slate-50 border-b border-slate-200 flex items-center px-4 gap-1.5">
                                    <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
                                    <div className="w-2.5 h-2.5 rounded-full bg-amber-400"></div>
                                    <div className="w-2.5 h-2.5 rounded-full bg-green-400"></div>
                                </div>
                                {/* Browser Content Stub */}
                                <div className="p-6">
                                    <div className="w-full h-32 border-2 border-dashed border-slate-200 rounded-lg flex items-center justify-center mb-4">
                                        <UploadCloud className="w-10 h-10 text-slate-300" />
                                    </div>
                                    <div className="w-3/4 h-3 bg-slate-100 rounded-full mb-3"></div>
                                    <div className="w-1/2 h-3 bg-slate-100 rounded-full"></div>
                                </div>
                            </div>

                            {/* Overlapping Main PDF Document */}
                            <div className="absolute top-16 right-4 w-56 h-72 bg-white rounded-xl shadow-2xl border border-slate-200 flex flex-col items-center justify-center transform rotate-3 hover:rotate-6 hover:-translate-y-2 transition-all duration-500">

                                {/* Red PDF Badge */}
                                <div className="absolute top-6 -left-4 bg-red-500 text-white font-black text-sm px-4 py-1.5 rounded-md shadow-lg transform -rotate-6">
                                    PDF
                                </div>

                                {/* Document Lines */}
                                <div className="w-32 h-2.5 bg-slate-100 rounded-full mb-4 mt-8"></div>
                                <div className="w-40 h-2.5 bg-slate-100 rounded-full mb-4"></div>
                                <div className="w-36 h-2.5 bg-slate-100 rounded-full mb-8"></div>

                                {/* Dynamic Tool Icon Circle */}
                                <div className={`w-20 h-20 rounded-2xl ${theme.bg} ring-8 ${theme.ring} flex items-center justify-center shadow-inner`}>
                                    {getIcon(slug, `w-10 h-10 ${theme.color}`)}
                                </div>
                            </div>

                            {/* Decorative floating squiggles */}
                            <svg className={`absolute -bottom-4 -left-4 w-12 h-12 ${theme.color} opacity-40`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M4 12v.01M8 12v.01M12 12v.01M16 12v.01M20 12v.01M12 4v.01M12 8v.01M12 16v.01M12 20v.01" />
                            </svg>
                            <svg className={`absolute top-4 right-0 w-8 h-8 text-amber-400 opacity-60`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="m12 3 2 6h6l-5 4 2 6-5-4-5 4 2-6-5-4h6z" />
                            </svg>
                        </div>
                    </div>

                    {/* Right Column: Steps (How it works) */}
                    <div className="w-full lg:w-1/2">
                        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">
                            {data.title}
                        </h2>
                        <p className="text-lg text-slate-500 mb-10 leading-relaxed">
                            {data.subtitle}
                        </p>

                        <div className="space-y-8 relative">
                            {/* Dotted vertical connecting line matching the screenshot */}
                            <div className="absolute left-[19px] top-6 bottom-6 w-px border-l-2 border-dotted border-slate-300"></div>

                            {data.steps.map((step, index) => (
                                <div key={index} className="flex gap-6 relative z-10">
                                    <div className={`shrink-0 w-10 h-10 rounded-full ${theme.iconBg} text-white font-bold flex items-center justify-center shadow-md ring-4 ring-white`}>
                                        {index + 1}
                                    </div>
                                    <div className="pt-2">
                                        <p className="text-slate-700 text-[17px] leading-relaxed font-medium">
                                            {step}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="mt-12">
                            <button className={`px-8 py-3.5 ${theme.iconBg} text-white font-bold rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all text-sm uppercase tracking-wider`}>
                                {data.title.includes("Nasıl") ? "Hemen Başla" : "Get Started Now"}
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
