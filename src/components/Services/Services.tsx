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
            Trabajo con niños que están aprendiendo a poner en palabras lo que sienten, con adolescentes que atraviesan enredos emocionales, miedos o crisis de identidad, y con personas adultas que buscan un espacio para dejar de exigirse tanto y empezar a entender(se) desde otro lugar.
          </p>
          <p>
            Cada proceso es único, y lo abordo desde un enfoque clínico, sí, pero también creativo y profundamente humano. A veces trabajamos con palabras, otras veces con el cuerpo, el juego con niños, el humor con adultos, el arte o el silencio. Lo importante es que sea real y que tenga sentido para ti.
          </p>
          <p>
            No creo en moldear a la persona a una técnica, sino en encontrar la estrategia que mejor te abrace en este momento. No se trata de “hacer las cosas bien”, sino de encontrar lo que te ayuda a estar mejor a ti.
          </p>
          <p>
            Si estás leyendo esto, ya empezaste el cambio.
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
