import React from "react";

const AboutMe = function(){
 return(
  <section class="home" id="home">
    <div class="home-img">
      <img src="./assets/icons/ReadyPlayerMe-Avatar.jpeg" alt="" />
    </div>
    <div class="home-content">
      <h1>Hola!, soy <span>Rosmari Ledesma</span></h1>

      <h3 class="typing-text">Una <span></span></h3>
      <br />
      <br />
      <p>
        Soy una desarrolladora Full Stack certificada, recientemente graduada
        de un bootcamp de desarrollo web intensivo de 7 meses. Durante este
        programa, adquirí habilidades en front-end y back-end, creé juntos con
        mis repectivos equipos dos aplicaciones web completas con diferentes
        tecnologías. Además de fortalecer mis habilidades técnicas, también
        desarrollé habilidades blandas como comunicación efectiva y trabajo en
        equipo, aspectos que considero esenciales para alcanzar los objetivos
        de manera efectiva y desarrollar proyectos exitosos.Estoy emocionada
        por aplicar mis conocimientos en nuevos proyectos innovadores.
      </p>
      <div class="social-icon">
        <a
          href="https://www.linkedin.com/in/rosmari-serena-ledesma-britez-developer/"
          target="_blank"
        ><i class="fa-brands fa-linkedin"></i></a>
        <a href="https://github.com/Rosm08" target="_blank"
        ><i class="fa-brands fa-github"></i></a>
        <a
          href="mailto:rochilesde08@gmail.com?subject=Consulta&body=Hola"
          class="email-link"
          target="_blank"
        ><i class="fa-solid fa-envelope"></i></a>
      </div>

      <a
        href="./assets/CVRosmariLedesma.pdf"
        download="CV Rosmari Ledesma.pdf"
        class="btn"
      >Descargar CV <i class="fa-solid fa-download"></i></a>
    </div>
  </section>
)
}
export default AboutMe
