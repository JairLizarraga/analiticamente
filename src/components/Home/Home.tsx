import React from "react";
import './Home.css';

const Home: React.FC = () => {
  return (
    <section id="home" className="home-section">
      <div className="home-content">
        <h2>Tu bienestar emocional empieza aquí</h2>
        <p>
          En <strong>Analítica-mente</strong> te acompañamos en tu proceso de autoconocimiento y sanación. 
          Brindamos atención psicológica ética, empática y personalizada para ayudarte a vivir con mayor equilibrio.
        </p>
        <a href="#contact" className="home-cta-button">Agenda tu consulta</a>
      </div>
    </section>
  );
};

export default Home;
