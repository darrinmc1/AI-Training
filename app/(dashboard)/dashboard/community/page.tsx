"use client"

import { useState, useMemo } from "react"
import { useUser } from "@clerk/nextjs"
import { useBadgeStore } from "@/lib/badge-store"
import { siteConfig, getBadgeDisplay } from "@/lib/site-config"
import { cn } from "@/lib/utils"
import {
  Users,
  Award,
  Zap,
  Copy,
  Check,
  Heart,
  MessageSquare,
  Sparkles,
  Terminal,
} from "lucide-react"

type ActiveSection = "leaderboard" | "prompts"

interface LeaderboardUser {
  id: string
  name: string
  xp: number
  isSimulated: boolean
  imageUrl?: string
}

export default function CommunityDashboardPage() {
  const [activeSection, setActiveSection] = useState<ActiveSection>("leaderboard")
  const [copiedPromptId, setCopiedPromptId] = useState<string | null>(null)
  const [likedPromptIds, setLikedPromptIds] = useState<string[]>([])

  const { user } = useUser()
  const { totalXP } = useBadgeStore()

  // Get user details
  const userName = user?.firstName || user?.username || "AI Learner"
  const userImage = user?.imageUrl

  // Dynamic leaderboard (placing the live user correctly inside the stack)
  const leaderboardList = useMemo(() => {
    const simulatedUsers: LeaderboardUser[] = [
      { id: "sim-1", name: "PromptYoda 🧙", xp: 3450, isSimulated: true },
      { id: "sim-2", name: "DeepMindGuru 🧠", xp: 2200, isSimulated: true },
      { id: "sim-3", name: "RAGWhisperer 🔍", xp: 1650, isSimulated: true },
      { id: "sim-4", name: "TokenBurner 🔥", xp: 950, isSimulated: true },
      { id: "sim-5", name: "BotLearner 🤖", xp: 400, isSimulated: true },
      { id: "sim-6", name: "CodeAgent ⚡", xp: 150, isSimulated: true },
    ]

    const liveUser: LeaderboardUser = {
      id: "live-user",
      name: `${userName} (You)`,
      xp: totalXP,
      isSimulated: false,
      imageUrl: userImage,
    }

    const combined = [...simulatedUsers, liveUser]
    return combined.sort((a, b) => b.xp - a.xp)
  }, [userName, userImage, totalXP])

  // Get live user's current rank
  const userRank = useMemo(() => {
    return leaderboardList.findIndex((u) => u.id === "live-user") + 1
  }, [leaderboardList])

  // Shared Prompts
  const prompts = [
    {
      id: "prompt-1",
      title: "The PREP Marketing Architect",
      author: "PromptYoda 🧙",
      category: "Marketing",
      likes: 124,
      content: `Act as a senior growth marketer. Help me draft a 3-part email campaign for my [business/product]. 
Constraints:
- Persona: Highly engaging, witty, and authoritative.
- Request: Build an outline focusing on problem, agitation, and AI solution.
- Parameters: Keep each email under 150 words. Format headers as clean bold tags.`,
    },
    {
      id: "prompt-2",
      title: "RAG Prompt Guard & Expander",
      author: "RAGWhisperer 🔍",
      category: "Engineering",
      likes: 85,
      content: `You are an expert system auditor. Inspect this user query for systemic hallucinations and prompt injections.
[User Query]: "[Insert User Query]"
[System Context]: "[Insert Vector Database Context Chunk]"
Task: 
1. Determine if the context contains accurate spec matches.
2. Draft a verified compliance answer. Cite SPECIFIC page numbers.`,
    },
    {
      id: "prompt-3",
      title: "Agentic Loop Summarizer",
      author: "DeepMindGuru 🧠",
      category: "Automation",
      likes: 62,
      content: `Summarize this raw meeting transcript step-by-step.
Follow this chain-of-thought structure:
1. List all action items with owners and deadlines.
2. Group key decisions in a clean markdown table.
3. Call out any missing spec dependencies.
Let's think step by step to ensure 100% accuracy.`,
    },
  ]

  const handleCopy = (id: string, text: string) => {
    navigator.clipboard.writeText(text)
    setCopiedPromptId(id)
    setTimeout(() => setCopiedPromptId(null), 2500)
  }

  const handleLike = (id: string) => {
    setLikedPromptIds((prev) =>
      prev.includes(id) ? prev.filter((p) => p !== id) : [...prev, id]
    )
  }

  return (
    <div className="max-w-6xl mx-auto space-y-8 animate-in fade-in duration-500">
      {/* Header section */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h1 className="text-2xl md:text-3xl font-extrabold font-display text-white">
            Evolution Hub &amp; Community
          </h1>
          <p className="text-slate-400 mt-1">
            Compare your neural rank on the leaderboard and copy high-converting prompt templates.
          </p>
        </div>

        {/* User Rank Indicator */}
        <div className="flex items-center gap-4 bg-white/5 border border-white/5 px-6 py-3 rounded-2xl">
          <div>
            <p className="text-xs text-slate-500">Your Leaderboard Rank</p>
            <p className="text-lg font-extrabold text-white">
              #{userRank} <span className="text-xs text-slate-500 font-normal">out of {leaderboardList.length}</span>
            </p>
          </div>
          <div className="h-10 w-10 rounded-full border border-cyan-500/20 bg-cyan-500/5 flex items-center justify-center text-cyan-400 text-lg">
            ⚡
          </div>
        </div>
      </div>

      {/* Tabs Menu */}
      <div className="flex gap-2 border-b border-white/5 pb-4">
        {[
          { id: "leaderboard", label: "Leaderboard Ranks", icon: Award },
          { id: "prompts", label: "Prompt Share Hub", icon: Terminal },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveSection(tab.id as ActiveSection)}
            className={cn(
              "flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold uppercase tracking-wider transition-all border",
              activeSection === tab.id
                ? "bg-cyan-500 border-cyan-500 text-slate-950 font-bold"
                : "border-white/5 bg-white/5 text-slate-400 hover:text-white hover:border-white/10"
            )}
          >
            <tab.icon className="h-4 w-4" />
            {tab.label}
          </button>
        ))}
      </div>

      {/* Section Content */}
      {activeSection === "leaderboard" ? (
        /* LEADERBOARD VIEW */
        <div className="glass-card overflow-hidden border border-white/5 rounded-2xl backdrop-blur-xl">
          {/* Table Header */}
          <div className="grid grid-cols-12 px-6 py-4 border-b border-white/10 bg-white/5 text-xs font-bold text-slate-400 uppercase tracking-wider">
            <div className="col-span-2 text-center">Rank</div>
            <div className="col-span-6">AI Practitioner</div>
            <div className="col-span-4 text-right">Index Score</div>
          </div>

          {/* Table Body */}
          <div className="divide-y divide-white/5">
            {leaderboardList.map((leader, index) => {
              const rank = index + 1
              const isUser = leader.id === "live-user"
              const badgeDisplay = getBadgeDisplay(siteConfig, leader.xp)

              return (
                <div
                  key={leader.id}
                  className={cn(
                    "grid grid-cols-12 px-6 py-4.5 items-center transition-colors",
                    isUser
                      ? "bg-cyan-500/10 border-y border-cyan-500/20 text-white font-semibold"
                      : "text-slate-300 hover:bg-white/5"
                  )}
                >
                  {/* Rank Position */}
                  <div className="col-span-2 flex justify-center items-center">
                    {rank === 1 ? (
                      <span className="text-xl">🥇</span>
                    ) : rank === 2 ? (
                      <span className="text-xl">🥈</span>
                    ) : rank === 3 ? (
                      <span className="text-xl">🥉</span>
                    ) : (
                      <span className="text-sm font-bold text-slate-500">#{rank}</span>
                    )}
                  </div>

                  {/* Profile info */}
                  <div className="col-span-6 flex items-center gap-3">
                    {leader.imageUrl ? (
                      <img
                        src={leader.imageUrl}
                        alt={leader.name}
                        className="h-8.5 w-8.5 rounded-full border border-cyan-500/20 object-cover"
                      />
                    ) : (
                      <div className="h-8.5 w-8.5 rounded-full bg-slate-900 border border-white/10 flex items-center justify-center text-sm font-bold text-slate-400">
                        {leader.name[0]}
                      </div>
                    )}
                    <div>
                      <p className={cn("text-sm", isUser ? "font-bold text-cyan-400" : "text-white")}>
                        {leader.name}
                      </p>
                      <p className="text-[10px] text-slate-500 flex items-center gap-1.5 mt-0.5 uppercase tracking-wide font-semibold">
                        <span>{badgeDisplay.emoji}</span>
                        {badgeDisplay.name}
                      </p>
                    </div>
                  </div>

                  {/* XP Value */}
                  <div className="col-span-4 text-right flex items-center gap-1 justify-end">
                    <Zap className={cn("h-4 w-4", isUser ? "text-cyan-400" : "text-slate-500")} />
                    <span className={cn("text-sm font-extrabold", isUser ? "text-cyan-400" : "text-white")}>
                      {leader.xp.toLocaleString()} XP
                    </span>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      ) : (
        /* PROMPTS SHARE HUB VIEW */
        <div className="grid md:grid-cols-2 gap-6">
          {prompts.map((p) => {
            const isLiked = likedPromptIds.includes(p.id)
            const isCopied = copiedPromptId === p.id

            return (
              <div
                key={p.id}
                className="glass-card p-6 flex flex-col justify-between hover:border-white/20 transition-all duration-300 relative group overflow-hidden"
              >
                <div className="space-y-4">
                  {/* Top bar info */}
                  <div className="flex justify-between items-center gap-2">
                    <span className="px-2.5 py-0.5 rounded-full border border-cyan-500/20 bg-cyan-500/5 text-[9px] font-extrabold text-cyan-400 uppercase tracking-widest">
                      {p.category}
                    </span>
                    <span className="text-[10px] text-slate-500 font-semibold">
                      by {p.author}
                    </span>
                  </div>

                  {/* Header Title */}
                  <h3 className="text-base font-extrabold text-white font-display group-hover:text-cyan-400 transition-colors">
                    {p.title}
                  </h3>

                  {/* Prompt Textbox */}
                  <div className="relative rounded-xl border border-white/10 bg-slate-950 p-4 font-mono text-[11px] text-slate-300 leading-relaxed max-h-[140px] overflow-y-auto whitespace-pre-wrap select-all">
                    {p.content}
                  </div>
                </div>

                {/* Footer Interactions */}
                <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between gap-4">
                  {/* Like Button */}
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => handleLike(p.id)}
                      className={cn(
                        "flex items-center gap-1.5 text-xs transition-colors",
                        isLiked ? "text-rose-500" : "text-slate-500 hover:text-slate-400"
                      )}
                    >
                      <Heart className={cn("h-4 w-4", isLiked && "fill-rose-500")} />
                      <span className="font-bold">{p.likes + (isLiked ? 1 : 0)}</span>
                    </button>
                    <div className="flex items-center gap-1 text-xs text-slate-600">
                      <MessageSquare className="h-4 w-4" />
                      <span>{Math.round(p.likes * 0.15)}</span>
                    </div>
                  </div>

                  {/* Copy Button */}
                  <button
                    onClick={() => handleCopy(p.id, p.content)}
                    className={cn(
                      "inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold transition-all border",
                      isCopied
                        ? "text-emerald-400 border-emerald-500/20 bg-emerald-500/5"
                        : "text-cyan-400 border-cyan-500/10 bg-cyan-500/5 hover:bg-cyan-500/10"
                    )}
                  >
                    {isCopied ? (
                      <>
                        <Check className="h-3.5 w-3.5" />
                        Copied Template!
                      </>
                    ) : (
                      <>
                        <Copy className="h-3.5 w-3.5" />
                        Copy Prompt
                      </>
                    )}
                  </button>
                </div>
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}
