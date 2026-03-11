import { PlusIcon } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * Logo cloud grid – exact layout from spec.
 * Logos are served from /logos/ (public folder) for reliable loading.
 */
const LOGOS = {
  react: "/logos/react.svg",
  nextjs: "/logos/nextjs.svg",
  tailwindcss: "/logos/tailwindcss.svg",
  nodejs: "/logos/nodejs.svg",
  python: "/logos/python.svg",
  mongodb: "/logos/mongodb.svg",
  postgresql: "/logos/postgresql.svg",
  redux: "/logos/redux.svg",
};

function LogoCard({ logo, className, children, ...props }) {
  return (
    <div
      className={cn(
        "flex items-center justify-center bg-background px-4 py-8 md:p-8",
        className
      )}
      {...props}
    >
      <img
        alt={logo.alt}
        src={logo.src}
        width={logo.width ?? 32}
        height={logo.height ?? 32}
        loading="eager"
        decoding="async"
        className="pointer-events-none select-none object-contain min-h-8 min-w-8 h-8 w-8 md:min-h-10 md:min-w-10 md:h-10 md:w-10"
      />
      {children}
    </div>
  );
}

export function LogoCloud({ className, ...props }) {
  return (
    <div
      className={cn(
        "relative grid grid-cols-2 border-x border-stone-200 md:grid-cols-4",
        className
      )}
      {...props}
    >
      <div className="-translate-x-1/2 -top-px pointer-events-none absolute left-1/2 w-screen border-t border-stone-200" />

      <LogoCard
        className="relative border-r border-b border-stone-200 bg-secondary dark:bg-secondary/30"
        logo={{ src: LOGOS.react, alt: "React" }}
      >
        <PlusIcon
          className="-right-[12.5px] -bottom-[12.5px] absolute z-10 size-6 text-stone-400"
          strokeWidth={1}
        />
      </LogoCard>

      <LogoCard
        className="border-b border-stone-200 md:border-r"
        logo={{ src: LOGOS.nextjs, alt: "Next.js" }}
      />

      <LogoCard
        className="relative border-r border-b border-stone-200 md:bg-secondary dark:md:bg-secondary/30"
        logo={{ src: LOGOS.nodejs, alt: "Node.js" }}
      >
        <PlusIcon
          className="-right-[12.5px] -bottom-[12.5px] absolute z-10 size-6 text-stone-400"
          strokeWidth={1}
        />
        <PlusIcon
          className="-bottom-[12.5px] -left-[12.5px] absolute z-10 hidden size-6 md:block text-stone-400"
          strokeWidth={1}
        />
      </LogoCard>

      <LogoCard
        className="relative border-b border-stone-200 bg-secondary md:bg-background dark:bg-secondary/30 md:dark:bg-background"
        logo={{ src: LOGOS.tailwindcss, alt: "Tailwind CSS" }}
      />

      <LogoCard
        className="relative border-r border-b border-stone-200 bg-secondary md:border-b-0 md:bg-background dark:bg-secondary/30 md:dark:bg-background"
        logo={{ src: LOGOS.python, alt: "Python" }}
      >
        <PlusIcon
          className="-right-[12.5px] -bottom-[12.5px] md:-left-[12.5px] absolute z-10 size-6 text-stone-400 md:hidden"
          strokeWidth={1}
        />
      </LogoCard>

      <LogoCard
        className="border-b border-stone-200 bg-background md:border-r md:border-b-0 md:bg-secondary dark:md:bg-secondary/30"
        logo={{ src: LOGOS.mongodb, alt: "MongoDB" }}
      />

      <LogoCard
        className="border-r border-stone-200"
        logo={{ src: LOGOS.postgresql, alt: "PostgreSQL" }}
      />

      <LogoCard
        className="bg-secondary dark:bg-secondary/30"
        logo={{ src: LOGOS.redux, alt: "Redux" }}
      />

      <div className="-translate-x-1/2 -bottom-px pointer-events-none absolute left-1/2 w-screen border-b border-stone-200" />
    </div>
  );
}
