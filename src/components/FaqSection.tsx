import { useTranslation } from 'react-i18next';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FaqSection = () => {
  const { t } = useTranslation();
  const faqs = t('faq.questions', { returnObjects: true }) as { question: string, answer: string }[];

  return (
    <section id="faq" className="py-32 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6" suppressHydrationWarning>{t('faq.title')}</h2>
          <p className="text-xl text-gray-600" suppressHydrationWarning>{t('faq.subtitle')}</p>
        </div>
        <Accordion type="single" collapsible className="w-full" suppressHydrationWarning>
          {Array.isArray(faqs) && faqs.map((faq, index) => (
            <AccordionItem value={`item-${index}`} key={index}>
              <AccordionTrigger className="text-lg font-medium" suppressHydrationWarning>{faq.question}</AccordionTrigger>
              <AccordionContent className="text-base font-light text-gray-700" suppressHydrationWarning>
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FaqSection;