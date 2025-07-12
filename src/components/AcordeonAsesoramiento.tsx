import React, { useState } from "react";
import Asesor360 from "./Asesor360";
import PackStartups from "./PackStartups";

function AcordeonCombinado() {
  const [isOpenAsesor, setIsOpenAsesor] = useState(false);
  const [isOpenStartup, setIsOpenStartup] = useState(false);

  return (
    <div
      style={{ width: "100%", border: "1px solid #ccc", borderRadius: "4px" }}
    >
      <button
        onClick={() => setIsOpenAsesor(!isOpenAsesor)}
        style={buttonStyle}
      >
        <span className="text-2xl mb-3 text-legalify-primary font-semibold">
          {isOpenAsesor ? (
            <span style={{ color: "red" }}>X</span>
          ) : (
            "Programa asesoramiento 360 para colaboradores de empresas"
          )}
        </span>
        <span style={{ transform: isOpenAsesor ? "rotate(0.5turn)" : "" }}>
          ▼
        </span>
      </button>
      {isOpenAsesor && (
        <div style={contentStyle}>
          <Asesor360 />
        </div>
      )}
      <hr style={{ margin: "1rem 0" }} /> {/* Aquí se agrega el divisor */}
      <button
        onClick={() => setIsOpenStartup(!isOpenStartup)}
        style={buttonStyle}
      >
        <span className="text-2xl mb-3 text-legalify-primary font-semibold">
          {isOpenStartup ? (
            <span style={{ color: "red" }}>X</span>
          ) : (
            "Packs de asesoramiento legal para startups"
          )}
        </span>
        <span style={{ transform: isOpenStartup ? "rotate(0.5turn)" : "" }}>
          ▼
        </span>
      </button>
      {isOpenStartup && (
        <div style={contentStyle}>
          <PackStartups />
        </div>
      )}
    </div>
  );
}

const buttonStyle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  width: "100%",
  padding: "1rem",
  backgroundColor: "#f5f5f5",
  cursor: "pointer",
};

const contentStyle = {
  padding: "1rem",
  borderTop: "1px solid #ccc",
};

export default AcordeonCombinado;
