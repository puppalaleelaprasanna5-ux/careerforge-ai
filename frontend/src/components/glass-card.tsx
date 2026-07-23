import { cn } from "@/lib/utils";
import type { HTMLAttributes } from "react";

export function GlassCard({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "glass rounded-2xl p-6 shadow-[0_1px_0_0_oklch(1_0_0_/_0.05)_inset,0_20px_60px_-30px_oklch(0_0_0_/_0.6)]",
        "transition-all duration-300 hover:border-primary/30",
        className,
      )}
      {...props}
    />
  );
}
