/* eslint-disable */
import React, { useState } from "react";
import { Navbar } from "../components/Navbar";
import { MobileMenu } from "../components/MobileMenu";
import { IntroSection } from "../components/IntroSection";
import { ServiceSection } from "../components/ServiceSection";
import { AboutSection } from "../components/AboutSection";
import { Footer } from "../components/Footer";
import { SEO } from "../components/SEO";
import { useTranslation } from "next-export-i18n";
import Policies from "../components/Policies";
import ChatBot from "../components/ChatBot";

// Temporary static imports for debugging
import ReadyToEvolveSection from "../components/ReadyToEvolveSection";
import Plans from "../components/Plans";
import TestimonialsSlider from "../components/Testimonios";
import PlansAbogados from "../components/PlansAbogados";
import AcordeonAsesoramiento from "../components/AcordeonAsesoramiento";
import ColegioAbo from "../components/ColegioAbo";
import AfiliadosTributoSimple from "../components/AfiliadosTributoSimple";

export async function getStaticProps() {
  return { props: { overflow: "hiddens" } };
}

export default function Home() {
  const [checked, setChecked] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  function openNav() {
    setIsMobileMenuOpen(true);
    document.body.style.overflow = "hidden";
  }

  function closeNav() {
    setIsMobileMenuOpen(false);
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
        {/* Mobile Menu */}
        <MobileMenu 
          isOpen={isMobileMenuOpen} 
          onClose={closeNav} 
        />

        {/* Main content wrapper */}
        <div className="relative">
          <Navbar openNavbar={openNav} />
          
          {/* Main content with semantic structure */}
          <main id="main-content">
            {/* Hero Section */}
            <IntroSection checked={checked} setChecked={setChecked} />

            {/* About Section */}
            <section className="section-neutral section-padding">
              <div className="container-fixed">
                <AboutSection />
              </div>
            </section>

            {/* Services Section */}
            <section className="section-dark section-padding">
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
            <section className="section-dark section-padding" aria-labelledby="enterprise-services">
              <div className="container-fixed">
                <h2 
                  id="enterprise-services"
                  className="text-3xl lg:text-4xl xl:text-5xl font-bold text-center mb-12 text-legal-white"
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
                  className="text-2xl lg:text-3xl xl:text-4xl font-bold text-center mb-12 leading-tight text-legal-white"
                >
                  Promoción para matriculados y matriculadas del Colegio Público de
                  Abogados de la Capital Federal
                </h2>
                <ColegioAbo />
              </div>
            </section>

            <div className="section-divider"></div>
            
            {/* Affiliates Section */}
            <section id="aliados" className="section-dark section-padding">
              <div className="container-fixed">
                {showAfiliadosTributoSimple && <AfiliadosTributoSimple />}
              </div>
            </section>
            
            {/* Testimonials */}
            <section className="section-dark section-padding">
              <div className="container-fixed">
                <TestimonialsSlider />
              </div>
            </section>
          </main>
          
          <Footer />
          <Policies />
          
          {/* Floating WhatsApp ChatBot */}
          <ChatBot />
        </div>
      </div>
    </>
  );
}
