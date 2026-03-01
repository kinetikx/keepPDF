import { c as createAstro, a as createComponent, e as renderComponent, d as renderTemplate } from '../../chunks/astro/server_DMm3Hxu5.mjs';
import 'piccolore';
import { $ as $$Layout } from '../../chunks/Layout_vUtwWiA7.mjs';
import { B as Button, g as getDictionary, l as locales, N as Navbar, C as CookieBanner } from '../../chunks/CookieBanner_-MUnfjGM.mjs';
import { jsx, jsxs, Fragment } from 'react/jsx-runtime';
import { useState } from 'react';
import { FileText, AlertCircle, Loader2, Download } from 'lucide-react';
import { Document, Paragraph, Packer } from 'docx';
import saveAs from 'file-saver';
import { H as HowToSection, U as UseCaseSection } from '../../chunks/UseCaseSection_B3koId8q.mjs';
export { renderers } from '../../renderers.mjs';

function PdfToWord({ dict }) {
  const [file, setFile] = useState(null);
  const [isConverting, setIsConverting] = useState(false);
  const [error, setError] = useState(null);
  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile && selectedFile.type === "application/pdf") {
      setFile(selectedFile);
      setError(null);
    } else {
      setError(dict?.tools?.pdfToWord?.editor?.error);
    }
  };
  const convertToWord = async () => {
    if (!file) return;
    setIsConverting(true);
    setError(null);
    try {
      const pdfjsLib = await import('pdfjs-dist/build/pdf.mjs');
      pdfjsLib.GlobalWorkerOptions.workerSrc = "/pdf.worker.min.mjs";
      const arrayBuffer = await file.arrayBuffer();
      const pdf = await pdfjsLib.getDocument({ data: arrayBuffer }).promise;
      let extractedText = [];
      for (let i = 1; i <= pdf.numPages; i++) {
        const page = await pdf.getPage(i);
        const textContent = await page.getTextContent();
        extractedText.push(textContent.items.map((item) => item.str).join(" "));
      }
      const doc = new Document({ sections: [{ properties: {}, children: extractedText.map((text) => new Paragraph({ text, spacing: { after: 200 } })) }] });
      const blob = await Packer.toBlob(doc);
      saveAs(blob, file.name.replace(".pdf", ".docx"));
    } catch (err) {
      console.error("Conversion failed:", err);
      setError(dict?.tools?.pdfToWord?.editor?.conversionError);
    } finally {
      setIsConverting(false);
    }
  };
  return /* @__PURE__ */ jsx("section", { className: "py-20 bg-slate-50 min-h-screen", children: /* @__PURE__ */ jsxs("div", { className: "container-custom max-w-4xl mx-auto text-center", children: [
    /* @__PURE__ */ jsx("h1", { className: "text-4xl font-bold text-slate-900 mb-4", children: dict?.metadata?.pdfToWord?.h1 || dict?.tools?.pdfToWord?.editor?.title }),
    /* @__PURE__ */ jsx("p", { className: "text-slate-500 mb-12", children: dict?.tools?.pdfToWord?.editor?.desc }),
    /* @__PURE__ */ jsx("div", { className: "bg-white p-12 rounded-3xl shadow-xl border border-slate-100", children: !file ? /* @__PURE__ */ jsxs("div", { className: "relative border-2 border-dashed border-slate-200 rounded-2xl p-12 flex flex-col items-center justify-center gap-4 transition-colors hover:border-blue-400 hover:bg-blue-50/10", children: [
      /* @__PURE__ */ jsx("div", { className: "w-16 h-16 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mb-4", children: /* @__PURE__ */ jsx(FileText, { size: 32 }) }),
      /* @__PURE__ */ jsx("h3", { className: "text-xl font-medium text-slate-900", children: dict?.tools?.pdfToWord?.editor?.uploadTitle }),
      /* @__PURE__ */ jsx("p", { className: "text-slate-400", children: dict?.tools?.pdfToWord?.editor?.uploadDesc }),
      /* @__PURE__ */ jsx("input", { type: "file", accept: ".pdf", onChange: handleFileChange, className: "absolute inset-0 w-full h-full opacity-0 cursor-pointer" })
    ] }) : /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center gap-6", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4 p-4 bg-slate-50 rounded-xl w-full max-w-md border border-slate-200", children: [
        /* @__PURE__ */ jsx(FileText, { className: "text-blue-600", size: 24 }),
        /* @__PURE__ */ jsxs("div", { className: "text-left flex-1 min-w-0", children: [
          /* @__PURE__ */ jsx("p", { className: "font-medium text-slate-900 truncate", children: file.name }),
          /* @__PURE__ */ jsxs("p", { className: "text-sm text-slate-400", children: [
            (file.size / 1024).toFixed(2),
            " KB"
          ] })
        ] }),
        /* @__PURE__ */ jsx(Button, { variant: "ghost", size: "icon", onClick: () => setFile(null), children: /* @__PURE__ */ jsx(AlertCircle, { size: 20, className: "text-slate-400 hover:text-red-500" }) })
      ] }),
      error && /* @__PURE__ */ jsxs("div", { className: "text-red-500 bg-red-50 px-4 py-2 rounded-lg text-sm flex items-center gap-2", children: [
        /* @__PURE__ */ jsx(AlertCircle, { size: 16 }),
        " ",
        error
      ] }),
      /* @__PURE__ */ jsx(Button, { size: "lg", onClick: convertToWord, disabled: isConverting, className: "min-w-[200px] h-12 bg-blue-600 hover:bg-blue-700", children: isConverting ? /* @__PURE__ */ jsxs(Fragment, { children: [
        /* @__PURE__ */ jsx(Loader2, { className: "mr-2 h-4 w-4 animate-spin" }),
        " ",
        dict?.tools?.pdfToWord?.editor?.converting
      ] }) : /* @__PURE__ */ jsxs(Fragment, { children: [
        /* @__PURE__ */ jsx(Download, { className: "mr-2 h-4 w-4" }),
        " ",
        dict?.tools?.pdfToWord?.editor?.convert
      ] }) })
    ] }) })
  ] }) });
}

