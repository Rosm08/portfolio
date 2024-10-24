import React from "react";

const Footer= function(){
  return(
    <footer className="footer">
    <div className="social">
      <a
        href="https://www.linkedin.com/in/rosmari-serena-ledesma-britez-developer/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fa-brands fa-linkedin"></i>
      </a>
      <a href="https://github.com/Rosm08" target="_blank" rel="noopener noreferrer">
        <i className="fa-brands fa-github"></i>
      </a>
      <a
        href="mailto:rochilesde08@gmail.com?subject=Consulta&body=Hola"
        className="email-link"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fa-solid fa-envelope"></i>
      </a>
    </div>
    <ul>
      <li><a href="#home">Inicio</a></li>
      <li><a href="#projects">Proyectos</a></li>
      <li><a href="#contact">Contacto</a></li>
    </ul>
    <p className="copyright">Rosmari Ledesma code | All Rights Reserved</p>
  </footer>
  
  )
}

export default Footer