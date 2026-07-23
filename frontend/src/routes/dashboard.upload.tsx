import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { UploadCloud, FileText, X, Sparkles, Loader2 } from "lucide-react";
import { GlassCard } from "@/components/glass-card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Progress } from "@/components/ui/progress";
import { useUpload } from "@/hooks/use-upload";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/dashboard/upload")({
  head: () => ({
    meta: [
      { title: "Upload resume — CareerForge AI" },
      { name: "description", content: "Upload a resume and paste a job description to analyze." },
      { property: "og:title", content: "Upload resume — CareerForge AI" },
      { property: "og:description", content: "Upload a resume and paste a job description to analyze." },
    ],
  }),
  component: UploadPage,
});

function UploadPage() {
  const nav = useNavigate();
  const { file, progress, status, setFile, simulateUpload } = useUpload();
  const [jd, setJd] = useState("");
  const [drag, setDrag] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const onDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setDrag(false);
    const f = e.dataTransfer.files?.[0];
    if (f) setFile(f);
  };

  const analyze = async () => {
    await simulateUpload();
    setTimeout(() => nav({ to: "/dashboard/result" }), 500);
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-display text-3xl font-semibold tracking-tight">Upload resume</h1>
        <p className="mt-1 text-muted-foreground">PDF or DOCX up to 10MB. Paste the job description for best results.</p>
      </div>

      <div className="grid gap-5 lg:grid-cols-5">
        <GlassCard className="lg:col-span-3">
          <div
            onDragOver={(e) => {
              e.preventDefault();
              setDrag(true);
            }}
            onDragLeave={() => setDrag(false)}
            onDrop={onDrop}
            onClick={() => inputRef.current?.click()}
            className={cn(
              "group cursor-pointer rounded-2xl border-2 border-dashed p-10 text-center transition-all",
              drag
                ? "border-primary/70 bg-primary/10"
                : "border-border/70 hover:border-primary/50 hover:bg-primary/5",
            )}
          >
            <input
              ref={inputRef}
              type="file"
              accept=".pdf,.doc,.docx"
              className="hidden"
              onChange={(e) => e.target.files && setFile(e.target.files[0])}
            />
            <motion.div
              animate={{ y: drag ? -6 : 0 }}
              className="mx-auto grid h-16 w-16 place-items-center rounded-2xl bg-primary/15 ring-1 ring-primary/30"
            >
              <UploadCloud className="h-7 w-7 text-primary-glow" />
            </motion.div>
            <div className="mt-4 font-display text-lg font-semibold">Drop your resume here</div>
            <div className="mt-1 text-sm text-muted-foreground">or click to browse — PDF, DOC, DOCX</div>
          </div>

          {file && (
            <motion.div
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-4 flex items-center gap-3 rounded-xl border border-border/60 bg-card/40 p-3"
            >
              <span className="grid h-10 w-10 place-items-center rounded-lg bg-primary/15">
                <FileText className="h-5 w-5 text-primary-glow" />
              </span>
              <div className="min-w-0 flex-1">
                <div className="truncate text-sm font-medium">{file.name}</div>
                <div className="text-xs text-muted-foreground">{Math.round(file.size / 1024)} KB</div>
                {status === "uploading" && <Progress value={progress} className="mt-2 h-1.5" />}
              </div>
              <Button size="icon" variant="ghost" onClick={() => setFile(null)}>
                <X className="h-4 w-4" />
              </Button>
            </motion.div>
          )}
        </GlassCard>

        <GlassCard className="lg:col-span-2">
          <label className="text-xs uppercase tracking-wider text-muted-foreground">Job description</label>
          <Textarea
            value={jd}
            onChange={(e) => setJd(e.target.value)}
            placeholder="Paste the JD you're applying to — we'll match keywords, seniority signals, and required skills."
            rows={12}
            className="mt-2 resize-none rounded-xl bg-card/40"
          />
          <div className="mt-3 text-xs text-muted-foreground">{jd.length} characters</div>
        </GlassCard>
      </div>

      <div className="flex flex-wrap items-center justify-end gap-3">
        <Button variant="ghost" className="rounded-full" onClick={() => setFile(null)}>
          Clear
        </Button>
        <Button
          onClick={analyze}
          disabled={!file || status === "uploading"}
          className="glow-primary rounded-full bg-primary px-6 hover:bg-primary/90"
        >
          {status === "uploading" ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Analyzing…
            </>
          ) : (
            <>
              <Sparkles className="mr-2 h-4 w-4" /> Analyze resume
            </>
          )}
        </Button>
      </div>
    </div>
  );
}
