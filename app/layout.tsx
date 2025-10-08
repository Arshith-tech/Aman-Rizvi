import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"
 
// ✅ Complete SEO Metadata Setup
export const metadata: Metadata = {
  title: "Aman Rizvi | Head of Product & Strategy | DaVinci Smart Manufacturing",
  description:
    "Official website of Aman Rizvi, Head of Product & Strategy at DaVinci Smart Manufacturing. Explore his leadership in AI-driven industrial innovation, digital transformation, and smart manufacturing strategy.",
  keywords: [
    "Aman Rizvi",
    "Aman Rizvi DaVinci",
    "Aman Rizvi Smart Manufacturing",
    "Head of Product & Strategy DaVinci",
    "AI Manufacturing Leader",
    "Product Strategy Expert",
    "Industrial AI",
    "Manufacturing Transformation",
    "Aman Rizvi Portfolio",
  ],
  authors: [{ name: "Aman Rizvi" }],
  creator: "Aman Rizvi",
  publisher: "Aman Rizvi",
  generator: "Next.js v15 • OpenAI GPT-5",
  metadataBase: new URL("https://www.amanrizvi.com"),
  alternates: {
    canonical: "https://www.amanrizvi.com/",
  },
  openGraph: {
    type: "website",
    url: "https://www.amanrizvi.com/",
    title: "Aman Rizvi | Head of Product & Strategy | DaVinci Smart Manufacturing",
    description:
      "Discover the work and vision of Aman Rizvi — leading AI-powered manufacturing innovation at DaVinci Smart Manufacturing.",
    images: [
      {
        url: "https://www.amanrizvi.com/pro.jpg",
        width: 1200,
        height: 630,
        alt: "Aman Rizvi — Head of Product & Strategy at DaVinci Smart Manufacturing",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Aman Rizvi | Head of Product & Strategy | DaVinci Smart Manufacturing",
    description:
      "Explore Aman Rizvi’s leadership in AI-driven smart manufacturing and product strategy at DaVinci.",
    images: ["https://www.amanrizvi.com/pro.png"],
  },
}
 
// ✅ Root Layout Component
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
<html lang="en" className="dark">
<head>
        {/* ✅ Canonical + Robots */}
<link rel="canonical" href="https://www.amanrizvi.com/" />
<meta name="robots" content="index, follow" />
 
        {/* ✅ Structured Data (JSON-LD Schema) */}
<script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Aman Rizvi",
              alternateName: "Aman Rizvi DaVinci",
              jobTitle: "Head of Product & Strategy",
              worksFor: {
                "@type": "Organization",
                name: "DaVinci Smart Manufacturing",
                url: "https://www.davinci.ai",
              },
              url: "https://www.amanrizvi.com",
              image: "https://www.amanrizvi.com/pro.jpg",
              sameAs: [
                "https://www.linkedin.com/in/aman-rizvi-2a77b6169/",
                "https://www.davinci.ai",
              ],
              description:
                "Aman Rizvi is the Head of Product & Strategy at DaVinci Smart Manufacturing, driving industrial AI transformation and digital strategy for next-gen manufacturing enterprises.",
              nationality: "Indian",
              gender: "Male",
            }),
          }}
        />
</head>
 
      <body
        className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased`}
>
<Suspense fallback={null}>{children}</Suspense>
<Analytics />
</body>
</html>
  )
}
