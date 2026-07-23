import { createFileRoute } from "@tanstack/react-router";
import { LandingNav } from "@/components/landing/nav";
import { Hero } from "@/components/landing/hero";
import { Features } from "@/components/landing/features";
import { HowItWorks } from "@/components/landing/how-it-works";
import { Testimonials } from "@/components/landing/testimonials";
import { CTA } from "@/components/landing/cta";
import { Footer } from "@/components/landing/footer";
import { Backdrop } from "@/components/backdrop";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "CareerForge AI — AI resume analysis that gets you hired" },
      {
        name: "description",
        content:
          "CareerForge AI scores your resume against any job description, finds missing keywords, and rewrites what's holding you back — in seconds.",
      },
      { property: "og:title", content: "CareerForge AI — AI resume analysis that gets you hired" },
      {
        property: "og:description",
        content: "ATS scoring, JD match %, and AI rewrite suggestions for your resume.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Landing,
});

function Landing() {
  return (
    <div className="dark relative min-h-screen overflow-x-hidden">
      <Backdrop />
      <LandingNav />
      <Hero />
      <Features />
      <HowItWorks />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  );
}
