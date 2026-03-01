import { c as createAstro, a as createComponent, e as renderComponent, d as renderTemplate } from '../../chunks/astro/server_DMm3Hxu5.mjs';
import 'piccolore';
import { $ as $$Layout } from '../../chunks/Layout_vUtwWiA7.mjs';
import { c as cn, B as Button, g as getDictionary, l as locales, N as Navbar, C as CookieBanner } from '../../chunks/CookieBanner_-MUnfjGM.mjs';
import { jsx, jsxs } from 'react/jsx-runtime';
import { useState, useEffect } from 'react';
import { P as PDFDropzone } from '../../chunks/PDFDropzone_CN5nAjdt.mjs';
import { PDFDocument, degrees } from 'pdf-lib';
import { useSensors, useSensor, MouseSensor, TouchSensor, KeyboardSensor, DndContext, closestCenter, DragOverlay } from '@dnd-kit/core';
import { useSortable, sortableKeyboardCoordinates, SortableContext, rectSortingStrategy, arrayMove } from '@dnd-kit/sortable';
import { motion, AnimatePresence } from 'framer-motion';
import { RotateCw, Trash2, Loader2, ArrowLeft, ZoomOut, ZoomIn, RotateCcw, Save } from 'lucide-react';
import { CSS } from '@dnd-kit/utilities';
import { H as HowToSection, U as UseCaseSection } from '../../chunks/UseCaseSection_B3koId8q.mjs';
export { renderers } from '../../renderers.mjs';

function PageCard({ page, onRotate, onDelete, isDragging, isOverlay, dict, ...props }) {
  return /* @__PURE__ */ jsxs("div", { className: cn("group relative aspect-[1/1.4] bg-white rounded-lg shadow-sm border border-slate-200 overflow-hidden transition-all duration-200", isDragging ? "opacity-50" : "opacity-100", isOverlay ? "shadow-2xl ring-2 ring-indigo-500 scale-105 opacity-100 cursor-grabbing" : "hover:shadow-md hover:border-indigo-200", "h-full w-full"), ...props, children: [
    /* @__PURE__ */ jsx("div", { className: "w-full h-full flex items-center justify-center bg-slate-50 relative pointer-events-none", style: { transform: `rotate(${page.rotation}deg)` }, children: /* @__PURE__ */ jsx("img", { src: page.image, alt: `Page ${page.pageNumber}`, className: "max-w-full max-h-full object-contain pointer-events-none select-none" }) }),
    !isDragging && !isOverlay && /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors z-20 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100", children: /* @__PURE__ */ jsxs("div", { className: "pointer-events-auto flex gap-2", children: [
      /* @__PURE__ */ jsx(motion.button, { initial: { scale: 0.8, opacity: 0 }, whileHover: { scale: 1.1 }, whileTap: { scale: 0.9 }, animate: { scale: 1, opacity: 1 }, onClick: (e) => {
        e.stopPropagation();
        onRotate?.(page.id);
      }, className: "p-2 bg-white rounded-full text-slate-700 hover:text-indigo-600 hover:bg-indigo-50 shadow-lg cursor-pointer", title: dict?.tools?.organize?.editor?.rotateRight, children: /* @__PURE__ */ jsx(RotateCw, { size: 18 }) }),
      /* @__PURE__ */ jsx(motion.button, { initial: { scale: 0.8, opacity: 0 }, whileHover: { scale: 1.1 }, whileTap: { scale: 0.9 }, animate: { scale: 1, opacity: 1 }, onClick: (e) => {
        e.stopPropagation();
        onDelete?.(page.id);
      }, className: "p-2 bg-white rounded-full text-slate-700 hover:text-red-600 hover:bg-red-50 shadow-lg cursor-pointer", title: dict?.tools?.organize?.editor?.deletePage, children: /* @__PURE__ */ jsx(Trash2, { size: 18 }) })
    ] }) }),
    /* @__PURE__ */ jsx("div", { className: "absolute bottom-2 left-1/2 -translate-x-1/2 px-2 py-0.5 bg-black/60 text-white text-[10px] rounded-full backdrop-blur-sm z-20 pointer-events-none font-medium", children: page.pageNumber })
  ] });
}
function SortablePage({ id, page, onRotate, onDelete, dict }) {
  const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({ id });
  const style = { transform: CSS.Translate.toString(transform), transition, zIndex: isDragging ? 50 : "auto", position: "relative", touchAction: "none" };
  return /* @__PURE__ */ jsx("div", { ref: setNodeRef, style, ...attributes, ...listeners, className: "outline-none", children: /* @__PURE__ */ jsx(PageCard, { page, onRotate, onDelete, isDragging, dict }) });
}

