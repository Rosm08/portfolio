import React, { useEffect } from "react";

const Header = function () {
  useEffect(() => {
    const menuIcon = document.getElementById("menu-icon");
    const navbar = document.querySelector(".navbar");

    const toggleNavbar = () => {
      navbar.classList.toggle("active");
    };

    menuIcon.addEventListener("click", toggleNavbar);

    return () => {
      menuIcon.removeEventListener("click", toggleNavbar);
    };
  }, []);

  return (
    <header className="header">
      <a href="#" className="logo"><i className="fa-solid fa-briefcase"></i></a>
      <i className="fas fa-bars" id="menu-icon"></i>

      <nav className="navbar">
        <a href="#home" className="active">Inicio</a>
        <a href="#projects">Proyectos</a>
        <a href="#skills">Skills</a>
        <a href="#education">Educación</a>
      </nav>
    </header>
  );
}

export default Header;
