// =============================================================================
// UNIVERSAL SITE CONFIGURATION
// =============================================================================
// This is the ONE file you change when spinning up a new training platform.
// Copy this file, update the values, and your entire site adapts automatically.
//
// Used by: AI Mastery Hub, Peel Boss, Case Closed Academy, Hack the Future,
//          Build Mode Academy, and any future training sites.
// =============================================================================

// -----------------------------------------------------------------------------
// Type Definitions
// -----------------------------------------------------------------------------

/** Five-element tuple type for badge tier data */
type FiveTuple<T> = [T, T, T, T, T]

/** Navigation link item */
export interface NavLink {
  label: string
  href: string
}

/** Dashboard navigation link (includes icon reference) */
export interface DashboardNavLink extends NavLink {
  icon: string // Lucide icon name or emoji
}

/** Content category definition */
export interface Category {
  id: string
  name: string
  emoji: string
  description: string
  color: string // Tailwind color name (e.g. "emerald", "cyan")
}

/** Theme configuration — controls the entire visual identity */
export interface ThemeConfig {
  id: string // Unique theme identifier
  emoji: string // Primary mascot emoji
  primaryColor: string // Tailwind color name: "cyan", "yellow", "indigo", etc.
  accentColor: string // Secondary Tailwind color name
  gradientFrom: string // CSS class: "from-cyan-500"
  gradientTo: string // CSS class: "to-blue-600"
  heroGradient: string // Full gradient CSS class for hero sections
  darkMode: boolean // Whether site uses dark theme by default
  bgClass: string // Root background class
  textClass: string // Root text color class
  cardBg: string // Card/panel background class
  cardBorder: string // Card/panel border class
}

/** Badge/gamification tier system — 5 tiers of progression */
export interface BadgeConfig {
  tierNames: FiveTuple<string>
  tierEmojis: FiveTuple<string>
  tierColors: FiveTuple<string> // Tailwind color per tier
  xpPerTier: FiveTuple<number> // Cumulative XP required to reach each tier
  lessonsPerTier: FiveTuple<number> // Lessons required per tier
}

/** Navigation structure */
export interface NavConfig {
  marketing: NavLink[]
  dashboard: DashboardNavLink[]
}

/** Marketing/UI copy — all the text that makes each site unique */
export interface CopyConfig {
  heroTitle: string
  heroSubtitle: string
  ctaButton: string
  ctaSecondary: string
  loginTitle: string
  signupTitle: string
  foundingMemberHeading: string
  emailCaptureHeading: string
  emailCaptureSubheading: string
  feedbackPlaceholder: string
}

/** Pricing tiers — shared structure, amounts may vary */
export interface PricingConfig {
  founder: { monthly: number; yearly: number }
  standard: { monthly: number; yearly: number }
  premium: { monthly: number; yearly: number }
}

/** Contact/social links */
export interface ContactConfig {
  email: string
  github: string
}

/** The complete site configuration type */
export interface SiteConfig {
  // Identity
  name: string
  tagline: string
  description: string
  domain: string

  // Visual
  theme: ThemeConfig

  // Gamification
  badges: BadgeConfig

  // Content
  categories: Category[]

  // Navigation
  nav: NavConfig

  // Copy/Humor
  copy: CopyConfig

  // Monetization
  pricing: PricingConfig

  // Social/Contact
  contact: ContactConfig
}

// -----------------------------------------------------------------------------
// Helper: get badge tier for a given XP value
// -----------------------------------------------------------------------------
export function getBadgeTier(config: SiteConfig, xp: number): number {
  const tiers = config.badges.xpPerTier
  for (let i = tiers.length - 1; i >= 0; i--) {
    if (xp >= tiers[i]) return i
  }
  return 0
}

// -----------------------------------------------------------------------------
// Helper: get progress percentage toward the next tier
// -----------------------------------------------------------------------------
export function getTierProgress(config: SiteConfig, xp: number): number {
  const tier = getBadgeTier(config, xp)
  const currentThreshold = config.badges.xpPerTier[tier]
  const nextThreshold = config.badges.xpPerTier[tier + 1]

  // Already at max tier
  if (nextThreshold === undefined) return 100

  const progressInTier = xp - currentThreshold
  const tierRange = nextThreshold - currentThreshold
  return Math.min(Math.round((progressInTier / tierRange) * 100), 100)
}

// -----------------------------------------------------------------------------
// Helper: get full badge display info for a given XP
// -----------------------------------------------------------------------------
export function getBadgeDisplay(config: SiteConfig, xp: number) {
  const tier = getBadgeTier(config, xp)
  return {
    tier,
    name: config.badges.tierNames[tier],
    emoji: config.badges.tierEmojis[tier],
    color: config.badges.tierColors[tier],
    progress: getTierProgress(config, xp),
    isMaxTier: tier === config.badges.tierNames.length - 1,
  }
}

// =============================================================================
// AI MASTERY HUB CONFIGURATION
// =============================================================================

