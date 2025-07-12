import React from "react";
import { AboutIcon } from "./AboutIcon";
import Scene06 from "../../public/scenes06.svg";
import { useTranslation } from "next-export-i18n";

interface AboutIconData {
  icon: string;
  width: number;
  height: number;
  label: string;
  description: string;
}

export const AboutSection: React.FC = () => {
  const { t } = useTranslation();

  const aboutIconData: AboutIconData[] = [
    {
      icon: "/simple.svg",
      width: 48,
      height: 39,
      label: t("IconAboutLabel1"),
      description: t("IconAboutDescription1"),
    },
    {
      icon: "/economico.svg",
      width: 37,
      height: 38,
      label: t("IconAboutLabel2"),
      description: t("IconAboutDescription2"),
    },
    {
      icon: "/segura.svg",
      width: 36,
      height: 39,
      label: t("IconAboutLabel3"),
      description: t("IconAboutDescription3"),
    },
    {
      icon: "/confiable.svg",
      width: 36,
      height: 39,
      label: t("IconAboutLabel4"),
      description: t("IconAboutDescription4"),
    },
    {
      icon: "/rentable.svg",
      width: 54,
      height: 39,
      label: t("IconAboutLabel5"),
      description: t("IconAboutDescription5"),
    },
  ];

  return (
    <div className="container-fixed">
      <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-center mb-12">
        
        {/* Illustration Column */}
        <div className="lg:col-span-2 flex justify-center lg:justify-start order-2 lg:order-1">
          <div className="w-full max-w-lg animate-fade-in-scale">
            <Scene06 className="w-full h-auto" />
          </div>
        </div>
        
        {/* Content Column */}
        <div className="lg:col-span-3 space-y-6 order-1 lg:order-2">
          
          {/* Title and Description */}
          <div className="text-center lg:text-left space-y-6">
            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight about-section-title">
              {t("titleAbout")}
            </h2>
            <div className="space-y-4">
              <p className="text-lg lg:text-xl text-legal-navy leading-relaxed font-medium">
                {t("descriptionAbout")}
              </p>
              <p className="text-base lg:text-lg font-semibold text-legal-blue">
                {t("descriptionAbout2")}
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Feature Icons Section - Below everything */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-6">
        {aboutIconData.map(
          ({ icon, width, height, label, description }, index) => (
            <div 
              key={`feature-${index}`}
              className="about-feature-card"
            >
              <AboutIcon
                icon={icon}
                width={width}
                height={height}
                label={label}
                description={description}
              />
            </div>
          )
        )}
      </div>
    </div>
  );
};
