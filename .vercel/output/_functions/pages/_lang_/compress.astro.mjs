import { c as createAstro, a as createComponent, e as renderComponent, d as renderTemplate } from '../../chunks/astro/server_DMm3Hxu5.mjs';
import 'piccolore';
import { $ as $$Layout } from '../../chunks/Layout_vUtwWiA7.mjs';
import { B as Button, c as cn, g as getDictionary, l as locales, N as Navbar, C as CookieBanner } from '../../chunks/CookieBanner_-MUnfjGM.mjs';
import { jsxs, jsx } from 'react/jsx-runtime';
import { useState, useEffect } from 'react';
import { P as PDFDropzone } from '../../chunks/PDFDropzone_CN5nAjdt.mjs';
import { PDFDocument } from 'pdf-lib';
import { CheckCircle2, FileDown, ArrowLeft, Minimize2, AlertCircle, Loader2 } from 'lucide-react';
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
function Compressor({ file, onBack, dict }) {
  const [isProcessing, setIsProcessing] = useState(false);
  const [progress, setProgress] = useState(0);
  const [status, setStatus] = useState("idle");
  const [resultUrl, setResultUrl] = useState(null);
  const [mode, setMode] = useState("strong");
  const [originalSize, setOriginalSize] = useState(0);
  const [newSize, setNewSize] = useState(0);
  useEffect(() => {
    if (file) setOriginalSize(file.size);
  }, [file]);
  const formatSize = (bytes) => {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const sizes = ["Bytes", "KB", "MB", "GB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
  };
  const compressLight = async () => {
    const arrayBuffer = await file.arrayBuffer();
    const srcDoc = await PDFDocument.load(arrayBuffer);
    const newDoc = await PDFDocument.create();
    const indices = srcDoc.getPageIndices();
    const copiedPages = await newDoc.copyPages(srcDoc, indices);
    copiedPages.forEach((page) => newDoc.addPage(page));
    return await newDoc.save();
  };
  const compressStrong = async () => {
    const pdfjs = await getPdfjs();
    const arrayBuffer = await file.arrayBuffer();
    const pdf = await pdfjs.getDocument(arrayBuffer).promise;
    const newDoc = await PDFDocument.create();
    const totalPages = pdf.numPages;
    for (let i = 1; i <= totalPages; i++) {
      setProgress(Math.round((i - 1) / totalPages * 100));
      const page = await pdf.getPage(i);
      const viewport = page.getViewport({ scale: 1 });
      const canvas = document.createElement("canvas");
      const context = canvas.getContext("2d");
      canvas.width = viewport.width;
      canvas.height = viewport.height;
      await page.render({ canvasContext: context, viewport }).promise;
      const imageUrl = canvas.toDataURL("image/jpeg", 0.5);
      const imageBytes = await fetch(imageUrl).then((res) => res.arrayBuffer());
      const jpgImage = await newDoc.embedJpg(imageBytes);
      const newPage = newDoc.addPage([viewport.width, viewport.height]);
      newPage.drawImage(jpgImage, { x: 0, y: 0, width: viewport.width, height: viewport.height });
    }
    return await newDoc.save();
  };
  const handleCompress = async () => {
    setIsProcessing(true);
    setStatus("processing");
    setProgress(0);
    setResultUrl(null);
    try {
      let resultBytes = mode === "light" ? await compressLight() : await compressStrong();
      setProgress(100);
      const blob = new Blob([resultBytes], { type: "application/pdf" });
      if (blob.size >= originalSize) {
        setNewSize(originalSize);
        setResultUrl(URL.createObjectURL(file));
      } else {
        setNewSize(blob.size);
        setResultUrl(URL.createObjectURL(blob));
      }
      setStatus("complete");
    } catch (error) {
      console.error("Compression error:", error);
      setStatus("error");
    } finally {
      setIsProcessing(false);
    }
  };
  if (status === "complete") {
    return /* @__PURE__ */ jsxs("div", { className: "max-w-md mx-auto bg-white p-8 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 text-center space-y-6", children: [
      /* @__PURE__ */ jsx("div", { className: "w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4", children: /* @__PURE__ */ jsx(CheckCircle2, { size: 32 }) }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-slate-900 mb-2", children: dict?.tools?.compress?.editor?.success }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-center gap-4 text-sm mt-4 p-4 bg-slate-50 rounded-xl", children: [
          /* @__PURE__ */ jsxs("div", { className: "text-right", children: [
            /* @__PURE__ */ jsx("p", { className: "text-slate-400 mb-1", children: dict?.tools?.compress?.editor?.original }),
            /* @__PURE__ */ jsx("p", { className: "font-semibold text-slate-700 decoration-slate-400 line-through", children: formatSize(originalSize) })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "w-px h-8 bg-slate-200" }),
          /* @__PURE__ */ jsxs("div", { className: "text-left", children: [
            /* @__PURE__ */ jsx("p", { className: "text-slate-400 mb-1", children: dict?.tools?.compress?.editor?.compressed }),
            /* @__PURE__ */ jsx("p", { className: "font-bold text-green-600", children: formatSize(newSize) })
          ] })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-xs text-green-600 font-medium mt-2", children: (dict?.tools?.compress?.editor?.reduction || "{percent}% reduction").replace("{percent}", Math.round((originalSize - newSize) / originalSize * 100)) })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "grid gap-3", children: [
        /* @__PURE__ */ jsx("a", { href: resultUrl, download: `compressed-${file.name}`, className: "w-full", children: /* @__PURE__ */ jsxs(Button, { className: "w-full bg-green-600 hover:bg-green-700 h-12 text-lg", children: [
          /* @__PURE__ */ jsx(FileDown, { className: "mr-2", size: 20 }),
          dict?.tools?.compress?.editor?.download
        ] }) }),
        /* @__PURE__ */ jsx(Button, { variant: "ghost", onClick: onBack, className: "text-slate-500", children: dict?.tools?.compress?.editor?.compressAnother })
      ] })
    ] });
  }
  return /* @__PURE__ */ jsxs("div", { className: "max-w-2xl mx-auto space-y-8", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4 mb-8", children: [
      /* @__PURE__ */ jsx("button", { onClick: onBack, className: "p-2 hover:bg-slate-100 rounded-full transition-colors text-slate-600 bg-white shadow-sm border border-slate-200", children: /* @__PURE__ */ jsx(ArrowLeft, { size: 20 }) }),
      /* @__PURE__ */ jsxs("div", { className: "flex-1", children: [
        /* @__PURE__ */ jsxs("h2", { className: "font-semibold text-slate-800 text-lg flex items-center gap-2", children: [
          /* @__PURE__ */ jsx(Minimize2, { size: 20, className: "text-orange-500" }),
          dict?.tools?.compress?.title
        ] }),
        /* @__PURE__ */ jsxs("p", { className: "text-sm text-slate-500", children: [
          file.name,
          " (",
          formatSize(originalSize),
          ")"
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-6", children: [
      /* @__PURE__ */ jsxs("div", { onClick: () => setMode("light"), className: cn("relative p-6 rounded-2xl border-2 transition-all cursor-pointer hover:shadow-md", mode === "light" ? "border-orange-500 bg-orange-50/50" : "border-slate-100 bg-white hover:border-orange-200"), children: [
        /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-start mb-4", children: [
          /* @__PURE__ */ jsx("span", { className: "font-bold text-slate-800", children: dict?.tools?.compress?.editor?.basic }),
          mode === "light" && /* @__PURE__ */ jsx("div", { className: "w-4 h-4 rounded-full bg-orange-500" })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-sm text-slate-600 leading-relaxed", children: dict?.tools?.compress?.editor?.basicDesc })
      ] }),
      /* @__PURE__ */ jsxs("div", { onClick: () => setMode("strong"), className: cn("relative p-6 rounded-2xl border-2 transition-all cursor-pointer hover:shadow-md", mode === "strong" ? "border-orange-500 bg-orange-50/50" : "border-slate-100 bg-white hover:border-orange-200"), children: [
        /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-start mb-4", children: [
          /* @__PURE__ */ jsx("span", { className: "font-bold text-slate-800", children: dict?.tools?.compress?.editor?.strong }),
          mode === "strong" && /* @__PURE__ */ jsx("div", { className: "w-4 h-4 rounded-full bg-orange-500" })
        ] }),
        /* @__PURE__ */ jsxs("p", { className: "text-sm text-slate-600 leading-relaxed", children: [
          dict?.tools?.compress?.editor?.strongDesc,
          /* @__PURE__ */ jsx("span", { className: "block mt-1 text-orange-600 text-xs font-semibold", children: dict?.tools?.compress?.editor?.strongNote })
        ] })
      ] })
    ] }),
    status === "error" && /* @__PURE__ */ jsxs("div", { className: "p-4 bg-red-50 text-red-600 rounded-xl flex items-center gap-3 text-sm", children: [
      /* @__PURE__ */ jsx(AlertCircle, { size: 18 }),
      dict?.tools?.compress?.editor?.error
    ] }),
    /* @__PURE__ */ jsx(Button, { onClick: handleCompress, disabled: isProcessing, className: "w-full h-14 text-lg bg-slate-900 hover:bg-slate-800 rounded-xl shadow-xl shadow-slate-200/50 transition-all hover:scale-[1.01] active:scale-[0.99]", children: isProcessing ? /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
      /* @__PURE__ */ jsx(Loader2, { className: "animate-spin" }),
      /* @__PURE__ */ jsx("span", { children: (dict?.tools?.compress?.editor?.processing || "Compressing...").replace("{percent}", progress) })
    ] }) : dict?.tools?.compress?.editor?.button })
  ] });
}

