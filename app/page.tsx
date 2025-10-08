import { Nav, Footer } from "@/components/nav"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { InsightsSection } from "@/components/insights-section"
import { BlogsSection } from "@/components/blogs-section"
import { ThemeToggle } from "@/components/ui/themetoggle"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Nav />
      <main>
        <HeroSection />
        <AboutSection />
        <InsightsSection />
        <BlogsSection />
      </main>
      <Footer />
    </div>
  )
}
