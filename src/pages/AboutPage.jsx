import React from "react";
import Philosophy from "../components/Philosophy";
import Seo from "../components/Seo";
import { routeSeo } from "../config/seoConfig";

const AboutPage = () => {
  return (
    <>
      <Seo {...routeSeo["/about"]} canonicalPath="/about" />
      <div className="w-full">
        <Philosophy standalone />
      </div>
    </>
  );
};

export default AboutPage;