let pdfjsLib = null;
async function getPdfjs() {
  if (!pdfjsLib) {
    pdfjsLib = await import('pdfjs-dist/build/pdf.mjs');
    pdfjsLib.GlobalWorkerOptions.workerSrc = "/pdf.worker.min.mjs";
  }
  return pdfjsLib;
}
function Organizer({ file, onBack, dict }) {
  const [pages, setPages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [zoom, setZoom] = useState(5);
  const [activeId, setActiveId] = useState(null);
  const sensors = useSensors(
    useSensor(MouseSensor, { activationConstraint: { distance: 10 } }),
    useSensor(TouchSensor, { activationConstraint: { delay: 250, tolerance: 5 } }),
    useSensor(KeyboardSensor, { coordinateGetter: sortableKeyboardCoordinates })
  );
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
            return { id: `page-${index}`, originalIndex: index, image: canvas.toDataURL(), pageNumber: index + 1, rotation: 0 };
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
  const handleDragStart = (event) => setActiveId(event.active.id);
  const handleDragEnd = (event) => {
    const { active, over } = event;
    if (active.id !== over.id) {
      setPages((items) => {
        const oldIndex = items.findIndex((item) => item.id === active.id);
        const newIndex = items.findIndex((item) => item.id === over.id);
        return arrayMove(items, oldIndex, newIndex);
      });
    }
    setActiveId(null);
  };
  const handleRotate = (id) => setPages(pages.map((page) => page.id === id ? { ...page, rotation: (page.rotation + 90) % 360 } : page));
  const handleDelete = (id) => setPages(pages.filter((page) => page.id !== id));
  const handleRotateAll = (direction) => setPages(pages.map((page) => ({ ...page, rotation: (page.rotation + (direction === "cw" ? 90 : -90) + 360) % 360 })));
  const handleSave = async () => {
    setIsSaving(true);
    try {
      const arrayBuffer = await file.arrayBuffer();
      const srcDoc = await PDFDocument.load(arrayBuffer);
      const newDoc = await PDFDocument.create();
      for (const page of pages) {
        const [copiedPage] = await newDoc.copyPages(srcDoc, [page.originalIndex]);
        const existingRotation = copiedPage.getRotation().angle;
        copiedPage.setRotation(degrees(existingRotation + page.rotation));
        newDoc.addPage(copiedPage);
      }
      const pdfBytes = await newDoc.save();
      const blob = new Blob([pdfBytes], { type: "application/pdf" });
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = `organized-${file.name}`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error("Error saving PDF:", error);
    } finally {
      setIsSaving(false);
    }
  };
  if (isLoading) {
    return /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center justify-center p-12 space-y-4 min-h-[50vh]", children: [
      /* @__PURE__ */ jsx(Loader2, { className: "w-8 h-8 animate-spin text-indigo-600" }),
      /* @__PURE__ */ jsx("p", { className: "text-slate-500", children: dict?.tools?.organize?.editor?.loading })
    ] });
  }
  const gridCols = { 3: "grid-cols-3", 4: "grid-cols-4", 5: "grid-cols-5", 6: "grid-cols-6", 7: "grid-cols-7", 8: "grid-cols-8" }[zoom] || "grid-cols-5";
  return /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
    /* @__PURE__ */ jsxs("div", { className: "sticky top-0 z-40 bg-white/80 backdrop-blur-md p-4 rounded-2xl border border-slate-200 shadow-sm flex flex-wrap items-center justify-between gap-4", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4", children: [
        /* @__PURE__ */ jsx("button", { onClick: onBack, className: "p-2 hover:bg-slate-100 rounded-full transition-colors text-slate-600", children: /* @__PURE__ */ jsx(ArrowLeft, { size: 20 }) }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h2", { className: "font-semibold text-slate-800", children: file.name }),
          /* @__PURE__ */ jsx("p", { className: "text-sm text-slate-500", children: (dict?.tools?.organize?.editor?.pageCount || "{count} pages").replace("{count}", pages.length) })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-6", children: [
        /* @__PURE__ */ jsxs("div", { className: "hidden md:flex items-center gap-2 text-slate-500", children: [
          /* @__PURE__ */ jsx(ZoomOut, { size: 16 }),
          /* @__PURE__ */ jsx("div", { className: "w-32", children: /* @__PURE__ */ jsx("input", { type: "range", min: "3", max: "8", value: zoom, onChange: (e) => setZoom(parseInt(e.target.value)), className: "w-full accent-indigo-600 h-1 bg-slate-200 rounded-lg appearance-none cursor-pointer" }) }),
          /* @__PURE__ */ jsx(ZoomIn, { size: 16 })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "h-8 w-px bg-slate-200 hidden md:block" }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsxs(Button, { variant: "outline", size: "sm", onClick: () => handleRotateAll("ccw"), title: dict?.tools?.organize?.editor?.rotateAllLeft, children: [
            /* @__PURE__ */ jsx(RotateCcw, { size: 16, className: "mr-2" }),
            dict?.tools?.organize?.editor?.rotateLeft
          ] }),
          /* @__PURE__ */ jsxs(Button, { variant: "outline", size: "sm", onClick: () => handleRotateAll("cw"), title: dict?.tools?.organize?.editor?.rotateAllRight, children: [
            /* @__PURE__ */ jsx(RotateCw, { size: 16, className: "mr-2" }),
            dict?.tools?.organize?.editor?.rotateRight
          ] })
        ] }),
        /* @__PURE__ */ jsxs(Button, { onClick: handleSave, disabled: isSaving, className: "bg-indigo-600 hover:bg-indigo-700 min-w-[120px]", children: [
          isSaving ? /* @__PURE__ */ jsx(Loader2, { size: 18, className: "animate-spin mr-2" }) : /* @__PURE__ */ jsx(Save, { size: 18, className: "mr-2" }),
          dict?.tools?.organize?.editor?.save
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxs(DndContext, { sensors, collisionDetection: closestCenter, onDragStart: handleDragStart, onDragEnd: handleDragEnd, children: [
      /* @__PURE__ */ jsx(SortableContext, { items: pages.map((p) => p.id), strategy: rectSortingStrategy, children: /* @__PURE__ */ jsx("div", { className: cn("grid gap-4 md:gap-6 p-4 min-h-[500px]", gridCols, "grid-cols-2 md:grid-cols-3 lg:grid-cols-5"), children: /* @__PURE__ */ jsx(AnimatePresence, { children: pages.map((page) => /* @__PURE__ */ jsx(SortablePage, { id: page.id, page, onRotate: handleRotate, onDelete: handleDelete, dict }, page.id)) }) }) }),
      /* @__PURE__ */ jsx(DragOverlay, { children: activeId ? (() => {
        const activePage = pages.find((p) => p.id === activeId);
        return activePage ? /* @__PURE__ */ jsx(PageCard, { page: activePage, isOverlay: true, style: { transform: "none" } }) : null;
      })() : null })
    ] })
  ] });
}

function OrganizeClient({ dict }) {
  const [file, setFile] = useState(null);
  const handleFileSelect = (files) => {
    if (files && files.length > 0) setFile(files[0]);
  };
  if (file) return /* @__PURE__ */ jsx("section", { className: "py-12 bg-slate-50 min-h-screen", children: /* @__PURE__ */ jsx("div", { className: "container-custom", children: /* @__PURE__ */ jsx(Organizer, { file, onBack: () => setFile(null), dict }) }) });
  return /* @__PURE__ */ jsx("section", { className: "py-20 bg-slate-50 min-h-screen", children: /* @__PURE__ */ jsxs("div", { className: "container-custom max-w-4xl mx-auto", children: [
    /* @__PURE__ */ jsxs("div", { className: "text-center mb-12", children: [
      /* @__PURE__ */ jsx("h1", { className: "text-4xl font-bold text-slate-900 mb-4", children: dict?.metadata?.organize?.h1 || dict?.tools?.organize?.title }),
      /* @__PURE__ */ jsx("p", { className: "text-slate-500 text-lg max-w-2xl mx-auto", children: dict?.tools?.organize?.description })
    ] }),
    /* @__PURE__ */ jsx(PDFDropzone, { onFileSelect: handleFileSelect, title: dict?.common?.clickToUpload, limit: dict?.common?.limit, buttonText: dict?.common?.browse })
  ] }) });
}

const $$Astro = createAstro("https://keeppdf.com");
function getStaticPaths() {
  return locales.map((lang) => ({ params: { lang } }));
}
const $$Organize = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Organize;
  const { lang } = Astro2.params;
  const dict = getDictionary(lang);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "lang": lang, "dict": dict, "title": dict.metadata.organize.title, "description": dict.metadata.organize.description }, { "cookie-banner": ($$result2) => renderTemplate`${renderComponent($$result2, "CookieBanner", CookieBanner, { "client:load": true, "dict": dict, "slot": "cookie-banner", "client:component-hydration": "load", "client:component-path": "C:/Users/gold/.gemini/antigravity/scratch/keeppdf-astro/src/components/landing/CookieBanner", "client:component-export": "default" })}`, "default": ($$result2) => renderTemplate`  ${renderComponent($$result2, "OrganizeClient", OrganizeClient, { "client:load": true, "dict": dict, "client:component-hydration": "load", "client:component-path": "C:/Users/gold/.gemini/antigravity/scratch/keeppdf-astro/src/components/tools/OrganizeClient", "client:component-export": "default" })} ${renderComponent($$result2, "HowToSection", HowToSection, { "client:visible": true, "slug": "organize", "lang": lang, "client:component-hydration": "visible", "client:component-path": "C:/Users/gold/.gemini/antigravity/scratch/keeppdf-astro/src/components/tools/HowToSection", "client:component-export": "default" })} ${renderComponent($$result2, "UseCaseSection", UseCaseSection, { "client:visible": true, "slug": "organize", "lang": lang, "client:component-hydration": "visible", "client:component-path": "C:/Users/gold/.gemini/antigravity/scratch/keeppdf-astro/src/components/tools/UseCaseSection", "client:component-export": "default" })}  `, "navbar": ($$result2) => renderTemplate`${renderComponent($$result2, "Navbar", Navbar, { "client:load": true, "lang": lang, "dict": dict, "slot": "navbar", "client:component-hydration": "load", "client:component-path": "C:/Users/gold/.gemini/antigravity/scratch/keeppdf-astro/src/components/landing/Navbar", "client:component-export": "default" })}` })}`;
}, "C:/Users/gold/.gemini/antigravity/scratch/keeppdf-astro/src/pages/[lang]/organize.astro", void 0);

const $$file = "C:/Users/gold/.gemini/antigravity/scratch/keeppdf-astro/src/pages/[lang]/organize.astro";
const $$url = "/[lang]/organize";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Organize,
    file: $$file,
    getStaticPaths,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
