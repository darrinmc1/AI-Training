import Link from "next/link"
import { siteConfig } from "@/lib/site-config"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { EmailCapture } from "@/components/email-capture"
import { latestUpdates, aiTools, learningPaths } from "@/data/modules"
import {
  ArrowRight,
  BookOpen,
  Sparkles,
  TrendingUp,
  Zap,
  Users,
  Award,
} from "lucide-react"

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-16">
        {/* ============================================================
            HERO SECTION
            ============================================================ */}
        <section className="relative hero-gradient hero-glow overflow-hidden">
          <div className="grid-pattern absolute inset-0" />
          <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 md:py-36 text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full px-4 py-2 mb-8 animate-pulse-glow">
              <span className="text-lg">{siteConfig.theme.emoji}</span>
              <span className="text-sm font-semibold text-cyan-400 tracking-wide uppercase">
                From {siteConfig.badges.tierNames[0]} to{" "}
                {siteConfig.badges.tierNames[4]}
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold font-display leading-tight mb-6">
              <span className="text-white">Master the</span>
              <br />
              <span className="gradient-text">AI Revolution</span>
            </h1>

            <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
              {siteConfig.copy.heroSubtitle}
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/signup"
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

            {/* Social proof */}
            <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-sm text-slate-500">
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
                Stay on top of the AI world with our weekly deep dives and
                analysis.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {latestUpdates.map((update) => (
                <article
                  key={update.id}
                  className="glass-card p-6 group cursor-pointer transition-all duration-300 hover:-translate-y-1"
                >
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
                      <span className="text-xs text-slate-600">
                        {update.date}
                      </span>
                      <span className="text-xs text-cyan-400 flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                        Read More <ArrowRight className="h-3 w-3" />
                      </span>
                    </div>
                  </div>
                </article>
              ))}
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
                Hands-on tutorials for the tools that are actually changing how
                people work.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {aiTools.map((tool) => (
                <div
                  key={tool.id}
                  className="glass-card p-6 group cursor-pointer transition-all duration-300 hover:-translate-y-1"
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
                  </div>
                </div>
              ))}
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
                Three structured learning tracks from beginner to expert. Pick
                your level and start building.
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
                  <div
                    key={path.id}
                    className="glass-card p-6 group cursor-pointer transition-all duration-300 hover:-translate-y-1"
                  >
                    <div className="relative z-10">
                      <div
                        className={`h-16 w-16 rounded-2xl bg-gradient-to-br ${
                          levelColors[path.level]
                        } flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                      >
                        <span className="text-4xl">{path.emoji}</span>
                      </div>

                      <span
                        className={`text-xs font-semibold border rounded-full px-3 py-1 ${
                          levelAccent[path.level]
                        }`}
                      >
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
                          Start Learning{" "}
                          <ArrowRight className="h-4 w-4" />
                        </span>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

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
                We&apos;re not just another AI course. Here&apos;s what makes us
                different.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: Zap,
                  title: "Hands-On Learning",
                  description:
                    "Every lesson includes practical exercises. You learn by doing, not just watching.",
                  color: "text-cyan-400",
                  bg: "bg-cyan-500/10",
                },
                {
                  icon: Award,
                  title: "Gamified Progression",
                  description:
                    "Earn XP, unlock badges, and evolve through 5 tiers. Learning should be fun.",
                  color: "text-indigo-400",
                  bg: "bg-indigo-500/10",
                },
                {
                  icon: TrendingUp,
                  title: "Always Current",
                  description:
                    "AI moves fast. We update weekly so you never fall behind the curve.",
                  color: "text-blue-400",
                  bg: "bg-blue-500/10",
                },
                {
                  icon: Users,
                  title: "Community Driven",
                  description:
                    "Join fellow learners, share projects, and get feedback from the community.",
                  color: "text-violet-400",
                  bg: "bg-violet-500/10",
                },
                {
                  icon: BookOpen,
                  title: "Structured Paths",
                  description:
                    "Clear learning tracks from beginner to advanced. No wondering what to learn next.",
                  color: "text-emerald-400",
                  bg: "bg-emerald-500/10",
                },
                {
                  icon: Sparkles,
                  title: "No PhD Required",
                  description:
                    "We explain AI in plain English. If you can use a computer, you can learn AI.",
                  color: "text-amber-400",
                  bg: "bg-amber-500/10",
                },
              ].map((feature) => (
                <div
                  key={feature.title}
                  className="glass-card p-6 transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="relative z-10">
                    <div
                      className={`h-12 w-12 rounded-xl ${feature.bg} flex items-center justify-center mb-4`}
                    >
                      <feature.icon className={`h-6 w-6 ${feature.color}`} />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-slate-400 leading-relaxed">
                      {feature.description}
                    </p>
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
