"use client"

import { useState } from "react"
import { useUser } from "@clerk/nextjs"
import { useUserProgressStore } from "@/lib/user-progress-store"
import { useBadgeStore } from "@/lib/badge-store"
import { siteConfig } from "@/lib/site-config"
import { cn } from "@/lib/utils"
import {
  User,
  Settings,
  ShieldAlert,
  Check,
  Bell,
  Cpu,
  Trash2,
  Sparkles,
} from "lucide-react"

export default function SettingsDashboardPage() {
  const { user } = useUser()
  const { resetProgress } = useUserProgressStore()

  // Custom mascot local state persisted in localStorage
  const [selectedMascot, setSelectedMascot] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("discover-ai-mascot") || "🤖"
    }
    return "🤖"
  })

  // Notifications settings states
  const [allowAnnouncements, setAllowAnnouncements] = useState(true)
  const [allowSoundEffects, setAllowSoundEffects] = useState(true)

  // Reset confirmation state
  const [showConfirmReset, setShowConfirmReset] = useState(false)
  const [resetSuccess, setResetSuccess] = useState(false)

  const handleMascotChange = (emoji: string) => {
    setSelectedMascot(emoji)
    if (typeof window !== "undefined") {
      localStorage.setItem("discover-ai-mascot", emoji)
    }
  }

  const handleResetProgress = () => {
    // 1. Reset user progress store
    resetProgress()

    // 2. Reset badge store state variables
    useBadgeStore.setState({
      unlockedBadges: {},
      topicXP: {},
      totalXP: 0,
      completedActivities: {},
      quizScores: [],
      pendingNotifications: [],
    })

    // 3. Trigger visual feedback
    setResetSuccess(true)
    setShowConfirmReset(false)
    setTimeout(() => setResetSuccess(false), 4000)
  }

  const mascots = [
    { emoji: "🤖", name: "Cyberbot", desc: "A sleek smart assistant specializing in linear logical deduction." },
    { emoji: "🧠", name: "DeepMind", desc: "A self-improving neural construct optimizing for complex RAG tasks." },
    { emoji: "🧙", name: "Prompt Mage", desc: "A wizard bot designed to weave legendary PREP prompt sequences." },
    { emoji: "⚡", name: "Voltage Core", desc: "An high-powered energetic processor designed for heavy workloads." },
  ]

  return (
    <div className="max-w-4xl mx-auto space-y-8 animate-in fade-in duration-500">
      {/* Header section */}
      <div>
        <h1 className="text-2xl md:text-3xl font-extrabold font-display text-white">
          System Settings &amp; Profile
        </h1>
        <p className="text-slate-400 mt-1">
          Customize your evolution mascot, adjust notification alerts, and manage system storage.
        </p>
      </div>

      {/* Grid: Profile Summary & Notification toggles */}
      <div className="grid md:grid-cols-3 gap-6">
        {/* Profile Card */}
        <div className="glass-card p-6 md:col-span-2 space-y-4">
          <div className="flex items-center gap-2 mb-2">
            <div className="h-8 w-8 rounded-lg bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 flex items-center justify-center">
              <User className="h-4.5 w-4.5" />
            </div>
            <h3 className="font-extrabold text-white font-display text-base">Account Profile</h3>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 items-center p-4 bg-white/5 border border-white/5 rounded-2xl">
            {user?.imageUrl ? (
              <img
                src={user.imageUrl}
                alt="Profile"
                className="h-16 w-16 rounded-full border border-cyan-500/30 object-cover shadow-lg"
              />
            ) : (
              <div className="h-16 w-16 rounded-full bg-gradient-to-br from-cyan-500 to-indigo-600 flex items-center justify-center text-xl font-bold text-white shadow-lg">
                {(user?.firstName || "A")[0].toUpperCase()}
              </div>
            )}
            <div className="text-center sm:text-left space-y-1">
              <h4 className="font-bold text-white text-base">
                {user?.fullName || user?.username || "AI Learner"}
              </h4>
              <p className="text-xs text-slate-400">
                Primary Email: {user?.primaryEmailAddress?.emailAddress || "Guest User"}
              </p>
              <p className="text-[10px] text-slate-500">
                Registered Username: @{user?.username || "ai-hub-learner"}
              </p>
            </div>
          </div>
        </div>

        {/* Dynamic Sound/Notify card */}
        <div className="glass-card p-6 space-y-4 flex flex-col justify-between">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Bell className="h-4.5 w-4.5 text-cyan-400" />
              <h3 className="font-extrabold text-white font-display text-sm">System Alerts</h3>
            </div>

            <div className="space-y-3">
              {/* Toggles */}
              <label className="flex items-center justify-between cursor-pointer group">
                <span className="text-xs text-slate-400 group-hover:text-slate-300">Unlocks &amp; XP Toast</span>
                <input
                  type="checkbox"
                  checked={allowAnnouncements}
                  onChange={(e) => setAllowAnnouncements(e.target.checked)}
                  className="rounded bg-slate-950 border-white/10 text-cyan-500 focus:ring-0"
                />
              </label>

              <label className="flex items-center justify-between cursor-pointer group">
                <span className="text-xs text-slate-400 group-hover:text-slate-300">Level Sound FX</span>
                <input
                  type="checkbox"
                  checked={allowSoundEffects}
                  onChange={(e) => setAllowSoundEffects(e.target.checked)}
                  className="rounded bg-slate-950 border-white/10 text-cyan-500 focus:ring-0"
                />
              </label>
            </div>
          </div>

          <div className="text-[9px] text-slate-500 border-t border-white/5 pt-2">
            Configure sound parameters for unlocked achievements.
          </div>
        </div>
      </div>

      {/* Mascot Customization section */}
      <div className="glass-card p-6 space-y-6">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-lg bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 flex items-center justify-center">
            <Cpu className="h-4.5 w-4.5" />
          </div>
          <h3 className="font-extrabold text-white font-display text-base">Mascot Interface Mode</h3>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
          {mascots.map((mas) => {
            const isSelected = selectedMascot === mas.emoji

            return (
              <button
                key={mas.name}
                onClick={() => handleMascotChange(mas.emoji)}
                className={cn(
                  "p-5 rounded-2xl border text-center flex flex-col items-center justify-between transition-all duration-300 relative overflow-hidden group",
                  isSelected
                    ? "bg-cyan-500/10 border-cyan-500/30 text-white"
                    : "bg-white/5 border-white/5 text-slate-400 hover:text-white hover:border-white/10"
                )}
              >
                {/* Selection checkmark indicator */}
                {isSelected && (
                  <div className="absolute top-2 right-2 text-cyan-400 p-0.5 bg-cyan-500/10 border border-cyan-500/20 rounded-full">
                    <Check className="h-3 w-3" />
                  </div>
                )}

                <div className="space-y-3">
                  <span className="text-3xl p-2 bg-white/5 rounded-xl border border-white/5 inline-block group-hover:scale-105 transition-transform">{mas.emoji}</span>
                  <h4 className="font-bold text-sm text-white">{mas.name}</h4>
                  <p className="text-[10px] text-slate-400 leading-relaxed leading-snug">
                    {mas.desc}
                  </p>
                </div>
              </button>
            )
          })}
        </div>
      </div>

      {/* Safety Wiping switch card */}
      <div className="rounded-2xl border border-red-500/20 bg-red-500/5 p-6 space-y-4">
        <div className="flex items-center gap-2">
          <ShieldAlert className="h-5 w-5 text-red-400" />
          <h3 className="font-extrabold text-white font-display text-sm">Danger Zone</h3>
        </div>

        <p className="text-xs text-slate-400 leading-relaxed">
          Erasing evolution progress wipes your cumulative XP score, day streaks, and badge rewards
          stored in your browser. This action is permanent and cannot be undone.
        </p>

        <div className="pt-2 flex flex-col sm:flex-row gap-4 items-start sm:items-center">
          {showConfirmReset ? (
            <div className="flex gap-2">
              <button
                onClick={handleResetProgress}
                className="py-2 px-4 rounded-xl font-bold text-white bg-red-600 hover:bg-red-500 transition-all text-xs flex items-center gap-1.5 shadow-lg shadow-red-500/10"
              >
                <Trash2 className="h-4 w-4" /> Yes, Wipe Core Memory
              </button>
              <button
                onClick={() => setShowConfirmReset(false)}
                className="py-2 px-4 rounded-xl font-semibold text-slate-300 border border-white/10 bg-white/5 hover:bg-white/10 transition-all text-xs"
              >
                Cancel Reset
              </button>
            </div>
          ) : (
            <button
              onClick={() => setShowConfirmReset(true)}
              className="py-2 px-4 rounded-xl font-bold text-red-400 border border-red-500/30 hover:border-red-500/50 hover:bg-red-500/10 transition-all text-xs"
            >
              Reset All Evolution Progress
            </button>
          )}

          {resetSuccess && (
            <span className="text-xs font-bold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 rounded-lg flex items-center gap-1 animate-pulse">
              <Sparkles className="h-3.5 w-3.5" /> Neural core wiped. Progression data erased successfully.
            </span>
          )}
        </div>
      </div>
    </div>
  )
}
