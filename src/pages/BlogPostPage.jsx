import React from "react";
import { useParams } from "react-router-dom";
import Seo from "../components/Seo";
import { SITE_URL, buildBlogPostSeo } from "../config/seoConfig";

const BlogPostPage = () => {
  const { slug } = useParams();
  const seo = buildBlogPostSeo(slug || "");
  const path = `/blog/${slug || ""}`;
  const url = `${SITE_URL}${path}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: seo.title,
    description: seo.description,
    url,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
    author: {
      "@type": "Organization",
      name: "BuzynessStories",
      url: SITE_URL,
    },
  };

  return (
    <>
      <Seo {...seo} canonicalPath={path} jsonLd={jsonLd} />
      <div className="w-full px-6 md:px-32 py-16">
        <h1 className="text-3xl md:text-5xl font-light mb-4">
          Blog post: {slug}
        </h1>
        <p className="text-base md:text-lg text-stone-700">
          This is a placeholder for the full blog post view. It will be connected
          to structured blog data from the central content file.
        </p>
      </div>
    </>
  );
};

export default BlogPostPage;

