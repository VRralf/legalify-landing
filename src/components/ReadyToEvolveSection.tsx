import React from "react";
import EvolveScene from "../../public/evolveScene.svg";
import YouTubeLogo from "../../public/youTubeLogo.svg";
import { useTranslation } from "next-export-i18n";

interface Props {
  id: string;
}

const ReadyToEvolveSection: React.FC<Props> = ({ id }) => {
  const { t } = useTranslation();

  return (
    <div className="ready-to-evolve-container" id={id}>
      <div className="ready-to-evolve-grid">
        {/* Content Section */}
        <div className="ready-to-evolve-content">
          <div className="ready-to-evolve-text-wrapper">
            {/* Title */}
            <div className="ready-to-evolve-title-section">
              <h2 className="ready-to-evolve-title">
                {t("ReadyTitle")}
              </h2>
            </div>
            
            {/* Description */}
            <div className="ready-to-evolve-description-section">
              <p className="ready-to-evolve-description-primary">
                {t("ReadyDescription")}
              </p>
              <p className="ready-to-evolve-description-secondary">
                {t("ReadyDescription2")}
              </p>
            </div>
            
            {/* YouTube CTA */}
            <div className="ready-to-evolve-cta-section">
              <a
                href="https://www.youtube.com/playlist?list=PLPcJgVIaFR40H38ttI3QDVHGP7HB-moe-"
                rel="noreferrer"
                target="_blank"
                className="ready-to-evolve-youtube-link"
                aria-label="Ver tutoriales de Legalify en YouTube"
              >
                <div className="ready-to-evolve-youtube-icon">
                  <YouTubeLogo />
                </div>
                <span className="ready-to-evolve-youtube-text">
                  {t("ReadyDescription3")}
                </span>
              </a>
            </div>
          </div>
        </div>
        
        {/* Image Section */}
        <div className="ready-to-evolve-image-section">
          <div className="ready-to-evolve-image-wrapper">
            <EvolveScene />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReadyToEvolveSection;
