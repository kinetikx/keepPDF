import { Button } from "../ui/button";
import { Menu, X, ChevronDown, Files, LayoutTemplate, Minimize2, FileText, Image, PenTool, FileSpreadsheet, ScanLine } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import LanguageSwitcher from "../LanguageSwitcher";

export default function Navbar({ lang, dict }) {
    const [isOpen, setIsOpen] = useState(false);
    const [hoveredMenu, setHoveredMenu] = useState(null);

    const navMenus = [
        {
            title: dict?.nav?.organize || "Organize",
            items: [
                { name: dict?.tools?.split?.title, href: "/split", icon: LayoutTemplate, desc: dict?.tools?.split?.description },
                { name: dict?.tools?.merge?.title, href: "/merge-pdf", icon: Files, desc: dict?.tools?.merge?.description },
                { name: dict?.tools?.organize?.title, href: "/organize", icon: Files, desc: dict?.tools?.organize?.description },
            ]
        },
        {
            title: dict?.nav?.optimize || "Optimize",
            items: [
                { name: dict?.tools?.compress?.title, href: "/compress", icon: Minimize2, desc: dict?.tools?.compress?.description },
            ]
        },
        {
            title: dict?.nav?.convert || "Convert",
            items: [
                { name: dict?.tools?.imageToPdf?.title, href: "/image-to-pdf", icon: Image, desc: dict?.tools?.imageToPdf?.description },
                { name: dict?.tools?.pdfToWord?.title, href: "/pdf-to-word", icon: FileText, desc: dict?.tools?.pdfToWord?.description },
                { name: dict?.tools?.wordToPdf?.title, href: "/word-to-pdf", icon: FileText, desc: dict?.tools?.wordToPdf?.description },
                { name: dict?.tools?.pdfToImage?.title, href: "/pdf-to-image", icon: FileSpreadsheet, desc: dict?.tools?.pdfToImage?.description },
            ]
        },
        {
            title: dict?.nav?.edit || "Edit",
            items: [
                { name: dict?.tools?.edit?.title, href: "/edit-pdf", icon: LayoutTemplate, desc: dict?.tools?.edit?.description, badge: dict?.common?.comingSoon },
                { name: dict?.tools?.sign?.title, href: "/sign-pdf", icon: PenTool, desc: dict?.tools?.sign?.description, badge: dict?.common?.comingSoon },
                { name: dict?.tools?.ocr?.title, href: "/ocr-pdf", icon: ScanLine, desc: dict?.tools?.ocr?.description, badge: dict?.common?.comingSoon },
            ]
        }
    ];

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
            <div className="container-custom flex items-center justify-between h-20">
                {/* Logo */}
                <a href={`/${lang}`} className="flex items-center gap-2 group z-50 relative">
                    <img
                        src="/brand-logo.svg"
                        alt="KeepPDF Logo"
                        className="w-8 h-8 rounded-lg group-hover:rotate-12 transition-transform"
                    />
                    <span className="text-xl font-bold tracking-tight text-slate-900">
                        Keep<span className="text-brand-600">PDF</span>
                    </span>
                </a>

                {/* Desktop Nav */}
                <div className="hidden lg:flex items-center gap-2">
                    {navMenus.map((menu) => (
                        <div
                            key={menu.title}
                            className="relative"
                            onMouseEnter={() => setHoveredMenu(menu.title)}
                            onMouseLeave={() => setHoveredMenu(null)}
                        >
                            <button className="flex items-center gap-1.5 px-4 py-2 text-sm font-medium text-slate-600 hover:text-brand-600 hover:bg-slate-50 rounded-full transition-all">
                                {menu.title}
                                <ChevronDown
                                    size={14}
                                    className={`transition-transform duration-200 ${hoveredMenu === menu.title ? "rotate-180" : ""}`}
                                />
                            </button>

                            {/* Dropdown Menu */}
                            <AnimatePresence>
                                {hoveredMenu === menu.title && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                        animate={{ opacity: 1, y: 0, scale: 1 }}
                                        exit={{ opacity: 0, y: 5, scale: 0.95 }}
                                        transition={{ duration: 0.15 }}
                                        className="absolute top-full text-left left-0 w-64 pt-2"
                                    >
                                        <div className="bg-white rounded-xl border border-slate-100 shadow-xl p-2 overflow-hidden">
                                            {menu.items.map((item) => (
                                                <a
                                                    key={item.name}
                                                    href={`/${lang}${item.href}`}
                                                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-50 transition-colors group"
                                                >
                                                    <div className="w-8 h-8 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center flex-shrink-0 group-hover:bg-brand-50 group-hover:text-brand-600 transition-colors">
                                                        <item.icon size={16} />
                                                    </div>
                                                    <div>
                                                        <div className="flex items-center gap-2">
                                                            <span className="text-sm font-medium text-slate-700 group-hover:text-brand-600">
                                                                {item.name}
                                                            </span>
                                                            {item.badge && (
                                                                <span className="px-1.5 py-0.5 rounded-full bg-amber-100 text-amber-700 text-[10px] font-bold uppercase tracking-wide">
                                                                    {item.badge}
                                                                </span>
                                                            )}
                                                        </div>
                                                        <p className="text-xs text-slate-400 font-medium line-clamp-1">
                                                            {item.desc}
                                                        </p>
                                                    </div>
                                                </a>
                                            ))}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                    <a
                        href="#"
                        className="px-4 py-2 text-sm font-medium text-slate-600 hover:text-brand-600 hover:bg-slate-50 rounded-full transition-all"
                    >
                        {dict?.nav?.pricing}
                    </a>
                    <a
                        href={`/${lang}/blog`}
                        className="px-4 py-2 text-sm font-medium text-slate-600 hover:text-brand-600 hover:bg-slate-50 rounded-full transition-all"
                    >
                        {dict?.blog?.title || "Blog"}
                    </a>

                    <div className="pl-2 border-l border-slate-100 ml-2">
                        <LanguageSwitcher lang={lang} />
                    </div>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    className="lg:hidden p-2 text-slate-600"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="lg:hidden bg-white border-b border-gray-100 overflow-hidden max-h-[90vh] overflow-y-auto"
                    >
                        <div className="container-custom py-6 flex flex-col gap-6">
                            {navMenus.map((menu) => (
                                <div key={menu.title} className="space-y-3">
                                    <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider px-2">
                                        {menu.title}
                                    </h3>
                                    <div className="grid grid-cols-1 gap-1">
                                        {menu.items.map((item) => (
                                            <a
                                                key={item.name}
                                                href={`/${lang}${item.href}`}
                                                onClick={() => setIsOpen(false)}
                                                className="flex items-center gap-3 p-2 rounded-lg hover:bg-slate-50 active:bg-slate-100"
                                            >
                                                <div className="text-slate-400">
                                                    <item.icon size={18} />
                                                </div>
                                                <span className="text-sm font-medium text-slate-700">
                                                    {item.name}
                                                </span>
                                                {item.badge && (
                                                    <span className="ml-auto px-1.5 py-0.5 rounded-full bg-amber-100 text-amber-700 text-[10px] font-bold uppercase">
                                                        {item.badge}
                                                    </span>
                                                )}
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            ))}
                            <div className="px-2 pt-2 border-t border-slate-100 flex flex-col gap-2">
                                <a
                                    href={`/${lang}/blog`}
                                    onClick={() => setIsOpen(false)}
                                    className="flex items-center gap-3 p-2 rounded-lg hover:bg-slate-50 active:bg-slate-100"
                                >
                                    <span className="text-sm font-medium text-slate-700">{dict?.blog?.title || "Blog"}</span>
                                </a>
                                <LanguageSwitcher lang={lang} />
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
