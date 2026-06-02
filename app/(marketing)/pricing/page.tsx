import Link from "next/link"
import Image from "next/image"
import { siteConfig } from "@/lib/site-config"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Check } from "lucide-react"

export const metadata = {
  title: `Pricing | ${siteConfig.name}`,
  description: "Simple, transparent pricing. Start free and upgrade when you're ready.",
}

const tiers = [
  {
    name: "Founder",
    emoji: "🚀",
    price: siteConfig.pricing.founder,
    description: "Lock in early access pricing forever. Our way of saying thanks.",
    badge: "Early Bird",
    highlighted: false,
    cta: "Claim Founder Pricing",
    features: [
      "Access to all current lessons",
      "Weekly AI updates newsletter",
      "Badge & XP progression system",
      "Community access",
      "Price locked forever",
    ],
  },
  {
    name: "Standard",
    emoji: "⚡",
    price: siteConfig.pricing.standard,
    description: "Everything you need to go from curious to capable.",
    badge: "Most Popular",
    highlighted: true,
    cta: "Get Started",
    features: [
      "Access to all lessons (beginner → advanced)",
      "Weekly AI updates newsletter",
      "Badge & XP progression system",
      "Community access",
      "New lessons as they drop",
      "Priority email support",
    ],
  },
  {
    name: "Premium",
    emoji: "🧠",
    price: siteConfig.pricing.premium,
    description: "For teams and serious learners who want the full experience.",
    badge: "Full Access",
    highlighted: false,
    cta: "Go Premium",
    features: [
      "Everything in Standard",
      "AI tools deep-dive reviews",
      "Downloadable cheat sheets & templates",
      "Early access to new content",
      "Monthly live Q&A sessions",
      "Team seats (up to 5)",
    ],
  },
]

export default function PricingPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-16 bg-slate-950 text-slate-50">
        <div className="bg-gradient-to-br from-slate-950 via-cyan-950/40 to-indigo-950/60 py-20">
          <div className="mx-auto max-w-6xl px-6 grid gap-10 items-center md:grid-cols-2">
            <div className="text-center md:text-left">
              <h1 className="text-5xl font-extrabold tracking-tight mb-4">
                <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  Simple Pricing
                </span>
              </h1>
              <p className="text-xl text-slate-400 max-w-xl md:mx-0 mx-auto">
                No surprise fees. No confusing tiers. Pick a plan and start learning.
              </p>
              <p className="text-sm text-slate-500 mt-4 max-w-lg md:mx-0 mx-auto">
                Built for humans, not spreadsheet gladiators.
              </p>
            </div>

            <div className="mx-auto w-full max-w-xl">
              <div className="overflow-hidden rounded-2xl border border-cyan-500/20 bg-slate-900/40">
                <Image
                  src="/images/pricing-parrot.svg"
                  alt="A cheerful parrot accountant helping compare learning plans"
                  width={1200}
                  height={900}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="grid md:grid-cols-3 gap-8 items-start">
            {tiers.map((tier) => (
              <div
                key={tier.name}
                className={`relative rounded-2xl border p-8 flex flex-col ${
                  tier.highlighted
                    ? "bg-gradient-to-b from-cyan-950/60 to-blue-950/40 border-cyan-500/40 shadow-xl shadow-cyan-500/10"
                    : "bg-white/5 border-white/10"
                }`}
              >
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className={`inline-block rounded-full px-4 py-1 text-xs font-bold uppercase tracking-wider whitespace-nowrap ${tier.highlighted ? "bg-cyan-500 text-white" : "bg-white/10 text-slate-400"}`}>
                    {tier.badge}
                  </span>
                </div>

                <div className="mb-6 mt-2">
                  <div className="text-3xl mb-2">{tier.emoji}</div>
                  <h2 className="text-2xl font-bold text-white">{tier.name}</h2>
                  <p className="text-sm text-slate-400 mt-1">{tier.description}</p>
                </div>

                <div className="mb-6">
                  <div className="flex items-end gap-1">
                    <span className="text-4xl font-extrabold text-white">${tier.price.monthly}</span>
                    <span className="text-slate-400 mb-1">/mo</span>
                  </div>
                  <p className="text-xs text-slate-500 mt-1">or ${tier.price.yearly}/yr</p>
                </div>

                <ul className="space-y-3 mb-8 flex-1">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-sm">
                      <Check className="h-4 w-4 text-cyan-500 mt-0.5 shrink-0" />
                      <span className="text-slate-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/sign-up"
                  className={`block text-center rounded-xl py-3 font-bold text-sm transition-all ${
                    tier.highlighted
                      ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-400 hover:to-blue-500 shadow-lg shadow-cyan-500/25"
                      : "bg-white/10 text-slate-200 hover:bg-white/20 border border-white/10"
                  }`}
                >
                  {tier.cta}
                </Link>
              </div>
            ))}
          </div>

          <p className="text-center text-sm text-slate-500 mt-10">
            Not ready to commit?{" "}
            <Link href="/lessons" className="text-cyan-400 hover:underline">
              Try 3 free lessons
            </Link>{" "}
            — no account required.
          </p>
        </div>
      </main>
      <Footer />
    </>
  )
}
