import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { motion } from "framer-motion";
import { Trash2 } from "lucide-react";
import { cn } from "../../lib/utils";

export function ImageCard({ image, index, onDelete, isDragging, isOverlay, ...props }) {
    return (
        <div className={cn("group relative aspect-[1/1.4] bg-white rounded-lg shadow-sm border border-slate-200 overflow-hidden transition-all duration-200", isDragging ? "opacity-50" : "opacity-100", isOverlay ? "shadow-2xl ring-2 ring-indigo-500 scale-105 opacity-100 cursor-grabbing" : "hover:shadow-md hover:border-indigo-200", "h-full w-full")} {...props}>
            <div className="w-full h-full flex items-center justify-center bg-slate-50 relative">
                <img src={image.preview} alt={image.file.name} className="w-full h-full object-contain pointer-events-none select-none" />
            </div>
            {!isDragging && !isOverlay && (
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors z-20 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100">
                    <div className="pointer-events-auto">
                        <motion.button initial={{ scale: 0.8, opacity: 0 }} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} animate={{ scale: 1, opacity: 1 }} onClick={(e) => { e.stopPropagation(); onDelete?.(image.id); }} className="p-2 bg-white rounded-full text-slate-700 hover:text-red-600 hover:bg-red-50 shadow-lg cursor-pointer" title="Remove Image">
                            <Trash2 size={18} />
                        </motion.button>
                    </div>
                </div>
            )}
            <div className="absolute top-2 left-2 px-2 py-0.5 bg-black/60 text-white text-[10px] rounded-full backdrop-blur-sm z-20 pointer-events-none font-medium">{index + 1}</div>
        </div>
    );
}

export default function SortableImage({ id, image, index, onDelete }) {
    const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({ id });
    const style = { transform: CSS.Translate.toString(transform), transition, zIndex: isDragging ? 50 : "auto", position: "relative", touchAction: "none" };
    return (
        <div ref={setNodeRef} style={style} {...attributes} {...listeners} className="outline-none">
            <ImageCard image={image} index={index} onDelete={onDelete} isDragging={isDragging} />
        </div>
    );
}