const $$Astro = createAstro("https://keeppdf.com");
function getStaticPaths() {
  return locales.map((lang) => ({ params: { lang } }));
}
const $$PdfToWord = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$PdfToWord;
  const { lang } = Astro2.params;
  const dict = getDictionary(lang);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "lang": lang, "dict": dict, "title": dict.metadata.pdfToWord.title, "description": dict.metadata.pdfToWord.description }, { "cookie-banner": ($$result2) => renderTemplate`${renderComponent($$result2, "CookieBanner", CookieBanner, { "client:load": true, "dict": dict, "slot": "cookie-banner", "client:component-hydration": "load", "client:component-path": "C:/Users/gold/.gemini/antigravity/scratch/keeppdf-astro/src/components/landing/CookieBanner", "client:component-export": "default" })}`, "default": ($$result2) => renderTemplate`  ${renderComponent($$result2, "PdfToWord", PdfToWord, { "client:load": true, "dict": dict, "client:component-hydration": "load", "client:component-path": "C:/Users/gold/.gemini/antigravity/scratch/keeppdf-astro/src/components/pdf-to-word/PdfToWord", "client:component-export": "default" })} ${renderComponent($$result2, "HowToSection", HowToSection, { "client:visible": true, "slug": "pdf-to-word", "lang": lang, "client:component-hydration": "visible", "client:component-path": "C:/Users/gold/.gemini/antigravity/scratch/keeppdf-astro/src/components/tools/HowToSection", "client:component-export": "default" })} ${renderComponent($$result2, "UseCaseSection", UseCaseSection, { "client:visible": true, "slug": "pdf-to-word", "lang": lang, "client:component-hydration": "visible", "client:component-path": "C:/Users/gold/.gemini/antigravity/scratch/keeppdf-astro/src/components/tools/UseCaseSection", "client:component-export": "default" })}  `, "navbar": ($$result2) => renderTemplate`${renderComponent($$result2, "Navbar", Navbar, { "client:load": true, "lang": lang, "dict": dict, "slot": "navbar", "client:component-hydration": "load", "client:component-path": "C:/Users/gold/.gemini/antigravity/scratch/keeppdf-astro/src/components/landing/Navbar", "client:component-export": "default" })}` })}`;
}, "C:/Users/gold/.gemini/antigravity/scratch/keeppdf-astro/src/pages/[lang]/pdf-to-word.astro", void 0);

const $$file = "C:/Users/gold/.gemini/antigravity/scratch/keeppdf-astro/src/pages/[lang]/pdf-to-word.astro";
const $$url = "/[lang]/pdf-to-word";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$PdfToWord,
    file: $$file,
    getStaticPaths,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
