import { useTranslation } from 'react-i18next';
import { ArrowDownIcon } from '@heroicons/react/24/outline';

const Hero = () => {
    const { t } = useTranslation();

    return (
        <section id="hero" className="relative flex items-center min-h-screen bg-gradient-to-br from-indigo-50 via-white to-cyan-100 dark:from-indigo-900 dark:via-gray-900 dark:to-cyan-900 pt-24 pb-12">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row items-center justify-center gap-12">

                    <div className="md:w-1/2 text-center md:text-left">
                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 dark:text-white leading-tight">
                            <span className="block">{t('name')}</span>
                            <span className="block text-indigo-600 dark:text-indigo-400 mt-2">{t('jobTitle')}</span>
                        </h1>
                        <p className="mt-6 max-w-xl mx-auto md:mx-0 text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300">
                            {t('heroSubtitle')}
                        </p>
                        <div className="mt-8">
                            <a href="#about"
                                className="inline-block bg-indigo-600 text-white font-bold py-3 px-8 rounded-md hover:bg-indigo-700 transition-colors duration-300 shadow-lg text-lg"    >
                                {t('learnMore')}
                            </a>
                        </div>
                    </div>

                    <div className="md:w-1/3">
                        <div className="relative w-64 h-64 sm:w-80 sm:h-80 mx-auto">
                            <div className="absolute inset-0 bg-gradient-to-br from-indigo-400 to-cyan-400 rounded-full shadow-2xl transform rotate-6"></div>
                            <img src="/Self.png"
                                alt={t('name')}
                                className="relative w-full h-full object-cover rounded-full border-4 border-white dark:border-gray-800"
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
                <a href="#about" aria-label="Scroll down">
                    <ArrowDownIcon className="h-8 w-8 text-gray-500 dark:text-gray-400 animate-bounce" />
                </a>
            </div>
        </section>
    );
};

export default Hero;