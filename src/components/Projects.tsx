import { useTranslation } from 'react-i18next';
import { ArrowUpRightIcon } from '@heroicons/react/24/outline'; // 確保安裝了 @heroicons/react
import ScrollArrow from './ScrollArrow';
import portfolioLogo from '../assets/logo.png';

interface Project {
    nameKey: string;
    descriptionKey: string;
    architectureKey: string;
    technologies: string[];
    link: string;
    image: string;
    // 新增 colSpan 控制 Bento Grid 佈局
    colSpan: string;
}

const Projects = () => {
    const { t } = useTranslation();

    const projectData: Project[] = [
        {
            nameKey: 'bentleyProjectName',
            descriptionKey: 'bentleyProjectDescription',
            architectureKey: 'bentleyProjectArchitecture',
            technologies: ['Angular', 'Node.js', 'Yocto Linux', 'WebSocket'],
            link: 'https://www.whichcar.com.au/news/bentley-rear-seats-entertainment-system',
            image: 'https://s1.cdn.autoevolution.com/images/news/gallery/bentley-unveils-new-entertainment-system-so-you-can-netflix-and-chill-in-your-bentayga_2.jpg',
            colSpan: 'md:col-span-2', // 大卡片
        },
        {
            nameKey: 'vigorplusProjectName',
            descriptionKey: 'vigorplusProjectDescription',
            architectureKey: 'vigorplusProjectArchitecture',
            technologies: ['Android', 'Kotlin', 'RTSP', 'VLC'],
            link: 'https://play.google.com/store/apps/details?id=com.jetopto.vigorplus.products&hl=zh_TW',
            image: 'https://play-lh.googleusercontent.com/AZ89SOsTvmON-9iYCFKKknSRN5jJIw8zbn8JRv1Ahcg1034Z6oq4TmMl26TKTB7d6vs=w240-h480-rw', // 建議檢查這個連結是否有效，若無效請換圖
            colSpan: 'md:col-span-1', // 小卡片
        },
        {
            nameKey: 'portfolioProjectName',
            descriptionKey: 'portfolioProjectDescription',
            architectureKey: 'portfolioProjectArchitecture',
            technologies: ['React', 'Vite', 'Tailwind', 'CI/CD'],
            link: 'https://github.com/sheldonchangl/myportfolio',
            image: portfolioLogo,
            colSpan: 'md:col-span-3', // 全寬卡片
        },
    ];

    return (
        <section id="projects" className="py-24 bg-zinc-950/50">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            {t('projects')}
                        </h2>
                        <p className="text-zinc-400 max-w-xl">
                            Selected works showcasing full-stack capabilities and system architecture design.
                        </p>
                    </div>
                </div>

                {/* Bento Grid Layout */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {projectData.map((project, index) => (
                        <a
                            key={index}
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`
                                group relative overflow-hidden rounded-2xl bg-zinc-900 border border-zinc-800 
                                hover:border-indigo-500/50 transition-all duration-300 ${project.colSpan}
                            `}
                        >
                            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent z-10" />

                            {/* Image Background with Zoom Effect */}
                            <img
                                src={project.image}
                                alt={t(project.nameKey)}
                                className="w-full h-full object-cover absolute inset-0 group-hover:scale-105 transition-transform duration-700 ease-out opacity-60 group-hover:opacity-40"
                            />

                            <div className="relative z-20 p-8 h-full flex flex-col justify-end">
                                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                    <div className="flex justify-between items-start mb-2">
                                        <h3 className="text-2xl font-bold text-white">
                                            {t(project.nameKey)}
                                        </h3>
                                        <div className="p-2 bg-white/10 rounded-full backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity">
                                            <ArrowUpRightIcon className="w-5 h-5 text-white" />
                                        </div>
                                    </div>

                                    <p className="text-zinc-300 mb-4 line-clamp-2 group-hover:line-clamp-none transition-all">
                                        {t(project.descriptionKey)}
                                    </p>

                                    <div className="flex flex-wrap gap-2 mt-4">
                                        {project.technologies.map((tech, i) => (
                                            <span
                                                key={i}
                                                className="px-3 py-1 text-xs font-mono text-indigo-300 bg-indigo-500/10 rounded-full border border-indigo-500/20"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </a>
                    ))}
                </div>
            </div>

            <div className="relative h-20 mt-10">
                <ScrollArrow href="#hero" direction="up" />
            </div>
        </section>
    );
};

export default Projects;