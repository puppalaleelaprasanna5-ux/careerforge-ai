import { Sparkles } from "lucide-react";
import { APP_NAME } from "@/constants/nav";

export function Footer() {
  return (
    <footer className="border-t border-border/60 py-14">
      <div className="mx-auto grid max-w-6xl gap-8 px-6 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="grid h-8 w-8 place-items-center rounded-xl bg-primary/20 ring-1 ring-primary/40">
              <Sparkles className="h-4 w-4 text-primary-glow" />
            </span>
            <span className="font-display font-semibold">{APP_NAME}</span>
          </div>
          <p className="mt-4 max-w-xs text-sm text-muted-foreground">
            Resume intelligence that actually gets you interviews.
          </p>
        </div>
        {[
          { title: "Product", links: ["Features", "Pricing", "Changelog", "Roadmap"] },
          { title: "Company", links: ["About", "Careers", "Contact", "Press"] },
          { title: "Legal", links: ["Privacy", "Terms", "Security", "DPA"] },
        ].map((col) => (
          <div key={col.title}>
            <div className="text-sm font-medium">{col.title}</div>
            <ul className="mt-4 space-y-2">
              {col.links.map((l) => (
                <li key={l}>
                  <a href="#" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="mx-auto mt-12 max-w-6xl px-6 text-xs text-muted-foreground">
        © {new Date().getFullYear()} {APP_NAME}. All rights reserved.
      </div>
    </footer>
  );
}
