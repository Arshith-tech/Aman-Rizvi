import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const experiences = [
  {
    period: "2024 — Present",
    title: "Head of Product & Strategy",
    company: "VirtueS | Hyderabad, India",
    description:
      "Lead large-scale AI-driven manufacturing programs and ERP transformations for Ferroglobe, managing a 30-member engineering team. Drive measurable results in efficiency and delivery, overseeing $30M–$50M enterprise programs and heading the PMO for multiple global projects.",
    skills: ["Program Management", "AI & Gen AI Systems", "ERP (SAP & Oracle)", "Agile & Scrum", "Enterprise Strategy"],
  },
  {
    period: "2023 — 2024",
    title: "Program Manager",
    company: "CAW Studios | Hyderabad, India",
    description:
      "Directed a 45-engineer team, executing projects with Celito.ai, Paytm, and TVS. Spearheaded development of an LLM-powered AI model that improved pharma research yield by 87%, and boosted Paytm CRM efficiency by 43%. Delivered e-governance IT projects transforming citizen services and public infrastructure management.",
    skills: ["Program Leadership", "AI/LLM Models", "E-Governance", "Cross-functional Collaboration", "Azure DevOps & Jira"],
  },
  {
    period: "2021 — 2023",
    title: "Founder & Chief Executive Officer",
    company: "Seecking Inc. | Providence, USA",
    description:
      "Founded a venture-backed recruitment-tech startup focused on diversity and inclusion. Raised $5M+, secured $12M+ in partnerships, reduced churn by 39%, and scaled user base by 32% MoM. Earned global recognition from Techstars, Y Combinator, and leading VCs.",
    skills: ["Entrepreneurship", "Startup Leadership", "Fundraising & Partnerships", "Diversity & Inclusion", "Growth Strategy"],
  },
  {
    period: "2020 — 2021",
    title: "Project Manager",
    company: "Play Gameworks | Providence, USA",
    description:
      "Managed a 20-member engineering & design team, aligning product development with GTM strategy. Conducted 50+ user interviews and reduced load times by 30%, onboarding 270+ users in two weeks.",
    skills: ["Project Management", "Product Development", "User Research", "Agile Delivery"],
  },
  {
    period: "2020",
    title: "Technical Project Manager",
    company: "Beeznests Connections Ltd. | British Columbia, Canada",
    description:
      "Led a 15-member engineering team, optimized CI/CD pipelines with Docker & caching, reducing load times by 25%. Increased engagement by 66% in one month through agile roadmap execution and OKRs.",
    skills: ["Technical Leadership", "CI/CD & Cloud Deployment", "Agile & OKRs", "Team Management"],
  },
]

const education = [
  {
    institution: "Indian Institute of Management (IIM) – Calcutta",
    program: "Global Business Management",
    period: "2024 — 2025",
    description:
      "Focused on strategic leadership, enterprise transformation, and global business practices, strengthening ability to align technology programs with large-scale business outcomes.",
    skills: [
      "Global Business Strategy",
      "Enterprise Leadership",
      "Program Management",
      "Innovation Management",
    ],
  },
  {
    institution: "Bengal College of Engineering & Technology",
    program: "Bachelor’s in Information Technology",
    period: "2017 — 2021",
    description:
      "Built a strong foundation in software engineering, cloud systems, and programming frameworks, while engaging in projects that applied technical knowledge to solve real-world challenges.",
    skills: [
      "Information Technology",
      "Software Engineering",
      "Programming",
      "Cloud Systems",
    ],
  },
]

const skills = [
  {
    category: "Tools & Technology",
    description:
      "Proficient across a wide spectrum of languages, frameworks, and platforms. Skilled at bridging engineering execution with business outcomes.",
    items: [
      "Python",
      "Go",
      "Java",
      "C/C++",
      "JavaScript",
      "React",
      "Node.js",
      "MongoDB",
      "Firebase",
      "Redis",
      "SQL",
      "Vue",
      "Express",
    ],
  },
  {
    category: "Cloud & Systems",
    description:
      "Hands-on experience deploying and scaling products on leading cloud ecosystems and enterprise software.",
    items: [
      "AWS",
      "Google Cloud",
      "IBM Cloud",
      "SAP",
      "Oracle",
      "ERP Systems",
      "Linux",
      "MacOS",
      "Windows",
    ],
  },
  {
    category: "Management & Tools",
    description:
      "Strong expertise in program and project management, cross-functional leadership, and data-driven execution.",
    items: [
      "Agile & Scrum",
      "Jira",
      "Azure DevOps",
      "Power BI",
      "Trello",
      "Mailchimp",
      "Google Suite",
      "MS Office",
    ],
  },
]

const certifications = [
  {
    description:
      "Globally recognized certifications that reflect a focus on operational excellence and data-driven decision making.",
    items: [
      "Six Sigma Yellow Belt — 2020",
      "Lean Sigma Yellow Belt — 2020",
      "IBM Certified: Data Science & Big Data — 2020",
    ],
  },
]

