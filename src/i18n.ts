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
                    companyName: 'JET Optoelectronics Co., Ltd.',
                    name: 'Sheldon Chang',
                    jobTitle: 'Assistant Manager',
                    personalInfo: 'Personal Information',
                    bio: 'I am a Senior Software Asistant Manager with years of practical experience, having led multiple development projects. I am proficient in Android App development, Node.js backend service construction, and frontend technologies including AngularJS and React. I play a key role in the software development lifecycle, providing in-depth insights and efficient solutions from initial requirements analysis to software architecture design.Furthermore, I excel at team capability building and coordination, effectively enhancing overall team development efficiency and technical proficiency through knowledge sharing and mentorship. Combining my technical expertise with management capabilities, I can bring exceptional execution to projects, ensuring the delivery of high- quality software.',
                    bioPoint1: 'Leadership experience, leading teams to develop applications and backend systems.',
                    bioPoint2: 'Proficient in designing clear, scalable software architecture to enhance development efficiency.',
                    bioPoint3: 'Adept at cross-departmental communication to efficiently deliver products that meet requirements.',
                    company: 'Company',
                    education: 'Education',
                    location: 'Location',
                    educationName: 'National Quemoy University',
                    locationName: 'Taoyuan City, Taiwan',
                    heroSubtitle: 'I am a senior software engineer with a strong background in team leadership and project management. My expertise lies in full-stack development, including Android apps, Node.js backends, and front-end technologies like React and AngularJS. I excel at improving team efficiency and delivering high-quality, scalable software solutions.',
                    learnMore: 'Learn More',
                    aboutSubtitle: 'My Professional Journey',
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
                    companyName: '凱銳光電股份有限公司',
                    name: '張文龍',
                    jobTitle: '副理',
                    personalInfo: '個人資訊',
                    bio: '我是一名資深軟體副理，具備多年的實戰經驗，曾領導多個開發專案，並精通 Android App 開發、Node.js 後端服務建置，以及 AngularJS 與 React 前端技術。 我在軟體開發生命週期中扮演關鍵角色，從最初的需求分析到軟體架構設計，都能提供深入見解與高效解決方案。此外，我亦擅長團隊能力培養與協調，透過知識分享與指導，有效提升團隊整體開發效率與技術水準。綜合我的技術專長與管理能力，我能為專案帶來卓越的執行力，確保高品質的軟體交付。',
                    bioPoint1: '具備領導經驗，帶領團隊開發應用程式與後端管理系統。',
                    bioPoint2: '擅長設計清晰且可擴展的軟體架構，有效提升開發效率。',
                    bioPoint3: '擅長跨部門溝通與協作，能高效交付符合需求的產品。',
                    company: '公司',
                    education: '學歷',
                    location: '地點',
                    educationName: '國立金門大學',
                    locationName: '桃園市, 台灣',
                    heroSubtitle: '我是一名資深軟體工程師，具備扎實的團隊領導與專案管理背景。我的專長是全端開發，涵蓋 Android 應用程式、Node.js 後端，以及 React 和 AngularJS 等前端技術。我擅長提升團隊效率，並交付高品質、可擴展的軟體解決方案。',
                    learnMore: '了解更多',
                    aboutSubtitle: '我的專業旅程',
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