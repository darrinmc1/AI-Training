import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server"

const FREE_PREVIEW_LESSON_IDS = [
  "what-is-ai",
  "ai-fundamentals",
  "prompt-engineering-101",
] as const

const isProtectedRoute = createRouteMatcher([
  "/dashboard(.*)",
  "/lessons/(.+)",
])

const isFreePreview = createRouteMatcher(
  FREE_PREVIEW_LESSON_IDS.map((id) => `/lessons/${id}`)
)

export default clerkMiddleware(async (auth, req) => {
  if (isProtectedRoute(req) && !isFreePreview(req)) {
    await auth.protect()
  }
})

export const config = {
  matcher: [
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    "/(api|trpc)(.*)",
  ],
}
