import { Bell, Search, Menu } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { DashboardSidebar } from "./sidebar";
import { currentUser } from "@/lib/placeholder-data";

export function TopNav() {
  return (
    <header className="glass sticky top-0 z-30 flex items-center gap-3 border-b border-border/60 px-4 py-3 md:px-6">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-5 w-5" />
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="w-72 border-r border-border/60 bg-sidebar p-0">
          <DashboardSidebar />
        </SheetContent>
      </Sheet>

      <div className="relative flex-1 max-w-md">
        <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <Input placeholder="Search resumes, analyses…" className="rounded-full bg-card/60 pl-9" />
      </div>

      <div className="ml-auto flex items-center gap-2">
        <Button variant="ghost" size="icon" className="relative">
          <Bell className="h-4 w-4" />
          <span className="absolute right-2.5 top-2.5 h-1.5 w-1.5 rounded-full bg-primary-glow" />
        </Button>
        <div className="flex items-center gap-2 rounded-full border border-border/60 bg-card/60 py-1 pl-1 pr-3">
          <Avatar className="h-7 w-7">
            <AvatarFallback className="bg-primary/20 text-xs text-primary-glow">AM</AvatarFallback>
          </Avatar>
          <div className="hidden text-xs leading-tight sm:block">
            <div className="font-medium">{currentUser.name}</div>
            <div className="text-muted-foreground">{currentUser.plan}</div>
          </div>
        </div>
      </div>
    </header>
  );
}
