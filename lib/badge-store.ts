import { create } from "zustand"
import { persist, createJSONStorage } from "zustand/middleware"
import {
  TOPIC_BADGES,
  SPECIAL_BADGES,
  TIER_CONFIG,
  type Badge,
  type BadgeTier,
  type SpecialBadge,
  getBadgesForTopic,
} from "@/data/badges"

// =============================================================================
// BADGE / XP STORE — AI Mastery Hub (Robot Evolution Theme)
// =============================================================================
// Adapted from Peel Boss badge-store pattern for AI Hub's robot evolution tiers.
// =============================================================================

// ---- Types ----

export type UnlockedBadge = {
  badgeId: string
  unlockedAt: string // ISO date
  seen: boolean
}

export type TopicXP = {
  topicId: string
  xp: number
  lessonsCompleted: number
}

export type ActivityCompletion = {
  activityId: string
  activityType: string
  topicId: string
  score: number
  maxScore: number
  xpEarned: number
  completedAt: string
  attempts: number
}

export type SpecialBadgeContext = {
  modulesCompleted?: number
  totalModules?: number
  categoriesCompleted?: number
  streak?: number
  isFirstLesson?: boolean
  isEarlyMorning?: boolean       // before 6am
  isCoffeeHour?: boolean         // 6-8am
  isLunchBreak?: boolean         // 12-1pm
  isAfterHours?: boolean         // after 6pm
  isLateNight?: boolean          // after midnight
  isMondayMorning?: boolean      // monday before 9am
  isWeekend?: boolean
  completedModuleId?: string
  sessionDurationMinutes?: number
  returnAfterDays?: number
  lessonsThisSession?: number
  lessonsThisWeek?: number
  lessonsThisMonday?: number
  totalLessonsCompleted?: number
  beginner_complete?: boolean
  intermediate_complete?: boolean
  advanced_complete?: boolean
  combo_ethics_rag?: boolean
  combo_prompt_agent?: boolean
  combo_strategy_governance?: boolean
  beginner_and_intermediate?: boolean
  all_tracks_complete?: boolean
  categories_5?: boolean
  prompt_topics_3?: boolean
  lessonDurationSeconds?: number  // how long they spent on this lesson
  lessonRevisitCount?: number     // how many times they opened this lesson
  pathCompletedInOneDay?: boolean
  fullReadLessonsCount?: number
  feedbackCount?: number
  fiveStarCount?: number
  bugReportAccepted?: boolean
  contentSuggestionAccepted?: boolean
  referralCount?: number
  isEarlyAdopter?: boolean
  weeklyUnlockedTiers?: number
}

export type BadgeStoreState = {
  // Earned badges
  unlockedBadges: Record<string, UnlockedBadge>
  // XP per topic
  topicXP: Record<string, TopicXP>
  // Total XP
  totalXP: number
  // Pending notifications
  pendingNotifications: string[]
  // Quiz scores for special badge checks
  quizScores: { moduleId: string; score: number; date: string }[]
  // Session tracking
  sessionStartTime: string | null
  // Activity tracking
  completedActivities: Record<string, ActivityCompletion>

  // ---- Actions ----
  addTopicXP: (topicId: string, xp: number) => void
  completeLesson: (topicId: string) => void
  checkAndUnlockBadges: (topicId: string) => string[]
  checkSpecialBadges: (context: SpecialBadgeContext) => string[]
  markBadgeSeen: (badgeId: string) => void
  markAllSeen: () => void
  dismissNotification: (badgeId: string) => void
  recordQuizScore: (moduleId: string, score: number) => void
  startSession: () => void
  completeActivity: (input: {
    activityId: string
    activityType: string
    topicId: string
    score: number
    maxScore: number
    xpEarned: number
  }) => string[]

  // ---- Getters ----
  isBadgeUnlocked: (badgeId: string) => boolean
  getTopicTier: (topicId: string) => BadgeTier | null
  getTopicProgress: (topicId: string) => {
    currentTier: BadgeTier | null
    nextTier: BadgeTier | null
    xp: number
    xpNeeded: number
    lessons: number
    lessonsNeeded: number
    percent: number
  }
  getUnlockedCount: () => number
  getTotalBadgeCount: () => number
}

