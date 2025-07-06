import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Star, Truck, Shield } from "lucide-react";
import Image from 'next/image';
import { motion } from "framer-motion";
import { useTranslation } from 'react-i18next';
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
}

const ProductsSection = () => {
  const { t, i18n } = useTranslation();
  const [isClient, setIsClient] = useState(false);
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    setIsClient(true);
    
    const productData = [
      {
        id: 1,
        name: t('products.plugPlayX1_name'),
        subtitle: t('products.plugPlayX1_subtitle'),
        description: t('products.plugPlayX1_description'),
        price: t('products.plugPlayX1_price'),
        features: t('products.plugPlayX1_features', { returnObjects: true }) as string[],
        popular: false,
        url: 'https://solarstock.be/mon-kit-solaire-plugamp-play-1-panneau-solaire-avec-structure-terrasse-0651433.html',
        testimonial: t('products.plugPlayX1_testimonial')
      },
      {
        id: 2,
        name: t('products.plugPlayX2_name'),
        subtitle: t('products.plugPlayX2_subtitle'),
        description: t('products.plugPlayX2_description'),
        price: t('products.plugPlayX2_price'),
        features: t('products.plugPlayX2_features', { returnObjects: true }) as string[],
        popular: true,
        url: 'https://solarstock.be/mon-kit-solaire-plugamp-play-2-panneaux-solaire-avec-structure-terrasse-0651389.html',
        testimonial: t('products.plugPlayX2_testimonial')
      }
    ];
    
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
              <Card className={`h-full flex flex-col ${product.popular ? 'border-2 border-blue-500' : ''}`}>
                <div className="relative w-full h-48 bg-gray-100">
                  <Image
                    src={`/plugPlayX${product.id}.png`}
                    alt={product.name}
                    fill
                    className="object-contain p-4"
                    priority
                  />
                </div>
                <CardHeader className="pb-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-2xl font-bold text-gray-900">
                        {product.name}
                      </CardTitle>
                      <p className="text-gray-600 mt-1">{product.subtitle}</p>
                    </div>
                    {product.popular && (
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                        {t('products.bestValue')}
                      </span>
                    )}
                  </div>
                  <p className="text-gray-600 text-sm mt-2">{product.description}</p>
                  
                  <div className="mt-4">
                    <div className="bg-blue-50 p-3 rounded-lg mb-6">
                      <div className="flex items-center gap-1 mb-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-3 h-3 text-yellow-400 fill-current" />
                        ))}
                      </div>
                      <p className="text-sm text-blue-800 italic">"{product.testimonial}"</p>
                    </div>
                    
                    <ul className="grid grid-cols-2 gap-x-4 gap-y-3 mb-6">
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

                    <div className="mt-auto">
                      <div className="text-center mb-4">
                        <span className="text-2xl font-bold text-gray-900">{product.price}</span>
                      </div>
                      <Link href={product.url} passHref target="_blank" rel="noopener noreferrer">
                        <Button
                          className={`w-full py-4 rounded-full text-lg font-medium transition-all duration-300 hover:scale-105 ${
                            product.popular 
                              ? 'bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white' 
                              : 'bg-gray-900 hover:bg-gray-800 text-white'
                          }`}
                        >
                          {t('products.orderCta')}
                        </Button>
                      </Link>
                      <p className="text-xs text-center text-gray-500 mt-2">
                        {t('products.installGuarantee')}
                      </p>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;