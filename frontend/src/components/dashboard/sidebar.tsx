import { Link, useRouterState } from "@tanstack/react-router";
import { Sparkles, LogOut } from "lucide-react";
import { SIDEBAR_NAV, APP_NAME } from "@/constants/nav";
import { cn } from "@/lib/utils";

export function DashboardSidebar({ onNavigate }: { onNavigate?: () => void }) {
  const pathname = useRouterState({ select: (r) => r.location.pathname });

  return (
    <aside className="flex h-full w-full flex-col gap-2 bg-sidebar/60 p-4 backdrop-blur-xl">
      <Link to="/" className="mb-4 flex items-center gap-2 px-2 py-2">
        <span className="grid h-9 w-9 place-items-center rounded-xl bg-primary/20 ring-1 ring-primary/40">
          <Sparkles className="h-4 w-4 text-primary-glow" />
        </span>
        <div className="leading-tight">
          <div className="font-display text-sm font-semibold">{APP_NAME}</div>
          <div className="text-[10px] uppercase tracking-widest text-muted-foreground">Pro workspace</div>
        </div>
      </Link>

      <nav className="flex flex-col gap-1">
        {SIDEBAR_NAV.map((item) => {
          const active =
            item.url === "/dashboard"
              ? pathname === "/dashboard"
              : pathname.startsWith(item.url);
          return (
            <Link
              key={item.url}
              to={item.url}
              onClick={onNavigate}
              className={cn(
                "group relative flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm transition-all",
                active
                  ? "bg-primary/15 text-foreground shadow-[inset_0_0_0_1px_oklch(0.68_0.24_300_/_0.35)]"
                  : "text-muted-foreground hover:bg-sidebar-accent/60 hover:text-foreground",
              )}
            >
              <item.icon className={cn("h-4 w-4", active && "text-primary-glow")} />
              <span>{item.title}</span>
              {active && (
                <span className="absolute inset-y-2 left-0 w-0.5 rounded-r bg-primary-glow" />
              )}
            </Link>
          );
        })}
      </nav>

      <div className="mt-auto">
        <div className="glass rounded-xl p-4">
          <div className="text-xs text-muted-foreground">Free tier limit</div>
          <div className="mt-1 font-display text-lg font-semibold">4 / 5 analyses</div>
          <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-muted">
            <div className="h-full w-4/5 rounded-full bg-gradient-to-r from-primary to-primary-glow" />
          </div>
          <button className="mt-4 w-full rounded-lg bg-primary/90 py-1.5 text-xs font-medium hover:bg-primary">
            Upgrade to Pro
          </button>
        </div>
        <Link
          to="/login"
          className="mt-3 flex items-center gap-2 rounded-xl px-3 py-2 text-sm text-muted-foreground hover:bg-sidebar-accent/60 hover:text-foreground"
        >
          <LogOut className="h-4 w-4" /> Sign out
        </Link>
      </div>
    </aside>
  );
}
