import { Globe, Check } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { languageRegistry } from "../i18n/dictionary";

export default function LanguageSwitcher({ lang }) {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

    const languages = Object.entries(languageRegistry).map(([code, info]) => ({
        code,
        label: info.name,
        flag: info.flag,
    }));

    const handleSwitch = (newLang) => {
        if (newLang === lang) {
            setIsOpen(false);
            return;
        }

        const pathname = window.location.pathname;
        const segments = pathname.split("/");
        // segments[0] is empty, segments[1] is currLang
        segments[1] = newLang;
        const newPath = segments.join("/");

        window.location.href = newPath;
        setIsOpen(false);
    };

    // Close dropdown when clicking outside
    useEffect(() => {
        function handleClickOutside(event) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <div className="relative" ref={dropdownRef}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center gap-1.5 px-3 py-2 text-sm font-medium text-slate-600 hover:text-brand-600 hover:bg-slate-50 rounded-full transition-all"
            >
                <Globe size={18} />
                <span className="uppercase">{lang}</span>
            </button>

            {isOpen && (
                <div className="absolute top-full right-0 mt-2 w-40 bg-white rounded-xl border border-slate-100 shadow-xl p-1 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                    {languages.map((l) => (
                        <button
                            key={l.code}
                            onClick={() => handleSwitch(l.code)}
                            className={`w-full flex items-center justify-between px-3 py-2 text-sm rounded-lg transition-colors ${lang === l.code
                                ? "bg-brand-50 text-brand-700 font-medium"
                                : "text-slate-600 hover:bg-slate-50"
                                }`}
                        >
                            <span className="flex items-center gap-2">
                                <span className="text-lg">{l.flag}</span> {l.label}
                            </span>
                            {lang === l.code && <Check size={14} />}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
}
