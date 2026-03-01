import { useState, useEffect } from "react";
import { PDFDocument, degrees } from "pdf-lib";
import { DndContext, closestCenter, KeyboardSensor, TouchSensor, MouseSensor, useSensor, useSensors, DragOverlay } from "@dnd-kit/core";
import { arrayMove, SortableContext, sortableKeyboardCoordinates, rectSortingStrategy } from "@dnd-kit/sortable";
import { AnimatePresence } from "framer-motion";
import { ArrowLeft, Save, RotateCw, RotateCcw, Loader2, ZoomIn, ZoomOut } from "lucide-react";
import { cn } from "../../lib/utils";
import { Button } from "../ui/button";
import SortablePage, { PageCard } from "./SortablePage";

let pdfjsLib = null;
async function getPdfjs() {
    if (!pdfjsLib) {
        pdfjsLib = await import("pdfjs-dist/build/pdf.mjs");
        pdfjsLib.GlobalWorkerOptions.workerSrc = '/pdf.worker.min.mjs';
    }
    return pdfjsLib;
}

export default function Organizer({ file, onBack, dict }) {
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
            } catch (error) { console.error("Error loading PDF:", error); }
            finally { setIsLoading(false); }
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

    const handleRotate = (id) => setPages(pages.map(page => page.id === id ? { ...page, rotation: (page.rotation + 90) % 360 } : page));
    const handleDelete = (id) => setPages(pages.filter(page => page.id !== id));
    const handleRotateAll = (direction) => setPages(pages.map(page => ({ ...page, rotation: (page.rotation + (direction === 'cw' ? 90 : -90) + 360) % 360 })));

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
        } catch (error) { console.error("Error saving PDF:", error); }
        finally { setIsSaving(false); }
    };

    if (isLoading) {
        return (<div className="flex flex-col items-center justify-center p-12 space-y-4 min-h-[50vh]"><Loader2 className="w-8 h-8 animate-spin text-indigo-600" /><p className="text-slate-500">{dict?.tools?.organize?.editor?.loading}</p></div>);
    }

    const gridCols = { 3: "grid-cols-3", 4: "grid-cols-4", 5: "grid-cols-5", 6: "grid-cols-6", 7: "grid-cols-7", 8: "grid-cols-8" }[zoom] || "grid-cols-5";

    return (
        <div className="space-y-6">
            <div className="sticky top-0 z-40 bg-white/80 backdrop-blur-md p-4 rounded-2xl border border-slate-200 shadow-sm flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                    <button onClick={onBack} className="p-2 hover:bg-slate-100 rounded-full transition-colors text-slate-600"><ArrowLeft size={20} /></button>
                    <div>
                        <h2 className="font-semibold text-slate-800">{file.name}</h2>
                        <p className="text-sm text-slate-500">{(dict?.tools?.organize?.editor?.pageCount || "{count} pages").replace("{count}", pages.length)}</p>
                    </div>
                </div>
                <div className="flex items-center gap-6">
                    <div className="hidden md:flex items-center gap-2 text-slate-500">
                        <ZoomOut size={16} />
                        <div className="w-32"><input type="range" min="3" max="8" value={zoom} onChange={(e) => setZoom(parseInt(e.target.value))} className="w-full accent-indigo-600 h-1 bg-slate-200 rounded-lg appearance-none cursor-pointer" /></div>
                        <ZoomIn size={16} />
                    </div>
                    <div className="h-8 w-px bg-slate-200 hidden md:block" />
                    <div className="flex items-center gap-2">
                        <Button variant="outline" size="sm" onClick={() => handleRotateAll('ccw')} title={dict?.tools?.organize?.editor?.rotateAllLeft}><RotateCcw size={16} className="mr-2" />{dict?.tools?.organize?.editor?.rotateLeft}</Button>
                        <Button variant="outline" size="sm" onClick={() => handleRotateAll('cw')} title={dict?.tools?.organize?.editor?.rotateAllRight}><RotateCw size={16} className="mr-2" />{dict?.tools?.organize?.editor?.rotateRight}</Button>
                    </div>
                    <Button onClick={handleSave} disabled={isSaving} className="bg-indigo-600 hover:bg-indigo-700 min-w-[120px]">
                        {isSaving ? <Loader2 size={18} className="animate-spin mr-2" /> : <Save size={18} className="mr-2" />}
                        {dict?.tools?.organize?.editor?.save}
                    </Button>
                </div>
            </div>
            <DndContext sensors={sensors} collisionDetection={closestCenter} onDragStart={handleDragStart} onDragEnd={handleDragEnd}>
                <SortableContext items={pages.map(p => p.id)} strategy={rectSortingStrategy}>
                    <div className={cn("grid gap-4 md:gap-6 p-4 min-h-[500px]", gridCols, "grid-cols-2 md:grid-cols-3 lg:grid-cols-5")}>
                        <AnimatePresence>
                            {pages.map((page) => (<SortablePage key={page.id} id={page.id} page={page} onRotate={handleRotate} onDelete={handleDelete} dict={dict} />))}
                        </AnimatePresence>
                    </div>
                </SortableContext>
                <DragOverlay>
                    {activeId ? (() => { const activePage = pages.find(p => p.id === activeId); return activePage ? <PageCard page={activePage} isOverlay style={{ transform: 'none' }} /> : null; })() : null}
                </DragOverlay>
            </DndContext>
        </div>
    );
}
