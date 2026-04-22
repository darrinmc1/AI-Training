// =============================================================================
// BADGE DATA — AI Mastery Hub (Robot Evolution Theme)
// =============================================================================
// 5 tiers per topic module (9 modules = 45 topic badges)
// Plus 15+ special/achievement/humor badges
// =============================================================================

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export type BadgeTier = "basic-bot" | "smart-assistant" | "neural-network" | "deep-mind" | "superintelligence"

export interface Badge {
  id: string
  name: string
  emoji: string
  description: string
  tier: BadgeTier
  topicId: string
  xpRequired: number
  lessonsRequired: number
  color: string
}

export interface SpecialBadge {
  id: string
  name: string
  emoji: string
  description: string
  category: "achievement" | "streak" | "humor" | "milestone"
  condition: string
  rarity: "common" | "rare" | "epic" | "legendary"
}

// ---------------------------------------------------------------------------
// Tier Configuration
// ---------------------------------------------------------------------------

export const TIER_CONFIG: Record<
  BadgeTier,
  { name: string; emoji: string; color: string; xpRequired: number; lessonsRequired: number }
> = {
  "basic-bot": {
    name: "Basic Bot",
    emoji: "\u{1F916}",
    color: "slate",
    xpRequired: 50,
    lessonsRequired: 1,
  },
  "smart-assistant": {
    name: "Smart Assistant",
    emoji: "\u{1F9E0}",
    color: "cyan",
    xpRequired: 150,
    lessonsRequired: 2,
  },
  "neural-network": {
    name: "Neural Network",
    emoji: "\u26A1",
    color: "blue",
    xpRequired: 300,
    lessonsRequired: 3,
  },
  "deep-mind": {
    name: "Deep Mind",
    emoji: "\u{1F52E}",
    color: "indigo",
    xpRequired: 600,
    lessonsRequired: 4,
  },
  "superintelligence": {
    name: "Superintelligence",
    emoji: "\u{1F31F}",
    color: "violet",
    xpRequired: 1000,
    lessonsRequired: 5,
  },
}

const TIER_ORDER: BadgeTier[] = [
  "basic-bot",
  "smart-assistant",
  "neural-network",
  "deep-mind",
  "superintelligence",
]

// ---------------------------------------------------------------------------
// Topic IDs (matching module IDs from data/modules.ts)
// ---------------------------------------------------------------------------

const TOPIC_IDS = [
  "what-is-ai",
  "ai-fundamentals",
  "prompt-engineering-101",
  "ai-ethics-hallucinations",
  "rag-basics",
  "agentic-workflows",
  "ai-strategy-roi",
  "governance-scaling",
] as const

const TOPIC_NAMES: Record<string, string> = {
  "what-is-ai": "What is AI",
  "ai-fundamentals": "AI Fundamentals",
  "prompt-engineering-101": "Prompt Engineering",
  "ai-ethics-hallucinations": "AI Ethics",
  "rag-basics": "RAG",
  "agentic-workflows": "Agentic Workflows",
  "ai-strategy-roi": "AI Strategy",
  "governance-scaling": "AI Governance",
}

// ---------------------------------------------------------------------------
// Generate Topic Badges (8 topics x 5 tiers = 40 topic badges)
// ---------------------------------------------------------------------------

function generateTopicBadges(): Badge[] {
  const badges: Badge[] = []

  for (const topicId of TOPIC_IDS) {
    const topicName = TOPIC_NAMES[topicId]
    for (const tier of TIER_ORDER) {
      const config = TIER_CONFIG[tier]
      badges.push({
        id: `${topicId}-${tier}`,
        name: `${topicName}: ${config.name}`,
        emoji: config.emoji,
        description: `Reached ${config.name} level in ${topicName}`,
        tier,
        topicId,
        xpRequired: config.xpRequired,
        lessonsRequired: config.lessonsRequired,
        color: config.color,
      })
    }
  }

  return badges
}

export const TOPIC_BADGES: Badge[] = generateTopicBadges()

// ---------------------------------------------------------------------------
// Special Badges (15+ achievement, streak, and humor badges)
// ---------------------------------------------------------------------------

