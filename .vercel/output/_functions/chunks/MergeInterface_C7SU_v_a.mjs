import { jsx, jsxs, Fragment } from 'react/jsx-runtime';
import { useState } from 'react';
import { B as Button } from './CookieBanner_-MUnfjGM.mjs';
import { motion, Reorder } from 'framer-motion';
import { FileType, FileText, X, Type, Image, PenTool, GripVertical } from 'lucide-react';
import { P as PDFDropzone } from './PDFDropzone_CN5nAjdt.mjs';

function MergeInterface({ children, dict }) {
  const [files, setFiles] = useState([]);
  const [isMerging, setIsMerging] = useState(false);
  const handleFilesSelect = (selectedFiles) => {
    if (selectedFiles && selectedFiles.length > 0) {
      const newFiles = selectedFiles.map((file) => ({
        file,
        id: Math.random().toString(36).substring(7) + "-" + Date.now()
      }));
      setFiles((prev) => [...prev, ...newFiles]);
    }
  };
  const handleReset = () => {
    setFiles([]);
  };
  const handleMerge = async () => {
    if (files.length < 2) return;
    setIsMerging(true);
    try {
      const { PDFDocument } = await import('pdf-lib');
      const mergedPdf = await PDFDocument.create();
      for (const fileItem of files) {
        try {
          const fileBuffer = await fileItem.file.arrayBuffer();
          const pdf = await PDFDocument.load(fileBuffer, { ignoreEncryption: true });
          const copiedPages = await mergedPdf.copyPages(pdf, pdf.getPageIndices());
          copiedPages.forEach((page) => mergedPdf.addPage(page));
        } catch (err) {
          console.error(`Failed to load file ${fileItem.file.name}:`, err);
          alert(`Could not merge file "${fileItem.file.name}". Is it password protected?`);
          setIsMerging(false);
          return;
        }
      }
      const mergedPdfBytes = await mergedPdf.save();
      const blob = new Blob([mergedPdfBytes], { type: "application/pdf" });
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = `merged-document-${Date.now()}.pdf`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Error merging PDFs:", error);
      alert("Error merging PDFs. Please check the console for details.");
    } finally {
      setIsMerging(false);
    }
  };
  const removeFile = (id) => {
    setFiles((prev) => prev.filter((file) => file.id !== id));
  };
  return /* @__PURE__ */ jsx("div", { className: "container-custom relative z-10 flex flex-col items-center text-center", children: /* @__PURE__ */ jsxs(
    motion.div,
    {
      initial: { opacity: 0, y: 40 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: 0.7, delay: 0.4 },
      className: "relative w-full max-w-5xl mx-auto min-h-[500px]",
      children: [
        files.length === 0 && /* @__PURE__ */ jsxs(Fragment, { children: [
          /* @__PURE__ */ jsx(motion.div, { animate: { y: [0, -10, 0] }, transition: { repeat: Infinity, duration: 4, ease: "easeInOut" }, className: "absolute -left-4 top-10 bg-indigo-500 text-white p-3 rounded-xl shadow-lg z-20 hidden md:block", children: /* @__PURE__ */ jsx(FileType, { size: 24 }) }),
          /* @__PURE__ */ jsx(motion.div, { animate: { y: [0, -15, 0] }, transition: { repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }, className: "absolute -right-4 top-20 bg-red-500 text-white p-3 rounded-xl shadow-lg z-20 hidden md:block", children: /* @__PURE__ */ jsx(FileText, { size: 24 }) })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "bg-white rounded-2xl shadow-2xl border border-slate-100 overflow-hidden relative z-10 w-full h-full flex flex-col", children: [
          /* @__PURE__ */ jsxs("div", { className: "bg-slate-50 border-b border-slate-100 p-4 flex items-center justify-between shrink-0", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex gap-2", children: [
              /* @__PURE__ */ jsx("div", { className: "w-3 h-3 rounded-full bg-red-400" }),
              /* @__PURE__ */ jsx("div", { className: "w-3 h-3 rounded-full bg-yellow-400" }),
              /* @__PURE__ */ jsx("div", { className: "w-3 h-3 rounded-full bg-green-400" })
            ] }),
            /* @__PURE__ */ jsx("div", { className: "flex gap-4 text-slate-400", children: files.length > 0 && /* @__PURE__ */ jsx("span", { className: "text-sm font-medium text-slate-600", children: (dict?.common?.filesSelected || "{count} file(s) selected").replace("{count}", files.length) }) }),
            /* @__PURE__ */ jsx("div", { className: "flex gap-4 text-slate-400 items-center", children: files.length > 0 ? /* @__PURE__ */ jsx(Button, { variant: "ghost", size: "icon", onClick: handleReset, className: "h-8 w-8 text-slate-500 hover:text-red-500", "aria-label": "Reset selection", children: /* @__PURE__ */ jsx(X, { size: 18 }) }) : /* @__PURE__ */ jsxs(Fragment, { children: [
              /* @__PURE__ */ jsx(Type, { size: 16 }),
              /* @__PURE__ */ jsx(Image, { size: 16 }),
              /* @__PURE__ */ jsx(PenTool, { size: 16 })
            ] }) })
          ] }),
          /* @__PURE__ */ jsx("div", { className: `relative bg-slate-100/50 ${files.length > 0 ? "flex-1 overflow-hidden" : "p-8 md:px-12 md:pb-12 md:pt-3 min-h-[300px]"}`, children: files.length > 0 ? /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-4 p-8 max-w-3xl mx-auto w-full h-full overflow-y-auto", children: [
            /* @__PURE__ */ jsx(Reorder.Group, { axis: "y", values: files, onReorder: setFiles, className: "flex flex-col gap-4", children: files.map((fileItem) => /* @__PURE__ */ jsx(Reorder.Item, { value: fileItem, className: "relative", children: /* @__PURE__ */ jsxs("div", { className: "bg-white border border-slate-200 rounded-xl p-4 flex items-center gap-4 shadow-sm hover:shadow-md transition-shadow group", children: [
              /* @__PURE__ */ jsx("div", { className: "cursor-grab active:cursor-grabbing p-2 text-slate-400 hover:text-slate-600", children: /* @__PURE__ */ jsx(GripVertical, { size: 20 }) }),
              /* @__PURE__ */ jsx("div", { className: "w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center text-red-600 shrink-0", children: /* @__PURE__ */ jsx(FileText, { size: 24 }) }),
              /* @__PURE__ */ jsxs("div", { className: "flex-1 min-w-0 text-left", children: [
                /* @__PURE__ */ jsx("h4", { className: "font-medium text-slate-900 truncate", title: fileItem.file.name, children: fileItem.file.name }),
                /* @__PURE__ */ jsxs("p", { className: "text-sm text-slate-500", children: [
                  (fileItem.file.size / 1024 / 1024).toFixed(2),
                  " MB"
                ] })
              ] }),
              /* @__PURE__ */ jsx(
                Button,
                {
                  variant: "ghost",
                  size: "icon",
                  onClick: () => removeFile(fileItem.id),
                  className: "opacity-0 group-hover:opacity-100 text-slate-400 hover:text-red-500 transition-opacity",
                  "aria-label": "Remove file",
                  children: /* @__PURE__ */ jsx(X, { size: 18 })
                }
              )
            ] }) }, fileItem.id)) }),
            /* @__PURE__ */ jsxs("div", { className: "mt-8 flex flex-col gap-4", children: [
              /* @__PURE__ */ jsx(
                PDFDropzone,
                {
                  onFileSelect: handleFilesSelect,
                  title: dict?.common?.clickToUpload,
                  buttonText: dict?.common?.browse,
                  limit: dict?.common?.limit
                }
              ),
              /* @__PURE__ */ jsx("div", { className: "flex justify-end pt-4", children: /* @__PURE__ */ jsx(
                Button,
                {
                  size: "lg",
                  className: "bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-6 text-lg rounded-xl shadow-lg shadow-indigo-200 transition-all hover:scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer",
                  disabled: files.length < 2 || isMerging,
                  onClick: handleMerge,
                  children: isMerging ? dict?.common?.processing || "Merging..." : (dict?.common?.mergeCount || "Merge {count} PDFs").replace("{count}", files.length > 0 ? files.length : "")
                }
              ) })
            ] })
          ] }) : /* @__PURE__ */ jsxs("div", { className: "h-full flex flex-col items-center justify-start pt-12 p-8 text-center space-y-8", children: [
            /* @__PURE__ */ jsx("div", { className: "space-y-4", children }),
            /* @__PURE__ */ jsx("div", { className: "w-full max-w-xl", children: /* @__PURE__ */ jsx(
              PDFDropzone,
              {
                onFileSelect: handleFilesSelect,
                title: dict?.common?.clickToUpload,
                buttonText: dict?.common?.browse,
                limit: dict?.common?.limit
              }
            ) })
          ] }) })
        ] })
      ]
    }
  ) });
}

export { MergeInterface as M };
