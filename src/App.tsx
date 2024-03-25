import React, { useEffect, useRef, useState } from 'react';

import Header from './components/Header';
import About from './components/About';
import MindMap from './components/MindMap';
import FAQ from './components/FAQ';
import Arts from './components/Arts';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';

const App: React.FC = () => {
  const aboutRef = useRef<HTMLDivElement>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (aboutRef.current) {
        const aboutTop = aboutRef.current.getBoundingClientRect().top;
        setIsScrolled(aboutTop <= 0);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <Header isScrolled={isScrolled} />
      <main>
        <About innerRef={aboutRef} />
        <MindMap />
        <FAQ />
        <Arts />
        <ContactUs />
      </main>
      <Footer />
    </>
  );
};

export default App;