export const SPECIAL_BADGES: SpecialBadge[] = [
  // --- Achievement badges ---
  {
    id: "first-prompt",
    name: "First Prompt",
    emoji: "\u{1F4AC}",
    description: "Completed your very first lesson. Welcome to the AI revolution!",
    category: "achievement",
    condition: "first_lesson",
    rarity: "common",
  },
  {
    id: "data-whisperer",
    name: "Data Whisperer",
    emoji: "\u{1F50D}",
    description: "Completed the RAG Basics module. You can talk to databases now.",
    category: "achievement",
    condition: "complete_rag-basics",
    rarity: "rare",
  },
  {
    id: "prompt-wizard",
    name: "Prompt Wizard",
    emoji: "\u{1F9D9}",
    description: "Completed Prompt Engineering 101. Your prompts are now legendary.",
    category: "achievement",
    condition: "complete_prompt-engineering-101",
    rarity: "rare",
  },
  {
    id: "api-master",
    name: "API Master",
    emoji: "\u{1F517}",
    description: "Completed Agentic Workflows. You speak fluent API.",
    category: "achievement",
    condition: "complete_agentic-workflows",
    rarity: "rare",
  },
  {
    id: "full-stack-ai",
    name: "Full Stack AI",
    emoji: "\u{1F3C6}",
    description: "Completed all modules. You are now a Full Stack AI practitioner.",
    category: "achievement",
    condition: "all_modules_completed",
    rarity: "legendary",
  },
  {
    id: "halfway-there",
    name: "Halfway There",
    emoji: "\u{1F4CA}",
    description: "Completed half of all available modules.",
    category: "milestone",
    condition: "half_modules",
    rarity: "rare",
  },
  {
    id: "xp-thousand",
    name: "Kilobyte Brain",
    emoji: "\u{1F4BE}",
    description: "Earned 1,000 total XP. Your neural networks are warming up.",
    category: "milestone",
    condition: "total_xp_1000",
    rarity: "common",
  },
  {
    id: "xp-five-thousand",
    name: "Megabyte Mind",
    emoji: "\u{1F4BD}",
    description: "Earned 5,000 total XP. Processing power: impressive.",
    category: "milestone",
    condition: "total_xp_5000",
    rarity: "rare",
  },
  {
    id: "xp-ten-thousand",
    name: "Terabyte Titan",
    emoji: "\u{1F5A5}\uFE0F",
    description: "Earned 10,000 total XP. You might actually be an AI at this point.",
    category: "milestone",
    condition: "total_xp_10000",
    rarity: "epic",
  },

  // --- Streak badges ---
  {
    id: "binary-streak",
    name: "Binary Streak",
    emoji: "\u{1F525}",
    description: "7-day learning streak. 1s and 0s flowing through your veins.",
    category: "streak",
    condition: "streak_7",
    rarity: "common",
  },
  {
    id: "processing-loop",
    name: "Processing Loop",
    emoji: "\u{1F504}",
    description: "30-day learning streak. You're stuck in a (productive) loop.",
    category: "streak",
    condition: "streak_30",
    rarity: "rare",
  },
  {
    id: "infinite-loop",
    name: "Infinite Loop",
    emoji: "\u267E\uFE0F",
    description: "100-day learning streak. while(true) { learn(); }",
    category: "streak",
    condition: "streak_100",
    rarity: "epic",
  },

  // --- Humor badges ---
  {
    id: "hallucination-survivor",
    name: "Hallucination Survivor",
    emoji: "\u{1F47B}",
    description: "Completed AI Ethics & Hallucinations. You can now spot when AI is making stuff up.",
    category: "humor",
    condition: "complete_ai-ethics-hallucinations",
    rarity: "common",
  },
  {
    id: "skynet-preventer",
    name: "Skynet Preventer",
    emoji: "\u{1F6E1}\uFE0F",
    description: "Completed AI Governance & Scaling. The robots won't take over on your watch.",
    category: "humor",
    condition: "complete_governance-scaling",
    rarity: "rare",
  },
  {
    id: "robot-overlords",
    name: "I For One Welcome Our Robot Overlords",
    emoji: "\u{1F47E}",
    description: "Completed all beginner modules. You've accepted the inevitable.",
    category: "humor",
    condition: "categories_3",
    rarity: "rare",
  },
  {
    id: "token-burner",
    name: "Token Burner",
    emoji: "\u{1F4B8}",
    description: "Spent over 2 hours in a single session. OpenAI thanks you for your tokens.",
    category: "humor",
    condition: "marathon_session",
    rarity: "epic",
  },
  {
    id: "early-bird-bot",
    name: "Early Bird Bot",
    emoji: "\u{1F305}",
    description: "Started a session before 6 AM. Even robots need their morning boot sequence.",
    category: "humor",
    condition: "early_morning",
    rarity: "rare",
  },
  {
    id: "night-owl-neural",
    name: "Night Owl Neural Net",
    emoji: "\u{1F989}",
    description: "Started a session after midnight. Training your neural nets while humans sleep.",
    category: "humor",
    condition: "late_night",
    rarity: "rare",
  },
  {
    id: "comeback-compiler",
    name: "Comeback Compiler",
    emoji: "\u{1F504}",
    description: "Returned after 7+ days away. System restored from backup successfully.",
    category: "humor",
    condition: "procrastination_return",
    rarity: "common",
  },
  {
    id: "quiz-redemption",
    name: "Gradient Descent",
    emoji: "\u{1F4C9}",
    description: "Failed a quiz then aced it. Loss function minimized through perseverance.",
    category: "humor",
    condition: "quiz_redemption",
    rarity: "epic",
  },
]

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

export function getBadgesForTopic(topicId: string): Badge[] {
  return TOPIC_BADGES.filter((b) => b.topicId === topicId)
}

export function getSpecialBadgeById(id: string): SpecialBadge | undefined {
  return SPECIAL_BADGES.find((b) => b.id === id)
}

export function getBadgeById(id: string): Badge | SpecialBadge | undefined {
  return (
    TOPIC_BADGES.find((b) => b.id === id) ??
    SPECIAL_BADGES.find((b) => b.id === id)
  )
}

export function getAllBadges(): (Badge | SpecialBadge)[] {
  return [...TOPIC_BADGES, ...SPECIAL_BADGES]
}
