import React, { useState } from "react";
import './Header.css'
import logo from '../../assets/logo.png';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="header-left">
        <a href="#home" onClick={() => setIsMenuOpen(false)} className="header-logo-link" style={{ display: "flex", alignItems: "center", textDecoration: "none", color: "inherit" }}>
          <img src={logo} alt="Logo Analítica-mente" className="header-logo" />
          <h1 style={{ marginLeft: "0.5rem" }}>Analítica-mente</h1>
        </a>
      </div>

      <nav className={`header-nav ${isMenuOpen ? "open" : ""}`}>
        <a href="#home" onClick={() => setIsMenuOpen(false)}>Inicio</a>
        <a href="#services" onClick={() => setIsMenuOpen(false)}>Servicios</a>
        <a href="#about" onClick={() => setIsMenuOpen(false)}>Sobre Nosotros</a>
        <a href="#testimonials" onClick={() => setIsMenuOpen(false)}>Testimonios</a>
        <a href="#blog" onClick={() => setIsMenuOpen(false)}>Blog</a>
        <a href="#contact" onClick={() => setIsMenuOpen(false)}>Contacto</a>
        <a href="/aviso-privacidad" onClick={() => setIsMenuOpen(false)}>Aviso de Privacidad</a>
      </nav>

      <button className="menu-toggle" onClick={toggleMenu} aria-label="Toggle menu">
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </button>
    </header>
  );
};

export default Header;
