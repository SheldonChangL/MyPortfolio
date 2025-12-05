import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { GlobeAltIcon } from '@heroicons/react/24/outline';
// 移除 logo 圖片，改用文字或 SVG 讓視覺更乾淨，或者保留 logo 但縮小

interface NavbarProps {
    isScrolled: boolean;
    activeSection: string;
}

const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
    const { t, i18n } = useTranslation();
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = [
        { href: '#about', labelKey: 'about' },
        { href: '#experience', labelKey: 'experience' },
        { href: '#projects', labelKey: 'projects' },
    ];

    const toggleLanguage = () => {
        i18n.changeLanguage(i18n.language === 'zh' ? 'en' : 'zh');
    };

    return (
        <div className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4">
            <nav className={`
                flex items-center gap-1 px-2 py-2 rounded-full transition-all duration-300
                ${scrolled ? 'bg-zinc-900/80 border border-white/10 shadow-xl backdrop-blur-md' : 'bg-transparent'}
            `}>
                {/* Home Link / Logo Area */}
                <a href="#hero" className="px-4 py-2 font-bold text-white hover:text-indigo-400 transition-colors">
                    SC.
                </a>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center">
                    {navItems.map((item) => {
                        const isActive = activeSection === item.href.substring(1);
                        return (
                            <a
                                key={item.href}
                                href={item.href}
                                className={`
                                    px-4 py-2 rounded-full text-sm font-medium transition-all duration-300
                                    ${isActive
                                        ? 'bg-white/10 text-white'
                                        : 'text-zinc-400 hover:text-white hover:bg-white/5'}
                                `}
                            >
                                {t(item.labelKey)}
                            </a>
                        );
                    })}
                </div>

                <div className="w-px h-4 bg-white/10 mx-2 hidden md:block"></div>

                <button
                    onClick={toggleLanguage}
                    className="p-2 rounded-full text-zinc-400 hover:text-white hover:bg-white/10 transition-all"
                    aria-label="Toggle Language"
                >
                    <GlobeAltIcon className="w-5 h-5" />
                </button>
            </nav>
        </div>
    );
};

export default Navbar;