import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, Building2, Calendar, Download, FileText, Sparkles, CheckCircle2, AlertTriangle, Lightbulb } from "lucide-react";
import { GlassCard } from "@/components/glass-card";
import { ScoreGauge } from "@/components/dashboard/score-gauge";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { analyses } from "@/lib/placeholder-data";

export const Route = createFileRoute("/dashboard/analysis/$id")({
  head: ({ params }) => ({
    meta: [
      { title: `Analysis ${params.id} — CareerForge AI` },
      { name: "description", content: "Full resume analysis breakdown." },
      { property: "og:title", content: `Analysis ${params.id} — CareerForge AI` },
      { property: "og:description", content: "Full resume analysis breakdown." },
    ],
  }),
  loader: ({ params }) => {
    const a = analyses.find((x) => x.id === params.id);
    if (!a) throw notFound();
    return a;
  },
  component: AnalysisDetails,
  notFoundComponent: () => (
    <GlassCard className="text-center">
      <div className="font-display text-xl font-semibold">Analysis not found</div>
      <p className="mt-1 text-sm text-muted-foreground">It may have been deleted.</p>
      <Button asChild className="mt-4 rounded-full"><Link to="/dashboard/history">Back to history</Link></Button>
    </GlassCard>
  ),
  errorComponent: () => (
    <GlassCard className="text-center">
      <div className="font-display text-xl font-semibold">Something went wrong</div>
      <Button asChild className="mt-4 rounded-full"><Link to="/dashboard">Go home</Link></Button>
    </GlassCard>
  ),
});

function AnalysisDetails() {
  const a = Route.useLoaderData() as (typeof analyses)[number];

  return (
    <div className="space-y-6">
      <Link to="/dashboard/history" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground">
        <ArrowLeft className="h-4 w-4" /> Back to history
      </Link>

      <div className="flex flex-wrap items-start justify-between gap-4">
        <div className="min-w-0">
          <div className="text-xs uppercase tracking-wider text-primary-glow">Analysis · {a.id}</div>
          <h1 className="mt-1 font-display text-3xl font-semibold tracking-tight md:text-4xl">{a.jobTitle}</h1>
          <div className="mt-2 flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
            <span className="inline-flex items-center gap-1"><Building2 className="h-4 w-4" /> {a.company}</span>
            <span className="inline-flex items-center gap-1"><FileText className="h-4 w-4" /> {a.resumeName}</span>
            <span className="inline-flex items-center gap-1"><Calendar className="h-4 w-4" /> {new Date(a.createdAt).toLocaleString()}</span>
          </div>
        </div>
        <div className="flex gap-2">
          <Button variant="secondary" className="rounded-full"><Sparkles className="mr-2 h-4 w-4" /> Re-analyze</Button>
          <Button className="glow-primary rounded-full bg-primary hover:bg-primary/90"><Download className="mr-2 h-4 w-4" /> Report</Button>
        </div>
      </div>

      <div className="grid gap-5 lg:grid-cols-3">
        <GlassCard className="flex items-center justify-center lg:col-span-1">
          <ScoreGauge value={a.atsScore} />
        </GlassCard>

        <GlassCard className="lg:col-span-2">
          <div className="grid gap-4 sm:grid-cols-3">
            <div>
              <div className="text-xs uppercase tracking-wider text-muted-foreground">Match</div>
              <div className="mt-1 font-display text-3xl font-semibold text-success">{a.matchPercent}%</div>
              <Progress value={a.matchPercent} className="mt-3 h-1.5" />
            </div>
            <div>
              <div className="text-xs uppercase tracking-wider text-muted-foreground">Skills found</div>
              <div className="mt-1 font-display text-3xl font-semibold text-primary-glow">{a.skillsFound.length}</div>
            </div>
            <div>
              <div className="text-xs uppercase tracking-wider text-muted-foreground">Missing</div>
              <div className="mt-1 font-display text-3xl font-semibold text-warning">{a.missingKeywords.length}</div>
            </div>
          </div>
          <div className="mt-5 rounded-xl border border-border/60 bg-card/40 p-4 text-sm leading-relaxed text-muted-foreground">
            {a.summary}
          </div>
        </GlassCard>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <GlassCard>
          <div className="mb-4 flex items-center gap-2">
            <CheckCircle2 className="h-4 w-4 text-success" />
            <div className="font-display text-lg font-semibold">Skills detected</div>
          </div>
          <div className="flex flex-wrap gap-2">
            {a.skillsFound.map((s) => (
              <Badge key={s} variant="secondary" className="rounded-full bg-success/10 text-success">{s}</Badge>
            ))}
          </div>
        </GlassCard>

        <GlassCard>
          <div className="mb-4 flex items-center gap-2">
            <AlertTriangle className="h-4 w-4 text-warning" />
            <div className="font-display text-lg font-semibold">Missing keywords</div>
          </div>
          <div className="flex flex-wrap gap-2">
            {a.missingKeywords.map((s) => (
              <Badge key={s} variant="secondary" className="rounded-full bg-warning/10 text-warning">{s}</Badge>
            ))}
          </div>
        </GlassCard>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <GlassCard>
          <div className="mb-3 font-display text-lg font-semibold">Strengths</div>
          <ul className="space-y-3">
            {a.strengths.map((s) => (
              <li key={s} className="flex gap-3 text-sm"><CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-success" /><span>{s}</span></li>
            ))}
          </ul>
        </GlassCard>
        <GlassCard>
          <div className="mb-3 font-display text-lg font-semibold">Weaknesses</div>
          <ul className="space-y-3">
            {a.weaknesses.map((s) => (
              <li key={s} className="flex gap-3 text-sm"><AlertTriangle className="mt-0.5 h-4 w-4 shrink-0 text-warning" /><span>{s}</span></li>
            ))}
          </ul>
        </GlassCard>
      </div>

      <GlassCard>
        <div className="mb-4 flex items-center gap-2">
          <Lightbulb className="h-4 w-4 text-primary-glow" />
          <div className="font-display text-lg font-semibold">Recommended fixes</div>
        </div>
        <ol className="space-y-3">
          {a.suggestions.map((s, i) => (
            <li key={s} className="flex gap-3 rounded-xl border border-border/60 bg-card/40 p-4 text-sm">
              <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-primary/20 text-xs text-primary-glow">{i + 1}</span>
              <span>{s}</span>
            </li>
          ))}
        </ol>
      </GlassCard>
    </div>
  );
}
