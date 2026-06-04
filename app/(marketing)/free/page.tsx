import Link from "next/link"
import { siteConfig } from "@/lib/site-config"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { GamificationTeaser } from "@/components/gamification-teaser"
import { getModuleById } from "@/data/modules"
import { ArrowRight, BookOpen, Clock, Zap, Star, Lock } from "lucide-react"

const FREE_LESSON_IDS = [
  "what-is-ai",
  "ai-terminology",
  "ai-toolkit",
  "ai-first-conversation",
  "ai-fundamentals",
  "prompt-engineering-101",
] as const

// Locked preview cards to entice subscription
const SUBSCRIBER_TEASERS = [
  { emoji: "🤖", title: "Agentic Workflows", level: "Advanced", duration: "25 min", description: "Build AI agents that work for you around the clock." },
  { emoji: "🔍", title: "RAG & Vector Search", level: "Intermediate", duration: "20 min", description: "Make AI talk to your own data with retrieval-augmented generation." },
  { emoji: "📊", title: "AI Strategy & ROI", level: "Intermediate", duration: "18 min", description: "Measure and justify AI investments with frameworks that actually work." },
  { emoji: "⚖️", title: "AI Ethics & Hallucinations", level: "Beginner", duration: "15 min", description: "Know when AI is making stuff up — and what to do about it." },
  { emoji: "🏗️", title: "AI Governance & Scaling", level: "Advanced", duration: "22 min", description: "Deploy AI across your org without losing control of it." },
  { emoji: "💡", title: "Prompt Engineering 201", level: "Intermediate", duration: "20 min", description: "Advanced prompting patterns that 10x your AI output quality." },
]

export default function FreeLessonsPage() {
  const freeLessons = FREE_LESSON_IDS.map((id) => getModuleById(id)).filter(Boolean)

  return (
    <>
      <Header />
      <main className="min-h-screen pt-16">

        {/* HERO */}
        <section className="relative hero-gradient hero-glow overflow-hidden">
          <div className="grid-pattern absolute inset-0" />
          <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-20 md:py-28 text-center">
            <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/30 rounded-full px-4 py-2 mb-6">
              <span className="text-sm font-semibold text-emerald-400 tracking-wide uppercase">
                No login required
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold font-display leading-tight mb-6">
              <span className="text-white">6 Free Lessons.</span>
              <br />
              <span className="gradient-text">No Strings Attached.</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
              Real AI lessons written for real people. No jargon overload, no PhD required.
              Read these six — if you like them, you&apos;ll love what&apos;s behind the door.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-slate-500">
              <div className="flex items-center gap-2">
                <BookOpen className="h-4 w-4 text-emerald-500" />
                <span>6 complete lessons</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-cyan-500" />
                <span>~55 minutes total</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="h-4 w-4 text-indigo-500" />
                <span>Earn XP &amp; badges when you sign up</span>
              </div>
            </div>
          </div>
        </section>

        {/* FREE LESSONS */}
        <section className="py-20 md:py-28 border-t border-white/5">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-8">
              {freeLessons.map((lesson, i) => lesson && (
                <Link
                  key={lesson.id}
                  href={`/lessons/${lesson.id}`}
                  className="glass-card p-7 group transition-all duration-300 hover:-translate-y-1 flex flex-col"
                >
                  <div className="relative z-10 flex flex-col h-full">
                    <div className="flex items-center justify-between mb-5">
                      <span className="inline-flex items-center justify-center h-8 w-8 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-extrabold text-emerald-400">
                        {i + 1}
                      </span>
                      <div className="flex items-center gap-2">
                        <span className="text-xs text-slate-500 flex items-center gap-1">
                          <Clock className="h-3 w-3" />{lesson.duration}
                        </span>
                        <span className="inline-block rounded-full bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 text-xs font-medium text-emerald-400 uppercase tracking-wide">
                          Free
                        </span>
                      </div>
                    </div>
                    <h3 className="text-xl font-extrabold font-display text-white mb-3 group-hover:text-cyan-400 transition-colors leading-snug">
                      {lesson.title}
                    </h3>
                    <p className="text-sm text-slate-400 leading-relaxed mb-6 flex-1">
                      {lesson.description}
                    </p>
                    {lesson.learningOutcomes?.length > 0 && (
                      <ul className="space-y-1.5 mb-6">
                        {lesson.learningOutcomes.slice(0, 3).map((outcome) => (
                          <li key={outcome} className="flex items-start gap-2 text-xs text-slate-400">
                            <Star className="h-3 w-3 text-emerald-400 mt-0.5 shrink-0" />
                            {outcome}
                          </li>
                        ))}
                      </ul>
                    )}
                    <span className="text-sm font-bold text-emerald-400 flex items-center gap-1.5 group-hover:gap-2.5 transition-all mt-auto">
                      Read lesson <ArrowRight className="h-4 w-4" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* LOCKED SUBSCRIBER CONTENT PREVIEW */}
        <section className="py-20 md:py-28 border-t border-white/5">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-violet-500/10 border border-violet-500/30 rounded-full px-4 py-2 mb-4">
                <Lock className="h-3.5 w-3.5 text-violet-400" />
                <span className="text-sm font-semibold text-violet-400 tracking-wide uppercase">
                  Subscribers Only
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold font-display text-white">
                Liked those? There&apos;s much more inside.
              </h2>
              <p className="text-slate-400 mt-3 max-w-lg mx-auto">
                Subscribers unlock 50+ lessons, weekly new content, XP tracking, and a badge collection system.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
              {SUBSCRIBER_TEASERS.map((lesson) => (
                <div
                  key={lesson.title}
                  className="glass-card p-6 opacity-60 relative overflow-hidden group cursor-default"
                >
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 bg-slate-950/60 backdrop-blur-sm rounded-2xl z-20">
                    <div className="text-center">
                      <Lock className="h-6 w-6 text-slate-400 mx-auto mb-2" />
                      <Link
                        href="/sign-up"
                        className="text-xs font-bold text-cyan-400 hover:text-cyan-300 transition-colors underline underline-offset-2"
                      >
                        Subscribe to unlock
                      </Link>
                    </div>
                  </div>
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-3xl">{lesson.emoji}</span>
                      <div className="flex items-center gap-2">
                        <span className="text-xs text-slate-500">{lesson.duration}</span>
                        <span className="text-xs font-semibold text-violet-400 border border-violet-500/20 bg-violet-500/10 rounded-full px-2.5 py-0.5">
                          {lesson.level}
                        </span>
                      </div>
                    </div>
                    <h3 className="text-base font-bold text-white mb-2">{lesson.title}</h3>
                    <p className="text-sm text-slate-400 leading-relaxed">{lesson.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center">
              <Link
                href="/pricing"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-white bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all duration-300 hover:scale-105 text-lg"
              >
                See Pricing — Start Free
                <ArrowRight className="h-5 w-5" />
              </Link>
              <p className="text-xs text-slate-500 mt-3">Free tier available. No credit card required to start.</p>
            </div>
          </div>
        </section>

        {/* GAMIFICATION TEASER */}
        <GamificationTeaser />

      </main>
      <Footer />
    </>
  )
}
