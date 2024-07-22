import React from 'react';

import NavBar from '../Components/NavBar';
import Carousel from '../Components/Carousel';
import Services from '../Components/Services';
import Feature from '../Components/Feature';
import Download from '../Components/Download';
import FAQ from '../Components/FAQ';
import FAQGrid from '../Components/FAQGrid';
import Footer from '../Components/Footer';
import Video from '../Components/Video';
import PopupAlert from '../Components/PopUpAlert';

export default function DefaultPage () {
  return (
    <div className="bg-bg_light dark:bg-bg_dark">

      <NavBar />
      <PopupAlert />
      <Carousel />
      <Services />
      <Video />
      <Feature />
      <Download />
      <FAQ />
      <FAQGrid />
      <Footer />
    </div>
  );
}
