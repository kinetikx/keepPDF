import { motion } from "framer-motion";
import { Clock, ArrowLeft } from "lucide-react";
import { Button } from "./button";

export default function ComingSoon({ title, description, lang }) {
    return (
        <main className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-4">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="max-w-md w-full bg-white rounded-3xl p-8 shadow-xl shadow-slate-200/50 border border-slate-100 text-center"
            >
                <div className="w-20 h-20 bg-amber-50 text-amber-500 rounded-3xl flex items-center justify-center mx-auto mb-6">
                    <Clock size={40} />
                </div>

                <h1 className="text-2xl font-bold text-slate-900 mb-2 font-display">
                    {title}
                </h1>

                <div className="inline-block bg-amber-100 text-amber-700 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-4">
                    Yakında
                </div>

                <p className="text-slate-500 mb-8 leading-relaxed">
                    {description || "Bu özellik üzerinde çalışmalarımız devam ediyor. Çok yakında hizmetinizde olacak!"}
                </p>

                <a href={`/${lang || 'en'}`}>
                    <Button variant="outline" className="w-full gap-2">
                        <ArrowLeft size={16} />
                        Ana Sayfaya Dön
                    </Button>
                </a>
            </motion.div>
        </main>
    );
}
