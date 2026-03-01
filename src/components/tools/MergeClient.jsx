import MergeInterface from "../landing/MergeInterface";

export default function MergeClient({ dict }) {
    return (
        <section className="py-12 bg-slate-50 min-h-screen">
            <div className="container-custom max-w-5xl mx-auto">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-slate-900 mb-4">{dict?.metadata?.merge?.h1 || dict?.tools?.merge?.title}</h1>
                    <p className="text-slate-500 text-lg max-w-2xl mx-auto">{dict?.tools?.merge?.description}</p>
                </div>
                <MergeInterface dict={dict} />
            </div>
        </section>
    );
}
