import React, { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import './Contact.css';

const Contact: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Gracias, ${name}. Te contactaremos pronto.`);
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <section id="contact" className="contact-section">
      <h3>Contacto</h3>

      <div className="contact-wrapper">

        <div className="contact-info">
          <p>📍 Tajín 363, Narvarte Oriente</p>
          <p>📍 Punto Medic Santa Fe</p>
          <p>
            <a
              href="https://wa.me/5215512345678"
              target="_blank"
              rel="noreferrer"
              className="whatsapp-link"
              aria-label="WhatsApp"
            >
              <FaWhatsapp style={{ marginRight: '0.5rem' }} />
              Envíanos un mensaje por WhatsApp
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
