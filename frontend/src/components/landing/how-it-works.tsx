import { motion } from "framer-motion";
import { Upload, Brain, FileCheck } from "lucide-react";
import { GlassCard } from "@/components/glass-card";

const steps = [
  { icon: Upload, title: "Upload your resume", body: "Drag & drop a PDF or DOCX. Paste the job description you're targeting." },
  { icon: Brain, title: "AI reads it end-to-end", body: "We score ATS parseability, match against the JD, and extract every skill and gap." },
  { icon: FileCheck, title: "Ship a stronger version", body: "Apply the suggestions, re-run in one click, and export a recruiter-ready report." },
];

export function HowItWorks() {
  return (
    <section id="how" className="relative py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <div className="text-xs uppercase tracking-[0.2em] text-primary-glow">How it works</div>
          <h2 className="mt-3 text-4xl font-semibold tracking-tight md:text-5xl">
            Three steps. Under sixty seconds.
          </h2>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {steps.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <GlassCard className="h-full">
                <div className="flex items-center gap-3">
                  <span className="grid h-9 w-9 place-items-center rounded-full bg-primary/20 font-display text-sm text-primary-glow ring-1 ring-primary/40">
                    {i + 1}
                  </span>
                  <s.icon className="h-5 w-5 text-primary-glow" />
                </div>
                <h3 className="mt-4 text-lg font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
