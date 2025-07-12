import React from "react";
import Asesor360Form from "./Asesor360Form";
import { Logger } from "../utils/Logger";
import { getAssetPath } from "../utils/assetPath";

function PackStartups() {
  // Asume que 'Startups1.png', 'Startups2.png', etc. están en la carpeta 'public'
  const paginas = Array.from({ length: 9 }, (_, i) => getAssetPath(`startups${i + 1}.png`));

  Logger.log(paginas);
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      {paginas.map((pagina, index) => (
        <img
          key={index}
          src={pagina}
          alt={`Página ${index + 1}`}
          style={{ width: "70%", marginBottom: "1rem", alignItems: "center" }}
        />
      ))}
      <hr />
      <Asesor360Form />
    </div>
  );
}

export default PackStartups;
