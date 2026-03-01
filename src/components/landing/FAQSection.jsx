import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "../ui/accordion";

export default function FAQSection({ dict }) {
    return (
        <section className="py-20 bg-slate-50">
            <div className="container-custom max-w-4xl">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl mb-4">
                        {dict.faq.title}
                    </h2>
                </div>

                <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm">
                    <Accordion type="single" collapsible className="w-full">
                        {dict.faq.questions.map((q, i) => (
                            <AccordionItem key={i} value={`item-${i}`}>
                                <AccordionTrigger className="text-left text-lg font-medium text-slate-900">
                                    <h3 className="text-lg font-medium">{q.question}</h3>
                                </AccordionTrigger>
                                <AccordionContent className="text-slate-500 text-base leading-relaxed">
                                    {q.answer}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </div>
        </section>
    );
}
