import React from "react";
import {
    FaDownload,
    FaLock,
    FaWrench,
    FaAndroid,
    FaUserAlt,
    FaWifi,
} from "react-icons/fa";

function FAQGrid() {
    const domande = [
        {
            titolo: "Quali dispositivi Zigbee sono compatibili con l'app?",
            testo:
                "L'app SmartLinx è progettata per essere compatibile con una vasta gamma di dispositivi smart che utilizzano il protocollo Zigbee. Questo include lampadine smart, termostati, sensori di movimento, prese intelligenti e molto altro ancora. Per una lista completa dei dispositivi compatibili, ti invitiamo a consultare la lista completa.",
            icona: FaWifi,
        },
        {
            titolo:
                "Come posso installare e configurare l'app sul mio dispositivo mobile?",
            testo:
                "L'installazione e la configurazione dell'app SmartLinx sono semplici e intuitive. Puoi scaricare l'app gratuitamente dal Google Play Store (per dispositivi Android), dall'App Store (per dispositivi iOS) o dal seguente link . Una volta scaricata, segui le istruzioni visualizzate sullo schermo per completare il processo di installazione e configurazione.",
            icona: FaDownload,
        },
        {
            titolo:
                "Quali misure di sicurezza sono in atto per proteggere i miei dati personali?",
            testo:
                "La sicurezza dei dati dei nostri utenti è una priorità assoluta per noi. L'app SmartLinx utilizza protocolli di crittografia avanzati per proteggere tutte le comunicazioni tra l'app e l'hub Zigbee. Inoltre, rispettiamo rigorosamente le normative sulla privacy e non condividiamo mai le informazioni personali dei nostri utenti con terze parti senza il loro consenso.",
            icona: FaLock,
        },
        {
            titolo:
                "Offrite assistenza tecnica per l'installazione e l'utilizzo dell'app?",
            testo:
                "Sì, il nostro team di assistenza tecnica è disponibile per fornire supporto e assistenza in caso di domande o problemi relativi all'installazione e all'utilizzo dell'app SmartLinx. Puoi contattare il nostro team tramite email, telefono o attraverso il nostro sito web e saremo lieti di aiutarti.",
            icona: FaWrench,
        },
        {
            titolo: "Quali sono i requisiti di sistema minimi per utilizzare l'app?",
            testo:
                "L'app SmartLinx è progettata per funzionare su una vasta gamma di dispositivi mobili, inclusi smartphone e tablet. I requisiti di sistema minimi dipendono dal sistema operativo del dispositivo, ma in generale è consigliabile utilizzare dispositivi con versioni aggiornate di Android o iOS per garantire un'esperienza ottimale.",
            icona: FaAndroid,
        },
        {
            titolo: "Posso controllare i dispositivi Zigbee quando sono fuori casa?",
            testo:
                "Sì, con l'app SmartLinx puoi controllare i tuoi dispositivi Zigbee da qualsiasi luogo, purché tu abbia accesso a una connessione Internet. Che tu sia al lavoro, in vacanza o semplicemente fuori casa, puoi accedere all'app e gestire i tuoi dispositivi in modo remoto con facilità e convenienza.",
            icona: FaUserAlt,
        },
    ];

    return (
        <div className="mx-4 lg:mx-16 xl:mx-16 mt-5 mb-10 py-7 rounded-lg ">
            <h2 className="text-2xl font-semibold text-blue-500 flex justify-center mb-6">
                Domande frequenti
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {domande.map((domanda, index) => (
                    <ElementoGriglia
                        key={index}
                        titolo={domanda.titolo}
                        testo={domanda.testo}
                        icona={domanda.icona}
                    />
                ))}
            </div>
        </div>
    );
}

function ElementoGriglia({ titolo, testo, icona }) {
    const Icona = icona;

    return (
        <div className="p-6 flex items-start">
            <div className="rounded-full flex items-center justify-center mr-4">
                <Icona className="text-gray-400 text-3xl" />
            </div>
            <div>
                <h3 className="text-lg font-semibold mb-2 text-gray-800 dark:text-gray-200">
                    {titolo}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">{testo}</p>
            </div>
        </div>
    );
}

export default FAQGrid;