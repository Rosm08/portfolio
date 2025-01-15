import React from "react";
import bootcamp from '../assets/ROSMARILEDESMACertificadoJavaScriptBootcamp2023.pdf';
const Educacion = function(){
  return(

    <section class="education" id="education">
      <h2 class="heading"><span>Educación</span></h2>
      <div class="timeline">
        <div class="container right">
          <div class="content">
            <div class="tag">
              <h2>universidad buenos aires | 03/24 - presente</h2>
            </div>
            <div class="decs">
              <p>cursando la carrera de ingenieria informatica</p>
            </div>
          </div>
        </div>
        <div class="container left">
          <div class="content">
            <div class="tag">
              <h2>Plataforma 5 - Coding Bootcamp (09/2023 - 03/2024)</h2>
            </div>
            <div class="decs">
              <p>
                certificación: Full stack web developer
                <br />
                Bootcamp full time, +800hs Formación intensiva: Pair
                programming, proyectos individuales y en equipos, metodología
                ágil Scrum y Trello, desarrollo de habilidades técnicas y de
                comunicación efectiva.
              </p>
              <br/>
              <a
              href={bootcamp}
              download="ROSMARILEDESMACertificadoJavaScriptBootcamp2023.pdf"
              class="btn"
              >Descargar certificado <i class="fa-solid fa-download"></i></a>
            </div>
          </div>
        </div>
        <div class="container right">
          <div class="content">
            <div class="tag">
              <h2>E.E.S n°3 de quilmes prof.F.j.salustio | 2017-2022</h2>
            </div>
            <div class="decs">
              <p>
                Título: Bachiller en Economía y Administración, itinerario
                formativo en Administración de Recursos Humanos.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Educacion