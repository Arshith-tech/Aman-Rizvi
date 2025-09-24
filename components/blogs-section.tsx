import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, Calendar, Clock, ExternalLink } from "lucide-react"

const blogPosts = [
  {
    title: "The Cost of Complexity – Why Steelmakers Need Simpler, Modular Systems",
    excerpt:
      "Explores how legacy ERP and MES systems have created hidden “complexity taxes” in steel, draining IT budgets and slowing agility and why modular, purpose-built platforms are now the industry’s most strategic alternative.",
    date: "July 2025",
    readTime: "12 min read",
    category: "Industry Strategy",
    url: "#",
  },
  {
    title: "Redefining Quality in Steel – From Detection to Prevention Excellence",
    excerpt:
      "Argues that steelmakers must move beyond detection-driven quality to prevention-first systems, reducing scrap and rework by up to 40%, while transforming quality into a competitive advantage for premium contracts.",
    date: "Aug 2025",
    readTime: "10 min read",
    category: "Quality & Operations",
    url: "#",
  },
  {
    title: "Closing the Steel Supply Chain Loop – From Raw Material to Customer Commitment",
    excerpt:
      "Makes the case for end-to-end integration across procurement, production, logistics, and customer delivery, showing how real-time synchronization can unlock working capital, cut penalties, and win new contracts.",
    date: "Sept 2025",
    readTime: "11 min read",
    category: "Supply Chain Innovation",
    url: "#",
  },
]

export function BlogsSection() {
  // Inline style objects for multiline truncation
  const lineClamp2: React.CSSProperties = {
  display: "-webkit-box",
  WebkitLineClamp: 3,
  WebkitBoxOrient: "vertical" as any, // cast to any to bypass type error
  overflow: "hidden",
  textOverflow: "ellipsis",
}

const lineClamp6: React.CSSProperties = {
  display: "-webkit-box",
  WebkitLineClamp: 6,
  WebkitBoxOrient: "vertical" as any, // cast to any
  overflow: "hidden",
  textOverflow: "ellipsis",
}


  return (
    <section id="blogs" className="py-20 px-6 bg-card">
      <div className="max-w-6xl mx-auto">
        <div className="space-y-12">
          <div className="flex items-center justify-between">
            <h2 className="text-3xl font-bold">Latest Blog Posts</h2>
            
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <Card
                key={index}
                className="group hover:shadow-lg transition-shadow cursor-pointer"
              >
                <CardHeader>
                  <div className="space-y-2">
                    <div className="text-sm text-primary font-medium">{post.category}</div>
                    <CardTitle
                      style={lineClamp2}
                      className="text-xl group-hover:text-primary transition-colors"
                    >
                      {post.title}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <p style={lineClamp6} className="text-muted-foreground leading-relaxed">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {post.date}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {post.readTime}
                      </div>
                    </div>

                    <div className="pt-2">
                      <Button variant="ghost" size="sm" className="group/btn">
                        Read More
                        <ExternalLink className="ml-2 h-3 w-3 group-hover/btn:translate-x-1 transition-transform" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
