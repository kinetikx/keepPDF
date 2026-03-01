import { c as createAstro, a as createComponent, e as renderComponent, d as renderTemplate } from '../../chunks/astro/server_DMm3Hxu5.mjs';
import 'piccolore';
import { $ as $$Layout } from '../../chunks/Layout_vUtwWiA7.mjs';
import { c as cn, g as getDictionary, l as locales, N as Navbar, C as CookieBanner } from '../../chunks/CookieBanner_-MUnfjGM.mjs';
import { jsxs, jsx } from 'react/jsx-runtime';
import { useState, useRef, useEffect } from 'react';
import { P as PDFDropzone } from '../../chunks/PDFDropzone_CN5nAjdt.mjs';
import { PDFDocument } from 'pdf-lib';
import { motion } from 'framer-motion';
import { Loader2, ArrowLeft, Split, Check } from 'lucide-react';
import { H as HowToSection, U as UseCaseSection } from '../../chunks/UseCaseSection_B3koId8q.mjs';
export { renderers } from '../../renderers.mjs';

let pdfjsLib = null;
async function getPdfjs() {
  if (!pdfjsLib) {
    pdfjsLib = await import('pdfjs-dist/build/pdf.mjs');
    pdfjsLib.GlobalWorkerOptions.workerSrc = "/pdf.worker.min.mjs";
  }
  return pdfjsLib;
}
function SplitEditor({ file, onBack, dict }) {
  const [pages, setPages] = useState([]);
  const [selectedPages, setSelectedPages] = useState(/* @__PURE__ */ new Set());
  const [isProcessing, setIsProcessing] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const isSelectionDragging = useRef(false);
  const selectionTargetState = useRef(true);
  useEffect(() => {
    const handleGlobalMouseUp = () => {
      isSelectionDragging.current = false;
    };
    window.addEventListener("mouseup", handleGlobalMouseUp);
    return () => window.removeEventListener("mouseup", handleGlobalMouseUp);
  }, []);
  useEffect(() => {
    if (!file) return;
    const loadPDF = async () => {
      try {
        setIsLoading(true);
        const pdfjs = await getPdfjs();
        const arrayBuffer = await file.arrayBuffer();
        const pdf = await pdfjs.getDocument(arrayBuffer).promise;
        const pagePromises = [];
        for (let i = 1; i <= pdf.numPages; i++) pagePromises.push(pdf.getPage(i));
        const pdfPages = await Promise.all(pagePromises);
        const renderedPages = await Promise.all(
          pdfPages.map(async (page, index) => {
            const viewport = page.getViewport({ scale: 0.5 });
            const canvas = document.createElement("canvas");
            const context = canvas.getContext("2d");
            canvas.height = viewport.height;
            canvas.width = viewport.width;
            await page.render({ canvasContext: context, viewport }).promise;
            return { id: index, image: canvas.toDataURL(), pageNumber: index + 1 };
          })
        );
        setPages(renderedPages);
      } catch (error) {
        console.error("Error loading PDF:", error);
      } finally {
        setIsLoading(false);
      }
    };
    loadPDF();
  }, [file]);
  const handleMouseDown = (id) => {
    isSelectionDragging.current = true;
    selectionTargetState.current = !selectedPages.has(id);
    togglePage(id, selectionTargetState.current);
  };
  const handleMouseEnter = (id) => {
    if (isSelectionDragging.current) togglePage(id, selectionTargetState.current);
  };
  const togglePage = (id, forceState = null) => {
    setSelectedPages((prev) => {
      const newSelected = new Set(prev);
      const shouldSelect = forceState !== null ? forceState : !newSelected.has(id);
      shouldSelect ? newSelected.add(id) : newSelected.delete(id);
      return newSelected;
    });
  };
  const handleExtract = async () => {
    if (selectedPages.size === 0) return;
    setIsProcessing(true);
    try {
      const arrayBuffer = await file.arrayBuffer();
      const srcDoc = await PDFDocument.load(arrayBuffer);
      const newDoc = await PDFDocument.create();
      const indices = Array.from(selectedPages).sort((a, b) => a - b);
      const copiedPages = await newDoc.copyPages(srcDoc, indices);
      copiedPages.forEach((page) => newDoc.addPage(page));
      const pdfBytes = await newDoc.save();
      const blob = new Blob([pdfBytes], { type: "application/pdf" });
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = `split-${file.name}`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error("Error splitting PDF:", error);
    } finally {
      setIsProcessing(false);
    }
  };
  const selectAll = () => {
    selectedPages.size === pages.length ? setSelectedPages(/* @__PURE__ */ new Set()) : setSelectedPages(new Set(pages.map((p) => p.id)));
  };
  if (isLoading) {
    return /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center justify-center p-12 space-y-4", children: [
      /* @__PURE__ */ jsx(Loader2, { className: "w-8 h-8 animate-spin text-indigo-600" }),
      /* @__PURE__ */ jsx("p", { className: "text-slate-500", children: dict?.tools?.split?.editor?.loading })
    ] });
  }
  return /* @__PURE__ */ jsxs("div", { className: "space-y-6 select-none", children: [
    /* @__PURE__ */ jsxs("div", { className: "sticky top-0 z-20 bg-white/80 backdrop-blur-md p-4 rounded-xl border border-slate-200 shadow-sm flex items-center justify-between", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4", children: [
        /* @__PURE__ */ jsx("button", { onClick: onBack, className: "p-2 hover:bg-slate-100 rounded-full transition-colors text-slate-600", children: /* @__PURE__ */ jsx(ArrowLeft, { size: 20 }) }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h2", { className: "font-semibold text-slate-800", children: file.name }),
          /* @__PURE__ */ jsx("p", { className: "text-sm text-slate-500", children: (dict?.tools?.split?.editor?.pageCount || "{count} pages found").replace("{count}", pages.length) })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ jsx("button", { onClick: selectAll, className: "px-4 py-2 text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors", children: selectedPages.size === pages.length ? dict?.tools?.split?.editor?.deselect : dict?.tools?.split?.editor?.selectAll }),
        /* @__PURE__ */ jsxs("button", { onClick: handleExtract, disabled: selectedPages.size === 0 || isProcessing, className: cn("flex items-center gap-2 px-6 py-2 rounded-lg font-medium transition-all shadow-sm", selectedPages.size > 0 ? "bg-indigo-600 text-white hover:bg-indigo-700 hover:shadow-indigo-200 shadow-lg" : "bg-slate-100 text-slate-400 cursor-not-allowed"), children: [
          isProcessing ? /* @__PURE__ */ jsx(Loader2, { size: 18, className: "animate-spin" }) : /* @__PURE__ */ jsx(Split, { size: 18 }),
          selectedPages.size > 0 ? (dict?.tools?.split?.editor?.extract || "Extract {count} Pages").replace("{count}", selectedPages.size) : dict?.tools?.split?.editor?.selectPages
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 p-4", children: pages.map((page) => /* @__PURE__ */ jsx(motion.div, { layout: true, initial: { opacity: 0, scale: 0.9 }, animate: { opacity: 1, scale: 1 }, onMouseDown: () => handleMouseDown(page.id), onMouseEnter: () => handleMouseEnter(page.id), className: cn("relative group cursor-pointer rounded-xl transition-all duration-200", selectedPages.has(page.id) ? "ring-2 ring-indigo-600 ring-offset-2 scale-[1.02]" : "hover:ring-2 hover:ring-slate-200 hover:ring-offset-2"), children: /* @__PURE__ */ jsxs("div", { className: "pointer-events-none aspect-[1/1.4] rounded-lg overflow-hidden bg-slate-100 shadow-sm border border-slate-100 relative", children: [
      /* @__PURE__ */ jsx("img", { src: page.image, alt: `Page ${page.pageNumber}`, className: "w-full h-full object-contain" }),
      /* @__PURE__ */ jsx("div", { className: cn("absolute inset-0 transition-colors duration-200 flex items-center justify-center", selectedPages.has(page.id) ? "bg-indigo-900/10" : "group-hover:bg-black/5") }),
      /* @__PURE__ */ jsx("div", { className: cn("absolute top-3 right-3 w-6 h-6 rounded-full flex items-center justify-center transition-all duration-200 shadow-sm", selectedPages.has(page.id) ? "bg-indigo-600 text-white scale-110" : "bg-white text-transparent border border-slate-200 group-hover:border-indigo-300"), children: /* @__PURE__ */ jsx(Check, { size: 14, strokeWidth: 3 }) }),
      /* @__PURE__ */ jsx("div", { className: "absolute bottom-2 left-1/2 -translate-x-1/2 px-2 py-0.5 bg-black/50 text-white text-[10px] rounded-full backdrop-blur-sm", children: page.pageNumber })
    ] }) }, page.id)) })
  ] });
}

