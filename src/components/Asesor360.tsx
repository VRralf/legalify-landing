import React from "react";
import Asesor360Form from "./Asesor360Form";

function Asesor360() {
  return (
    <div className="container mx-auto max-w-5xl m-auto">
      <div className="banner flex justify-center items-center">
        <img
          src="BannerAsesor.png"
          alt="Descripción de la imagen"
          className="w-full md:w-1/2"
        />
      </div>
      <div className="section flex flex-col md:flex-row items-center border-b border-legalify-primary py-5 h-auto">
        <img
          src="imagen1.png"
          alt="Descripción de la imagen"
          className="w-1/4 h-1/4 md:w-1/8 md:h-1/8 lg:w-1/16 lg:h-1/16 object-cover mx-auto md:mx-0"
        />
        <div className="content w-full md:w-1/2 px-5 order-last md:order-first">
          <h2 className="text-2xl mb-3 text-legalify-primary font-semibold text-center">
            ¿Qué es Programa Asesor360?
          </h2>
          <p>
            En Legalify desarrollamos el Programa Asesor360 pensando en
            corporaciones y comunidades. Es un benefició corporativo que agrega
            valor a las comunidades a muy bajo costo. Los servicios ofrecen una
            red de apoyo con profesionales expertos en temas legales, bienestar
            emocional y financieros disponibles para resolver consultas de
            manera virtual.
          </p>
        </div>
      </div>

      <div className="section flex flex-col md:flex-row items-center border-b border-legalify-primary py-5 h-auto">
        <img
          src="imagen2.png"
          alt="Descripción de la imagen"
          className="w-1/4 h-1/4 md:w-1/8 md:h-1/8 lg:w-1/16 lg:h-1/16 object-cover"
        />
        <div className="content w-full md:w-1/2 px-5 order-last md:order-first">
          <h2 className="text-2xl mb-3 text-legalify-primary font-semibold text-center">
            Asesoramiento Legal
          </h2>
          <p>
            Asesoramiento Legal Más de 1000 abogados en todo el país y más de
            20.000 consultas resueltas avalan nuestra trayectoria.
            Especialidades: derecho familia y sucesiones, civil y comercial,
            tributario, defensa al consumidor, violencia de género, migraciones
            y más. <br />
            <br />
            <strong className="text-legalify-primary">
              Propuestas a medida de cada organización <br />
            </strong>
            <br />
            <strong className="text-legalify-primary">
              *IMPORTANTE: Las especialidades se pueden ampliar o restringir a
              medida de cada organización.{" "}
            </strong>
          </p>
        </div>
      </div>

      <div className="section flex flex-col md:flex-row items-center border-b border-legalify-primary py-5 h-auto">
        <img
          src="imagen3.png"
          alt="Descripción de la imagen"
          className="w-1/4 h-1/4 md:w-1/8 md:h-1/8 lg:w-1/16 lg:h-1/16 object-cover"
        />
        <div className="content w-full md:w-1/2 px-5 order-last md:order-first">
          <h2 className="text-2xl mb-3 text-legalify-primary font-semibold text-center">
            Asesoramiento Financiero
          </h2>
          <p>
            Profesionales brindarán asesoramiento y capacitación en distintos
            temas cotidianos que ayudan a la salud financiera de la familia:
            <br />
            <br />
            <ul className="listadoAsesoramiento">
              <li>
                Consultas para cumplir objetivos financieros para ahorrar, hacer
                inversiones básicas, ahorrar o adquirir bienes. <br /> <br />
              </li>
              <li>Capacitaciones periódicas para grupos de empleados</li>
            </ul>
          </p>
        </div>
      </div>

      <div className="section flex flex-col md:flex-row items-center border-b border-legalify-primary py-5 h-auto">
        <img
          src="imagen4.png"
          alt="Descripción de la imagen"
          className="imageSec"
        />
        <div className="content w-full md:w-1/2 px-5 order-last md:order-first">
          <h2 className="text-2xl mb-3 text-legalify-primary font-semibold text-center">
            Asesoramiento Psicológico
          </h2>
          <p>
            Servicio brindado en alianza con plataformas especializadas en el
            tema con el objeto de dar un servicio integral a las empresas para
            cubrir consultas como:
          </p>
          <ul className="listadoAsesoramiento">
            <li>Conflictos de pareja o familiares</li>
            <li>Problemas con niños o adolescentes.</li>
            <li>Maternidad / Paternidad.</li>
            <li>Ansiedad, depresión, estrés.</li>
            <li>Cambio de hábitos.</li>
            <li>Duelo</li>
            <li>Balance de la vida personal y laboral</li>
          </ul>
        </div>
      </div>

      <div className="section flex flex-col md:flex-row items-center border-b border-legalify-primary py-5 h-auto">
        <img
          src="imagen5.png"
          alt="Descripción de la imagen"
          className="w-1/4 h-1/4 md:w-1/8 md:h-1/8 lg:w-1/32 lg:h-1/32 object-cover"
        />
        <div className="content w-full md:w-1/2 px-5 order-last md:order-first">
          <h2 className="text-2xl mb-3 text-legalify-primary font-semibold text-center">
            Beneficios{" "}
          </h2>
          <p>
            Nuestro objetivo es proporcionar un enfoque holístico que contribuya
            a atender los desafíos que los individuos y las familias puedan
            tener en su vida personal y laboral.
          </p>
          <br />
          <p className="text-legalify-primary font-semibold underline">
            Beneficios comprobables:
          </p>
          <ul className="listadoAsesoramiento">
            <li>Reducción del estrés y la ansiedad</li>
            <li>Prevención de conflictos legales</li>
            <li>Tranquilidad Financiera</li>
            <li>Mejora del ambiente laboral</li>
            <li>Reducción de licencias laborales</li>
            <li>Fidelización</li>
          </ul>
          <p className="text-legalify-primary font-semibold underline">
            Otros servicios opcionales
          </p>
          <ul className="listadoAsesoramiento">
            <li>Asesoramiento en temas de nutrición</li>
            <li>
              Beneficios de descuento en plataformas legaltech y taxtech para la
              comunidad
            </li>
          </ul>
        </div>
      </div>
      <Asesor360Form />
    </div>
  );
}

export default Asesor360;
