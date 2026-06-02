"use client"

import Link from "next/link"
import { siteConfig } from "@/lib/site-config"
import { SPECIAL_BADGES, TIER_CONFIG } from "@/data/badges"
import { Lock, Zap, ArrowRight } from "lucide-react"

// Show a sample of special badges to entice non-logged-in users
const TEASER_SPECIAL = SPECIAL_BADGES.slice(0, 6)

const TIER_ORDER = [
  "basic-bot",
  "smart-assistant",
  "neural-network",
  "deep-mind",
  "superintelligence",
] as const

export function GamificationTeaser() {
  return (
    <section className="py-20 md:py-28 border-t border-white/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-indigo-500/10 border border-indigo-500/30 rounded-full px-4 py-2 mb-4">
            <span className="text-sm font-semibold text-indigo-400 tracking-wide uppercase">
              Earn As You Learn
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold font-display text-white">
            Level Up Your AI Skills
          </h2>
          <p className="text-slate-400 mt-3 max-w-xl mx-auto">
            Every lesson earns XP. Every XP pushes you up the evolution chain.
            60+ badges to collect — from First Steps to Superintelligence.
          </p>
        </div>

        {/* Evolution Tier Track */}
        <div className="mb-12">
          <p className="text-center text-xs text-slate-500 uppercase tracking-widest mb-6 font-semibold">
            Your Evolution Path
          </p>
          <div className="flex flex-wrap items-center justify-center gap-2 md:gap-0">
            {TIER_ORDER.map((tierId, i) => {
              const tier = TIER_CONFIG[tierId]
              const isLast = i === TIER_ORDER.length - 1
              return (
                <div key={tierId} className="flex items-center gap-2">
                  <div className="flex flex-col items-center gap-2">
                    <div
                      className={`
                        h-14 w-14 rounded-2xl border flex items-center justify-center text-2xl transition-all
                        ${i === 0
                          ? "bg-cyan-500/10 border-cyan-500/30 shadow-lg shadow-cyan-500/10"
                          : "bg-white/[0.03] border-white/5 opacity-50"
                        }
                      `}
                    >
                      {i === 0 ? tier.emoji : <Lock className="h-5 w-5 text-slate-600" />}
                    </div>
                    <span className={`text-[10px] font-semibold text-center max-w-[64px] leading-tight ${i === 0 ? "text-cyan-400" : "text-slate-600"}`}>
                      {tier.name}
                    </span>
                  </div>
                  {!isLast && (
                    <div className="hidden md:block w-8 h-px bg-white/10 mx-1 mb-5" />
                  )}
                </div>
              )
            })}
          </div>
        </div>

        {/* Sample Badge Grid */}
        <div className="mb-10">
          <p className="text-center text-xs text-slate-500 uppercase tracking-widest mb-6 font-semibold">
            Sample Achievement Badges — unlock these and 50+ more
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
            {TEASER_SPECIAL.map((badge, i) => {
              const isLocked = i > 1 // show first 2 as "earned" for preview effect
              return (
                <div
                  key={badge.id}
                  className={`
                    rounded-2xl border p-4 flex flex-col items-center text-center gap-2 transition-all
                    ${isLocked
                      ? "bg-white/[0.02] border-white/5 opacity-40"
                      : "bg-white/5 border-white/10 hover:border-cyan-500/20 hover:-translate-y-0.5"
                    }
                  `}
                >
                  <div className={`h-12 w-12 rounded-xl flex items-center justify-center text-2xl ${isLocked ? "bg-white/5 grayscale" : "bg-cyan-500/10"}`}>
                    {isLocked ? <Lock className="h-4 w-4 text-slate-600" /> : badge.emoji}
                  </div>
                  <p className={`text-[11px] font-bold leading-tight ${isLocked ? "text-slate-600" : "text-white"}`}>
                    {badge.name}
                  </p>
                  {!isLocked && (
                    <span className="text-[9px] uppercase tracking-wider font-semibold text-cyan-400 border border-cyan-500/20 bg-cyan-500/5 rounded-full px-2 py-0.5">
                      {badge.rarity}
                    </span>
                  )}
                </div>
              )
            })}
          </div>
        </div>

        {/* XP Explainer strip */}
        <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-6 mb-10 grid sm:grid-cols-3 gap-6 text-center">
          {[
            { icon: "📖", label: "Complete a lesson", value: "+50 XP" },
            { icon: "🔥", label: "7-day streak", value: "Binary Streak badge" },
            { icon: "🧠", label: "Finish a topic path", value: "Topic badge unlocked" },
          ].map((item) => (
            <div key={item.label} className="flex flex-col items-center gap-2">
              <span className="text-2xl">{item.icon}</span>
              <p className="text-xs text-slate-400">{item.label}</p>
              <p className="text-sm font-bold text-white">{item.value}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link
            href="/sign-up"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-white bg-gradient-to-r from-indigo-500 to-violet-600 hover:from-indigo-400 hover:to-violet-500 shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 transition-all duration-300 hover:scale-105"
          >
            <Zap className="h-5 w-5" />
            Start Earning XP — it&apos;s free
            <ArrowRight className="h-5 w-5" />
          </Link>
          <p className="text-xs text-slate-500 mt-3">No credit card. Cancel anytime. Free tier included.</p>
        </div>
      </div>
    </section>
  )
}
