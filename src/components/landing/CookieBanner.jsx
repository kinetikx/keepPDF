import { useState, useEffect } from "react";
import { Cookie } from "lucide-react";

export default function CookieBanner({ dict }) {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const consent = localStorage.getItem("cookieConsent");
        if (!consent) {
            setIsVisible(true);
        }
    }, []);

    const handleAccept = () => {
        localStorage.setItem("cookieConsent", "true");
        setIsVisible(false);
    };

    if (!isVisible) return null;

    return (
        <div className="fixed bottom-0 left-0 right-0 z-50 p-4 animate-in slide-in-from-bottom-5 duration-700">
            <div className="max-w-4xl mx-auto">
                <div className="bg-slate-900/95 backdrop-blur-md text-slate-100 rounded-xl shadow-2xl p-4 flex flex-col sm:flex-row items-center justify-between gap-4 border border-slate-700/50">
                    <div className="flex items-center gap-3">
                        <div className="p-2 bg-slate-800 rounded-lg shrink-0">
                            <Cookie size={20} className="text-amber-400" />
                        </div>
                        <p className="text-sm font-medium pr-4">
                            {dict.common.cookieBanner.text}
                        </p>
                    </div>

                    <button
                        onClick={handleAccept}
                        className="whitespace-nowrap px-6 py-2.5 bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold rounded-lg transition-all shadow-[0_4px_14px_0_rgba(37,99,235,0.2)] hover:shadow-[0_6px_20px_rgba(37,99,235,0.23)] hover:-translate-y-0.5"
                    >
                        {dict.common.cookieBanner.accept}
                    </button>
                </div>
            </div>
        </div>
    );
}
