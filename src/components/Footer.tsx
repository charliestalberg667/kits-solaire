import { useTranslation } from 'next-i18next';
import { Facebook, Instagram } from 'lucide-react';

const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto py-20 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 mb-16">
          {/* Company Info - Takes more space */}
          <div className="lg:col-span-2 space-y-6">
            <h3 className="text-2xl font-semibold text-gray-900" suppressHydrationWarning>{t('footer.companyName')}</h3>
            <p className="text-gray-600 text-base leading-relaxed max-w-2xl" suppressHydrationWarning>
              {t('footer.description')}
            </p>
          </div>
          
          {/* Contact Info */}
          <div className="space-y-6">
            <h4 className="text-lg font-medium text-gray-900 mb-8" suppressHydrationWarning>{t('footer.contact.title')}</h4>
            <div className="space-y-6 text-gray-600" suppressHydrationWarning>
              <div>
                <p className="font-medium text-gray-800 mb-2">Phone</p>
                <p suppressHydrationWarning>{t('footer.contact.phone')}</p>
              </div>
              <div>
                <p className="font-medium text-gray-800 mb-2">Address</p>
                <p className="leading-relaxed" suppressHydrationWarning>{t('footer.contact.address')}</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Social Media Section */}
        <div className="mb-12">
          <h4 className="text-lg font-medium text-gray-900 mb-6" suppressHydrationWarning>{t('footer.social.title')}</h4>
          <div className="flex space-x-8">
            <a
              href="https://www.facebook.com/profile.php?id=61551520876648"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-blue-600 transition-colors duration-300"
              aria-label="Facebook"
            >
              <Facebook size={24} />
            </a>
            <a
              href="https://www.instagram.com/solarstock.bv/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-blue-600 transition-colors duration-300"
              aria-label="Instagram"
            >
              <Instagram size={24} />
            </a>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="pt-8 border-t border-gray-200">
          <p className="text-gray-500 text-sm" suppressHydrationWarning>{t('footer.copyright')}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;