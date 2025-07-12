import React from "react";
import Image from "next/image";
import { Rounded } from "./Rounded";
import { useTranslation } from "next-export-i18n";

export const ServiceSection: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="w-full" id="service">
      {/* Modern Section Header */}
      <div className="text-center mb-24">
        <h2 className="services-section-title-light text-4xl md:text-5xl lg:text-6xl font-bold mb-8 relative">
          {t("serviceTitle")}
        </h2>
      </div>
      
      {/* Modern Services Grid */}
      <div className="services-custom-grid">
        {/* Service Item 1 */}
        <div className="service-card group">
          <div className="service-card-horizontal">
            <div className="service-card-image-horizontal">
              <div className="flex items-center justify-center space-x-2">
                <Image 
                  src="/component02.svg" 
                  alt="Component illustration" 
                  width={120} 
                  height={120}
                  priority
                  className="service-image-clean"
                />
                <Image 
                  src="/component05.svg" 
                  alt="Component illustration" 
                  width={120} 
                  height={120}
                  priority
                  className="service-image-clean"
                />
              </div>
            </div>
            <div className="service-card-content-horizontal">
              <div className="service-card-header-horizontal">
                <Rounded label="1" />
                <div className="service-card-text-horizontal">
                  <p className="font-semibold text-legal-navy leading-relaxed group-hover:text-legal-blue transition-colors duration-300">
                    {t("serviceItem1")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Service Item 2 */}
        <div className="service-card group">
          <div className="service-card-horizontal">
            <div className="service-card-image-horizontal">
              <Image 
                src="/scenes08.svg" 
                alt="Service illustration" 
                width={120} 
                height={120}
                priority
                className="service-image-clean"
              />
            </div>
            <div className="service-card-content-horizontal">
              <div className="service-card-header-horizontal">
                <Rounded label="2" />
                <div className="service-card-text-horizontal">
                  <p className="font-semibold text-legal-navy leading-relaxed group-hover:text-legal-blue transition-colors duration-300">
                    {t("serviceItem2")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Service Item 3 - Full Width */}
        <div className="service-card service-card-full-width group">
          <div className="service-card-horizontal">
            <div className="service-card-image-horizontal">
              <Image 
                src="/scenes05.svg" 
                alt="Service illustration" 
                width={120} 
                height={120}
                priority
                className="service-image-clean"
              />
            </div>
            <div className="service-card-content-horizontal">
              <div className="service-card-header-horizontal">
                <Rounded label="3" />
                <div className="service-card-text-horizontal">
                  <p className="font-semibold text-legal-navy leading-relaxed group-hover:text-legal-blue transition-colors duration-300">
                    <span className="block">{t("serviceItem3_1")}</span>
                    <span className="block">{t("serviceItem3_2")}</span>
                    <span className="block">{t("serviceItem3_3")}</span>
                    <span className="block">{t("serviceItem3_4")}</span>
                    <span className="block">{t("serviceItem3_5")}</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Service Item 4 */}
        <div className="service-card group">
          <div className="service-card-horizontal">
            <div className="service-card-image-horizontal">
              <Image 
                src="/scenes04.svg" 
                alt="Service illustration" 
                width={120} 
                height={120}
                priority
                className="service-image-clean"
              />
            </div>
            <div className="service-card-content-horizontal">
              <div className="service-card-header-horizontal">
                <Rounded label="4" />
                <div className="service-card-text-horizontal">
                  <p className="font-semibold text-legal-navy leading-relaxed group-hover:text-legal-blue transition-colors duration-300">
                    {t("serviceItem4")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Service Item 5 */}
        <div className="service-card group">
          <div className="service-card-horizontal">
            <div className="service-card-image-horizontal">
              <Image 
                src="/scenes03.svg" 
                alt="Service illustration" 
                width={120} 
                height={120}
                priority
                className="service-image-clean"
              />
            </div>
            <div className="service-card-content-horizontal">
              <div className="service-card-header-horizontal">
                <Rounded label="5" />
                <div className="service-card-text-horizontal">
                  <p className="font-semibold text-legal-navy leading-relaxed group-hover:text-legal-blue transition-colors duration-300">
                    {t("serviceItem5")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
