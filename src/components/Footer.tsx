import { useTranslation } from 'react-i18next';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="col-span-1 lg:col-span-1 space-y-4">
            <h3 className="text-2xl font-semibold text-gray-900" suppressHydrationWarning>{t('footer.companyName')}</h3>
            <p className="text-gray-600 text-sm leading-relaxed" suppressHydrationWarning>
              {t('footer.description')}
            </p>
          </div>
          


          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-medium text-gray-900 mb-4" suppressHydrationWarning>{t('footer.contact.title')}</h4>
            <ul className="space-y-3 text-gray-600" suppressHydrationWarning>
              <li suppressHydrationWarning>{t('footer.contact.phone')}</li>
              <li className="leading-relaxed" suppressHydrationWarning>{t('footer.contact.address')}</li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-200 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm" suppressHydrationWarning>&copy;{t('footer.copyright')}</p>
          <div className="flex space-x-4 mt-4 sm:mt-0">
            <a href="#" className="text-gray-500 hover:text-blue-600 transition-colors duration-300"><Facebook size={20} /></a>
            <a href="#" className="text-gray-500 hover:text-blue-600 transition-colors duration-300"><Twitter size={20} /></a>
            <a href="#" className="text-gray-500 hover:text-blue-600 transition-colors duration-300"><Instagram size={20} /></a>
            <a href="#" className="text-gray-500 hover:text-blue-600 transition-colors duration-300"><Linkedin size={20} /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
