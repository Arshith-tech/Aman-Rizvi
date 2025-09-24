import { Button } from "@/components/ui/button"
import { ArrowRight, Linkedin } from "lucide-react"

// Custom X (Twitter) logo SVG
function XLogo({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      <path d="M18.244 2H21.5l-7.48 8.57L22 22h-6.59l-5.18-6.85L4.5 22H1.24l7.9-9.04L2 2h6.59l4.63 6.13L18.24 2z" />
    </svg>
  )
}

export function HeroSection() {
  return (
    <section className="pt-32 pb-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold text-balance">Aman Rizvi</h1>
              <p className="text-xl text-muted-foreground">Industry Leader • Innovator • Entrepreneur</p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                A star performer in the global tech landscape, Aman Rizvi has been recognized among the Top 28 Under 28 in Tech for his trailblazing contributions as a product innovator, entrepreneur, and program leader. From building venture-backed startups supported by Techstars and Y Combinator to leading multimillion-dollar enterprise programs, Aman’s journey reflects ambition, execution, and impact at scale.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="group" asChild>
                <a href="mailto:hello@amanrizvi.com">
                  Let's Connect
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <div className="flex gap-3">
                {/* X (Twitter) logo button */}
                <Button variant="outline" size="icon" asChild>
                  <a href="https://x.com/amanrizvi0501" target="_blank" rel="noreferrer">
                    <XLogo className="h-4 w-4" />
                  </a>
                </Button>

                {/* LinkedIn button */}
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
                src="/profile.jpg" 
                alt="Profile" 
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
