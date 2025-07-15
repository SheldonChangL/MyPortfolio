import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        debug: true,
        fallbackLng: 'zh',
        interpolation: {
            escapeValue: false,
        },
        resources: {
            en: {
                translation: {
                    about: 'About Me',
                    experience: 'Experience',
                    projects: 'Projects',
                    aboutTitle: 'About Me',
                    name: 'Wen-Lung Chang',
                    jobTitle: 'Assistant Manager',
                    bio: 'A software engineer with leadership experience, leading a small team in developing applications and backend management systems. Proficient in designing clear and scalable software architecture and improving development efficiency with systematic methods, such as modularizing communication protocols for functional modules in applications, which has successfully and significantly shortened development cycles. Adept at cross-departmental communication and collaboration, assisting the team in aligning requirements with product, design, and other departments to deliver products efficiently.',
                    company: 'Company',
                    education: 'Education',
                    location: 'Location',
                    educationName: 'National Quemoy University',
                    locationName: 'Taoyuan City, Taiwan',
                    heroSubtitle: 'Crafting scalable solutions with passion and precision.',
                    learnMore: 'Learn More',
                    aboutSubtitle: 'A Little Bit About Me',
                    skillsTitle: 'Key Skills',
                    skill1: 'Software Architecture',
                    skill2: 'Team Leadership',
                    skill3: 'React & TypeScript',
                    skill4: 'Node.js',
                    skill5: 'System Design',
                    skill6: 'Cross-functional Communication',
                }
            },
            zh: {
                translation: {
                    about: '關於我',
                    experience: '經歷',
                    projects: '作品',
                    aboutTitle: '關於我',
                    name: '張文龍',
                    jobTitle: '副理',
                    bio: '具備領導經驗的軟體工程師，帶領小型團隊開發應用程式與後端管理系統。擅長設計清晰且可擴展的軟體架構，並以系統性方法提升開發效率，例如模組化應用中各功能模組的通訊協定，成功大幅縮短開發時程。擅長跨部門溝通與協作，協助團隊與產品、設計等單位順利對齊需求並高效交付產品。',
                    company: '公司',
                    education: '學歷',
                    location: '地點',
                    educationName: '國立金門大學',
                    locationName: '桃園市, 台灣',
                    heroSubtitle: '以熱情與精準打造可擴展的解決方案。',
                    learnMore: '了解更多',
                    aboutSubtitle: '關於我的一點事',
                    skillsTitle: '關鍵技能',
                    skill1: '軟體架構',
                    skill2: '團隊領導',
                    skill3: 'React & TypeScript',
                    skill4: 'Node.js',
                    skill5: '系統設計',
                    skill6: '跨部門溝通',
                }
            }
        }
    });

export default i18n;