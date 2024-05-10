import React, { useState, useEffect } from "react";
import onBoarding1 from "../images/onBoarding1.png";
import onBoarding2 from "../images/onBoarding2.png";
import onBoarding3 from "../images/onBoarding3.png";

const immagini = [onBoarding1, onBoarding2, onBoarding3];
const testi = [
  "Controlla i tuoi dispositivi",
  "Sincronizza con il tuo account",
  "Automazione",
];

const Hero = () => {
  const [indiceImmagineCorrente, impostaIndiceImmagineCorrente] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      impostaIndiceImmagineCorrente(
        (prevIndex) => (prevIndex + 1) % immagini.length
      );
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="pb-36 pt-20 flex justify-center items-center" id="home">
      <div className="w-auto mx-auto text-center flex flex-col md:flex-row mt-20">
        <div className="md:w-1/2 md:pr-4 md:pl-8 ml-5 mr-3">
          <img
            src={immagini[indiceImmagineCorrente]}
            alt={`Immagine ${indiceImmagineCorrente + 1}`}
            className="max-w-[450px] w-full h-auto mx-auto fade-in"
          />
        </div>
        <div className="md:w-1/2 md:pl-8 mt-3 mr-3 ml-3">
          <h1 className="text-gray-900 dark:text-gray-100 md:text-5xl sm:text-5xl text-2xl font-bold md:py-4 mb-5 mt-5 ml-5 mr-5">
            {testi[indiceImmagineCorrente]}
          </h1>
          <p className="md:text-lg text-base font-bold text-gray-700 dark:text-gray-300 ml-5 mr-5 mt-3">
            {indiceImmagineCorrente === 0
              ? "Porta il controllo dei tuoi dispositivi direttamente nelle tue mani. Grazie alla nostra app"
              : indiceImmagineCorrente === 1
                ? "Connetti i tuoi dispositivi al tuo profilo per avere accesso istantaneo a tutte le tue preferenze e impostazioni."
                : indiceImmagineCorrente === 2
                  ? "La nostra app ti consente di automatizzare le azioni quotidiane dei tuoi dispositivi. Configura facilmente scenari personalizzati."
                  : ""}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;