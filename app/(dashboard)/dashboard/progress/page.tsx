"use client"

import { useMemo } from "react"
import { useUserProgressStore } from "@/lib/user-progress-store"
import { useBadgeStore } from "@/lib/badge-store"
import { siteConfig, getBadgeDisplay } from "@/lib/site-config"
import { ALL_MODULES } from "@/data/modules"
import { cn } from "@/lib/utils"
import {
  TrendingUp,
  Zap,
  Clock,
  Flame,
  Award,
  Compass,
  Cpu,
  RefreshCw,
  LayoutGrid,
} from "lucide-react"

export default function ProgressDashboardPage() {
  const {
    lessonProgress,
    currentStreak,
    longestStreak,
    totalLessonsCompleted,
    totalTimeSpentSeconds,
  } = useUserProgressStore()

  const { totalXP, topicXP } = useBadgeStore()

  // Dynamic badge
  const badge = useMemo(() => getBadgeDisplay(siteConfig, totalXP), [totalXP])

  // Calculate dynamic levels completion
  const levelStats = useMemo(() => {
    const totalBeg = ALL_MODULES.filter((m) => m.level === "beginner").length
    const totalInt = ALL_MODULES.filter((m) => m.level === "intermediate").length
    const totalAdv = ALL_MODULES.filter((m) => m.level === "advanced").length

    let completedBeg = 0
    let completedInt = 0
    let completedAdv = 0

    Object.values(lessonProgress).forEach((p) => {
      if (!p.completed) return
      const mod = ALL_MODULES.find((m) => m.id === p.moduleId)
      if (!mod) return
      if (mod.level === "beginner") completedBeg++
      if (mod.level === "intermediate") completedInt++
      if (mod.level === "advanced") completedAdv++
    })

    return {
      beginner: { completed: completedBeg, total: totalBeg, percent: totalBeg ? Math.round((completedBeg / totalBeg) * 100) : 0 },
      intermediate: { completed: completedInt, total: totalInt, percent: totalInt ? Math.round((completedInt / totalInt) * 100) : 0 },
      advanced: { completed: completedAdv, total: totalAdv, percent: totalAdv ? Math.round((completedAdv / totalAdv) * 100) : 0 },
    }
  }, [lessonProgress])

  // Prepare a motivational diagnostic message based on progress
  const diagnostic = useMemo(() => {
    if (totalXP === 0) {
      return {
        title: "Systems Offline",
        message: "Your smart assistant is currently uninitialized. Head over to our curriculum and read your first lesson to activate neural sequencing.",
        action: "Recommended: Start 'What is AI' module.",
      }
    }
    if (levelStats.advanced.completed > 0) {
      return {
        title: "Superintelligent Core Active",
        message: "Phenomenal growth. We detect expert-level capabilities in advanced AI strategy and scaling. Your core processing loops are operating at sub-millisecond latencies.",
        action: "Recommended: Share a prompt template in the community hub.",
      }
    }
    if (levelStats.intermediate.completed > 0) {
      return {
        title: "Neural Pathways Standardized",
        message: "Excellent intermediate expansion. You have successfully implemented agentic flows and RAG structures. Your systemic understanding is highly advanced.",
        action: "Recommended: Take 'AI Strategy & ROI' to begin advanced pathways.",
      }
    }
    return {
      title: "Basic Sequences Operating",
      message: "Your assistant is online and training has commenced. Your prompt engineering foundations are solid. We recommend expanding into active database queries next.",
      action: "Recommended: Start 'RAG Basics: Chatting with Your Data'.",
    }
  }, [totalXP, levelStats])

  // Study analytics mock logging matching actual timeSpent index
  const activeHours = Math.round((totalTimeSpentSeconds / 3600) * 10) / 10

  const studyWeek = useMemo(() => {
    const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
    const currentDay = new Date().getDay() // 0 = Sun, 1 = Mon...
    const adjustedDayIndex = currentDay === 0 ? 6 : currentDay - 1

    return days.map((day, i) => {
      let activePercent = 0
      if (i === adjustedDayIndex) {
        activePercent = Math.min(100, Math.round((totalTimeSpentSeconds / 1800) * 100)) || 15
      } else if (i < adjustedDayIndex) {
        // Mock historical active indicators
        activePercent = i % 2 === 0 ? 40 : 0
      }
      return { day, activePercent, isToday: i === adjustedDayIndex }
    })
  }, [totalTimeSpentSeconds])

  return (
    <div className="max-w-6xl mx-auto space-y-8 animate-in fade-in duration-500">
      {/* Header section */}
      <div>
        <h1 className="text-2xl md:text-3xl font-extrabold font-display text-white">
          Neural Analytics &amp; Progress
        </h1>
        <p className="text-slate-400 mt-1">
          Monitor your study logs, streak consistency, and level-specific evolution indexes.
        </p>
      </div>

      {/* Grid: 4 Core Stat Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { label: "Current XP", value: `${totalXP} XP`, icon: Zap, color: "text-cyan-400" },
          { label: "Active Days Streak", value: `${currentStreak} Days`, icon: Flame, color: "text-orange-500" },
          { label: "Longest Streak", value: `${longestStreak} Days`, icon: Award, color: "text-amber-400" },
          { label: "Study Duration", value: `${activeHours} Hours`, icon: Clock, color: "text-violet-400" },
        ].map((item) => (
          <div key={item.label} className="glass-card p-5 border border-white/5 relative overflow-hidden">
            <div className="relative z-10 flex items-center justify-between">
              <div>
                <p className="text-xs text-slate-500">{item.label}</p>
                <p className="text-xl font-extrabold text-white mt-1.5">{item.value}</p>
              </div>
              <div className="h-10 w-10 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center">
                <item.icon className={cn("h-5 w-5", item.color)} />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Middle row: Diagnostic Core Assessment & Weekly Chart */}
      <div className="grid md:grid-cols-3 gap-6">
        {/* Smart-Assistant Diagnostic */}
        <div className="glass-card p-6 md:col-span-2 relative overflow-hidden flex flex-col justify-between">
          <div className="absolute top-0 right-0 -mr-16 -mt-16 w-36 h-36 bg-cyan-500/5 rounded-full blur-2xl" />
          <div className="space-y-4 relative z-10">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-lg bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 flex items-center justify-center">
                <Cpu className="h-4.5 w-4.5" />
              </div>
              <h3 className="font-extrabold text-white font-display text-base">Assistant Diagnostic Core</h3>
            </div>

            <div>
              <h4 className="text-cyan-400 font-bold text-sm tracking-wide">{diagnostic.title}</h4>
              <p className="text-xs text-slate-400 mt-2 leading-relaxed">{diagnostic.message}</p>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-white/5 flex flex-col sm:flex-row justify-between sm:items-center gap-2 relative z-10 text-[11px]">
            <span className="text-slate-400 flex items-center gap-1">
              <Compass className="h-3.5 w-3.5 text-cyan-500" />
              {diagnostic.action}
            </span>
            <span className="text-slate-500">Mascot Mode: {badge.emoji} Standard</span>
          </div>
        </div>

        {/* Study Activity Logs Histogram */}
        <div className="glass-card p-6 flex flex-col justify-between">
          <div className="space-y-2">
            <h3 className="font-extrabold text-white font-display text-sm">Study Activity Load</h3>
            <p className="text-[11px] text-slate-500">Minutes spent reading lessons this week.</p>
          </div>

          {/* Histogram bar charts */}
          <div className="h-28 flex items-end justify-between gap-1.5 px-1 mt-6">
            {studyWeek.map((bar) => (
              <div key={bar.day} className="flex flex-col items-center gap-1.5 flex-1 group relative">
                {/* Bar */}
                <div className="w-full h-24 bg-white/5 border border-white/5 rounded-t-md overflow-hidden flex items-end">
                  <div
                    className={cn(
                      "w-full rounded-t-sm transition-all duration-500",
                      bar.isToday
                        ? "bg-gradient-to-t from-cyan-600 to-cyan-400"
                        : "bg-white/10 group-hover:bg-white/20"
                    )}
                    style={{ height: `${bar.activePercent}%` }}
                  />
                </div>
                {/* Day label */}
                <span
                  className={cn(
                    "text-[10px] uppercase font-bold",
                    bar.isToday ? "text-cyan-400 font-extrabold" : "text-slate-500"
                  )}
                >
                  {bar.day}
                </span>
                
                {/* Hover indicator tooltip */}
                <div className="absolute bottom-full mb-1 bg-slate-900 border border-white/10 px-2 py-0.5 rounded text-[8px] text-white opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                  {bar.activePercent > 15 ? `${Math.round(bar.activePercent * 0.3)} min` : "0 min"}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Grid: Level-specific Evolution dials */}
      <div className="glass-card p-6">
        <h3 className="font-extrabold text-white font-display text-sm mb-6">Subject Level Breakdown</h3>
        <div className="grid sm:grid-cols-3 gap-8">
          {[
            {
              id: "beginner",
              title: "Beginner Foundations",
              description: "Core terminologies, prompt designs, and hallucination spotting.",
              color: "text-emerald-400",
              percent: levelStats.beginner.percent,
              completed: levelStats.beginner.completed,
              total: levelStats.beginner.total,
            },
            {
              id: "intermediate",
              title: "Intermediate Integration",
              description: "Vector querying, private data search, and agent loops.",
              color: "text-cyan-400",
              percent: levelStats.intermediate.percent,
              completed: levelStats.intermediate.completed,
              total: levelStats.intermediate.total,
            },
            {
              id: "advanced",
              title: "Advanced Orchestration",
              description: "Scaling models, strategic planning, and risk management.",
              color: "text-indigo-400",
              percent: levelStats.advanced.percent,
              completed: levelStats.advanced.completed,
              total: levelStats.advanced.total,
            },
          ].map((lvl) => (
            <div key={lvl.id} className="flex flex-col items-center text-center p-4 bg-white/5 border border-white/5 rounded-2xl relative overflow-hidden group">
              {/* Radial Dial Indicator */}
              <div className="relative h-24 w-24 flex items-center justify-center mb-4">
                {/* Background Ring */}
                <svg className="absolute inset-0 h-full w-full -rotate-90">
                  <circle
                    cx="48"
                    cy="48"
                    r="40"
                    stroke="rgba(255,255,255,0.05)"
                    strokeWidth="6"
                    fill="transparent"
                  />
                  {/* Dynamic Ring */}
                  <circle
                    cx="48"
                    cy="48"
                    r="40"
                    stroke="currentColor"
                    strokeWidth="6"
                    fill="transparent"
                    className={lvl.color}
                    strokeDasharray={251.2}
                    strokeDashoffset={251.2 - (251.2 * lvl.percent) / 100}
                    strokeLinecap="round"
                  />
                </svg>
                {/* Center text */}
                <div className="text-center">
                  <p className="text-lg font-extrabold text-white">{lvl.percent}%</p>
                  <p className="text-[9px] text-slate-500 font-bold uppercase tracking-wider">Index</p>
                </div>
              </div>

              {/* Text */}
              <h4 className="font-bold text-white text-sm">{lvl.title}</h4>
              <p className="text-[11px] text-slate-400 mt-1.5 leading-relaxed max-w-[200px]">
                {lvl.description}
              </p>

              {/* Completed counter */}
              <div className="mt-4 pt-3 border-t border-white/5 w-full flex justify-between items-center text-[10px] text-slate-500">
                <span className="flex items-center gap-1 uppercase font-bold text-[9px] tracking-wider text-slate-400">
                  <LayoutGrid className="h-3.5 w-3.5" /> Modules
                </span>
                <span className="font-semibold text-slate-300">
                  {lvl.completed} Completed / {lvl.total}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
