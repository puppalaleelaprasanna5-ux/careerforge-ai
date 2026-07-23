import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { Github, Mail } from "lucide-react";
import { AuthShell } from "@/components/auth-shell";
import { Backdrop } from "@/components/backdrop";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export const Route = createFileRoute("/login")({
  head: () => ({
    meta: [
      { title: "Sign in — CareerForge AI" },
      { name: "description", content: "Sign in to your CareerForge AI workspace." },
      { property: "og:title", content: "Sign in — CareerForge AI" },
      { property: "og:description", content: "Sign in to your CareerForge AI workspace." },
    ],
  }),
  component: LoginPage,
});

function LoginPage() {
  const nav = useNavigate();
  const [loading, setLoading] = useState(false);
  return (
    <div className="dark relative min-h-screen">
      <Backdrop />
      <AuthShell
        title="Welcome back"
        subtitle="Sign in to keep analyzing and improving your resume."
        footer={
          <>
            New here?{" "}
            <Link to="/register" className="text-primary-glow hover:underline">
              Create an account
            </Link>
          </>
        }
      >
        <div className="grid grid-cols-2 gap-2">
          <Button variant="secondary" className="rounded-xl">
            <Github className="mr-2 h-4 w-4" /> GitHub
          </Button>
          <Button variant="secondary" className="rounded-xl">
            <Mail className="mr-2 h-4 w-4" /> Google
          </Button>
        </div>
        <div className="flex items-center gap-3 text-xs text-muted-foreground">
          <Separator className="flex-1" /> or continue with email <Separator className="flex-1" />
        </div>
        <form
          className="space-y-4"
          onSubmit={(e) => {
            e.preventDefault();
            setLoading(true);
            setTimeout(() => nav({ to: "/dashboard" }), 700);
          }}
        >
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="you@company.com" required className="rounded-xl" />
          </div>
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Label htmlFor="password">Password</Label>
              <a className="text-xs text-muted-foreground hover:text-foreground" href="#">
                Forgot?
              </a>
            </div>
            <Input id="password" type="password" placeholder="••••••••" required className="rounded-xl" />
          </div>
          <Button type="submit" className="glow-primary w-full rounded-xl bg-primary hover:bg-primary/90" disabled={loading}>
            {loading ? "Signing in…" : "Sign in"}
          </Button>
        </form>
      </AuthShell>
    </div>
  );
}
