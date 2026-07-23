import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { GlassCard } from "@/components/glass-card";

export function Hero() {
  return (
    <section className="relative pt-40 pb-24">
      <div className="mx-auto max-w-5xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mx-auto inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/40 px-3 py-1 text-xs text-muted-foreground backdrop-blur"
        >
          <span className="grid h-4 w-4 place-items-center rounded-full bg-primary/30 text-primary-glow">
            <Sparkles className="h-3 w-3" />
          </span>
          Powered by GPT-grade resume intelligence
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="mt-6 text-5xl font-semibold leading-[1.02] tracking-tight text-gradient md:text-7xl"
        >
          Land the interview.
          <br /> Not the rejection email.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground"
        >
          CareerForge AI reads your resume like a top recruiter would, scores it against any job
          description, and rewrites what's holding you back — in seconds.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row"
        >
          <Button asChild size="lg" className="glow-primary rounded-full bg-primary px-6 hover:bg-primary/90">
            <Link to="/register">
              Analyze my resume <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </Button>
          <Button asChild size="lg" variant="ghost" className="rounded-full">
            <a href="#how">See how it works</a>
          </Button>
        </motion.div>

        <div className="mt-4 inline-flex items-center gap-2 text-xs text-muted-foreground">
          <ShieldCheck className="h-3.5 w-3.5 text-success" />
          Private by default · Your resume is never shared
        </div>
      </div>

      {/* Preview mock */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.35 }}
        className="mx-auto mt-16 max-w-5xl px-6"
      >
        <GlassCard className="overflow-hidden p-2">
          <div className="rounded-xl bg-gradient-to-b from-card/80 to-background/40 p-6">
            <div className="flex items-center justify-between border-b border-border/60 pb-4">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <span className="h-2.5 w-2.5 rounded-full bg-destructive/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-warning/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-success/70" />
                <span className="ml-3">careerforge.ai/analysis/a_01</span>
              </div>
              <span className="rounded-full bg-primary/15 px-2 py-0.5 text-xs text-primary-glow">Live preview</span>
            </div>
            <div className="grid gap-4 pt-6 md:grid-cols-3">
              {[
                { label: "ATS Score", value: "87", tone: "text-primary-glow" },
                { label: "Job Match", value: "82%", tone: "text-success" },
                { label: "Missing keywords", value: "4", tone: "text-warning" },
              ].map((s) => (
                <div key={s.label} className="rounded-xl border border-border/60 bg-card/40 p-4">
                  <div className="text-xs text-muted-foreground">{s.label}</div>
                  <div className={`mt-1 font-display text-3xl font-semibold ${s.tone}`}>{s.value}</div>
                </div>
              ))}
            </div>
            <div className="mt-4 rounded-xl border border-border/60 bg-card/40 p-4 text-left">
              <div className="text-xs uppercase tracking-wider text-muted-foreground">Suggestions</div>
              <ul className="mt-2 space-y-1.5 text-sm">
                <li>• Add a 2-line summary mentioning PLG and retention modeling.</li>
                <li>• Surface Amplitude/Mixpanel by naming your analytics stack.</li>
                <li>• Move your most recent impact bullet to the top of each role.</li>
              </ul>
            </div>
          </div>
        </GlassCard>
      </motion.div>
    </section>
  );
}