function SplitClient({ dict }) {
  const [file, setFile] = useState(null);
  const handleFileSelect = (files) => {
    if (files && files.length > 0) setFile(files[0]);
  };
  if (file) return /* @__PURE__ */ jsx("section", { className: "py-12 bg-slate-50 min-h-screen", children: /* @__PURE__ */ jsx("div", { className: "container-custom", children: /* @__PURE__ */ jsx(SplitEditor, { file, onBack: () => setFile(null), dict }) }) });
  return /* @__PURE__ */ jsx("section", { className: "py-20 bg-slate-50 min-h-screen", children: /* @__PURE__ */ jsxs("div", { className: "container-custom max-w-4xl mx-auto", children: [
    /* @__PURE__ */ jsxs("div", { className: "text-center mb-12", children: [
      /* @__PURE__ */ jsx("h1", { className: "text-4xl font-bold text-slate-900 mb-4", children: dict?.metadata?.split?.h1 || dict?.tools?.split?.title }),
      /* @__PURE__ */ jsx("p", { className: "text-slate-500 text-lg max-w-2xl mx-auto", children: dict?.tools?.split?.description })
    ] }),
    /* @__PURE__ */ jsx(PDFDropzone, { onFileSelect: handleFileSelect, title: dict?.common?.clickToUpload, limit: dict?.common?.limit, buttonText: dict?.common?.browse })
  ] }) });
}

