import {
  LayoutDashboard,
  Upload,
  FileText,
  History,
  User,
  Settings,
  Sparkles,
} from "lucide-react";

export const APP_NAME = "CareerForge AI";

export const SIDEBAR_NAV = [
  { title: "Dashboard", url: "/dashboard", icon: LayoutDashboard },
  { title: "Upload Resume", url: "/dashboard/upload", icon: Upload },
  { title: "Latest Analysis", url: "/dashboard/result", icon: Sparkles },
  { title: "History", url: "/dashboard/history", icon: History },
  { title: "Profile", url: "/dashboard/profile", icon: User },
  { title: "Settings", url: "/dashboard/settings", icon: Settings },
] as const;

export const LANDING_LINKS = [
  { label: "Features", href: "#features" },
  { label: "How it works", href: "#how" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Pricing", href: "#cta" },
];
