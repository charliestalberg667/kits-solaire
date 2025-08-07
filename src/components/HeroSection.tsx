import { motion } from "framer-motion";
import { useTranslation } from 'next-i18next';

const HeroSection = () => {
  const { t } = useTranslation();

  return (
    <section 
      id="home" 
      className="relative overflow-hidden py-24 sm:py-32 bg-white"
    >
      {/* Animated Blob Background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <motion.div
          className="absolute top-0 left-0 h-96 w-96 rounded-full bg-blue-200/30 blur-3xl"
          animate={{
            x: [-100, 100, -100],
            y: [0, 150, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "mirror",
          }}
        />
        <motion.div
          className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-red-200/30 blur-3xl"
          animate={{
            x: [100, -100, 100],
            y: [50, -100, 50],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            repeatType: "mirror",
          }}
        />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="mb-8 flex justify-center">
              <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                {t('hero.step1')} <a href="#installation" className="font-semibold text-blue-600"><span className="absolute inset-0" aria-hidden="true"></span>{t('hero.step2')} <span aria-hidden="true">&rarr;</span></a>
              </div>
            </div>

            <h1 className="text-5xl font-bold tracking-tight text-gray-800 sm:text-7xl" suppressHydrationWarning>
              {t('hero.title1')} {t('hero.title2')}
            </h1>

            <p className="mt-6 text-lg leading-8 text-gray-600 max-w-2xl mx-auto">
              {t('hero.subtitle')}
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="#products"
                className="inline-flex items-center justify-center bg-blue-600 text-white px-8 py-3 rounded-full text-base font-medium shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-200"
                suppressHydrationWarning
              >
                {t('hero.ctaPrimary')}
              </a>
              <a
                href="#installation"
                className="inline-flex items-center justify-center px-8 py-3 text-base font-medium text-blue-600 bg-transparent rounded-full hover:bg-blue-50 transition-colors duration-200"
                suppressHydrationWarning
              >
                {t('hero.ctaSecondary')} <span aria-hidden="true" className="ml-1">→</span>
              </a>
            </div>

            <div className="mt-16 text-sm text-gray-600">
              <div className="flex justify-center items-center gap-x-6">
                <div className="flex items-center gap-1.5">
                  <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                  <span suppressHydrationWarning>{t('hero.feature2')}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                  <span suppressHydrationWarning>{t('hero.feature3')}</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;