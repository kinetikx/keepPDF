import { c as createAstro, a as createComponent, e as renderComponent, d as renderTemplate } from '../../chunks/astro/server_DMm3Hxu5.mjs';
import 'piccolore';
import { $ as $$Layout } from '../../chunks/Layout_vUtwWiA7.mjs';
import { B as Button, c as cn, g as getDictionary, l as locales, N as Navbar, C as CookieBanner } from '../../chunks/CookieBanner_-MUnfjGM.mjs';
import { jsxs, jsx, Fragment } from 'react/jsx-runtime';
import { useState, useEffect } from 'react';
import { P as PDFDropzone } from '../../chunks/PDFDropzone_CN5nAjdt.mjs';
import JSZip from 'jszip';
import { Loader2, Image, Download, ArrowLeft, Check } from 'lucide-react';
import { motion } from 'framer-motion';
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
function PdfToImage({ file, onBack }) {
  const [pages, setPages] = useState([]);
  const [selectedPages, setSelectedPages] = useState(/* @__PURE__ */ new Set());
  const [status, setStatus] = useState("loading");
  const [progress, setProgress] = useState(0);
  const [zipUrl, setZipUrl] = useState(null);
  const [convertedCount, setConvertedCount] = useState(0);
  useEffect(() => {
    if (!file) return;
    const loadPDF = async () => {
      try {
        setStatus("loading");
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
            return { id: index + 1, image: canvas.toDataURL(), pageNumber: index + 1 };
          })
        );
        setPages(renderedPages);
        setSelectedPages(new Set(renderedPages.map((p) => p.id)));
        setStatus("selecting");
      } catch (error) {
        console.error("Error loading PDF:", error);
        setStatus("error");
      }
    };
    loadPDF();
  }, [file]);
  const togglePage = (id) => {
    setSelectedPages((prev) => {
      const n = new Set(prev);
      n.has(id) ? n.delete(id) : n.add(id);
      return n;
    });
  };
  const toggleAll = () => {
    selectedPages.size === pages.length ? setSelectedPages(/* @__PURE__ */ new Set()) : setSelectedPages(new Set(pages.map((p) => p.id)));
  };
  const convertToImages = async () => {
    if (selectedPages.size === 0) return;
    setStatus("converting");
    setProgress(0);
    try {
      const pdfjs = await getPdfjs();
      const arrayBuffer = await file.arrayBuffer();
      const pdf = await pdfjs.getDocument(arrayBuffer).promise;
      const zip = new JSZip();
      const imgFolder = zip.folder("images");
      const pagesToConvert = Array.from(selectedPages).sort((a, b) => a - b);
      setConvertedCount(pagesToConvert.length);
      for (let i = 0; i < pagesToConvert.length; i++) {
        const pageNum = pagesToConvert[i];
        setProgress(Math.round(i / pagesToConvert.length * 100));
        const page = await pdf.getPage(pageNum);
        const viewport = page.getViewport({ scale: 2 });
        const canvas = document.createElement("canvas");
        const context = canvas.getContext("2d");
        canvas.width = viewport.width;
        canvas.height = viewport.height;
        await page.render({ canvasContext: context, viewport }).promise;
        const blob = await new Promise((resolve) => canvas.toBlob(resolve, "image/jpeg", 0.9));
        imgFolder.file(`page-${pageNum.toString().padStart(3, "0")}.jpg`, blob);
      }
      setProgress(100);
      const content = await zip.generateAsync({ type: "blob" });
      setZipUrl(URL.createObjectURL(content));
      setStatus("complete");
    } catch (error) {
      console.error("Error converting:", error);
      setStatus("error");
    }
  };
  if (status === "loading") return /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center justify-center p-12 space-y-4 min-h-[50vh]", children: [
    /* @__PURE__ */ jsx(Loader2, { className: "w-8 h-8 animate-spin text-indigo-600" }),
    /* @__PURE__ */ jsx("p", { className: "text-slate-500", children: "Loading PDF Pages..." })
  ] });
  if (status === "complete") return /* @__PURE__ */ jsxs("div", { className: "max-w-md mx-auto bg-white p-8 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 text-center space-y-6 mt-12", children: [
    /* @__PURE__ */ jsx("div", { className: "w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4", children: /* @__PURE__ */ jsx(Image, { size: 32 }) }),
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-slate-900 mb-2", children: "Conversion Ready!" }),
      /* @__PURE__ */ jsxs("p", { className: "text-slate-500", children: [
        "Successfully converted ",
        convertedCount,
        " pages to images."
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "grid gap-3", children: [
      /* @__PURE__ */ jsx("a", { href: zipUrl, download: `${file.name.replace(".pdf", "")}-images.zip`, className: "w-full", children: /* @__PURE__ */ jsxs(Button, { className: "w-full bg-green-600 hover:bg-green-700 h-12 text-lg", children: [
        /* @__PURE__ */ jsx(Download, { className: "mr-2", size: 20 }),
        "Download ZIP"
      ] }) }),
      /* @__PURE__ */ jsx(Button, { variant: "ghost", onClick: onBack, className: "text-slate-500", children: "Convert Another File" })
    ] })
  ] });
  return /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
    /* @__PURE__ */ jsxs("div", { className: "sticky top-0 z-40 bg-white/80 backdrop-blur-md p-4 rounded-2xl border border-slate-200 shadow-sm flex flex-wrap items-center justify-between gap-4", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4", children: [
        /* @__PURE__ */ jsx("button", { onClick: onBack, className: "p-2 hover:bg-slate-100 rounded-full transition-colors text-slate-600", children: /* @__PURE__ */ jsx(ArrowLeft, { size: 20 }) }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsxs("h2", { className: "font-semibold text-slate-800 flex items-center gap-2", children: [
            /* @__PURE__ */ jsx(Image, { size: 20, className: "text-pink-500" }),
            "PDF to JPG"
          ] }),
          /* @__PURE__ */ jsxs("p", { className: "text-sm text-slate-500", children: [
            file.name,
            " (",
            pages.length,
            " pages)"
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ jsx(Button, { variant: "ghost", size: "sm", onClick: toggleAll, className: "text-slate-600", children: selectedPages.size === pages.length ? "Deselect All" : "Select All" }),
        /* @__PURE__ */ jsx(Button, { onClick: convertToImages, disabled: selectedPages.size === 0 || status === "converting", className: "bg-indigo-600 hover:bg-indigo-700 min-w-[140px]", children: status === "converting" ? /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsx(Loader2, { size: 18, className: "animate-spin" }),
          /* @__PURE__ */ jsxs("span", { children: [
            progress,
            "%"
          ] })
        ] }) : /* @__PURE__ */ jsxs(Fragment, { children: [
          /* @__PURE__ */ jsx(Download, { size: 18, className: "mr-2" }),
          "Convert ",
          selectedPages.size,
          " Pages"
        ] }) })
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 pb-12", children: pages.map((page) => /* @__PURE__ */ jsx(motion.div, { initial: { opacity: 0, scale: 0.9 }, animate: { opacity: 1, scale: 1 }, onClick: () => togglePage(page.id), className: cn("relative group cursor-pointer rounded-xl transition-all duration-200", selectedPages.has(page.id) ? "ring-2 ring-indigo-600 ring-offset-2 scale-[1.02]" : "hover:ring-2 hover:ring-slate-200 hover:ring-offset-2"), children: /* @__PURE__ */ jsxs("div", { className: "pointer-events-none aspect-[1/1.4] rounded-lg overflow-hidden bg-slate-100 shadow-sm border border-slate-100 relative", children: [
      /* @__PURE__ */ jsx("img", { src: page.image, alt: `Page ${page.pageNumber}`, className: "w-full h-full object-contain" }),
      /* @__PURE__ */ jsx("div", { className: cn("absolute inset-0 transition-colors duration-200", selectedPages.has(page.id) ? "bg-indigo-900/10" : "group-hover:bg-black/5") }),
      /* @__PURE__ */ jsx("div", { className: cn("absolute top-3 right-3 w-6 h-6 rounded-full flex items-center justify-center transition-all duration-200 shadow-sm", selectedPages.has(page.id) ? "bg-indigo-600 text-white scale-110" : "bg-white text-transparent border border-slate-200 group-hover:border-indigo-300"), children: /* @__PURE__ */ jsx(Check, { size: 14, strokeWidth: 3 }) }),
      /* @__PURE__ */ jsx("div", { className: "absolute bottom-2 left-1/2 -translate-x-1/2 px-2 py-0.5 bg-black/50 text-white text-[10px] rounded-full backdrop-blur-sm", children: page.pageNumber })
    ] }) }, page.id)) })
  ] });
}

