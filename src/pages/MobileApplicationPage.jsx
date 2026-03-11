import React from "react";
import { Link } from "react-router-dom";
import Seo from "../components/Seo";
import { routeSeo, SITE_URL } from "../config/seoConfig";

const MobileApplicationPage = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Custom mobile app development",
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
        {...routeSeo["/mobile-application"]}
        canonicalPath="/mobile-application"
        jsonLd={jsonLd}
      />
      <div className="w-full bg-white text-stone-950 py-16 md:py-24 px-6 md:px-32">
        <div className="max-w-6xl mx-auto space-y-12">
          <header className="space-y-4">
            <p className="text-sm uppercase tracking-[0.2em] text-stone-500">
              Mobile App Development
            </p>
            <h1 className="text-3xl md:text-5xl font-light leading-tight">
              Custom Mobile App Development Company for iOS, Android &amp;
              Enterprise Apps
            </h1>
            <p className="text-stone-600 text-base md:text-lg leading-relaxed">
              Buzyness Stories is a custom mobile app development company building
              high-performing mobile applications for startups, enterprises, and
              global businesses. From MVP apps to large-scale enterprise solutions,
              we deliver products that users love.
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
              Trusted Mobile App Development Partner Worldwide
            </p>
            <p className="text-stone-600 text-sm md:text-base leading-relaxed">
              As one of the growing names among the best mobile app development
              companies in India, Buzyness Stories combines product strategy,
              clean engineering, and scalable architecture to deliver mobile apps
              that drive real business outcomes.
            </p>
          </div>

          <div className="rounded-3xl border border-stone-200 bg-white p-6 md:p-8 space-y-4">
            <h2 className="text-xl md:text-2xl font-semibold">
              What We Build
            </h2>
            <p className="text-stone-700 text-sm md:text-base font-medium">
              Mobile App Development Services We Offer
            </p>
            <p className="text-stone-600 text-sm md:text-base leading-relaxed">
              We provide complete mobile app engineering, including:
            </p>
            <ul className="mt-2 space-y-1.5 text-stone-700 text-sm md:text-base">
              <li>• Native iOS and Android development</li>
              <li>• Cross-platform app development</li>
              <li>• Enterprise mobile app development</li>
              <li>• UI/UX design for mobile-first experiences</li>
              <li>• App maintenance, upgrades, and scaling</li>
              <li>• Progressive and responsive applications</li>
            </ul>
          </div>

          <div className="rounded-3xl border border-stone-200 bg-white p-6 md:p-8 space-y-4">
            <h2 className="text-xl md:text-2xl font-semibold">Tech Stack</h2>
            <p className="text-stone-600 text-sm md:text-base leading-relaxed">
              We use modern mobile technologies and cloud infrastructure to build
              secure, high-performing apps.
            </p>
            <ul className="flex flex-wrap gap-2 text-xs md:text-sm">
              {[
                "Flutter",
                "React Native",
                "Firebase",
                "AWS",
                "MongoDB",
                "PostgreSQL",
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
            Why Choose Buzyness Stories for Mobile Development
          </h2>
          <p className="text-stone-600 text-sm md:text-base leading-relaxed max-w-3xl">
            As a trusted custom mobile app development company, we provide
            scalable iOS and Android solutions through end-to-end mobile app
            development services for startups and enterprises worldwide.
          </p>
          <ul className="grid gap-2 md:grid-cols-2 text-stone-700 text-sm md:text-base">
            <li>• Scalable mobile apps built for long-term growth</li>
            <li>• Secure architecture with strong data protection</li>
            <li>• Smooth, user-friendly UI/UX for better engagement</li>
            <li>• Seamless API and CRM integrations</li>
            <li>• Enterprise-ready performance and reliability</li>
            <li>• Ongoing support, updates, and maintenance after launch</li>
          </ul>
          </section>
        </div>
      </div>
    </>
  );
};

export default MobileApplicationPage;

