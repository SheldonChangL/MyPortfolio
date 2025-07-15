import { useState, useEffect } from 'react';
import About from './components/About';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import './App.css'
function App() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar isScrolled={isScrolled} />
      <main>
        <Hero />
        <About />
      </main>
    </div>
  )
}

export default App
