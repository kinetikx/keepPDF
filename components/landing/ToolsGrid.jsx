"use client";

import { FileText, Image, Files, PenTool, LayoutTemplate, Minimize2, FileCode, FileSpreadsheet, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const tools = [
    {
        icon: FileText,
        title: "PDF to Word",
        desc: "Convert PDF to editable Word documents",
        color: "bg-blue-500",
        lightColor: "bg-blue-50 text-blue-600",
    },
    {
        icon: Image,
        title: "JPG to PDF",
        desc: "Convert JPG, PNG, BMP, GIF, and TIFF images to PDF",
        color: "bg-yellow-500",
        lightColor: "bg-yellow-50 text-yellow-600",
    },
    {
        icon: Files,
        title: "Merge PDF",
        desc: "Combine multiple PDFs into one unified document",
        color: "bg-pink-500",
        lightColor: "bg-pink-50 text-pink-600",
    },
    {
        icon: PenTool,
        title: "Sign PDF",
        desc: "Add your electronic signature to any PDF document",
        color: "bg-purple-500",
        lightColor: "bg-purple-50 text-purple-600",
    },
    {
        icon: LayoutTemplate,
        title: "Edit PDF",
        desc: "Add text, shapes, comments and highlights to your PDF",
        color: "bg-cyan-500",
        lightColor: "bg-cyan-50 text-cyan-600",
    },
    {
        icon: Minimize2,
        title: "Compress PDF",
        desc: "Reduce the size of your PDF without losing quality",
        color: "bg-red-500",
        lightColor: "bg-red-50 text-red-600",
    },
    {
        icon: FileCode,
        title: "PDF to TXT",
        desc: "Convert your PDF to TXT",
        color: "bg-orange-500",
        lightColor: "bg-orange-50 text-orange-600",
    },
    {
        icon: FileSpreadsheet,
        title: "PDF to Excel",
        desc: "Convert PDF to editable Excel Spreadsheet",
        color: "bg-green-500",
        lightColor: "bg-green-50 text-green-600",
    },
];

export default function ToolsGrid() {
    return (
        <section className="py-20 bg-slate-50/50">
            <div className="container-custom">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="text-3xl font-bold text-slate-900 mb-4">Most Popular PDF Tools</h2>
                    <p className="text-slate-500">
                        21 tools to convert, compress, and edit PDFs for free. Try it out today!
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {tools.map((tool, index) => (
                        <div
                            key={index}
                            className="group bg-white rounded-2xl p-6 border border-slate-100 hover:shadow-xl hover:shadow-brand-500/5 hover:-translate-y-1 transition-all duration-300 cursor-pointer"
                        >
                            <div className={`w-12 h-12 rounded-xl ${tool.lightColor} flex items-center justify-center mb-6`}>
                                <tool.icon size={24} />
                            </div>

                            <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-brand-600 transition-colors">
                                {tool.title}
                            </h3>
                            <p className="text-sm text-slate-500 mb-4 leading-relaxed">
                                {tool.desc}
                            </p>

                            <div className="flex items-center text-sm font-medium text-slate-400 group-hover:text-brand-600 transition-colors">
                                Convert <ArrowRight size={14} className="ml-1 transition-transform group-hover:translate-x-1" />
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <Button className="px-8 bg-brand-600 hover:bg-brand-700">See All PDF Tools</Button>
                </div>
            </div>
        </section>
    );
}