function PdfToImageClient({ dict }) {
  const [file, setFile] = useState(null);
  const handleFileSelect = (files) => {
    if (files && files.length > 0) setFile(files[0]);
  };
  if (file) return /* @__PURE__ */ jsx("section", { className: "py-12 bg-slate-50 min-h-screen", children: /* @__PURE__ */ jsx("div", { className: "container-custom", children: /* @__PURE__ */ jsx(PdfToImage, { file, onBack: () => setFile(null) }) }) });
  return /* @__PURE__ */ jsx("section", { className: "py-20 bg-slate-50 min-h-screen", children: /* @__PURE__ */ jsxs("div", { className: "container-custom max-w-4xl mx-auto", children: [
    /* @__PURE__ */ jsxs("div", { className: "text-center mb-12", children: [
      /* @__PURE__ */ jsx("h1", { className: "text-4xl font-bold text-slate-900 mb-4", children: dict?.metadata?.pdfToImage?.h1 || dict?.tools?.pdfToImage?.title }),
      /* @__PURE__ */ jsx("p", { className: "text-slate-500 text-lg max-w-2xl mx-auto", children: dict?.tools?.pdfToImage?.description })
    ] }),
    /* @__PURE__ */ jsx(PDFDropzone, { onFileSelect: handleFileSelect, title: dict?.common?.clickToUpload, limit: dict?.common?.limit, buttonText: dict?.common?.browse })
  ] }) });
}

