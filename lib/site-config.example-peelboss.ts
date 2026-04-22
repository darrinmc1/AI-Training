// =============================================================================
// PEEL BOSS - EXAMPLE SITE CONFIGURATION
// =============================================================================
// This file demonstrates how the universal SiteConfig structure adapts to a
// completely different theme. Copy site-config.ts, swap in these values, and
// you have a fully themed banana-powered training platform.
//
// Theme: Banana Empire | Colors: Yellow/Amber/Orange | Mode: Light
// "From Green Banana to Top Banana" progression
// =============================================================================

import type { SiteConfig } from "./site-config"

export const siteConfig: SiteConfig = {
  // ---------------------------------------------------------------------------
  // Identity
  // ---------------------------------------------------------------------------
  name: "Peel Boss",
  tagline: "Peel Back the Layers of AI",
  description:
    "The most a-peel-ing AI training platform on the internet. Go from Green Banana to Top Banana with fun, bite-sized lessons. No slipping up required.",
  domain: "peelboss.com",

  // ---------------------------------------------------------------------------
  // Theme: Bright, playful banana yellow with light mode
  // ---------------------------------------------------------------------------
  theme: {
    id: "banana",
    emoji: "\u{1F34C}", // Banana
    primaryColor: "yellow",
    accentColor: "amber",
    gradientFrom: "from-yellow-400",
    gradientTo: "to-amber-500",
    heroGradient:
      "bg-gradient-to-br from-yellow-50 via-amber-50/60 to-orange-50/40",
    darkMode: false,
    bgClass: "bg-yellow-50",
    textClass: "text-gray-900",
    cardBg: "bg-white shadow-lg",
    cardBorder: "border border-yellow-200",
  },

  // ---------------------------------------------------------------------------
  // Badge System: Banana Ripeness (5 tiers)
  // ---------------------------------------------------------------------------
  badges: {
    tierNames: [
      "Green Banana",
      "Yellow Belt",
      "Banana Split",
      "Golden Bunch",
      "Top Banana",
    ],
    tierEmojis: [
      "\u{1F34F}", // Green apple (standing in for green banana)
      "\u{1F34C}", // Banana
      "\u{1F366}", // Soft ice cream (banana split vibe)
      "\u{1F451}", // Crown
      "\u{1F31F}", // Glowing star
    ],
    tierColors: ["lime", "yellow", "amber", "orange", "red"],
    xpPerTier: [100, 300, 600, 1200, 2500],
    lessonsPerTier: [1, 2, 3, 4, 5],
  },

  // ---------------------------------------------------------------------------
  // Content Categories
  // ---------------------------------------------------------------------------
  categories: [
    {
      id: "beginner",
      name: "Baby Banana",
      emoji: "\u{1F95B}", // Glass of milk (baby food vibes)
      description:
        "Brand new to AI? No worries. We make it so easy a banana could do it.",
      color: "lime",
    },
    {
      id: "intermediate",
      name: "Ripe & Ready",
      emoji: "\u{1F34C}", // Banana
      description:
        "You know the basics. Time to peel back more layers and go deeper.",
      color: "yellow",
    },
    {
      id: "advanced",
      name: "Banana Boss",
      emoji: "\u{1F451}", // Crown
      description:
        "Advanced techniques for those ready to rule the bunch.",
      color: "amber",
    },
    {
      id: "ai-tools",
      name: "Tool Shed",
      emoji: "\u{1F6E0}\uFE0F", // Hammer and wrench
      description:
        "Reviews and walkthroughs of the hottest AI tools. Freshly picked.",
      color: "orange",
    },
    {
      id: "weekly-updates",
      name: "The Daily Peel",
      emoji: "\u{1F4F0}", // Newspaper
      description:
        "Weekly AI news with a side of potassium. Stay in the bunch.",
      color: "rose",
    },
  ],

  // ---------------------------------------------------------------------------
  // Navigation
  // ---------------------------------------------------------------------------
  nav: {
    marketing: [
      { label: "Lessons", href: "/lessons" },
      { label: "Pricing", href: "/pricing" },
      { label: "About", href: "/about" },
      { label: "Blog", href: "/blog" },
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
  // Copy: Banana puns at maximum intensity
  // ---------------------------------------------------------------------------
  copy: {
    heroTitle: "Peel Back the Layers of AI",
    heroSubtitle:
      "Go from Green Banana to Top Banana with bite-sized AI lessons that are actually fun. Warning: side effects may include uncontrollable banana puns.",
    ctaButton: "Start Peeling",
    ctaSecondary: "See the Bunch",
    loginTitle: "Welcome back to the bunch",
    signupTitle: "Join the bunch",
    foundingMemberHeading:
      "Founding Bunch Member \u2014 Lock In Early Access Pricing Forever",
    emailCaptureHeading: "Get the Daily Peel",
    emailCaptureSubheading:
      "Weekly AI tips delivered fresh. No spam \u2014 just potassium-rich knowledge.",
    feedbackPlaceholder:
      "Spill the banana tea... what did you think? We promise not to slip up on your feedback.",
  },

  // ---------------------------------------------------------------------------
  // Pricing: Same structure, same amounts across the platform
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
    email: "darrinmc1@yahoo.com",
    github: "https://github.com/darrinmc1",
  },
}
