import { useTranslation } from 'react-i18next';
import { BriefcaseIcon, MapPinIcon } from '@heroicons/react/24/solid';

// Interfaces remain the same
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
        <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-800">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white">
                        {t('experienceTitle')}
                    </h2>
                    <p className="text-lg text-gray-500 dark:text-gray-400 mt-2">{t('experienceSubtitle')}</p>
                </div>

                <div className="relative border-l-2 border-indigo-200 dark:border-indigo-800 ml-6 md:ml-0">
                    {experiences.map((exp, index) => (
                        <div key={index} className="mb-12 relative">
                            <div className="absolute -left-[13px] top-1 w-6 h-6 bg-indigo-500 rounded-full border-4 border-white dark:border-gray-800"></div>

                            <div className="ml-10">
                                {/* Company Header */}
                                <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg mb-4">
                                    <div className="flex items-center">
                                        <BriefcaseIcon className="h-6 w-6 text-indigo-500 mr-3 flex-shrink-0" />
                                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                                            {t(exp.company)}
                                        </h3>
                                    </div>
                                    <p className="text-gray-600 dark:text-gray-400 mt-2 flex items-center">
                                        <MapPinIcon className="h-4 w-4 text-gray-400 mr-2 flex-shrink-0" />
                                        {/* FIX: Re-added the Google Maps link */}
                                        <a
                                            href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(t(exp.company))}`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-sm hover:underline hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors"
                                        >
                                            {t(exp.location)}
                                        </a>
                                    </p>
                                </div>

                                {/* Positions Details */}
                                <div className="space-y-8">
                                    {exp.positions.map((pos, posIndex) => (
                                        <div key={posIndex} className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md">
                                            <h4 className="text-lg font-semibold text-indigo-600 dark:text-indigo-400">{t(pos.title)}</h4>
                                            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{pos.duration}</p>

                                            {pos.responsibilities && (
                                                <div className="mt-4">
                                                    <h5 className="font-medium text-gray-800 dark:text-white mb-2">{t('responsibilitiesLabel')}:</h5>
                                                    <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300 text-sm">
                                                        {pos.responsibilities.map((res, resIndex) => <li key={resIndex}>{t(res)}</li>)}
                                                    </ul>
                                                </div>
                                            )}

                                            {pos.contributions && (
                                                <div className="mt-4">
                                                    <h5 className="font-medium text-gray-800 dark:text-white mb-2">{t('contributionsLabel')}:</h5>
                                                    <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300 text-sm">
                                                        {pos.contributions.map((con, conIndex) => <li key={conIndex}>{t(con)}</li>)}
                                                    </ul>
                                                </div>
                                            )}

                                            {pos.projects && (
                                                <div className="mt-4 space-y-4">
                                                    {pos.projects.map((project, projectIndex) => (
                                                        <div key={projectIndex} className="border-t pt-3 dark:border-gray-700">
                                                            <h5 className="font-medium text-gray-800 dark:text-white">{t(project.name)}</h5>
                                                            <p className="text-sm text-gray-700 dark:text-gray-300"><span className="font-semibold">{t('role')}:</span> {t(project.role)}</p>
                                                            <p className="text-sm text-gray-700 dark:text-gray-300 mt-1"><span className="font-semibold">{t('description')}:</span> {t(project.description)}</p>
                                                        </div>
                                                    ))}
                                                </div>
                                            )}

                                            {pos.technologies && (
                                                <div className="mt-4">
                                                    <h5 className="font-medium text-gray-800 dark:text-white mb-2">{t('technologiesLabel')}:</h5>
                                                    <div className="flex flex-wrap gap-2">
                                                        {pos.technologies.map((tech) => (
                                                            <span key={tech} className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-xs font-medium px-3 py-1 rounded-full">{tech}</span>
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
        </section>
    );
};

export default Experience;