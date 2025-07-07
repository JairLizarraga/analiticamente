import React, { useEffect, useState } from "react";
import "./Services.css";

import img1 from "../../assets/Services/service-ninos.jpg";
import img2 from "../../assets/Services/service-adolescentes.jpg";
import img3 from "../../assets/Services/service-adultos.jpg";

const images = [img1, img2, img3];

const Services: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="services" className="services-section">
      <div className="services-text-column">
        <div className="services-description">
          <h2>¿Cómo te puedo acompañar?</h2>

          <p>
            En este espacio ofrezco acompañamiento psicoterapéutico para niños, adolescentes y adultos, desde un enfoque clínico integrador y centrado en la persona:
          </p>

          <ul>
            <li>Con niños que están aprendiendo a expresar lo que sienten</li>
            <li>Con adolescentes que enfrentan enredos emocionales, miedos o crisis de identidad</li>
            <li>Con personas adultas que buscan un espacio para dejar de exigirse tanto y comenzar a entenderse desde otra perspectiva</li>
          </ul>

          <p>
            Cada proceso es único y lo abordo desde un enfoque clínico, pero también creativo y profundamente humano. A veces trabajamos con palabras, otras veces con el cuerpo, el juego con niños, el humor con adultos, el arte o el silencio. Lo importante es que sea auténtico y tenga sentido para ti.
          </p>

          <p>
            No creo en moldear a la persona a una técnica, sino en encontrar la estrategia que mejor te apoye en este momento. No se trata de “hacer las cosas bien”, sino de descubrir lo que te ayuda a sentirte mejor.
          </p>

          <p>
            Si estás leyendo esto, ya has iniciado tu proceso de cambio.
          </p>
        </div>
      </div>

      <div className="services-image-column">
        <div className="image-background">
          {images.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Service ${index + 1}`}
              className={`service-image ${index === currentIndex ? "active" : ""}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
