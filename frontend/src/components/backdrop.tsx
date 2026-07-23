export function Backdrop() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-40" />
      <div className="absolute -top-40 left-1/2 h-[520px] w-[900px] -translate-x-1/2 rounded-full bg-primary/25 blur-[140px] animate-pulse-glow" />
      <div className="absolute bottom-[-200px] right-[-100px] h-[420px] w-[520px] rounded-full bg-primary-glow/20 blur-[140px]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,transparent_40%,var(--background)_75%)]" />
    </div>
  );
}
