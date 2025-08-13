import { useTranslation } from 'react-i18next';
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline';

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
        // Add other project below
    ];

    // Layout for a single, centered project
    if (projectData.length <= 1) {
        const project = projectData[0];
        return (
            <section id="projects" className="py-20 bg-white dark:bg-gray-900">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white">{t('projects')}</h2>
                    </div>
                    <div className="max-w-5xl mx-auto">
                        <div className="bg-gray-50 dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden md:h-[580px]">
                            <div className="md:flex h-full">
                                <div className="h-64 md:h-full md:w-2/5">
                                    <img src={project.image} alt={t(project.nameKey)} className="w-full h-full object-cover" />
                                </div>
                                <div className="p-6 md:w-3/5 flex flex-col h-full">
                                    <div className="flex-grow overflow-y-auto pr-2">
                                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{t(project.nameKey)}</h3>
                                        <p className="mt-2 text-gray-600 dark:text-gray-400">{t(project.descriptionKey)}</p>
                                        <div className="mt-6">
                                            <h4 className="font-semibold text-gray-800 dark:text-white">{t('technologiesLabel')}</h4>
                                            <div className="flex flex-wrap gap-2 mt-2">
                                                {project.technologies.map((tech, i) => (
                                                    <span key={i} className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-xs font-medium px-3 py-1 rounded-full">{tech}</span>
                                                ))}
                                            </div>
                                        </div>
                                        <div className="mt-6">
                                            <p className="mt-2 text-gray-600 dark:text-gray-400 text-sm">{t(project.architectureKey)}</p>
                                        </div>
                                    </div>
                                    <div className="pt-4 mt-auto text-right flex-shrink-0">
                                        <a href={project.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-indigo-600 dark:text-indigo-400 hover:underline font-semibold">
                                            {t('learnMore')}
                                            <ArrowTopRightOnSquareIcon className="ml-2 h-5 w-5" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }

    // Layout for multiple, scrollable projects
    return (
        <section id="projects" className="py-20 bg-white dark:bg-gray-900">
            <div className="container mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white">{t('projects')}</h2>
                </div>
                {/* Scrollable container */}
                <div className="flex overflow-x-auto space-x-8 pb-4 px-6">
                    {projectData.map((project, index) => (
                        <div key={index} className="flex-shrink-0 w-11/12 md:w-2/5 lg:w-1/3">
                            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden flex flex-col h-full">
                                <img src={project.image} alt={t(project.nameKey)} className="w-full h-48 object-cover" />
                                <div className="p-6 flex flex-col flex-grow">
                                    <div className="flex-grow">
                                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">{t(project.nameKey)}</h3>
                                        <p className="mt-2 text-gray-600 dark:text-gray-400 text-sm">{t(project.descriptionKey)}</p>
                                        <div className="mt-4">
                                            <h4 className="font-semibold text-gray-800 dark:text-white text-base">{t('technologiesLabel')}</h4>
                                            <div className="flex flex-wrap gap-2 mt-2">
                                                {project.technologies.map((tech, i) => (
                                                    <span key={i} className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-xs font-medium px-3 py-1 rounded-full">{tech}</span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mt-6 text-right">
                                        <a href={project.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-indigo-600 dark:text-indigo-400 hover:underline">
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
        </section>
    );
};

export default Projects;