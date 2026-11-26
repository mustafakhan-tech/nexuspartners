"use client";

export type Intent = "brand" | "creator" | "roster";

export default function IntentLink({ intent, children, className }: { intent: Intent; children: React.ReactNode; className?: string }) {
  return (
    <a
      href="#contact"
      className={className}
      onClick={() => window.dispatchEvent(new CustomEvent("nexus:intent", { detail: intent }))}
    >
      {children}
    </a>
  );
}
