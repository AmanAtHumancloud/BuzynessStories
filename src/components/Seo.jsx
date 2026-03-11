import React, { useEffect } from "react";
import { SITE_URL, defaultSeo } from "../config/seoConfig";

const upsertTag = (selector, createTagName, attributes) => {
  if (typeof document === "undefined") return;
  let el = document.head.querySelector(selector);
  if (!el) {
    el = document.createElement(createTagName);
    document.head.appendChild(el);
  }
  Object.entries(attributes).forEach(([key, value]) => {
    if (value == null) return;
    el.setAttribute(key, value);
  });
};

const removeExistingJsonLd = (idPrefix) => {
  if (typeof document === "undefined") return;
  const nodes = document.head.querySelectorAll(
    `script[type="application/ld+json"]`
  );
  nodes.forEach((node) => {
    if (
      node.id &&
      typeof node.id === "string" &&
      node.id.startsWith(idPrefix)
    ) {
      document.head.removeChild(node);
    }
  });
};

const injectJsonLd = (id, data) => {
  if (typeof document === "undefined" || !data) return;
  let node = document.head.querySelector(`#${id}`);
  if (!node) {
    node = document.createElement("script");
    node.type = "application/ld+json";
    node.id = id;
    document.head.appendChild(node);
  }
  node.textContent = JSON.stringify(data);
};

export const Seo = ({
  title,
  description,
  robots,
  canonicalPath,
  ogType,
  ogImage,
  jsonLd,
}) => {
  useEffect(() => {
    const merged = {
      ...defaultSeo,
      title: title || defaultSeo.title,
      description: description || defaultSeo.description,
      robots: robots || defaultSeo.robots,
      ogType: ogType || defaultSeo.ogType,
    };

    if (merged.title) {
      document.title = merged.title;
    }

    const url =
      typeof window !== "undefined"
        ? `${SITE_URL}${canonicalPath || window.location.pathname}`
        : `${SITE_URL}${canonicalPath || "/"}`;

    upsertTag('meta[name="description"]', "meta", {
      name: "description",
      content: merged.description,
    });

    upsertTag('meta[name="robots"]', "meta", {
      name: "robots",
      content: merged.robots,
    });

    upsertTag('link[rel="canonical"]', "link", {
      rel: "canonical",
      href: url,
    });

    upsertTag('meta[property="og:title"]', "meta", {
      property: "og:title",
      content: merged.title,
    });

    upsertTag('meta[property="og:description"]', "meta", {
      property: "og:description",
      content: merged.description,
    });

    upsertTag('meta[property="og:type"]', "meta", {
      property: "og:type",
      content: merged.ogType,
    });

    upsertTag('meta[property="og:url"]', "meta", {
      property: "og:url",
      content: url,
    });

    if (ogImage) {
      upsertTag('meta[property="og:image"]', "meta", {
        property: "og:image",
        content: ogImage,
      });
    }

    if (jsonLd) {
      const items = Array.isArray(jsonLd) ? jsonLd : [jsonLd];
      removeExistingJsonLd("seo-jsonld-");
      items.forEach((item, index) => {
        injectJsonLd(`seo-jsonld-${index}`, item);
      });
    }
  }, [title, description, robots, canonicalPath, ogType, ogImage, jsonLd]);

  return null;
};

export default Seo;

