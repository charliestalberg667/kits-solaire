import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const InstallationGuide = () => {
  const { t } = useTranslation();

  const steps = t('installation.steps', { returnObjects: true });

  return (
    <section id="installation" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-4">
            {t('installation.title')}
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="relative pl-8">
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-200" aria-hidden="true"></div>

              <div className="space-y-12">
                {Array.isArray(steps) && steps.map((step, index) => (
                  <div key={index} className="relative">
                    <div className="absolute -left-1 top-1/2 -translate-y-1/2 flex items-center justify-center w-10 h-10 bg-blue-500 text-white rounded-full font-bold text-lg ring-8 ring-white">
                      {index + 1}
                    </div>
                    <div className="ml-16">
                      <p className="text-lg text-gray-700">{step}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="relative max-w-sm mx-auto"
          >
            <div className="aspect-[9/16] rounded-2xl overflow-hidden shadow-2xl">
              <iframe
                src="https://www.youtube.com/embed/HuV5-DHjzi0"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default InstallationGuide;
