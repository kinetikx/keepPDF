import { useCases } from "../../data/useCases";

const IconSVGs = {
    Scale: '<path d="M16 3h5v5"/><path d="M8 3H3v5"/><path d="M12 22V8"/><path d="m3 3 5 5"/><path d="m21 3-5 5"/><path d="M4.5 16.5c-.76.76-.31 2.2.7 2.82L12 24l6.8-4.68c1.01-.62 1.46-2.06.7-2.82L12 9l-7.5 7.5z"/>',
    GraduationCap: '<path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c0 1.1 2.7 3 6 3s6-1.9 6-3v-5"/>',
    Palette: '<circle cx="13.5" cy="6.5" r="1.5"/><circle cx="17.5" cy="10.5" r="1.5"/><circle cx="8.5" cy="7.5" r="1.5"/><circle cx="6.5" cy="12.5" r="1.5"/><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"/>',
    Briefcase: '<rect width="20" height="14" x="2" y="7" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>',
    FileDigit: '<path d="M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M10 12h2v6"/><rect width="4" height="6" x="2" y="12" rx="1"/>',
    BookOpen: '<path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>',
    CheckCircle: '<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>',
};

const ColorMap = [
    { bg: 'bg-indigo-100', text: 'text-indigo-600', ring: 'ring-indigo-50', blob: 'bg-indigo-200', border: 'hover:border-indigo-200' },
    { bg: 'bg-rose-100', text: 'text-rose-600', ring: 'ring-rose-50', blob: 'bg-rose-200', border: 'hover:border-rose-200' },
    { bg: 'bg-amber-100', text: 'text-amber-600', ring: 'ring-amber-50', blob: 'bg-amber-200', border: 'hover:border-amber-200' },
];

export default function UseCaseSection({ slug, lang }) {
    const toolData = useCases[slug];
    if (!toolData || !toolData[lang]) return null;
    const data = toolData[lang];

    return (
        <section className="relative py-24 bg-gradient-to-b from-slate-50 to-white overflow-hidden border-t border-slate-200">
            {/* Decorative background blurs */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div className="absolute -top-40 -left-40 w-96 h-96 bg-brand-100/40 rounded-full blur-3xl opacity-60"></div>
                <div className="absolute top-40 right-0 w-96 h-96 bg-indigo-100/40 rounded-full blur-3xl opacity-60"></div>
            </div>

            <div className="container-custom relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">
                        {data.title}
                    </h2>
                    <div className="w-24 h-1.5 bg-brand-600 rounded-full mx-auto mb-8 opacity-80"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
                    {data.cards.map((card, index) => {
                        const colors = ColorMap[index % ColorMap.length];
                        return (
                            <div
                                key={index}
                                className={`group relative bg-white p-8 md:p-10 rounded-3xl shadow-sm border border-slate-200 ${colors.border} hover:shadow-2xl hover:shadow-slate-200/50 hover:-translate-y-2 transition-all duration-300 overflow-hidden`}
                            >
                                {/* Decorative blob behind icon */}
                                <div className={`absolute -top-10 -right-10 w-40 h-40 ${colors.blob} rounded-full blur-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500`}></div>

                                <div className="relative z-10">
                                    <div className={`w-16 h-16 ${colors.bg} rounded-2xl flex items-center justify-center mb-8 ring-8 ${colors.ring} group-hover:scale-110 transition-transform duration-300`}>
                                        <svg className={`w-8 h-8 ${colors.text}`} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"
                                            dangerouslySetInnerHTML={{ __html: IconSVGs[card.icon] || IconSVGs.CheckCircle }}
                                        />
                                    </div>
                                    <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-brand-600 transition-colors">{card.title}</h3>
                                    <p className="text-slate-500 leading-relaxed text-[17px]">{card.content}</p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
