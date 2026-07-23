import { Link } from "@tanstack/react-router";
import { Sparkles } from "lucide-react";
import type { ReactNode } from "react";
import { GlassCard } from "@/components/glass-card";
import { APP_NAME } from "@/constants/nav";

export function AuthShell({
  title,
  subtitle,
  children,
  footer,
}: {
  title: string;
  subtitle: string;
  children: ReactNode;
  footer: ReactNode;
}) {
  return (
    <div className="relative flex min-h-screen items-center justify-center px-4 py-16">
      <div className="w-full max-w-md">
        <Link to="/" className="mb-8 flex items-center justify-center gap-2">
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-primary/20 ring-1 ring-primary/40">
            <Sparkles className="h-4 w-4 text-primary-glow" />
          </span>
          <span className="font-display text-lg font-semibold">{APP_NAME}</span>
        </Link>
        <GlassCard className="p-8">
          <h1 className="font-display text-2xl font-semibold tracking-tight">{title}</h1>
          <p className="mt-1 text-sm text-muted-foreground">{subtitle}</p>
          <div className="mt-6 space-y-4">{children}</div>
          <div className="mt-6 border-t border-border/60 pt-5 text-center text-sm text-muted-foreground">
            {footer}
          </div>
        </GlassCard>
      </div>
    </div>
  );
}
