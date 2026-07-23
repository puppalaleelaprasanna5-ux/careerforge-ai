import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Download, RefreshCw, CheckCircle2, AlertTriangle, Lightbulb, Sparkles } from "lucide-react";
import { GlassCard } from "@/components/glass-card";
import { ScoreGauge } from "@/components/dashboard/score-gauge";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { analyses } from "@/lib/placeholder-data";

export const Route = createFileRoute("/dashboard/result")({
  head: () => ({
    meta: [
      { title: "Analysis result — CareerForge AI" },
      { name: "description", content: "Your latest resume analysis result." },
      { property: "og:title", content: "Analysis result — CareerForge AI" },
      { property: "og:description", content: "Your latest resume analysis result." },
    ],
  }),
  component: ResultPage,
});

function ResultPage() {
  const a = analyses[0];

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <div className="text-xs uppercase tracking-wider text-primary-glow">Latest analysis</div>
          <h1 className="mt-1 font-display text-3xl font-semibold tracking-tight md:text-4xl">
            {a.jobTitle} · <span className="text-muted-foreground">{a.company}</span>
          </h1>
          <p className="mt-1 text-sm text-muted-foreground">
            {a.resumeName} · analyzed {new Date(a.createdAt).toLocaleDateString()}
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="secondary" className="rounded-full">
            <RefreshCw className="mr-2 h-4 w-4" /> Analyze again
          </Button>
          <Button className="glow-primary rounded-full bg-primary hover:bg-primary/90">
            <Download className="mr-2 h-4 w-4" /> Download report
          </Button>
        </div>
      </div>

      <div className="grid gap-5 lg:grid-cols-3">
        <GlassCard className="lg:col-span-1">
          <div className="flex flex-col items-center">
            <ScoreGauge value={a.atsScore} />
            <div className="mt-4 text-center text-sm text-muted-foreground">
              {a.atsScore >= 85 ? "Excellent ATS parseability" : "Room to sharpen"}
            </div>
          </div>
        </GlassCard>

        <GlassCard className="lg:col-span-2">
          <div className="text-xs uppercase tracking-wider text-muted-foreground">Job match</div>
          <div className="mt-1 flex items-baseline gap-3">
            <div className="font-display text-5xl font-semibold text-gradient">{a.matchPercent}%</div>
            <div className="text-sm text-muted-foreground">to {a.jobTitle}</div>
          </div>
          <Progress value={a.matchPercent} className="mt-4 h-2" />
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{a.summary}</p>
          <Button asChild variant="ghost" size="sm" className="mt-4 rounded-full">
            <Link to="/dashboard/analysis/$id" params={{ id: a.id }}>
              <Sparkles className="mr-2 h-4 w-4" /> Open full breakdown
            </Link>
          </Button>
        </GlassCard>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <GlassCard>
          <div className="mb-4 flex items-center gap-2">
            <div className="grid h-9 w-9 place-items-center rounded-lg bg-success/15 ring-1 ring-success/30">
              <CheckCircle2 className="h-4 w-4 text-success" />
            </div>
            <div className="font-display text-lg font-semibold">Skills found</div>
          </div>
          <div className="flex flex-wrap gap-2">
            {a.skillsFound.map((s) => (
              <Badge key={s} variant="secondary" className="rounded-full bg-success/10 text-success">
                {s}
              </Badge>
            ))}
          </div>
        </GlassCard>

        <GlassCard>
          <div className="mb-4 flex items-center gap-2">
            <div className="grid h-9 w-9 place-items-center rounded-lg bg-warning/15 ring-1 ring-warning/30">
              <AlertTriangle className="h-4 w-4 text-warning" />
            </div>
            <div className="font-display text-lg font-semibold">Missing keywords</div>
          </div>
          <div className="flex flex-wrap gap-2">
            {a.missingKeywords.map((s) => (
              <Badge key={s} variant="secondary" className="rounded-full bg-warning/10 text-warning">
                {s}
              </Badge>
            ))}
          </div>
        </GlassCard>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <GlassCard>
          <div className="mb-3 font-display text-lg font-semibold">Strengths</div>
          <ul className="space-y-3">
            {a.strengths.map((s, i) => (
              <motion.li
                key={s}
                initial={{ opacity: 0, x: -6 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.06 }}
                className="flex gap-3 text-sm"
              >
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-success" /> <span>{s}</span>
              </motion.li>
            ))}
          </ul>
        </GlassCard>
        <GlassCard>
          <div className="mb-3 font-display text-lg font-semibold">Weaknesses</div>
          <ul className="space-y-3">
            {a.weaknesses.map((s, i) => (
              <motion.li
                key={s}
                initial={{ opacity: 0, x: -6 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.06 }}
                className="flex gap-3 text-sm"
              >
                <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0 text-warning" /> <span>{s}</span>
              </motion.li>
            ))}
          </ul>
        </GlassCard>
      </div>

      <GlassCard>
        <div className="mb-4 flex items-center gap-2">
          <div className="grid h-9 w-9 place-items-center rounded-lg bg-primary/15 ring-1 ring-primary/30">
            <Lightbulb className="h-4 w-4 text-primary-glow" />
          </div>
          <div className="font-display text-lg font-semibold">Suggestions to improve</div>
        </div>
        <ol className="space-y-3">
          {a.suggestions.map((s, i) => (
            <li key={s} className="flex gap-3 rounded-xl border border-border/60 bg-card/40 p-3 text-sm">
              <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-primary/20 text-xs text-primary-glow">
                {i + 1}
              </span>
              <span>{s}</span>
            </li>
          ))}
        </ol>
      </GlassCard>
    </div>
  );
}
