import React from "react";

const Header = function () {
  return(
    <header class="header">
    <a href="#" class="logo"><i class="fa-solid fa-briefcase"></i></a>
    <i class="fas fa-bars" id="menu-icon"></i>

    <nav class="navbar">
      <a href="#home" class="active">Inicio</a>
      <a href="#projects">Proyectos</a>
      <a href="#skills">Skills</a>
      <a href="#education">Educacion</a>
      <a href="#contact">Contacto</a>
    </nav>
  </header>
  )
}

export default Header