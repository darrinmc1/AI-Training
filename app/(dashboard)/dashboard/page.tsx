"use client"

import { siteConfig, getBadgeDisplay, getTierProgress } from "@/lib/site-config"
import { cn } from "@/lib/utils"
import { useUser } from "@clerk/nextjs"
import { useUserProgressStore } from "@/lib/user-progress-store"
import { useBadgeStore } from "@/lib/badge-store"
import { getBadgeById } from "@/data/badges"
import { getModuleById } from "@/data/modules"
import {
  BookOpen,
  TrendingUp,
  Award,
  Zap,
  Clock,
  ChevronRight,
  Sparkles,
} from "lucide-react"
import { useState, useEffect } from "react"
import Link from "next/link"

export default function DashboardPage() {
  const { user, isLoaded } = useUser()

  // Connect stores
  const {
    currentStreak,
    totalLessonsCompleted,
    totalTimeSpentSeconds,
    lessonProgress,
  } = useUserProgressStore()

  const { totalXP, unlockedBadges } = useBadgeStore()

  // Calculate dynamic badge and progress toward next tier
  const [badge, setBadge] = useState(() => getBadgeDisplay(siteConfig, 0))
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    setBadge(getBadgeDisplay(siteConfig, totalXP))
    setProgress(getTierProgress(siteConfig, totalXP))
  }, [totalXP])

  // Get dynamic earned badges
  const earnedBadgesList = Object.keys(unlockedBadges)
    .map((badgeId) => {
      const badgeInfo = getBadgeById(badgeId)
      return {
        name: badgeInfo?.name || badgeId,
        emoji: badgeInfo?.emoji || "🏅",
        description: badgeInfo?.description || "Unlocked achievement",
      }
    })
    .slice(0, 3)

  // Get dynamic recent lessons (fall back to default recommendations if empty)
  const userRecentLessons = Object.values(lessonProgress)
    .map((progress) => {
      const mod = getModuleById(progress.moduleId)
      return {
        id: progress.moduleId,
        title: mod?.title || progress.moduleId,
        category: mod?.level || "beginner",
        progress: progress.completed ? 100 : progress.scrollPercent,
        emoji: mod?.level === "beginner" ? "🌱" : mod?.level === "intermediate" ? "⚙️" : "🧠",
      }
    })
    .slice(0, 3)

  const defaultRecommended = [
    {
      id: "what-is-ai",
      title: "What is AI and Why Your Business Needs It",
      category: "beginner",
      progress: 0,
      emoji: "🤖",
    },
    {
      id: "prompt-engineering-101",
      title: "Prompt Engineering 101",
      category: "beginner",
      progress: 0,
      emoji: "✍️",
    },
  ]

  const recentLessons = userRecentLessons.length > 0 ? userRecentLessons : defaultRecommended

  // Calculate total hours spent learning
  const totalHours = Math.round((totalTimeSpentSeconds / 3600) * 10) / 10

  return (
    <div className="max-w-6xl mx-auto space-y-8 animate-in fade-in duration-500">
      {/* Welcome Header */}
      <div>
        <h1 className="text-2xl md:text-3xl font-extrabold font-display text-white flex items-center gap-2">
          Welcome back, {user?.firstName || "AI Learner"} {badge.emoji}
        </h1>
        <p className="text-slate-400 mt-1 max-w-xl">
          Keep going &mdash; you are evolving your intelligence index. Future-you is going
          to be very grateful.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          {
            label: "Total XP",
            value: totalXP.toLocaleString(),
            icon: Zap,
            color: "text-cyan-400",
            bgColor: "bg-cyan-500/10",
          },
          {
            label: "Lessons Done",
            value: totalLessonsCompleted,
            icon: BookOpen,
            color: "text-blue-400",
            bgColor: "bg-blue-500/10",
          },
          {
            label: "Day Streak",
            value: currentStreak,
            icon: TrendingUp,
            color: "text-indigo-400",
            bgColor: "bg-indigo-500/10",
          },
          {
            label: "Hours Learned",
            value: totalHours,
            icon: Clock,
            color: "text-violet-400",
            bgColor: "bg-violet-500/10",
          },
        ].map((stat) => (
          <div key={stat.label} className="glass-card p-5 group hover:border-white/20 transition-all duration-300">
            <div className="relative z-10">
              <div
                className={cn(
                  "h-10 w-10 rounded-xl flex items-center justify-center mb-3 transition-transform group-hover:scale-110",
                  stat.bgColor
                )}
              >
                <stat.icon className={cn("h-5 w-5", stat.color)} />
              </div>
              <p className="text-2xl font-extrabold text-white">{stat.value}</p>
              <p className="text-xs text-slate-500 mt-1">{stat.label}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Tier Progress */}
      <div className="glass-card p-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 -mr-16 -mt-16 w-48 h-48 bg-cyan-500/5 rounded-full blur-3xl" />
        <div className="relative z-10">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
            <div className="flex items-center gap-3">
              <span className="text-3xl p-2 rounded-2xl bg-white/5 border border-white/5">{badge.emoji}</span>
              <div>
                <h3 className="font-extrabold text-white text-lg font-display flex items-center gap-1.5">
                  {badge.name}{" "}
                  {badge.isMaxTier && (
                    <span className="text-[10px] font-semibold tracking-wider text-amber-400 bg-amber-500/10 border border-amber-500/20 px-2 py-0.5 rounded-full uppercase flex items-center gap-0.5 animate-pulse">
                      <Sparkles className="h-2.5 w-2.5" /> Max Level
                    </span>
                  )}
                </h3>
                <p className="text-xs text-slate-500">
                  {badge.isMaxTier
                    ? "Maximum evolution tier achieved!"
                    : `${progress}% towards ${
                        siteConfig.badges.tierNames[badge.tier + 1]
                      }`}
                </p>
              </div>
            </div>
            <div className="text-left md:text-right">
              <p className="text-sm font-extrabold text-cyan-400">{totalXP} XP</p>
              <p className="text-xs text-slate-500 mt-0.5">
                {badge.isMaxTier
                  ? "Infinite Loop"
                  : `${siteConfig.badges.xpPerTier[badge.tier + 1]} XP needed for next tier`}
              </p>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="w-full h-3 bg-white/5 rounded-full overflow-hidden border border-white/5">
            <div
              className="h-full bg-gradient-to-r from-cyan-500 to-indigo-500 rounded-full transition-all duration-700 ease-out"
              style={{ width: `${badge.isMaxTier ? 100 : progress}%` }}
            />
          </div>

          <div className="flex justify-between mt-3 px-1">
            {siteConfig.badges.tierEmojis.map((emoji, i) => (
              <div
                key={i}
                className={cn(
                  "flex flex-col items-center gap-1 transition-all duration-300",
                  i <= badge.tier ? "opacity-100 scale-105" : "opacity-25"
                )}
              >
                <span className="text-lg">{emoji}</span>
                <span className="text-[9px] text-slate-500 hidden md:block">
                  {siteConfig.badges.tierNames[i]}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Grid: Lessons & Achievements */}
      <div className="grid md:grid-cols-2 gap-6">
        {/* Recent / Recommended Lessons */}
        <div className="glass-card p-6">
          <div className="relative z-10">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-extrabold text-white font-display text-base">
                {userRecentLessons.length > 0 ? "Recent Lessons" : "Recommended for You"}
              </h3>
              <Link
                href="/dashboard/lessons"
                className="text-xs text-cyan-400 hover:text-cyan-300 flex items-center gap-1 font-semibold"
              >
                Explore Curriculum <ChevronRight className="h-3.5 w-3.5" />
              </Link>
            </div>
            <div className="space-y-3">
              {recentLessons.map((lesson) => (
                <Link
                  key={lesson.id}
                  href={`/lessons/${lesson.id}`}
                  className="flex items-center gap-3 p-3.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/10 transition-all cursor-pointer group"
                >
                  <span className="text-2xl p-1 bg-white/5 rounded-lg group-hover:scale-105 transition-transform">{lesson.emoji}</span>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-bold text-white truncate group-hover:text-cyan-400 transition-colors">
                      {lesson.title}
                    </p>
                    <div className="flex items-center gap-2 mt-1.5">
                      <div className="flex-1 h-1.5 bg-white/5 rounded-full overflow-hidden border border-white/5">
                        <div
                          className={cn(
                            "h-full rounded-full transition-all duration-500",
                            lesson.progress === 100
                              ? "bg-emerald-500"
                              : "bg-cyan-500"
                          )}
                          style={{ width: `${lesson.progress}%` }}
                        />
                      </div>
                      <span className="text-[10px] text-slate-500 font-semibold min-w-[28px] text-right">
                        {lesson.progress}%
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Badges Earned */}
        <div className="glass-card p-6">
          <div className="relative z-10">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-extrabold text-white font-display text-base">
                Achievements Unlocked
              </h3>
              <Link
                href="/dashboard/badges"
                className="text-xs text-cyan-400 hover:text-cyan-300 flex items-center gap-1 font-semibold"
              >
                View Showcase <ChevronRight className="h-3.5 w-3.5" />
              </Link>
            </div>

            {earnedBadgesList.length > 0 ? (
              <div className="space-y-3">
                {earnedBadgesList.map((b) => (
                  <div
                    key={b.name}
                    className="flex items-center gap-3.5 p-3 rounded-xl bg-white/5 border border-white/5"
                  >
                    <div className="h-10 w-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-xl shadow-inner shadow-cyan-500/5">
                      <span>{b.emoji}</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-bold text-white truncate">{b.name}</p>
                      <p className="text-xs text-slate-400 truncate">{b.description}</p>
                    </div>
                    <Award className="h-4.5 w-4.5 text-cyan-500/50 mr-2 flex-shrink-0" />
                  </div>
                ))}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center py-8 text-center bg-white/5 rounded-2xl border border-white/5">
                <span className="text-3xl mb-2">🔒</span>
                <p className="text-sm font-bold text-slate-300">All achievements locked</p>
                <p className="text-xs text-slate-500 max-w-[200px] mt-1">
                  Complete your first lesson to unlock a custom rookie badge!
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