function CompressClient({ dict }) {
  const [file, setFile] = useState(null);
  const handleFileSelect = (files) => {
    if (files && files.length > 0) setFile(files[0]);
  };
  if (file) return /* @__PURE__ */ jsx("section", { className: "py-12 bg-slate-50 min-h-screen", children: /* @__PURE__ */ jsx("div", { className: "container-custom", children: /* @__PURE__ */ jsx(Compressor, { file, onBack: () => setFile(null), dict }) }) });
  return /* @__PURE__ */ jsx("section", { className: "py-20 bg-slate-50 min-h-screen", children: /* @__PURE__ */ jsxs("div", { className: "container-custom max-w-4xl mx-auto", children: [
    /* @__PURE__ */ jsxs("div", { className: "text-center mb-12", children: [
      /* @__PURE__ */ jsx("h1", { className: "text-4xl font-bold text-slate-900 mb-4", children: dict?.metadata?.compress?.h1 || dict?.tools?.compress?.title }),
      /* @__PURE__ */ jsx("p", { className: "text-slate-500 text-lg max-w-2xl mx-auto", children: dict?.tools?.compress?.description })
    ] }),
    /* @__PURE__ */ jsx(PDFDropzone, { onFileSelect: handleFileSelect, title: dict?.common?.clickToUpload, limit: dict?.common?.limit, buttonText: dict?.common?.browse })
  ] }) });
}