export const siteConfig: SiteConfig = {
  // ---------------------------------------------------------------------------
  // Identity
  // ---------------------------------------------------------------------------
  name: "AI Mastery Hub",
  tagline: "Master the AI Revolution",
  description:
    "Level up your AI skills from Basic Bot to Superintelligence. Hands-on lessons, real-world projects, and a gamified progression system that makes learning AI genuinely fun.",
  domain: "mastertherevolution.com",

  // ---------------------------------------------------------------------------
  // Theme: Dark glassmorphism with cyan/blue/indigo palette
  // ---------------------------------------------------------------------------
  theme: {
    id: "robot",
    emoji: "\u{1F916}",
    primaryColor: "cyan",
    accentColor: "indigo",
    gradientFrom: "from-cyan-500",
    gradientTo: "to-blue-600",
    heroGradient:
      "bg-gradient-to-br from-slate-950 via-cyan-950/40 to-indigo-950/60",
    darkMode: true,
    bgClass: "bg-slate-950",
    textClass: "text-slate-50",
    cardBg: "bg-white/5 backdrop-blur-xl",
    cardBorder: "border border-white/10",
  },

  // ---------------------------------------------------------------------------
  // Badge System: Robot Evolution (5 tiers)
  // ---------------------------------------------------------------------------
  badges: {
    tierNames: [
      "Basic Bot",
      "Smart Assistant",
      "Neural Network",
      "Deep Mind",
      "Superintelligence",
    ],
    tierEmojis: [
      "\u{1F916}",
      "\u{1F9E0}",
      "\u26A1",
      "\u{1F52E}",
      "\u{1F31F}",
    ],
    tierColors: ["slate", "cyan", "blue", "indigo", "violet"],
    xpPerTier: [100, 300, 600, 1200, 2500],
    lessonsPerTier: [1, 2, 3, 4, 5],
  },

  // ---------------------------------------------------------------------------
  // Content Categories
  // ---------------------------------------------------------------------------
  categories: [
    {
      id: "beginner",
      name: "Beginner",
      emoji: "\u{1F331}",
      description: "Start your AI journey here. No prior experience needed.",
      color: "emerald",
    },
    {
      id: "intermediate",
      name: "Intermediate",
      emoji: "\u2699\uFE0F",
      description:
        "Ready to go deeper? Advanced prompting, workflows, and integrations.",
      color: "cyan",
    },
    {
      id: "advanced",
      name: "Advanced",
      emoji: "\u{1F9E0}",
      description:
        "Expert-level techniques: fine-tuning, agents, and AI architecture.",
      color: "indigo",
    },
    {
      id: "ai-tools",
      name: "AI Tools",
      emoji: "\u{1F6E0}\uFE0F",
      description:
        "Hands-on reviews and tutorials for the latest AI tools and platforms.",
      color: "amber",
    },
    {
      id: "weekly-updates",
      name: "Weekly Updates",
      emoji: "\u{1F4F0}",
      description:
        "Stay current with the AI world. New developments, launches, and analysis.",
      color: "rose",
    },
  ],

  // ---------------------------------------------------------------------------
  // Navigation — all links point to real pages
  // ---------------------------------------------------------------------------
  nav: {
    marketing: [
      { label: "Free Lessons", href: "/free" },
      { label: "Lessons", href: "/lessons" },
      { label: "Tools", href: "/tools" },
      { label: "Updates", href: "/updates" },
      { label: "About", href: "/about" },
      { label: "Pricing", href: "/pricing" },
    ],
    dashboard: [
      { label: "Dashboard", href: "/dashboard", icon: "LayoutDashboard" },
      { label: "Lessons", href: "/dashboard/lessons", icon: "BookOpen" },
      { label: "Progress", href: "/dashboard/progress", icon: "TrendingUp" },
      { label: "Badges", href: "/dashboard/badges", icon: "Award" },
      { label: "Community", href: "/dashboard/community", icon: "Users" },
      { label: "Settings", href: "/dashboard/settings", icon: "Settings" },
    ],
  },

  // ---------------------------------------------------------------------------
  // Copy
  // ---------------------------------------------------------------------------
  copy: {
    heroTitle: "Upgrade Your Neural Networks",
    heroSubtitle:
      "Go from Basic Bot to Superintelligence with hands-on AI lessons that actually make sense. No PhD required \u2014 just curiosity and a willingness to let the robots teach you.",
    ctaButton: "Start Your Evolution",
    ctaSecondary: "See the Curriculum",
    loginTitle: "Welcome back, fellow AI enthusiast",
    signupTitle: "Initialize your account",
    foundingMemberHeading:
      "Join the Founding Circuit \u2014 Lock In Early Access Pricing Forever",
    emailCaptureHeading: "Get Smarter Than the Bots",
    emailCaptureSubheading:
      "Weekly AI insights delivered to your inbox. No spam \u2014 we trained our email bot better than that.",
    feedbackPlaceholder:
      "Tell us what you think... or just say beep boop, we appreciate all feedback.",
  },

  // ---------------------------------------------------------------------------
  // Pricing
  // ---------------------------------------------------------------------------
  pricing: {
    founder: { monthly: 5, yearly: 48 },
    standard: { monthly: 9, yearly: 90 },
    premium: { monthly: 19, yearly: 180 },
  },

  // ---------------------------------------------------------------------------
  // Contact
  // ---------------------------------------------------------------------------
  contact: {
    email: "hello@mastertherevolution.com",
    github: "https://github.com/darrinmc1",
  },
} as const satisfies SiteConfig
