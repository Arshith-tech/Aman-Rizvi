import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, MapPin, Calendar, Users } from "lucide-react"

const upcomingEvents = [
  {
    title: "Attendee",
    event: "The Third Saudi International Iron & Steel Conference 2025",
    location: "Riyadh, Saudi Arabia",
    date: "October 14–16, 2025",
    audience: "1000+ attendees",
    type: "Conference",
    description:
      "Attending the region’s premier steel industry summit in Riyadh, engaging with global leaders on the future of iron, steel, and advanced manufacturing.",
    topics: ["Iron & Steel Industry", "Manufacturing Innovation", "Global Networking"],
  },
  {
    title: "Presenting",
    event: "International Symposium on Mechanical Engineering (ISME 2025)",
    location: "Kolkata, India",
    date: "October 30 – November 2, 2025",
    audience: "800+ attendees",
    type: "Conference",
    description:
      "Presenting groundbreaking applications of AI in manufacturing systems and strategies for program leadership in Industry 4.0.",
    topics: ["AI in Manufacturing", "Program Leadership", "Industry 4.0"],
  },
  {
    title: "Presenting",
    event: "Middle East Iron & Steel 2025",
    location: "Dubai, United Arab Emirates",
    date: "November 17–19, 2025",
    audience: "900+ attendees",
    type: "Conference",
    description:
      "Delivering insights on enterprise program management and AI innovation reshaping the global steel industry.",
    topics: ["Enterprise Program Management", "AI Innovation", "Industrial Transformation"],
  },
]


export function InsightsSection() {
  return (
    <section id="insights" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="space-y-12">
          <div className="flex items-center justify-between">
            <h2 className="text-3xl font-bold">Upcoming Events</h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {upcomingEvents.map((event, index) => (
              <Card key={index} className="group hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <Badge variant="outline">{event.type}</Badge>
                      <div className="text-sm text-muted-foreground">{event.date}</div>
                    </div>
                    <CardTitle className="text-xl group-hover:text-primary transition-colors">{event.title}</CardTitle>
                    <div className="text-primary font-medium">{event.event}</div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <p className="text-muted-foreground leading-relaxed">{event.description}</p>

                    <div className="flex flex-wrap gap-2">
                      {event.topics.map((topic, topicIndex) => (
                        <Badge key={topicIndex} variant="secondary">
                          {topic}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <MapPin className="h-3 w-3" />
                        {event.location}
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="h-3 w-3" />
                        {event.audience}
                      </div>
                    </div>

                    {/*<div className="pt-2">
                      <Button variant="ghost" size="sm" className="group/btn">
                        <Calendar className="mr-2 h-3 w-3" />
                        Add to Calendar
                        <ArrowRight className="ml-1 h-3 w-3 group-hover/btn:translate-x-1 transition-transform" />
                      </Button>
                    </div>*/}
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
