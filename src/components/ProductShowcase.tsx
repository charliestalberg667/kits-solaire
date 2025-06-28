import { Button } from "@/components/ui/button";
import { Check, User, Home, Wrench } from "lucide-react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const ProductShowcase = () => {
  const { t } = useTranslation();
  const benefits = t('productShowcase.benefits', { returnObjects: true }) as string[];
  const userTypes = t('productShowcase.userTypes', { returnObjects: true }) as { name: string, description: string, icon: string }[];
  const images = t('productShowcase.images', { returnObjects: true }) as { src: string, alt: string, className: string }[];

  const icons: { [key: string]: React.ElementType } = {
    Home,
    User,
    Wrench,
  };

  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <User className="w-4 h-4" />
              {t('productShowcase.tagline')}
            </div>

            <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">
              {t('productShowcase.title.part1')}
              <span className="font-medium text-green-600">{t('productShowcase.title.part2')}</span>
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              {t('productShowcase.subtitle')}
            </p>
            
            <div className="space-y-4 mb-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-3"
                >
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                    <Check className="w-4 h-4 text-green-600" />
                  </div>
                  <span className="text-gray-700">{benefit}</span>
                </motion.div>
              ))}
            </div>

            <div className="grid grid-cols-3 gap-4 mb-8">
              {userTypes.map((userType) => {
                const IconComponent = icons[userType.icon];
                return (
                  <div key={userType.name} className="text-center p-4 bg-white rounded-lg shadow-sm">
                    {IconComponent && <IconComponent className="w-6 h-6 text-blue-500 mx-auto mb-2" />}
                    <div className="text-sm font-medium text-gray-900">{userType.name}</div>
                    <div className="text-xs text-gray-600">{userType.description}</div>
                  </div>
                );
              })}
            </div>
            
            <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-full text-lg font-medium transition-all duration-300 hover:scale-105">
              {t('productShowcase.cta')}
            </Button>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="p-4">
                  <img {...images[0]} className="w-full h-auto object-contain rounded-lg shadow-lg" />
                </div>
                <div className="p-4">
                  <img {...images[1]} className="w-full h-auto object-contain rounded-lg shadow-lg" />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="p-4">
                  <img {...images[2]} className="w-full h-auto object-contain rounded-lg shadow-lg" />
                </div>
                <div className="p-4">
                  <img {...images[3]} className="w-full h-auto object-contain rounded-lg shadow-lg" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
