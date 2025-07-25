
import { Button } from "@/components/ui/button";
import { ArrowRight, Mail, Phone, CheckCircle } from "lucide-react";

import { useTranslation } from 'next-i18next';

const CTASection = () => {
  const { t } = useTranslation();
  const socialProof = t('cta.socialProof', { returnObjects: true }) as { value: string, label: string }[];
  const guarantees = t('cta.guarantees', { returnObjects: true }) as string[];

  return (
    <section className="py-24 bg-gradient-to-r from-blue-600 to-green-600">
      <div className="max-w-4xl mx-auto text-center px-4">
        <h2 className="text-4xl md:text-5xl font-light text-white mb-6" suppressHydrationWarning>
          {t('cta.title')}
        </h2>
        <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto" suppressHydrationWarning>
          {t('cta.subtitle')}
        </p>

        {/* Social Proof Numbers */}
        <div className="grid grid-cols-3 gap-8 mb-12 max-w-2xl mx-auto" suppressHydrationWarning>
          {Array.isArray(socialProof) && socialProof.map((item, index) => (
            <div className="text-center" key={index}>
              <div className="text-3xl font-bold text-white mb-1" suppressHydrationWarning>{item.value}</div>
              <div className="text-blue-100 text-sm" suppressHydrationWarning>{item.label}</div>
            </div>
          ))}
        </div>

        {/* Guarantee points */}
        <div className="flex flex-wrap justify-center gap-6 mb-12 text-blue-100" suppressHydrationWarning>
          {Array.isArray(guarantees) && guarantees.map((guarantee, index) => (
            <div className="flex items-center gap-2" key={index}>
              <CheckCircle className="w-5 h-5" />
              <span suppressHydrationWarning>{guarantee}</span>
            </div>
          ))}
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-full text-lg font-medium transition-all duration-300 hover:scale-105" suppressHydrationWarning>
            <Mail className="w-5 h-5 mr-2" />
            {t('cta.ctaPrimary')}
          </Button>
          <Button variant="ghost" size="lg" className="text-white border-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-full text-lg font-medium transition-all duration-300" suppressHydrationWarning>
            <Phone className="w-5 h-5 mr-2" />
            {t('cta.ctaSecondary')}
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>

        <p className="text-blue-200 text-sm mt-6" suppressHydrationWarning>
          {t('cta.footerText')}
        </p>
      </div>
    </section>
  );
};

export default CTASection;
