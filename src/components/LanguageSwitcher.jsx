import { Globe, Check } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { languageRegistry } from "../i18n/dictionary";
import { hreflangGroups } from "../data/localizedPages";

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

        const pathname = (typeof window !== "undefined" ? window.location.pathname.replace(/\/$/, '') : '') || '';

        // 1. Check if current pathname is in hreflangGroups
        const matchedGroup = Object.values(hreflangGroups).find(group =>
            Object.values(group).includes(pathname)
        );
        if (matchedGroup && matchedGroup[newLang]) {
            window.location.href = matchedGroup[newLang];
            setIsOpen(false);
            return;
        }

        // 2. Blog post fallback: if specific slug translation isn't 1:1 mapped, route to blog index
        if (pathname.includes('/blog/')) {
            window.location.href = `/${newLang}/blog`;
            setIsOpen(false);
            return;
        }

        // 3. Standard localized pages (/tr/image-to-pdf -> /en/image-to-pdf)
        const segments = pathname.split("/");
        if (segments.length >= 2) {
            segments[1] = newLang;
            window.location.href = segments.join("/") || `/${newLang}`;
        } else {
            window.location.href = `/${newLang}`;
        }
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
                aria-label="Select language"
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
