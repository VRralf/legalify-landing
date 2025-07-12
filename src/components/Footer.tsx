import React from "react";
import InstagramIcon from "../../public/instagramIcon.svg";
import LinkedinIcon from "../../public/linkedinIcon.svg";
import FacebookIcon from "../../public/facebookIcon.svg";
import MediumIcon from "../../public/mediumIcon.svg";
import WhastappIcon from "../../public/whatsapp-logo-40.svg";
import { useLanguageQuery, useTranslation } from "next-export-i18n";
import ChatBot from "./ChatBot";

interface SocialMedia {
  label: string;
  image: string;
}

export const Footer: React.FC = () => {
  const SocialMedia: SocialMedia[] = [
    {
      label: "Instagram",
      image: "/instagramQR.png",
    },
    {
      label: "Facebook",
      image: "/facebookQR.png",
    },
    {
      label: "Linkedin",
      image: "linkedinQR.png",
    },
  ];

  const { t } = useTranslation();
  const [query] = useLanguageQuery();

  return (
    <div className="m-3 lg:m-6 mb-12 grid lg:grid-cols-3 gap-4">
      <div className="flex flex-col justify-left p- lg:p-0">
        <img
          src="/logo_legalify_azul_transparente.svg"
          width={139}
          height={49}
        />
        <div className="mt-4">
          <p className="text-legalify-primary max-w-[18rem]">
            {t("footerTitle")}
          </p>
        </div>
      </div>
      <div className="flex flex-col justify-center">
        <div className="flex justify-center">
          <div className="m-2 cursor-pointer">
            <a
              href="https://www.instagram.com/legalify.app/"
              rel="noreferrer"
              target="_blank"
            >
              <InstagramIcon />
            </a>
          </div>
          <div className="m-2 cursor-pointer">
            <a
              href="https://www.facebook.com/legalify.latam.3"
              rel="noreferrer"
              target="_blank"
            >
              <FacebookIcon />
            </a>
          </div>
          <div className="m-2 cursor-pointer">
            <a
              href="https://www.linkedin.com/company/legalify-latam/"
              rel="noreferrer"
              target="_blank"
            >
              <LinkedinIcon />
            </a>
          </div>
          <div className="m-2 cursor-pointer">
            <a
              href="https://medium.com/@Legalify.app"
              rel="noreferrer"
              target="_blank"
            >
              <MediumIcon />
            </a>
          </div>
        </div>
        <div className="m-2 text-center">
          <p className="text-legalify-primary">{t("footerDescription")}</p>
        </div>
      </div>
      <div className="grid grid-cols-3 gap2">
        {SocialMedia.map(({ label, image }, index) => (
          <div key={`label-${index}`}>
            <p className="ml-1 text-center">{label}</p>
            <img alt="Mountains" src={image} />
          </div>
        ))}
      </div>
      <ChatBot />
    </div>
  );
};