const $$Astro = createAstro("https://keeppdf.com");
function getStaticPaths() {
  return locales.map((lang) => ({ params: { lang } }));
}
const $$Compress = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Compress;
  const { lang } = Astro2.params;
  const dict = getDictionary(lang);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "lang": lang, "dict": dict, "title": dict.metadata.compress.title, "description": dict.metadata.compress.description }, { "cookie-banner": ($$result2) => renderTemplate`${renderComponent($$result2, "CookieBanner", CookieBanner, { "client:load": true, "dict": dict, "slot": "cookie-banner", "client:component-hydration": "load", "client:component-path": "C:/Users/gold/.gemini/antigravity/scratch/keeppdf-astro/src/components/landing/CookieBanner", "client:component-export": "default" })}`, "default": ($$result2) => renderTemplate`  ${renderComponent($$result2, "CompressClient", CompressClient, { "client:load": true, "dict": dict, "client:component-hydration": "load", "client:component-path": "C:/Users/gold/.gemini/antigravity/scratch/keeppdf-astro/src/components/tools/CompressClient", "client:component-export": "default" })} ${renderComponent($$result2, "HowToSection", HowToSection, { "client:visible": true, "slug": "compress", "lang": lang, "client:component-hydration": "visible", "client:component-path": "C:/Users/gold/.gemini/antigravity/scratch/keeppdf-astro/src/components/tools/HowToSection", "client:component-export": "default" })} ${renderComponent($$result2, "UseCaseSection", UseCaseSection, { "client:visible": true, "slug": "compress", "lang": lang, "client:component-hydration": "visible", "client:component-path": "C:/Users/gold/.gemini/antigravity/scratch/keeppdf-astro/src/components/tools/UseCaseSection", "client:component-export": "default" })}  `, "navbar": ($$result2) => renderTemplate`${renderComponent($$result2, "Navbar", Navbar, { "client:load": true, "lang": lang, "dict": dict, "slot": "navbar", "client:component-hydration": "load", "client:component-path": "C:/Users/gold/.gemini/antigravity/scratch/keeppdf-astro/src/components/landing/Navbar", "client:component-export": "default" })}` })}`;
}, "C:/Users/gold/.gemini/antigravity/scratch/keeppdf-astro/src/pages/[lang]/compress.astro", void 0);

const $$file = "C:/Users/gold/.gemini/antigravity/scratch/keeppdf-astro/src/pages/[lang]/compress.astro";
const $$url = "/[lang]/compress";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Compress,
    file: $$file,
    getStaticPaths,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
