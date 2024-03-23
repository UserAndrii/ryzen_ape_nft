import React from 'react';

import Header from './components/Header';
import About from './components/About';
import MindMap from './components/MindMap';
import FAQ from './components/FAQ';
import Arts from './components/Arts';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <>
      <Header />
      <main>
        <About />
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
