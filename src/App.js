import React from 'react';

import NavBar from './Components/NavBar';
import Home from './Components/Home';
import Servizi from './Components/Servizi';
import Feature from './Components/Feature';
import Download from './Components/Download';
import FAQ from './Components/FAQ';
import FAQGrid from './Components/FAQGrid';
import Footer from './Components/Footer';
import Video from './Components/Video';
function App () {
  return (
    <div className="bg-bg_light dark:bg-bg_dark">
      <NavBar />
      <Home />
      <Video />;

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
