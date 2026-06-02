"use client"

import { useState } from "react"
import { siteConfig } from "@/lib/site-config"
import { Mail, Github, MessageSquare, Send } from "lucide-react"

export default function ContactPage() {
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)
    await new Promise((r) => setTimeout(r, 1000))
    setLoading(false)
    setSent(true)
  }

  return (
    <div className="min-h-screen bg-slate-950 text-slate-50">
      <div className="bg-gradient-to-br from-slate-950 via-cyan-950/40 to-indigo-950/60 py-20">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h1 className="text-5xl font-extrabold tracking-tight mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Get in Touch
            </span>
          </h1>
          <p className="text-xl text-slate-400 max-w-xl mx-auto">
            Questions, feedback, partnership ideas, or just want to say beep
            boop? We&apos;re all ears.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-4xl px-6 py-16">
        <div className="grid md:grid-cols-2 gap-12">

          {/* Contact form */}
          <div>
            <h2 className="text-xl font-bold text-white mb-6">Send a message</h2>
            {sent ? (
              <div className="rounded-2xl border border-cyan-500/20 bg-cyan-500/5 p-8 text-center">
                <div className="text-4xl mb-3">🤖</div>
                <h3 className="text-lg font-bold text-white mb-2">Message received!</h3>
                <p className="text-slate-400 text-sm">
                  Our robots have logged your message and a human will get back
                  to you within 1–2 business days.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-medium text-slate-400 mb-1.5">Name</label>
                  <input
                    type="text"
                    required
                    placeholder="Your name"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-cyan-500/50 focus:bg-white/10 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-400 mb-1.5">Email</label>
                  <input
                    type="email"
                    required
                    placeholder="you@example.com"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-cyan-500/50 focus:bg-white/10 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-400 mb-1.5">Subject</label>
                  <select className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-cyan-500/50 focus:bg-white/10 transition-all">
                    <option value="" className="bg-slate-900">Select a topic</option>
                    <option value="general" className="bg-slate-900">General question</option>
                    <option value="content" className="bg-slate-900">Content feedback</option>
                    <option value="bug" className="bg-slate-900">Bug report</option>
                    <option value="partnership" className="bg-slate-900">Partnership</option>
                    <option value="other" className="bg-slate-900">Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-400 mb-1.5">Message</label>
                  <textarea
                    required
                    rows={5}
                    placeholder="Tell us what's on your mind..."
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-cyan-500/50 focus:bg-white/10 transition-all resize-none"
                  />
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-bold text-white bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 shadow-lg shadow-cyan-500/25 transition-all disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {loading ? "Sending..." : (<><Send className="h-4 w-4" /> Send Message</>)}
                </button>
              </form>
            )}
          </div>

          {/* Contact info */}
          <div className="space-y-6">
            <h2 className="text-xl font-bold text-white mb-6">Other ways to reach us</h2>

            <a
              href={`mailto:${siteConfig.contact.email}`}
              className="flex items-center gap-4 p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-cyan-500/30 hover:bg-white/10 transition-all group"
            >
              <div className="h-12 w-12 rounded-xl bg-cyan-500/10 flex items-center justify-center shrink-0">
                <Mail className="h-5 w-5 text-cyan-400" />
              </div>
              <div>
                <p className="font-semibold text-white group-hover:text-cyan-400 transition-colors">Email us</p>
                <p className="text-sm text-slate-500">{siteConfig.contact.email}</p>
              </div>
            </a>

            <a
              href={siteConfig.contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-cyan-500/30 hover:bg-white/10 transition-all group"
            >
              <div className="h-12 w-12 rounded-xl bg-indigo-500/10 flex items-center justify-center shrink-0">
                <Github className="h-5 w-5 text-indigo-400" />
              </div>
              <div>
                <p className="font-semibold text-white group-hover:text-cyan-400 transition-colors">GitHub</p>
                <p className="text-sm text-slate-500">Follow our development</p>
              </div>
            </a>

            <div className="flex items-start gap-4 p-5 rounded-2xl bg-white/5 border border-white/10">
              <div className="h-12 w-12 rounded-xl bg-violet-500/10 flex items-center justify-center shrink-0">
                <MessageSquare className="h-5 w-5 text-violet-400" />
              </div>
              <div>
                <p className="font-semibold text-white">Response time</p>
                <p className="text-sm text-slate-500 mt-1 leading-relaxed">
                  We typically respond within 1–2 business days. For urgent
                  issues or bug reports, email is fastest.
                </p>
              </div>
            </div>

            <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-5">
              <p className="text-sm text-slate-500 leading-relaxed">
                {siteConfig.theme.emoji} <span className="text-slate-400 font-medium">Building something with us?</span>{" "}
                If you&apos;re interested in partnerships, content collaboration,
                or integrating {siteConfig.name} into your organisation,
                mention it in your message and we&apos;ll prioritise it.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
