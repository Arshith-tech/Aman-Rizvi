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


export function AboutSection() {
  return (
    <section id="about" className="py-20 px-6 bg-card">
      <div className="max-w-4xl mx-auto">
        <div className="space-y-12">
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
        </div>
      </div>
    </section>
  )
}
