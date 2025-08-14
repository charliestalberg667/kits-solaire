import { useTranslation } from 'next-i18next';
import { motion } from 'framer-motion';
import { Share2, Bookmark } from 'lucide-react';

const InstallationGuide = () => {
  const { t } = useTranslation();
  const steps = t('installation.steps', { returnObjects: true });

  return (
    <section id="installation" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-3">
            {t('installation.title')}
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg">{t('installation.subtitle')}</p>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* Video Section - Takes full width on mobile, 6/12 on desktop */}
          <div className="lg:col-span-6">
            <motion.article 
              className="border border-gray-200 rounded-2xl overflow-hidden h-auto flex flex-col"
              whileHover={{ boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.05)' }}
              transition={{ duration: 0.3 }}
            >
              {/* Video Header */}
              <div className="p-6 border-b border-gray-100">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                      <span className="text-xl">🎥</span>
                    </div>
                    <div className="space-y-0.5">
                      <h3 className="font-bold text-gray-900 text-lg">{t('installation.video.title')}</h3>
                      <p className="text-gray-500 text-base">{t('installation.video.subtitle')}</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Vertical Video */}
              <div className="relative bg-black flex justify-center">
                <div className="w-full max-w-md mx-auto">
                  <div className="aspect-[2/3] w-full">
                    <iframe
                      src={t('installation.video.url', { defaultValue: 'https://www.youtube.com/embed/HuV5-DHjzi0' })}
                      title={t('installation.video.title')}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="w-full h-full"
                    />
                  </div>
                </div>
              </div>
              
              {/* Regulations link removed as per request */}
            </motion.article>
          </div>
          
          {/* Steps Section - Takes full width on mobile, 6/12 on desktop */}
          <div className="lg:col-span-6">
            <motion.div 
              className="bg-white rounded-2xl p-10 border border-gray-200 sticky top-6 h-full min-h-[600px] flex flex-col"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
            >
              <h3 className="font-bold text-lg text-gray-900 mb-4 flex items-center">
                <span className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mr-3">
                  <Bookmark size={16} />
                </span>
                {t('installation.quickStepsTitle')}
              </h3>
              
              <div className="space-y-4 flex-grow overflow-y-auto max-h-[500px] pr-2">
                {Array.isArray(steps) && steps.map((step, index) => (
                  <motion.div 
                    key={index}
                    className="flex items-center p-4 rounded-lg hover:bg-white transition-colors cursor-pointer group"
                    whileHover={{ x: 4 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                  >
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center text-sm font-medium mr-3">
                      {index + 1}
                    </div>
                    <p className="text-gray-700 text-sm leading-relaxed my-auto">{step}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InstallationGuide;