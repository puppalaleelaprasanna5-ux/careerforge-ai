import type { LucideIcon } from "lucide-react";
import { GlassCard } from "@/components/glass-card";
import { cn } from "@/lib/utils";

export function StatCard({
  label,
  value,
  hint,
  icon: Icon,
  tone = "primary",
}: {
  label: string;
  value: string | number;
  hint?: string;
  icon: LucideIcon;
  tone?: "primary" | "success" | "warning";
}) {
  const toneMap = {
    primary: "text-primary-glow bg-primary/15 ring-primary/30",
    success: "text-success bg-success/10 ring-success/30",
    warning: "text-warning bg-warning/10 ring-warning/30",
  } as const;

  return (
    <GlassCard className="group">
      <div className="flex items-start justify-between">
        <div>
          <div className="text-xs uppercase tracking-wider text-muted-foreground">{label}</div>
          <div className="mt-2 font-display text-3xl font-semibold tracking-tight">{value}</div>
          {hint && <div className="mt-1 text-xs text-muted-foreground">{hint}</div>}
        </div>
        <span className={cn("grid h-10 w-10 place-items-center rounded-xl ring-1", toneMap[tone])}>
          <Icon className="h-5 w-5" />
        </span>
      </div>
    </GlassCard>
  );
}
