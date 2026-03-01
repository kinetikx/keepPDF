import { jsxs, jsx } from 'react/jsx-runtime';
import { useState, useCallback } from 'react';
import { FileText, CloudUpload, Plus } from 'lucide-react';
import { c as cn } from './CookieBanner_-MUnfjGM.mjs';
import { motion } from 'framer-motion';

function PDFDropzone({ onFileSelect, ...props }) {
  const [isDragging, setIsDragging] = useState(false);
  const handleDragEnter = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  }, []);
  const handleDragLeave = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  }, []);
  const handleDragOver = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
  }, []);
  const handleDrop = useCallback(
    (e) => {
      e.preventDefault();
      e.stopPropagation();
      setIsDragging(false);
      const files = [...e.dataTransfer.files];
      if (files && files.length > 0) {
        const pdfFiles = files.filter((file) => file.type === "application/pdf");
        if (pdfFiles.length > 0) {
          onFileSelect?.(pdfFiles);
        } else {
          console.warn("No PDF files dropped");
        }
      }
    },
    [onFileSelect]
  );
  const handleFileInput = useCallback((e) => {
    const files = [...e.target.files];
    if (files && files.length > 0) {
      onFileSelect?.(files);
    }
  }, [onFileSelect]);
  return /* @__PURE__ */ jsxs(
    motion.div,
    {
      onDragEnter: handleDragEnter,
      onDragLeave: handleDragLeave,
      onDragOver: handleDragOver,
      onDrop: handleDrop,
      onClick: () => document.getElementById("file-upload").click(),
      whileHover: { scale: 1.01 },
      animate: {
        backgroundColor: isDragging ? "rgba(238, 242, 255, 0.4)" : "rgba(255, 255, 255, 0.9)",
        borderColor: isDragging ? "rgba(99, 102, 241, 0.8)" : "rgba(226, 232, 240, 1)",
        scale: isDragging ? 1.02 : 1
      },
      transition: { type: "spring", stiffness: 300, damping: 20 },
      className: cn(
        "relative flex flex-col items-center justify-center px-6 py-16 w-full cursor-pointer overflow-hidden rounded-[3rem] border-2 border-dashed shadow-sm hover:shadow-xl transition-shadow group backdrop-blur-xl",
        isDragging ? "border-indigo-500 shadow-indigo-200/50 ring-8 ring-indigo-50" : "border-slate-300"
      ),
      children: [
        /* @__PURE__ */ jsx(
          "input",
          {
            id: "file-upload",
            type: "file",
            className: "hidden",
            accept: ".pdf",
            multiple: true,
            onChange: handleFileInput
          }
        ),
        /* @__PURE__ */ jsxs("div", { className: "absolute inset-0 z-0 pointer-events-none overflow-hidden rounded-[3rem]", children: [
          /* @__PURE__ */ jsx("div", { className: "absolute inset-0 opacity-[0.03] bg-[radial-gradient(#6366f1_1px,transparent_1px)] [background-size:24px_24px]" }),
          /* @__PURE__ */ jsx("div", { className: "absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-blue-50/50 rounded-full blur-3xl -translate-y-1/2" }),
          /* @__PURE__ */ jsx("div", { className: "absolute top-1/2 right-1/4 w-[400px] h-[400px] bg-indigo-50/50 rounded-full blur-3xl -translate-y-1/2" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "relative z-10 w-full flex flex-col items-center pointer-events-none", children: [
          /* @__PURE__ */ jsxs("div", { className: "relative w-full max-w-lg h-64 flex items-center justify-center mb-8", children: [
            /* @__PURE__ */ jsx("div", { className: cn(
              "absolute w-48 h-48 rounded-full blur-3xl opacity-40 transition-colors duration-700",
              isDragging ? "bg-indigo-200 scale-125" : "bg-blue-100 scale-100"
            ) }),
            /* @__PURE__ */ jsx(
              motion.div,
              {
                className: "absolute bottom-6 w-60 h-40 bg-[#e0e7ff] rounded-2xl shadow-inner border border-indigo-100",
                animate: { scale: isDragging ? 1.05 : 1, y: isDragging ? -5 : 0 },
                children: /* @__PURE__ */ jsx("div", { className: "absolute top-0 left-0 w-24 h-8 bg-[#c7d2fe] rounded-tl-2xl rounded-tr-xl transform -translate-y-full" })
              }
            ),
            /* @__PURE__ */ jsxs(
              motion.div,
              {
                className: "absolute top-0 left-10 w-36 h-48 bg-white rounded-xl shadow-[0_10px_40px_rgba(0,0,0,0.08)] border border-slate-100 p-4 transform -rotate-[15deg] origin-bottom-left",
                animate: {
                  y: isDragging ? -40 : -5,
                  rotate: isDragging ? -25 : -15,
                  x: isDragging ? -30 : 0
                },
                transition: { type: "spring", stiffness: 200, damping: 15 },
                children: [
                  /* @__PURE__ */ jsx("div", { className: "absolute -top-3 -left-4 bg-red-500 text-white text-[12px] font-black tracking-wider px-3 py-1 rounded shadow-lg transform -rotate-12", children: "PDF" }),
                  /* @__PURE__ */ jsx("div", { className: "w-1/2 h-2.5 bg-blue-500 rounded-full mb-4 mt-6" }),
                  /* @__PURE__ */ jsx("div", { className: "w-full h-2.5 bg-slate-100 rounded-full mb-3" }),
                  /* @__PURE__ */ jsx("div", { className: "w-5/6 h-2.5 bg-slate-100 rounded-full mb-3" }),
                  /* @__PURE__ */ jsx("div", { className: "w-full h-2.5 bg-slate-100 rounded-full" })
                ]
              }
            ),
            /* @__PURE__ */ jsxs(
              motion.div,
              {
                className: "absolute top-4 right-12 w-32 h-44 bg-white rounded-xl shadow-[0_10px_40px_rgba(0,0,0,0.08)] border border-slate-100 p-4 transform rotate-[15deg] origin-bottom-right",
                animate: {
                  y: isDragging ? -30 : 0,
                  rotate: isDragging ? 25 : 15,
                  x: isDragging ? 30 : 0
                },
                transition: { type: "spring", stiffness: 200, damping: 15 },
                children: [
                  /* @__PURE__ */ jsx("div", { className: "w-3/4 h-2 bg-indigo-100 rounded-full mb-3 mt-4" }),
                  /* @__PURE__ */ jsx("div", { className: "w-full h-2 bg-indigo-100 rounded-full mb-3" }),
                  /* @__PURE__ */ jsx("div", { className: "w-1/2 h-2 bg-indigo-100 rounded-full" }),
                  /* @__PURE__ */ jsx("div", { className: "absolute bottom-4 right-4 text-indigo-200", children: /* @__PURE__ */ jsx(FileText, { size: 28 }) })
                ]
              }
            ),
            /* @__PURE__ */ jsx(
              motion.div,
              {
                className: "absolute bottom-16 w-48 h-48 border-2 border-dashed border-indigo-400 rounded-full",
                animate: {
                  scale: isDragging ? 1.6 : 0.5,
                  opacity: isDragging ? 0.4 : 0,
                  rotate: isDragging ? 90 : 0
                },
                transition: { duration: 0.8, ease: "easeOut" }
              }
            ),
            /* @__PURE__ */ jsxs(
              motion.div,
              {
                className: "absolute bottom-2 w-72 h-36 bg-white/70 backdrop-blur-xl rounded-2xl shadow-[0_-10px_40px_rgba(0,0,0,0.06)] border flex justify-center items-center",
                animate: {
                  rotateX: isDragging ? -20 : 0,
                  y: isDragging ? 20 : 0,
                  borderColor: isDragging ? "rgba(99, 102, 241, 0.4)" : "rgba(255, 255, 255, 1)"
                },
                style: { transformOrigin: "bottom center", perspective: "1000px" },
                children: [
                  /* @__PURE__ */ jsx("div", { className: cn(
                    "w-20 h-20 rounded-full flex items-center justify-center shadow-xl transition-all duration-300 transform -translate-y-6",
                    isDragging ? "bg-indigo-600 text-white scale-110 shadow-indigo-300/50" : "bg-white text-indigo-500"
                  ), children: /* @__PURE__ */ jsx(CloudUpload, { size: 36, strokeWidth: isDragging ? 2.5 : 2 }) }),
                  /* @__PURE__ */ jsxs("div", { className: "absolute bottom-4 left-6 flex gap-1.5 opacity-40", children: [
                    /* @__PURE__ */ jsx("div", { className: "w-1.5 h-1.5 rounded-full bg-slate-400" }),
                    /* @__PURE__ */ jsx("div", { className: "w-1.5 h-1.5 rounded-full bg-slate-400" }),
                    /* @__PURE__ */ jsx("div", { className: "w-1.5 h-1.5 rounded-full bg-slate-400" })
                  ] })
                ]
              }
            )
          ] }),
          /* @__PURE__ */ jsx("h3", { className: cn(
            "text-[32px] font-extrabold transition-colors mb-3 tracking-tight text-center z-20",
            isDragging ? "text-indigo-600" : "text-slate-900"
          ), children: isDragging ? props.dropTitle || "Drop files here to upload!" : props.title || "Click to upload or drag & drop" }),
          /* @__PURE__ */ jsx("p", { className: "text-[17px] text-slate-500 font-medium tracking-wide text-center max-w-sm z-20", children: props.limit || "PDF files up to 50MB" }),
          /* @__PURE__ */ jsx("div", { className: "mt-8 z-20 pointer-events-auto", children: /* @__PURE__ */ jsxs(
            motion.button,
            {
              whileHover: { scale: 1.05 },
              whileTap: { scale: 0.95 },
              className: "px-10 py-4 bg-slate-900 hover:bg-indigo-600 text-white rounded-2xl text-[16px] font-bold shadow-xl shadow-slate-200/50 hover:shadow-indigo-200 transition-all flex items-center justify-center gap-3 w-auto",
              children: [
                /* @__PURE__ */ jsx(Plus, { size: 22, strokeWidth: 2.5 }),
                props.buttonText || "Select Files"
              ]
            }
          ) })
        ] })
      ]
    }
  );
}

export { PDFDropzone as P };
