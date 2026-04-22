import { notFound } from "next/navigation"
import Link from "next/link"
import { ALL_TOOLS, getToolById } from "@/data/tools"
import { siteConfig } from "@/lib/site-config"

export function generateStaticParams() {
  return ALL_TOOLS.map((tool) => ({ id: tool.id }))
}

export function generateMetadata({ params }: { params: { id: string } }) {
  const tool = getToolById(params.id)
  if (!tool) return { title: "Not Found" }
  return {
    title: `${tool.name} | ${siteConfig.name}`,
    description: tool.description,
  }
}

// Simple inline markdown formatter
function inlineFormat(text: string): string {
  return text
    .replace(/\*\*(.+?)\*\*/g, '<strong class="text-white font-semibold">$1</strong>')
    .replace(/\*(.+?)\*/g, '<em class="text-cyan-300">$1</em>')
}

function MarkdownRenderer({ content }: { content: string }) {
  const lines = content.split("\n")
  const elements: React.ReactNode[] = []
  let listBuffer: string[] = []

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

  for (let i = 0; i < lines.length; i++) {
    const trimmed = lines[i].trim()

    if (trimmed === "") {
      flushList()
      continue
    }

    if (trimmed.startsWith("### ")) {
      flushList()
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
      listBuffer.push(trimmed.slice(2))
      continue
    }

    flushList()
    elements.push(
      <p
        key={`p-${i}`}
        className="text-slate-300 leading-relaxed mb-4"
        dangerouslySetInnerHTML={{ __html: inlineFormat(trimmed) }}
      />
    )
  }

  flushList()
  return <div>{elements}</div>
}

export default function ToolPage({ params }: { params: { id: string } }) {
  const tool = getToolById(params.id)
  if (!tool) notFound()

  return (
    <div className="min-h-screen bg-slate-950 text-slate-50">
      {/* Header */}
      <div className="bg-gradient-to-br from-slate-950 via-cyan-950/40 to-indigo-950/60 py-16">
        <div className="mx-auto max-w-3xl px-6">
          <Link
            href="/tools"
            className="inline-flex items-center text-sm text-slate-400 hover:text-cyan-400 transition-colors mb-6"
          >
            <span className="mr-1">&larr;</span> Back to Tools
          </Link>

          <div className="flex items-center gap-4 mb-4">
            <span className="text-5xl">{tool.emoji}</span>
            <div>
              <h1 className="text-4xl font-extrabold tracking-tight text-white">
                {tool.name}
              </h1>
              <span className="inline-block mt-1 rounded-full bg-amber-500/10 border border-amber-500/20 px-3 py-1 text-xs font-medium text-amber-400">
                {tool.toolType}
              </span>
            </div>
          </div>

          <p className="text-lg text-slate-400 mb-6">{tool.description}</p>

          {/* Features */}
          <div className="rounded-xl bg-white/5 backdrop-blur-xl border border-white/10 p-5">
            <h3 className="text-sm font-semibold text-cyan-400 uppercase tracking-wide mb-3">
              Key Features
            </h3>
            <ul className="space-y-2">
              {tool.features.map((feature, i) => (
                <li key={i} className="flex items-start gap-2 text-slate-300 text-sm">
                  <span className="text-cyan-500 mt-0.5">&#10003;</span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="mx-auto max-w-3xl px-6 py-12">
        <article className="rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 p-8 md:p-10">
          <MarkdownRenderer content={tool.content} />
        </article>

        {/* Link */}
        <div className="mt-8">
          <a
            href={tool.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all"
          >
            Visit {tool.name} &rarr;
          </a>
        </div>

        {/* Tags */}
        <div className="mt-6 flex flex-wrap gap-2">
          {tool.tags.map((tag) => (
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
            href="/tools"
            className="text-sm text-slate-400 hover:text-cyan-400 transition-colors"
          >
            &larr; All Tools
          </Link>
        </div>
      </div>
    </div>
  )
}
