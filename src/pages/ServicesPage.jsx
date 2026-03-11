import React from "react";
import WhatWeDo from "../components/WhatWeDo";
import Seo from "../components/Seo";
import { routeSeo } from "../config/seoConfig";

const ServicesPage = () => {
  return (
    <>
      <Seo {...routeSeo["/services"]} canonicalPath="/services" />
      <div className="w-full">
        <WhatWeDo />
      </div>
    </>
  );
};

export default ServicesPage;

