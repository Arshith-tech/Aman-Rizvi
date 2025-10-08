'use client';

import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";

type Experience = {
  timeline: string;
  title: string;
  Company_Name_and_Location: string;
  description: string;
  skills: string[];
};

type Education = {
  institution: string;
  program: string;
  period: string;
  description: string;
  skills: string[];
};

export function AboutSection() {
  const [aboutContent, setAboutContent] = useState<any[]>([]);
  const [experiences, setExperiences] = useState<Experience[]>([]);
  const [education, setEducation] = useState<Education[]>([]);

  // Fetch About content from Strapi
  useEffect(() => {
    async function fetchAbout() {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/abouts`);
        if (!res.ok) throw new Error("Failed to fetch about content");
        const json = await res.json();
        setAboutContent(json.data?.[0]?.About || []);
      } catch (error) {
        console.error("Error fetching About content:", error);
      }
    }
    fetchAbout();
  }, []);

  // Fetch Experience data from Strapi, parse skills string into array
  useEffect(() => {
  async function fetchExperience() {
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/experiences`);
      if (!res.ok) throw new Error("Failed to fetch experiences");
      const json = await res.json();
      const dataMapped = json.data.map((item: any) => ({
        id: item.id,
        title: item.title,
        Company_Name_and_Location: item.Company_Name_and_Location,
        timeline: item.timeline,
        description: item.description,
        skills: item.Skills
          ? item.Skills.split(",").map((skill: string) => skill.trim())
          : [],
      }));
      console.log("Formatted experience data:", dataMapped);
      setExperiences(dataMapped);
    } catch (error) {
      console.error(error);
    }
  }
  fetchExperience();
}, []);


  // Keep education fetch from local JSON unchanged
  useEffect(() => {
    fetch("/education.json")
      .then((res) => res.json())
      .then(setEducation)
      .catch(() => setEducation([]));
  }, []);

  return (
    <section id="about" className="py-20 px-6 bg-card">
      <div className="max-w-4xl mx-auto space-y-12">
        {/* About Text */}
        <h2 className="text-3xl font-bold text-black">About</h2>
        <div className="prose prose-lg max-w-none text-black space-y-6">
          <BlocksRenderer
            content={aboutContent}
            blocks={{
              paragraph: ({ children }) => (
                <p className="text-lg leading-relaxed">{children}</p>
              ),
            }}
            modifiers={{
              bold: ({ children }) => (
                <span className="text-black font-semibold">{children}</span>
              ),
            }}
          />
        </div>

        {/* Experience Section */}
        <div className="space-y-8">
          <h3 className="text-2xl font-semibold text-black">Experience</h3>
          <div className="space-y-6">
            {experiences.length === 0 ? (
              <p className="text-black">No experience data available.</p>
            ) : (
              experiences.map((exp, index) => (
                <Card key={index} className="border-2 border-border hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                        <div>
                          <h4 className="text-lg font-semibold text-black">{exp.title}</h4>
                          <p className="text-black font-medium">{exp.Company_Name_and_Location}</p>
                        </div>
                        <p className="text-sm font-mono text-black">{exp.timeline}</p>
                      </div>
                      <p className="text-black leading-relaxed whitespace-pre-line">{exp.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {exp.skills.map((skill: string, skillIndex: number) => (
                          <Badge key={skillIndex} variant="secondary" className="text-black">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))
            )}
          </div>
        </div>

        {/* Education Section - unchanged */}
        <div className="space-y-8">
          <h3 className="text-2xl font-semibold text-black">Executive Education & Technical Foundations</h3>
          <div className="space-y-6">
            {education.map((edu: Education, index: number) => (
              <Card key={index} className="border-2 border-border hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                      <div>
                        <h4 className="text-lg font-semibold text-black">{edu.program}</h4>
                        <p className="text-black font-medium">{edu.institution}</p>
                      </div>
                      <p className="text-sm font-mono text-black">{edu.period}</p>
                    </div>
                    <p className="text-black leading-relaxed">{edu.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {edu.skills.map((skill: string, skillIndex: number) => (
                        <Badge key={skillIndex} variant="secondary" className="text-black">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
