import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { AuthShell } from "@/components/auth-shell";
import { Backdrop } from "@/components/backdrop";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";

export const Route = createFileRoute("/register")({
  head: () => ({
    meta: [
      { title: "Create your account — CareerForge AI" },
      { name: "description", content: "Get your first resume analysis in under a minute." },
      { property: "og:title", content: "Create your account — CareerForge AI" },
      { property: "og:description", content: "Get your first resume analysis in under a minute." },
    ],
  }),
  component: RegisterPage,
});

function RegisterPage() {
  const nav = useNavigate();
  const [loading, setLoading] = useState(false);
  return (
    <div className="dark relative min-h-screen">
      <Backdrop />
      <AuthShell
        title="Create your account"
        subtitle="Free forever plan. No credit card required."
        footer={
          <>
            Already have an account?{" "}
            <Link to="/login" className="text-primary-glow hover:underline">
              Sign in
            </Link>
          </>
        }
      >
        <form
          className="space-y-4"
          onSubmit={(e) => {
            e.preventDefault();
            setLoading(true);
            setTimeout(() => nav({ to: "/dashboard" }), 800);
          }}
        >
          <div className="space-y-2">
            <Label htmlFor="name">Full name</Label>
            <Input id="name" placeholder="Alex Morgan" required className="rounded-xl" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Work email</Label>
            <Input id="email" type="email" placeholder="you@company.com" required className="rounded-xl" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" placeholder="8+ characters" required className="rounded-xl" />
          </div>
          <label className="flex items-start gap-2 text-xs text-muted-foreground">
            <Checkbox id="terms" defaultChecked /> <span>I agree to the Terms and Privacy Policy.</span>
          </label>
          <Button type="submit" className="glow-primary w-full rounded-xl bg-primary hover:bg-primary/90" disabled={loading}>
            {loading ? "Creating account…" : "Create account"}
          </Button>
        </form>
      </AuthShell>
    </div>
  );
}
