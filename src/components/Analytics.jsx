import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const GA_ID = import.meta.env.VITE_GA_MEASUREMENT_ID?.trim?.();

const ensureGtag = () => {
  if (typeof window === "undefined" || !GA_ID) return;

  if (!window.dataLayer) {
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      window.dataLayer.push(arguments);
    }
    window.gtag = gtag;
    gtag("js", new Date());
  }

  const existing = document.querySelector(
    `script[src*="googletagmanager.com/gtag/js?id=${GA_ID}"]`
  );
  if (!existing) {
    const script = document.createElement("script");
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
    document.head.appendChild(script);
  }
};

export const Analytics = () => {
  const location = useLocation();

  useEffect(() => {
    if (!GA_ID) return;
    ensureGtag();

    if (typeof window.gtag === "function") {
      window.gtag("config", GA_ID, {
        page_path: location.pathname + location.search,
      });
    }
  }, [location.pathname, location.search]);

  return null;
};

export default Analytics;

