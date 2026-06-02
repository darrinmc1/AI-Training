"use client"

import { useState, useMemo } from "react"
import { useBadgeStore } from "@/lib/badge-store"
import { siteConfig, getBadgeDisplay } from "@/lib/site-config"
import {
  TOPIC_BADGES,
  SPECIAL_BADGES,
  getAllBadges,
  type Badge,
  type SpecialBadge,
} from "@/data/badges"
import { cn } from "@/lib/utils"
import { Award, Lock, Sparkles, Calendar, Zap, ArrowUpRight } from "lucide-react"

type ActiveTab = "all" | "evolution" | "topics" | "special"

export default function BadgesDashboardPage() {
  const [activeTab, setActiveTab] = useState<ActiveTab>("all")

  // Store hooks
  const { unlockedBadges, totalXP } = useBadgeStore()

  // Calculate current dynamic evolution
  const currentEvolution = useMemo(() => getBadgeDisplay(siteConfig, totalXP), [totalXP])

  // Get total count details
  const unlockedCount = Object.keys(unlockedBadges).length
  const totalCount = getAllBadges().length + 5 // all regular badges + 5 main tiers

  // Prepare topic badges grouped by topic name
  const topicBadgesList = useMemo(() => TOPIC_BADGES, [])
  const specialBadgesList = useMemo(() => SPECIAL_BADGES, [])

  // Prepare the 5 Evolution Tiers as standard cards
  const evolutionTiers = useMemo(() => {
    return siteConfig.badges.tierNames.map((name, index) => {
      const isUnlocked = currentEvolution.tier >= index
      const xpNeeded = siteConfig.badges.xpPerTier[index]
      return {
        id: `evolution-tier-${index}`,
        name,
        emoji: siteConfig.badges.tierEmojis[index],
        description: `Evolve your smart-assistant intelligence to tier ${index + 1}.`,
        isUnlocked,
        unlockedAt: isUnlocked ? "Earned during evolution" : null,
        xpRequired: xpNeeded,
        category: "evolution" as const,
        color: siteConfig.badges.tierColors[index],
      }
    })
  }, [currentEvolution])

  // Filters
  const displayedBadges = useMemo(() => {
    if (activeTab === "evolution") return evolutionTiers
    if (activeTab === "topics") {
      return topicBadgesList.map((b) => ({
        ...b,
        isUnlocked: !!unlockedBadges[b.id],
        unlockedAt: unlockedBadges[b.id]?.unlockedAt
          ? new Date(unlockedBadges[b.id].unlockedAt).toLocaleDateString()
          : null,
      }))
    }
    if (activeTab === "special") {
      return specialBadgesList.map((b) => ({
        ...b,
        isUnlocked: !!unlockedBadges[b.id],
        unlockedAt: unlockedBadges[b.id]?.unlockedAt
          ? new Date(unlockedBadges[b.id].unlockedAt).toLocaleDateString()
          : null,
      }))
    }

    // Default: 'all'
    const combined = [
      ...evolutionTiers,
      ...topicBadgesList.map((b) => ({
        ...b,
        isUnlocked: !!unlockedBadges[b.id],
        unlockedAt: unlockedBadges[b.id]?.unlockedAt
          ? new Date(unlockedBadges[b.id].unlockedAt).toLocaleDateString()
          : null,
      })),
      ...specialBadgesList.map((b) => ({
        ...b,
        isUnlocked: !!unlockedBadges[b.id],
        unlockedAt: unlockedBadges[b.id]?.unlockedAt
          ? new Date(unlockedBadges[b.id].unlockedAt).toLocaleDateString()
          : null,
      })),
    ]
    return combined
  }, [activeTab, unlockedBadges, evolutionTiers, topicBadgesList, specialBadgesList])

  const getRarityStyle = (rarity?: "common" | "rare" | "epic" | "legendary") => {
    if (!rarity) return "text-slate-400 border-white/5 bg-white/5"
    switch (rarity) {
      case "common":
        return "text-slate-400 border-slate-500/20 bg-slate-500/5"
      case "rare":
        return "text-cyan-400 border-cyan-500/20 bg-cyan-500/5"
      case "epic":
        return "text-indigo-400 border-indigo-500/20 bg-indigo-500/5"
      case "legendary":
        return "text-amber-400 border-amber-500/20 bg-amber-500/5 animate-pulse"
    }
  }

  const getBadgeAccentColor = (colorClass?: string) => {
    if (!colorClass) return "from-cyan-500/20 to-indigo-500/20 border-cyan-500/30 text-cyan-400"
    switch (colorClass) {
      case "slate":
        return "from-slate-500/20 to-slate-600/20 border-slate-500/30 text-slate-400"
      case "cyan":
        return "from-cyan-500/20 to-blue-500/20 border-cyan-500/30 text-cyan-400"
      case "blue":
        return "from-blue-500/20 to-indigo-500/20 border-blue-500/30 text-blue-400"
      case "indigo":
        return "from-indigo-500/20 to-violet-500/20 border-indigo-500/30 text-indigo-400"
      case "violet":
        return "from-violet-500/20 to-fuchsia-500/20 border-violet-500/30 text-violet-400"
      default:
        return "from-cyan-500/20 to-indigo-500/20 border-cyan-500/30 text-cyan-400"
    }
  }

  return (
    <div className="max-w-6xl mx-auto space-y-8 animate-in fade-in duration-500">
      {/* Header section */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h1 className="text-2xl md:text-3xl font-extrabold font-display text-white">
            Smart-Assistant Achievements
          </h1>
          <p className="text-slate-400 mt-1">
            Complete reading paths, accumulate XP, and trigger unique humor achievements.
          </p>
        </div>

        {/* Global Progress Indicator */}
        <div className="flex items-center gap-4 bg-white/5 border border-white/5 px-6 py-3 rounded-2xl">
          <div>
            <p className="text-xs text-slate-500">Evolution Completion</p>
            <p className="text-lg font-extrabold text-white">
              {unlockedCount} <span className="text-xs text-slate-500 font-normal">/ {totalCount} unlocked</span>
            </p>
          </div>
          <div className="h-10 w-10 rounded-full border border-cyan-500/20 bg-cyan-500/5 flex items-center justify-center text-cyan-400 text-lg">
            🏆
          </div>
        </div>
      </div>

      {/* Tabs Menu */}
      <div className="flex flex-wrap gap-2 border-b border-white/5 pb-4">
        {[
          { id: "all", label: "All Showcase" },
          { id: "evolution", label: "Evolution Tiers" },
          { id: "topics", label: "Topic Badges" },
          { id: "special", label: "Special Achievements" },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id as ActiveTab)}
            className={cn(
              "px-4 py-2 rounded-xl text-xs font-semibold uppercase tracking-wider transition-all duration-200 border",
              activeTab === tab.id
                ? "bg-cyan-500 border-cyan-500 text-slate-950 font-bold shadow-lg shadow-cyan-500/10"
                : "border-white/5 bg-white/5 text-slate-400 hover:text-white hover:border-white/10"
            )}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Badges Grid */}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {displayedBadges.map((badge) => {
          const isUnlocked = badge.isUnlocked
          const accentStyle = getBadgeAccentColor((badge as Badge).color)

          return (
            <div
              key={badge.id}
              className={cn(
                "glass-card p-6 flex flex-col justify-between hover:border-white/20 transition-all duration-300 relative overflow-hidden group",
                isUnlocked
                  ? "opacity-100 border-cyan-500/10 shadow-lg shadow-cyan-500/[0.02]"
                  : "opacity-45 hover:opacity-75"
              )}
            >
              {/* Unlock glow accent */}
              {isUnlocked && (
                <div className="absolute top-0 right-0 -mr-12 -mt-12 w-24 h-24 bg-cyan-500/[0.03] rounded-full blur-xl transition-all group-hover:scale-125" />
              )}

              <div className="space-y-4">
                {/* Top Badge Icon & Rarity */}
                <div className="flex justify-between items-start">
                  {/* Badge Emoji */}
                  <div
                    className={cn(
                      "h-12 w-12 rounded-xl border flex items-center justify-center text-2xl transition-transform group-hover:scale-105 shadow-inner",
                      isUnlocked ? accentStyle : "bg-white/5 border-white/5 text-slate-600 grayscale"
                    )}
                  >
                    <span>{badge.emoji}</span>
                  </div>

                  {/* Rarity or XP tag */}
                  {isUnlocked ? (
                    (badge as SpecialBadge).rarity ? (
                      <span
                        className={cn(
                          "px-2.5 py-0.5 rounded-full border text-[9px] font-bold uppercase tracking-wider",
                          getRarityStyle((badge as SpecialBadge).rarity)
                        )}
                      >
                        {(badge as SpecialBadge).rarity}
                      </span>
                    ) : (
                      <span className="px-2 py-0.5 rounded-full border border-emerald-500/20 bg-emerald-500/5 text-[9px] font-bold text-emerald-400 uppercase tracking-wider flex items-center gap-0.5">
                        Unlocked
                      </span>
                    )
                  ) : (
                    <div className="p-1 rounded-full bg-slate-900 border border-white/5 text-slate-600">
                      <Lock className="h-3 w-3" />
                    </div>
                  )}
                </div>

                {/* Details */}
                <div>
                  <h3
                    className={cn(
                      "text-sm font-extrabold font-display leading-tight",
                      isUnlocked ? "text-white group-hover:text-cyan-400 transition-colors" : "text-slate-400"
                    )}
                  >
                    {badge.name}
                  </h3>
                  <p className="text-[11px] text-slate-400 mt-2 leading-relaxed line-clamp-3">
                    {badge.description}
                  </p>
                </div>
              </div>

              {/* Card Footer Info */}
              <div className="mt-5 pt-3 border-t border-white/5 flex items-center justify-between text-[10px] text-slate-500">
                {isUnlocked ? (
                  <div className="flex items-center gap-1">
                    <Calendar className="h-3 w-3 text-cyan-400/60" />
                    <span>{badge.unlockedAt || "Active"}</span>
                  </div>
                ) : (
                  <div className="flex items-center gap-1 font-semibold text-slate-500">
                    <Zap className="h-3 w-3 text-slate-600" />
                    <span>
                      {(badge as Badge).xpRequired
                        ? `${(badge as Badge).xpRequired} XP required`
                        : "Secret Condition"}
                    </span>
                  </div>
                )}
                
                {isUnlocked && (
                  <Sparkles className="h-3.5 w-3.5 text-cyan-400/40 opacity-0 group-hover:opacity-100 transition-opacity" />
                )}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
