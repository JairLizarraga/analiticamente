import React from "react";
import './Home.css';

const Home: React.FC = () => {
  return (
    <section id="home" className="home-section">
      <div className="home-content">
        <h2>Si estás aquí, ya diste el primer paso</h2>
        <p>
          Estás en un lugar donde <strong>tu historia importa</strong>.<br />
          Donde puedes pausar, pensar, hablar y resignificar.<br />
          El proceso es tuyo, pero no lo tienes que recorrer solo.
        </p>

        <div className="home-buttons">
          <a href="#services" className="nav-button">Servicios</a>
          <a href="#about" className="nav-button">Sobre Nosotros</a>
          <a href="#social" className="nav-button">Síguenos</a>
          <a href="#contact" className="nav-button">Contacto</a>
        </div>
      </div>
    </section>
  );
};

export default Home;
