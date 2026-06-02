"use client"

import { useState, useMemo } from "react"
import { ALL_MODULES, type Module, type ModuleLevel } from "@/data/modules"
import { useUserProgressStore } from "@/lib/user-progress-store"
import { siteConfig } from "@/lib/site-config"
import { cn } from "@/lib/utils"
import {
  Search,
  Filter,
  BookOpen,
  CheckCircle2,
  Bookmark,
  BookmarkCheck,
  Clock,
  ArrowRight,
  TrendingUp,
} from "lucide-react"
import Link from "next/link"

type FilterType = "all" | ModuleLevel | "bookmarked"

export default function LessonsDashboardPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [activeFilter, setActiveFilter] = useState<FilterType>("all")

  // Store hooks
  const { lessonProgress, bookmarks, toggleBookmark } = useUserProgressStore()

  // Filter & Search Modules
  const filteredModules = useMemo(() => {
    return ALL_MODULES.filter((m) => {
      // 1. Search Query Match
      const matchesSearch =
        m.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        m.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        m.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()))

      if (!matchesSearch) return false

      // 2. Filter Match
      if (activeFilter === "all") return true
      if (activeFilter === "bookmarked") return bookmarks.includes(m.id)
      return m.level === activeFilter
    })
  }, [searchQuery, activeFilter, bookmarks])

  // Helpers
  const getLevelColor = (level: ModuleLevel) => {
    switch (level) {
      case "beginner":
        return "text-emerald-400 bg-emerald-500/10 border-emerald-500/20"
      case "intermediate":
        return "text-cyan-400 bg-cyan-500/10 border-cyan-500/20"
      case "advanced":
        return "text-indigo-400 bg-indigo-500/10 border-indigo-500/20"
    }
  }

  return (
    <div className="max-w-6xl mx-auto space-y-6 animate-in fade-in duration-500">
      {/* Header section */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-extrabold font-display text-white">
            Training Curriculum
          </h1>
          <p className="text-slate-400 mt-1">
            Complete lessons to unlock Evolution Tiers and climb the Superintelligence leaderboard.
          </p>
        </div>
      </div>

      {/* Search and Filters Bar */}
      <div className="flex flex-col md:flex-row gap-4 items-center justify-between bg-white/5 border border-white/5 p-4 rounded-2xl backdrop-blur-xl">
        {/* Search */}
        <div className="relative w-full md:w-80">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-500" />
          <input
            type="text"
            placeholder="Search lessons or topics..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 rounded-xl border border-white/10 bg-slate-950 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-500 transition-all"
          />
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-2 w-full md:w-auto">
          {(["all", "beginner", "intermediate", "advanced", "bookmarked"] as const).map(
            (filter) => {
              const count =
                filter === "all"
                  ? ALL_MODULES.length
                  : filter === "bookmarked"
                  ? bookmarks.length
                  : ALL_MODULES.filter((m) => m.level === filter).length

              return (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={cn(
                    "px-4 py-1.5 rounded-xl text-xs font-semibold uppercase tracking-wider border transition-all duration-200",
                    activeFilter === filter
                      ? "bg-cyan-500 text-slate-950 border-cyan-500"
                      : "border-white/5 bg-white/5 text-slate-400 hover:text-white hover:border-white/10"
                  )}
                >
                  {filter} <span className="opacity-60 font-bold ml-1">({count})</span>
                </button>
              )
            }
          )}
        </div>
      </div>

      {/* Grid listing */}
      {filteredModules.length > 0 ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredModules.map((mod) => {
            const progress = lessonProgress[mod.id]
            const isCompleted = !!progress?.completed
            const percent = isCompleted ? 100 : progress?.scrollPercent || 0
            const isStarted = !!progress?.started
            const isBookmarked = bookmarks.includes(mod.id)

            return (
              <div
                key={mod.id}
                className="glass-card group flex flex-col justify-between hover:border-white/20 transition-all duration-300 relative overflow-hidden"
              >
                {/* Glow bar at top of completed cards */}
                {isCompleted && (
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 to-teal-400" />
                )}

                <div className="p-6 space-y-4">
                  {/* Top Header */}
                  <div className="flex justify-between items-start gap-2">
                    <span
                      className={cn(
                        "inline-block rounded-full border px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider",
                        getLevelColor(mod.level)
                      )}
                    >
                      {mod.level}
                    </span>

                    {/* Bookmark Toggle */}
                    <button
                      onClick={() => toggleBookmark(mod.id)}
                      className="p-1 rounded-lg border border-white/5 bg-white/5 text-slate-400 hover:text-cyan-400 hover:bg-white/10 transition-all"
                      aria-label="Bookmark lesson"
                    >
                      {isBookmarked ? (
                        <BookmarkCheck className="h-4 w-4 text-cyan-400" />
                      ) : (
                        <Bookmark className="h-4 w-4" />
                      )}
                    </button>
                  </div>

                  {/* Title & Desc */}
                  <div>
                    <h3 className="text-base font-bold text-white leading-snug group-hover:text-cyan-400 transition-colors">
                      {mod.title}
                    </h3>
                    <p className="text-xs text-slate-400 mt-2 line-clamp-2 leading-relaxed">
                      {mod.description}
                    </p>
                  </div>

                  {/* Metadata */}
                  <div className="flex items-center gap-4 text-[11px] text-slate-500 pt-2">
                    <div className="flex items-center gap-1.5">
                      <Clock className="h-3.5 w-3.5" />
                      <span>{mod.duration}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <TrendingUp className="h-3.5 w-3.5" />
                      <span>+50 XP</span>
                    </div>
                  </div>
                </div>

                {/* Bottom Footer Section with Progress */}
                <div className="px-6 pb-6 pt-4 border-t border-white/5 bg-white/5/20 space-y-3">
                  {isStarted && (
                    <div className="flex items-center gap-2">
                      <div className="flex-1 h-1 bg-white/5 rounded-full overflow-hidden border border-white/5">
                        <div
                          className={cn(
                            "h-full rounded-full transition-all duration-300",
                            isCompleted ? "bg-emerald-500" : "bg-cyan-500"
                          )}
                          style={{ width: `${percent}%` }}
                        />
                      </div>
                      <span className="text-[9px] text-slate-500 font-bold min-w-[24px] text-right">
                        {percent}%
                      </span>
                    </div>
                  )}

                  <div className="flex justify-between items-center gap-2">
                    {isCompleted ? (
                      <span className="inline-flex items-center gap-1 text-[11px] text-emerald-400 font-bold">
                        <CheckCircle2 className="h-3.5 w-3.5" /> Completed
                      </span>
                    ) : isStarted ? (
                      <span className="inline-flex items-center gap-1 text-[11px] text-cyan-400 font-semibold">
                        <BookOpen className="h-3.5 w-3.5" /> In Progress
                      </span>
                    ) : (
                      <span className="text-[11px] text-slate-500">Unstarted</span>
                    )}

                    <Link
                      href={`/lessons/${mod.id}`}
                      className={cn(
                        "inline-flex items-center gap-1 text-xs font-bold transition-all px-3 py-1.5 rounded-lg border",
                        isCompleted
                          ? "text-slate-300 border-white/10 hover:border-white/20 hover:text-white"
                          : "text-cyan-400 border-cyan-500/20 bg-cyan-500/5 hover:bg-cyan-500/10 hover:border-cyan-500/30"
                      )}
                    >
                      {isCompleted ? "Review" : isStarted ? "Resume" : "Start"}
                      <ArrowRight className="h-3 w-3 ml-0.5" />
                    </Link>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-16 text-center bg-white/5 border border-white/5 rounded-2xl">
          <BookOpen className="h-12 w-12 text-slate-500 mb-3 animate-pulse" />
          <p className="text-base font-bold text-white">No lessons found</p>
          <p className="text-xs text-slate-500 mt-1 max-w-[280px]">
            We couldn&apos;t find any modules matching your filter or query. Reset search parameters to try again.
          </p>
        </div>
      )}
    </div>
  )
}
