import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  FileText,
  Sparkles,
  Gauge,
  Upload,
  ArrowRight,
  Activity,
  ChevronRight,
} from "lucide-react";
import { StatCard } from "@/components/dashboard/stat-card";
import { GlassCard } from "@/components/glass-card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { analyses, resumes, activity, currentUser } from "@/lib/placeholder-data";

export const Route = createFileRoute("/dashboard/")({
  head: () => ({
    meta: [
      { title: "Dashboard — CareerForge AI" },
      { name: "description", content: "Your resume analytics at a glance." },
      { property: "og:title", content: "Dashboard — CareerForge AI" },
      { property: "og:description", content: "Your resume analytics at a glance." },
    ],
  }),
  component: DashboardHome,
});

function DashboardHome() {
  const avgScore = Math.round(analyses.reduce((s, a) => s + a.atsScore, 0) / analyses.length);
  const latest = analyses[0];

  return (
    <div className="space-y-6">
      <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
        <h1 className="font-display text-3xl font-semibold tracking-tight md:text-4xl">
          Welcome back, {currentUser.name.split(" ")[0]}
        </h1>
        <p className="mt-1 text-muted-foreground">Here's how your resumes are performing this week.</p>
      </motion.div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <StatCard label="Total resumes" value={resumes.length} hint="+1 this week" icon={FileText} />
        <StatCard label="Total analyses" value={analyses.length + 4} hint="+3 this week" icon={Sparkles} />
        <StatCard label="Avg ATS score" value={avgScore} hint="Up 6 pts" icon={Gauge} tone="success" />
        <StatCard label="Best match %" value={`${Math.max(...analyses.map((a) => a.matchPercent))}%`} hint="Design Lead · Notion" icon={Activity} tone="warning" />
      </div>

      <div className="grid gap-4 lg:grid-cols-3">
        {/* Latest analysis */}
        <GlassCard className="lg:col-span-2">
          <div className="mb-4 flex items-center justify-between">
            <div>
              <div className="text-xs uppercase tracking-wider text-muted-foreground">Latest analysis</div>
              <div className="font-display text-xl font-semibold">{latest.jobTitle} · {latest.company}</div>
            </div>
            <Button asChild variant="ghost" size="sm" className="rounded-full">
              <Link to="/dashboard/analysis/$id" params={{ id: latest.id }}>
                Open <ChevronRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            <div className="rounded-xl border border-border/60 bg-card/40 p-4">
              <div className="text-xs text-muted-foreground">ATS Score</div>
              <div className="mt-1 font-display text-3xl font-semibold text-primary-glow">{latest.atsScore}</div>
            </div>
            <div className="rounded-xl border border-border/60 bg-card/40 p-4">
              <div className="text-xs text-muted-foreground">Match</div>
              <div className="mt-1 font-display text-3xl font-semibold text-success">{latest.matchPercent}%</div>
            </div>
            <div className="rounded-xl border border-border/60 bg-card/40 p-4">
              <div className="text-xs text-muted-foreground">Missing keywords</div>
              <div className="mt-1 font-display text-3xl font-semibold text-warning">{latest.missingKeywords.length}</div>
            </div>
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            {latest.skillsFound.slice(0, 6).map((s) => (
              <Badge key={s} variant="secondary" className="rounded-full bg-primary/10 text-primary-glow">
                {s}
              </Badge>
            ))}
          </div>
        </GlassCard>

        {/* Quick upload */}
        <GlassCard>
          <div className="text-xs uppercase tracking-wider text-muted-foreground">Quick upload</div>
          <div className="mt-1 font-display text-xl font-semibold">Analyze a new resume</div>
          <p className="mt-2 text-sm text-muted-foreground">Drop a PDF and paste the JD to score in seconds.</p>
          <Button asChild className="glow-primary mt-6 w-full rounded-xl bg-primary hover:bg-primary/90">
            <Link to="/dashboard/upload">
              <Upload className="mr-2 h-4 w-4" /> Upload resume
            </Link>
          </Button>
          <Button asChild variant="ghost" className="mt-2 w-full rounded-xl">
            <Link to="/dashboard/history">Browse history <ArrowRight className="ml-1 h-4 w-4" /></Link>
          </Button>
        </GlassCard>
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        <GlassCard>
          <div className="mb-3 flex items-center justify-between">
            <div className="font-display text-lg font-semibold">Recent activity</div>
          </div>
          <ul className="divide-y divide-border/60">
            {activity.map((e) => (
              <li key={e.id} className="flex items-center gap-3 py-3">
                <span className="grid h-8 w-8 place-items-center rounded-lg bg-primary/15 ring-1 ring-primary/30">
                  <Sparkles className="h-4 w-4 text-primary-glow" />
                </span>
                <div className="min-w-0 flex-1">
                  <div className="truncate text-sm">{e.label}</div>
                  <div className="text-xs text-muted-foreground">{e.time}</div>
                </div>
              </li>
            ))}
          </ul>
        </GlassCard>

        <GlassCard>
          <div className="mb-3 flex items-center justify-between">
            <div className="font-display text-lg font-semibold">Resume history</div>
            <Button asChild variant="ghost" size="sm" className="rounded-full">
              <Link to="/dashboard/history">View all <ChevronRight className="ml-1 h-4 w-4" /></Link>
            </Button>
          </div>
          <ul className="space-y-2">
            {resumes.slice(0, 4).map((r) => (
              <li key={r.id} className="flex items-center gap-3 rounded-xl border border-border/60 bg-card/40 p-3 transition-colors hover:border-primary/30">
                <span className="grid h-9 w-9 place-items-center rounded-lg bg-primary/10">
                  <FileText className="h-4 w-4 text-primary-glow" />
                </span>
                <div className="min-w-0 flex-1">
                  <div className="truncate text-sm font-medium">{r.filename}</div>
                  <div className="text-xs text-muted-foreground">
                    {new Date(r.uploadedAt).toLocaleDateString()} · {r.sizeKb} KB
                  </div>
                </div>
                <Badge
                  variant="secondary"
                  className={
                    r.status === "analyzed"
                      ? "rounded-full bg-success/15 text-success"
                      : "rounded-full bg-warning/15 text-warning"
                  }
                >
                  {r.status}
                </Badge>
              </li>
            ))}
          </ul>
        </GlassCard>
      </div>
    </div>
  );
}
