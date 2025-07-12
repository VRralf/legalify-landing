import React from "react";
import Image from "next/image";
import { Button } from "./Button";
import Link from "next/link";
import Scene01 from "../../public/scenes01.svg";
import { useLanguageQuery, useTranslation } from "next-export-i18n";

interface Props {
  checked: boolean;
  setChecked: React.Dispatch<React.SetStateAction<boolean>>;
}

export const IntroSection: React.FC<Props> = ({ setChecked }) => {
  const { t } = useTranslation();
  const [query] = useLanguageQuery();

  return (
    <section className="min-h-[80vh] flex items-center justify-center py-8 lg:py-16" aria-labelledby="hero-title">
      <div className="grid lg:grid-cols-5 gap-8 lg:gap-16 items-center max-w-7xl mx-auto px-4">
        
        {/* Content Column */}
        <div className="lg:col-span-3 text-center lg:text-left space-y-6 lg:space-y-8 lg:pr-8">
          
          {/* Mobile Logo */}
          <div className="flex sm:hidden justify-center mb-8">
            <Image
              src="/logo_legalify_azul_transparente_white.png"
              alt="Legalify logo"
              height={40}
              width={114}
              className="h-10 w-auto"
              priority
            />
          </div>
          
          {/* Hero Title */}
          <h1 
            id="hero-title"
            className="hero-title text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold leading-snug md:leading-tight animate-slide-up"
          >
            {t("titleIntro")}
          </h1>
          
          {/* Hero Description */}
          <p className="hero-description text-lg md:text-xl leading-relaxed animate-slide-up">
            {t("descriptionIntro")}
          </p>
          
          {/* Primary CTA */}
          <div className="animate-scale-in">
            <Link href="/#evolve">
              <a onClick={() => setChecked(false)}>
                <Button 
                  label={t("buttonIntro")} 
                  paramQuery="/../registro-cliente"
                  size="lg"
                  className="w-full sm:w-auto"
                />
              </a>
            </Link>
          </div>
          
          {/* Financial Info Section */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 animate-fade-in">
            <p className="text-base md:text-lg font-medium text-white mb-4">
              {t("financialText")}
            </p>
            <Link href="mailto:info@legalify.app?subject=Solicitud de información de financiamiento">
              <a>
                <Button 
                  label={t("financialButton")} 
                  variant="outline"
                  size="md"
                  className="w-full sm:w-auto border-white text-white hover:bg-white hover:text-legal-navy"
                />
              </a>
            </Link>
          </div>
        </div>
        
        {/* Illustration Column */}
        <div className="lg:col-span-2 flex justify-center lg:justify-end">
          <div className="w-full max-w-lg animate-bounce-subtle">
            <Scene01 className="w-full h-auto" />
          </div>
        </div>
      </div>
    </section>
  );
};
