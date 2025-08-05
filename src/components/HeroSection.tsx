import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Star, User, Home } from "lucide-react";
import { motion } from "framer-motion";
import { useTranslation } from 'next-i18next';

// Add to your global CSS or a CSS module:
// .bg-grid-gray-200 {
//   background-image: linear-gradient(to right, #e5e7eb 1px, transparent 1px),
//                     linear-gradient(to bottom, #e5e7eb 1px, transparent 1px);
//   background-size: 24px 24px;
//   background-position: center center;
// }

const HeroSection = () => {
  const { t } = useTranslation();
  return (
    <section id="home" className="relative overflow-hidden py-24 sm:py-32 bg-white">
      {/* Grid Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-grid-gray-200 [mask-image:linear-gradient(0deg,white,transparent)]">
          <div className="absolute inset-0 bg-gradient-to-b from-white via-white/80 to-white" />
        </div>
      </div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {/* Simple Steps */}
            <div className="flex flex-wrap justify-center items-center gap-6 mb-8 text-sm text-gray-600">
              {[t('hero.step1'), t('hero.step2'), t('hero.step3')].map((step, index) => (
                <div key={index} className="flex items-center gap-2 bg-white/50 backdrop-blur-sm px-4 py-2 rounded-full border border-gray-200">
                  <div className="w-5 h-5 bg-blue-50 rounded-full flex items-center justify-center text-blue-600 font-medium text-xs">
                    {index + 1}
                  </div>
                  <span className="text-sm font-medium">{step}</span>
                </div>
              ))}
            </div>

            <h1 className="text-4xl font-light tracking-tight text-gray-900 sm:text-6xl" suppressHydrationWarning>
              {t('hero.title1')}{' '}
              <span className="font-medium bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent" suppressHydrationWarning>
                {t('hero.title2')}
              </span>
            </h1>

            <p className="mt-6 text-lg leading-8 text-gray-600 max-w-2xl mx-auto">
              {t('hero.subtitle')}
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a 
                href="#products" 
                className="inline-flex items-center justify-center bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-6 py-3 rounded-lg text-base font-medium transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5"
                suppressHydrationWarning
              >
                {t('hero.ctaPrimary')}
                <ArrowRight className="w-4 h-4 ml-2" />
              </a>
              <a 
                href="#installation" 
                className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-gray-700 hover:text-blue-600 transition-colors duration-200"
                suppressHydrationWarning
              >
                {t('hero.ctaSecondary')} <span aria-hidden="true">→</span>
              </a>
            </div>

            {/* Trust Indicators */}
            <div className="mt-16 flex flex-wrap justify-center items-center gap-x-8 gap-y-4 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <Home className="w-4 h-4 text-green-500" />
                <span className="text-sm" suppressHydrationWarning>{t('hero.feature1')}</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                <span className="text-sm" suppressHydrationWarning>{t('hero.feature2')}</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                <span className="text-sm" suppressHydrationWarning>{t('hero.feature3')}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;