const $$Astro = createAstro("https://keeppdf.com");
function getStaticPaths() {
  return locales.map((lang) => ({ params: { lang } }));
}
const $$Split = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Split;
  const { lang } = Astro2.params;
  const dict = getDictionary(lang);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "lang": lang, "dict": dict, "title": dict.metadata.split.title, "description": dict.metadata.split.description }, { "cookie-banner": ($$result2) => renderTemplate`${renderComponent($$result2, "CookieBanner", CookieBanner, { "client:load": true, "dict": dict, "slot": "cookie-banner", "client:component-hydration": "load", "client:component-path": "C:/Users/gold/.gemini/antigravity/scratch/keeppdf-astro/src/components/landing/CookieBanner", "client:component-export": "default" })}`, "default": ($$result2) => renderTemplate`  ${renderComponent($$result2, "SplitClient", SplitClient, { "client:load": true, "dict": dict, "client:component-hydration": "load", "client:component-path": "C:/Users/gold/.gemini/antigravity/scratch/keeppdf-astro/src/components/tools/SplitClient", "client:component-export": "default" })} ${renderComponent($$result2, "HowToSection", HowToSection, { "client:visible": true, "slug": "split", "lang": lang, "client:component-hydration": "visible", "client:component-path": "C:/Users/gold/.gemini/antigravity/scratch/keeppdf-astro/src/components/tools/HowToSection", "client:component-export": "default" })} ${renderComponent($$result2, "UseCaseSection", UseCaseSection, { "client:visible": true, "slug": "split", "lang": lang, "client:component-hydration": "visible", "client:component-path": "C:/Users/gold/.gemini/antigravity/scratch/keeppdf-astro/src/components/tools/UseCaseSection", "client:component-export": "default" })}  `, "navbar": ($$result2) => renderTemplate`${renderComponent($$result2, "Navbar", Navbar, { "client:load": true, "lang": lang, "dict": dict, "slot": "navbar", "client:component-hydration": "load", "client:component-path": "C:/Users/gold/.gemini/antigravity/scratch/keeppdf-astro/src/components/landing/Navbar", "client:component-export": "default" })}` })}`;
}, "C:/Users/gold/.gemini/antigravity/scratch/keeppdf-astro/src/pages/[lang]/split.astro", void 0);

const $$file = "C:/Users/gold/.gemini/antigravity/scratch/keeppdf-astro/src/pages/[lang]/split.astro";
const $$url = "/[lang]/split";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Split,
    file: $$file,
    getStaticPaths,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
