import { useState, useCallback } from "react";
import { PDFDocument } from "pdf-lib";
import { DndContext, closestCenter, KeyboardSensor, TouchSensor, MouseSensor, useSensor, useSensors, DragOverlay } from "@dnd-kit/core";
import { arrayMove, SortableContext, sortableKeyboardCoordinates, rectSortingStrategy } from "@dnd-kit/sortable";
import { AnimatePresence } from "framer-motion";
import { ArrowLeft, Save, Loader2, Plus, FileImage } from "lucide-react";
import { cn } from "../../lib/utils";
import { Button } from "../ui/button";
import SortableImage, { ImageCard } from "./SortableImage";
import { useDropzone } from "react-dropzone";

export default function ImageToPdf({ onBack, dict }) {
    const [images, setImages] = useState([]);
    const [isProcessing, setIsProcessing] = useState(false);
    const [activeId, setActiveId] = useState(null);

    const onDrop = useCallback((acceptedFiles) => {
        const newImages = acceptedFiles.map((file) => ({ id: Math.random().toString(36).substr(2, 9), file, preview: URL.createObjectURL(file) }));
        setImages((prev) => [...prev, ...newImages]);
    }, []);

    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop, accept: { 'image/jpeg': [], 'image/png': [], 'image/webp': [] } });

    const sensors = useSensors(
        useSensor(MouseSensor, { activationConstraint: { distance: 10 } }),
        useSensor(TouchSensor, { activationConstraint: { delay: 250, tolerance: 5 } }),
        useSensor(KeyboardSensor, { coordinateGetter: sortableKeyboardCoordinates })
    );

    const handleDragStart = (event) => setActiveId(event.active.id);
    const handleDragEnd = (event) => {
        const { active, over } = event;
        if (active.id !== over.id) setImages((items) => { const oldIndex = items.findIndex((item) => item.id === active.id); const newIndex = items.findIndex((item) => item.id === over.id); return arrayMove(items, oldIndex, newIndex); });
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
                if (imgData.file.type === 'image/jpeg') { image = await pdfDoc.embedJpg(imageBytes); }
                else if (imgData.file.type === 'image/png') { image = await pdfDoc.embedPng(imageBytes); }
                else {
                    const bitmap = await createImageBitmap(imgData.file);
                    const canvas = document.createElement('canvas');
                    canvas.width = bitmap.width; canvas.height = bitmap.height;
                    const ctx = canvas.getContext('2d'); ctx.drawImage(bitmap, 0, 0);
                    const jpgUrl = canvas.toDataURL('image/jpeg', 0.8);
                    const jpgBytes = await fetch(jpgUrl).then((res) => res.arrayBuffer());
                    image = await pdfDoc.embedJpg(jpgBytes);
                }
                const page = pdfDoc.addPage([image.width, image.height]);
                page.drawImage(image, { x: 0, y: 0, width: image.width, height: image.height });
            }
            const pdfBytes = await pdfDoc.save();
            const blob = new Blob([pdfBytes], { type: "application/pdf" });
            const url = URL.createObjectURL(blob);
            const link = document.createElement("a"); link.href = url; link.download = "images.pdf"; document.body.appendChild(link); link.click(); document.body.removeChild(link);
        } catch (error) { console.error("Error creating PDF:", error); alert("Failed to create PDF."); }
        finally { setIsProcessing(false); }
    };

    return (
        <div className="space-y-6">
            <div className="sticky top-0 z-40 bg-white/80 backdrop-blur-md p-4 rounded-2xl border border-slate-200 shadow-sm flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                    <button onClick={onBack} className="p-2 hover:bg-slate-100 rounded-full transition-colors text-slate-600"><ArrowLeft size={20} /></button>
                    <div>
                        <h2 className="font-semibold text-slate-800">{dict?.tools?.imageToPdf?.title}</h2>
                        <p className="text-sm text-slate-500">{(dict?.common?.filesSelected || "{count} file(s) selected").replace("{count}", images.length)}</p>
                    </div>
                </div>
                <div className="flex items-center gap-3">
                    <div {...getRootProps()} className="cursor-pointer"><input {...getInputProps()} /><Button variant="outline" size="sm"><Plus size={16} className="mr-2" />{dict?.common?.addImages}</Button></div>
                    <Button onClick={handleSave} disabled={isProcessing || images.length === 0} className="bg-indigo-600 hover:bg-indigo-700 min-w-[140px]">
                        {isProcessing ? <Loader2 size={18} className="animate-spin mr-2" /> : <Save size={18} className="mr-2" />}{dict?.common?.convertToPdf}
                    </Button>
                </div>
            </div>
            {images.length === 0 ? (
                <div {...getRootProps()} className={cn("flex flex-col items-center justify-center p-12 border-2 border-dashed rounded-3xl transition-all min-h-[400px] cursor-pointer", isDragActive ? "border-indigo-500 bg-indigo-50/50" : "border-slate-200 hover:border-indigo-300 hover:bg-slate-50")}>
                    <input {...getInputProps()} />
                    <div className="w-20 h-20 bg-indigo-50 text-indigo-600 rounded-full flex items-center justify-center mb-6"><FileImage size={40} /></div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">{dict?.common?.uploadImages}</h3>
                    <p className="text-slate-500 text-center max-w-sm">{dict?.common?.dragDropImages}</p>
                </div>
            ) : (
                <DndContext sensors={sensors} collisionDetection={closestCenter} onDragStart={handleDragStart} onDragEnd={handleDragEnd}>
                    <SortableContext items={images.map(img => img.id)} strategy={rectSortingStrategy}>
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6 pb-12">
                            <AnimatePresence>{images.map((img, index) => (<SortableImage key={img.id} id={img.id} image={img} index={index} onDelete={handleDelete} />))}</AnimatePresence>
                            <div {...getRootProps()} className="aspect-[1/1.4] border-2 border-dashed border-slate-200 rounded-lg flex flex-col items-center justify-center text-slate-400 hover:text-indigo-600 hover:border-indigo-300 hover:bg-indigo-50/10 cursor-pointer transition-all">
                                <input {...getInputProps()} /><Plus size={32} className="mb-2" /><span className="text-sm font-medium">{dict?.common?.addImages}</span>
                            </div>
                        </div>
                    </SortableContext>
                    <DragOverlay>{activeId ? (() => { const activeImg = images.find(i => i.id === activeId); const activeIndex = images.findIndex(i => i.id === activeId); return activeImg ? <ImageCard image={activeImg} index={activeIndex} isOverlay style={{ transform: 'none' }} /> : null; })() : null}</DragOverlay>
                </DndContext>
            )}
        </div>
    );
}
