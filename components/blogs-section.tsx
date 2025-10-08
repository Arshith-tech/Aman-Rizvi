"use client"
import React, { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, ExternalLink } from "lucide-react";

interface MediumArticle {
  title: string;
  link: string;
  pubDate: string;
  categories?: string[];
  description: string;
}

// Helper to extract image URL from the description HTML
function extractImageUrl(description: string): string | null {
  const imgRegex = /<img[^>]+src="([^">]+)"/i;
  const match = imgRegex.exec(description);
  return match ? match[1] : null;
}

export function BlogsSection() {
  const [articles, setArticles] = React.useState<MediumArticle[]>([]);

  useEffect(() => {
    const rssUrl = "https://medium.com/feed/@amanrizvi0501";
    const apiUrl = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(rssUrl)}`;
    fetch(apiUrl)
      .then((res) => res.json())
      .then((data) => {
        setArticles(data.items || []);
      })
      .catch((error) => console.error("Error fetching Medium feed:", error));
  }, []);

  const lineClamp2 = {
    display: "-webkit-box",
    WebkitLineClamp: 3,
    WebkitBoxOrient: "vertical" as any,
    overflow: "hidden",
    textOverflow: "ellipsis",
  };

  return (
    <section id="blogs" className="py-20 px-6 bg-card">
      <div className="max-w-6xl mx-auto">
        <div className="space-y-12">
          <div className="flex items-center justify-between">
            <h2 className="text-3xl font-bold">Latest Blog Posts</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((post, index) => {
              const imageUrl = extractImageUrl(post.description);
              return (
                <Card
                  key={index}
                  className="group hover:shadow-lg transition-shadow cursor-pointer"
                >
                  <CardHeader>
                    <div className="space-y-2">
                      <div className="text-sm text-black font-medium">
                        {post.categories && post.categories[0]}
                      </div>
                      <CardTitle
                        style={lineClamp2}
                        className="text-xl text-black group-hover:text-[#141a46] transition-colors"
                      >
                        {post.title}
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {imageUrl && (
                        <img
                          src={imageUrl}
                          alt={post.title}
                          className="w-full h-40 object-cover rounded-md mb-4"
                        />
                      )}

                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          {new Date(post.pubDate).toLocaleDateString()}
                        </div>
                      </div>

                      <div className="pt-2">
                        <Button
                          variant="ghost"
                          size="sm"
                          className="group/btn"
                          onClick={() => window.open(post.link, "_blank")}
                        >
                          Read More
                          <ExternalLink className="ml-2 h-3 w-3 group-hover/btn:translate-x-1 transition-transform" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
