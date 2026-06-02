import Link from "next/link"
import Image from "next/image"
import { siteConfig } from "@/lib/site-config"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { EmailCapture } from "@/components/email-capture"
import {
  latestUpdates,
  aiTools,
  learningPaths,
  getModuleById,
} from "@/data/modules"
import { GamificationTeaser } from "@/components/gamification-teaser"
import {
  ArrowRight,
  BookOpen,
  Sparkles,
  TrendingUp,
  Zap,
  Users,
  Award,
  Clock,
  Star,
} from "lucide-react"

const FREE_PREVIEW_LESSON_IDS = [
  "what-is-ai",
  "ai-fundamentals",
  "prompt-engineering-101",
] as const

export default function HomePage() {
  const freePreviewLessons = FREE_PREVIEW_LESSON_IDS.map((id) =>
    getModuleById(id)
  ).filter((m): m is NonNullable<typeof m> => Boolean(m))

  return (
    <>
      <Header />
      <main className="min-h-screen pt-16">
        {/* ============================================================
            HERO SECTION
            ============================================================ */}
        <section className="relative hero-gradient hero-glow overflow-hidden">
          <div className="grid-pattern absolute inset-0" />
          <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 md:py-32">
            <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
              <div className="text-center lg:text-left">
                <div className="inline-flex items-center gap-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full px-4 py-2 mb-8 animate-pulse-glow">
                  <span className="text-lg">{siteConfig.theme.emoji}</span>
                  <span className="text-sm font-semibold text-cyan-400 tracking-wide uppercase">
                    From {siteConfig.badges.tierNames[0]} to{" "}
                    {siteConfig.badges.tierNames[4]}
                  </span>
                </div>

                <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold font-display leading-[0.95] mb-6">
                  <span className="text-white">Master the</span>
                  <br />
                  <span className="gradient-text">AI Revolution</span>
                </h1>

                <p className="text-lg md:text-xl text-slate-400 max-w-2xl lg:mx-0 mx-auto mb-10 leading-relaxed">
                  {siteConfig.copy.heroSubtitle}
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <Link
                    href="/sign-up"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-white bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all duration-300 hover:scale-105 text-lg btn-glow"
                  >
                    {siteConfig.copy.ctaButton}
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                  <Link
                    href="/lessons"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-slate-300 border-2 border-white/10 hover:border-white/20 hover:text-white hover:bg-white/5 transition-all duration-300 text-lg"
                  >
                    {siteConfig.copy.ctaSecondary}
                  </Link>
                </div>

                <div className="mt-12 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-sm text-slate-500">
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4 text-cyan-500" />
                    <span>1,200+ learners</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <BookOpen className="h-4 w-4 text-blue-500" />
                    <span>50+ lessons</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Award className="h-4 w-4 text-indigo-500" />
                    <span>5-tier badge system</span>
                  </div>
                </div>

                <div className="mt-10 grid gap-3 sm:grid-cols-3 max-w-2xl lg:max-w-none">
                  {[
                    { icon: Zap, label: "Active XP", value: "+240 today" },
                    { icon: Clock, label: "Time Saved", value: "3.8 hrs/week" },
                    { icon: Star, label: "Prompt Wins", value: "94% cleaner outputs" },
                  ].map((item, index) => (
                    <div
                      key={item.label}
                      className={`rounded-2xl border border-white/10 bg-slate-900/45 px-4 py-3 backdrop-blur-xl ${index === 1 ? "animate-drift" : "animate-drift-reverse"}`}
                    >
                      <div className="flex items-center gap-2 text-cyan-300 mb-1">
                        <item.icon className="h-4 w-4" />
                        <span className="text-xs uppercase tracking-[0.18em] text-slate-500">{item.label}</span>
                      </div>
                      <p className="text-sm font-bold text-white">{item.value}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative mx-auto w-full max-w-2xl lg:max-w-none">
                <div className="hero-orb absolute -left-10 top-10 h-28 w-28 bg-cyan-500/15 animate-drift" />
                <div className="hero-orb absolute -right-6 bottom-10 h-36 w-36 bg-indigo-500/15 animate-drift-reverse" />

                <div className="relative hero-panel-glow animate-float-slow">
                  <div className="relative overflow-hidden rounded-[28px] border border-cyan-500/20 bg-slate-900/55 shadow-2xl shadow-cyan-950/30 backdrop-blur-xl">
                    <div className="absolute inset-x-0 top-0 z-10 flex items-center justify-between border-b border-white/10 bg-slate-950/60 px-4 py-3 backdrop-blur-xl">
                      <div className="flex items-center gap-2 text-xs text-slate-400">
                        <span className="h-2.5 w-2.5 rounded-full bg-rose-400" />
                        <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
                        <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
                      </div>
                      <span className="text-[11px] uppercase tracking-[0.22em] text-cyan-300">AI Command Deck</span>
                    </div>

                    <Image
                      src="/images/hero-ai-chaos.svg"
                      alt="A friendly robot balancing coffee, prompts, and sticky notes while learning AI"
                      width={1200}
                      height={700}
                      className="w-full h-auto pt-11 animate-zoom-slow"
                      priority
                    />

                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-950/95 via-slate-950/70 to-transparent p-5 text-left">
                      <p className="text-sm text-cyan-300 font-semibold">
                        Real learning vibe:
                      </p>
                      <p className="text-xs text-slate-300">
                        10 tabs open, one strong coffee, and suddenly prompts start making sense.
                      </p>
                    </div>
                  </div>

                  <div className="absolute -left-5 top-20 hidden sm:block animate-float-delayed">
                    <div className="rounded-2xl border border-cyan-500/20 bg-slate-950/75 px-4 py-3 shadow-xl shadow-cyan-950/30 backdrop-blur-xl">
                      <p className="text-[10px] uppercase tracking-[0.18em] text-slate-500">Learning streak</p>
                      <p className="mt-1 flex items-center gap-2 text-sm font-bold text-white">
                        <Zap className="h-4 w-4 text-cyan-400" /> 21 days of good decisions
                      </p>
                    </div>
                  </div>

                  <div className="absolute -right-4 top-40 hidden md:block animate-drift">
                    <div className="rounded-2xl border border-indigo-500/20 bg-slate-950/75 px-4 py-3 shadow-xl shadow-indigo-950/30 backdrop-blur-xl">
                      <p className="text-[10px] uppercase tracking-[0.18em] text-slate-500">Output quality</p>
                      <p className="mt-1 flex items-center gap-2 text-sm font-bold text-white">
                        <Star className="h-4 w-4 text-amber-300" /> Fewer hallucinations, more shipping
                      </p>
                    </div>
                  </div>

                  <div className="absolute bottom-6 left-6 hidden md:block animate-float-slow">
                    <div className="rounded-2xl border border-white/10 bg-slate-950/78 px-4 py-3 shadow-xl shadow-slate-950/40 backdrop-blur-xl">
                      <p className="text-[10px] uppercase tracking-[0.18em] text-slate-500">Badges earned</p>
                      <div className="mt-2 flex items-center gap-2 text-lg">
                        <span>🤖</span>
                        <span>🧠</span>
                        <span>⚡</span>
                        <span className="text-xs text-cyan-300">and one suspiciously smug robot</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================
            LATEST UPDATES SECTION
            ============================================================ */}
        <section className="py-20 md:py-28 border-t border-white/5">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-rose-500/10 border border-rose-500/30 rounded-full px-4 py-2 mb-4">
                <span className="text-sm font-semibold text-rose-400 tracking-wide uppercase">
                  Fresh Content
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold font-display text-white">
                Latest Updates
              </h2>
              <p className="text-slate-400 mt-3 max-w-lg mx-auto">
                Fresh from the AI world each week &mdash; the news that matters,
                minus the hype headache.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {latestUpdates.map((update) => (
                <Link
                  key={update.id}
                  href={`/updates/${update.id}`}
                  className="glass-card p-6 group transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="pointer-events-none absolute right-2 top-2 opacity-60 group-hover:opacity-90 transition-opacity z-20">
                    <Image
                      src="/images/update-card-doodle.svg"
                      alt=""
                      width={48}
                      height={48}
                      className="h-10 w-10"
                      aria-hidden
                    />
                  </div>

                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-3xl">{update.emoji}</span>
                      <span className="text-xs font-semibold text-rose-400 bg-rose-500/10 border border-rose-500/20 rounded-full px-3 py-1">
                        {update.tag}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                      {update.title}
                    </h3>
                    <p className="text-sm text-slate-400 leading-relaxed mb-4">
                      {update.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-slate-600">{update.date}</span>
                      <span className="text-xs text-cyan-400 flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                        Read More <ArrowRight className="h-3 w-3" />
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            <div className="text-center mt-10">
              <Link
                href="/updates"
                className="inline-flex items-center gap-2 text-sm font-semibold text-rose-400 hover:text-rose-300 transition-colors"
              >
                View all updates <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* ============================================================
            AI TOOLS SECTION
            ============================================================ */}
        <section className="py-20 md:py-28 border-t border-white/5">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/30 rounded-full px-4 py-2 mb-4">
                <span className="text-sm font-semibold text-amber-400 tracking-wide uppercase">
                  Tools &amp; Platforms
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold font-display text-white">
                Master the Best AI Tools
              </h2>
              <p className="text-slate-400 mt-3 max-w-lg mx-auto">
                Hands-on tutorials for the tools doing the heavy lifting &mdash;
                so you can do the fun thinking.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {aiTools.map((tool) => (
                <Link
                  key={tool.id}
                  href={`/tools/${tool.id}`}
                  className="glass-card p-6 group transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="relative z-10">
                    <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-indigo-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <span className="text-3xl">{tool.emoji}</span>
                    </div>
                    <span className="text-xs font-semibold text-amber-400 bg-amber-500/10 border border-amber-500/20 rounded-full px-3 py-1">
                      {tool.category}
                    </span>
                    <h3 className="text-lg font-bold text-white mt-3 mb-2 group-hover:text-cyan-400 transition-colors">
                      {tool.name}
                    </h3>
                    <p className="text-sm text-slate-400 leading-relaxed">
                      {tool.description}
                    </p>
                    <div className="mt-4 pt-4 border-t border-white/5">
                      <span className="text-sm font-semibold text-amber-400 flex items-center gap-1 group-hover:gap-2 transition-all">
                        View profile <ArrowRight className="h-4 w-4" />
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            <div className="text-center mt-10">
              <Link
                href="/tools"
                className="inline-flex items-center gap-2 text-sm font-semibold text-amber-400 hover:text-amber-300 transition-colors"
              >
                Browse all tools <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* ============================================================
            LEARNING PATHS SECTION
            ============================================================ */}
        <section className="py-20 md:py-28 border-t border-white/5">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-indigo-500/10 border border-indigo-500/30 rounded-full px-4 py-2 mb-4">
                <span className="text-sm font-semibold text-indigo-400 tracking-wide uppercase">
                  Structured Learning
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold font-display text-white">
                Choose Your Path
              </h2>
              <p className="text-slate-400 mt-3 max-w-lg mx-auto">
                Three tracks, beginner to expert. Pick where you are today
                &mdash; not where you think you should be.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {learningPaths.map((path) => {
                const category = siteConfig.categories.find(
                  (c) => c.id === path.category
                )
                const levelColors: Record<string, string> = {
                  beginner: "from-emerald-500/20 to-cyan-500/20",
                  intermediate: "from-cyan-500/20 to-blue-500/20",
                  advanced: "from-indigo-500/20 to-violet-500/20",
                }
                const levelAccent: Record<string, string> = {
                  beginner: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
                  intermediate: "text-cyan-400 bg-cyan-500/10 border-cyan-500/20",
                  advanced: "text-indigo-400 bg-indigo-500/10 border-indigo-500/20",
                }
                return (
                  <Link
                    key={path.id}
                    href={`/lessons?level=${path.level}`}
                    className="glass-card p-6 group transition-all duration-300 hover:-translate-y-1"
                  >
                    <div className="relative z-10">
                      <div
                        className={`h-16 w-16 rounded-2xl bg-gradient-to-br ${levelColors[path.level]} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                      >
                        <span className="text-4xl">{path.emoji}</span>
                      </div>
                      <span className={`text-xs font-semibold border rounded-full px-3 py-1 ${levelAccent[path.level]}`}>
                        {category?.name || path.level}
                      </span>
                      <h3 className="text-xl font-bold text-white mt-3 mb-2 group-hover:text-cyan-400 transition-colors">
                        {path.title}
                      </h3>
                      <p className="text-sm text-slate-400 leading-relaxed mb-4">
                        {path.description}
                      </p>
                      <div className="flex items-center gap-4 text-xs text-slate-500">
                        <div className="flex items-center gap-1">
                          <BookOpen className="h-3.5 w-3.5" />
                          {path.lessons} lessons
                        </div>
                        <div className="flex items-center gap-1">
                          <TrendingUp className="h-3.5 w-3.5" />
                          {path.duration}
                        </div>
                      </div>
                      <div className="mt-4 pt-4 border-t border-white/5">
                        <span className="text-sm font-semibold text-cyan-400 flex items-center gap-1 group-hover:gap-2 transition-all">
                          Start Learning <ArrowRight className="h-4 w-4" />
                        </span>
                      </div>
                    </div>
                  </Link>
                )
              })}
            </div>
          </div>
        </section>

        {/* ============================================================
            FREE PREVIEW SECTION
            ============================================================ */}
        <section className="py-20 md:py-28 border-t border-white/5">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/30 rounded-full px-4 py-2 mb-4">
                <span className="text-sm font-semibold text-emerald-400 tracking-wide uppercase">
                  Free — No Account Needed
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold font-display text-white">
                Try Before You Subscribe
              </h2>
              <p className="text-slate-400 mt-3 max-w-lg mx-auto">
                Three full lessons, completely free. No login, no credit card.
                Just dive in and see if we&apos;re your kind of teacher.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-7 mb-10">
              {freePreviewLessons.map((lesson, i) => (
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
                    <h3 className="text-lg font-extrabold font-display text-white mb-2 group-hover:text-cyan-400 transition-colors leading-snug">
                      {lesson.title}
                    </h3>
                    <p className="text-sm text-slate-400 leading-relaxed mb-5 flex-1">
                      {lesson.description}
                    </p>
                    {lesson.learningOutcomes && lesson.learningOutcomes.length > 0 && (
                      <ul className="space-y-1.5 mb-5">
                        {lesson.learningOutcomes.slice(0, 2).map((outcome) => (
                          <li key={outcome} className="flex items-start gap-2 text-xs text-slate-400">
                            <Star className="h-3 w-3 text-emerald-400 mt-0.5 shrink-0" />
                            {outcome}
                          </li>
                        ))}
                      </ul>
                    )}
                    <span className="text-sm font-bold text-emerald-400 flex items-center gap-1.5 group-hover:gap-2.5 transition-all mt-auto">
                      Read free <ArrowRight className="h-4 w-4" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>

            <div className="text-center">
              <Link
                href="/free"
                className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-400 hover:text-emerald-300 transition-colors"
              >
                View free lessons page <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* ============================================================
            GAMIFICATION TEASER
            ============================================================ */}
        <GamificationTeaser />

        {/* ============================================================
            WHY CHOOSE US
            ============================================================ */}
        <section className="py-20 md:py-28 border-t border-white/5">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-extrabold font-display text-white">
                Why {siteConfig.name}?
              </h2>
              <p className="text-slate-400 mt-3 max-w-lg mx-auto">
                We&apos;re not just another AI course. Here&apos;s what makes us different.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: Zap, title: "Hands-On Learning", description: "Every lesson includes practical exercises. You learn by doing, not just watching.", color: "text-cyan-400", bg: "bg-cyan-500/10" },
                { icon: Award, title: "Gamified Progression", description: "Earn XP, unlock badges, and evolve through 5 tiers. Learning should be fun.", color: "text-indigo-400", bg: "bg-indigo-500/10" },
                { icon: TrendingUp, title: "Always Current", description: "AI moves fast. We update weekly so you never fall behind the curve.", color: "text-blue-400", bg: "bg-blue-500/10" },
                { icon: Users, title: "Community Driven", description: "Join fellow learners, share projects, and get feedback from the community.", color: "text-violet-400", bg: "bg-violet-500/10" },
                { icon: BookOpen, title: "Structured Paths", description: "Clear learning tracks from beginner to advanced. No wondering what to learn next.", color: "text-emerald-400", bg: "bg-emerald-500/10" },
                { icon: Sparkles, title: "No PhD Required", description: "We explain AI in plain English. If you can send an email, you can learn this.", color: "text-amber-400", bg: "bg-amber-500/10" },
              ].map((feature) => (
                <div key={feature.title} className="glass-card p-6 transition-all duration-300 hover:-translate-y-1">
                  <div className="relative z-10">
                    <div className={`h-12 w-12 rounded-xl ${feature.bg} flex items-center justify-center mb-4`}>
                      <feature.icon className={`h-6 w-6 ${feature.color}`} />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
                    <p className="text-sm text-slate-400 leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================================
            EMAIL CAPTURE SECTION
            ============================================================ */}
        <section className="py-20 md:py-28 border-t border-white/5">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <EmailCapture
              variant="hero"
              theme="cyan"
              heading={siteConfig.copy.emailCaptureHeading}
              subheading={siteConfig.copy.emailCaptureSubheading}
              source="homepage-hero"
              showName
            />
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
