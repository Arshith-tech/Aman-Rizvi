"use client"
import Link from "next/link"

export function Nav() {
  return (
    <header className="fixed w-full z-40 backdrop-blur bg-background/80 border-b border-border">
      <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-lg bg-primary flex items-center justify-center text-primary-foreground font-semibold">
            AR
          </div>
          <div>
            <Link href="/" className="text-lg font-medium text-foreground">
              Aman Rizvi
            </Link>
            <div className="text-xs text-muted-foreground">Industry Leader • Innovator • Entrepreneur</div>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-6 text-sm">
          <Link href="#about" className="text-muted-foreground hover:text-foreground transition-colors">
            About
          </Link>
          <Link href="#insights" className="text-muted-foreground hover:text-foreground transition-colors">
            Insights
          </Link>
          <Link href="#blogs" className="text-muted-foreground hover:text-foreground transition-colors">
            Blogs
          </Link>
          <a
            href="mailto:hello@amanrizvi.com"
            className="px-4 py-2 rounded-full border border-border text-sm hover:bg-accent transition-colors"
          >
            Let's Connect
          </a>
        </div>

        <div className="md:hidden">
          <a
            href="mailto:hello@amanrizvi.com"
            className="px-3 py-2 rounded bg-primary text-primary-foreground text-sm"
          >
            Let's Connect
          </a>
        </div>
      </nav>
    </header>
  )
}

export function Footer() {
  return (
    <footer className="mt-12 border-t border-border bg-card">
      <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div>
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-lg bg-primary flex items-center justify-center text-primary-foreground font-semibold">
              AR
            </div>
            <div>
              <div className="font-semibold text-foreground">Aman Rizvi</div>
              <div className="text-sm text-muted-foreground">Industry Leader • Innovator • Entrepreneur</div>
            </div>
          </div>

          <div className="mt-4 text-sm text-muted-foreground">
            Available for speaking engagements, workshops and advisory roles. Connect via email.
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <a href="mailto:hello@amanrizvi.com" className="px-4 py-2 rounded bg-primary text-primary-foreground">
            Let's Connect
          </a>
          <a
            href="https://linktr.ee/amanrizvi0501"
            target="_blank"
            rel="noreferrer"
            className="px-4 py-2 rounded border border-border hover:bg-accent transition-colors"
          >
            Linktree
          </a>
        </div>
      </div>

      <div className="text-center text-xs text-muted-foreground py-6">
        © {new Date().getFullYear()} Aman Rizvi — Built for speaking & collaboration.
      </div>
    </footer>
  )
}