export function AboutSection() {
  return (
    <section id="about" className="py-20 px-6 bg-card">
      <div className="max-w-4xl mx-auto">
        <div className="space-y-12">
          {/* About Text */}
          <h2 className="text-3xl font-bold">About</h2>
          <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
            <p className="text-lg leading-relaxed">
              <span className="text-primary font-medium">
                Aman Rizvi is a standout leader at the forefront of technology, business, and innovation.
              </span>{" "}
              With over four years of proven achievements, he has earned recognition as one of the brightest young minds shaping industries through{" "}
              <span className="text-primary font-medium">entrepreneurship, enterprise leadership, and product innovation</span>.
            </p>

            <p className="text-lg leading-relaxed">
              He began his career at <span className="text-primary font-medium">Amazon</span>, engineering large-scale, customer-centric systems that strengthened his technical foundation. 
              Soon after, he co-founded <span className="text-primary font-medium">Seecking</span>, a recruitment-tech startup that reimagined hiring through diversity and inclusion. 
              Under his leadership, Seecking <span className="text-primary font-medium">raised $5M+, secured $12M in partnerships, and achieved 32% month-over-month growth</span>, 
              gaining international recognition through <span className="text-primary font-medium">Techstars</span> and <span className="text-primary font-medium">Y Combinator</span>.
            </p>

            <p className="text-lg leading-relaxed">
              Currently, Aman is a <span className="text-primary font-medium">Head of Product & Strategy at VirtueS</span>, 
              where he spearheads <span className="text-primary font-medium">AI-driven manufacturing innovations, ERP transformations, and programs worth $30M–$50M</span>. 
              His leadership has <span className="text-primary font-medium">accelerated project delivery by 20%, boosted efficiency by 30%</span>, 
              and established him as a trusted driver of enterprise-wide impact.
            </p>

            <p className="text-lg leading-relaxed">
              A graduate of <span className="text-primary font-medium">IIM Calcutta’s Global Business Management program</span>, 
              Aman combines entrepreneurial grit with executive-level strategy, enabling him to lead teams, scale ventures, and deliver at the highest levels. 
              Widely recognized as a <span className="text-primary font-medium">star performer and industry leader</span>, 
              he continues to push boundaries and set new standards for what’s possible in technology and business.
            </p>
          </div>

          {/* Experience Section */}
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold">Experience</h3>
            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <Card key={index} className="border-2 border-border hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                        <div>
                          <h4 className="text-lg font-semibold">{exp.title}</h4>
                          <p className="text-primary font-medium">{exp.company}</p>
                        </div>
                        <p className="text-sm text-muted-foreground font-mono">{exp.period}</p>
                      </div>
                      <p className="text-muted-foreground leading-relaxed">{exp.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {exp.skills.map((skill, skillIndex) => (
                          <Badge key={skillIndex} variant="secondary">
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

          {/* Executive Education & Technical Foundations Section */}
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold">Executive Education & Technical Foundations</h3>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <Card key={index} className="border-2 border-border hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                        <div>
                          <h4 className="text-lg font-semibold">{edu.program}</h4>
                          <p className="text-primary font-medium">{edu.institution}</p>
                        </div>
                        <p className="text-sm text-muted-foreground font-mono">{edu.period}</p>
                      </div>
                      <p className="text-muted-foreground leading-relaxed">{edu.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {edu.skills.map((skill, skillIndex) => (
                          <Badge key={skillIndex} variant="secondary">
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

          {/* Skills Section */}
          {/* Skills Section with One Border */}
<div className="space-y-8 border-2 border-border rounded-lg p-6 hover:shadow-lg transition-shadow">
  <h3 className="text-2xl font-semibold">Skills</h3>
  {skills.map((skillCategory, index) => (
    <div key={index} className="mb-8">
      <h4 className="text-lg font-semibold mb-2">{skillCategory.category}</h4>
      <p className="text-muted-foreground mb-4">{skillCategory.description}</p>
      <div className="flex flex-wrap gap-2">
        {skillCategory.items.map((item, itemIndex) => (
          <Badge key={itemIndex} variant="secondary">
            {item}
          </Badge>
        ))}
      </div>
    </div>
  ))}
</div>

{/* Certifications Section with border and better gap */}
<div className="space-y-8 border-2 border-border rounded-lg p-6 hover:shadow-lg transition-shadow">
  <h3 className="text-2xl font-semibold">Certifications</h3>
  {certifications.map((cert, index) => (
    <div key={index}>
      <p className="text-muted-foreground mb-4">{cert.description}</p>
      <div className="flex flex-row flex-wrap gap-x-10 gap-y-6">
        {cert.items.map((item, itemIndex) => {
          const [name, year] = item.split("—").map(str => str.trim())
          return (
            <div key={itemIndex} className="flex flex-col items-center">
              <Badge variant="secondary" className="whitespace-nowrap mb-1 px-5 py-2 text-base">
                {name}
              </Badge>
              <span className="text-xs text-muted-foreground">{year}</span>
            </div>
          )
        })}
      </div>
    </div>
  ))}
</div>



        </div>
      </div>
    </section>
  )
}
