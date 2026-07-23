import { createFileRoute, Outlet } from "@tanstack/react-router";
import { DashboardSidebar } from "@/components/dashboard/sidebar";
import { TopNav } from "@/components/dashboard/topnav";
import { Backdrop } from "@/components/backdrop";

export const Route = createFileRoute("/dashboard")({
  component: DashboardLayout,
});

function DashboardLayout() {
  return (
    <div className="dark relative min-h-screen">
      <Backdrop />
      <div className="flex min-h-screen">
        <div className="hidden w-64 shrink-0 border-r border-border/60 md:block">
          <DashboardSidebar />
        </div>
        <div className="flex min-w-0 flex-1 flex-col">
          <TopNav />
          <main className="flex-1 px-4 py-6 md:px-8 md:py-8">
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  );
}
