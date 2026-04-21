"use client";

import { useEffect, useMemo, useState } from "react";
import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";
import AboutSection from "../components/sections/AboutSection";
import ContactSection from "../components/sections/ContactSection";
import HeroSection from "../components/sections/HeroSection";
import ProcessSection from "../components/sections/ProcessSection";
import ServicesSection from "../components/sections/ServicesSection";
import WhyUsSection from "../components/sections/WhyUsSection";
import { defaultLanguage, languageOptions, siteContent } from "../data/siteContent";

export default function HomePage() {
  const [language, setLanguage] = useState(defaultLanguage);

  const content = useMemo(() => siteContent[language] ?? siteContent[defaultLanguage], [language]);

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  return (
    <>
      <Header
        content={content.header}
        currentLanguage={language}
        onLanguageChange={setLanguage}
        languages={languageOptions}
      />
      <main>
        <HeroSection content={content.hero} />
        <AboutSection content={content.about} />
        <ServicesSection content={content.services} />
        <ProcessSection content={content.process} />
        <WhyUsSection content={content.whyUs} />
        <ContactSection content={content.contact} language={language} />
      </main>
      <Footer content={content.footer} />
    </>
  );
}
