import React, { useEffect } from "react";
import "./InstagramWidget.css"; // Asegúrate de que este archivo esté estilizado correctamente

const InstagramWidget: React.FC = () => {
  useEffect(() => {
    const scriptId = "lightwidget-script";
    if (!document.getElementById(scriptId)) {
      const script = document.createElement("script");
      script.src = "https://cdn.lightwidget.com/widgets/lightwidget.js";
      script.id = scriptId;
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <section id="social" className="instagram-section">
      <h2 className="instagram-title">Síguenos en Instagram</h2>
      <div className="instagram-widget-wrapper">
        <iframe
          src="https://cdn.lightwidget.com/widgets/b5ae71e2e65f585e8699dd3328e7ac4a.html"
          scrolling="no"
          allowTransparency={true}
          className="lightwidget-widget"
          style={{ width: "100%", border: 0, overflow: "hidden" }}
          title="Instagram Feed"
        ></iframe>
      </div>
    </section>
  );
};

export default InstagramWidget;