import React from "react";
import Image from "next/image";
import { LanguageSwitcher } from "next-export-i18n";

const Language = () => {
  const languages = [
    { code: "es", name: "Español", flag: "/Flags/ESFlag.png" },
    { code: "en", name: "English", flag: "/Flags/ENFlag.png" },
    { code: "it", name: "Italiano", flag: "/Flags/ITFlag.png" }
  ];

  return (
    <div className="flex items-center space-x-2" role="group" aria-label="Selector de idioma">
      {languages.map((lang) => (
        <LanguageSwitcher key={lang.code} href="/" lang={lang.code}>
          <button
            className="p-1 rounded-lg hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-legalify-accent"
            aria-label={`Cambiar idioma a ${lang.name}`}
            title={lang.name}
          >
            <Image
              src={lang.flag}
              alt={`${lang.name} flag`}
              width={28}
              height={28}
              className="rounded-sm"
            />
          </button>
        </LanguageSwitcher>
      ))}
    </div>
  );
};

export default Language;
