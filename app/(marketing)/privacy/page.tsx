import { siteConfig } from "@/lib/site-config"

export const metadata = {
  title: `Privacy Policy | ${siteConfig.name}`,
  description: `Privacy policy for ${siteConfig.name}.`,
}

const sections = [
  {
    title: "What we collect",
    content: `When you sign up, we collect your name and email address. When you use the platform, we track which lessons you've completed, your XP, and your badge progress so we can show you your own stats. If you subscribe to the newsletter, your email is stored securely. That's it — we're not building a dossier on you.`,
  },
  {
    title: "How we use it",
    content: `Your data is used to power your learning experience — showing your progress, unlocking badges, and sending the weekly AI updates you asked for. We do not sell your data to third parties. We do not use it for advertising. We trained our email bot better than that.`,
  },
  {
    title: "Cookies",
    content: `We use cookies to keep you logged in and to understand basic site traffic (pages visited, time on site). We use no third-party advertising cookies. You can disable cookies in your browser settings, though some features like staying logged in will stop working.`,
  },
  {
    title: "Third-party services",
    content: `We use Clerk for authentication (your login), and optionally Mailchimp or Resend for email delivery. These services have their own privacy policies. We share only the minimum data required for them to function — typically just your email address.`,
  },
  {
    title: "Data retention",
    content: `We keep your account data for as long as your account is active. If you delete your account, your personal data is removed within 30 days. Email subscribers can unsubscribe at any time via the link in any email.`,
  },
  {
    title: "Your rights",
    content: `You have the right to access, correct, or delete your personal data at any time. To do so, email us at ${siteConfig.contact.email} and we'll sort it out promptly. If you're in the EU or Australia, you also have rights under GDPR and the Australian Privacy Act respectively.`,
  },
  {
    title: "Contact",
    content: `Questions about this policy? Email us at ${siteConfig.contact.email}. We're humans (mostly) and we'll respond.`,
  },
]

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50">
      <div className="bg-gradient-to-br from-slate-950 via-cyan-950/40 to-indigo-950/60 py-20">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Privacy Policy
            </span>
          </h1>
          <p className="text-slate-400">
            Last updated: June 2026. Written in plain English, not legalese.
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
