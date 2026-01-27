"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X, CheckSquare } from "lucide-react"; // Using CheckSquare as logo placeholder
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
    { name: "Merge PDF", href: "#" },
    { name: "Compress", href: "#" },
    { name: "Convert", href: "#" },
    { name: "Split", href: "#" },
    { name: "Sign", href: "#" },
    { name: "Pricing", href: "#" },
    { name: "Team", href: "#" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
            <div className="container-custom flex items-center justify-between h-20">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2 group">
                    <div className="w-8 h-8 bg-brand-600 rounded-lg flex items-center justify-center text-white group-hover:rotate-12 transition-transform">
                        <CheckSquare size={20} strokeWidth={3} />
                    </div>
                    <span className="text-xl font-bold tracking-tight text-slate-900">
                        Keep<span className="text-brand-600">PDF</span>
                    </span>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden lg:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-sm font-medium text-slate-600 hover:text-brand-600 transition-colors"
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>

                {/* Auth Buttons */}
                <div className="hidden lg:flex items-center gap-4">
                    <Button variant="ghost" className="text-slate-600 font-semibold px-4">
                        Login
                    </Button>
                    <Button>Free Trial</Button>
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
                        className="lg:hidden bg-white border-b border-gray-100 overflow-hidden"
                    >
                        <div className="container-custom py-6 flex flex-col gap-4">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className="text-base font-medium text-slate-600 py-2 border-b border-gray-50"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <div className="flex flex-col gap-3 mt-4">
                                <Button variant="outline" className="w-full justify-center">
                                    Login
                                </Button>
                                <Button className="w-full justify-center">Free Trial</Button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
