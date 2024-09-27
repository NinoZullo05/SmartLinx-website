import React from "react";

import NavBar from "../components/NavBar";
import Services from "../components/Services";
import Carousel from "../Components/Carousel";
import Feature from "../components/Feature";
import Download from "../components/Download";
import FAQ from "../components/FAQ";
import FAQGrid from "../components/FAQGrid";
import Footer from "../components/Footer";
import Video from "../components/Video";

const DefaultPage =() => {
  return (
    <div className="bg-bg_light dark:bg-bg_dark">
      <NavBar />
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
export default DefaultPage;
