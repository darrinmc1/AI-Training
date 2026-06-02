import { siteConfig } from "@/lib/site-config"

export const metadata = {
  title: `Terms of Service | ${siteConfig.name}`,
  description: `Terms of service for ${siteConfig.name}.`,
}

const sections = [
  {
    title: "The short version",
    content: `Use the platform to learn. Don't misuse it. Don't resell our content. Be a decent human. If something breaks, tell us. That covers 99% of situations.`,
  },
  {
    title: "Who can use this",
    content: `${siteConfig.name} is available to anyone aged 13 or older. By creating an account, you confirm you have the authority to agree to these terms — either for yourself or on behalf of an organisation.`,
  },
  {
    title: "Your account",
    content: `You're responsible for keeping your login credentials secure. Don't share your account. If you think your account has been compromised, email us immediately. We'll do our best to help.`,
  },
  {
    title: "Content and intellectual property",
    content: `All lesson content, tool profiles, weekly updates, and platform design are owned by ${siteConfig.name}. You may use the content for personal learning purposes. You may not reproduce, resell, or redistribute lesson content without written permission. Sharing a link to a lesson? Totally fine — encouraged, actually.`,
  },
  {
    title: "Subscriptions and payments",
    content: `Paid plans are billed monthly or annually as selected. You can cancel at any time from your account settings. Cancellations take effect at the end of your current billing period — no pro-rata refunds, but you keep access until the period ends. Founder pricing is locked for life as long as your subscription remains active.`,
  },
  {
    title: "Free preview lessons",
    content: `The three free preview lessons are available without an account and without payment. We reserve the right to change which lessons are in the free tier at any time.`,
  },
  {
    title: "Acceptable use",
    content: `Don't use the platform for anything illegal, harmful, or that would embarrass your mum. Don't attempt to scrape, reverse-engineer, or overload our systems. Don't impersonate other users or staff. Violations may result in account termination.`,
  },
  {
    title: "Disclaimer",
    content: `The content on ${siteConfig.name} is for educational purposes. We do our best to keep it accurate and current, but AI moves fast and we're not perfect. Don't make major business decisions based solely on what you read here — use your own judgement and consult professionals where appropriate.`,
  },
  {
    title: "Changes to these terms",
    content: `We may update these terms from time to time. If the changes are material, we'll notify you by email or with a notice on the site. Continued use after changes take effect means you accept the updated terms.`,
  },
  {
    title: "Contact",
    content: `Questions? Disputes? Feedback on our legalese? Email us at ${siteConfig.contact.email}.`,
  },
]

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50">
      <div className="bg-gradient-to-br from-slate-950 via-cyan-950/40 to-indigo-950/60 py-20">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Terms of Service
            </span>
          </h1>
          <p className="text-slate-400">
            Last updated: June 2026. We've tried to make this readable.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-3xl px-6 py-16">
        <div className="space-y-10">
          {sections.map((section) => (
            <div key={section.title}>
              <h2 className="text-xl font-bold text-white mb-3">{section.title}</h2>
              <p className="text-slate-400 leading-relaxed">{section.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
