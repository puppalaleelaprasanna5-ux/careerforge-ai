import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Search, ArrowUpDown, ChevronRight, FileText } from "lucide-react";
import { GlassCard } from "@/components/glass-card";
import { Input } from "@/components/ui/input";
import {
  Select, SelectContent, SelectItem, SelectTrigger, SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { analyses } from "@/lib/placeholder-data";

export const Route = createFileRoute("/dashboard/history")({
  head: () => ({
    meta: [
      { title: "Resume history — CareerForge AI" },
      { name: "description", content: "Search, filter, and review every resume analysis you've run." },
      { property: "og:title", content: "Resume history — CareerForge AI" },
      { property: "og:description", content: "Search, filter, and review every resume analysis you've run." },
    ],
  }),
  component: History,
});

function scoreTone(v: number) {
  if (v >= 85) return "text-success";
  if (v >= 70) return "text-primary-glow";
  return "text-warning";
}

function History() {
  const [q, setQ] = useState("");
  const [filter, setFilter] = useState("all");
  const [sort, setSort] = useState("recent");

  const rows = useMemo(() => {
    let r = [...analyses];
    if (q) r = r.filter((a) => (a.jobTitle + a.company + a.resumeName).toLowerCase().includes(q.toLowerCase()));
    if (filter === "top") r = r.filter((a) => a.atsScore >= 85);
    if (filter === "needs") r = r.filter((a) => a.atsScore < 85);
    if (sort === "recent") r.sort((a, b) => +new Date(b.createdAt) - +new Date(a.createdAt));
    if (sort === "score") r.sort((a, b) => b.atsScore - a.atsScore);
    if (sort === "match") r.sort((a, b) => b.matchPercent - a.matchPercent);
    return r;
  }, [q, filter, sort]);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-display text-3xl font-semibold tracking-tight">Resume history</h1>
        <p className="mt-1 text-muted-foreground">Every analysis you've run, in one place.</p>
      </div>

      <GlassCard>
        <div className="grid gap-3 md:grid-cols-[1fr_auto_auto]">
          <div className="relative">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Search by role, company, filename…"
              className="rounded-xl bg-card/40 pl-9"
            />
          </div>
          <Select value={filter} onValueChange={setFilter}>
            <SelectTrigger className="w-40 rounded-xl bg-card/40"><SelectValue placeholder="Filter" /></SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All analyses</SelectItem>
              <SelectItem value="top">ATS ≥ 85</SelectItem>
              <SelectItem value="needs">Needs work</SelectItem>
            </SelectContent>
          </Select>
          <Select value={sort} onValueChange={setSort}>
            <SelectTrigger className="w-40 rounded-xl bg-card/40">
              <ArrowUpDown className="mr-2 h-4 w-4" /> <SelectValue placeholder="Sort" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="recent">Most recent</SelectItem>
              <SelectItem value="score">ATS score</SelectItem>
              <SelectItem value="match">Match %</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Table (desktop) */}
        <div className="mt-6 hidden md:block">
          <Table>
            <TableHeader>
              <TableRow className="border-border/60">
                <TableHead>Resume</TableHead>
                <TableHead>Role · Company</TableHead>
                <TableHead>ATS</TableHead>
                <TableHead>Match</TableHead>
                <TableHead>Date</TableHead>
                <TableHead className="text-right">Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {rows.map((a) => (
                <TableRow key={a.id} className="border-border/60 transition-colors hover:bg-card/40">
                  <TableCell className="max-w-[220px] truncate font-medium">{a.resumeName}</TableCell>
                  <TableCell>
                    <div className="font-medium">{a.jobTitle}</div>
                    <div className="text-xs text-muted-foreground">{a.company}</div>
                  </TableCell>
                  <TableCell className={`font-semibold ${scoreTone(a.atsScore)}`}>{a.atsScore}</TableCell>
                  <TableCell>{a.matchPercent}%</TableCell>
                  <TableCell className="text-muted-foreground">{new Date(a.createdAt).toLocaleDateString()}</TableCell>
                  <TableCell className="text-right">
                    <Button asChild variant="ghost" size="sm" className="rounded-full">
                      <Link to="/dashboard/analysis/$id" params={{ id: a.id }}>Open <ChevronRight className="ml-1 h-4 w-4" /></Link>
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        {/* Cards (mobile) */}
        <div className="mt-6 grid gap-3 md:hidden">
          {rows.map((a) => (
            <Link
              key={a.id}
              to="/dashboard/analysis/$id"
              params={{ id: a.id }}
              className="rounded-xl border border-border/60 bg-card/40 p-4 transition-colors hover:border-primary/40"
            >
              <div className="flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-lg bg-primary/10">
                  <FileText className="h-4 w-4 text-primary-glow" />
                </span>
                <div className="min-w-0 flex-1">
                  <div className="truncate font-medium">{a.jobTitle}</div>
                  <div className="truncate text-xs text-muted-foreground">{a.company} · {a.resumeName}</div>
                </div>
              </div>
              <div className="mt-3 flex flex-wrap gap-2">
                <Badge variant="secondary" className={`rounded-full bg-primary/10 ${scoreTone(a.atsScore)}`}>ATS {a.atsScore}</Badge>
                <Badge variant="secondary" className="rounded-full bg-success/10 text-success">Match {a.matchPercent}%</Badge>
                <Badge variant="secondary" className="rounded-full">{new Date(a.createdAt).toLocaleDateString()}</Badge>
              </div>
            </Link>
          ))}
        </div>
      </GlassCard>
    </div>
  );
}
