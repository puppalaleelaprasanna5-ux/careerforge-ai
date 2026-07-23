import { motion } from "framer-motion";
import { Gauge, Target, Wand2, ShieldCheck, LineChart, FileSearch } from "lucide-react";
import { GlassCard } from "@/components/glass-card";

const items = [
  { icon: Gauge, title: "ATS Score in seconds", body: "See exactly how applicant tracking systems will parse — and rank — your resume." },
  { icon: Target, title: "Job-description match", body: "Paste a JD, get a match percentage plus the exact keywords you're missing." },
  { icon: Wand2, title: "AI rewrite suggestions", body: "Concrete bullet-level rewrites tuned to your role, seniority and target company." },
  { icon: FileSearch, title: "Skills extraction", body: "Every hard and soft skill detected, normalized, and mapped to industry taxonomies." },
  { icon: LineChart, title: "Progress tracking", body: "Track every version. Watch your score climb across iterations and target roles." },
  { icon: ShieldCheck, title: "Private by design", body: "Your resume stays yours. Never sold, never used to train models." },
];

export function Features() {
  return (
    <section id="features" className="relative py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <div className="text-xs uppercase tracking-[0.2em] text-primary-glow">Features</div>
          <h2 className="mt-3 text-4xl font-semibold tracking-tight md:text-5xl">
            Everything a top recruiter would tell you — automated.
          </h2>
          <p className="mt-4 text-muted-foreground">
            Six focused tools that turn a resume from "fine" into "obvious yes."
          </p>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {items.map((it, i) => (
            <motion.div
              key={it.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
            >
              <GlassCard className="h-full">
                <div className="grid h-11 w-11 place-items-center rounded-xl bg-primary/15 ring-1 ring-primary/30">
                  <it.icon className="h-5 w-5 text-primary-glow" />
                </div>
                <h3 className="mt-5 text-lg font-semibold">{it.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{it.body}</p>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
