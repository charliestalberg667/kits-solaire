
import { motion } from "framer-motion";
import { useTranslation } from 'next-i18next';

const features = [];

const FeaturesSection = () => {
  const { t } = useTranslation();

  type Feature = {
    title: string;
    description: string;
    image: string;
  };

  const features = t('features.items', { returnObjects: true }) as Feature[];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-4" suppressHydrationWarning>
            {t('features.title.main')}
            <span className="font-medium text-blue-600"> {t('features.title.highlighted')}</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto" suppressHydrationWarning>
            {t('features.subtitle')}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8" suppressHydrationWarning>
          {Array.isArray(features) && features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center group hover:scale-105 transition-all duration-300 p-6 rounded-2xl hover:bg-gray-50"
            >
              <div className="w-full h-48 mb-4 overflow-hidden rounded-2xl">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2" suppressHydrationWarning>
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed" suppressHydrationWarning>
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
