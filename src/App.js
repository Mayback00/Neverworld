import React, { useState } from "react";
import "./HeroSection.css";
import { MdLanguage } from "react-icons/md";
import buttonDemo from "./assets/button_demo-01-01.png";
import { useEffect } from "react";
import { FaKickstarter } from "react-icons/fa6";
import { FaPatreon } from "react-icons/fa6";
import FairyFollower from "./FairyFollower";

function App() {
  const [activeSection, setActiveSection] = useState("inicio");
  const [showDemo, setShowDemo] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    const handleMouseMove = (e) => {
      const { innerWidth, innerHeight } = window;
      const offsetX = (e.clientX / innerWidth - 0.5) * 10 * -1;
      const offsetY = (e.clientY / innerHeight - 0.5) * 10 * -1;
      const background = document.querySelector(".background");
      if (background) {
        background.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const renderContent = () => {
    switch (activeSection) {
      case "apoyar":
        return (
          <div className="content">
            <h1>¿Quieres apoyar el proyecto?</h1>
            <h2>- Sé parte de los niños perdidos -</h2>
            <div className="support-buttons">
              {/* Botón de Patreon con icono */}
              <a
                href="https://patreon.com"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-icon"
              >
                <FaPatreon alt="Patreon Icon" className="button-icon" />
                <h2> Patreon</h2>
              </a>

              {/* Botón de Indiegogo con icono */}
              <a
                href="https://www.indiegogo.com"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-icon"
              >
                <h2>Indiegogo</h2>
              </a>
            </div>
          </div>
        );

      case "sobre":
        return (
          <div className="content blog">
            <h1>Sobre Neverworld</h1>
            <p>
              Neverworld es un mundo suspendido entre el recuerdo y la promesa.
              Un refugio para los que perdieron el camino… o nunca tuvieron uno.
              Aquí llegaron, alguna vez, un grupo de niños olvidados por el
              mundo real. Y entre ellos, un joven diferente: Peter, quien se
              convirtió en su líder y guía.
            </p>
            <p>
              Se decía que Peter era el único capaz de mantener la luz del Ignis
              pura y que mientras su corazón no se corrompiera, los Niños
              Perdidos tendrían un líder que los guiaría en su nueva aventura.
            </p>
            <p>
              Pero un día, todo cambió. Se dice que Peter perdió a quien más
              amaba: Wendy, arrebatada por el despiadado Capitán Hook. Desde
              entonces, Peter jamás volvió a ser visto. Algunos creen que murió
              enfrentando al capitán en una última batalla. Otros, que su
              corazón se rompió y se desvaneció en algún rincón del mundo,
              llevándose con él su luz… y dejando atrás a los Niños Perdidos, a
              Thinkerbell, y a todo lo que una vez defendió.
            </p>
            <p>
              Desde entonces, el mundo fue cayendo lentamente bajo el control
              del tirano capitán pirata: Night Hook, señor del Llanto Obsidiana
              y comandante de los piratas oscuros, que extiende su influencia
              como una tormenta sin fin.
            </p>
            <p>
              En este contexto nace el viaje de Kairos, un joven Niño Perdido
              con un lazo misterioso con el Ignis. Desterrado por sus propios
              compañeros por creer que Peter aún vive y poniendo en riesgo a los
              niños perdidos al amenazar a los piratas con su regreso, Kairos se
              lanza a la travesía de encontrarlo, impulsado por una fuerza
              interior que no puede explicar… y por las historias que la
              guardiana de los niños perdidos Bell aún susurra por las noches.
            </p>
            <p>
              Mientras todos piensan que Peter es solo un mito, Kairos lo busca
              como si fuera lo único real. Porque en lo más profundo de su alma,
              él sabe que la luz de Pan no se ha apagado... Solo espera ser
              encontrada.
            </p>
          </div>
        );

      default:
        return (
          <div className="content">
            <img
              src="/logo2.png"
              alt="Neverworld"
              className="logo-in-content"
            />

            {!showDemo ? (
              <button
                onClick={() => setShowDemo(true)}
                className="btn-image"
                style={{
                  backgroundImage: `url(${buttonDemo})`,
                }}
              >
                <span className="btn-text">VER DEMO</span>
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
      <FairyFollower />

      <div className="background" />

      <img
        src="/kairos_animation_back1.gif"
        alt="Kairos"
        className="character-gif"
      />

      <div className="hero">
        <nav className="navbar">
          <div className="logo">
            <img
              onClick={() => {
                setActiveSection("inicio");
                setShowDemo(false);
                setMenuOpen(false);
              }}
              className={activeSection === "inicio" ? "active" : ""}
              src="/nwlogo2-01.png"
              alt="Neverworld Logo"
            />
          </div>

          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            ☰
          </div>

          <div className={`nav-links ${menuOpen ? "open" : ""}`}>
            <button
              onClick={() => {
                setActiveSection("inicio");
                setShowDemo(false);
                setMenuOpen(false);
              }}
              className={activeSection === "inicio" ? "active" : ""}
            >
              Inicio
            </button>
            <button
              onClick={() => {
                setActiveSection("apoyar");
                setMenuOpen(false);
              }}
              className={activeSection === "apoyar" ? "active" : ""}
            >
              Apoyar el proyecto
            </button>
            <button
              onClick={() => {
                setActiveSection("sobre");
                setMenuOpen(false);
              }}
              className={activeSection === "sobre" ? "active" : ""}
            >
              Sobre Neverworld
            </button>
          </div>

          <div className="social">
            <a href="https://discord.gg/YHjPHbnKSq">
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
      </div>
      <footer className="footer">
        <div className="footer-logo">
          <img src="/nwlogo2-01.png" alt="Neverworld Logo" />
        </div>

        <div className="footer-links">
          <a href="#">Política de privacidad</a>
          <a href="#">Términos de servicio</a>
          <a href="#">Sobre Neverworld</a>
          <a href="#">Contáctanos</a>
          <a href="#">Centro de ayuda</a>
        </div>

        <div className="footer-rating">
          <img src="/not_rated.png" alt="Clasificación ESRB" />
        </div>

        <div className="footer-disclaimer">
          <p>
            Neverworld™ es una marca ficticia creada para proyectos
            interactivos. Sus personajes, nombres y lugares son productos de la
            imaginación o inspirados de obras clásicas.
          </p>
        </div>

        <div className="footer-publisher">
          <img src="/MS_logo-01.png" alt="Mayback Studios" />
        </div>

        <div className="footer-copyright">
          <p>
            Copybright ◙ MAYBACK STUDIO. Todos los derechos algún día serán
            reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
