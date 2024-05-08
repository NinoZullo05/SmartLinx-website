import React from "react";
import {
  AiOutlineDownload,
  AiOutlineSetting,
  AiOutlineReload,
} from "react-icons/ai";
import "../stili/FontStyle.css";

const Servizi = () => {
  const serviziData = [
    {
      Icona: (
        <AiOutlineDownload className="text-purple-500 w-16 h-14 relative" />
      ),
      Titolo: "Installazione e Configurazione Remota",
      Descrizione:
        "Offriamo un servizio completo di installazione e configurazione dell'app sul vostro dispositivo mobile. Il nostro team sarà disponibile per guidarvi attraverso il processo e assicurarsi che l'app sia integrata correttamente con l'hub Zigbee e i vostri dispositivi smart.",
    },
    {
      Icona: (
        <AiOutlineSetting className="text-purple-500 w-16 h-14 relative" />
      ),
      Titolo: "Assistenza Tecnica Personalizzata",
      Descrizione:
        "Forniamo assistenza tecnica dedicata per risolvere eventuali problemi o domande riguardanti l'utilizzo dell'app. Il nostro team sarà disponibile per fornire supporto remoto e risolvere qualsiasi problema in modo tempestivo e professionale.",
    },
    {
      Icona: <AiOutlineReload className="text-purple-500 w-16 h-14 relative" />,
      Titolo: "Aggiornamenti Continui e Miglioramenti",
      Descrizione:
        "Ci impegniamo a fornire aggiornamenti regolari dell'app per garantire che sia sempre aggiornata con le ultime funzionalità e miglioramenti. I nostri utenti avranno accesso a nuove funzionalità e miglioramenti dell'esperienza utente senza costi aggiuntivi.",
    },
  ];

  return (
    <div>
      <div className="text-center mb-6 mt-20" id="servizi">
        <h1 className="text-4xl font-bold text-gray-700 dark:text-gray-100 mb-5">
          Gestisci i tuoi dispositivi smart con un Click
        </h1>
        <h2 className="text-base font-medium text-gray-600 dark:text-gray-300">
          I servizi che forniamo con la nostra applicazione
        </h2>
      </div>
      <div className="flex flex-wrap justify-center items-center gap-8">
        {serviziData.map((servizio, index) => (
          <div
            key={index}
            className="w-80 h-auto px-8 py-6 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-lg border border-purple-500 flex flex-col justify-start items-center gap-2"
          >
            <div className="h-36 flex flex-col justify-start items-center gap-4">
              {servizio.Icona}
              <h1 className="self-stretch text-center text-gray-700 dark:text-gray-200 text-xl font-bold font-'SF Pro Display Medium' leading-9">
                {servizio.Titolo}
              </h1>
            </div>
            <div className="justify-start items-start gap-2 inline-flex">
              <span className="w-64 text-left text-gray-600 dark:text-gray-300 text-sm font-normal font-'SF Pro Display Regular' leading-tight">
                {servizio.Descrizione}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Servizi;