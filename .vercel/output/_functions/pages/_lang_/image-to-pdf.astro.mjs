import { c as createAstro, a as createComponent, e as renderComponent, d as renderTemplate } from '../../chunks/astro/server_DMm3Hxu5.mjs';
import 'piccolore';
import { $ as $$Layout } from '../../chunks/Layout_vUtwWiA7.mjs';
import { c as cn, B as Button, g as getDictionary, l as locales, N as Navbar, C as CookieBanner } from '../../chunks/CookieBanner_-MUnfjGM.mjs';
import { jsx, jsxs } from 'react/jsx-runtime';
import { useState, useCallback } from 'react';
import { PDFDocument } from 'pdf-lib';
import { useSensors, useSensor, MouseSensor, TouchSensor, KeyboardSensor, DndContext, closestCenter, DragOverlay } from '@dnd-kit/core';
import { useSortable, sortableKeyboardCoordinates, SortableContext, rectSortingStrategy, arrayMove } from '@dnd-kit/sortable';
import { motion, AnimatePresence } from 'framer-motion';
import { Trash2, ArrowLeft, Plus, Loader2, Save, FileImage } from 'lucide-react';
import { CSS } from '@dnd-kit/utilities';
import { useDropzone } from 'react-dropzone';
import { H as HowToSection, U as UseCaseSection } from '../../chunks/UseCaseSection_B3koId8q.mjs';
export { renderers } from '../../renderers.mjs';

function ImageCard({ image, index, onDelete, isDragging, isOverlay, ...props }) {
  return /* @__PURE__ */ jsxs("div", { className: cn("group relative aspect-[1/1.4] bg-white rounded-lg shadow-sm border border-slate-200 overflow-hidden transition-all duration-200", isDragging ? "opacity-50" : "opacity-100", isOverlay ? "shadow-2xl ring-2 ring-indigo-500 scale-105 opacity-100 cursor-grabbing" : "hover:shadow-md hover:border-indigo-200", "h-full w-full"), ...props, children: [
    /* @__PURE__ */ jsx("div", { className: "w-full h-full flex items-center justify-center bg-slate-50 relative", children: /* @__PURE__ */ jsx("img", { src: image.preview, alt: image.file.name, className: "w-full h-full object-contain pointer-events-none select-none" }) }),
    !isDragging && !isOverlay && /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors z-20 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100", children: /* @__PURE__ */ jsx("div", { className: "pointer-events-auto", children: /* @__PURE__ */ jsx(motion.button, { initial: { scale: 0.8, opacity: 0 }, whileHover: { scale: 1.1 }, whileTap: { scale: 0.9 }, animate: { scale: 1, opacity: 1 }, onClick: (e) => {
      e.stopPropagation();
      onDelete?.(image.id);
    }, className: "p-2 bg-white rounded-full text-slate-700 hover:text-red-600 hover:bg-red-50 shadow-lg cursor-pointer", title: "Remove Image", children: /* @__PURE__ */ jsx(Trash2, { size: 18 }) }) }) }),
    /* @__PURE__ */ jsx("div", { className: "absolute top-2 left-2 px-2 py-0.5 bg-black/60 text-white text-[10px] rounded-full backdrop-blur-sm z-20 pointer-events-none font-medium", children: index + 1 })
  ] });
}
function SortableImage({ id, image, index, onDelete }) {
  const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({ id });
  const style = { transform: CSS.Translate.toString(transform), transition, zIndex: isDragging ? 50 : "auto", position: "relative", touchAction: "none" };
  return /* @__PURE__ */ jsx("div", { ref: setNodeRef, style, ...attributes, ...listeners, className: "outline-none", children: /* @__PURE__ */ jsx(ImageCard, { image, index, onDelete, isDragging }) });
}

