import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Zap, Star, Truck, Shield } from "lucide-react";
import { motion } from "framer-motion";
import { useTranslation } from 'react-i18next';
import Link from 'next/link';

const ProductsSection = () => {
  const { t } = useTranslation();
  const products = [
    {
      id: 1,
      slug: 'plug-play-x1',
      name: t('products.plugPlayX1_name'),
      subtitle: t('products.plugPlayX1_subtitle'),
      power: "440W",
      description: t('products.plugPlayX1_description'),
      price: t('products.plugPlayX1_price'),
      features: t('products.plugPlayX1_features', { returnObjects: true }),
      image: "/plugPlayX1.png",
      popular: false,
      testimonial: t('products.plugPlayX1_testimonial')
    },
    {
      id: 2,
      slug: 'plug-play-x2',
      name: t('products.plugPlayX2_name'),
      subtitle: t('products.plugPlayX2_subtitle'),
      power: "800W",
      description: t('products.plugPlayX2_description'),
      price: t('products.plugPlayX2_price'),
      features: t('products.plugPlayX2_features', { returnObjects: true }),
      image: "/plugPlayX2.png",
      popular: true,
      testimonial: t('products.plugPlayX2_testimonial')
    }
  ];

  return (
    <section id="products" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-4" suppressHydrationWarning>
            {t('products.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8" suppressHydrationWarning>
            {t('products.subtitle')}
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 mb-12">
            <div className="flex items-center gap-2 text-green-600">
              <Truck className="w-5 h-5" />
              <span className="text-sm font-medium" suppressHydrationWarning>{t('products.trustBadges.freeShipping')}</span>
            </div>
            <div className="flex items-center gap-2 text-green-600">
              <Shield className="w-5 h-5" />
              <span className="text-sm font-medium" suppressHydrationWarning>{t('products.trustBadges.moneyBack')}</span>
            </div>
            <div className="flex items-center gap-2 text-green-600">
              <Star className="w-5 h-5" />
              <span className="text-sm font-medium" suppressHydrationWarning>{t('products.trustBadges.customerRating')}</span>
            </div>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mx-auto" suppressHydrationWarning>
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="flex"
            >
              <Card 
                className={`relative overflow-hidden transition-all duration-300 hover:shadow-2xl hover:scale-[1.02] flex flex-col w-full ${product.popular ? 'ring-2 ring-blue-500 shadow-xl' : ''}`}>
                {product.popular && (
                  <div className="absolute top-0 right-0 bg-gradient-to-r from-blue-500 to-green-500 text-white px-4 py-2 text-sm font-medium rounded-bl-lg z-10" suppressHydrationWarning>
                    {t('products.bestValue')}
                  </div>
                )}
                
                <CardHeader className="p-6 pb-4">
                  <div className="w-full aspect-[4/3] mb-4 p-4 bg-white rounded-2xl flex items-center justify-center">
                    <img 
                      src={product.image} 
                      alt={`${product.name} solar panel kit`}
                      className="max-h-full max-w-full object-contain"
                    />
                  </div>
                  <div className="absolute top-4 left-4 flex items-center gap-3 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-xl border-2 border-blue-100">
                    <Zap className="w-6 h-6 text-blue-500" />
                    <span className="text-lg font-extrabold text-blue-700">{product.power}</span>
                  </div>
                  <CardTitle className="text-2xl font-light text-gray-900 mb-2" suppressHydrationWarning>
                    {product.name}
                  </CardTitle>
                  <p className="text-gray-600" suppressHydrationWarning>{product.subtitle}</p>
                </CardHeader>

                <CardContent className="flex flex-col flex-grow p-6 pt-0">
                  <p className="text-gray-600 mb-4" suppressHydrationWarning>{product.description}</p>
                  <div className="bg-blue-50 p-3 rounded-lg mb-6">
                    <div className="flex items-center gap-1 mb-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <p className="text-sm text-blue-800 italic" suppressHydrationWarning>"{product.testimonial}"</p>
                  </div>
                  <ul className="grid grid-cols-2 gap-x-4 gap-y-3 mb-6" suppressHydrationWarning>
                    {Array.isArray(product.features) && product.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-3">
                        <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                          <Check className="w-3 h-3 text-green-600" />
                        </div>
                        <span className="text-sm text-gray-700" suppressHydrationWarning>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto">
                    <div className="text-center mb-4">
                      <span className="text-2xl font-bold text-gray-900" suppressHydrationWarning>{product.price}</span>
                    </div>
                    <Link href={`/products/${product.slug}`} passHref>
                      <Button
                        suppressHydrationWarning
                        className={`w-full py-4 rounded-full text-lg font-medium transition-all duration-300 hover:scale-105 ${product.popular ? 'bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white' : 'bg-gray-900 hover:bg-gray-800 text-white'}`}>
                        {t('products.orderCta')}
                      </Button>
                    </Link>
                    <p className="text-xs text-center text-gray-500 mt-2" suppressHydrationWarning>
                      {t('products.installGuarantee')}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
