import React from "react";
import { Link } from "react-router-dom";
import Seo from "../components/Seo";
import { routeSeo, SITE_URL } from "../config/seoConfig";

const AiAutomationPage = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "AI automation and voice agents",
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
        {...routeSeo["/ai-automation"]}
        canonicalPath="/ai-automation"
        jsonLd={jsonLd}
      />
      <div className="w-full bg-white text-stone-950 py-16 md:py-24 px-6 md:px-32">
        <div className="max-w-6xl mx-auto space-y-12">
          <header className="space-y-4">
            <p className="text-sm uppercase tracking-[0.2em] text-stone-500">
              AI Automation &amp; Voice Agents
            </p>
            <h1 className="text-3xl md:text-5xl font-light leading-tight">
              AI Automation Agency for AI Agents, Voice Bots &amp; Workflow
              Optimization
            </h1>
            <p className="text-stone-600 text-base md:text-lg leading-relaxed">
              Buzyness Stories is an AI automation agency helping businesses reduce
              manual work, improve customer engagement, and scale operations using
              AI agents and intelligent automation systems.
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
              Trusted AI Agent &amp; Automation Partner
            </p>
            <p className="text-stone-600 text-sm md:text-base leading-relaxed">
              Buzyness Stories builds intelligent AI agents and automation systems
              that help companies automate repetitive tasks, streamline workflows,
              and improve response times across industries.
            </p>
          </div>

          <div className="rounded-3xl border border-stone-200 bg-white p-6 md:p-8 space-y-4">
            <h2 className="text-xl md:text-2xl font-semibold">
              What We Build
            </h2>
            <p className="text-stone-700 text-sm md:text-base font-medium">
              AI Automation Solutions We Provide
            </p>
            <p className="text-stone-600 text-sm md:text-base leading-relaxed">
              We build AI-driven systems such as:
            </p>
            <ul className="mt-2 space-y-1.5 text-stone-700 text-sm md:text-base">
              <li>• AI voice agents for sales and support</li>
              <li>• Workflow automation for business processes</li>
              <li>• Smart chatbots and virtual assistants</li>
              <li>• SaaS automation integrations</li>
              <li>• AI-powered reporting and analytics</li>
              <li>• AI agents for operations</li>
            </ul>
          </div>

          <div className="rounded-3xl border border-stone-200 bg-white p-6 md:p-8 space-y-4">
            <h2 className="text-xl md:text-2xl font-semibold">Tech Stack</h2>
            <p className="text-stone-600 text-sm md:text-base leading-relaxed">
              We combine leading AI platforms with solid engineering to deliver
              reliable automation systems.
            </p>
            <ul className="flex flex-wrap gap-2 text-xs md:text-sm">
              {[
                "OpenAI",
                "Vapi",
                "Next.js",
                "n8n",
                "Node.js",
                "Python",
                "AWS",
                "MongoDB",
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
            Why Choose Buzyness Stories for AI Automation
          </h2>
          <p className="text-stone-600 text-sm md:text-base leading-relaxed max-w-3xl">
            As a trusted provider of AI automation services, we build intelligent
            AI agents and workflow systems that help businesses improve efficiency,
            reduce manual work, and scale faster. We focus on measurable business
            impact, not just experimentation.
          </p>
          <ul className="grid gap-2 md:grid-cols-2 text-stone-700 text-sm md:text-base">
            <li>• Save time and operational cost</li>
            <li>• Improve response speed and customer satisfaction</li>
            <li>• Automate repetitive business tasks</li>
            <li>• Enable scalable growth with smart workflows</li>
            <li>• Seamless integration with existing systems</li>
            <li>• AI agents built for real-world business impact</li>
          </ul>
          </section>
        </div>
      </div>
    </>
  );
};

export default AiAutomationPage;

