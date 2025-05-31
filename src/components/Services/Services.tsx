import React from "react";
import './Services.css';

const Services: React.FC = () => {
  return (
    <section className="flex-section">
      <div className="service-card">
        <h3>Terapia individual</h3>
        <p>Atención personalizada para abordar problemas emocionales, ansiedad, depresión y más.</p>
      </div>

      <div className="service-card">
        <h3>Terapia de pareja</h3>
        <p>Apoyo profesional para mejorar la comunicación y resolver conflictos en la relación.</p>
      </div>

      <div className="service-card">
        <h3>Terapia familiar</h3>
        <p>Sesiones enfocadas en mejorar la dinámica familiar y fortalecer los vínculos.</p>
      </div>

      <div className="service-card">
        <h3>Asesoramiento psicológico online</h3>
        <p>Accede a ayuda profesional desde la comodidad de tu hogar mediante sesiones virtuales.</p>
      </div>
    </section>
  );
};

export default Services;
