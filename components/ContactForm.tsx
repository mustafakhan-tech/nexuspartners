"use client";
import { useEffect, useState } from "react";
import type { Intent } from "./IntentLink";

const options: { value: Intent | "other"; label: string }[] = [
  { value: "brand", label: "A brand looking for creators" },
  { value: "creator", label: "A creator looking for brand deals" },
  { value: "roster", label: "A brand requesting the full roster" },
  { value: "other", label: "Something else" },
];

const field = "w-full rounded-xl border border-[color:var(--line)] bg-ash px-4 py-3 text-cream placeholder:text-cream/40 focus:border-cream focus:outline-none";

export default function ContactForm() {
  const [intent, setIntent] = useState<string>("brand");
  const [state, setState] = useState<"idle" | "sending" | "sent" | "error">("idle");

  useEffect(() => {
    const on = (e: Event) => setIntent((e as CustomEvent).detail);
    window.addEventListener("nexus:intent", on);
    return () => window.removeEventListener("nexus:intent", on);
  }, []);

  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState("sending");
    const data = new FormData(e.currentTarget);
    try {
      const res = await fetch("/__forms.html", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(data as unknown as Record<string, string>).toString(),
      });
      setState(res.ok ? "sent" : "error");
    } catch {
      setState("error");
    }
  }

  if (state === "sent") {
    return (
      <div role="status" className="rounded-3xl border border-[color:var(--line)] bg-ash p-8">
        <h3 className="mb-3 text-2xl">Message sent</h3>
        <p className="dim mb-0">Thanks. WeThanks. We reply to every message within two business days.apos;ll get back to you by email.</p>
      </div>
    );
  }

  const who = intent === "creator" ? "Your handle and main platform" : "Company";

  return (
    <form name="contact" onSubmit={submit} className="grid gap-5">
      <input type="hidden" name="form-name" value="contact" />
      <p className="hidden"><label>Leave this empty <input name="bot-field" /></label></p>
      <label className="grid gap-2">
        <span className="text-[15px] font-medium">I&apos;m</span>
        <select name="type" value={intent} onChange={(e) => setIntent(e.target.value)} className={field}>
          {options.map((o) => <option key={o.value} value={o.value}>{o.label}</option>)}
        </select>
      </label>
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="grid gap-2">
          <span className="text-[15px] font-medium">Name</span>
          <input required name="name" autoComplete="name" className={field} />
        </label>
        <label className="grid gap-2">
          <span className="text-[15px] font-medium">Email</span>
          <input required type="email" name="email" autoComplete="email" className={field} />
        </label>
      </div>
      <label className="grid gap-2">
        <span className="text-[15px] font-medium">{who}</span>
        <input name="company" className={field} />
      </label>
      <label className="grid gap-2">
        <span className="text-[15px] font-medium">{intent === "creator" ? "Tell us about your content and audience" : "What are you looking for?"}</span>
        <textarea required name="message" rows={5} className={field} />
      </label>
      <div className="flex flex-wrap items-center gap-4">
        <button type="submit" disabled={state === "sending"} className="rounded-full bg-cream px-7 py-3.5 font-display text-[15px] font-semibold text-night transition-opacity hover:opacity-85 disabled:opacity-60">
          {state === "sending" ? "Sending…" : "Send message"}
        </button>
        {state === "error" && <p role="alert" className="mb-0 text-[15px]">The message didn&apos;t send. Check your connection and try again.</p>}
      </div>
    </form>
  );
}
