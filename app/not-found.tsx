import Link from "next/link"
import { siteConfig } from "@/lib/site-config"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-16 bg-slate-950 text-slate-50 flex items-center">
        <div className="mx-auto max-w-2xl px-6 py-24 text-center">
          <div className="text-8xl mb-6">{siteConfig.theme.emoji}</div>
          <h1 className="text-5xl font-extrabold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              404
            </span>
          </h1>
          <h2 className="text-2xl font-bold text-white mb-4">
            Even robots get lost sometimes
          </h2>
          <p className="text-slate-400 mb-10 leading-relaxed">
            The page you&apos;re looking for doesn&apos;t exist — or has been
            moved to a parallel dimension. Either way, it&apos;s not here.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/"
              className="px-8 py-3 rounded-xl font-bold text-white bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 shadow-lg shadow-cyan-500/25 transition-all hover:scale-105"
            >
              Back to Home
            </Link>
            <Link
              href="/lessons"
              className="px-8 py-3 rounded-xl font-bold text-slate-300 border border-white/10 hover:border-white/20 hover:text-white hover:bg-white/5 transition-all"
            >
              Browse Lessons
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
