import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { useTranslation } from 'react-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Check, Zap, Star } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const getProductsData = (t: any) => ([
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
    testimonial: t('products.plugPlayX2_testimonial')
  }
]);

type ProductPageProps = {};

const ProductPage: NextPage<ProductPageProps> = () => {
  const { t } = useTranslation('translation');
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  const products = getProductsData(t);
  const currentProduct = products.find(p => p.slug === router.query.slug);

  if (!currentProduct) {
    return <div>Product not found</div>;
  }

  return (
    <>
      <Navbar />
      <main className="pt-24 bg-gray-50">
        <div className="container mx-auto px-4 py-16">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="p-8 bg-white rounded-2xl shadow-lg">
              <Image
                src={currentProduct.image}
                alt={currentProduct.name}
                width={600}
                height={450}
                className="w-full h-auto object-contain rounded-lg"
              />
            </div>

            <div>
              <div className="flex items-center gap-2 mb-4">
                <Zap className="w-6 h-6 text-blue-500" />
                <span className="text-xl font-bold text-blue-700">{currentProduct.power}</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">{currentProduct.name}</h1>
              <p className="text-xl text-gray-600 mb-6">{currentProduct.subtitle}</p>
              
              <div className="mb-6">
                <span className="text-4xl font-extrabold text-gray-900">{currentProduct.price}</span>
                <span className="text-gray-500 ml-2">incl. BTW</span>
              </div>

              <p className="text-gray-700 mb-8">{currentProduct.description}</p>

              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">What's in the box?</h3>
                <ul className="space-y-3">
                  {Array.isArray(currentProduct.features) && currentProduct.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <Check className="w-4 h-4 text-green-600" />
                      </div>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Button size="lg" className="w-full bg-green-600 hover:bg-green-700 text-white text-lg py-6 rounded-full">
                {t('products.orderCta')}
              </Button>

              <div className="bg-blue-50 p-4 rounded-lg mt-8">
                <div className="flex items-center gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-sm text-blue-800 italic">\"{currentProduct.testimonial}\"</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async ({ locales }) => {
  const slugs = ['plug-play-x1', 'plug-play-x2'];
  const paths = (locales ?? []).flatMap(locale =>
    slugs.map(slug => ({ params: { slug }, locale }))
  );

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? 'en', ['translation'])),
    },
  };
};

export default ProductPage;