function ImageToPdf({ onBack, dict }) {
  const [images, setImages] = useState([]);
  const [isProcessing, setIsProcessing] = useState(false);
  const [activeId, setActiveId] = useState(null);
  const onDrop = useCallback((acceptedFiles) => {
    const newImages = acceptedFiles.map((file) => ({ id: Math.random().toString(36).substr(2, 9), file, preview: URL.createObjectURL(file) }));
    setImages((prev) => [...prev, ...newImages]);
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop, accept: { "image/jpeg": [], "image/png": [], "image/webp": [] } });
  const sensors = useSensors(
    useSensor(MouseSensor, { activationConstraint: { distance: 10 } }),
    useSensor(TouchSensor, { activationConstraint: { delay: 250, tolerance: 5 } }),
    useSensor(KeyboardSensor, { coordinateGetter: sortableKeyboardCoordinates })
  );
  const handleDragStart = (event) => setActiveId(event.active.id);
  const handleDragEnd = (event) => {
    const { active, over } = event;
    if (active.id !== over.id) setImages((items) => {
      const oldIndex = items.findIndex((item) => item.id === active.id);
      const newIndex = items.findIndex((item) => item.id === over.id);
      return arrayMove(items, oldIndex, newIndex);
    });
    setActiveId(null);
  };
  const handleDelete = (id) => setImages((prev) => prev.filter((img) => img.id !== id));
  const handleSave = async () => {
    if (images.length === 0) return;
    setIsProcessing(true);
    try {
      const pdfDoc = await PDFDocument.create();
      for (const imgData of images) {
        const imageBytes = await imgData.file.arrayBuffer();
        let image;
        if (imgData.file.type === "image/jpeg") {
          image = await pdfDoc.embedJpg(imageBytes);
        } else if (imgData.file.type === "image/png") {
          image = await pdfDoc.embedPng(imageBytes);
        } else {
          const bitmap = await createImageBitmap(imgData.file);
          const canvas = document.createElement("canvas");
          canvas.width = bitmap.width;
          canvas.height = bitmap.height;
          const ctx = canvas.getContext("2d");
          ctx.drawImage(bitmap, 0, 0);
          const jpgUrl = canvas.toDataURL("image/jpeg", 0.8);
          const jpgBytes = await fetch(jpgUrl).then((res) => res.arrayBuffer());
          image = await pdfDoc.embedJpg(jpgBytes);
        }
        const page = pdfDoc.addPage([image.width, image.height]);
        page.drawImage(image, { x: 0, y: 0, width: image.width, height: image.height });
      }
      const pdfBytes = await pdfDoc.save();
      const blob = new Blob([pdfBytes], { type: "application/pdf" });
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = "images.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error("Error creating PDF:", error);
      alert("Failed to create PDF.");
    } finally {
      setIsProcessing(false);
    }
  };
  return /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
    /* @__PURE__ */ jsxs("div", { className: "sticky top-0 z-40 bg-white/80 backdrop-blur-md p-4 rounded-2xl border border-slate-200 shadow-sm flex flex-wrap items-center justify-between gap-4", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4", children: [
        /* @__PURE__ */ jsx("button", { onClick: onBack, className: "p-2 hover:bg-slate-100 rounded-full transition-colors text-slate-600", children: /* @__PURE__ */ jsx(ArrowLeft, { size: 20 }) }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h2", { className: "font-semibold text-slate-800", children: dict?.tools?.imageToPdf?.title }),
          /* @__PURE__ */ jsx("p", { className: "text-sm text-slate-500", children: (dict?.common?.filesSelected || "{count} file(s) selected").replace("{count}", images.length) })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ jsxs("div", { ...getRootProps(), className: "cursor-pointer", children: [
          /* @__PURE__ */ jsx("input", { ...getInputProps() }),
          /* @__PURE__ */ jsxs(Button, { variant: "outline", size: "sm", children: [
            /* @__PURE__ */ jsx(Plus, { size: 16, className: "mr-2" }),
            dict?.common?.addImages
          ] })
        ] }),
        /* @__PURE__ */ jsxs(Button, { onClick: handleSave, disabled: isProcessing || images.length === 0, className: "bg-indigo-600 hover:bg-indigo-700 min-w-[140px]", children: [
          isProcessing ? /* @__PURE__ */ jsx(Loader2, { size: 18, className: "animate-spin mr-2" }) : /* @__PURE__ */ jsx(Save, { size: 18, className: "mr-2" }),
          dict?.common?.convertToPdf
        ] })
      ] })
    ] }),
    images.length === 0 ? /* @__PURE__ */ jsxs("div", { ...getRootProps(), className: cn("flex flex-col items-center justify-center p-12 border-2 border-dashed rounded-3xl transition-all min-h-[400px] cursor-pointer", isDragActive ? "border-indigo-500 bg-indigo-50/50" : "border-slate-200 hover:border-indigo-300 hover:bg-slate-50"), children: [
      /* @__PURE__ */ jsx("input", { ...getInputProps() }),
      /* @__PURE__ */ jsx("div", { className: "w-20 h-20 bg-indigo-50 text-indigo-600 rounded-full flex items-center justify-center mb-6", children: /* @__PURE__ */ jsx(FileImage, { size: 40 }) }),
      /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-slate-900 mb-2", children: dict?.common?.uploadImages }),
      /* @__PURE__ */ jsx("p", { className: "text-slate-500 text-center max-w-sm", children: dict?.common?.dragDropImages })
    ] }) : /* @__PURE__ */ jsxs(DndContext, { sensors, collisionDetection: closestCenter, onDragStart: handleDragStart, onDragEnd: handleDragEnd, children: [
      /* @__PURE__ */ jsx(SortableContext, { items: images.map((img) => img.id), strategy: rectSortingStrategy, children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6 pb-12", children: [
        /* @__PURE__ */ jsx(AnimatePresence, { children: images.map((img, index) => /* @__PURE__ */ jsx(SortableImage, { id: img.id, image: img, index, onDelete: handleDelete }, img.id)) }),
        /* @__PURE__ */ jsxs("div", { ...getRootProps(), className: "aspect-[1/1.4] border-2 border-dashed border-slate-200 rounded-lg flex flex-col items-center justify-center text-slate-400 hover:text-indigo-600 hover:border-indigo-300 hover:bg-indigo-50/10 cursor-pointer transition-all", children: [
          /* @__PURE__ */ jsx("input", { ...getInputProps() }),
          /* @__PURE__ */ jsx(Plus, { size: 32, className: "mb-2" }),
          /* @__PURE__ */ jsx("span", { className: "text-sm font-medium", children: dict?.common?.addImages })
        ] })
      ] }) }),
      /* @__PURE__ */ jsx(DragOverlay, { children: activeId ? (() => {
        const activeImg = images.find((i) => i.id === activeId);
        const activeIndex = images.findIndex((i) => i.id === activeId);
        return activeImg ? /* @__PURE__ */ jsx(ImageCard, { image: activeImg, index: activeIndex, isOverlay: true, style: { transform: "none" } }) : null;
      })() : null })
    ] })
  ] });
}

