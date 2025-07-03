import React from "react";
import "./About.css";
import teamPhoto from "../../assets/About/profilepic.jpg";

const About: React.FC = () => {
  return (
    <section className="about" id="about">
      <div className="about-content">
        {/* Image now comes first */}
        <div className="about-image">
          <img src={teamPhoto} alt="Nuestro equipo terapéutico" />
        </div>

        {/* Text now comes second (on the right) */}
        <div className="about-text">
          <h2>Sobre mí</h2>
          <p>
            Soy psicóloga clínica, maestrante en Terapia Cognitivo Conductual. Me he formado en arteterapia y he trabajado junto a terapeutas con enfoques Gestáltico, Dialéctico Conductual (DBT) e integrativo a lo largo de 8 años. Esta combinación me ha permitido acompañar desde distintas miradas, con sensibilidad y profesionalismo.
          </p>
          <p>
            Te acompaño con respeto, empatía y compromiso, para que puedas entender mejor lo que sentís, romper esos ciclos que generan malestar y encontrar caminos que realmente funcionen para vos y te ayuden a estar más en paz contigo y con tu entorno.
          </p>
          <p>
            Una de las herramientas que utilizo es la Terapia Cognitivo Conductual (TCC). Para explicarla de forma sencilla, imagina que tus pensamientos son pequeñas frases que pasan por tu cabeza sin que las invites. Algunas son rápidas, como “No puedo” o “Esto va a salir mal” — esos son los pensamientos automáticos.
          </p>
          <p>
            Debajo de esas frases hay ideas que usás como reglas internas, sin darte cuenta, como “Si no soy perfecta, no me van a querer”. Y más profundo aún, están las creencias que aprendiste desde siempre, como “No merezco ser feliz” o “No puedo confiar en nadie”.
          </p>
          <p>
            En terapia, te ayudo a observar esas frases e ideas, a entender de dónde vienen y a encontrar nuevas formas de escucharlas para que te lastimen menos y te acompañen mejor.
          </p>
          <p>
            Creo profundamente en la escucha sincera y en que cada proceso es único. Mi compromiso es acompañarte sin apurar, con creatividad y respeto, para que puedas construir tu propio camino.
          </p>
          <p>
            Si sientes que este es el espacio que buscás, te invito a conocer cómo trabajo y a dar el siguiente paso en tu proceso…
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
