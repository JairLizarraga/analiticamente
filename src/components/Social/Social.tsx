import React, { useEffect, useState } from "react";
import "./Testimonial.css";

const testimonialData = [
  {
    name: "Ana Pérez",
    text: "Gracias al equipo del consultorio recuperé mi salud y recibí una atención humana y profesional.",
    date: "Paciente desde 2023",
  },
  {
    name: "Luis García",
    text: "Excelente atención, el personal siempre muy amable y el doctor muy profesional y atento.",
    date: "Paciente desde 2022",
  },
  {
    name: "María López",
    text: "Me sentí muy cómodo y seguro durante todo el tratamiento. Recomiendo este consultorio.",
    date: "Paciente desde 2024",
  },
];

const Testimonial: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonialData.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="testimonial-slider">
      {testimonialData.map((testimonial, index) => (
        <div
          key={index}
          className={`testimonial-slide ${
            index === currentIndex ? "active" : ""
          }`}
        >
          <div className="testimonial-card">
            <p className="testimonial-text">"{testimonial.text}"</p>
            <h4 className="testimonial-name">{testimonial.name}</h4>
            <span className="testimonial-date">{testimonial.date}</span>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Testimonial;
