import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaWhatsapp, FaUserMd } from "react-icons/fa";
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section contact">
          <h4>Ubicaciones</h4>
          <div className="location-list">
            <p>📍 Narvarte Oriente</p>
            <p>📍 Santa Fe</p>
          </div>
          <p>
            <a
              href="https://wa.me/5215512345678"
              target="_blank"
              rel="noreferrer"
              className="whatsapp-link"
              aria-label="WhatsApp"
              style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", color: "#25d366", fontWeight: "bold", textDecoration: "none" }}
            >
              <FaWhatsapp />
              Envíanos un mensaje por WhatsApp
            </a>
          </p>
        </div>
        <div className="footer-section social">
          <h4>Síguenos</h4>
          <div className="social-icons">
            <a href="https://wa.me/5215512345678" target="_blank" rel="noreferrer" className="whatsapp" aria-label="WhatsApp">
              <FaWhatsapp />
            </a>
            <a href="https://www.instagram.com/_analiticamente/" target="_blank" rel="noreferrer" className="instagram" aria-label="Instagram">
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2025 Analítica-mente. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
