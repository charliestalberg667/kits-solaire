import { motion } from "framer-motion";

const stats = [
  { number: "5 Min", label: "Average Setup Time", subtext: "From unboxing to power generation" },
  { number: "0", label: "Tools Required", subtext: "Just plug into your wall outlet" },
  { number: "100%", label: "DIY Success Rate", subtext: "Anyone can do it successfully" },
  { number: "10,000+", label: "Happy DIY Customers", subtext: "No electrician calls needed" }
];

import { useTranslation } from 'react-i18next';

const StatsSection = () => {
  const { t } = useTranslation();
  const stats = t('stats.items', { returnObjects: true }) as { number: string, label: string, subtext: string }[];
  return (
    <section className="py-24 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-light text-white mb-6">
            {t('stats.title')}
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            {t('stats.subtitle')}
          </p>
        </div>
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {Array.isArray(stats) && stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center bg-gray-800 p-6 rounded-2xl hover:bg-gray-750 transition-colors"
            >
              <div className="text-4xl md:text-5xl font-light text-blue-400 mb-2">
                {stat.number}
              </div>
              <div className="text-gray-300 text-base md:text-lg font-medium mb-1">
                {stat.label}
              </div>
              <div className="text-gray-500 text-sm">
                {stat.subtext}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;