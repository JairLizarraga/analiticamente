import React, { useState, useEffect } from "react";
import "./ScrollButtons.css";

const sectionIds = [
  "home",
  "services",
  "about",
  "social",
  "contact",
];

const ScrollButtons: React.FC = () => {
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2; // Punto medio viewport

      // Encontrar la sección donde el scroll está centrado
      const index = sectionIds.findIndex((id) => {
        const el = document.getElementById(id);
        if (!el) return false;

        const top = el.offsetTop;
        const bottom = top + el.offsetHeight;
        return scrollPosition >= top && scrollPosition < bottom;
      });

      if (index !== -1 && index !== currentSectionIndex) {
        setCurrentSectionIndex(index);
      }
    };

    window.addEventListener("scroll", onScroll);
    onScroll(); // chequeo inicial

    return () => window.removeEventListener("scroll", onScroll);
  }, [currentSectionIndex]);

  const scrollToSection = (index: number) => {
    if (index < 0 || index >= sectionIds.length) return;
    const el = document.getElementById(sectionIds[index]);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setCurrentSectionIndex(index);
    }
  };

  return (
    <>
      {currentSectionIndex > 0 && (
        <button
          className="scroll-btn scroll-btn-up"
          onClick={() => scrollToSection(currentSectionIndex - 1)}
          aria-label="Scroll Up"
          title="Ir arriba"
        >
          ▲
        </button>
      )}
      {currentSectionIndex < sectionIds.length - 1 && (
        <button
          className="scroll-btn scroll-btn-down"
          onClick={() => scrollToSection(currentSectionIndex + 1)}
          aria-label="Scroll Down"
          title="Ir abajo"
        >
          ▼
        </button>
      )}
    </>
  );
};

export default ScrollButtons;
