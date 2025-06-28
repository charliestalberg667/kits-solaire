
import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Star, User, Home } from "lucide-react";
import { motion } from "framer-motion";
import { useTranslation } from 'react-i18next';

const HeroSection = () => {
  const { t } = useTranslation();
  return (
    <section id="home" className="h-[60vh] flex items-center justify-center px-4 pt-16">
      <div className="max-w-6xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >

          {/* Social Proof - Reviews */}
          
          
          <h1 className="text-5xl md:text-7xl font-light text-gray-900 mb-6 leading-tight" suppressHydrationWarning>
            {t('hero.title1')}
            <br />
            <span className="font-medium bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent" suppressHydrationWarning>
              {t('hero.title2')}
            </span>
          </h1>
          
          {/* Simple Steps */}
          <div className="flex flex-wrap justify-center items-center gap-8 mb-8 text-sm text-gray-700">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-semibold text-xs">1</div>
              <span suppressHydrationWarning>{t('hero.step1')}</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-semibold text-xs">2</div>
              <span suppressHydrationWarning>{t('hero.step2')}</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-semibold text-xs">3</div>
              <span suppressHydrationWarning>{t('hero.step3')}</span>
            </div>
          </div>


          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <a href="#products" className="inline-flex items-center justify-center bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-full text-lg font-medium transition-all duration-300 hover:scale-105" suppressHydrationWarning>
              {t('hero.ctaPrimary')}
              <ArrowRight className="w-5 h-5 ml-2" />
            </a>
            <a href="#installation" className="inline-flex items-center justify-center whitespace-nowrap rounded-full text-lg font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-11 px-8 py-4 text-gray-700 hover:text-blue-600 transition-all duration-300 hover:scale-105" suppressHydrationWarning>
              {t('hero.ctaSecondary')}
            </a>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <Home className="w-4 h-4 text-green-500" />
              <span suppressHydrationWarning>{t('hero.feature1')}</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span suppressHydrationWarning>{t('hero.feature2')}</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span suppressHydrationWarning>{t('hero.feature3')}</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
