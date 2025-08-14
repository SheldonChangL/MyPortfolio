import { useTranslation } from 'react-i18next';
import {
    AcademicCapIcon,
    BuildingOffice2Icon,
    // MapPinIcon,
    EnvelopeIcon,
    DevicePhoneMobileIcon,
} from '@heroicons/react/24/solid';
import ScrollArrow from './ScrollArrow';

const About = () => {
    const { t } = useTranslation();

    const contact = {
        email: 'ebscream4me@gmail.com',
        mobile: '0905-560-308',
    };

    const skills = [
        t('skill1'), t('skill2'), t('skill3'),
        t('skill4'), t('skill5'), t('skill6'),
    ];

    return (
        <section id="about" className="relative py-20 bg-white dark:bg-gray-900 min-h-screen flex items-center">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white">
                        {t('aboutTitle')}
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-16 items-center">

                    {/* Left Column: Profile Picture */}
                    <div className="md:col-span-1 flex justify-center">
                        <img
                            src="/Self.png"
                            alt={t('name')}
                            className="w-full max-w-xs object-cover rounded-lg shadow-xl border-4 border-white dark:border-gray-800"
                        />
                    </div>

                    {/* Right Column: Description, Contact, Skills */}
                    <div className="md:col-span-2 flex flex-col h-full">
                        {/* Bio Description */}
                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-justify mb-8">
                            {t('bio')}
                        </p>

                        {/* Spacer to push content to the bottom */}
                        <div className="flex-grow"></div>

                        {/* Contact & Skills Section */}
                        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 border-t pt-8 border-gray-200 dark:border-gray-700">
                            {/* Contact Info */}
                            <div>
                                <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">{t('infomation')}</h4>
                                <ul className="space-y-3 text-gray-600 dark:text-gray-400">
                                    <li className="flex items-center text-sm">
                                        <BuildingOffice2Icon className="h-5 w-5 mr-3 text-indigo-500" />
                                        <span>{t('companyName')}</span>
                                    </li>
                                    <li className="flex items-center text-sm">
                                        <AcademicCapIcon className="h-5 w-5 mr-3 text-indigo-500" />
                                        <span>{t('educationName')}</span>
                                    </li>
                                    <li className="flex items-center text-sm">
                                        <EnvelopeIcon className="h-5 w-5 mr-3 text-indigo-500" />
                                        <a href={`mailto:${contact.email}`} className="hover:underline">{contact.email}</a>
                                    </li>
                                    <li className="flex items-center text-sm">
                                        <DevicePhoneMobileIcon className="h-5 w-5 mr-3 text-indigo-500" />
                                        <a href={`tel:${contact.mobile}`} className="hover:underline">{contact.mobile}</a>
                                    </li>
                                </ul>
                            </div>

                            {/* Skills */}
                            <div>
                                <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">{t('skillsTitle')}</h4>
                                <div className="flex flex-wrap gap-2">
                                    {skills.map(skill => (
                                        <span key={skill} className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-xs font-medium px-3 py-1 rounded-full">
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <ScrollArrow href="#experience" direction="down"/>
        </section>
    );
};

export default About;