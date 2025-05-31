import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaWhatsapp, FaUserMd } from "react-icons/fa";
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-content">

        <div className="footer-section contact">
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

        <div className="footer-section links">
          <h4>Enlaces</h4>
          <ul>
            <li><a href="#hero">Inicio</a></li>
            <li><a href="#services">Servicios</a></li>
            <li><a href="#contact">Contacto</a></li>
            <li><a href="/aviso-privacidad">Aviso de privacidad</a></li>
          </ul>
        </div>

        <div className="footer-section social">
          <h4>Síguenos</h4>
            <div className="social-icons">
              <a href="https://wa.me/5215512345678" target="_blank" rel="noreferrer" className="whatsapp" aria-label="WhatsApp">
                <FaWhatsapp />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noreferrer" className="facebook" aria-label="Facebook">
                <FaFacebook />
              </a>
              <a href="https://www.instagram.com/_analiticamente/" target="_blank" rel="noreferrer" className="instagram" aria-label="Instagram">
                <FaInstagram />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="linkedin" aria-label="LinkedIn">
                <FaLinkedin />
              </a>
              <a href="https://www.doctoralia.com.mx/tu-nombre-o-id" target="_blank" rel="noreferrer" className="doctoralia" aria-label="Doctoralia">
                <FaUserMd />
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
