
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Menu, X, Globe } from "lucide-react";
import { useState } from "react";
import { useTranslation } from 'next-i18next';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();

  const changeLanguage = (locale: string) => {
    router.push(router.asPath, router.asPath, { locale });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <Image src="/logoblack.png" alt="Sunbeam Solar Logo" width={28} height={28} />
              <span className="ml-2 text-lg font-light text-gray-900" suppressHydrationWarning>{t('navbar.brand')}</span>
            </Link>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-700 hover:text-blue-600 transition-colors" suppressHydrationWarning>{t('navbar.home')}</a>
            <a href="#products" className="text-gray-700 hover:text-blue-600 transition-colors" suppressHydrationWarning>{t('navbar.kits')}</a>
            <a href="#faq" className="text-gray-700 hover:text-blue-600 transition-colors" suppressHydrationWarning>{t('navbar.faq')}</a>
            <a href="https://www.google.be/maps/place/SolarStock/@50.780509,4.2721875,46m/data=!3m1!1e3!4m6!3m5!1s0x47c3c723c65cb223:0x53cd5c047a55f3a6!8m2!3d50.7806139!4d4.2723163!16s%2Fg%2F11kjjtdc83?entry=ttu&g_ep=EgoyMDI1MDIxOS4xIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer" className="inline-block"><Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-white" suppressHydrationWarning>
              {t('navbar.showroom')}
             </Button></a>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="text-sm text-gray-500">
                  <Globe className="w-4 h-4 mr-2" />
                  {router.locale?.toUpperCase()}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem onClick={() => changeLanguage('en')}>English (EN)</DropdownMenuItem>
                <DropdownMenuItem onClick={() => changeLanguage('fr')}>Français (FR)</DropdownMenuItem>
                <DropdownMenuItem onClick={() => changeLanguage('nl')}>Nederlands (NL)</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#home" className="block px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors" suppressHydrationWarning>{t('navbar.home')}</a>
              <a href="#products" className="block px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors" suppressHydrationWarning>{t('navbar.kits')}</a>
              <a href="#faq" className="block px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors" suppressHydrationWarning>{t('navbar.faq')}</a>
              <div className="px-3 py-2">
                <a href="https://www.google.be/maps/place/SolarStock/@50.780509,4.2721875,46m/data=!3m1!1e3!4m6!3m5!1s0x47c3c723c65cb223:0x53cd5c047a55f3a6!8m2!3d50.7806139!4d4.2723163!16s%2Fg%2F11kjjtdc83?entry=ttu&g_ep=EgoyMDI1MDIxOS4xIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer" className="block"><Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-white w-full" suppressHydrationWarning>
                  {t('navbar.showroom')}
                 </Button></a>
              </div>
              <div className="px-3 py-2">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="sm" className="text-sm text-gray-500 w-full justify-center">
                      <Globe className="w-4 h-4 mr-2" />
                      {router.locale?.toUpperCase()}
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuItem onClick={() => changeLanguage('en')}>English (EN)</DropdownMenuItem>
                    <DropdownMenuItem onClick={() => changeLanguage('fr')}>Français (FR)</DropdownMenuItem>
                    <DropdownMenuItem onClick={() => changeLanguage('nl')}>Nederlands (NL)</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
