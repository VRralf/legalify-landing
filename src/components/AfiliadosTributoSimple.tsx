import React from "react";

const AfiliadosTributoSimple = () => {
  return (
    <div className="flex items-center tribContainer">
      {" "}
      {/* Aquí he añadido items-center para centrar los elementos */}
      <div className="flex my-6 md:w-[5rem] xl:w-[8.5rem] 2xl:w-[11rem] imgContainer">
        <img
          src={"afiliados/tributoSimple/TributoSimpleLogo.jpeg"}
          className="w-full h-[8rem] object-cover rounded-lg"
        />
      </div>
      <div className="lg:col-span-3 self-center">
        <div className="flex flex-col">
          <div className="mx-6 my-3 max-w-2xl textContainer">
            <h2 className="text-4xl text-legalify-primary font-semibold mb-3">
              Tributo Simple y Legalify.
            </h2>
            <p className="text-legalify-primary text-lg font-normal">
              Tributo Simple es una App que facilita a los pequeños
              contribuyentes de LATAM llevar su administración y contabilidad de
              forma sencilla, segura y accesible. Se descarga de forma gratuita
              y cuenta con servicios gratis, como la facturación, y pagos, como
              las declaraciones juradas.
            </p>
            <div className="m-3 lg:m-6">
              <button
                className="px-6 py-2.5 rounded-lg text-[13.55px] md:text-lg bg-legalify-primary text-white hover:bg-legalify-secondary hover:text-legalify-primary"
                onClick={() =>
                  (window.location.href = `/aliados/tributoSimple`)
                }
              >
                <p className="font-medium">Ir a promoción</p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AfiliadosTributoSimple;
