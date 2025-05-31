import React, { useState } from "react";

const Contact: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Gracias, ${name}. Te contactaremos pronto.`);
    // Aquí puedes agregar lógica para enviar el formulario a backend o email
  };

  return (
    <section id="contact" style={{ padding: "2rem" }}>
      <h3>Contacto</h3>
      <form onSubmit={handleSubmit} style={{ maxWidth: 400, margin: "auto" }}>
        <div style={{ marginBottom: "1rem" }}>
          <label>Nombre:</label><br />
          <input 
            type="text" 
            value={name} 
            onChange={e => setName(e.target.value)} 
            required 
            style={{ width: "100%" }}
          />
        </div>
        <div style={{ marginBottom: "1rem" }}>
          <label>Email:</label><br />
          <input 
            type="email" 
            value={email} 
            onChange={e => setEmail(e.target.value)} 
            required 
            style={{ width: "100%" }}
          />
        </div>
        <div style={{ marginBottom: "1rem" }}>
          <label>Mensaje:</label><br />
          <textarea 
            value={message} 
            onChange={e => setMessage(e.target.value)} 
            required 
            style={{ width: "100%" }}
          />
        </div>
        <button type="submit" style={{ padding: "0.5rem 1rem" }}>Enviar</button>
      </form>
    </section>
  );
};

export default Contact;
