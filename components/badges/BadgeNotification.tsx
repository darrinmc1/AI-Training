"use client"

import { useEffect, useState, useCallback } from "react"
import { cn } from "@/lib/utils"
import { useBadgeStore } from "@/lib/badge-store"
import { getBadgeById, getSpecialBadgeById, TIER_CONFIG, type Badge, type SpecialBadge } from "@/data/badges"
import { X, Sparkles } from "lucide-react"

// ── Confetti particle ────────────────────────────────────────────────────────

function ConfettiParticle({ delay, color }: { delay: number; color: string }) {
  const left = Math.random() * 100
  const animDuration = 1.5 + Math.random() * 1.5
  const size = 6 + Math.random() * 6

  return (
    <div
      className="absolute pointer-events-none"
      style={{
        left: `${left}%`,
        top: "-10px",
        width: size,
        height: size,
        backgroundColor: color,
        borderRadius: Math.random() > 0.5 ? "50%" : "2px",
        animation: `confettiFall ${animDuration}s ease-in ${delay}s forwards`,
        opacity: 0,
        transform: `rotate(${Math.random() * 360}deg)`,
      }}
    />
  )
}

// ── Confetti container ───────────────────────────────────────────────────────

function Confetti() {
  const colors = ["#06b6d4", "#8b5cf6", "#f59e0b", "#10b981", "#f472b6", "#3b82f6", "#22d3ee", "#a78bfa"]
  const particles = Array.from({ length: 50 }, (_, i) => ({
    delay: Math.random() * 0.5,
    color: colors[i % colors.length],
  }))

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-50">
      {particles.map((p, i) => (
        <ConfettiParticle key={i} delay={p.delay} color={p.color} />
      ))}
    </div>
  )
}

// ── Tier colour map (MTR's TIER_CONFIG uses Tailwind colour names) ──────────

const TIER_COLORS: Record<string, { hex: string; bg: string; label: string }> = {
  "basic-bot":        { hex: "#94a3b8", bg: "from-slate-500/20 to-slate-600/20", label: "Basic Bot" },
  "smart-assistant":  { hex: "#22d3ee", bg: "from-cyan-500/20 to-cyan-600/20",   label: "Smart Assistant" },
  "neural-network":   { hex: "#3b82f6", bg: "from-blue-500/20 to-blue-600/20",   label: "Neural Network" },
  "deep-mind":        { hex: "#818cf8", bg: "from-indigo-500/20 to-indigo-600/20", label: "Deep Mind" },
  "superintelligence": { hex: "#c084fc", bg: "from-violet-500/20 to-violet-600/20", label: "Superintelligence" },
}

// ── Main component ──────────────────────────────────────────────────────────

export function BadgeNotification() {
  const { pendingNotifications, dismissNotification } = useBadgeStore()
  const [currentBadge, setCurrentBadge] = useState<(Badge | SpecialBadge) | null>(null)
  const [visible, setVisible] = useState(false)
  const [showConfetti, setShowConfetti] = useState(false)

  const handleDismiss = useCallback(() => {
    setVisible(false)
    setTimeout(() => {
      if (currentBadge) {
        dismissNotification(currentBadge.id)
      }
      setCurrentBadge(null)
      setShowConfetti(false)
    }, 300)
  }, [currentBadge, dismissNotification])

  useEffect(() => {
    if (pendingNotifications.length > 0 && !currentBadge) {
      const badgeId = pendingNotifications[0]
      const badge = getBadgeById(badgeId) || getSpecialBadgeById(badgeId)
      if (badge) {
        setCurrentBadge(badge)
        requestAnimationFrame(() => {
          setVisible(true)
          setShowConfetti(true)
        })
        const timer = setTimeout(handleDismiss, 6000)
        return () => clearTimeout(timer)
      }
    }
  }, [pendingNotifications, currentBadge, handleDismiss])

  if (!currentBadge) return null

  const isTopic = "tier" in currentBadge
  const tier = isTopic ? (currentBadge as Badge).tier : null
  const tierColor = tier ? TIER_COLORS[tier] ?? TIER_COLORS["basic-bot"] : null
  const badgeEmoji = currentBadge.emoji || "🏅"

  return (
    <div className="fixed inset-0 z-[100] pointer-events-none flex items-end justify-center p-4 sm:items-start sm:justify-end sm:p-6">
      {showConfetti && <Confetti />}

      <div
        className={cn(
          "pointer-events-auto w-full max-w-sm overflow-hidden rounded-2xl shadow-2xl transition-all duration-300",
          "bg-slate-900 border border-cyan-500/20",
          "shadow-cyan-500/10",
          visible
            ? "translate-y-0 opacity-100 scale-100"
            : "translate-y-4 opacity-0 scale-95"
        )}
      >
        {/* Top accent bar */}
        <div
          className="h-1 w-full"
          style={{
            background: tier && tierColor
              ? `linear-gradient(90deg, ${tierColor.hex}40, ${tierColor.hex})`
              : "linear-gradient(90deg, rgba(168,85,247,0.25), rgba(168,85,247,0.6))",
          }}
        />

        <div className="p-5 relative">
          {/* Close button */}
          <button
            onClick={handleDismiss}
            className="absolute top-3 right-3 text-slate-500 hover:text-slate-300 transition-colors"
          >
            <X className="h-4 w-4" />
          </button>

          <div className="flex items-start gap-4">
            {/* Badge icon */}
            <div
              className={cn(
                "flex-shrink-0 w-16 h-16 rounded-2xl flex items-center justify-center text-3xl",
                "shadow-lg border",
                tier && tierColor
                  ? `bg-gradient-to-br ${tierColor.bg} border-white/10`
                  : "bg-gradient-to-br from-violet-500/20 to-purple-600/20 border-white/10"
              )}
              style={tier && tierColor ? { boxShadow: `0 8px 24px ${tierColor.hex}30` } : {}}
            >
              {badgeEmoji}
            </div>

            {/* Text */}
            <div className="flex-1 min-w-0">
              <p className="text-xs font-bold uppercase tracking-widest text-cyan-400 mb-0.5 flex items-center gap-1.5">
                <Sparkles className="h-3 w-3" />
                Badge Unlocked!
              </p>
              <p className="font-bold text-lg leading-tight truncate text-white">
                {currentBadge.name}
              </p>
              <p className="text-sm text-slate-400 mt-0.5 line-clamp-2">
                {currentBadge.description}
              </p>

              {tier && tierColor && (
                <div className="mt-2 flex items-center gap-1.5">
                  <span
                    className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider text-white/80"
                    style={{
                      backgroundColor: tierColor.hex + "25",
                    }}
                  >
                    {TIER_CONFIG[tier as keyof typeof TIER_CONFIG]?.emoji || ""} {tierColor.label}
                  </span>
                </div>
              )}
            </div>
          </div>

          {/* Action */}
          <div className="mt-4 flex justify-end">
            <button
              onClick={handleDismiss}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 transition-all duration-300 shadow-lg shadow-cyan-500/20"
            >
              Awesome! 🎉
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
