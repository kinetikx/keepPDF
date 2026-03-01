import { jsx, jsxs } from 'react/jsx-runtime';
import { motion } from 'framer-motion';
import { Clock, ArrowLeft } from 'lucide-react';
import { B as Button } from './CookieBanner_-MUnfjGM.mjs';

function ComingSoon({ title, description, lang }) {
  return /* @__PURE__ */ jsx("main", { className: "min-h-screen bg-slate-50 flex flex-col items-center justify-center p-4", children: /* @__PURE__ */ jsxs(
    motion.div,
    {
      initial: { opacity: 0, y: 20 },
      animate: { opacity: 1, y: 0 },
      className: "max-w-md w-full bg-white rounded-3xl p-8 shadow-xl shadow-slate-200/50 border border-slate-100 text-center",
      children: [
        /* @__PURE__ */ jsx("div", { className: "w-20 h-20 bg-amber-50 text-amber-500 rounded-3xl flex items-center justify-center mx-auto mb-6", children: /* @__PURE__ */ jsx(Clock, { size: 40 }) }),
        /* @__PURE__ */ jsx("h1", { className: "text-2xl font-bold text-slate-900 mb-2 font-display", children: title }),
        /* @__PURE__ */ jsx("div", { className: "inline-block bg-amber-100 text-amber-700 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-4", children: "Yakında" }),
        /* @__PURE__ */ jsx("p", { className: "text-slate-500 mb-8 leading-relaxed", children: description || "Bu özellik üzerinde çalışmalarımız devam ediyor. Çok yakında hizmetinizde olacak!" }),
        /* @__PURE__ */ jsx("a", { href: `/${lang || "en"}`, children: /* @__PURE__ */ jsxs(Button, { variant: "outline", className: "w-full gap-2", children: [
          /* @__PURE__ */ jsx(ArrowLeft, { size: 16 }),
          "Ana Sayfaya Dön"
        ] }) })
      ]
    }
  ) });
}

export { ComingSoon as C };
