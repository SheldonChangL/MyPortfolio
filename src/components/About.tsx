import { useTranslation } from 'react-i18next';
import {
    AcademicCapIcon,
    BuildingOffice2Icon,
    MapPinIcon,
    CodeBracketIcon,
    UserGroupIcon,
    WrenchScrewdriverIcon,
    CommandLineIcon,
    DevicePhoneMobileIcon,
    CloudIcon
} from '@heroicons/react/24/solid';

const About = () => {
    const { t } = useTranslation();

    const skills = [
        { name: t('skill1'), icon: <WrenchScrewdriverIcon className="h-8 w-8 text-white" /> },
        { name: t('skill2'), icon: <UserGroupIcon className="h-8 w-8 text-white" /> },
        { name: t('skill3'), icon: <DevicePhoneMobileIcon className="h-8 w-8 text-white" /> },
        { name: t('skill4'), icon: <CommandLineIcon className="h-8 w-8 text-white" /> },
        { name: t('skill5'), icon: <CodeBracketIcon className="h-8 w-8 text-white" /> },
        { name: t('skill6'), icon: <CloudIcon className="h-8 w-8 text-white" /> },
    ];

    return (
        <section id="about" className="py-20 bg-white dark:bg-gray-900">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white">
                        {t('aboutTitle')}
                    </h2>
                    <p className="text-lg text-gray-500 dark:text-gray-400 mt-2">{t('aboutSubtitle')}</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

                    {/* Left Column: Bio & Info */}
                    <div className="space-y-8">
                        <h3 className="text-3xl font-bold text-gray-800 dark:text-gray-100">{t('name')}</h3>
                        <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-inner">
                            <ul className="space-y-4 text-gray-700 dark:text-gray-300">
                                <li className="flex items-center">
                                    <BuildingOffice2Icon className="h-6 w-6 text-indigo-500 mr-3 flex-shrink-0" />
                                    <span>{t('jobTitle')}</span>
                                </li>
                                <li className="flex items-center">
                                    <AcademicCapIcon className="h-6 w-6 text-indigo-500 mr-3 flex-shrink-0" />
                                    <span>{t('educationName')}</span>
                                </li>
                                <li className="flex items-center">
                                    <MapPinIcon className="h-6 w-6 text-indigo-500 mr-3 flex-shrink-0" />
                                    <span>{t('locationName')}</span>
                                </li>
                            </ul>
                        </div>
                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-justify">
                            {t('bio')}
                        </p>
                    </div>

                    {/* Right Column: Skills */}
                    <div className="mt-8 lg:mt-0">
                        <h3 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-8">{t('skillsTitle')}</h3>
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                            {skills.map((skill) => (
                                <div key={skill.name} className="bg-gradient-to-br from-indigo-500 to-cyan-500 p-4 rounded-lg shadow-lg text-center flex flex-col items-center justify-center aspect-square transition-transform hover:-translate-y-1 hover:shadow-xl">
                                    {skill.icon}
                                    <span className="mt-2 text-white font-semibold text-sm">{skill.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default About;