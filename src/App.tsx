import React from 'react';

import Header from './components/Header';
import About from './components/About';
import MindMap from './components/MindMap';

const App: React.FC = () => {
  return (
    <>
      <Header />
      <About />
      <MindMap />
    </>
  );
};

export default App;
