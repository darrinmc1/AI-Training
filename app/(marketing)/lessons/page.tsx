import Link from "next/link"
import {
  ALL_MODULES,
  BEGINNER_MODULES,
  INTERMEDIATE_MODULES,
  ADVANCED_MODULES,
  type Module,
} from "@/data/modules"
import { siteConfig } from "@/lib/site-config"

export const metadata = {
  title: `Lessons | ${siteConfig.name}`,
  description:
    "Browse all AI lessons from beginner to advanced. Master prompting, RAG, agentic workflows, strategy, and governance.",
}

function LevelSection({
  title,
  emoji,
  description,
  color,
  modules,
}: {
  title: string
  emoji: string
  description: string
  color: string
  modules: Module[]
}) {
  return (
    <section className="mb-16">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-white mb-2">
          <span className="mr-2">{emoji}</span>
          {title}
        </h2>
        <p className="text-slate-400 text-lg">{description}</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {modules.map((mod) => (
          <Link
            key={mod.id}
            href={`/lessons/${mod.id}`}
            className={`group relative overflow-hidden rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 p-6 transition-all hover:bg-white/10 hover:border-${color}-500/30 hover:shadow-lg hover:shadow-${color}-500/5`}
          >
            <div className="flex items-start justify-between mb-3">
              <span
                className={`inline-block rounded-full bg-${color}-500/10 border border-${color}-500/20 px-3 py-1 text-xs font-medium text-${color}-400 uppercase tracking-wide`}
              >
                {mod.level}
              </span>
              <span className="text-sm text-slate-500">{mod.duration}</span>
            </div>

            <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-cyan-300 transition-colors">
              {mod.title}
            </h3>

            <p className="text-slate-400 text-sm mb-4 line-clamp-2">
              {mod.description}
            </p>

            <div className="flex flex-wrap gap-2">
              {mod.tags.slice(0, 3).map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-white/5 border border-white/10 px-2.5 py-0.5 text-xs text-slate-500"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="mt-4 flex items-center gap-4 text-xs text-slate-500">
              <span>{mod.learningOutcomes.length} learning outcomes</span>
              <span>{mod.durationMinutes} min read</span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}

export default function LessonsPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50">
      {/* Hero */}
      <div className="bg-gradient-to-br from-slate-950 via-cyan-950/40 to-indigo-950/60 py-20">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <h1 className="text-5xl font-extrabold tracking-tight mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              AI Curriculum
            </span>
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            {ALL_MODULES.length} lessons across {3} levels. Go from Basic Bot to
            Superintelligence at your own pace.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="mx-auto max-w-5xl px-6 py-16">
        <LevelSection
          title="Beginner"
          emoji="\u{1F331}"
          description="Start your AI journey here. No prior experience needed."
          color="emerald"
          modules={BEGINNER_MODULES}
        />

        <LevelSection
          title="Intermediate"
          emoji="\u2699\uFE0F"
          description="Ready to go deeper? Advanced prompting, workflows, and integrations."
          color="cyan"
          modules={INTERMEDIATE_MODULES}
        />

        <LevelSection
          title="Advanced"
          emoji="\u{1F9E0}"
          description="Expert-level techniques: strategy, governance, and AI architecture."
          color="indigo"
          modules={ADVANCED_MODULES}
        />
      </div>
    </div>
  )
}
