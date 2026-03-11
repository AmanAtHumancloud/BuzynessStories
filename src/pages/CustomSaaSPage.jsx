import React from "react";
import { Link } from "react-router-dom";
import Seo from "../components/Seo";
import { routeSeo, SITE_URL } from "../config/seoConfig";

const CustomSaaSPage = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Custom SaaS development",
    areaServed: {
      "@type": "Country",
      name: "India",
    },
    provider: {
      "@type": "Organization",
      name: "BuzynessStories",
      url: SITE_URL,
    },
  };

  return (
    <>
      <Seo
        {...routeSeo["/custom-saas"]}
        canonicalPath="/custom-saas"
        jsonLd={jsonLd}
      />
      <div className="w-full bg-white text-stone-950 py-16 md:py-24 px-6 md:px-32">
        <div className="max-w-6xl mx-auto space-y-12">
          <header className="space-y-4">
            <p className="text-sm uppercase tracking-[0.2em] text-stone-500">
              Custom SaaS Development
            </p>
            <h1 className="text-3xl md:text-5xl font-light leading-tight">
              Custom SaaS Development Services &amp; Scalable Business Software
              Solution
            </h1>
            <p className="text-stone-600 text-base md:text-lg leading-relaxed">
              Buzyness Stories offers custom SaaS development services and tailored
              software solutions that help businesses automate operations, improve
              efficiency, and scale faster. We build platforms designed for
              long-term product growth.
            </p>
            <div className="pt-2">
              <Link
                to="/contact"
                className="inline-flex items-center rounded-full bg-stone-900 px-6 py-2.5 text-sm md:text-base font-medium text-white hover:bg-stone-800 transition-colors"
              >
                Book a Call
              </Link>
            </div>
          </header>

          <section className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-3xl border border-stone-200 bg-secondary/60 p-6 md:p-8 space-y-3">
            <h2 className="text-xl md:text-2xl font-semibold">
              Why Buzyness Stories?
            </h2>
            <p className="text-sm uppercase tracking-[0.18em] text-stone-500">
              Trusted SaaS Development Partner Worldwide
            </p>
            <p className="text-stone-600 text-sm md:text-base leading-relaxed">
              As a trusted provider of custom SaaS development services,
              Buzyness Stories blends product strategy, scalable engineering, and
              cloud-ready architecture to help startups and enterprises build
              subscription platforms that scale globally.
            </p>
          </div>

          <div className="rounded-3xl border border-stone-200 bg-white p-6 md:p-8 space-y-4">
            <h2 className="text-xl md:text-2xl font-semibold">
              What We Build
            </h2>
            <p className="text-stone-700 text-sm md:text-base font-medium">
              SaaS Product Development for Modern Businesses
            </p>
            <p className="text-stone-600 text-sm md:text-base leading-relaxed">
              We help startups and enterprises develop cloud-ready SaaS products
              with:
            </p>
            <ul className="mt-2 space-y-1.5 text-stone-700 text-sm md:text-base">
              <li>• Secure multi-user architecture</li>
              <li>• Payment &amp; subscription integrations</li>
              <li>• Admin dashboards and analytics</li>
              <li>• Scalable infrastructure</li>
              <li>• Seamless third-party API integrations</li>
              <li>• Secure architecture by design</li>
            </ul>
          </div>

          <div className="rounded-3xl border border-stone-200 bg-white p-6 md:p-8 space-y-4">
            <h2 className="text-xl md:text-2xl font-semibold">Tech Stack</h2>
            <p className="text-stone-600 text-sm md:text-base leading-relaxed">
              We use modern cloud-native technologies to build SaaS products that
              are secure, scalable, and maintainable.
            </p>
            <ul className="flex flex-wrap gap-2 text-xs md:text-sm">
              {[
                "React",
                "Next.js",
                "Node.js",
                "AWS",
                "MongoDB",
                "PostgreSQL",
                ".NET",
              ].map((tech) => (
                <li
                  key={tech}
                  className="rounded-full border border-stone-200 bg-secondary/80 px-3 py-1 text-stone-800"
                >
                  {tech}
                </li>
              ))}
            </ul>
          </div>
          </section>

          <section className="rounded-3xl border border-stone-200 bg-white p-6 md:p-10 space-y-4">
          <h2 className="text-2xl md:text-3xl font-semibold">
            Why Choose Buzyness Stories for Custom Software Development
          </h2>
          <p className="text-stone-600 text-sm md:text-base leading-relaxed max-w-3xl">
            Custom software is built around your exact business needs, giving you
            more flexibility, control, and long-term value compared to ready-made
            tools.
          </p>
          <ul className="grid gap-2 md:grid-cols-2 text-stone-700 text-sm md:text-base">
            <li>• Full control over features</li>
            <li>• Better operational efficiency</li>
            <li>• Competitive advantage</li>
            <li>• Seamless integrations</li>
            <li>• Future scalability</li>
            <li>• Enhanced data security</li>
          </ul>
          </section>
        </div>
      </div>
    </>
  );
};

export default CustomSaaSPage;

