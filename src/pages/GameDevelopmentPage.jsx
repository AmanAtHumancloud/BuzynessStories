import React from "react";
import { Link } from "react-router-dom";
import Seo from "../components/Seo";
import { routeSeo, SITE_URL } from "../config/seoConfig";

const GameDevelopmentPage = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Game development",
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
        {...routeSeo["/game-development"]}
        canonicalPath="/game-development"
        jsonLd={jsonLd}
      />
      <div className="w-full bg-white text-stone-950 py-16 md:py-24 px-6 md:px-32">
      <div className="max-w-6xl mx-auto space-y-12">
        <header className="space-y-4">
          <p className="text-sm uppercase tracking-[0.2em] text-stone-500">
            Game Development
          </p>
          <h1 className="text-3xl md:text-5xl font-light leading-tight">
            Game Development Company for Mobile, 3D &amp; Cross-Platform Games
          </h1>
          <p className="text-stone-600 text-base md:text-lg leading-relaxed">
            Buzyness Stories is one of the leading game development companies in
            India offering end-to-end game design and development solutions for
            mobile, web, and cross-platform devices. We build immersive,
            scalable, and high-performance games that keep players engaged and
            deliver real business value for startups, enterprises, and indie
            studios worldwide.
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
              Trusted Game Development Partner Worldwide
            </p>
            <p className="text-stone-600 text-sm md:text-base leading-relaxed">
              As a trusted game development company, Buzyness Stories combines
              creative design, advanced engineering, and cross-platform expertise
              to help startups and businesses build immersive gaming experiences
              that engage players worldwide.
            </p>
          </div>

          <div className="rounded-3xl border border-stone-200 bg-white p-6 md:p-8 space-y-4">
            <h2 className="text-xl md:text-2xl font-semibold">
              What We Build
            </h2>
            <p className="text-stone-700 text-sm md:text-base font-medium">
              Game Development Services We Offer
            </p>
            <p className="text-stone-600 text-sm md:text-base leading-relaxed">
              We create complete gaming solutions using modern technology, clean
              code, and optimized performance:
            </p>
            <ul className="mt-2 space-y-1.5 text-stone-700 text-sm md:text-base">
              <li>• Mobile Game Development (iOS &amp; Android)</li>
              <li>• Cross-Platform Game Development (Unity / Unreal)</li>
              <li>• 2D &amp; 3D game design</li>
              <li>• Multiplayer &amp; social game development</li>
              <li>• VR / AR game experiences</li>
              <li>• Game porting &amp; support services</li>
            </ul>
          </div>

          <div className="rounded-3xl border border-stone-200 bg-white p-6 md:p-8 space-y-4">
            <h2 className="text-xl md:text-2xl font-semibold">Tech Stack</h2>
            <p className="text-stone-600 text-sm md:text-base leading-relaxed">
              We use industry-standard engines and cloud infrastructure to build
              scalable, high-performance games.
            </p>
            <ul className="flex flex-wrap gap-2 text-xs md:text-sm">
              {[
                "Unity",
                "Unreal Engine",
                "Node.js",
                "AWS",
                "MongoDB",
                "PostgreSQL",
                "Firebase",
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
            Why Choose Buzyness Stories for Game Development
          </h2>
          <p className="text-stone-600 text-sm md:text-base leading-relaxed max-w-3xl">
            We combine technical expertise with creative storytelling to deliver
            engaging game experiences. As a trusted game development company, we
            build immersive, high-performance games that captivate players across
            platforms worldwide.
          </p>
          <ul className="grid gap-2 md:grid-cols-2 text-stone-700 text-sm md:text-base">
            <li>• Experienced game architects</li>
            <li>• Creative art &amp; animation</li>
            <li>• Cross-platform performance</li>
            <li>• Global delivery &amp; support</li>
            <li>• Multiplayer &amp; real-time features</li>
            <li>• Optimized gameplay performance</li>
          </ul>
        </section>
      </div>
      </div>
    </>
  );
};

export default GameDevelopmentPage;

