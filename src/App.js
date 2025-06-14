import React, { useState } from "react";
import "./HeroSection.css";
import { MdLanguage } from "react-icons/md";

function App() {
  const [activeSection, setActiveSection] = useState("inicio");
  const [showDemo, setShowDemo] = useState(false);

  const renderContent = () => {
    switch (activeSection) {
      case "apoyar":
        return (
          <div className="content">
            <h1>Apoya el proyecto</h1>
            <div className="support-buttons">
              <a
                href="https://patreon.com"
                target="_blank"
                rel="noopener noreferrer"
                className="btn"
              >
                Patreon
              </a>
              <a
                href="https://kickstarter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="btn"
              >
                Kickstarter
              </a>
            </div>
          </div>
        );

      case "sobre":
        return (
          <div className="content blog">
            <h1>Sobre Neverworld</h1>
            <p>
              Neverworld es un mundo suspendido entre el recuerdo y la promesa. Un refugio para los que perdieron el camino… o nunca tuvieron uno. Aquí llegaron, alguna vez, un grupo de niños olvidados por el mundo real. Y entre ellos, un joven diferente: Peter, quien se convirtió en su líder y guía.
            </p>
            <p>
              Se decía que Peter era el único capaz de mantener la luz del Ignis pura y que mientras su corazón no se corrompiera, los Niños Perdidos tendrían un líder que los guiaría en su nueva aventura.
            </p>
            <p>
              Pero un día, todo cambió. Se dice que Peter perdió a quien más amaba: Wendy, arrebatada por el despiadado Capitán Hook. Desde entonces, Peter jamás volvió a ser visto. Algunos creen que murió enfrentando al capitán en una última batalla. Otros, que su corazón se rompió y se desvaneció en algún rincón del mundo, llevándose con él su luz… y dejando atrás a los Niños Perdidos, a Thinkerbell, y a todo lo que una vez defendió.
            </p>
            <p>
              Desde entonces, el mundo fue cayendo lentamente bajo el control del tirano capitán pirata: Night Hook, señor del Llanto Obsidiana y comandante de los piratas oscuros, que extiende su influencia como una tormenta sin fin.
            </p>
            <p>
              En este contexto nace el viaje de Kairos, un joven Niño Perdido con un lazo misterioso con el Ignis. Desterrado por sus propios compañeros por creer que Peter aún vive y poniendo en riesgo a los niños perdidos al amenazar a los piratas su regreso, Kairos se lanza a la travesía de encontrarlo, impulsado por una fuerza interior que no puede explicar… y por las historias que la guardiana de los niños perdidos Bell aún susurra por las noches.
            </p>
            <p>
              Mientras todos piensan que Peter es solo un mito, Kairos lo busca como si fuera lo único real. Porque en lo más profundo de su alma, él sabe que la luz de Pan no se ha apagado… Solo espera ser encontrada.
            </p>
          </div>
        );

      default:
        return (
          <div className="content">
            <h1>NEVERWORLD</h1>
            {!showDemo ? (
              <button className="btn" onClick={() => setShowDemo(true)}>
                VER DEMO
              </button>
            ) : (
              <div className="video-wrapper">
                <iframe
                  width="100%"
                  height="400"
                  src="https://www.youtube.com/embed/EMJ4U0Pe008"
                  title="Demo Neverworld"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            )}
          </div>
        );
    }
  };

  return (
    <div className="app-wrapper">
      <div className="background" />

      <div className="hero">
        <nav className="navbar">
          <div className="logo">
            <img
              onClick={() => {
                setActiveSection("inicio");
                setShowDemo(false);
              }}
              className={activeSection === "inicio" ? "active" : ""}
              src="/logo2.png"
              alt="Neverworld Logo"
            />
          </div>

          <div className="nav-links">
            <button
              onClick={() => {
                setActiveSection("inicio");
                setShowDemo(false);
              }}
              className={activeSection === "inicio" ? "active" : ""}
            >
              Inicio
            </button>
            <button
              onClick={() => setActiveSection("apoyar")}
              className={activeSection === "apoyar" ? "active" : ""}
            >
              Apoyar el proyecto
            </button>
            <button
              onClick={() => setActiveSection("sobre")}
              className={activeSection === "sobre" ? "active" : ""}
            >
              Sobre Neverworld
            </button>
          </div>

          <div className="social">
            <a href="https://discord.gg/qnbr5WpQ">
              <img
                src="https://img.icons8.com/ios-filled/24/ffffff/discord-logo.png"
                alt="Discord"
              />
            </a>
            <a href="https://www.instagram.com/neverworld_videogame/">
              <img
                src="https://img.icons8.com/ios-filled/24/ffffff/instagram-new.png"
                alt="Instagram"
              />
            </a>
            <a href="#">
              <img
                src="https://img.icons8.com/?size=100&id=9467&format=png&color=ffffff"
                alt="lang"
              />
            </a>
          </div>
        </nav>
        {renderContent()}
        <div className="space"></div>
        <footer className="footer">
          <p>2025 Neverworld. Quisiera tener todos los derechos reservados.</p>
        </footer>
      </div>
    </div>
  );
}

export default App;
