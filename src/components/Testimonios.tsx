import React, { useState, useEffect } from "react";
import { useLanguageQuery, useTranslation } from "next-export-i18n";

const TestimonialsSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentTestimonies, setCurrentTestimonies] = useState<
    {
      name: string;
      message: string;
    }[]
  >([]);

  const { t } = useTranslation();
  const [query] = useLanguageQuery();

  const testimonies = [
    {
      name: "Soledad",
      message: t("testimonialSoledad"),
    },
    {
      name: "Pablo",
      message: t("testimonialPablo"),
    },
    {
      name: "Juan",
      message: t("testimonialJuan"),
    },
    {
      name: "Carolina",
      message: t("testimonialCarolina"),
    },
    {
      name: "Sofía",
      message: t("testimonialSofia"),
    },
    {
      name: "Roberto",
      message: t("testimonialRoberto"),
    },
    {
      name: "Alejandra",
      message: t("testimonialAlejandra"),
    },
    {
      name: "Marcela",
      message: t("testimonialMarcela"),
    },
    {
      name: "Alberto",
      message: t("testimonialAlberto"),
    },
  ];

  useEffect(() => {
    setCurrentTestimonies(testimonies.slice(currentIndex, currentIndex + 3));
  }, [currentIndex]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(
        currentIndex >= testimonies.length - 3 ? 0 : currentIndex + 3
      );
    }, 5000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div>
      <h1
        id="testimonials"
        className="text-[30px] md:text-2xl lg:text-3xl text-legalify-primary font-semibold text-center mt-5 mb-5"
      >
        {t("testimonialsTitle")}
      </h1>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center gap-8 p-8">
        {currentTestimonies.map((testimony, index) => (
          <div
            className="flex flex-col-3 gap-6 bg-gray-100 p-8 rounded-xl"
            key={testimony.name}
            style={{ boxShadow: "5px 5px 5px 5px rgba(0, 0, 0, 0.2)" }}
          >
            <div>
              <p className="text-gray-500">{testimony.message}</p>
              <h3 className="text-indigo-500 font-bold mt-3">
                {testimony.name}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialsSlider;
