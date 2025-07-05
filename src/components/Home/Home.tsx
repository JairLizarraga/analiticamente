import React from "react";
import './Home.css';

const Home: React.FC = () => {
  // Función para abrir el chat
  const handleOpenChat = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    // Opcional: si tienes sección contacto, hacer scroll a ella
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

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

          {/* Aquí agregamos el onClick para abrir el chat */}
          <a href="#footer" className="nav-button" onClick={handleOpenChat}>Contacto</a>
        </div>
      </div>
    </section>
  );
};

export default Home;
