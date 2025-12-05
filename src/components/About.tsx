import { useTranslation } from 'react-i18next';
import {
    AcademicCapIcon,
    BuildingOffice2Icon,
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
        <section id="about" className="relative py-24 bg-zinc-950 border-t border-zinc-900">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

                    {/* Title Column & Image */}
                    <div className="lg:col-span-4 text-center lg:text-left">
                        <h2 className="text-4xl font-bold text-white mb-8 sticky top-32">
                            {t('aboutTitle')}
                        </h2>
                        <img
                            src="/Self.png"
                            alt={t('name')}
                            className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-3xl grayscale hover:grayscale-0 transition-all duration-500 border-2 border-zinc-800 hover:border-indigo-500/50 shadow-2xl mx-auto lg:mx-0"
                        />
                    </div>

                    <div className="lg:col-span-8">
                        <div className="prose prose-invert max-w-none mb-12">
                            <p className="text-lg text-zinc-400 leading-relaxed">
                                {t('bio')}
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800 hover:border-zinc-700 transition-colors">
                                <h4 className="text-white font-semibold mb-6 flex items-center gap-2">
                                    <span className="w-2 h-2 rounded-full bg-indigo-500"></span>
                                    {t('infomation')}
                                </h4>
                                <ul className="space-y-4">
                                    <li className="flex items-start text-zinc-400 group">
                                        <BuildingOffice2Icon className="h-5 w-5 mr-3 text-zinc-500 group-hover:text-indigo-400 transition-colors" />
                                        <span>{t('companyName')}</span>
                                    </li>
                                    <li className="flex items-start text-zinc-400 group">
                                        <AcademicCapIcon className="h-5 w-5 mr-3 text-zinc-500 group-hover:text-indigo-400 transition-colors" />
                                        <span>{t('educationName')}</span>
                                    </li>
                                    <li className="flex items-center text-zinc-400 group">
                                        <EnvelopeIcon className="h-5 w-5 mr-3 text-zinc-500 group-hover:text-indigo-400 transition-colors" />
                                        <a href={`mailto:${contact.email}`} className="hover:text-white transition-colors">{contact.email}</a>
                                    </li>
                                    <li className="flex items-center text-zinc-400 group">
                                        <DevicePhoneMobileIcon className="h-5 w-5 mr-3 text-zinc-500 group-hover:text-indigo-400 transition-colors" />
                                        <a href={`tel:${contact.mobile}`} className="hover:text-white transition-colors">{contact.mobile}</a>
                                    </li>
                                </ul>
                            </div>

                            <div className="p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800 hover:border-zinc-700 transition-colors">
                                <h4 className="text-white font-semibold mb-6 flex items-center gap-2">
                                    <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                                    {t('skillsTitle')}
                                </h4>
                                <div className="flex flex-wrap gap-2">
                                    {skills.map(skill => (
                                        <span key={skill} className="px-3 py-1 text-sm text-zinc-300 bg-zinc-800 rounded-md border border-zinc-700 hover:border-zinc-500 transition-colors">
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="relative h-20 mt-10">
                <ScrollArrow href="#experience" direction="down" />
            </div>
        </section>
    );
};

export default About;