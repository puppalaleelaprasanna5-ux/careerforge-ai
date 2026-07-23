import { Link } from "@tanstack/react-router";
import { Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { LANDING_LINKS, APP_NAME } from "@/constants/nav";

export function LandingNav() {
  return (
    <header className="fixed top-4 left-1/2 z-40 w-[min(1120px,calc(100%-2rem))] -translate-x-1/2">
      <div className="glass-strong flex items-center justify-between rounded-full px-4 py-2.5 md:px-6">
        <Link to="/" className="flex items-center gap-2">
          <span className="grid h-8 w-8 place-items-center rounded-xl bg-primary/20 ring-1 ring-primary/40">
            <Sparkles className="h-4 w-4 text-primary-glow" />
          </span>
          <span className="font-display text-sm font-semibold tracking-tight">{APP_NAME}</span>
        </Link>
        <nav className="hidden items-center gap-7 md:flex">
          {LANDING_LINKS.map((l) => (
            <a key={l.href} href={l.href} className="text-sm text-muted-foreground transition-colors hover:text-foreground">
              {l.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <Link to="/login" className="hidden text-sm text-muted-foreground hover:text-foreground sm:inline-block">
            Sign in
          </Link>
          <Button asChild size="sm" className="rounded-full bg-primary hover:bg-primary/90">
            <Link to="/register">Get started</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
