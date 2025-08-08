import { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { ArrowDownIcon } from '@heroicons/react/24/outline';

const Hero = () => {
    const { t } = useTranslation();
    const imageRef = useRef<HTMLImageElement>(null);
    const [rotation, setRotation] = useState({ x: 0, y: 0 });
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
        const handleMouseMove = (event: MouseEvent) => {
            if (!imageRef.current) return;
            const { clientX, clientY } = event;
            const rect = imageRef.current.getBoundingClientRect();

            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 2;

            const deltaX = clientX - centerX;
            const deltaY = clientY - centerY;

            const rotationY = (deltaX / rect.width) * 15;
            const rotationX = -(deltaY / rect.height) * 15;

            setRotation({ x: rotationX, y: rotationY });
        };

        const handleMouseLeaveWindow = (event: MouseEvent) => {
            if (event.relatedTarget === null || event.relatedTarget === undefined) {
                setRotation({ x: 0, y: 0 });
            }
        };

        // Only add listener if not on a "mobile" screen size (e.g., width >= 768px for desktop)
        if (windowWidth >= 768) {
            window.addEventListener('mousemove', handleMouseMove);
            document.documentElement.addEventListener('mouseleave', handleMouseLeaveWindow);
        } else {
            // Reset rotation if it's mobile and listener is removed
            setRotation({ x: 0, y: 0 });
        }

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, [windowWidth]);

    return (
        <section id="hero" className="relative flex items-center min-h-screen bg-gradient-to-br from-indigo-50 via-white to-cyan-100 dark:from-indigo-900 dark:via-gray-900 dark:to-cyan-900 pt-24 pb-12">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row items-center justify-center gap-12">

                    <div className="md:w-1/2 text-center md:text-left">
                        <h1 className="text-left text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 dark:text-white leading-tight">
                            <span className="block text-2xl sm:text-3xl md:text-4xl lg:text-5xl ">{t('hello')}</span>
                            <span className="block text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-indigo-600 dark:text-indigo-400 mt-2">{t('name')}</span>
                        </h1>
                        <p className="mt-6 max-w-xl mx-auto md:mx-0 text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300">
                            {t('heroSubtitle')}
                        </p>
                        <div className="mt-8">
                            <a href="#about"
                                className="inline-block bg-indigo-100 text-indigo-800 font-bold py-3 px-8 rounded-md hover:bg-indigo-200 transition-colors duration-300 shadow-lg text-lg dark:bg-transparent dark:border dark:border-indigo-400 dark:text-indigo-400 dark:hover:bg-indigo-900"    >
                                {t('learnMore')}。
                            </a>
                        </div>
                    </div>

                    <div className="md:w-1/3">
                        <div className="relative w-64 h-64 sm:w-80 sm:h-80 mx-auto">
                            <div className="absolute inset-0 bg-gradient-to-br from-indigo-400 to-cyan-400 rounded-full shadow-2xl hero-gradient-spin"></div>
                            <img ref={imageRef} src="/Self.png"
                                alt={t('name')}
                                className="relative w-full h-full object-cover rounded-full border-4 border-white dark:border-gray-800 transition-transform duration-75 ease-out"
                                style={{
                                    transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
                                }}
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