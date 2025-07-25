import { motion } from "framer-motion";
import { useTranslation } from "next-i18next";

const PressSection = () => {
  const { t } = useTranslation();

  return (
    <section id="press" className="py-32 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">
            {t('press.title')}
          </h2>
          <p className="text-xl text-blue-600 font-semibold max-w-4xl mx-auto">
            {t('press.subtitle')}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="prose prose-lg text-gray-600 max-w-none space-y-6 px-5"
          >
            <p>{t('press.p1')}</p>
            <p>{t('press.p2')}</p>
            <p>{t('press.p3')}</p>
            <p className="font-semibold text-gray-800">{t('press.p4')}</p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl">
              <iframe
                src={t('press.videoUrl')}
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

export default PressSection;