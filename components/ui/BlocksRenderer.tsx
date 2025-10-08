'use client';

import { useEffect, useState } from "react";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";

export function AboutSection() {
  const [aboutContent, setAboutContent] = useState([]);

  useEffect(() => {
    async function fetchAbout() {
      const res = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/abouts`);
      const json = await res.json();
      setAboutContent(json.data[0].About);
    }
    fetchAbout();
  }, []);

  return (
    <section className="py-20 px-6 bg-card">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-black mb-6">About</h2>
        <div className="prose prose-lg max-w-none text-black space-y-6">
          <BlocksRenderer
  content={aboutContent}
  blocks={{
    paragraph: ({ children }) => (
      <p className="text-3xl leading-relaxed">
        {children}
      </p>
    ),
  }}
  modifiers={{
    bold: ({ children }) => (
      <span className="text-black font-semibold">
        {children}
      </span>
    ),
  }}
/>


        </div>
      </div>
    </section>
  );
}
