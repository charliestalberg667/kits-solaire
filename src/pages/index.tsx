import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProductsSection from "@/components/ProductsSection";
import StatsSection from "@/components/StatsSection";
import InstallationGuide from "@/components/InstallationGuide";
import PressSection from "@/components/PressSection";
import FaqSection from "@/components/FaqSection";
import Footer from "@/components/Footer";

const Home = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <ProductsSection />
      <StatsSection />
      <InstallationGuide />
      <PressSection />
      <FaqSection />
      <Footer />
    </div>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? 'fr', ['translation', 'features'])),
  },
});

export default Home;