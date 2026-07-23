import { createFileRoute } from "@tanstack/react-router";
import { Bell, Eye, Palette, User2 } from "lucide-react";
import { GlassCard } from "@/components/glass-card";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export const Route = createFileRoute("/dashboard/settings")({
  head: () => ({
    meta: [
      { title: "Settings — CareerForge AI" },
      { name: "description", content: "Appearance, notifications, privacy and account preferences." },
      { property: "og:title", content: "Settings — CareerForge AI" },
      { property: "og:description", content: "Appearance, notifications, privacy and account preferences." },
    ],
  }),
  component: SettingsPage,
});

function Row({ title, hint, children }: { title: string; hint?: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-wrap items-center justify-between gap-4 border-b border-border/60 py-4 last:border-0">
      <div className="min-w-0">
        <Label className="text-sm">{title}</Label>
        {hint && <p className="mt-1 text-xs text-muted-foreground">{hint}</p>}
      </div>
      <div className="shrink-0">{children}</div>
    </div>
  );
}

function SettingsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-display text-3xl font-semibold tracking-tight">Settings</h1>
        <p className="mt-1 text-muted-foreground">Customize your CareerForge experience.</p>
      </div>

      <Tabs defaultValue="appearance" className="w-full">
        <TabsList className="glass rounded-full p-1">
          <TabsTrigger value="appearance" className="rounded-full data-[state=active]:bg-primary/20 data-[state=active]:text-primary-glow"><Palette className="mr-2 h-4 w-4" />Appearance</TabsTrigger>
          <TabsTrigger value="notifications" className="rounded-full data-[state=active]:bg-primary/20 data-[state=active]:text-primary-glow"><Bell className="mr-2 h-4 w-4" />Notifications</TabsTrigger>
          <TabsTrigger value="privacy" className="rounded-full data-[state=active]:bg-primary/20 data-[state=active]:text-primary-glow"><Eye className="mr-2 h-4 w-4" />Privacy</TabsTrigger>
          <TabsTrigger value="account" className="rounded-full data-[state=active]:bg-primary/20 data-[state=active]:text-primary-glow"><User2 className="mr-2 h-4 w-4" />Account</TabsTrigger>
        </TabsList>

        <TabsContent value="appearance" className="mt-5">
          <GlassCard>
            <Row title="Theme" hint="Dark is optimized for focus. Light coming soon.">
              <RadioGroup defaultValue="dark" className="flex gap-3">
                {["dark", "system", "light"].map((v) => (
                  <label key={v} className="flex cursor-pointer items-center gap-2 rounded-full border border-border/60 bg-card/40 px-3 py-1.5 text-xs capitalize">
                    <RadioGroupItem value={v} /> {v}
                  </label>
                ))}
              </RadioGroup>
            </Row>
            <Row title="Accent color" hint="Applied across gauges, badges and buttons.">
              <div className="flex gap-2">
                {["#a855f7", "#6366f1", "#22d3ee", "#22c55e", "#f59e0b"].map((c, i) => (
                  <button key={c} aria-label={c} className={`h-7 w-7 rounded-full ring-2 ${i === 0 ? "ring-primary-glow" : "ring-transparent"}`} style={{ background: c }} />
                ))}
              </div>
            </Row>
            <Row title="Reduced motion" hint="Disable non-essential animations.">
              <Switch />
            </Row>
          </GlassCard>
        </TabsContent>

        <TabsContent value="notifications" className="mt-5">
          <GlassCard>
            <Row title="Email — analysis ready"><Switch defaultChecked /></Row>
            <Row title="Email — weekly summary"><Switch defaultChecked /></Row>
            <Row title="Email — product updates"><Switch /></Row>
            <Row title="In-app — score change alerts"><Switch defaultChecked /></Row>
          </GlassCard>
        </TabsContent>

        <TabsContent value="privacy" className="mt-5">
          <GlassCard>
            <Row title="Allow anonymized model improvements" hint="Never shares raw resumes.">
              <Switch />
            </Row>
            <Row title="Store analysis history" hint="Turn off to auto-delete after 30 days.">
              <Switch defaultChecked />
            </Row>
            <Row title="Data region">
              <Select defaultValue="eu">
                <SelectTrigger className="w-40 rounded-xl bg-card/40"><SelectValue /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="eu">Europe (Frankfurt)</SelectItem>
                  <SelectItem value="us">United States (Virginia)</SelectItem>
                  <SelectItem value="ap">Asia Pacific (Singapore)</SelectItem>
                </SelectContent>
              </Select>
            </Row>
          </GlassCard>
        </TabsContent>

        <TabsContent value="account" className="mt-5">
          <GlassCard>
            <Row title="Language">
              <Select defaultValue="en">
                <SelectTrigger className="w-40 rounded-xl bg-card/40"><SelectValue /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="en">English</SelectItem>
                  <SelectItem value="de">Deutsch</SelectItem>
                  <SelectItem value="fr">Français</SelectItem>
                  <SelectItem value="es">Español</SelectItem>
                </SelectContent>
              </Select>
            </Row>
            <Row title="Default resume format">
              <Select defaultValue="pdf">
                <SelectTrigger className="w-40 rounded-xl bg-card/40"><SelectValue /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="pdf">PDF</SelectItem>
                  <SelectItem value="docx">DOCX</SelectItem>
                </SelectContent>
              </Select>
            </Row>
            <Row title="Auto-analyze on upload" hint="Skip the confirmation step.">
              <Switch defaultChecked />
            </Row>
          </GlassCard>
        </TabsContent>
      </Tabs>
    </div>
  );
}