function ImageToPdfClient({ dict }) {
  const handleBack = () => {
    window.location.reload();
  };
  return /* @__PURE__ */ jsx("section", { className: "py-12 bg-slate-50 min-h-screen", children: /* @__PURE__ */ jsx("div", { className: "container-custom", children: /* @__PURE__ */ jsx(ImageToPdf, { onBack: handleBack, dict }) }) });
}

const $$Astro = createAstro("https://keeppdf.com");
function getStaticPaths() {
  return locales.map((lang) => ({ params: { lang } }));
}
const $$ImageToPdf = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ImageToPdf;
  const { lang } = Astro2.params;
  const dict = getDictionary(lang);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "lang": lang, "dict": dict, "title": dict.metadata.imageToPdf.title, "description": dict.metadata.imageToPdf.description }, { "cookie-banner": ($$result2) => renderTemplate`${renderComponent($$result2, "CookieBanner", CookieBanner, { "client:load": true, "dict": dict, "slot": "cookie-banner", "client:component-hydration": "load", "client:component-path": "C:/Users/gold/.gemini/antigravity/scratch/keeppdf-astro/src/components/landing/CookieBanner", "client:component-export": "default" })}`, "default": ($$result2) => renderTemplate`  ${renderComponent($$result2, "ImageToPdfClient", ImageToPdfClient, { "client:load": true, "dict": dict, "client:component-hydration": "load", "client:component-path": "C:/Users/gold/.gemini/antigravity/scratch/keeppdf-astro/src/components/tools/ImageToPdfClient", "client:component-export": "default" })} ${renderComponent($$result2, "HowToSection", HowToSection, { "client:visible": true, "slug": "image-to-pdf", "lang": lang, "client:component-hydration": "visible", "client:component-path": "C:/Users/gold/.gemini/antigravity/scratch/keeppdf-astro/src/components/tools/HowToSection", "client:component-export": "default" })} ${renderComponent($$result2, "UseCaseSection", UseCaseSection, { "client:visible": true, "slug": "image-to-pdf", "lang": lang, "client:component-hydration": "visible", "client:component-path": "C:/Users/gold/.gemini/antigravity/scratch/keeppdf-astro/src/components/tools/UseCaseSection", "client:component-export": "default" })}  `, "navbar": ($$result2) => renderTemplate`${renderComponent($$result2, "Navbar", Navbar, { "client:load": true, "lang": lang, "dict": dict, "slot": "navbar", "client:component-hydration": "load", "client:component-path": "C:/Users/gold/.gemini/antigravity/scratch/keeppdf-astro/src/components/landing/Navbar", "client:component-export": "default" })}` })}`;
}, "C:/Users/gold/.gemini/antigravity/scratch/keeppdf-astro/src/pages/[lang]/image-to-pdf.astro", void 0);

const $$file = "C:/Users/gold/.gemini/antigravity/scratch/keeppdf-astro/src/pages/[lang]/image-to-pdf.astro";
const $$url = "/[lang]/image-to-pdf";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$ImageToPdf,
    file: $$file,
    getStaticPaths,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
