import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Check, Zap } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useState } from 'react';

const getProductsData = (t: any) => ([
  {
    id: 1,
    slug: 'plugPlayX1',
    name: t('products.plugPlayX1_name'),
    subtitle: t('products.plugPlayX1_subtitle'),
    power: "440W",
    description: t('products.plugPlayX1_description'),
    price: t('products.plugPlayX1_price'),
    features: t('products.plugPlayX1_features', { returnObjects: true }),
    testimonial: t('products.plugPlayX1_testimonial'),
    specs: t('products.plugPlayX1_specs', { returnObjects: true }),
    image: '/plugPlayX1.png',
  },
  {
    id: 2,
    slug: 'plugPlayX2',
    name: t('products.plugPlayX2_name'),
    subtitle: t('products.plugPlayX2_subtitle'),
    power: "800W",
    description: t('products.plugPlayX2_description'),
    price: t('products.plugPlayX2_price'),
    features: t('products.plugPlayX2_features', { returnObjects: true }),
    testimonial: t('products.plugPlayX2_testimonial'),
    specs: t('products.plugPlayX2_specs', { returnObjects: true }),
    image: '/plugPlayX2.png',
  },
  {
    id: 3,
    slug: 'plugPlayBalconyX4',
    name: t('products.plugPlayBalconyX4_name'),
    subtitle: t('products.plugPlayBalconyX4_subtitle'),
    power: "800W",
    description: t('products.plugPlayBalconyX4_description'),
    price: t('products.plugPlayBalconyX4_price'),
    features: t('products.plugPlayBalconyX4_features', { returnObjects: true }),
    testimonial: t('products.plugPlayBalconyX4_testimonial'),
    specs: t('products.plugPlayBalconyX4_specs', { returnObjects: true }),
    image: '/8cd5f0c67215bea516dbb6feec3c067da899055201492deba208f8706d6c52cd.jpeg',
  },
]);

interface ProductPageProps {}

const ProductPage: NextPage<ProductPageProps> = () => {
  const { t } = useTranslation('translation');
  const router = useRouter();
  const [nav1, setNav1] = useState<Slider | null>(null);
  const [nav2, setNav2] = useState<Slider | null>(null);

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  const products = getProductsData(t);
  const currentProduct = products.find(p => p.slug === router.query.slug);

  if (!currentProduct) {
    return <div>Product not found</div>;
  }

  const productImages = [
    {
      src: currentProduct.image,
      alt: currentProduct.name,
    },
    {
      src: '/a3d3beb207e0eb2e90ea83087ba6d8a2828500b6f5eb881353a8b4e685f7ee4d.jpeg',
      alt: 'Microinverter close-up photo',
    },
  ];

  return (
    <>
      <Navbar />
      <main className="pt-20 sm:pt-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            <div className="p-4 bg-white rounded-2xl shadow-lg">
              <Slider
                asNavFor={nav2 || undefined}
                ref={(slider) => setNav1(slider)}
                arrows={false}
                fade={true}
              >
                {productImages.map((image, index) => (
                  <div key={`main-${index}`}>
                    <Image
                      src={image.src}
                      alt={image.alt}
                      width={600}
                      height={450}
                      className="w-full h-auto object-contain rounded-lg"
                      priority={index === 0}
                    />
                  </div>
                ))}
              </Slider>
              <div className="mt-4">
                <Slider
                  asNavFor={nav1 || undefined}
                  ref={(slider) => setNav2(slider)}
                  slidesToShow={productImages.length < 3 ? productImages.length : 3}
                  responsive={[
                    {
                      breakpoint: 768,
                      settings: {
                        slidesToShow: productImages.length < 4 ? productImages.length : 4,
                      }
                    },
                    {
                      breakpoint: 1024,
                      settings: {
                        slidesToShow: productImages.length < 5 ? productImages.length : 5,
                      }
                    }
                  ]}
                  swipeToSlide={true}
                  focusOnSelect={true}
                  centerMode={false}
                >
                  {productImages.map((image, index) => (
                    <div key={`thumb-${index}`} className="p-1 cursor-pointer">
                      <Image
                        src={image.src}
                        alt={`Thumbnail of ${image.alt}`}
                        width={100}
                        height={75}
                        className="w-full h-auto object-cover rounded-md border-2 border-transparent hover:border-blue-500 transition-all"
                      />
                    </div>
                  ))}
                </Slider>
              </div>
            </div>

            <div>
              <div className="flex items-center gap-2 mb-4">
                <Zap className="w-6 h-6 text-blue-500" />
                <span className="text-xl font-bold text-blue-700">{currentProduct.power}</span>
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-2">{currentProduct.name}</h1>
              <p className="text-lg sm:text-xl text-gray-600 mb-6">{currentProduct.subtitle}</p>

              <div className="flex items-baseline gap-4 mb-6">
                <span className="text-3xl sm:text-4xl font-extrabold text-gray-900">{currentProduct.price}</span>
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

              <a 
                href={
                  currentProduct.slug === 'plugPlayX1' 
                    ? 'https://solarstock.be/mon-kit-solaire-plugamp-play-1-panneau-solaire-avec-structure-terrasse-0651433.html'
                    : currentProduct.slug === 'plugPlayX2'
                    ? 'https://solarstock.be/mon-kit-solaire-plugamp-play-2-panneaux-solaire-avec-structure-terrasse-0651389.html'
                    : currentProduct.slug === 'plugPlayBalconyX4'
                    ? 'https://solarstock.be/mon-kit-solaire-plugamp-play-kit-sunpura-800w-0652685.html'
                    : '#'
                }
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full"
              >
                <Button size="lg" className="w-full bg-green-600 hover:bg-green-700 text-white text-lg py-6 rounded-full">
                  {t('products.orderCta')}
                </Button>
              </a>

              {currentProduct.specs && typeof currentProduct.specs === 'object' && currentProduct.specs.title && currentProduct.specs.items &&
                <div className="border-t border-gray-200 pt-8 mt-8">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4">{currentProduct.specs.title}</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4 text-gray-700 mb-6">
                    {Object.entries(currentProduct.specs.items).map(([key, value]) => (
                      <div key={key} className="flex flex-col">
                        <span className="text-sm text-gray-500">{key.replace(/_/g, ' ')}</span>
                        <span className="font-semibold">{value as string}</span>
                      </div>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-4 mt-4">
                    <a 
                      href="http://solarstock.dyndns.org:15022/PRODUCT_ATT_275.pdf" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800 text-sm flex items-center gap-1"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                      {t('products.downloadSolarPanelSpecs', 'Solar Panel Specifications')}
                    </a>
                    <a 
                      href="http://solarstock.dyndns.org:15022/PRODUCT_ATT_604.pdf" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800 text-sm flex items-center gap-1"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                      {t('products.downloadMicroinverterSpecs', 'Microinverter Specifications')}
                    </a>
                  </div>
                </div>
              }
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async ({ locales }) => {
  const t = (key: string) => key; // Dummy t function
  const products = getProductsData(t);
  const paths = locales
    ? locales.flatMap((locale) =>
        products.map((product) => ({ params: { slug: product.slug }, locale }))
      )
    : products.map((product) => ({ params: { slug: product.slug } }));

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale || 'en', ['common', 'translation'])),
    },
    revalidate: 60, 
  };
};

export default ProductPage;
