import { useTranslation } from 'next-i18next';

const AboutSection = () => {
  const { t } = useTranslation();

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-4" suppressHydrationWarning>{t('about.title')}</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto" suppressHydrationWarning>
            {t('about.subtitle')}
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img src="https://images.unsplash.com/photo-1588392382834-a891154bca4d?auto=format&fit=crop&q=80&w=800&h=600" alt="About Solarkits.be" className="rounded-lg shadow-xl"/>
          </div>
          <div className="space-y-6 font-light text-gray-700">
            <p suppressHydrationWarning>{t('about.paragraph1')}</p>
            <p suppressHydrationWarning>{t('about.paragraph2')}</p>
            <p suppressHydrationWarning>{t('about.paragraph3')}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
