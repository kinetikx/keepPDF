import Link from "next/link";
import { CheckSquare, Github, Twitter, Linkedin } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-slate-50 border-t border-slate-200">
            <div className="container-custom py-12 md:py-16">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
                    {/* Brand Column */}
                    <div className="md:col-span-1 space-y-4">
                        <Link href="/" className="flex items-center gap-2 group">
                            <div className="w-8 h-8 bg-brand-600 rounded-lg flex items-center justify-center text-white">
                                <CheckSquare size={20} strokeWidth={3} />
                            </div>
                            <span className="text-xl font-bold tracking-tight text-slate-900">
                                Keep<span className="text-brand-600">PDF</span>
                            </span>
                        </Link>
                        <p className="text-slate-500 text-sm leading-relaxed">
                            Simple, secure, and powerful PDF tools for everyone. Process documents directly in your browser.
                        </p>
                    </div>

                    {/* Product Links */}
                    <div>
                        <h4 className="font-semibold text-slate-900 mb-4">Product</h4>
                        <ul className="space-y-3 text-sm text-slate-600">
                            <li><Link href="#" className="hover:text-brand-600 transition-colors">Merge PDF</Link></li>
                            <li><Link href="#" className="hover:text-brand-600 transition-colors">Compress PDF</Link></li>
                            <li><Link href="#" className="hover:text-brand-600 transition-colors">Convert PDF</Link></li>
                            <li><Link href="#" className="hover:text-brand-600 transition-colors">Sign Documents</Link></li>
                        </ul>
                    </div>

                    {/* Company Links */}
                    <div>
                        <h4 className="font-semibold text-slate-900 mb-4">Company</h4>
                        <ul className="space-y-3 text-sm text-slate-600">
                            <li><Link href="#" className="hover:text-brand-600 transition-colors">About Us</Link></li>
                            <li><Link href="#" className="hover:text-brand-600 transition-colors">Blog</Link></li>
                            <li><Link href="#" className="hover:text-brand-600 transition-colors">Privacy Policy</Link></li>
                            <li><Link href="#" className="hover:text-brand-600 transition-colors">Terms of Service</Link></li>
                        </ul>
                    </div>

                    {/* Contact/Social */}
                    <div>
                        <h4 className="font-semibold text-slate-900 mb-4">Connect</h4>
                        <div className="flex gap-4">
                            <Link href="#" className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-500 hover:text-brand-600 hover:border-brand-200 transition-all">
                                <Twitter size={18} />
                            </Link>
                            <Link href="#" className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-500 hover:text-brand-600 hover:border-brand-200 transition-all">
                                <Github size={18} />
                            </Link>
                            <Link href="#" className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-500 hover:text-brand-600 hover:border-brand-200 transition-all">
                                <Linkedin size={18} />
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="pt-8 border-t border-slate-200 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-500">
                    <p>© {new Date().getFullYear()} KeepPDF. All rights reserved.</p>
                    <div className="flex gap-6">
                        <Link href="#" className="hover:text-slate-900 transition-colors">Privacy</Link>
                        <Link href="#" className="hover:text-slate-900 transition-colors">Terms</Link>
                        <Link href="#" className="hover:text-slate-900 transition-colors">Cookies</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
