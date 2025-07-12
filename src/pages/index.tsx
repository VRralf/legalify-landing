/* eslint-disable */
import React, { useState } from "react";
import { Navbar } from "../components/Navbar";
import { IntroSection } from "../components/IntroSection";
import { ServiceSection } from "../components/ServiceSection";
import { AboutSection } from "../components/AboutSection";
import { Footer } from "../components/Footer";
import { SEO } from "../components/SEO";
import Link from "next/link";
import { useTranslation } from "next-export-i18n";
import Policies from "../components/Policies";

// Temporary static imports for debugging
import ReadyToEvolveSection from "../components/ReadyToEvolveSection";
import Plans from "../components/Plans";
import Testimonios from "../components/Testimonios";
import PlansAbogados from "../components/PlansAbogados";
import AcordeonAsesoramiento from "../components/AcordeonAsesoramiento";
import ColegioAbo from "../components/ColegioAbo";
import AfiliadosTributoSimple from "../components/AfiliadosTributoSimple";

export async function getStaticProps() {
  return { props: { overflow: "hiddens" } };
}

export default function Home() {
  const [checked, setChecked] = useState(false);
  const [navWidth, setNavWidth] = useState("0%");

  function openNav() {
    setNavWidth("100%");
    document.body.style.overflow = "hidden";
  }

  function closeNav() {
    setNavWidth("0%");
    document.body.style.overflow = "unset";
  }

  const { t } = useTranslation();

  const { showAfiliadosTributoSimple } = t(
    "componentVisibility",
    { returnObjects: true }
  );

  return (
    <>
      <SEO 
        title="Legalify - Plataforma Legal Digital"
        description="Simplifica tus procesos legales con Legalify. Plataforma digital líder para abogados, empresas y particulares en América Latina."
      />
      
      <div className="min-h-screen bg-gradient-to-br from-white to-gray-50">
        {/* Modern overlay menu */}
        <div 
          id="myNav" 
          className="overlay" 
          style={{ width: navWidth }}
          role="dialog"
          aria-modal="true"
          aria-labelledby="mobile-menu-title"
        >
          <button
            className="closebtn font-thin"
            onClick={() => closeNav()}
            aria-label="Cerrar menú de navegación"
          >
            &times;
          </button>
          <div className="overlay-content flex flex-col items-center text-[15px] mt-[80px] font-medium">
            <img
              src="/logo_legalify_azul_transparente_white.png"
              alt="Legalify logo"
              height={43}
              width={121}
              className="mb-8"
            />

            <Link href="/#service">
              <a className="menuItem" onClick={() => closeNav()}>
                {t("NavBarServices")}
              </a>
            </Link>

            <div className="w-24 h-px bg-white/30 my-4" />
            
            <Link href="/#payment">
              <a className="menuItem" onClick={() => closeNav()}>
                {t("NavBarPrices")}
              </a>
            </Link>

            <div className="w-24 h-px bg-white/30 my-4" />
            
            <Link href="/#aliados">
              <a className="menuItem" onClick={() => closeNav()}>
                {t("NavBarAliance")}
              </a>
            </Link>

            <div className="w-24 h-px bg-white/30 my-4" />
            
            <Link href="/#testimonials">
              <a className="menuItem" onClick={() => closeNav()}>
                {t("NavBarTestimonials")}
              </a>
            </Link>

            <div className="w-24 h-px bg-white/30 my-4" />
            
            <Link href={process.env.NEXT_PUBLIC_URL_APP + "/login"}>
              <a className="menuItem" onClick={() => closeNav()}>
                {t("NavBarLogin")}
              </a>
            </Link>
          </div>
        </div>

        {/* Main content wrapper */}
        <div className="relative">
          <Navbar openNavbar={openNav} />
          
          {/* Main content with semantic structure */}
          <main id="main-content">
            {/* Hero Section */}
            <section className="section-hero section-padding-lg">
              <div className="container-fixed">
                <IntroSection checked={checked} setChecked={setChecked} />
              </div>
            </section>

            {/* About Section */}
            <section className="section-neutral section-padding">
              <div className="container-fixed">
                <AboutSection />
              </div>
            </section>

            {/* Services Section */}
            <section className="section-secondary section-padding">
              <div className="container-fixed">
                <ServiceSection />
              </div>
            </section>

            {/* Plans Section */}
            <section className="section-accent section-padding">
              <div className="container-fixed">
                <Plans />
              </div>
            </section>

            {/* Ready to Evolve Section */}
            <section className="section-primary section-padding">
              <div className="container-fixed">
                <ReadyToEvolveSection id="evolve" />
              </div>
            </section>

            {/* Plans for Lawyers */}
            <section className="section-neutral section-padding">
              <div className="container-fixed">
                <PlansAbogados />
              </div>
            </section>

            <div className="section-divider"></div>
            
            {/* Enterprise Services Section */}
            <section className="section-secondary section-padding" aria-labelledby="enterprise-services">
              <div className="container-fixed">
                <h2 
                  id="enterprise-services"
                  className="text-3xl lg:text-4xl xl:text-5xl font-bold text-center mb-12 text-current"
                >
                  Servicios para empresas
                </h2>
                <AcordeonAsesoramiento />
              </div>
            </section>
            
            {/* College Promotion Section */}
            <section className="section-dark section-padding" aria-labelledby="college-promotion">
              <div className="container-fixed">
                <h2 
                  id="college-promotion"
                  className="text-2xl lg:text-3xl xl:text-4xl font-bold text-center mb-12 leading-tight text-current"
                >
                  Promoción para matriculados y matriculadas del Colegio Público de
                  Abogados de la Capital Federal
                </h2>
                <ColegioAbo />
              </div>
            </section>

            <div className="section-divider"></div>
            
            {/* Affiliates Section */}
            <section id="aliados" className="section-neutral section-padding">
              <div className="container-fixed">
                {showAfiliadosTributoSimple && <AfiliadosTributoSimple />}
              </div>
            </section>
            
            {/* Testimonials */}
            <section className="section-secondary section-padding">
              <div className="container-fixed">
                <Testimonios />
              </div>
            </section>
          </main>
          
          <Footer />
          <Policies />
          
          {/* Floating WhatsApp Button - Modern Design */}
          <div className="fixed bottom-6 right-6 z-50">
            <a
              href="https://api.whatsapp.com/send?phone=5491155801155&text="
              rel="noreferrer"
              target="_blank"
              className="group flex items-center justify-center w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full shadow-strong hover:shadow-xl transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-4 focus:ring-green-300"
              aria-label="Contactar por WhatsApp"
            >
              <img 
                src="./whatsapp-logo.svg" 
                alt="" 
                className="w-8 h-8 filter brightness-0 invert group-hover:scale-110 transition-transform duration-200"
              />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
