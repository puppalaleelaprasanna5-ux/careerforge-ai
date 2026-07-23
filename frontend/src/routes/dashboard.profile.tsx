import { createFileRoute } from "@tanstack/react-router";
import { Camera, Trash2 } from "lucide-react";
import { GlassCard } from "@/components/glass-card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import {
  AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent,
  AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { currentUser } from "@/lib/placeholder-data";

export const Route = createFileRoute("/dashboard/profile")({
  head: () => ({
    meta: [
      { title: "Profile — CareerForge AI" },
      { name: "description", content: "Manage your CareerForge AI profile." },
      { property: "og:title", content: "Profile — CareerForge AI" },
      { property: "og:description", content: "Manage your CareerForge AI profile." },
    ],
  }),
  component: Profile,
});

function Profile() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-display text-3xl font-semibold tracking-tight">Profile</h1>
        <p className="mt-1 text-muted-foreground">Manage your personal information and account security.</p>
      </div>

      <GlassCard>
        <div className="flex flex-wrap items-center gap-6">
          <div className="relative">
            <Avatar className="h-24 w-24 ring-2 ring-primary/40">
              <AvatarFallback className="bg-primary/20 font-display text-2xl text-primary-glow">AM</AvatarFallback>
            </Avatar>
            <button className="absolute -bottom-1 -right-1 grid h-8 w-8 place-items-center rounded-full bg-primary text-primary-foreground shadow-lg transition-transform hover:scale-105">
              <Camera className="h-4 w-4" />
            </button>
          </div>
          <div className="min-w-0">
            <div className="flex items-center gap-2">
              <div className="font-display text-2xl font-semibold">{currentUser.name}</div>
              <Badge className="rounded-full bg-primary/15 text-primary-glow">{currentUser.plan}</Badge>
            </div>
            <div className="text-sm text-muted-foreground">{currentUser.email}</div>
            <div className="mt-1 text-xs text-muted-foreground">Joined {new Date(currentUser.joinedAt).toLocaleDateString()}</div>
          </div>
        </div>
      </GlassCard>

      <GlassCard>
        <div className="mb-4 font-display text-lg font-semibold">Personal info</div>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="space-y-2">
            <Label>Full name</Label>
            <Input defaultValue={currentUser.name} className="rounded-xl" />
          </div>
          <div className="space-y-2">
            <Label>Email</Label>
            <Input defaultValue={currentUser.email} className="rounded-xl" />
          </div>
          <div className="space-y-2">
            <Label>Job title</Label>
            <Input placeholder="Senior Product Manager" className="rounded-xl" />
          </div>
          <div className="space-y-2">
            <Label>Location</Label>
            <Input placeholder="Berlin, Germany" className="rounded-xl" />
          </div>
        </div>
        <div className="mt-6 flex justify-end">
          <Button className="rounded-full bg-primary hover:bg-primary/90">Save changes</Button>
        </div>
      </GlassCard>

      <GlassCard>
        <div className="mb-4 font-display text-lg font-semibold">Change password</div>
        <div className="grid gap-4 md:grid-cols-3">
          <div className="space-y-2">
            <Label>Current password</Label>
            <Input type="password" className="rounded-xl" />
          </div>
          <div className="space-y-2">
            <Label>New password</Label>
            <Input type="password" className="rounded-xl" />
          </div>
          <div className="space-y-2">
            <Label>Confirm new</Label>
            <Input type="password" className="rounded-xl" />
          </div>
        </div>
        <div className="mt-6 flex justify-end">
          <Button variant="secondary" className="rounded-full">Update password</Button>
        </div>
      </GlassCard>

      <GlassCard className="border-destructive/30">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <div className="font-display text-lg font-semibold text-destructive">Delete account</div>
            <p className="mt-1 max-w-lg text-sm text-muted-foreground">
              Permanently delete your account, resumes, and all analyses. This action cannot be undone.
            </p>
          </div>
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button variant="destructive" className="rounded-full">
                <Trash2 className="mr-2 h-4 w-4" /> Delete account
              </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Delete your account?</AlertDialogTitle>
                <AlertDialogDescription>
                  This will remove all your data permanently. There's no undo.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction className="bg-destructive hover:bg-destructive/90">Yes, delete</AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
      </GlassCard>
    </div>
  );
}
