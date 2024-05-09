import React from 'react';

import NavBar from './Components/NavBar';
import Home from './Components/Home';
import Servizi from './Components/Servizi';
import Feature from './Components/Feature';
import Download from './Components/Download';
import FAQ from './Components/FAQ';
import FAQGrid from './Components/FAQGrid';
import Footer from './Components/Footer';
import CarouselTest from './Components/CarouselTest';
function App () {
  return (
    <div className="bg-white dark:bg-gray-900">
      <CarouselTest />
      <NavBar />
      <Home />
      <Servizi />
      <Feature />
      <Download />
      <FAQ />
      <FAQGrid />
      <Footer />
    </div>
  );
}

export default App;
