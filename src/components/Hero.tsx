import { useTranslation } from 'react-i18next';
import Typewriter from 'typewriter-effect';
import ScrollArrow from './ScrollArrow';

const Hero = () => {
    const { t, i18n } = useTranslation();

    const typewriterKey = i18n.language;

    return (
        <section id="hero" className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden">

            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute inset-0 bg-grid-pattern opacity-[0.6]"></div>
            </div>
            <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-indigo-600/20 rounded-full blur-[120px] pointer-events-none mix-blend-screen"></div>
            <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-cyan-600/10 rounded-full blur-[120px] pointer-events-none mix-blend-screen"></div>

            <div className="container mx-auto px-6 relative z-10 w-full max-w-7xl pb-32 md:pb-0">
                <div className="flex flex-col items-center text-center">

                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-indigo-500/30 bg-indigo-500/10 backdrop-blur-md mb-8 animate-fade-in-up">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
                        </span>
                        <span className="text-indigo-300 text-xs md:text-sm font-mono tracking-wide uppercase">
                            Senior Software Engineer
                        </span>
                    </div>

                    <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-extrabold tracking-tighter text-white mb-6 leading-[1.1]">
                        <span className="block text-zinc-500 text-2xl sm:text-4xl md:text-5xl font-medium mb-2 tracking-normal">
                            {t('hello')}
                        </span>

                        <span className="inline-block bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-zinc-400">
                            <Typewriter
                                key={typewriterKey}
                                onInit={(typewriter) => {
                                    typewriter
                                        .typeString(t('name'))
                                        .callFunction(() => {
                                            console.log('String typed out!');
                                            const cursor = document.querySelector('.Typewriter__cursor') as HTMLElement;
                                            if (cursor) {
                                                cursor.style.display = 'none';
                                            }
                                        }).start();
                                }}
                                options={{
                                    autoStart: true,
                                    loop: false,
                                    delay: 100,
                                    cursor: '┃',
                                    cursorClassName: 'Typewriter__cursor text-indigo-400 ml-1 font-light',
                                }}
                            />
                        </span>
                    </h1>

                    <p className="text-lg md:text-2xl text-zinc-400 max-w-3xl mx-auto leading-relaxed mb-10 md:mb-12">
                        {t('heroSubtitle')}
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
                        <a
                            href="#projects"
                            className="group relative w-full sm:w-auto px-8 py-3.5 bg-white text-black font-bold text-lg rounded-full hover:bg-zinc-200 transition-all shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)]"
                        >
                            {t('projects')}
                        </a>
                        <a
                            href="#about"
                            className="w-full sm:w-auto px-8 py-3.5 border border-zinc-700 text-white font-medium text-lg rounded-full hover:bg-zinc-800 hover:border-zinc-500 transition-colors bg-black/50 backdrop-blur-sm"
                        >
                            {t('learnMore')}
                        </a>
                    </div>
                </div>
            </div>

            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20">
                <ScrollArrow href="#about" direction='down' />
            </div>
        </section>
    );
};

export default Hero;