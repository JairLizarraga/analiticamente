import React, { useState } from "react";
import './Contact.css';

const Contact: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Gracias, ${name}. Te contactaremos pronto.`);
    // Aquí tu lógica para enviar el formulario
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <section id="contact" className="contact-section">
      <h3>Contacto</h3>

      <div className="contact-wrapper">

        <form className="contact-form" onSubmit={handleSubmit}>
          <label htmlFor="name">Nombre:</label>
          <input 
            id="name"
            type="text" 
            value={name} 
            onChange={e => setName(e.target.value)} 
            required 
            placeholder="Tu nombre"
          />

          <label htmlFor="email">Email:</label>
          <input 
            id="email"
            type="email" 
            value={email} 
            onChange={e => setEmail(e.target.value)} 
            required 
            placeholder="tu.email@ejemplo.com"
          />

          <label htmlFor="message">Mensaje:</label>
          <textarea 
            id="message"
            value={message} 
            onChange={e => setMessage(e.target.value)} 
            required 
            placeholder="Escribe tu mensaje aquí"
          />

          <button type="submit" className="btn-submit">Enviar</button>
        </form>

        <div className="contact-info">
          <h4>Contáctanos</h4>
            <p>
              📍 
              <a href="https://maps.app.goo.gl/u4WJXb57i9dY2TtW9" target="_blank" rel="noreferrer" className="map-link">
                Tajín 363, Narvarte Oriente
              </a>
            </p>
            <p>
              📍 
              <a href="https://maps.app.goo.gl/pCcAW4PwDwJVqtVb9" target="_blank" rel="noreferrer" className="map-link">
                Punto Medic Santa Fe
              </a>
            </p>
          <p>📞 +52 55 3493 6999</p>
          <p>📧 contacto@clinica-psicoterapia.mx</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
