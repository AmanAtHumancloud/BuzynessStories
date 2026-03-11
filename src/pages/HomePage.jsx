import React from "react";
import Hero from "../components/Hero";
import Reel from "../components/Reel";
import WhatWeDo from "../components/WhatWeDo";
import { TechnologyMarquee } from "../components/TechnologyMarquee";
import Services from "../components/Services";
import Projects from "../components/Projects";
import Philosophy from "../components/Philosophy";
import Seo from "../components/Seo";
import { routeSeo, SITE_URL } from "../config/seoConfig";

const HomePage = () => {
  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "BuzynessStories",
    url: SITE_URL,
    sameAs: [
      "https://github.com/vikasipar",
      "https://www.linkedin.com/in/vikas-ipar/",
    ],
  };

  return (
    <>
      <Seo {...routeSeo["/"]} canonicalPath="/" jsonLd={organizationJsonLd} />
      <div className="w-full">
        <Hero />
        <Reel />
        <WhatWeDo />
        <TechnologyMarquee />
        <Services />
        <Projects />
        <Philosophy />
      </div>
    </>
  );
};

export default HomePage;

