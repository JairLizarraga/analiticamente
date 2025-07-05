import React, { useState, useRef, useEffect } from "react";
import './Header.css';
import logo from '../../assets/logo.png';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close the menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;
      if (
        isMenuOpen &&
        menuRef.current &&
        !menuRef.current.contains(target) &&
        buttonRef.current &&
        !buttonRef.current.contains(target)
      ) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isMenuOpen]);

  // Scroll to contact and open Watson Assistant
  const handleContactClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setIsMenuOpen(false);

    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }

  };

  return (
    <header className="header">
      <div className="header-left">
        <a
          href="#home"
          onClick={() => setIsMenuOpen(false)}
          className="header-logo-link"
          style={{ display: "flex", alignItems: "center", textDecoration: "none", color: "inherit" }}
        >
          <img src={logo} alt="Logo Analítica-mente" className="header-logo" />
          <h1 style={{ marginLeft: "0.5rem" }}>Analítica-mente</h1>
        </a>
      </div>

      <nav ref={menuRef} className={`header-nav ${isMenuOpen ? "open" : ""}`}>
        <a href="#home" onClick={() => setIsMenuOpen(false)}>Inicio</a>
        <a href="#services" onClick={() => setIsMenuOpen(false)}>Servicios</a>
        <a href="#about" onClick={() => setIsMenuOpen(false)}>Sobre Nosotros</a>
        <a href="#social" onClick={() => setIsMenuOpen(false)}>Redes sociales</a>
        <a href="#contact" onClick={handleContactClick}>Contacto</a>
      </nav>

      <button
        className="menu-toggle"
        onClick={toggleMenu}
        ref={buttonRef}
        aria-label="Toggle menu"
      >
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </button>
    </header>
  );
};

export default Header;
