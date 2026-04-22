import Link from "next/link"
import { ALL_UPDATES } from "@/data/updates"
import { siteConfig } from "@/lib/site-config"

export const metadata = {
  title: `Weekly Updates | ${siteConfig.name}`,
  description:
    "Stay current with the AI world. Weekly analysis of new developments, launches, and business strategy.",
}

export default function UpdatesPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50">
      {/* Hero */}
      <div className="bg-gradient-to-br from-slate-950 via-cyan-950/40 to-indigo-950/60 py-20">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <h1 className="text-5xl font-extrabold tracking-tight mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Weekly AI Updates
            </span>
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            The latest developments in AI — analyzed, summarized, and made actionable.
          </p>
        </div>
      </div>

      {/* List */}
      <div className="mx-auto max-w-3xl px-6 py-16">
        <div className="space-y-6">
          {ALL_UPDATES.map((update) => (
            <Link
              key={update.id}
              href={`/updates/${update.id}`}
              className="group block rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 p-6 transition-all hover:bg-white/10 hover:border-cyan-500/30 hover:shadow-lg hover:shadow-cyan-500/5"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="inline-block rounded-full bg-rose-500/10 border border-rose-500/20 px-3 py-1 text-xs font-medium text-rose-400">
                  {update.category}
                </span>
                <span className="text-sm text-slate-500">{update.date}</span>
              </div>

              <h2 className="text-2xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                {update.title}
              </h2>

              <p className="text-slate-400 mb-4">{update.description}</p>

              <div className="flex flex-wrap gap-2">
                {update.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-white/5 border border-white/10 px-2.5 py-0.5 text-xs text-slate-500"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
