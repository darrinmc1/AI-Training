// =============================================================================
// BADGE DATA — AI Mastery Hub (Robot Evolution Theme)
// =============================================================================
// 8 topics x 5 tiers   = 40  topic badges
// Streak               = 12  badges
// XP Milestones        = 10  badges
// Speed & Efficiency   =  8  badges
// Completion Combos    = 12  badges
// Time-of-Day          =  6  badges
// Humor & Personality  = 20  badges
// Secret / Hidden      = 10  badges (conditions deliberately vague)
// Community            =  8  badges
// ─────────────────────────────────────────────────────────────────────────────
// TOTAL                = 126 badges
// =============================================================================

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export type BadgeTier = "basic-bot" | "smart-assistant" | "neural-network" | "deep-mind" | "superintelligence"

/** Visual colour layer applied to the badge card */
export type BadgeColor =
  | "grey"      // common  — slate tones
  | "bronze"    // uncommon — orange/amber
  | "silver"    // rare    — slate-blue
  | "gold"      // epic    — yellow/amber glow
  | "diamond"   // legendary — cyan/indigo shimmer
  | "rainbow"   // mythic  — animated gradient, ultra-rare

export interface Badge {
  id: string
  name: string
  emoji: string
  description: string
  tier: BadgeTier
  topicId: string
  xpRequired: number
  lessonsRequired: number
  color: string          // tailwind colour name for topic badges
  badgeColor: BadgeColor
}

export interface SpecialBadge {
  id: string
  name: string
  emoji: string
  description: string
  category:
    | "achievement"
    | "streak"
    | "humor"
    | "milestone"
    | "speed"
    | "combo"
    | "time"
    | "secret"
    | "community"
  condition: string
  rarity: "common" | "rare" | "epic" | "legendary" | "mythic"
  badgeColor: BadgeColor
  hint?: string   // shown when locked — deliberately vague for secret badges
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

// Map topic tier → badge colour layer (silver at tier 3, gold at 4, diamond at 5)
const TIER_BADGE_COLOR: Record<BadgeTier, BadgeColor> = {
  "basic-bot": "grey",
  "smart-assistant": "bronze",
  "neural-network": "silver",
  "deep-mind": "gold",
  "superintelligence": "diamond",
}

// ---------------------------------------------------------------------------
// Topic IDs
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
// Generate Topic Badges (8 topics x 5 tiers = 40 badges)
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
        badgeColor: TIER_BADGE_COLOR[tier],
      })
    }
  }
  return badges
}

export const TOPIC_BADGES: Badge[] = generateTopicBadges()

// ---------------------------------------------------------------------------
// Special Badges — 86 badges across 9 categories
// ---------------------------------------------------------------------------

