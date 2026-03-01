import ImageToPdf from "../image-to-pdf/ImageToPdf";

export default function ImageToPdfClient({ dict }) {
    const handleBack = () => { window.location.reload(); };
    return (
        <section className="py-12 bg-slate-50 min-h-screen">
            <div className="container-custom">
                <ImageToPdf onBack={handleBack} dict={dict} />
            </div>
        </section>
    );
}
