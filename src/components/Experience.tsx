import { useTranslation } from 'react-i18next';
import { BriefcaseIcon, MapPinIcon } from '@heroicons/react/24/solid';
import ScrollArrow from './ScrollArrow';

interface Project {
    name: string;
    role: string;
    technologies: string[];
    description: string;
}

interface Position {
    title: string;
    duration: string;
    responsibilities?: string[];
    contributions?: string[];
    technologies?: string[];
    projects?: Project[];
}

interface ExperienceItem {
    company: string;
    location: string;
    positions: Position[];
}

const Experience = () => {
    const { t } = useTranslation();

    const experiences: ExperienceItem[] = [
        {
            company: 'companyName_Jet',
            location: 'location_Jet',
            positions: [
                {
                    title: 'jobTitle_am',
                    duration: '2021-07 ~ ' + t('present'),
                    responsibilities: [
                        'responsibility_am_1',
                        'responsibility_am_2',
                        'responsibility_am_3',
                        'responsibility_am_4',
                    ],
                    contributions: [
                        'contribution_am_1',
                        'contribution_am_2',
                    ],
                    technologies: ['AWS', 'Node.js', 'EC2', 'Nginx', 'Express.js', 'PM2', 'TypeScript'],
                },
                {
                    title: 'jobTitle_sse',
                    duration: '2017-11 ~ 2021-07',
                    responsibilities: [
                        'responsibility_sse_1',
                        'responsibility_sse_2',
                        'responsibility_sse_3',
                        'responsibility_sse_4',
                    ],
                    technologies: ['Android', 'Node.js', 'AngularJS', 'WebSocket'],
                },
            ],
        },
        {
            company: 'companyName_Ami',
            location: 'location_Ami',
            positions: [
                {
                    title: 'jobTitle_se',
                    duration: '2013-11 ~ 2017-11',
                    projects: [
                        {
                            name: 'project_Ami_1',
                            role: 'role_Ami_1',
                            technologies: ['Java', 'SpringMVC', 'MySQL', 'MongoDB', 'EWS API'],
                            description: 'description_Ami_1',
                        },
                        {
                            name: 'project_Ami_2',
                            role: 'role_Ami_2',
                            technologies: ['Java', 'Android Framework'],
                            description: 'description_Ami_2',
                        },
                        {
                            name: 'project_Ami_3',
                            role: 'role_Ami_3',
                            technologies: ['Java', 'Android Studio'],
                            description: 'description_Ami_3',
                        },
                    ],
                },
            ],
        },
    ];

    return (
        <section id="experience" className="relative py-20 bg-gray-50 dark:bg-gray-800">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white">
                        {t('experienceTitle')}
                    </h2>
                    <p className="text-lg text-gray-500 dark:text-gray-400 mt-2">{t('experienceSubtitle')}</p>
                </div>

                <div className="relative">
                    {/* Time line */}
                    <div className="absolute left-1/2 -translate-x-1/2 w-0.5 h-full bg-gray-300 dark:bg-gray-700 hidden md:block"></div>

                    {experiences.map((exp, index) => (
                        <div key={exp.company} className="flex flex-col md:flex-row justify-between mb-8 md:mb-12 relative">
                            {/* Company Info (Left for even, Right for odd) */}
                            <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:order-1' : 'md:order-3'} text-center md:text-left`}>
                                <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg">
                                    <div className="flex items-center justify-center md:justify-start">
                                        <BriefcaseIcon className="h-6 w-6 text-indigo-500 mr-2" />
                                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                                            {t(exp.company)}
                                        </h3>
                                    </div>
                                    <p className="text-gray-600 dark:text-gray-400 mt-2 flex items-center justify-center md:justify-start">
                                        <MapPinIcon className="h-4 w-4 text-gray-400 mr-1" />
                                        <a
                                            href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(t(exp.company))}`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="hover:underline hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors"
                                        >
                                            {t(exp.location)}
                                        </a>
                                    </p>
                                </div>
                            </div>
                            {/* Time Line Dot (Middle) */}
                            <div className="relative w-full md:w-2/12 flex justify-center items-center my-4 md:my-0 md:order-2">
                                <div className="hidden md:block w-4 h-4 rounded-full bg-indigo-500 absolute z-10 top-1/2 -translate-y-1/2"></div>
                                <div className="md:hidden w-2 h-full bg-gray-300 dark:bg-gray-700"></div>
                            </div>
                            {/* Positions and Details (Right for even, Left for odd) */}
                            <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:order-3' : 'md:order-1'} text-center md:text-left`}>
                                <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg">
                                    {exp.positions.map((pos, posIndex) => (
                                        <div key={posIndex} className="mb-6 last:mb-0">
                                            <h4 className="text-lg font-semibold text-indigo-600 dark:text-indigo-400">{t(pos.title)}</h4>
                                            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{pos.duration}</p>
                                            {pos.responsibilities && (
                                                <ul className="mt-4 text-left list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300">
                                                    <h5 className="font-medium text-gray-800 dark:text-white">{t('responsibilitiesLabel')}:</h5>
                                                    {pos.responsibilities.map((res, resIndex) => (
                                                        <li key={resIndex} className="text-sm">
                                                            {t(res)}
                                                        </li>
                                                    ))}
                                                </ul>
                                            )}
                                            {pos.contributions && (
                                                <ul className="mt-4 text-left list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300">
                                                    <h5 className="font-medium text-gray-800 dark:text-white">{t('contributionsLabel')}:</h5>
                                                    {pos.contributions.map((con, conIndex) => (
                                                        <li key={conIndex} className="text-sm">
                                                            {t(con)}
                                                        </li>
                                                    ))}
                                                </ul>
                                            )}
                                            {pos.projects && (
                                                <div className="mt-4 text-left space-y-4">
                                                    {pos.projects.map((project, projectIndex) => (
                                                        <div key={projectIndex}>
                                                            <h5 className="font-medium text-gray-800 dark:text-white">{t(project.name)}</h5>
                                                            <p className="text-sm text-gray-700 dark:text-gray-300">
                                                                <span className="font-semibold">{t('role')}:</span> {t(project.role)}
                                                            </p>
                                                            <p className="text-sm text-gray-700 dark:text-gray-300 mt-1">
                                                                <span className="font-semibold">{t('description')}:</span> {t(project.description)}
                                                            </p>
                                                        </div>
                                                    ))}
                                                </div>
                                            )}
                                            {pos.technologies && (
                                                <div className="mt-4 text-left">
                                                    <h5 className="font-medium text-gray-800 dark:text-white">{t('technologiesLabel')}:</h5>
                                                    <div className="flex flex-wrap gap-2 mt-2">
                                                        {pos.technologies.map((tech, techIndex) => (
                                                            <span key={techIndex} className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-xs font-medium px-3 py-1 rounded-full">
                                                                {tech}
                                                            </span>
                                                        ))}
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <ScrollArrow href="#projects" direction="down"/>
        </section>
    );
};

export default Experience;