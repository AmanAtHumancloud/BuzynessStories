import React from "react";
import Projects from "../components/Projects";
import Seo from "../components/Seo";
import { routeSeo } from "../config/seoConfig";

const PortfolioPage = () => {
  return (
    <>
      <Seo {...routeSeo["/portfolio"]} canonicalPath="/portfolio" />
      <div className="w-full">
        <Projects />
      </div>
    </>
  );
};

export default PortfolioPage;

