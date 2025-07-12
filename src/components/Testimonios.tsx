import React, { useState, useEffect } from "react";
import { useTranslation } from "next-export-i18n";
import styles from '../styles/components/Testimonios.module.css';

const TestimonialsSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentTestimonies, setCurrentTestimonies] = useState<
    {
      name: string;
      message: string;
    }[]
  >([]);

  const { t } = useTranslation();

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

  const QuoteIcon = () => (
    <svg
      className={styles.quoteIcon}
      fill="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z" />
    </svg>
  );

  const goToTestimonial = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section className={styles.container} role="region" aria-labelledby="testimonials-title">
      <header className={styles.titleSection}>
        <h1 
          id="testimonials"
          className={styles.title}
        >
          {t("testimonialsTitle")}
        </h1>
      </header>
      
      <div className={styles.testimonialsGrid}>
        {currentTestimonies.map((testimony, index) => (
          <article
            key={testimony.name}
            className={styles.testimonialCard}
            onClick={() => goToTestimonial(currentIndex + index)}
            role="button"
            tabIndex={0}
            aria-label={`Testimonial from ${testimony.name}`}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                goToTestimonial(currentIndex + index);
              }
            }}
          >
            <QuoteIcon />
            
            <blockquote className={styles.message}>
              "{testimony.message}"
            </blockquote>
            
            <footer className={styles.authorSection}>
              <div className={styles.avatar} aria-hidden="true">
                {testimony.name.charAt(0).toUpperCase()}
              </div>
              <div className={styles.authorInfo}>
                <cite className={styles.authorName}>{testimony.name}</cite>
                <p className={styles.authorTitle}>Cliente Legalify</p>
              </div>
            </footer>
          </article>
        ))}
      </div>
    </section>
  );
};

export default TestimonialsSlider;
