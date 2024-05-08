import React, { useState } from "react";
import { SlArrowRight, SlArrowDown } from "react-icons/sl";
import { FaRegCopyright, FaGithub } from "react-icons/fa";

function Footer() {
  const [showDetails, setShowDetails] = useState({
    Anes: false,
    Edoardo: false,
    Francesco: false,
    Nino: false,
  });

  const users = [
    { name: "Anes Barbati", email: "Anes.Barbati@smartlinx.it" },
    { name: "Edoardo Ingiardi", email: "Edoardo.Ingiardi@smartlinx.it" },
    { name: "Francesco Roveda", email: "Francesco.Roveda@smartlinx.it" },
    { name: "Nino Zullo", email: "Nino.Zullo@smartlinx.it" },
  ];

  const toggleDetails = (name) => {
    setShowDetails((prevState) => ({
      ...prevState,
      [name]: !prevState[name],
    }));
  };

  const handleDownload = () => {
    window.location.href = "/Documentazione/SmartLinx_API Reference.pdf";
  };

  const handleInfoProgetto = () => {
    window.location.href = "/Documentazione/InformazioniProgetto.pdf";
  };

  const renderUsers = () => {
    return users.map((user) => (
      <div className="mb-4" key={user.name}>
        <button
          className="text-neutral-600 dark:text-neutral-200"
          onClick={() => toggleDetails(user.name)}
        >
          {user.name}{" "}
          {showDetails[user.name] ? (
            <SlArrowDown className="inline" />
          ) : (
            <SlArrowRight className="inline" />
          )}
        </button>
        {showDetails[user.name] && <p>{user.email}</p>}
      </div>
    ));
  };

  return (
    <footer className="bg-neutral-100 text-center text-neutral-600 dark:bg-neutral-600 dark:text-neutral-200 lg:text-left">
      <div className="flex items-center justify-center border-b-2 border-neutral-200 p-6 dark:border-neutral-500 lg:justify-between">
        <div className="mr-12 hidden lg:block">
          <span>Resta connesso con noi sui social network:</span>
        </div>
        <button className="mr-6 text-neutral-600 dark:text-neutral-200">
          <FaGithub />
        </button>
      </div>

      <div className="mx-6 py-10 text-center md:text-left">
        <div className="grid-1 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="">
            <h6 className="mb-4 flex items-center justify-center font-semibold md:justify-start">
              <FaRegCopyright className="mr-2" />
              <div className="flex-shrink-0">
                <span className="font-bold text-2xl text-black">Smart</span>
                <span className="font-bold text-2xl text-[#9E5CF6]">Linx</span>
              </div>
            </h6>
            <p>
              Tutti i diritti riservati. Realizzato come progetto di quinta
              superiore dagli studenti della 5IC A.S. 2023/2024.
              <br />
              Scopri di più su di noi e sul nostro progetto di innovazione
              tecnologica per la tua casa intelligente.{" "}
            </p>
          </div>
          <div className="">
            <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
              Chi Siamo?
            </h6>

            {renderUsers()}
          </div>
          <div className="">
            <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
              Link Utili
            </h6>
            <p className="mb-4">
              <button className="text-neutral-600 dark:text-neutral-200">
                Dati & Privacy
              </button>
            </p>
            <p className="mb-4">
              <button
                onClick={handleInfoProgetto}
                className="text-neutral-600 dark:text-neutral-200"
              >
                Informazioni progetto
              </button>
            </p>
            <p className="mb-4">
              <button className="text-neutral-600 dark:text-neutral-200">
                API Status ✔
              </button>
            </p>
            <p>
              <button
                className="text-neutral-600 dark:text-neutral-200"
                onClick={handleDownload}
              >
                Documentazione API
              </button>
            </p>
          </div>
          <div>
            <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
              Contatti
            </h6>
            <p className="mb-4 flex items-center justify-center md:justify-start">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="mr-3 h-5 w-5"
              >
                <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
                <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
              </svg>
              Crema, CR 26013, IT
            </p>
            <p className="mb-4 flex items-center justify-center md:justify-start">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="mr-3 h-5 w-5"
              >
                <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
              </svg>
              supporto@smartlinx.it
            </p>

            <p className="flex items-center justify-center md:justify-start">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="mr-3 h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M7.875 1.5C6.839 1.5 6 2.34 6 3.375v2.99c-.426.053-.851.11-1.274.174-1.454.218-2.476 1.483-2.476 2.917v6.294a3 3 0 003 3h.27l-.155 1.705A1.875 1.875 0 007.232 22.5h9.536a1.875 1.875 0 001.867-2.045l-.155-1.705h.27a3 3 0 003-3V9.456c0-1.434-1.022-2.7-2.476-2.917A48.716 48.716 0 0018 6.366V3.375c0-1.036-.84-1.875-1.875-1.875h-8.25zM16.5 6.205v-2.83A.375.375 0 0016.125 3h-8.25a.375.375 0 00-.375.375v2.83a49.353 49.353 0 019 0zm-.217 8.265c.178.018.317.16.333.337l.526 5.784a.375.375 0 01-.374.409H7.232a.375.375 0 01-.374-.409l.526-5.784a.373.373 0 01.333-.337 41.741 41.741 0 018.566 0zm.967-3.97a.75.75 0 01.75-.75h.008a.75.75 0 01.75.75v.117a.75.75 0 01-.75.75h-.008a.75.75 0 01-.75-.75v-.117z"
                  clipRule="evenodd"
                />
              </svg>
              Crema, CR 26013, IT
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