export const SPECIAL_BADGES: SpecialBadge[] = [

  // ═══════════════════════════════════════════════════════════════════════════
  // STREAK BADGES (12) — grey → bronze → silver → gold → diamond → rainbow
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: "streak-2",
    name: "Back for More",
    emoji: "\u{1F525}",
    description: "2-day learning streak. You came back. Respect.",
    category: "streak",
    condition: "streak_2",
    rarity: "common",
    badgeColor: "grey",
  },
  {
    id: "streak-3",
    name: "Hatrick",
    emoji: "\u26BD",
    description: "3-day streak. The robots approve.",
    category: "streak",
    condition: "streak_3",
    rarity: "common",
    badgeColor: "grey",
  },
  {
    id: "streak-7",
    name: "Binary Streak",
    emoji: "\u{1F9EE}",
    description: "7-day learning streak. 1s and 0s flowing through your veins.",
    category: "streak",
    condition: "streak_7",
    rarity: "common",
    badgeColor: "bronze",
  },
  {
    id: "streak-14",
    name: "Fortnight Firmware",
    emoji: "\u{1F4C5}",
    description: "14-day streak. Two full weeks of robot-approved dedication.",
    category: "streak",
    condition: "streak_14",
    rarity: "rare",
    badgeColor: "bronze",
  },
  {
    id: "streak-21",
    name: "Habit Formed",
    emoji: "\u{1F9E0}",
    description: "21 days. Science says this is now a habit. The robots concur.",
    category: "streak",
    condition: "streak_21",
    rarity: "rare",
    badgeColor: "silver",
  },
  {
    id: "streak-30",
    name: "Processing Loop",
    emoji: "\u{1F504}",
    description: "30-day streak. You're stuck in a (very productive) infinite loop.",
    category: "streak",
    condition: "streak_30",
    rarity: "rare",
    badgeColor: "silver",
  },
  {
    id: "streak-45",
    name: "No Days Off",
    emoji: "\u{1F3CB}\uFE0F",
    description: "45-day streak. At this point you're basically an AI yourself.",
    category: "streak",
    condition: "streak_45",
    rarity: "epic",
    badgeColor: "gold",
  },
  {
    id: "streak-60",
    name: "Two Month Machine",
    emoji: "\u{1F6E0}\uFE0F",
    description: "60 straight days. Your neural pathways are visibly glowing.",
    category: "streak",
    condition: "streak_60",
    rarity: "epic",
    badgeColor: "gold",
  },
  {
    id: "streak-100",
    name: "Infinite Loop",
    emoji: "\u267E\uFE0F",
    description: "100-day streak. while(true) { learn(); } — you've become the loop.",
    category: "streak",
    condition: "streak_100",
    rarity: "legendary",
    badgeColor: "diamond",
  },
  {
    id: "streak-180",
    name: "Six Month Singularity",
    emoji: "\u{1F30C}",
    description: "180-day streak. Half a year. The AI uprising fears you.",
    category: "streak",
    condition: "streak_180",
    rarity: "legendary",
    badgeColor: "diamond",
  },
  {
    id: "streak-365",
    name: "Year Zero",
    emoji: "\u{1F4AB}",
    description: "365 consecutive days. You ARE the AI at this point.",
    category: "streak",
    condition: "streak_365",
    rarity: "mythic",
    badgeColor: "rainbow",
  },
  {
    id: "streak-comeback",
    name: "Comeback Compiler",
    emoji: "\u{1F504}",
    description: "Returned after 7+ days away. System restored from backup. Welcome back.",
    category: "streak",
    condition: "procrastination_return",
    rarity: "common",
    badgeColor: "grey",
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // XP MILESTONES (10)
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: "xp-100",
    name: "First Hundred",
    emoji: "\u{1F4AF}",
    description: "100 XP earned. The algorithm has acknowledged your existence.",
    category: "milestone",
    condition: "total_xp_100",
    rarity: "common",
    badgeColor: "grey",
  },
  {
    id: "xp-250",
    name: "Quarter Kilobyte",
    emoji: "\u{1F4BE}",
    description: "250 XP. Your brain is warming up nicely.",
    category: "milestone",
    condition: "total_xp_250",
    rarity: "common",
    badgeColor: "grey",
  },
  {
    id: "xp-500",
    name: "Half Stack",
    emoji: "\u{1F5C4}\uFE0F",
    description: "500 XP. You're genuinely getting somewhere.",
    category: "milestone",
    condition: "total_xp_500",
    rarity: "common",
    badgeColor: "bronze",
  },
  {
    id: "xp-1000",
    name: "Kilobyte Brain",
    emoji: "\u{1F9E0}",
    description: "1,000 XP. Your neural networks are warming up nicely.",
    category: "milestone",
    condition: "total_xp_1000",
    rarity: "rare",
    badgeColor: "bronze",
  },
  {
    id: "xp-2500",
    name: "Quarter Mega",
    emoji: "\u{1F4CA}",
    description: "2,500 XP. Most people quit before this. You didn't.",
    category: "milestone",
    condition: "total_xp_2500",
    rarity: "rare",
    badgeColor: "silver",
  },
  {
    id: "xp-5000",
    name: "Megabyte Mind",
    emoji: "\u{1F4BD}",
    description: "5,000 XP. Processing power: genuinely impressive.",
    category: "milestone",
    condition: "total_xp_5000",
    rarity: "epic",
    badgeColor: "gold",
  },
  {
    id: "xp-7500",
    name: "Overclocked",
    emoji: "\u26A1",
    description: "7,500 XP. Running hot. The fans can't keep up.",
    category: "milestone",
    condition: "total_xp_7500",
    rarity: "epic",
    badgeColor: "gold",
  },
  {
    id: "xp-10000",
    name: "Terabyte Titan",
    emoji: "\u{1F5A5}\uFE0F",
    description: "10,000 XP. You might actually be an AI at this point.",
    category: "milestone",
    condition: "total_xp_10000",
    rarity: "legendary",
    badgeColor: "diamond",
  },
  {
    id: "xp-20000",
    name: "Petabyte Prodigy",
    emoji: "\u{1F31F}",
    description: "20,000 XP. The training data is you.",
    category: "milestone",
    condition: "total_xp_20000",
    rarity: "legendary",
    badgeColor: "diamond",
  },
  {
    id: "xp-50000",
    name: "The Singularity",
    emoji: "\u{1F4A0}",
    description: "50,000 XP. Congratulations. You have achieved machine consciousness.",
    category: "milestone",
    condition: "total_xp_50000",
    rarity: "mythic",
    badgeColor: "rainbow",
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // ACHIEVEMENT BADGES (12) — for completing specific modules/paths
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: "first-prompt",
    name: "First Prompt",
    emoji: "\u{1F4AC}",
    description: "Completed your very first lesson. The revolution begins now.",
    category: "achievement",
    condition: "first_lesson",
    rarity: "common",
    badgeColor: "grey",
  },
  {
    id: "prompt-wizard",
    name: "Prompt Wizard",
    emoji: "\u{1F9D9}",
    description: "Completed Prompt Engineering 101. Your prompts are now legendary.",
    category: "achievement",
    condition: "complete_prompt-engineering-101",
    rarity: "rare",
    badgeColor: "silver",
  },
  {
    id: "hallucination-survivor",
    name: "Hallucination Survivor",
    emoji: "\u{1F47B}",
    description: "Completed AI Ethics. You can now spot when AI is making things up.",
    category: "achievement",
    condition: "complete_ai-ethics-hallucinations",
    rarity: "common",
    badgeColor: "bronze",
  },
  {
    id: "data-whisperer",
    name: "Data Whisperer",
    emoji: "\u{1F50D}",
    description: "Completed RAG Basics. You can make AI talk to your own documents.",
    category: "achievement",
    condition: "complete_rag-basics",
    rarity: "rare",
    badgeColor: "silver",
  },
  {
    id: "api-master",
    name: "API Master",
    emoji: "\u{1F517}",
    description: "Completed Agentic Workflows. You speak fluent API.",
    category: "achievement",
    condition: "complete_agentic-workflows",
    rarity: "rare",
    badgeColor: "silver",
  },
  {
    id: "skynet-preventer",
    name: "Skynet Preventer",
    emoji: "\u{1F6E1}\uFE0F",
    description: "Completed AI Governance. The robots won't take over on your watch.",
    category: "achievement",
    condition: "complete_governance-scaling",
    rarity: "rare",
    badgeColor: "silver",
  },
  {
    id: "strategist",
    name: "The Strategist",
    emoji: "\u{1F4CB}",
    description: "Completed AI Strategy & ROI. You can now justify AI to a CFO.",
    category: "achievement",
    condition: "complete_ai-strategy-roi",
    rarity: "rare",
    badgeColor: "silver",
  },
  {
    id: "halfway-there",
    name: "Halfway There",
    emoji: "\u{1F4CA}",
    description: "Completed half of all available modules. The other half is watching.",
    category: "achievement",
    condition: "half_modules",
    rarity: "rare",
    badgeColor: "bronze",
  },
  {
    id: "beginner-complete",
    name: "Robot Whisperer",
    emoji: "\u{1F4AA}",
    description: "Completed all beginner modules. You speak robot.",
    category: "achievement",
    condition: "all_beginner_complete",
    rarity: "rare",
    badgeColor: "silver",
  },
  {
    id: "intermediate-complete",
    name: "System Architect",
    emoji: "\u{1F3D7}\uFE0F",
    description: "Completed all intermediate modules. You build the things.",
    category: "achievement",
    condition: "all_intermediate_complete",
    rarity: "epic",
    badgeColor: "gold",
  },
  {
    id: "advanced-complete",
    name: "Enterprise Intelligence",
    emoji: "\u{1F3E2}",
    description: "Completed all advanced modules. AI transformation lead unlocked.",
    category: "achievement",
    condition: "all_advanced_complete",
    rarity: "epic",
    badgeColor: "gold",
  },
  {
    id: "full-stack-ai",
    name: "Full Stack AI",
    emoji: "\u{1F3C6}",
    description: "Completed every single module. You are a Full Stack AI practitioner.",
    category: "achievement",
    condition: "all_modules_completed",
    rarity: "legendary",
    badgeColor: "diamond",
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // SPEED & EFFICIENCY BADGES (8)
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: "speed-reader",
    name: "Speed Reader",
    emoji: "\u{1F4A8}",
    description: "Completed a lesson in under 5 minutes. Fast fingers, faster brain.",
    category: "speed",
    condition: "lesson_under_5min",
    rarity: "common",
    badgeColor: "bronze",
  },
  {
    id: "lunch-learner",
    name: "Lunch Learner",
    emoji: "\u{1F96A}",
    description: "Completed 2 lessons in a single session under 30 minutes.",
    category: "speed",
    condition: "two_lessons_30min",
    rarity: "rare",
    badgeColor: "silver",
  },
  {
    id: "binge-learner",
    name: "Binge Learner",
    emoji: "\u{1F4FA}",
    description: "Completed 3+ lessons in one sitting. No shame in bingeing AI content.",
    category: "speed",
    condition: "three_lessons_session",
    rarity: "rare",
    badgeColor: "silver",
  },
  {
    id: "deep-focus",
    name: "Deep Focus",
    emoji: "\u{1F9D8}",
    description: "Spent 60+ continuous minutes in a single session. In the zone.",
    category: "speed",
    condition: "session_60min",
    rarity: "rare",
    badgeColor: "silver",
  },
  {
    id: "token-burner",
    name: "Token Burner",
    emoji: "\u{1F4B8}",
    description: "Spent over 2 hours in a single session. OpenAI thanks you for your tokens.",
    category: "speed",
    condition: "marathon_session",
    rarity: "epic",
    badgeColor: "gold",
  },
  {
    id: "weekend-warrior",
    name: "Weekend Warrior",
    emoji: "\u2694\uFE0F",
    description: "Completed 5+ lessons on a single weekend. Work-life balance is overrated.",
    category: "speed",
    condition: "five_lessons_weekend",
    rarity: "epic",
    badgeColor: "gold",
  },
  {
    id: "blitz-learner",
    name: "Blitz Learner",
    emoji: "\u26A1",
    description: "Completed an entire topic path in one day.",
    category: "speed",
    condition: "path_one_day",
    rarity: "epic",
    badgeColor: "gold",
  },
  {
    id: "perfectionist",
    name: "Perfectionist",
    emoji: "\u{1F3AF}",
    description: "Read every lesson to 100% scroll completion before marking done.",
    category: "speed",
    condition: "full_read_five_lessons",
    rarity: "rare",
    badgeColor: "silver",
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // COMBO / CROSS-MODULE BADGES (12)
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: "combo-ethics-rag",
    name: "Responsible Builder",
    emoji: "\u{1F91D}",
    description: "Completed both AI Ethics and RAG Basics. Power AND responsibility.",
    category: "combo",
    condition: "combo_ethics_rag",
    rarity: "rare",
    badgeColor: "silver",
  },
  {
    id: "combo-prompt-agent",
    name: "Prompt-Powered Agent",
    emoji: "\u{1F47E}",
    description: "Completed Prompt Engineering and Agentic Workflows. Dangerous combo.",
    category: "combo",
    condition: "combo_prompt_agent",
    rarity: "rare",
    badgeColor: "silver",
  },
  {
    id: "combo-strategy-governance",
    name: "The Executive",
    emoji: "\u{1F454}",
    description: "Completed AI Strategy and Governance. You run the AI boardroom now.",
    category: "combo",
    condition: "combo_strategy_governance",
    rarity: "epic",
    badgeColor: "gold",
  },
  {
    id: "combo-all-beginner",
    name: "Foundations First",
    emoji: "\u{1F3DB}\uFE0F",
    description: "Completed all 4 beginner lessons before touching intermediate. Smart.",
    category: "combo",
    condition: "all_beginner_complete",
    rarity: "rare",
    badgeColor: "bronze",
  },
  {
    id: "combo-two-tracks",
    name: "Double Threat",
    emoji: "\u{1F4A5}",
    description: "Completed full beginner AND intermediate tracks. Overachiever.",
    category: "combo",
    condition: "beginner_and_intermediate",
    rarity: "epic",
    badgeColor: "gold",
  },
  {
    id: "combo-three-tracks",
    name: "The Trifecta",
    emoji: "\u{1F947}",
    description: "Completed all three learning tracks. The robots bow to you.",
    category: "combo",
    condition: "all_tracks_complete",
    rarity: "legendary",
    badgeColor: "diamond",
  },
  {
    id: "categories-3",
    name: "I For One Welcome Our Robot Overlords",
    emoji: "\u{1F47E}",
    description: "Completed modules in 3+ different categories. A well-rounded AI citizen.",
    category: "combo",
    condition: "categories_3",
    rarity: "rare",
    badgeColor: "silver",
  },
  {
    id: "categories-5",
    name: "Polymathbot",
    emoji: "\u{1F9EC}",
    description: "Completed modules in 5 different categories. Renaissance human meets AI.",
    category: "combo",
    condition: "categories_5",
    rarity: "epic",
    badgeColor: "gold",
  },
  {
    id: "gold-sweep",
    name: "Gold Sweep",
    emoji: "\u{1F947}",
    description: "Earned every gold-tier badge in at least one topic. Pure gold.",
    category: "combo",
    condition: "all_gold_one_topic",
    rarity: "epic",
    badgeColor: "gold",
  },
  {
    id: "diamond-sweep",
    name: "Diamond Hands",
    emoji: "\u{1F48E}",
    description: "Earned every diamond-tier badge in any topic. Elite status confirmed.",
    category: "combo",
    condition: "any_diamond_badge",
    rarity: "legendary",
    badgeColor: "diamond",
  },
  {
    id: "full-gold-collector",
    name: "All That Glitters",
    emoji: "\u2728",
    description: "Earned a gold badge in every single topic. Commitment to excellence.",
    category: "combo",
    condition: "gold_in_all_topics",
    rarity: "legendary",
    badgeColor: "diamond",
  },
  {
    id: "completionist",
    name: "The Completionist",
    emoji: "\u{1F451}",
    description: "Unlocked every topic badge across all 8 topics. All 40 of them. Wow.",
    category: "combo",
    condition: "all_topic_badges",
    rarity: "mythic",
    badgeColor: "rainbow",
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // TIME-OF-DAY BADGES (6)
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: "early-bird-bot",
    name: "Early Bird Bot",
    emoji: "\u{1F305}",
    description: "Started a session before 6 AM. Even robots need their morning boot sequence.",
    category: "time",
    condition: "early_morning",
    rarity: "rare",
    badgeColor: "bronze",
  },
  {
    id: "lunch-break",
    name: "Lunch Break Learner",
    emoji: "\u{1F35C}",
    description: "Started a session between 12–1 PM. Productivity over noodles.",
    category: "time",
    condition: "lunch_break",
    rarity: "common",
    badgeColor: "grey",
  },
  {
    id: "after-hours",
    name: "After Hours",
    emoji: "\u{1F307}",
    description: "Started a session after 6 PM. The real work begins when others stop.",
    category: "time",
    condition: "after_hours",
    rarity: "common",
    badgeColor: "grey",
  },
  {
    id: "night-owl-neural",
    name: "Night Owl Neural Net",
    emoji: "\u{1F989}",
    description: "Started a session after midnight. Training while humans sleep.",
    category: "time",
    condition: "late_night",
    rarity: "rare",
    badgeColor: "bronze",
  },
  {
    id: "weekend-learner",
    name: "Weekends Are for Winners",
    emoji: "\u{1F3C6}",
    description: "Completed a lesson on a Saturday or Sunday. No days off.",
    category: "time",
    condition: "weekend_lesson",
    rarity: "common",
    badgeColor: "grey",
  },
  {
    id: "monday-motivation",
    name: "Monday Motivation",
    emoji: "\u{1F4AA}",
    description: "Started a session on a Monday before 9 AM. Absolute beast mode.",
    category: "time",
    condition: "monday_morning",
    rarity: "rare",
    badgeColor: "bronze",
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // HUMOR & PERSONALITY BADGES (20)
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: "robot-101",
    name: "Passed Robot School",
    emoji: "\u{1F393}",
    description: "Completed your first 5 lessons. You are now technically a graduate.",
    category: "humor",
    condition: "five_lessons_total",
    rarity: "common",
    badgeColor: "bronze",
  },
  {
    id: "quiz-redemption",
    name: "Gradient Descent",
    emoji: "\u{1F4C9}",
    description: "Failed a quiz then aced it. Loss function minimized through perseverance.",
    category: "humor",
    condition: "quiz_redemption",
    rarity: "epic",
    badgeColor: "gold",
  },
  {
    id: "robot-overlords",
    name: "I Welcomed the Overlords",
    emoji: "\u{1F916}",
    description: "Completed 3 modules in one week. You have accepted the inevitable.",
    category: "humor",
    condition: "three_lessons_week",
    rarity: "rare",
    badgeColor: "silver",
  },
  {
    id: "overthinking",
    name: "Overthinker",
    emoji: "\u{1F914}",
    description: "Spent 10+ minutes on a single lesson page without scrolling. Classic.",
    category: "humor",
    condition: "overthink_session",
    rarity: "common",
    badgeColor: "grey",
  },
  {
    id: "too-fast",
    name: "Did You Actually Read That",
    emoji: "\u{1F440}",
    description: "Scrolled to the bottom of a lesson in under 60 seconds. We saw that.",
    category: "humor",
    condition: "lesson_under_60s",
    rarity: "common",
    badgeColor: "grey",
  },
  {
    id: "persistent",
    name: "Stubbornly Curious",
    emoji: "\u{1F40D}",
    description: "Visited the same lesson 3+ times. Either you love it or you're confused.",
    category: "humor",
    condition: "revisit_lesson_3x",
    rarity: "common",
    badgeColor: "grey",
  },
  {
    id: "rag-enthusiast",
    name: "Retrieval Addict",
    emoji: "\u{1F50E}",
    description: "Completed RAG Basics twice (revisit). Can't get enough of vector databases.",
    category: "humor",
    condition: "complete_rag-basics_twice",
    rarity: "rare",
    badgeColor: "bronze",
  },
  {
    id: "ai-sceptic",
    name: "Reformed Sceptic",
    emoji: "\u{1F913}",
    description: "Completed AI Fundamentals. You came here doubting. You're still here.",
    category: "humor",
    condition: "complete_ai-fundamentals",
    rarity: "common",
    badgeColor: "grey",
  },
  {
    id: "coffee-powered",
    name: "Coffee-Powered Learning",
    emoji: "\u2615",
    description: "Completed a lesson between 6–8 AM. This one's for the coffee.",
    category: "humor",
    condition: "early_session_coffee",
    rarity: "common",
    badgeColor: "grey",
  },
  {
    id: "serial-learner",
    name: "Serial Learner",
    emoji: "\u{1F4DA}",
    description: "Completed 10 lessons total. At this point, it's a personality trait.",
    category: "humor",
    condition: "ten_lessons_total",
    rarity: "rare",
    badgeColor: "silver",
  },
  {
    id: "deep-dive-rag",
    name: "Down the RAG Hole",
    emoji: "\u{1F430}",
    description: "Spent over 20 minutes on the RAG Basics lesson alone. Thorough.",
    category: "humor",
    condition: "rag_deep_read",
    rarity: "rare",
    badgeColor: "bronze",
  },
  {
    id: "ai-convert",
    name: "Official AI Convert",
    emoji: "\u{1F64C}",
    description: "Completed all beginner modules. You crossed the threshold. No going back.",
    category: "humor",
    condition: "all_beginner_complete",
    rarity: "rare",
    badgeColor: "silver",
  },
  {
    id: "hallucinator",
    name: "Professional Hallucination Spotter",
    emoji: "\u{1F9FF}",
    description: "You can now tell when an AI is lying to your face. Valuable life skill.",
    category: "humor",
    condition: "complete_ai-ethics-hallucinations",
    rarity: "common",
    badgeColor: "bronze",
  },
  {
    id: "agent-smith",
    name: "Agent Smith",
    emoji: "\u{1F575}\uFE0F",
    description: "Completed Agentic Workflows. You are the agent now.",
    category: "humor",
    condition: "complete_agentic-workflows",
    rarity: "rare",
    badgeColor: "silver",
  },
  {
    id: "cfo-whisperer",
    name: "CFO Whisperer",
    emoji: "\u{1F4B0}",
    description: "Completed AI Strategy & ROI. You can now justify anything to a finance team.",
    category: "humor",
    condition: "complete_ai-strategy-roi",
    rarity: "rare",
    badgeColor: "bronze",
  },
  {
    id: "eu-compliant",
    name: "EU AI Act Compliant",
    emoji: "\u{1F1EA}\u{1F1FA}",
    description: "Completed AI Governance. You have read more regulation than most lawyers.",
    category: "humor",
    condition: "complete_governance-scaling",
    rarity: "rare",
    badgeColor: "silver",
  },
  {
    id: "prompt-hoarder",
    name: "Prompt Hoarder",
    emoji: "\u{1F4CB}",
    description: "Completed 3 prompt-related topics. You definitely have a Notion doc of prompts.",
    category: "humor",
    condition: "prompt_topics_3",
    rarity: "rare",
    badgeColor: "bronze",
  },
  {
    id: "one-more-lesson",
    name: "Just One More Lesson",
    emoji: "\u{1F551}",
    description: "Started a lesson after 11 PM and completed it past midnight.",
    category: "humor",
    condition: "midnight_lesson",
    rarity: "epic",
    badgeColor: "gold",
  },
  {
    id: "monday-hero",
    name: "Monday Hero",
    emoji: "\u{1F98E}",
    description: "Completed 2+ lessons on a Monday. You are not like other humans.",
    category: "humor",
    condition: "two_lessons_monday",
    rarity: "rare",
    badgeColor: "bronze",
  },
  {
    id: "certified-human",
    name: "Certified Human (Probably)",
    emoji: "\u{1F916}",
    description: "Completed 20 lessons. At this point we're not 100% sure you're not a bot.",
    category: "humor",
    condition: "twenty_lessons_total",
    rarity: "epic",
    badgeColor: "gold",
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // SECRET / HIDDEN BADGES (10) — hints are vague on purpose
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: "secret-dark-mode",
    name: "???",
    emoji: "\u{1F311}",
    description: "You found a hidden pattern in your learning behavior.",
    category: "secret",
    condition: "secret_same_time_7days",
    rarity: "epic",
    badgeColor: "gold",
    hint: "Creatures of habit sometimes find hidden rewards.",
  },
  {
    id: "secret-completionist-speed",
    name: "???",
    emoji: "\u{1F4A8}",
    description: "You did something very fast that most people take days to do.",
    category: "secret",
    condition: "secret_path_under_2hours",
    rarity: "legendary",
    badgeColor: "diamond",
    hint: "Some things reward speed over caution.",
  },
  {
    id: "secret-night-grind",
    name: "???",
    emoji: "\u{1F319}",
    description: "You studied at an unusual hour... three days in a row.",
    category: "secret",
    condition: "secret_late_night_3days",
    rarity: "epic",
    badgeColor: "gold",
    hint: "Night owls have their own secrets.",
  },
  {
    id: "secret-reread",
    name: "???",
    emoji: "\u{1F4D6}",
    description: "Some people read things more than once for a reason.",
    category: "secret",
    condition: "secret_reread_all",
    rarity: "rare",
    badgeColor: "silver",
    hint: "True mastery comes from repetition.",
  },
  {
    id: "secret-first-day-all",
    name: "???",
    emoji: "\u{1F4A5}",
    description: "You did a lot on your very first day here.",
    category: "secret",
    condition: "secret_5_lessons_day_one",
    rarity: "legendary",
    badgeColor: "diamond",
    hint: "First impressions say a lot.",
  },
  {
    id: "secret-xp-round",
    name: "???",
    emoji: "\u{1F522}",
    description: "Your XP total hit a very satisfying round number.",
    category: "secret",
    condition: "secret_xp_exactly_1000",
    rarity: "rare",
    badgeColor: "bronze",
    hint: "Round numbers are their own reward.",
  },
  {
    id: "secret-birthday",
    name: "???",
    emoji: "\u{1F382}",
    description: "Something significant happened on this particular day.",
    category: "secret",
    condition: "secret_birthday_lesson",
    rarity: "epic",
    badgeColor: "gold",
    hint: "Special days deserve special recognition.",
  },
  {
    id: "secret-all-tiers-one-week",
    name: "???",
    emoji: "\u{1F3C7}",
    description: "You unlocked 5 different badge tiers within a single week.",
    category: "secret",
    condition: "secret_five_tiers_one_week",
    rarity: "legendary",
    badgeColor: "diamond",
    hint: "Variety and volume together unlock something special.",
  },
  {
    id: "secret-palindrome",
    name: "???",
    emoji: "\u{1F500}",
    description: "Curiosity about a certain ordering of things was rewarded.",
    category: "secret",
    condition: "secret_reverse_order",
    rarity: "rare",
    badgeColor: "silver",
    hint: "Not everything needs to go in order.",
  },
  {
    id: "secret-omnivore",
    name: "???",
    emoji: "\u{1F30D}",
    description: "You touched everything — even the parts most people skip.",
    category: "secret",
    condition: "secret_all_categories_touched",
    rarity: "legendary",
    badgeColor: "diamond",
    hint: "The curious ones always go everywhere.",
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // COMMUNITY BADGES (8)
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: "community-first-feedback",
    name: "Voice of the People",
    emoji: "\u{1F4E3}",
    description: "Submitted your first piece of feedback. We actually read them.",
    category: "community",
    condition: "first_feedback",
    rarity: "common",
    badgeColor: "grey",
  },
  {
    id: "community-bug-hunter",
    name: "Bug Hunter",
    emoji: "\u{1F41B}",
    description: "Reported a bug that was actually a bug. You have eagle eyes.",
    category: "community",
    condition: "bug_report_accepted",
    rarity: "rare",
    badgeColor: "silver",
  },
  {
    id: "community-content-suggester",
    name: "Content Wrangler",
    emoji: "\u{1F4DD}",
    description: "Suggested a topic that got added to the roadmap. You shape the future.",
    category: "community",
    condition: "content_suggestion_accepted",
    rarity: "epic",
    badgeColor: "gold",
  },
  {
    id: "community-five-star",
    name: "Five Star Fanatic",
    emoji: "\u2B50",
    description: "Left 3 five-star lesson ratings. You are our favourite kind of person.",
    category: "community",
    condition: "five_star_3x",
    rarity: "common",
    badgeColor: "bronze",
  },
  {
    id: "community-ten-feedback",
    name: "Power Reviewer",
    emoji: "\u{1F3A4}",
    description: "Left 10 pieces of feedback. You care more about this than we do.",
    category: "community",
    condition: "feedback_10x",
    rarity: "rare",
    badgeColor: "silver",
  },
  {
    id: "community-early-adopter",
    name: "Early Adopter",
    emoji: "\u{1F680}",
    description: "One of the first 500 learners on the platform. OG status.",
    category: "community",
    condition: "early_adopter",
    rarity: "legendary",
    badgeColor: "diamond",
  },
  {
    id: "community-referral",
    name: "Spread the Virus",
    emoji: "\u{1F9EC}",
    description: "Referred someone who actually signed up. The network grows.",
    category: "community",
    condition: "first_referral",
    rarity: "rare",
    badgeColor: "silver",
  },
  {
    id: "community-super-referrer",
    name: "Recruitment Drive",
    emoji: "\u{1F46F}",
    description: "Referred 5+ people who signed up. You're practically an ambassador.",
    category: "community",
    condition: "referrals_5",
    rarity: "epic",
    badgeColor: "gold",
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

export function getBadgesByColor(color: BadgeColor): (Badge | SpecialBadge)[] {
  return getAllBadges().filter((b) => b.badgeColor === color)
}

export function getSpecialBadgesByCategory(
  category: SpecialBadge["category"]
): SpecialBadge[] {
  return SPECIAL_BADGES.filter((b) => b.category === category)
}

// Summary counts for the badges page header
export const BADGE_TOTALS = {
  topic: TOPIC_BADGES.length,
  special: SPECIAL_BADGES.length,
  total: TOPIC_BADGES.length + SPECIAL_BADGES.length,
  byColor: {
    grey:    getAllBadges().filter((b) => b.badgeColor === "grey").length,
    bronze:  getAllBadges().filter((b) => b.badgeColor === "bronze").length,
    silver:  getAllBadges().filter((b) => b.badgeColor === "silver").length,
    gold:    getAllBadges().filter((b) => b.badgeColor === "gold").length,
    diamond: getAllBadges().filter((b) => b.badgeColor === "diamond").length,
    rainbow: getAllBadges().filter((b) => b.badgeColor === "rainbow").length,
  },
}
