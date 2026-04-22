import { notFound } from "next/navigation"
import Link from "next/link"
import { ALL_UPDATES, getUpdateById } from "@/data/updates"
import { siteConfig } from "@/lib/site-config"

export function generateStaticParams() {
  return ALL_UPDATES.map((update) => ({ id: update.id }))
}

export function generateMetadata({ params }: { params: { id: string } }) {
  const update = getUpdateById(params.id)
  if (!update) return { title: "Not Found" }
  return {
    title: `${update.title} | ${siteConfig.name}`,
    description: update.description,
  }
}

function inlineFormat(text: string): string {
  return text
    .replace(/\*\*(.+?)\*\*/g, '<strong class="text-white font-semibold">$1</strong>')
    .replace(/\*(.+?)\*/g, '<em class="text-cyan-300">$1</em>')
}

function MarkdownRenderer({ content }: { content: string }) {
  const lines = content.split("\n")
  const elements: React.ReactNode[] = []
  let listBuffer: string[] = []
  let orderedBuffer: string[] = []

  function flushList() {
    if (listBuffer.length > 0) {
      elements.push(
        <ul
          key={`ul-${elements.length}`}
          className="list-disc list-inside space-y-1 text-slate-300 mb-4 ml-4"
        >
          {listBuffer.map((item, i) => (
            <li key={i} dangerouslySetInnerHTML={{ __html: inlineFormat(item) }} />
          ))}
        </ul>
      )
      listBuffer = []
    }
  }

  function flushOrdered() {
    if (orderedBuffer.length > 0) {
      elements.push(
        <ol
          key={`ol-${elements.length}`}
          className="list-decimal list-inside space-y-1 text-slate-300 mb-4 ml-4"
        >
          {orderedBuffer.map((item, i) => (
            <li key={i} dangerouslySetInnerHTML={{ __html: inlineFormat(item) }} />
          ))}
        </ol>
      )
      orderedBuffer = []
    }
  }

  for (let i = 0; i < lines.length; i++) {
    const trimmed = lines[i].trim()

    if (trimmed === "") {
      flushList()
      flushOrdered()
      continue
    }

    if (trimmed.startsWith("### ")) {
      flushList()
      flushOrdered()
      elements.push(
        <h3
          key={`h3-${i}`}
          className="text-xl font-bold text-white mt-8 mb-3"
          dangerouslySetInnerHTML={{ __html: inlineFormat(trimmed.slice(4)) }}
        />
      )
      continue
    }
    if (trimmed.startsWith("## ")) {
      flushList()
      flushOrdered()
      elements.push(
        <h2
          key={`h2-${i}`}
          className="text-2xl font-bold text-white mt-10 mb-4 pb-2 border-b border-white/10"
          dangerouslySetInnerHTML={{ __html: inlineFormat(trimmed.slice(3)) }}
        />
      )
      continue
    }

    if (trimmed.startsWith("- ") || trimmed.startsWith("* ")) {
      flushOrdered()
      listBuffer.push(trimmed.slice(2))
      continue
    }

    const orderedMatch = trimmed.match(/^\d+\.\s+(.*)$/)
    if (orderedMatch) {
      flushList()
      orderedBuffer.push(orderedMatch[1])
      continue
    }

    flushList()
    flushOrdered()
    elements.push(
      <p
        key={`p-${i}`}
        className="text-slate-300 leading-relaxed mb-4"
        dangerouslySetInnerHTML={{ __html: inlineFormat(trimmed) }}
      />
    )
  }

  flushList()
  flushOrdered()
  return <div>{elements}</div>
}

export default function UpdatePage({ params }: { params: { id: string } }) {
  const update = getUpdateById(params.id)
  if (!update) notFound()

  return (
    <div className="min-h-screen bg-slate-950 text-slate-50">
      {/* Header */}
      <div className="bg-gradient-to-br from-slate-950 via-cyan-950/40 to-indigo-950/60 py-16">
        <div className="mx-auto max-w-3xl px-6">
          <Link
            href="/updates"
            className="inline-flex items-center text-sm text-slate-400 hover:text-cyan-400 transition-colors mb-6"
          >
            <span className="mr-1">&larr;</span> Back to Updates
          </Link>

          <div className="flex items-center gap-3 mb-4">
            <span className="inline-block rounded-full bg-rose-500/10 border border-rose-500/20 px-3 py-1 text-xs font-medium text-rose-400">
              {update.category}
            </span>
            <span className="text-sm text-slate-500">{update.date}</span>
          </div>

          <h1 className="text-4xl font-extrabold tracking-tight text-white mb-4">
            {update.title}
          </h1>

          <p className="text-lg text-slate-400">{update.description}</p>
        </div>
      </div>

      {/* Content */}
      <div className="mx-auto max-w-3xl px-6 py-12">
        <article className="rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 p-8 md:p-10">
          <MarkdownRenderer content={update.content} />
        </article>

        {/* Tags */}
        <div className="mt-8 flex flex-wrap gap-2">
          {update.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-white/5 border border-white/10 px-3 py-1 text-xs text-slate-500"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Navigation */}
        <div className="mt-12">
          <Link
            href="/updates"
            className="text-sm text-slate-400 hover:text-cyan-400 transition-colors"
          >
            &larr; All Updates
          </Link>
        </div>
      </div>
    </div>
  )
}