// ---- Tier order for progression ----
const TIER_ORDER: BadgeTier[] = [
  "basic-bot",
  "smart-assistant",
  "neural-network",
  "deep-mind",
  "superintelligence",
]

// ---- Store ----

export const useBadgeStore = create<BadgeStoreState>()(
  persist(
    (set, get) => ({
      unlockedBadges: {},
      topicXP: {},
      totalXP: 0,
      pendingNotifications: [],
      quizScores: [],
      sessionStartTime: null,
      completedActivities: {},

      addTopicXP: (topicId, xp) =>
        set((state) => {
          const current = state.topicXP[topicId] || {
            topicId,
            xp: 0,
            lessonsCompleted: 0,
          }
          return {
            topicXP: {
              ...state.topicXP,
              [topicId]: { ...current, xp: current.xp + xp },
            },
            totalXP: state.totalXP + xp,
          }
        }),

      completeLesson: (topicId) =>
        set((state) => {
          const current = state.topicXP[topicId] || {
            topicId,
            xp: 0,
            lessonsCompleted: 0,
          }
          const xpGain = 50
          return {
            topicXP: {
              ...state.topicXP,
              [topicId]: {
                ...current,
                xp: current.xp + xpGain,
                lessonsCompleted: current.lessonsCompleted + 1,
              },
            },
            totalXP: state.totalXP + xpGain,
          }
        }),

      checkAndUnlockBadges: (topicId) => {
        const state = get()
        const topicData = state.topicXP[topicId]
        if (!topicData) return []

        const topicBadges = getBadgesForTopic(topicId)
        const newlyUnlocked: string[] = []

        for (const badge of topicBadges) {
          if (state.unlockedBadges[badge.id]) continue
          if (
            topicData.xp >= badge.xpRequired &&
            topicData.lessonsCompleted >= badge.lessonsRequired
          ) {
            newlyUnlocked.push(badge.id)
          }
        }

        if (newlyUnlocked.length > 0) {
          set((state) => {
            const updated = { ...state.unlockedBadges }
            for (const id of newlyUnlocked) {
              updated[id] = {
                badgeId: id,
                unlockedAt: new Date().toISOString(),
                seen: false,
              }
            }
            return {
              unlockedBadges: updated,
              pendingNotifications: [
                ...state.pendingNotifications,
                ...newlyUnlocked,
              ],
            }
          })
        }

        return newlyUnlocked
      },

      checkSpecialBadges: (context) => {
        const state = get()
        const newlyUnlocked: string[] = []

        const check = (badge: SpecialBadge): boolean => {
          if (state.unlockedBadges[badge.id]) return false

          switch (badge.condition) {
            // ── Core achievement ──────────────────────────────────────────
            case "first_lesson":
              return context.isFirstLesson === true
            case "all_modules_completed":
              return (context.totalModules ?? 0) > 0 &&
                (context.modulesCompleted ?? 0) >= (context.totalModules ?? 0)
            case "half_modules":
              return (context.totalModules ?? 0) > 0 &&
                (context.modulesCompleted ?? 0) >= Math.ceil((context.totalModules ?? 0) / 2)
            case "all_beginner_complete":
              return context.beginner_complete === true
            case "all_intermediate_complete":
              return context.intermediate_complete === true
            case "all_advanced_complete":
              return context.advanced_complete === true

            // ── XP milestones ─────────────────────────────────────────────
            case "total_xp_100":    return state.totalXP >= 100
            case "total_xp_250":    return state.totalXP >= 250
            case "total_xp_500":    return state.totalXP >= 500
            case "total_xp_1000":   return state.totalXP >= 1000
            case "total_xp_2500":   return state.totalXP >= 2500
            case "total_xp_5000":   return state.totalXP >= 5000
            case "total_xp_7500":   return state.totalXP >= 7500
            case "total_xp_10000":  return state.totalXP >= 10000
            case "total_xp_20000":  return state.totalXP >= 20000
            case "total_xp_50000":  return state.totalXP >= 50000

            // ── Streaks ───────────────────────────────────────────────────
            case "streak_2":   return (context.streak ?? 0) >= 2
            case "streak_3":   return (context.streak ?? 0) >= 3
            case "streak_7":   return (context.streak ?? 0) >= 7
            case "streak_14":  return (context.streak ?? 0) >= 14
            case "streak_21":  return (context.streak ?? 0) >= 21
            case "streak_30":  return (context.streak ?? 0) >= 30
            case "streak_45":  return (context.streak ?? 0) >= 45
            case "streak_60":  return (context.streak ?? 0) >= 60
            case "streak_100": return (context.streak ?? 0) >= 100
            case "streak_180": return (context.streak ?? 0) >= 180
            case "streak_365": return (context.streak ?? 0) >= 365
            case "procrastination_return": return (context.returnAfterDays ?? 0) >= 7

            // ── Speed & efficiency ────────────────────────────────────────
            case "lesson_under_5min":   return (context.lessonDurationSeconds ?? 999) > 0 &&
              (context.lessonDurationSeconds ?? 999) <= 300
            case "lesson_under_60s":    return (context.lessonDurationSeconds ?? 999) > 0 &&
              (context.lessonDurationSeconds ?? 999) < 60
            case "two_lessons_30min":   return (context.lessonsThisSession ?? 0) >= 2 &&
              (context.sessionDurationMinutes ?? 999) <= 30
            case "three_lessons_session": return (context.lessonsThisSession ?? 0) >= 3
            case "session_60min":       return (context.sessionDurationMinutes ?? 0) >= 60
            case "marathon_session":    return (context.sessionDurationMinutes ?? 0) >= 120
            case "five_lessons_weekend":
              return context.isWeekend === true && (context.lessonsThisSession ?? 0) >= 5
            case "path_one_day":        return context.pathCompletedInOneDay === true
            case "full_read_five_lessons": return (context.fullReadLessonsCount ?? 0) >= 5

            // ── Combo / cross-module ──────────────────────────────────────
            case "combo_ethics_rag":            return context.combo_ethics_rag === true
            case "combo_prompt_agent":          return context.combo_prompt_agent === true
            case "combo_strategy_governance":   return context.combo_strategy_governance === true
            case "beginner_and_intermediate":   return context.beginner_and_intermediate === true
            case "all_tracks_complete":         return context.all_tracks_complete === true
            case "categories_3":  return (context.categoriesCompleted ?? 0) >= 3
            case "categories_5":  return context.categories_5 === true
            case "all_gold_one_topic": {
              // Check if any topic has all 5 tiers unlocked
              const goldBadges = TOPIC_BADGES.filter((b) => b.tier === "deep-mind")
              return goldBadges.some((b) => !!state.unlockedBadges[b.id])
            }
            case "any_diamond_badge": {
              const diamondBadges = TOPIC_BADGES.filter((b) => b.tier === "superintelligence")
              return diamondBadges.some((b) => !!state.unlockedBadges[b.id])
            }
            case "gold_in_all_topics": {
              const goldBadges = TOPIC_BADGES.filter((b) => b.tier === "deep-mind")
              return goldBadges.every((b) => !!state.unlockedBadges[b.id])
            }
            case "all_topic_badges": {
              return TOPIC_BADGES.every((b) => !!state.unlockedBadges[b.id])
            }

            // ── Lesson count milestones ───────────────────────────────────
            case "five_lessons_total":   return (context.totalLessonsCompleted ?? 0) >= 5
            case "ten_lessons_total":    return (context.totalLessonsCompleted ?? 0) >= 10
            case "twenty_lessons_total": return (context.totalLessonsCompleted ?? 0) >= 20
            case "three_lessons_week":   return (context.lessonsThisWeek ?? 0) >= 3
            case "two_lessons_monday":   return (context.lessonsThisMonday ?? 0) >= 2

            // ── Time-of-day ───────────────────────────────────────────────
            case "early_morning":      return context.isEarlyMorning === true
            case "early_session_coffee": return context.isCoffeeHour === true
            case "lunch_break":        return context.isLunchBreak === true
            case "after_hours":        return context.isAfterHours === true
            case "late_night":         return context.isLateNight === true
            case "weekend_lesson":     return context.isWeekend === true
            case "monday_morning":     return context.isMondayMorning === true
            case "midnight_lesson":    return context.isLateNight === true &&
              (context.sessionDurationMinutes ?? 0) >= 20

            // ── Humor / personality ───────────────────────────────────────
            case "overthink_session":   return (context.lessonDurationSeconds ?? 0) >= 600 &&
              (context.lessonDurationSeconds ?? 0) < 300  // 10+ min, scrolled <50%
            case "revisit_lesson_3x":   return (context.lessonRevisitCount ?? 0) >= 3
            case "complete_rag-basics_twice": return (context.lessonRevisitCount ?? 0) >= 2 &&
              context.completedModuleId === "rag-basics"
            case "rag_deep_read":       return context.completedModuleId === "rag-basics" &&
              (context.lessonDurationSeconds ?? 0) >= 1200
            case "prompt_topics_3":     return context.prompt_topics_3 === true

            // ── Quiz redemption ───────────────────────────────────────────
            case "quiz_redemption": {
              const scores = state.quizScores
              const failedModules = new Set(
                scores.filter((s) => s.score < 70).map((s) => s.moduleId)
              )
              return Array.from(failedModules).some((mId) =>
                scores.some((s) => s.moduleId === mId && s.score === 100)
              )
            }

            // ── Community ─────────────────────────────────────────────────
            case "first_feedback":             return (context.feedbackCount ?? 0) >= 1
            case "five_star_3x":               return (context.fiveStarCount ?? 0) >= 3
            case "bug_report_accepted":        return context.bugReportAccepted === true
            case "content_suggestion_accepted": return context.contentSuggestionAccepted === true
            case "feedback_10x":               return (context.feedbackCount ?? 0) >= 10
            case "early_adopter":              return context.isEarlyAdopter === true
            case "first_referral":             return (context.referralCount ?? 0) >= 1
            case "referrals_5":                return (context.referralCount ?? 0) >= 5

            // ── Secret badges (same check logic, obscured names) ──────────
            case "secret_same_time_7days":    return (context.streak ?? 0) >= 7 &&
              context.isEarlyMorning === true
            case "secret_path_under_2hours":  return context.pathCompletedInOneDay === true &&
              (context.sessionDurationMinutes ?? 999) <= 120
            case "secret_late_night_3days":   return context.isLateNight === true &&
              (context.streak ?? 0) >= 3
            case "secret_reread_all":         return (context.lessonRevisitCount ?? 0) >= 1 &&
              (context.totalLessonsCompleted ?? 0) >= 8
            case "secret_5_lessons_day_one":  return context.isFirstLesson !== true &&
              (context.lessonsThisSession ?? 0) >= 5
            case "secret_xp_exactly_1000":    return state.totalXP >= 1000 && state.totalXP < 1050
            case "secret_birthday_lesson":    return false // triggered externally via API
            case "secret_five_tiers_one_week": return (context.weeklyUnlockedTiers ?? 0) >= 5
            case "secret_reverse_order":      return false // triggered externally
            case "secret_all_categories_touched": return (context.categoriesCompleted ?? 0) >= 8

            default:
              // Handle "complete_<moduleId>" pattern
              if (badge.condition.startsWith("complete_")) {
                const moduleId = badge.condition.replace("complete_", "")
                return context.completedModuleId === moduleId
              }
              return false
          }
        }

        for (const badge of SPECIAL_BADGES) {
          if (check(badge)) {
            newlyUnlocked.push(badge.id)
          }
        }

        if (newlyUnlocked.length > 0) {
          set((state) => {
            const updated = { ...state.unlockedBadges }
            for (const id of newlyUnlocked) {
              updated[id] = {
                badgeId: id,
                unlockedAt: new Date().toISOString(),
                seen: false,
              }
            }
            return {
              unlockedBadges: updated,
              pendingNotifications: [
                ...state.pendingNotifications,
                ...newlyUnlocked,
              ],
            }
          })
        }

        return newlyUnlocked
      },

      markBadgeSeen: (badgeId) =>
        set((state) => ({
          unlockedBadges: {
            ...state.unlockedBadges,
            [badgeId]: { ...state.unlockedBadges[badgeId], seen: true },
          },
        })),

      markAllSeen: () =>
        set((state) => {
          const updated = { ...state.unlockedBadges }
          for (const key of Object.keys(updated)) {
            updated[key] = { ...updated[key], seen: true }
          }
          return { unlockedBadges: updated, pendingNotifications: [] }
        }),

      dismissNotification: (badgeId) =>
        set((state) => ({
          pendingNotifications: state.pendingNotifications.filter(
            (id) => id !== badgeId
          ),
          unlockedBadges: {
            ...state.unlockedBadges,
            [badgeId]: { ...state.unlockedBadges[badgeId], seen: true },
          },
        })),

      recordQuizScore: (moduleId, score) =>
        set((state) => ({
          quizScores: [
            ...state.quizScores,
            { moduleId, score, date: new Date().toISOString() },
          ],
        })),

      startSession: () => set({ sessionStartTime: new Date().toISOString() }),

      completeActivity: ({
        activityId,
        activityType,
        topicId,
        score,
        maxScore,
        xpEarned,
      }) => {
        set((state) => {
          const prev = state.completedActivities[activityId]
          const isBetter = !prev || xpEarned > prev.xpEarned
          const nextRecord: ActivityCompletion = isBetter
            ? {
                activityId,
                activityType,
                topicId,
                score,
                maxScore,
                xpEarned,
                completedAt: new Date().toISOString(),
                attempts: (prev?.attempts ?? 0) + 1,
              }
            : { ...prev, attempts: prev.attempts + 1 }

          const xpDelta = isBetter ? xpEarned - (prev?.xpEarned ?? 0) : 0
          const topicData = state.topicXP[topicId] || {
            topicId,
            xp: 0,
            lessonsCompleted: 0,
          }

          return {
            completedActivities: {
              ...state.completedActivities,
              [activityId]: nextRecord,
            },
            topicXP:
              xpDelta > 0
                ? {
                    ...state.topicXP,
                    [topicId]: {
                      ...topicData,
                      xp: topicData.xp + xpDelta,
                    },
                  }
                : state.topicXP,
            totalXP: state.totalXP + xpDelta,
          }
        })

        return get().checkAndUnlockBadges(topicId)
      },

      // ---- Getters ----

      isBadgeUnlocked: (badgeId) => !!get().unlockedBadges[badgeId],

      getTopicTier: (topicId) => {
        const state = get()
        const topicData = state.topicXP[topicId]
        if (!topicData) return null

        const reversedTiers = [...TIER_ORDER].reverse()
        const topicBadges = getBadgesForTopic(topicId)

        for (const tier of reversedTiers) {
          const badge = topicBadges.find((b) => b.tier === tier)
          if (badge && state.unlockedBadges[badge.id]) return tier
        }
        return null
      },

      getTopicProgress: (topicId) => {
        const state = get()
        const topicData = state.topicXP[topicId] || {
          xp: 0,
          lessonsCompleted: 0,
        }
        const currentTier = state.getTopicTier(topicId)

        const currentIndex = currentTier
          ? TIER_ORDER.indexOf(currentTier)
          : -1
        const nextTier =
          currentIndex < TIER_ORDER.length - 1
            ? TIER_ORDER[currentIndex + 1]
            : null

        const topicBadges = getBadgesForTopic(topicId)
        const nextBadge = nextTier
          ? topicBadges.find((b) => b.tier === nextTier)
          : null

        const xpNeeded = nextBadge ? nextBadge.xpRequired : 0
        const lessonsNeeded = nextBadge ? nextBadge.lessonsRequired : 0
        const percent = nextBadge
          ? Math.min(
              100,
              Math.round(
                (topicData.xp / nextBadge.xpRequired) * 50 +
                  (topicData.lessonsCompleted / nextBadge.lessonsRequired) * 50
              )
            )
          : 100

        return {
          currentTier,
          nextTier,
          xp: topicData.xp,
          xpNeeded,
          lessons: topicData.lessonsCompleted,
          lessonsNeeded,
          percent,
        }
      },

      getUnlockedCount: () => Object.keys(get().unlockedBadges).length,

      getTotalBadgeCount: () => TOPIC_BADGES.length + SPECIAL_BADGES.length,
    }),
    {
      name: "ai-hub-badge-storage",
      storage: createJSONStorage(() => {
        try {
          const test = "__storage_test__"
          localStorage.setItem(test, test)
          localStorage.removeItem(test)
          return localStorage
        } catch {
          // localStorage unavailable (private browsing, restrictions) → use in-memory fallback
          return {
            getItem: () => null,
            setItem: () => {},
            removeItem: () => {},
          }
        }
      }),
    }
  )
)