const $$Astro = createAstro("https://keeppdf.com");
function getStaticPaths() {
  return locales.map((lang) => ({ params: { lang } }));
}
const $$PdfToImage = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$PdfToImage;
  const { lang } = Astro2.params;
  const dict = getDictionary(lang);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "lang": lang, "dict": dict, "title": dict.metadata.pdfToImage.title, "description": dict.metadata.pdfToImage.description }, { "cookie-banner": ($$result2) => renderTemplate`${renderComponent($$result2, "CookieBanner", CookieBanner, { "client:load": true, "dict": dict, "slot": "cookie-banner", "client:component-hydration": "load", "client:component-path": "C:/Users/gold/.gemini/antigravity/scratch/keeppdf-astro/src/components/landing/CookieBanner", "client:component-export": "default" })}`, "default": ($$result2) => renderTemplate`  ${renderComponent($$result2, "PdfToImageClient", PdfToImageClient, { "client:load": true, "dict": dict, "client:component-hydration": "load", "client:component-path": "C:/Users/gold/.gemini/antigravity/scratch/keeppdf-astro/src/components/tools/PdfToImageClient", "client:component-export": "default" })} ${renderComponent($$result2, "HowToSection", HowToSection, { "client:visible": true, "slug": "pdf-to-image", "lang": lang, "client:component-hydration": "visible", "client:component-path": "C:/Users/gold/.gemini/antigravity/scratch/keeppdf-astro/src/components/tools/HowToSection", "client:component-export": "default" })} ${renderComponent($$result2, "UseCaseSection", UseCaseSection, { "client:visible": true, "slug": "pdf-to-image", "lang": lang, "client:component-hydration": "visible", "client:component-path": "C:/Users/gold/.gemini/antigravity/scratch/keeppdf-astro/src/components/tools/UseCaseSection", "client:component-export": "default" })}  `, "navbar": ($$result2) => renderTemplate`${renderComponent($$result2, "Navbar", Navbar, { "client:load": true, "lang": lang, "dict": dict, "slot": "navbar", "client:component-hydration": "load", "client:component-path": "C:/Users/gold/.gemini/antigravity/scratch/keeppdf-astro/src/components/landing/Navbar", "client:component-export": "default" })}` })}`;
}, "C:/Users/gold/.gemini/antigravity/scratch/keeppdf-astro/src/pages/[lang]/pdf-to-image.astro", void 0);

const $$file = "C:/Users/gold/.gemini/antigravity/scratch/keeppdf-astro/src/pages/[lang]/pdf-to-image.astro";
const $$url = "/[lang]/pdf-to-image";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$PdfToImage,
    file: $$file,
    getStaticPaths,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
