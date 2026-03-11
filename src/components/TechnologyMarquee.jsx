import React from "react";
import { LogoCloud } from "@/components/ui/logo-cloud-2";

/**
 * Technologies we work with – section with exact LogoCloud component from spec.
 * Only the logo content was changed to web agency technologies.
 */
export function TechnologyMarquee() {
  return (
    <section className="relative w-full bg-white px-4 py-16 md:py-24">
      <div className="relative mx-auto grid max-w-3xl">
        <h2 className="mb-6 text-center font-medium text-lg text-stone-600 tracking-tight md:text-2xl">
          Technologies we{" "}
          <span className="font-semibold text-stone-950">work with</span>.
        </h2>

        <LogoCloud />
      </div>
    </section>
  );
}
