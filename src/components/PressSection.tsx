import { useTranslation } from "next-i18next";
import Image from "next/image";

// Function to parse French date string to Date object
const parseFrenchDate = (dateString: string): Date => {
  const months: { [key: string]: number } = {
    'janvier': 0, 'février': 1, 'mars': 2, 'avril': 3, 'mai': 4, 'juin': 5,
    'juillet': 6, 'août': 7, 'septembre': 8, 'octobre': 9, 'novembre': 10, 'décembre': 11
  };
  
  const parts = dateString.split(' ');
  if (parts.length !== 3) return new Date();
  
  const day = parseInt(parts[0]);
  const month = months[parts[1].toLowerCase()];
  const year = parseInt(parts[2]);
  
  return new Date(year, month, day);
};

const PressSection = () => {
  const { t } = useTranslation();
  
  // Press article data
  const pressArticle = {
    title: t('press.title', 'Ils parlent de nous'),
    paragraphs: [
      t('press.p1', 'Les kits photovoltaïques Plug & Play offrent une solution accessible pour produire votre propre électricité. Faciles à installer, ils se branchent simplement sur une prise électrique standard, sans travaux complexes.'),
      t('press.p2', 'Chaque kit, soigneusement composé par des professionnels du secteur, comprend un ou deux panneaux solaires ainsi qu\'un micro-onduleur performant (jusqu\'à 800W, agréé Synergrid). Cette solution est idéale pour les bricoleurs souhaitant réduire leur facture d\'énergie avec un investissement initial plus abordable.'),
      t('press.p3', 'Avant l\'installation, quelques vérifications sont essentielles : compatibilité électrique de votre installation, conformité avec les règles d\'urbanisme (notamment si le kit est visible depuis la rue), fixation sécurisée et déclaration auprès du gestionnaire de réseau. À noter : les réglementations peuvent varier selon les régions.'),
      t('press.p4', 'Notre équipe est à votre disposition pour vous accompagner : retrouvez-nous en magasin chez Solarstock, ou contactez-nous par téléphone au 02/241.08.00. Nous serons ravis de répondre à vos questions et de vous guider dans votre projet solaire.')
    ],
    source: 'Solarstock',
    date: '4 Août 2024',
    logo: '/logoblack.png'
  };

  return (
    <section id="press" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* YouTube Video Section */}
        <div className="mb-16 py-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            {t('press.videoTitle')}
          </h2>
          <div className="relative w-full" style={{ paddingBottom: '56.25%' /* 16:9 Aspect Ratio */ }}>
            <iframe 
              className="absolute top-0 left-0 w-full h-full rounded-xl shadow-2xl"
              src="https://www.youtube.com/embed/Wp6vk4nhcyo" 
              title="Présentation des kits solaires Plug & Play"
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen>
            </iframe>
          </div>
        </div>
        
        {/* Press Article */}
        <article className="bg-white rounded-xl border border-gray-100 p-8">
          <div className="mb-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="relative h-10 w-10 rounded-full overflow-hidden bg-white p-1 border border-gray-100">
                  <Image 
                    src={pressArticle.logo} 
                    alt={pressArticle.source}
                    width={40}
                    height={40}
                    className="object-contain"
                  />
                </div>
                <span className="ml-3 text-sm font-medium text-gray-700">{pressArticle.source}</span>
              </div>
              <div className="flex items-center text-sm text-gray-500">
                <time dateTime={parseFrenchDate(pressArticle.date).toISOString().split('T')[0]}>
                  {pressArticle.date}
                </time>
              </div>
            </div>
          </div>
          
          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            {pressArticle.title}
          </h3>
          
          <div className="prose max-w-none text-gray-600 text-lg">
            {pressArticle.paragraphs.map((paragraph: string, i: number) => (
              <p key={i} className="mb-4">
                {paragraph}
              </p>
            ))}
          </div>
        </article>
      </div>
    </section>
  );
};

export default PressSection;