import React from "react";
import Image from "next/image";
import { useTranslation } from "next-export-i18n";

interface Props {
  id: string;
}

export const AfiliadosSuperVielleSection: React.FC<Props> = ({ id }) => {
  const { t } = useTranslation();

  return (
    <div id={id}>
      <div className="grid my-10 lg:grid-cols-5 lg:m-3 lg:mt-12 lg:mb-[6rem]">
        <div className="lg:col-span-2 self-center">
          <div className="flex items-end my-6 md:w-[20rem] xl:w-[27rem] 2xl:w-[32rem]">
            <Image
              src="/afiliados/supervielle/logoES.png"
              alt="Supervielle Bank Logo"
              width={500}
              height={200}
              className="w-full object-cover rounded-lg"
              priority
            />
          </div>
        </div>
        <div className="lg:col-span-3 self-center">
          <div className="flex flex-col">
            <div className="mx-6 my-3 max-w-2xl">
              <h2 className="text-4xl text-legalify-primary font-semibold">
                {t("SupervielleTitle")}
              </h2>
              <p className="text-legalify-primary text-lg font-normal">
                {t("SupervielleDescription")}
              </p>
              <div className="m-3 lg:m-6">
                <button
                  className="group px-8 py-3.5 rounded-lg text-sm md:text-lg bg-legalify-primary text-white 
                           hover:bg-legalify-secondary hover:text-legalify-primary 
                           transform hover:scale-105 transition-all duration-300 
                           shadow-md hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-legalify-primary/30
                           font-medium border-2 border-transparent hover:border-legalify-primary"
                  onClick={() => (window.location.href = `/aliados/supervielle`)}
                  aria-label="Ir a página de Supervielle"
                >
                  <span className="flex items-center gap-2">
                    {t("supervielleDescription2")}
                    <svg 
                      className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
