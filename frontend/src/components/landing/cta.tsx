import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CTA() {
  return (
    <section id="cta" className="relative py-28">
      <div className="mx-auto max-w-4xl px-6">
        <div className="glass-strong relative overflow-hidden rounded-3xl p-12 text-center">
          <div className="pointer-events-none absolute inset-0" style={{ background: "var(--gradient-glow)" }} />
          <div className="relative">
            <h2 className="font-display text-4xl font-semibold tracking-tight md:text-5xl">
              Your next role is one upload away.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
              Free to start. No credit card. Analyze your first resume in under a minute.
            </p>
            <div className="mt-8 flex justify-center">
              <Button asChild size="lg" className="glow-primary rounded-full bg-primary px-7 hover:bg-primary/90">
                <Link to="/register">
                  Get started free <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
