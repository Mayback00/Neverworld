import React, { useState, useEffect } from "react";
import "./HeroSection.css";
import { MdLanguage } from "react-icons/md";
import buttonDemo from "./assets/button_demo-01-01.png";
import { FaKickstarter } from "react-icons/fa6";
import { FaPatreon } from "react-icons/fa6";
import FairyFollower from "./FairyFollower";

function App() {
  const [activeSection, setActiveSection] = useState("home");
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
      case "support":
        return (
          <div className="content">
            <h1>Do you want to support the project?</h1>
            <h2>- Be part of the Lost Children -</h2>
            <div className="support-buttons">
              {/* Patreon button with icon */}
              <a
                href="https://patreon.com"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-icon"
              >
                <FaPatreon alt="Patreon Icon" className="button-icon" />
                <h2>Patreon</h2>
              </a>

              {/* Indiegogo button with icon */}
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

      case "about":
        return (
          <div className="content blog">
            <h1>About Neverworld</h1>
            <p>
              Neverworld is a realm suspended between reality and dreams. A refuge
              for those who lost their destiny… or never had one. Once, a group
              of children forgotten by the real world arrived here. Among them,
              a different young boy: Peter, who became their leader and guide.
            </p>
            <p>
              It was said Peter was the only one capable of keeping the Ignis
              light pure, and as long as his heart remained uncorrupted, the
              Lost Children would always have a leader to guide them in their
              new adventure.
            </p>
            <p>
              But one day, everything changed. They say Peter lost the one he
              loved most: Wendy, taken by the ruthless Captain Hook. Since then,
              Peter was never seen again. Some believe he died fighting the
              captain in one final battle. Others believe his heart broke and he
              faded away into some corner of the world, carrying his light with
              him… leaving behind the Lost Children, Tinkerbell, and all he once
              defended.
            </p>
            <p>
              From then on, the world slowly fell under the control of the tyrant
              pirate captain: Night Hook, lord of the Obsidian Wail and commander
              of the dark pirates, spreading his influence like a never-ending
              storm.
            </p>
            <p>
              In this setting begins the journey of Kairos, a young Lost Child
              with a mysterious bond to the Ignis. Banished by his companions for
              believing Peter still lives—and endangering them by provoking the
              pirates with rumors of his return—Kairos sets out to find him,
              driven by a force he cannot explain… and by the stories still
              whispered at night by Bell, the guardian of the Lost Children.
            </p>
            <p>
              While everyone else thinks Peter is just a myth, Kairos searches
              for him as if he were the only real thing. Because deep in his
              soul, he knows the light of Pan has not gone out.
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
                <span className="btn-text">WATCH DEMO</span>
              </button>
            ) : (
              <div className="video-wrapper">
                <iframe
                  width="100%"
                  height="400"
                  src="https://www.youtube.com/embed/EMJ4U0Pe008"
                  title="Neverworld Demo"
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
                setActiveSection("home");
                setShowDemo(false);
                setMenuOpen(false);
              }}
              className={activeSection === "home" ? "active" : ""}
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
                setActiveSection("home");
                setShowDemo(false);
                setMenuOpen(false);
              }}
              className={activeSection === "home" ? "active" : ""}
            >
              Home
            </button>
            <button
              onClick={() => {
                setActiveSection("support");
                setMenuOpen(false);
              }}
              className={activeSection === "support" ? "active" : ""}
            >
              Support the Project
            </button>
            <button
              onClick={() => {
                setActiveSection("about");
                setMenuOpen(false);
              }}
              className={activeSection === "about" ? "active" : ""}
            >
              About Neverworld
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
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
          <a href="#">About Neverworld</a>
          <a href="#">Contact Us</a>
          <a href="#">Help Center</a>
        </div>

        <div className="footer-rating">
          <img src="/not_rated.png" alt="ESRB Rating" />
        </div>

        <div className="footer-disclaimer">
          <p>
            Neverworld™ is a fictional brand created for interactive projects.
            Its characters, names, and places are products of imagination or
            inspired by classic works.
          </p>
        </div>

        <div className="footer-publisher">
          <img src="/MS_logo-01.png" alt="Mayback Studios" />
        </div>

        <div className="footer-copyright">
          <p>
            Copyright ◙ MAYBACK STUDIO. All rights will one day be reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
