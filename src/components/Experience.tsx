import { useTranslation } from 'react-i18next';
import { BriefcaseIcon, MapPinIcon, CalendarIcon } from '@heroicons/react/24/solid';

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
        <section id="experience" className="py-24 bg-zinc-950 border-t border-zinc-900 relative">
            {/* Background decorative elements */}
            <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-indigo-900/10 blur-[100px] pointer-events-none" />

            <div className="container mx-auto px-6">
                <div className="mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        {t('experienceTitle')}
                    </h2>
                    <p className="text-zinc-400">
                        {t('experienceSubtitle')}
                    </p>
                </div>

                <div className="relative space-y-12">
                    {/* The main vertical line */}
                    <div className="absolute left-4 md:left-9 top-4 bottom-4 w-px bg-zinc-800"></div>

                    {experiences.map((exp, index) => (
                        <div key={index} className="relative pl-12 md:pl-24 group">

                            {/* Company Logo Node (Visual Anchor) */}
                            <div className="absolute left-0 md:left-5 top-0 w-9 h-9 bg-zinc-900 border border-zinc-700 rounded-full flex items-center justify-center z-10 group-hover:border-indigo-500 group-hover:scale-110 transition-all duration-300 shadow-[0_0_10px_rgba(0,0,0,0.5)]">
                                <BriefcaseIcon className="w-4 h-4 text-zinc-400 group-hover:text-indigo-400" />
                            </div>

                            {/* Company Header Card */}
                            <div className="mb-8">
                                <h3 className="text-2xl font-bold text-white group-hover:text-indigo-400 transition-colors inline-flex items-center gap-3">
                                    {t(exp.company)}
                                </h3>
                                <div className="flex items-center mt-2 text-sm text-zinc-500">
                                    <MapPinIcon className="w-4 h-4 mr-1.5" />
                                    <a
                                        href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(t(exp.company))}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="hover:text-zinc-300 hover:underline transition-colors"
                                    >
                                        {t(exp.location)}
                                    </a>
                                </div>
                            </div>

                            {/* Positions List */}
                            <div className="space-y-8">
                                {exp.positions.map((pos, posIndex) => (
                                    <div key={posIndex} className="relative bg-zinc-900/30 border border-zinc-800/50 rounded-2xl p-6 md:p-8 hover:bg-zinc-900/50 hover:border-zinc-700 transition-all duration-300">

                                        {/* Position Header */}
                                        <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-2">
                                            <h4 className="text-xl font-semibold text-white">
                                                {t(pos.title)}
                                            </h4>
                                            <div className="flex items-center text-indigo-400/80 text-sm font-mono bg-indigo-500/10 px-3 py-1 rounded-full w-fit">
                                                <CalendarIcon className="w-4 h-4 mr-2" />
                                                {pos.duration}
                                            </div>
                                        </div>

                                        {/* Tech Stack Chips */}
                                        {pos.technologies && (
                                            <div className="flex flex-wrap gap-2 mb-6">
                                                {pos.technologies.map((tech) => (
                                                    <span key={tech} className="px-2.5 py-1 text-xs font-medium text-zinc-400 bg-zinc-800/80 rounded border border-zinc-700">
                                                        {tech}
                                                    </span>
                                                ))}
                                            </div>
                                        )}

                                        {/* Responsibilities */}
                                        {pos.responsibilities && (
                                            <div className="mb-6">
                                                <h5 className="text-sm font-semibold text-zinc-300 mb-3 uppercase tracking-wider">
                                                    {t('responsibilitiesLabel')}
                                                </h5>
                                                <ul className="space-y-2">
                                                    {pos.responsibilities.map((res, resIndex) => (
                                                        <li key={resIndex} className="text-zinc-400 text-sm pl-4 relative border-l-2 border-zinc-800">
                                                            {t(res)}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        )}

                                        {/* Contributions */}
                                        {pos.contributions && (
                                            <div className="mb-6">
                                                <h5 className="text-sm font-semibold text-zinc-300 mb-3 uppercase tracking-wider">
                                                    {t('contributionsLabel')}
                                                </h5>
                                                <ul className="space-y-2">
                                                    {pos.contributions.map((con, conIndex) => (
                                                        <li key={conIndex} className="text-zinc-400 text-sm pl-4 relative border-l-2 border-indigo-500/30">
                                                            {t(con)}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        )}

                                        {/* Projects within Position */}
                                        {pos.projects && (
                                            <div className="mt-8 space-y-4">
                                                <h5 className="text-sm font-semibold text-zinc-300 uppercase tracking-wider">
                                                    Key Projects
                                                </h5>
                                                <div className="grid grid-cols-1 gap-4">
                                                    {pos.projects.map((project, projectIndex) => (
                                                        <div key={projectIndex} className="bg-black/20 p-4 rounded-xl border border-zinc-800/50">
                                                            <div className="flex justify-between items-start mb-2">
                                                                <h6 className="font-bold text-white text-base">
                                                                    {t(project.name)}
                                                                </h6>
                                                                <span className="text-xs text-zinc-500 bg-zinc-900 px-2 py-0.5 rounded">
                                                                    {t(project.role)}
                                                                </span>
                                                            </div>
                                                            <p className="text-sm text-zinc-400 mb-3">
                                                                {t(project.description)}
                                                            </p>
                                                            <div className="flex flex-wrap gap-1.5">
                                                                {project.technologies.map((tech) => (
                                                                    <span key={tech} className="text-[10px] px-2 py-0.5 bg-indigo-500/10 text-indigo-300 rounded border border-indigo-500/20">
                                                                        {tech}
                                                                    </span>
                                                                ))}
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;