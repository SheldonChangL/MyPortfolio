import { useTranslation } from 'react-i18next';
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline';
import ScrollArrow from './ScrollArrow';

interface Project {
    nameKey: string;
    descriptionKey: string;
    architectureKey: string;
    technologies: string[];
    link: string;
    image: string;
}

const Projects = () => {
    const { t } = useTranslation();

    const projectData: Project[] = [
        {
            nameKey: 'bentleyProjectName',
            descriptionKey: 'bentleyProjectDescription',
            architectureKey: 'bentleyProjectArchitecture',
            technologies: ['Angular', 'Node.js', 'CSS/Sass', 'WebSocket', 'Yocto Linux', 'Unix Socket', 'Serial Port', 'Shell Script'],
            link: 'https://www.whichcar.com.au/news/bentley-rear-seats-entertainment-system',
            image: 'https://s1.cdn.autoevolution.com/images/news/gallery/bentley-unveils-new-entertainment-system-so-you-can-netflix-and-chill-in-your-bentayga_2.jpg',
        },
        {
            nameKey: 'vigorplusProjectName',
            descriptionKey: 'vigorplusProjectDescription',
            architectureKey: 'vigorplusProjectArchitecture',
            technologies: ['Android', 'Kotlin', 'VLC', 'RTSP'],
            link: 'https://play.google.com/store/apps/details?id=com.jetopto.vigorplus.products&hl=zh_TW',
            image: 'https://play-lh.googleusercontent.com/AZ89SOsTvmON-9iYCFKKknSRN5jJIw8zbn8JRv1Ahcg1034Z6oq4TmMl26TKTB7d6vs=w240-h480-rw',
        },
        {
            nameKey: 'portfolioProjectName',
            descriptionKey: 'portfolioProjectDescription',
            architectureKey: 'portfolioProjectArchitecture',
            technologies: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'Firebase', 'GitHub Actions'],
            link: 'https://github.com/sheldonchangl/myportfolio',
            image: '/src/assets/logo.png',
        },
    ];

    return (
        <section id="projects" className="relative py-20 bg-white dark:bg-gray-900 overflow-hidden">
            <div className="container mx-auto">
                <div className="text-center mb-16 px-6">
                    <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white">{t('projects')}</h2>
                </div>
                <div className="
                    flex overflow-x-auto snap-x snap-mandatory space-x-6 px-6 pb-8
                    md:grid md:grid-cols-2 md:gap-10 md:space-x-0 md:px-6 md:pb-0
                    lg:grid-cols-3
                ">
                    {projectData.map((project, index) => (
                        <div key={index} className="flex-shrink-0 w-11/12 snap-center md:w-auto">
                            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden flex flex-col h-full transform hover:-translate-y-2 transition-transform duration-300 ease-in-out">
                                <img src={project.image} alt={t(project.nameKey)} className="w-full h-56 object-cover" />
                                <div className="p-6 flex flex-col flex-grow">
                                    <div className="flex-grow">
                                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">{t(project.nameKey)}</h3>
                                        <p className="mt-2 text-gray-600 dark:text-gray-400 text-sm flex-grow">{t(project.descriptionKey)}</p>
                                        <div className="mt-4">
                                            <h4 className="font-semibold text-gray-800 dark:text-white text-base">{t('technologiesLabel')}</h4>
                                            <div className="flex flex-wrap gap-2 mt-2">
                                                {project.technologies.map((tech, i) => (
                                                    <span key={i} className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-xs font-medium px-3 py-1 rounded-full">{tech}</span>
                                                ))}
                                            </div>
                                        </div>
                                        <p className="mt-3 text-gray-500 dark:text-gray-400 text-xs italic">{t(project.architectureKey)}</p>
                                    </div>
                                    <div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-700 text-right">
                                        <a href={project.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-indigo-600 dark:text-indigo-400 hover:underline font-semibold">
                                            {t('learnMore')}
                                            <ArrowTopRightOnSquareIcon className="ml-2 h-4 w-4" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <ScrollArrow href="#hero" direction="up" />
        </section>
    );
};

export default Projects;