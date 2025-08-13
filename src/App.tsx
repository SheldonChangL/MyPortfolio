import { useState, useEffect } from 'react';
import About from './components/About';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Experience from './components/Experience';
import Projects from './components/Projects';
import './App.css'
function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const sections = ['hero', 'about', 'experience', 'projects'];

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const scrollY = window.scrollY;
      const offset = 100;

      let newActiveSection = 'hero';
      for (const id of sections) {
        const section = document.getElementById(id);
        if (section && section.offsetTop <= scrollY + offset) {
          newActiveSection = id;
        }
      }

      setActiveSection(newActiveSection);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar isScrolled={isScrolled} activeSection={activeSection} />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
      </main>
    </div>
  )
}

export default App