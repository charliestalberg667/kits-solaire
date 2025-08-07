import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Star, Truck, Shield } from "lucide-react";
import Image from 'next/image';
import { motion } from "framer-motion";
import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import { useEffect, useState } from 'react';

interface Product {
  id: number;
  name: string;
  subtitle: string;
  description: string;
  price: string;
  features: string[];
  popular: boolean;
  url: string;
  testimonial: string;
  baseKey: string;
  comingSoon: boolean | string;
}

const ProductsSection = () => {
  const { t, i18n } = useTranslation();
  const [isClient, setIsClient] = useState(false);
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    setIsClient(true);
    
    // Dynamically detect all plugPlay* products from translation keys
    const productKeys = Object.keys(t('products', { returnObjects: true }) as object)
      .filter(key => key.endsWith('_name') && !key.includes('kitAutonomie'))
      .map(key => key.replace('_name', ''));

    const productData = productKeys.map((baseKey, idx) => ({
      id: idx + 1,
      baseKey,
      name: t(`products.${baseKey}_name`),
      subtitle: t(`products.${baseKey}_subtitle`),
      description: t(`products.${baseKey}_description`),
      price: t(`products.${baseKey}_price`),
      features: t(`products.${baseKey}_features`, { returnObjects: true }) as string[],
      popular: idx === 1, // Mark X2 as popular by default
      url: `/products/${baseKey}`, // Link to the dynamic product page
      testimonial: t(`products.${baseKey}_testimonial`),
      comingSoon: t(`products.${baseKey}_comingSoon`, { defaultValue: false })
    }));
    setProducts(productData);
  }, [t, i18n.language]); // Re-run when language changes

  if (!isClient) {
    return (
      <section id="products" className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">
              Loading...
            </h2>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="products" className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">
            {t('products.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('products.subtitle')}
          </p>
        </div>

        {/* Trust Badges */}
        <div className="flex flex-wrap justify-center gap-6 mb-12">
          <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm">
            <Truck className="w-5 h-5 text-green-600" />
            <span className="text-sm font-medium">{t('products.trustBadges.freeShipping')}</span>
          </div>
          <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm">
            <Shield className="w-5 h-5 text-blue-600" />
            <span className="text-sm font-medium">{t('products.trustBadges.moneyBack')}</span>
          </div>
          <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm">
            <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
            <span className="text-sm font-medium">{t('products.trustBadges.customerRating')}</span>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="h-full"
            >
              <div className={`relative h-full ${product.popular ? 'p-0.5 rounded-lg bg-gradient-to-r from-blue-500 to-green-500' : ''}`}>
                <Card className="h-full flex flex-col">
                <div className="flex-1 flex flex-col">
                  <div>
                    <div className={`relative w-full ${["plugPlayX1","plugPlayX2"].includes(product.baseKey) ? "h-48" : "h-64"} bg-gray-100`}>
                      {product.baseKey === "plugPlayBalconyX4" && (
                        <div className="absolute top-4 right-4 z-10 w-16 h-16 bg-white rounded-full p-2 shadow-md">
                          <Image
                            src="/17573C14-3277-4744-B027-DB3652D0D634.jpeg"
                            alt="Sunpura Logo"
                            width={48}
                            height={48}
                            className="w-full h-full object-contain"
                          />
                        </div>
                      )}
                      <Image
                        src={product.baseKey === "batterieConnectee" 
                          ? "/BatterieConnectee.png" 
                          : product.baseKey === "plugPlayBalconyX4"
                            ? "/70276edf0221543f5401a79ee2bd9c38.jpg"
                            : `/${product.baseKey}.png`}
                        alt={product.name}
                        fill
                        className={`${
                          ["plugPlayX1", "plugPlayX2"].includes(product.baseKey) 
                            ? "object-contain p-4" 
                            : product.baseKey === "plugPlayBalconyX4"
                              ? "object-cover"
                              : "object-cover"
                        }`}
                        priority
                      />
                      {product.popular && (
                        <div className="absolute top-2 right-2 bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg z-10 flex items-center">
                          <span>🔥</span>
                          <span className="ml-1">MEILLEUR PRIX</span>
                        </div>
                      )}
                      {product.comingSoon && (
                        <div className="absolute top-2 right-2 bg-yellow-400 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg z-10">
                          Coming Soon
                        </div>
                      )}
                    </div>
                    <CardHeader className="pb-6">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <CardTitle className="text-2xl font-bold text-gray-900 tracking-wider">
                            {product.name}
                          </CardTitle>
                          <p className="text-gray-600 mt-1">{product.subtitle}</p>
                        </div>
                      </div>
                      <p className="text-gray-600 text-sm mt-4 mb-6">{product.description}</p>
                      
                      <div className="mt-6">
                        <div className="bg-blue-50 p-4 rounded-lg mb-8">
                          <div className="flex items-center gap-1 mb-1">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className="w-3 h-3 text-yellow-400 fill-current" />
                            ))}
                          </div>
                          <p className="text-sm text-blue-800 italic">"{product.testimonial}"</p>
                        </div>
                        
                        <ul className="grid grid-cols-2 gap-x-4 gap-y-4 mb-8">
                          {Array.isArray(product.features) 
                            ? product.features.map((feature, i) => (
                                <li key={i} className="flex items-center gap-3">
                                  <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                                    <Check className="w-3 h-3 text-green-600" />
                                  </div>
                                  <span className="text-sm text-gray-700">{feature}</span>
                                </li>
                              ))
                            : null}
                        </ul>
                      </div>
                    </CardHeader>
                  </div>

                  {/* Fixed bottom section */}
                  <div className="mt-auto pt-6 border-t border-gray-100 bg-white rounded-b-lg">
                    <div className="text-center mb-6">
                      <span className="text-2xl font-bold text-gray-900">{product.price}</span>
                    </div>
                    {product.baseKey !== 'batterieConnectee' ? (
                      <>
                        <div className="flex justify-center">
                          <Link href={product.url} passHref target="_blank" rel="noopener noreferrer">
                            <Button
                              className={`w-auto px-8 py-3 rounded-full text-lg font-medium transition-all duration-300 hover:scale-105 ${
                                product.popular || product.baseKey === 'plugPlayBalconyX4'
                                  ? 'bg-blue-600 hover:bg-blue-700 text-white' 
                                  : 'bg-blue-600 hover:bg-blue-700 text-white'
                              }`}
                            >
                              {t('products.orderCta')}
                            </Button>
                          </Link>
                        </div>
                        <div className="flex items-center justify-center gap-2 mt-4 text-sm text-gray-600 pb-4">
                          <span>💡</span>
                          <span>{t('products.installTime', 'Installation in less than 30 minutes')}</span>
                        </div>
                      </>
                    ) : (
                      <div className="pb-4"></div> // Maintains consistent bottom padding
                    )}
                  </div>
                </div>
                </Card>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;