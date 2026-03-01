import { ShieldCheck, Zap, HeartHandshake } from "lucide-react";

export default function TrustBanner({ dict }) {
    return (
        <div className="w-full relative z-20 -mt-10 mb-10 pointer-events-none">
            <div className="container-custom max-w-5xl mx-auto">
                <div className="bg-white/70 backdrop-blur-xl border border-slate-200/60 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] p-4 md:p-6 flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 overflow-hidden relative">

                    {/* Subtle aesthetic glow */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-50/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-50/50 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

                    <div className="flex items-center gap-4 relative z-10 w-full md:w-auto justify-start border-b md:border-b-0 border-slate-100 pb-4 md:pb-0">
                        <div className="w-12 h-12 bg-green-50 text-green-600 rounded-xl flex items-center justify-center shrink-0">
                            <ShieldCheck size={24} strokeWidth={2.5} />
                        </div>
                        <div>
                            <h4 className="text-slate-900 font-bold text-sm tracking-wide uppercase mb-0.5">{dict?.hero?.trustBanner?.secureTitle || "100% Private"}</h4>
                            <p className="text-slate-500 text-sm">{dict?.hero?.trustBanner?.secureDesc || "Files never leave your browser"}</p>
                        </div>
                    </div>

                    <div className="hidden md:block w-px h-12 bg-slate-200 shrink-0"></div>

                    <div className="flex items-center gap-4 relative z-10 w-full md:w-auto justify-start border-b md:border-b-0 border-slate-100 pb-4 md:pb-0">
                        <div className="w-12 h-12 bg-amber-50 text-amber-500 rounded-xl flex items-center justify-center shrink-0">
                            <Zap size={24} strokeWidth={2.5} />
                        </div>
                        <div>
                            <h4 className="text-slate-900 font-bold text-sm tracking-wide uppercase mb-0.5">{dict?.hero?.trustBanner?.fastTitle || "Instant Speed"}</h4>
                            <p className="text-slate-500 text-sm">{dict?.hero?.trustBanner?.fastDesc || "No server uploads required"}</p>
                        </div>
                    </div>

                    <div className="hidden md:block w-px h-12 bg-slate-200 shrink-0"></div>

                    <div className="flex items-center gap-4 relative z-10 w-full md:w-auto justify-start">
                        <div className="w-12 h-12 bg-indigo-50 text-indigo-500 rounded-xl flex items-center justify-center shrink-0">
                            <HeartHandshake size={24} strokeWidth={2.5} />
                        </div>
                        <div>
                            <h4 className="text-slate-900 font-bold text-sm tracking-wide uppercase mb-0.5">{dict?.hero?.trustBanner?.freeTitle || "No Limits"}</h4>
                            <p className="text-slate-500 text-sm">{dict?.hero?.trustBanner?.freeDesc || "Completely free, forever"}</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
