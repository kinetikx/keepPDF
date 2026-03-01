import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { motion } from "framer-motion";
import { RotateCw, Trash2 } from "lucide-react";
import { cn } from "../../lib/utils";

export function PageCard({ page, onRotate, onDelete, isDragging, isOverlay, dict, ...props }) {
    return (
        <div className={cn("group relative aspect-[1/1.4] bg-white rounded-lg shadow-sm border border-slate-200 overflow-hidden transition-all duration-200", isDragging ? "opacity-50" : "opacity-100", isOverlay ? "shadow-2xl ring-2 ring-indigo-500 scale-105 opacity-100 cursor-grabbing" : "hover:shadow-md hover:border-indigo-200", "h-full w-full")} {...props}>
            <div className="w-full h-full flex items-center justify-center bg-slate-50 relative pointer-events-none" style={{ transform: `rotate(${page.rotation}deg)` }}>
                <img src={page.image} alt={`Page ${page.pageNumber}`} className="max-w-full max-h-full object-contain pointer-events-none select-none" />
            </div>
            {!isDragging && !isOverlay && (
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors z-20 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100">
                    <div className="pointer-events-auto flex gap-2">
                        <motion.button initial={{ scale: 0.8, opacity: 0 }} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} animate={{ scale: 1, opacity: 1 }} onClick={(e) => { e.stopPropagation(); onRotate?.(page.id); }} className="p-2 bg-white rounded-full text-slate-700 hover:text-indigo-600 hover:bg-indigo-50 shadow-lg cursor-pointer" title={dict?.tools?.organize?.editor?.rotateRight}>
                            <RotateCw size={18} />
                        </motion.button>
                        <motion.button initial={{ scale: 0.8, opacity: 0 }} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} animate={{ scale: 1, opacity: 1 }} onClick={(e) => { e.stopPropagation(); onDelete?.(page.id); }} className="p-2 bg-white rounded-full text-slate-700 hover:text-red-600 hover:bg-red-50 shadow-lg cursor-pointer" title={dict?.tools?.organize?.editor?.deletePage}>
                            <Trash2 size={18} />
                        </motion.button>
                    </div>
                </div>
            )}
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 px-2 py-0.5 bg-black/60 text-white text-[10px] rounded-full backdrop-blur-sm z-20 pointer-events-none font-medium">{page.pageNumber}</div>
        </div>
    );
}

export default function SortablePage({ id, page, onRotate, onDelete, dict }) {
    const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({ id });
    const style = { transform: CSS.Translate.toString(transform), transition, zIndex: isDragging ? 50 : "auto", position: "relative", touchAction: "none" };
    return (
        <div ref={setNodeRef} style={style} {...attributes} {...listeners} className="outline-none">
            <PageCard page={page} onRotate={onRotate} onDelete={onDelete} isDragging={isDragging} dict={dict} />
        </div>
    );
}
