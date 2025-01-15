import React from "react";
import { Carousel } from "react-responsive-carousel";
import TWimagen1 from "../assets/miTurnoWeb/TWimagen1.png"
import TWimagen2 from "../assets/miTurnoWeb/TWimagen2.png"
import TWimagen3 from "../assets/miTurnoWeb/TWimagen3.png"
import TWimagen4 from "../assets/miTurnoWeb/TWimagen4.png"
import TWimagen5 from "../assets/miTurnoWeb/TWimagen5.png"
import TWimagen6 from "../assets/miTurnoWeb/TWimagen6.png"
import BDimagen1 from "../assets/appBox/BDimagen1.png"
import BDimagen2 from "../assets/appBox/BDimagen2.png"
import BDimagen3 from "../assets/appBox/BDimagen3.png"
import BDimagen4 from "../assets/appBox/BDimagen4.png"
import BDimagen5 from "../assets/appBox/BDimagen5.png"
import devintech1 from "../assets/devinTech/devintech1.png"
import devintech2 from "../assets/devinTech/devintech2.png"
import devintech3 from "../assets/devinTech/devintech3.png"
import devintech4 from "../assets/devinTech/devintech4.png"
import devintech5 from "../assets/devinTech/devintech5.png"
import NoCountry from '../assets/RosmariLedesma.jpg';


import "react-responsive-carousel/lib/styles/carousel.min.css"; // Importa los estilos del carrusel
const Projects= function(){
return(
  <section className="services" id="projects">
      <h2 className="heading">
        <span>Proyectos</span>
      </h2>
      <div className="services-container">
        {/* Proyecto 3 */}
        <div className="services-box">
          <div className="services-info">
            <h4>
             DevinTech-NoCountry |<i class="fa-solid fa-cart-shopping"></i>
            </h4>
            <h2>Rol: Backend Developer </h2>
            <br />
    
            <p>DevinTech es una plataforma de e-commerce especializada en la venta de productos audiovisuales e informáticos. Está diseñada para ofrecer una experiencia versátil y funcional, con tres perfiles de usuario: administrador, vendedor y cliente.

               Un aspecto innovador de DevinTech es que un cliente puede evolucionar fácilmente a un perfil de vendedor, gestionando su propia tienda virtual desde una interfaz personalizada y dinámica que incluye estadísticas detalladas y herramientas de personalización.

               Además, como cliente, la plataforma prioriza la seguridad en las compras, recomendaciones personalizadas y guías intuitivas que aseguran una experiencia de usuario confiable y satisfactoria.
             <br/>
              <i class="fa-solid fa-screwdriver-wrench"></i>
              Tecnologías principales: JavaScript, vite.js & React.js, Node.js, Express.js y PostgreSQL.
              <br />
              <a
                href="https://github.com/No-Country-simulation/c21-36-n-node-react"
                target="_blank"
                rel="noopener noreferrer"
              >
                ver repositorio <i className="fa-solid fa-code"></i>
              </a>
              <br/>
              <a
                href={NoCountry}
                download="RosmariLedesma.jpg"
              >
               Descargar certificado <i class="fa-solid fa-download"></i>
              </a>
              

              
            </p>
            <br/>
            <Carousel showThumbs={false} autoPlay infiniteLoop>
              <div>
                <img src={devintech1} alt="DevinTech 1" />
              </div>
              <div>
                <img src={devintech2} alt="DevinTech 2" />
              </div>
              <div>
                <img src={devintech3} alt="DevinTech 3" />
              </div>
              <div>
                <img src={devintech4} alt="DevinTech 4" />
              </div>
              <div>
                <img src={devintech5} alt="DevinTech 5" />
              </div>
            
            </Carousel>
          </div>
        </div>
        {/* Proyecto 2 */}
        <div className="services-box">
          <div className="services-info">
            <h4>
              App Box Delivery | <i className="fa-solid fa-boxes-stacked"></i>
            </h4>
            <h2>Rol: Developer Full Stack</h2>
            <br />
    
            <p>
              Box Delivery es una aplicación Mobile First, diseñada y pensada
              para empresas de logística, para que puedan monitorear la
              operación de repartidores, asignar o reasignar paquetes e
              intervenir en caso que haga falta editar un envío modificando el
              domicilio o para asignarle el envío a otro repartidor.<br/>
              <i class="fa-solid fa-screwdriver-wrench"></i>
              Tecnologías principales: TypeScript, React.js, Next.js, Node.js, Express.js y PostgreSQL.
              <br />
              <a
                href="https://github.com/Rosm08/BoxDeliveryFrontend/blob/319fb6c10f0fcfabd22b454c7fbda9a9ac81b84d/README.md"
                target="_blank"
                rel="noopener noreferrer"
              >
                ver repositorio <i className="fa-solid fa-code"></i>
              </a>
            </p>
            <br/>
            <Carousel showThumbs={false} autoPlay infiniteLoop>
              <div>
                <img src={BDimagen1} alt="box delivery 1" />
              </div>
              <div>
                <img src={BDimagen2} alt="box delivery 2" />
              </div>
              <div>
                <img src={BDimagen3} alt="box delivery 3" />
              </div>
              <div>
                <img src={BDimagen4} alt="box delivery 4" />
              </div>
              <div>
                <img src={BDimagen5} alt="box delivery 5" />
              </div>
            
            </Carousel>
          </div>
        </div>

        {/* Proyecto 1 */}
        <div className="services-box">
          <div className="services-info">
            <h4>
              Mi Turno Web | <i className="fa-solid fa-calendar-days"></i>
            </h4>
            <h2>Rol: Developer Full Stack</h2>
            <br />
            
            <p>
              Esta aplicación web facilita la reserva de turnos para empresas
              con múltiples sucursales físicas. Permite a los usuarios reservar
              turnos, mientras que los administradores controlan la capacidad de
              clientes por sucursal y los horarios disponibles. Las reservas
              pueden cancelarse con anticipación, y proporcionamos a los
              comercios un panel gráfico para visualizarlas y obtener métricas
              basadas en las reservas realizadas.<br/>
              <i class="fa-solid fa-screwdriver-wrench"></i>
              Tecnologías principales: JavaScript, React.js, Node.js, Express.js y PostgreSQL. 
              <br />
              <a
                href="https://github.com/Rosm08/mi-turno-web-front/blob/cc37e22dcf353827dc6d647b1a069191caa0ef8d/README.md"
                target="_blank"
                rel="noopener noreferrer"
              >
                ver repositorio <i className="fa-solid fa-code"></i>
              </a>
            </p>
            <Carousel showThumbs={false} autoPlay infiniteLoop>
            <div>
                <img src={TWimagen1} alt="mi turno web 1" />
              </div>
              <div>
                <img src={TWimagen2} alt="mi turno web 2" />
              </div>
              <div>
                <img src={TWimagen3} alt="mi turno web 3" />
              </div>
              <div>
                <img src={TWimagen4} alt="mi turno web 4" />
              </div>
              <div>
                <img src={TWimagen5} alt="mi turno web 5" />
              </div>
              <div>
                <img src={TWimagen6} alt="mi turno web 6" />
              </div>
            </Carousel>
          </div>
        </div>
      </div>
    </section>
)

}

export default Projects