"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";

export default function Home() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus("idle");

    const formData = new FormData(e.currentTarget);
    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });

      if (!res.ok) throw new Error("Request failed");

      setStatus("success");
      (e.target as HTMLFormElement).reset();
    } catch (err) {
      console.error(err);
      setStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#050509] text-zinc-100 flex items-center justify-center px-4">
      <div className="max-w-2xl w-full space-y-10">
        <div className="max-w-xl mx-auto text-center space-y-8">
          <div className="space-y-3">
            <p className="text-[10px] uppercase tracking-[0.35em] text-zinc-500">
              Portfolio · In progress
            </p>
            <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">
              A new developer portfolio is{" "}
              <span className="text-zinc-300">coming soon.</span>
            </h1>
            <p className="text-sm md:text-base text-zinc-400">
              I&apos;m Rajeev, a CSE undergrad building clean, performant web
              experiences with Next.js and modern tooling. The full portfolio is
              under construction, but I&apos;m available for opportunities.
            </p>
          </div>

          <div className="space-y-4">
            <div className="inline-flex flex-col md:flex-row md:items-center md:justify-center gap-3 text-sm">
              <a
                href="mailto:rajeevkumarranjan2711@gmail.com"
                className="rounded-full bg-zinc-100 text-zinc-950 px-5 py-2 hover:bg-zinc-200 transition"
              >
                Email me
              </a>
              <div className="flex justify-center gap-4 text-xs text-zinc-400">
                <Link
                  href="https://github.com/rajeev-2711"
                  target="_blank"
                  className="rounded-full bg-zinc-100 text-zinc-950 px-5 py-2 hover:bg-zinc-200 transition"
                >
                  GitHub
                </Link>
                <Link
                  href="https://www.linkedin.com/in/rajeev2711"
                  target="_blank"
                  className="rounded-full bg-zinc-100 text-zinc-950 px-5 py-2 hover:bg-zinc-200 transition"
                >
                  LinkedIn
                </Link>
              </div>
            </div>

            <p className="text-[11px] text-zinc-500">
              This page will be replaced with the full portfolio soon. Check
              back or reach out directly for my latest work.
            </p>
          </div>
        </div>

        {/* CONTACT FORM WITH REAL BACKEND */}
        <section className="border border-zinc-800/70 rounded-2xl bg-zinc-900/40 p-5 md:p-6">
          <h2 className="text-sm font-medium mb-4">Get in touch</h2>
          <form onSubmit={handleSubmit} className="space-y-4 text-sm">
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-1.5">
                <label htmlFor="name" className="block text-xs text-zinc-400">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  required
                  className="w-full rounded-lg border border-zinc-800 bg-zinc-900/60 px-3 py-2 text-sm outline-none focus:border-zinc-500"
                  placeholder="Your name"
                />
              </div>
              <div className="space-y-1.5">
                <label htmlFor="email" className="block text-xs text-zinc-400">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="w-full rounded-lg border border-zinc-800 bg-zinc-900/60 px-3 py-2 text-sm outline-none focus:border-zinc-500"
                  placeholder="you@example.com"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label htmlFor="message" className="block text-xs text-zinc-400">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={4}
                className="w-full rounded-lg border border-zinc-800 bg-zinc-900/60 px-3 py-2 text-sm outline-none focus:border-zinc-500 resize-none"
                placeholder="Tell me briefly what you’d like to discuss."
              />
            </div>

            <div className="flex items-center justify-between gap-3 pt-2">
              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex items-center justify-center rounded-full bg-zinc-100 px-5 py-2 text-xs font-medium text-zinc-950 hover:bg-zinc-200 transition disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Sending..." : "Send message"}
              </button>
              {status === "success" && (
                <p className="text-[11px] text-emerald-400">
                  Message sent. I&apos;ll get back to you soon.
                </p>
              )}
              {status === "error" && (
                <p className="text-[11px] text-red-400">
                  Something went wrong. Please try again.
                </p>
              )}
            </div>
          </form>
        </section>
      </div>
    </div>
  );
}
