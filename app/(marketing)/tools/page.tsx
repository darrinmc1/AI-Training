import Link from "next/link"
import Image from "next/image"
import { ALL_TOOLS } from "@/data/tools"
import { siteConfig } from "@/lib/site-config"

export const metadata = {
  title: `AI Tools | ${siteConfig.name}`,
  description:
    "Explore the latest AI tools — from LLMs to image generators, automation frameworks, and edge computing platforms.",
}

export default function ToolsPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50">
      {/* Hero */}
      <div className="bg-gradient-to-br from-slate-950 via-cyan-950/40 to-indigo-950/60 py-20">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <h1 className="text-5xl font-extrabold tracking-tight mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              AI Tool Profiles
            </span>
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Hands-on reviews and deep dives into the tools doing the heavy
            lifting. We test them so you don&apos;t have to.
          </p>
        </div>
      </div>

      {/* Grid */}
      <div className="mx-auto max-w-5xl px-6 py-16">
        {ALL_TOOLS.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-white/10 bg-white/[0.02] p-12 text-center">
            <div className="mx-auto mb-5 max-w-xs overflow-hidden rounded-xl border border-cyan-500/15 bg-slate-900/40">
              <Image
                src="/images/empty-tools-light.svg"
                alt="A tiny lab setup where robots compare AI tools with clipboards"
                width={640}
                height={360}
                className="w-full h-auto"
              />
            </div>
            <div className="text-5xl mb-4">{siteConfig.theme.emoji}</div>
            <p className="text-slate-300 font-semibold mb-1">
              No tool reviews here yet &mdash; but the testing lab is busy.
            </p>
            <p className="text-sm text-slate-500">
              Pop back soon. We&apos;re putting the latest tools through their
              paces.
            </p>
          </div>
        ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {ALL_TOOLS.map((tool) => (
            <Link
              key={tool.id}
              href={`/tools/${tool.id}`}
              className="group relative overflow-hidden rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 p-6 transition-all hover:bg-white/10 hover:border-cyan-500/30 hover:shadow-lg hover:shadow-cyan-500/5"
            >
              <div className="pointer-events-none absolute right-2 top-2 opacity-60 group-hover:opacity-90 transition-opacity">
                <Image
                  src="/images/update-card-doodle.svg"
                  alt=""
                  width={48}
                  height={48}
                  className="h-10 w-10"
                  aria-hidden
                />
              </div>

              <div className="text-4xl mb-4">{tool.emoji}</div>

              <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                {tool.name}
              </h3>

              <span className="inline-block rounded-full bg-amber-500/10 border border-amber-500/20 px-2.5 py-0.5 text-xs font-medium text-amber-400 mb-3">
                {tool.toolType}
              </span>

              <p className="text-slate-400 text-sm mb-4 line-clamp-3">
                {tool.description}
              </p>

              <div className="flex flex-wrap gap-1.5">
                {tool.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-white/5 border border-white/10 px-2 py-0.5 text-xs text-slate-500"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
        )}
      </div>
    </div>
  )
}
