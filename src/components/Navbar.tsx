import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { GlobeAltIcon } from '@heroicons/react/24/outline';
import myLogo from '../assets/logo.png';

interface NavbarProps {
    isScrolled: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ isScrolled }) => {

    const { t, i18n } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);

    const handleLanguageToggle = () => {
        const newLang = i18n.language === 'zh' ? 'en' : 'zh';
        i18n.changeLanguage(newLang);
    };

    const navClass = isScrolled
        ? 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg shadow-md'
        : 'bg-transparent';

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navClass}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex-shrink-0">
                        <a href="#" className="text-black dark:text-white font-bold text-xl" aria-label="Home">
                            <img
                                src={myLogo}
                                alt="MyLogo"
                                className="h-10 w-auto"
                            />
                        </a>
                    </div>
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-center space-x-4">
                            <a href="#about" className="text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">{t('about')}</a>
                            <a href="#" className="text-gray-500 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 hover:text-black dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium">{t('experience')}</a>
                            <a href="#" className="text-gray-500 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 hover:text-black dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium">{t('projects')}</a>
                            <button
                                onClick={handleLanguageToggle}
                                className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                            >
                                <GlobeAltIcon className="h-5 w-5 text-gray-500 dark:text-gray-300" aria-hidden="true" />
                            </button>
                        </div>
                    </div>
                    <div className="-mr-2 flex md:hidden">
                        <button
                            onClick={handleLanguageToggle}
                            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 focus:outline-none" >
                            <GlobeAltIcon className="h-5 w-5 text-gray-500 dark:text-gray-300" aria-hidden="true" />
                        </button>
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            type="button"
                            className="ml-2 bg-gray-200 dark:bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white hover:bg-gray-300 dark:hover:bg-gray-700 focus:outline-none"
                            aria-controls="mobile-menu"
                            aria-expanded={isOpen} >
                            <span className="sr-only">Open main menu</span>
                            {/* ... (SVG icons for menu) ... */}
                        </button>
                    </div>
                </div>
            </div>
            {isOpen && (
                <div className="md:hidden" id="mobile-menu">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        <a href="#about" className="bg-gray-200 dark:bg-gray-900 text-black dark:text-white block px-3 py-2 rounded-md text-base font-medium">{t('about')}</a>
                        <a href="#" className="text-gray-500 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-700 hover:text-black dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium">{t('experience')}</a>
                        <a href="#" className="text-gray-500 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-700 hover:text-black dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium">{t('projects')}</a>
                    </div>
                </div>
            )}
        </nav>
    );
};


export default Navbar;