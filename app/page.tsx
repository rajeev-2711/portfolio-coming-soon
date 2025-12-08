import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#050509] text-zinc-100 flex items-center justify-center px-4">
      <div className="max-w-xl w-full text-center space-y-8">
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
                href="https://github.com/rajeev-2711" target="_blank"
                className="rounded-full bg-zinc-100 text-zinc-950 px-5 py-2 hover:bg-zinc-200 transition"
              >
                GitHub
              </Link>
              <Link
                href="https://www.linkedin.com/in/rajeev2711" target="_blank"
                className="rounded-full bg-zinc-100 text-zinc-950 px-5 py-2 hover:bg-zinc-200 transition"
              >
                LinkedIn
              </Link>
            </div>
          </div>

          <p className="text-[11px] text-zinc-500">
            This page will be replaced with the full portfolio soon. Check back
            or reach out directly for my latest work.
          </p>
        </div>
      </div>
    </div>
  );
}