import React from "react";

const Header: React.FC = () => {
  return (
    <header className="navbar">
      <h1>Clínica Psicoterapia</h1>
      <nav>
        <a href="#hero" style={{ margin: "0 1rem", color: "white" }}>Inicio</a>
        <a href="#services" style={{ margin: "0 1rem", color: "white" }}>Servicios</a>
        <a href="#contact" style={{ margin: "0 1rem", color: "white" }}>Contacto</a>
      </nav>
    </header>
  );
};

export default Header;
