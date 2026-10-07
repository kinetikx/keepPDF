import React, { useState } from 'react';
import { getToolFaq } from '../../data/toolFaqs';

export default function ToolFaqSection({ slug, lang }) {
    const faq = getToolFaq(slug, lang);
    if (!faq || !faq.questions || faq.questions.length === 0) return null;

    const [openIndex, setOpenIndex] = useState(0);

    const toggle = (idx) => {
        setOpenIndex(openIndex === idx ? -1 : idx);
    };

    return (
        <section className="py-16 md:py-24 bg-white border-t border-slate-200">
            <div className="container-custom max-w-4xl mx-auto px-4">
                <div className="text-center mb-12">
                    <span className="inline-block px-3 py-1 bg-indigo-50 text-indigo-700 font-semibold text-xs rounded-full uppercase tracking-wider mb-3">
                        FAQ
                    </span>
                    <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
                        {faq.title}
                    </h2>
                    <div className="w-16 h-1 bg-indigo-600 rounded-full mx-auto mt-4"></div>
                </div>

                <div className="space-y-4">
                    {faq.questions.map((item, idx) => {
                        const isOpen = openIndex === idx;
                        return (
                            <div
                                key={idx}
                                className="border border-slate-200 rounded-2xl bg-slate-50/50 overflow-hidden transition-all duration-200 hover:border-indigo-200"
                            >
                                <button
                                    onClick={() => toggle(idx)}
                                    className="w-full flex items-center justify-between p-6 text-left cursor-pointer focus:outline-none"
                                    aria-expanded={isOpen}
                                >
                                    <span className="text-lg font-bold text-slate-900 pr-4">
                                        {item.q}
                                    </span>
                                    <span className={`w-8 h-8 rounded-full bg-indigo-100 text-indigo-700 flex items-center justify-center shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180 bg-indigo-600 text-white' : ''}`}>
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </span>
                                </button>
                                {isOpen && (
                                    <div className="px-6 pb-6 pt-1 text-slate-600 leading-relaxed text-base border-t border-slate-100">
                                        {item.a}
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
