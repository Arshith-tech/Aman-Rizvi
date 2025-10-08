'use client';

import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Linkedin } from "lucide-react";

export function HeroSection() {
  const [bio, setBio] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function getBio() {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/bios`);
        if (!res.ok) throw new Error("Failed to fetch bio");
        const json = await res.json();
        setBio(json.data[0].Bio); // Access Bio with exact casing and array indexing
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    }
    getBio();
  }, []);

  return (
    <section className="pt-32 pb-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold text-balance">Aman Rizvi</h1>
              <p className="text-xl text-muted-foreground">Industry Leader • Innovator • Entrepreneur</p>
              {bio && <p className="text-lg text-muted-foreground leading-relaxed">{bio}</p>}
            </div>

            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="group bg-black hover:bg-black/85" asChild>
                <a href="mailto:hello@amanrizvi.com">
                  Let's Connect
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>

              <div className="flex gap-3">
                <Button variant="outline" size="icon" asChild>
                  <a href="https://linkedin.com/in/aman-rizvi-2a77b6169" target="_blank" rel="noreferrer">
                    <Linkedin className="h-4 w-4" />
                  </a>
                </Button>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl flex items-center justify-center overflow-hidden">
              <img 
                src="/pro.jpg" 
                alt="Aman Rizvi Head of Product and Strategy at DaVinci Smart Manufacturing" 
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
