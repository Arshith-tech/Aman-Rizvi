'use client';

import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Users } from "lucide-react";

type Event = {
  id: number;
  title: string;
  timeline: string;
  location: string;
  audience: string;
  description: string;
  topics: string[];
};

export function InsightsSection() {
  const [upcomingEvents, setUpcomingEvents] = useState<Event[]>([]);

  useEffect(() => {
    async function fetchEvents() {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/upcoming-events`);
        if (!res.ok) throw new Error("Failed to fetch events");
        const json = await res.json();
        const eventsMapped = json.data.map((item: any) => ({
          id: item.id,
          title: item.title,
          timeline: item.timeline,
          location: item.location,
          audience: item.audience,
          description: item.description.trim(),
          topics: item.topic
            ? item.topic.split(",").map((topic: string) => topic.trim())
            : [],
        }));
        setUpcomingEvents(eventsMapped);
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    }
    fetchEvents();
  }, []);

  return (
    <section id="insights" className="py-20 px-6">
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="flex items-center justify-between">
          <h2 className="text-3xl font-bold">Global Engagements & Thought Leadership</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {upcomingEvents.length === 0 ? (
            <p>No upcoming events available.</p>
          ) : (
            upcomingEvents.map((event) => (
              <Card key={event.id} className="group hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <Badge variant="outline">Conference</Badge>
                      <div className="text-sm text-muted-foreground">{event.timeline}</div>
                    </div>
                    <CardTitle className="text-xl group-hover:text-black transition-colors">{event.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <p className="text-black leading-relaxed">{event.description}</p>

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
                  </div>
                </CardContent>
              </Card>
            ))
          )}
        </div>
      </div>
    </section>
  );
}
