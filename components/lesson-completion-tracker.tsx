"use client"

import { useEffect, useState } from "react"
import { useUserProgressStore } from "@/lib/user-progress-store"
import { useBadgeStore } from "@/lib/badge-store"
import { siteConfig } from "@/lib/site-config"
import { getBadgeById } from "@/data/badges"
import { ALL_MODULES } from "@/data/modules"
import { CheckCircle2, Award, Zap, Sparkles, BookOpen, Clock, ArrowRight } from "lucide-react"

interface TrackerProps {
  moduleId: string
}

export function LessonCompletionTracker({ moduleId }: TrackerProps) {
  // Store hooks
  const {
    startLesson,
    completeLesson: progressComplete,
    updateScrollProgress,
    addReadingTime,
    updateStreak,
    lessonProgress,
    currentStreak,
    getCompletedModuleIds,
  } = useUserProgressStore()

  const {
    completeLesson: badgeComplete,
    checkAndUnlockBadges,
    checkSpecialBadges,
    totalXP,
  } = useBadgeStore()

  const [isCompleted, setIsCompleted] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)
  const [timeSpent, setTimeSpent] = useState(0)
  const [newlyUnlocked, setNewlyUnlocked] = useState<string[]>([])
  const [showCelebration, setShowCelebration] = useState(false)

  // Initialize and track active learning on mount
  useEffect(() => {
    // 1. Mark lesson as started
    startLesson(moduleId)

    // 2. Update streak on active learning day
    updateStreak()

    // 3. Setup scroll tracker
    const handleScroll = () => {
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      if (docHeight <= 0) return
      const scrolled = Math.min(
        100,
        Math.round((window.scrollY / docHeight) * 100)
      )
      setScrollProgress(scrolled)
      updateScrollProgress(moduleId, scrolled)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll() // Trigger initially

    // 4. Setup reading duration accumulator (saves time every 10 seconds)
    const timeInterval = setInterval(() => {
      setTimeSpent((prev) => prev + 10)
      addReadingTime(moduleId, 10)
    }, 10000)

    return () => {
      window.removeEventListener("scroll", handleScroll)
      clearInterval(timeInterval)
    }
  }, [moduleId])

  // Sync completion state from store
  useEffect(() => {
    if (lessonProgress[moduleId]?.completed) {
      setIsCompleted(true)
    }
  }, [lessonProgress, moduleId])

  const handleComplete = () => {
    if (isCompleted) return

    // 1. Mark complete in user progress store
    progressComplete(moduleId)

    // 2. Award XP (+50 XP) in badge store
    badgeComplete(moduleId)

    // 3. Check for specific topic level badge unlocks
    const topicBadges = checkAndUnlockBadges(moduleId)

    // 4. Check for special achievement badge unlocks
    const completedIds = getCompletedModuleIds()
    const isFirst = completedIds.length === 1
    const now = new Date()
    const hour = now.getHours()
    const day = now.getDay()
    const isEarlyMorning = hour < 6
    const isCoffeeHour = hour >= 6 && hour < 8
    const isLunchBreak = hour >= 12 && hour < 13
    const isAfterHours = hour >= 18
    const isLateNight = hour >= 23 || hour === 0
    const isMondayMorning = day === 1 && hour < 9
    const isWeekend = day === 0 || day === 6

    const specialBadges = checkSpecialBadges({
      modulesCompleted: completedIds.length,
      totalModules: ALL_MODULES.length,
      streak: currentStreak,
      isFirstLesson: isFirst,
      isEarlyMorning,
      isCoffeeHour,
      isLunchBreak,
      isAfterHours,
      isLateNight,
      isMondayMorning,
      isWeekend,
      completedModuleId: moduleId,
      sessionDurationMinutes: Math.round(timeSpent / 60),
      lessonDurationSeconds: timeSpent,
      totalLessonsCompleted: completedIds.length,
    })

    const allUnlocked = [...topicBadges, ...specialBadges]

    if (allUnlocked.length > 0) {
      setNewlyUnlocked(allUnlocked)
      setShowCelebration(true)
    }

    setIsCompleted(true)
  }

  return (
    <div className="mt-12 space-y-6">
      {/* Scroll indicator overlay */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-white/5 z-50">
        <div
          className="h-full bg-gradient-to-r from-cyan-500 to-indigo-500 transition-all duration-300"
          style={{ width: `${isCompleted ? 100 : scrollProgress}%` }}
        />
      </div>

      {/* Main UI Completion Panel */}
      <div className="relative rounded-2xl overflow-hidden border border-cyan-500/20 bg-slate-900/60 p-6 md:p-8 backdrop-blur-xl text-center shadow-lg">
        {/* Ambient background glow */}
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-indigo-500/5 pointer-events-none" />

        <div className="relative z-10 flex flex-col items-center">
          {isCompleted ? (
            <div className="space-y-4 animate-in zoom-in-95 duration-500">
              <div className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
                <CheckCircle2 className="h-8 w-8" />
              </div>
              <div>
                <h3 className="text-xl font-extrabold text-white font-display">
                  Lesson Completed!
                </h3>
                <p className="text-sm text-slate-400 mt-1 max-w-md mx-auto">
                  Excellent focus. You have earned +50 XP and recorded your session.
                  Pick your next AI evolution target when you are ready.
                </p>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-slate-400 mt-2">
                <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/5">
                  <Zap className="h-3.5 w-3.5 text-cyan-400" />
                  <span>+50 XP Earned</span>
                </div>
                {timeSpent > 0 && (
                  <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/5">
                    <Clock className="h-3.5 w-3.5 text-violet-400" />
                    <span>{Math.round(timeSpent / 60) || 1} min read</span>
                  </div>
                )}
              </div>

              <div className="pt-2">
                <a
                  href="/dashboard/lessons"
                  className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl font-bold text-white bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 transition-all duration-300 hover:scale-102 hover:shadow-lg hover:shadow-cyan-500/10 text-sm"
                >
                  Return to Dashboard
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              <div className="text-3xl p-3 bg-white/5 rounded-2xl border border-white/5 inline-block">
                🤖
              </div>
              <div>
                <h3 className="text-xl font-extrabold text-white font-display">
                  Almost Done!
                </h3>
                <p className="text-sm text-slate-400 mt-1 max-w-md mx-auto">
                  Made it to the end &mdash; nice work. Record your achievements to update
                  your smart-assistant profile.
                </p>
              </div>

              {/* Progress reminder */}
              {scrollProgress < 85 && (
                <p className="text-xs text-slate-500 italic">
                  Scroll progress: {scrollProgress}% &bull; Finish reading down to complete.
                </p>
              )}

              <button
                onClick={handleComplete}
                disabled={scrollProgress < 85}
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl font-bold text-white bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/35 transition-all duration-300 hover:scale-[1.02] disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:scale-100 text-sm tracking-wide"
              >
                <Zap className="h-4 w-4" />
                Complete Lesson (+50 XP)
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Achievement Celebration Overlay Dialog */}
      {showCelebration && newlyUnlocked.length > 0 && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-slate-950/85 backdrop-blur-md animate-in fade-in duration-300"
            onClick={() => setShowCelebration(false)}
          />

          {/* Celebration Card */}
          <div className="relative w-full max-w-md rounded-2xl border border-cyan-500/30 bg-slate-900 p-8 text-center shadow-2xl backdrop-blur-xl animate-in zoom-in-95 duration-300 overflow-hidden">
            {/* Glowing circle backdrops */}
            <div className="absolute -top-10 -left-10 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl" />
            <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-indigo-500/10 rounded-full blur-2xl" />

            <div className="relative z-10 flex flex-col items-center">
              {/* Confetti sparklers */}
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-500/20 to-indigo-500/20 border border-cyan-500/30 text-cyan-400 mb-6 animate-bounce">
                <Award className="h-9 w-9 text-cyan-400" />
              </div>

              <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-[10px] font-extrabold text-cyan-400 uppercase tracking-widest mb-2 animate-pulse">
                <Sparkles className="h-3 w-3" /> Achievement Unlocked
              </span>

              <h2 className="text-2xl font-extrabold text-white font-display mb-4">
                Evolution Level Up!
              </h2>

              <div className="space-y-3 w-full my-2 max-h-[220px] overflow-y-auto pr-1">
                {newlyUnlocked.map((id) => {
                  const item = getBadgeById(id)
                  return (
                    <div
                      key={id}
                      className="flex items-center gap-3 p-3.5 rounded-xl border border-white/5 bg-white/5 text-left"
                    >
                      <span className="text-3xl p-1 bg-white/5 rounded-lg">{item?.emoji || "🏅"}</span>
                      <div>
                        <p className="text-sm font-bold text-white">{item?.name || id}</p>
                        <p className="text-xs text-slate-400 mt-0.5">{item?.description}</p>
                      </div>
                    </div>
                  )
                })}
              </div>

              <button
                onClick={() => setShowCelebration(false)}
                className="w-full mt-6 py-3 px-4 rounded-xl font-extrabold text-white bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 transition-all duration-300 text-sm tracking-wide shadow-lg shadow-cyan-500/20"
              >
                Synthesize Progress
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
