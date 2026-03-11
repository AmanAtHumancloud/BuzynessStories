import React from "react";
import { Link } from "react-router-dom";
import Seo from "../components/Seo";
import { routeSeo, SITE_URL } from "../config/seoConfig";

const WebApplicationPage = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Custom web application development",
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
        {...routeSeo["/web-application"]}
        canonicalPath="/web-application"
        jsonLd={jsonLd}
      />
      <div className="w-full bg-white text-stone-950 py-16 md:py-24 px-6 md:px-32">
        <div className="max-w-6xl mx-auto space-y-12">
          <header className="space-y-4">
            <p className="text-sm uppercase tracking-[0.2em] text-stone-500">
              Web App Development
            </p>
            <h1 className="text-3xl md:text-5xl font-light leading-tight">
              Custom Web App Development Service for Scalable Business Platforms
            </h1>
            <p className="text-stone-600 text-base md:text-lg leading-relaxed">
              Buzyness Stories provides a custom web app development service designed for
              startups, enterprises, and SaaS businesses that need secure,
              high-performance digital platforms. We build modern web applications
              that scale with your growth and deliver real business impact. We also
              deliver progressive web app development service solutions that combine
              website speed with a mobile app-like experience.
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
              Web Application Development Partner Worldwide
            </p>
            <p className="text-stone-600 text-sm md:text-base leading-relaxed">
              As a trusted web app development agency, Buzyness Stories supports
              businesses with scalable platforms and modern digital solutions
              across global markets. We deliver reliable web application
              development services India companies depend on, while also working
              with international clients through clear communication and
              product-focused execution.
            </p>
          </div>

          <div className="rounded-3xl border border-stone-200 bg-white p-6 md:p-8 space-y-4">
            <h2 className="text-xl md:text-2xl font-semibold">
              What We Build
            </h2>
            <p className="text-stone-700 text-sm md:text-base font-medium">
              Custom Web App Development Services We Provide
            </p>
            <p className="text-stone-600 text-sm md:text-base leading-relaxed">
              We deliver custom web application development services for secure,
              scalable web platforms.
            </p>
            <ul className="mt-2 space-y-1.5 text-stone-700 text-sm md:text-base">
              <li>• SaaS web platforms</li>
              <li>• Admin dashboards &amp; analytics</li>
              <li>• CRM, ERP systems &amp; internal tools</li>
              <li>• Marketplaces &amp; booking platforms</li>
              <li>• Customer portals (B2B/B2C)</li>
              <li>• Progressive and responsive applications</li>
            </ul>
          </div>

          <div className="rounded-3xl border border-stone-200 bg-white p-6 md:p-8 space-y-4">
            <h2 className="text-xl md:text-2xl font-semibold">Tech Stack</h2>
            <p className="text-stone-600 text-sm md:text-base leading-relaxed">
              We use modern, battle-tested technologies to build secure and
              scalable web applications.
            </p>
            <ul className="flex flex-wrap gap-2 text-xs md:text-sm">
              {[
                "React",
                "Next.js",
                "Node.js",
                "AWS",
                "MongoDB",
                "PostgreSQL",
                "Django",
                "Laravel",
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
            Why Choose Buzyness Stories for Web Development
          </h2>
          <p className="text-stone-600 text-sm md:text-base leading-relaxed max-w-3xl">
            As a trusted partner for custom web app development services, we build
            scalable, secure web platforms designed for long-term growth, including
            progressive web app development service solutions built for
            performance.
          </p>
          <ul className="grid gap-2 md:grid-cols-2 text-stone-700 text-sm md:text-base">
            <li>• Scalable architecture for business growth</li>
            <li>• Secure backend and API development</li>
            <li>• Performance-optimized web apps built for speed and reliability</li>
            <li>• Modern frameworks and clean UI/UX</li>
            <li>• Dedicated support after launch</li>
            <li>• Seamless integrations with SaaS tools and CRMs</li>
          </ul>
          </section>
        </div>
      </div>
    </>
  );
};

export default WebApplicationPage;

