import React, { useState, useEffect } from "react";
import "./About.css";
import teamPhoto from "../../assets/About/profilepic.jpg";

const paragraphs = [
  <>
    Hola, soy Saraíd Alvarez. Soy psicóloga clínica, egresada de la Universidad de las Américas, y actualmente curso la maestría en Terapia Cognitivo Conductual en el Instituto de Terapia Cognitivo Conductual (ITCC).  
    Me he formado también en arteterapia y he trabajado durante más de ocho años junto a profesionales de enfoques gestáltico, dialéctico conductual (DBT) e integrativo.  
    Esta diversidad de experiencias me ha permitido acompañar a las personas desde distintas perspectivas, con sensibilidad y compromiso.
    <br /><br />
    Te acompaño con respeto y empatía, para que puedas comprender mejor lo que sientes, romper los ciclos que generan malestar y encontrar caminos que realmente funcionen para ti — caminos que te acerquen a estar en paz contigo mismo/a y con tu entorno.
  </>,
  <>
    ¿Y qué es la Terapia Cognitivo Conductual?  
    Para explicarlo de manera sencilla: imagina que tus pensamientos son pequeñas frases que aparecen sin que las invites. Algunas son rápidas, como “No puedo” o “Esto va a salir mal” — esos son los llamados pensamientos automáticos.
    <br /><br />
    Detrás de esas frases suelen estar reglas internas que aplicamos sin darnos cuenta, como “Si no soy perfecta, no me van a querer”.  
    Y aún más profundo, se encuentran creencias que aprendiste desde siempre, como “No merezco ser feliz” o “No puedo confiar en nadie”.
  </>,
  <>
    En terapia, te ayudo a identificar esas ideas, comprender de dónde vienen y trabajar en nuevas formas de relacionarte con ellas, para que te lastimen menos y te acompañen de manera más sana.  
    <br /><br />
    Creo profundamente en la escucha sincera y en que cada proceso es único. Por eso, mi compromiso es acompañarte sin prisa, con creatividad, respeto y apertura, para que puedas construir un camino propio.  
    Si sientes que este puede ser tu espacio, te invito a conocer cómo trabajo y a dar ese siguiente paso en tu proceso personal.
  </>
];

const About: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % paragraphs.length);
    }, 25000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="about" id="about">
      <h2 className="about-title">Sobre mí</h2>

      <div className="about-content">
        <div className="about-image">
          <img src={teamPhoto} alt="Nuestro equipo terapéutico" />
        </div>

        <div className="about-text">
          <div className="about-card-container">
            {paragraphs.map((paragraph, index) => (
              <div
                key={index}
                className={`about-card-fade ${
                  index === currentIndex ? "visible" : "hidden"
                }`}
              >
                <p className="carousel-text">{paragraph}</p>
              </div>
            ))}
          </div>

          {/* Puntos de navegación */}
          <div className="carousel-dots">
            {paragraphs.map((_, index) => (
              <button
                key={index}
                className={`dot ${index === currentIndex ? "active" : ""}`}
                onClick={() => setCurrentIndex(index)}
                aria-label={`Ir al texto ${index + 1}`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
