import React from "react";
import { Link } from "react-router-dom";
import Seo from "../components/Seo";
import { routeSeo, SITE_URL } from "../config/seoConfig";

const DesktopApplicationPage = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Desktop application development",
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
        {...routeSeo["/desktop-application"]}
        canonicalPath="/desktop-application"
        jsonLd={jsonLd}
      />
      <div className="w-full bg-white text-stone-950 py-16 md:py-24 px-6 md:px-32">
      <div className="max-w-6xl mx-auto space-y-12">
        <header className="space-y-4">
          <p className="text-sm uppercase tracking-[0.2em] text-stone-500">
            Desktop App Development
          </p>
          <h1 className="text-3xl md:text-5xl font-light leading-tight">
            Desktop App Development Services for Windows &amp; Cross-Platform
            Solutions
          </h1>
          <p className="text-stone-600 text-base md:text-lg leading-relaxed">
            Buzyness Stories provides premium desktop app development services for
            businesses that need robust, high-performance applications for
            Windows, macOS, and cross-platform environments. Whether you need
            internal productivity tools, customer-facing software, or
            specialized business applications, we deliver reliable solutions
            built to scale.
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
              Trusted Desktop Application Partner
            </p>
            <p className="text-stone-600 text-sm md:text-base leading-relaxed">
              As a trusted provider of desktop app development services, Buzyness
              Stories delivers high-performance desktop software using secure
              architecture and scalable engineering.
            </p>
          </div>

          <div className="rounded-3xl border border-stone-200 bg-white p-6 md:p-8 space-y-4">
            <h2 className="text-xl md:text-2xl font-semibold">
              What We Build
            </h2>
            <p className="text-stone-700 text-sm md:text-base font-medium">
              Desktop App Development Services We Provide
            </p>
            <p className="text-stone-600 text-sm md:text-base leading-relaxed">
              We offer end-to-end desktop software development tailored to
              business needs, delivering secure, high-performance applications
              across Windows, macOS, and cross-platform environments:
            </p>
            <ul className="mt-2 space-y-1.5 text-stone-700 text-sm md:text-base">
              <li>• Windows native app development</li>
              <li>• Integration with web and mobile systems</li>
              <li>• Backend APIs and secure cloud sync</li>
              <li>• Rust desktop app development</li>
              <li>• POS systems</li>
              <li>• Internal desktop tools</li>
            </ul>
          </div>

          <div className="rounded-3xl border border-stone-200 bg-white p-6 md:p-8 space-y-4">
            <h2 className="text-xl md:text-2xl font-semibold">Tech Stack</h2>
            <p className="text-stone-600 text-sm md:text-base leading-relaxed">
              We use robust technologies to build secure, high-performance desktop
              applications.
            </p>
            <ul className="flex flex-wrap gap-2 text-xs md:text-sm">
              {[
                "Rust",
                ".NET",
                "Java",
                "Python",
                "MongoDB",
                "C++",
                "Tauri",
                "AWS",
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
            Why Choose Buzyness Stories for Desktop App Development
          </h2>
          <p className="text-stone-600 text-sm md:text-base leading-relaxed max-w-3xl">
            As a trusted provider of desktop app development services, we build
            secure, high-performance desktop applications designed for business
            efficiency across Windows and macOS environments with long-term
            reliability.
          </p>
          <ul className="grid gap-2 md:grid-cols-2 text-stone-700 text-sm md:text-base">
            <li>• High-performance desktop apps built for speed and stability</li>
            <li>• Secure architecture with strong data protection practices</li>
            <li>• Cross-platform solutions for Windows and macOS environments</li>
            <li>• Seamless integration with web apps, APIs, and business systems</li>
            <li>• Scalable software designed for long-term enterprise growth</li>
            <li>• Dedicated support, updates, and ongoing maintenance after launch</li>
          </ul>
        </section>
      </div>
      </div>
    </>
  );
};

export default DesktopApplicationPage;

