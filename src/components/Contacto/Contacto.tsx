import React from "react";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import './Contacto.css';

const Contacto: React.FC = () => {

const openWatsonChat = () => {
  if (window.watsonAssistantInstance) {
    window.watsonAssistantInstance.openWindow();
  } else {
    console.warn("Watson Assistant no está listo aún.");
  }
};


  return (
    <section id="contact" className="contacto">
      <div className="contacto-container">

        {/* Ubicaciones */}
        <div className="contacto-seccion">
          <h3>📍 Ubicaciones</h3>
          <ul>
            <li>Narvarte Oriente</li>
            <li>Santa Fe</li>
          </ul>
        </div>

        {/* Contacto WhatsApp */}
        <div className="contacto-seccion">
          <h3>Contáctanos</h3>
          <a
            href="https://wa.me/5215534936999"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp"
            aria-label="Enviar mensaje por WhatsApp"
          >
            <FaWhatsapp className="icon-whatsapp" />
            Envíanos un mensaje por WhatsApp
          </a>

          {/* Botón para abrir asistente virtual */}
          <button className="btn-chat" onClick={openWatsonChat} type="button">
            💬 Abrir asistente virtual
          </button>
        </div>

        {/* Redes Sociales */}
        <div className="contacto-seccion">
          <h3>Síguenos</h3>
          <div className="redes-sociales">
            <a
              href="https://wa.me/5215534936999"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="icon-link whatsapp"
            >
              <FaWhatsapp />
            </a>
            <a
              href="https://www.instagram.com/_analiticamente/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="icon-link instagram"
            >
              <FaInstagram />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Contacto;
