// =============================================================================
// AI TOOL PROFILES — AI Mastery Hub
// =============================================================================
// Migrated from Hugo content/tools/ directory.
// =============================================================================

export interface ToolProfile {
  id: string
  name: string
  description: string
  content: string
  toolType: string
  features: string[]
  link: string
  tags: string[]
  dateAdded: string
  emoji: string
}

const claude3Opus: ToolProfile = {
  id: "claude-3-opus",
  name: "Claude 3 Opus",
  description:
    "Anthropic's most intelligent model, surpassing GPT-4 on many benchmarks.",
  content: `Claude 3 Opus is Anthropic's flagship model, designed to handle highly complex tasks with industry-leading intelligence, reasoning, and creativity.

## Why it matters

Opus excels at open-ended questions and complex instructions. It has a high degree of nuance and is less likely to produce "preachy" or overly restricted responses compared to competitors.

### Key Features:
- **200k Context Window**: Process massive documents or entire codebases in one go.
- **Superior Reasoning**: High performance on Grade School Math and Graduate-level Reasoning.
- **Vision Capabilities**: Upload images, charts, and technical diagrams for analysis.`,
  toolType: "LLM / Assistant",
  features: [
    "200k context window",
    "Superior reasoning and coding",
    "Vision capabilities for image analysis",
    "Nuanced, less restricted responses",
    "Industry-leading benchmarks",
  ],
  link: "https://claude.ai",
  tags: ["Anthropic", "Coding", "Reasoning"],
  dateAdded: "2026-04-14",
  emoji: "\u{1F9E0}",
}

const n8nCopilotStudio: ToolProfile = {
  id: "n8n-copilot-studio",
  name: "n8n & Copilot Studio",
  description:
    "The core platforms driving the era of autonomous AI agents.",
  content: `The biggest trend of 2026 is the shift from **Chatbots** to **Agents**. While ChatGPT answers questions, these frameworks actually *do things*.

## Building the Future of Work

Platforms like **n8n** (open-source workflow automation) and **Microsoft Copilot Studio** are leading the charge in agentic development.

### n8n: The Orchestrator

n8n allows you to connect over 400+ third-party services (Slack, Salesforce, GitHub) to an AI "brain."

- **Example**: An n8n agent can monitor your inbox, research the sender's company on LinkedIn, summarize their latest news, and draft a personalized reply in your CRM autonomously.

### Microsoft Copilot Studio: The Corporate Standard

Integrated deeply into the Microsoft 365 ecosystem, Copilot Studio lets business users create agents that can:

- **Deploy Code**: Trigger CI/CD pipelines via natural language.
- **Manage Schedules**: Coordinate multi-person meetings across time zones.
- **Analyze Live Data**: Connect to PowerBI for real-time strategic insights.`,
  toolType: "Automation / Framework",
  features: [
    "400+ third-party service integrations (n8n)",
    "Open-source workflow automation",
    "Microsoft 365 deep integration",
    "Natural language CI/CD triggering",
    "PowerBI real-time analytics connection",
  ],
  link: "https://n8n.io",
  tags: ["n8n", "Microsoft", "Agents", "Low-Code"],
  dateAdded: "2026-04-14",
  emoji: "\u{1F916}",
}

const googleEloquent: ToolProfile = {
  id: "google-eloquent",
  name: "AI Edge Eloquent",
  description:
    "Google's local-first transcription and document polishing intelligence.",
  content: `Google has released **Eloquent**, an AI-powered transcription and dictation tool that runs entirely on-device, leveraging the latest TPU advancements in modern hardware.

## Beyond Simple Transcription

Eloquent doesn't just turn voice into text; it understands the *intent* of your speech.

### What makes it different?

- **Contextual Polishing**: It automatically removes filler words, fixes structural errors, and can even rewrite speech to match your existing writing style based on your local document history.
- **Private Learning**: It learns your specific industry terminology and jargon without ever sending that data to Google's servers.
- **Zero Latency**: Since it runs locally on your PC or phone, there is no delay and no need for an internet connection.

### How to use it

Eloquent is currently integrated into the latest builds of ChromeOS and Android, with a standalone Windows/Mac application in development.`,
  toolType: "Productivity",
  features: [
    "On-device transcription and dictation",
    "Contextual polishing and style matching",
    "Private learning of industry terminology",
    "Zero latency, zero cloud dependency",
    "ChromeOS and Android integration",
  ],
  link: "https://ai.google/blog",
  tags: ["Google", "Audio", "Transcription", "Local-First"],
  dateAdded: "2026-04-14",
  emoji: "\u{1F399}\uFE0F",
}

const midjourneyV6: ToolProfile = {
  id: "midjourney-v6",
  name: "Midjourney V6",
  description:
    "The gold standard for high-fidelity AI image generation.",
  content: `Midjourney V6 is the latest iteration of the world's most advanced image generation AI. It offers unprecedented realism, better prompt adherence, and higher image quality.

## Key Capabilities

- **Photorealism**: Create images that are virtually indistinguishable from real photography.
- **In-Image Text**: Improved ability to render legible text within generated images.
- **Parametric Control**: Fine-tune aspect ratios, stylize values, and chaos levels for unique results.

### How to access:

Midjourney currently operates primarily through Discord, with a web-based Alpha version rolling out to power users.`,
  toolType: "Image Generation",
  features: [
    "Photorealistic image generation",
    "Legible in-image text rendering",
    "Parametric control (aspect ratio, stylize, chaos)",
    "Discord-based workflow",
    "Web Alpha for power users",
  ],
  link: "https://midjourney.com",
  tags: ["Art", "Design", "Generative Art"],
  dateAdded: "2026-04-14",
  emoji: "\u{1F3A8}",
}

const warclaw: ToolProfile = {
  id: "warclaw",
  name: "WarClaw by Edgerunner AI",
  description:
    "A secure, offline-first operating layer for sensitive environments.",
  content: `WarClaw is a specialized "digital adjutant" designed for high-security environments where cloud connectivity is either unavailable or prohibited.

## Secure Edge Operations

Built atop the OpenClaw architecture, WarClaw provides a private, locally-hosted intelligence layer. It is increasingly being used in:

- **Field Operations**: Military and scientific research in remote areas.
- **Sensitive Infrastructure**: Power grid and utility management.
- **Corporate Espionage Protection**: High-stakes boardrooms and R&D labs.

### Key Features

- **Zero-Cloud Dependency**: Runs entirely on local hardware (optimized for NVIDIA Jetson and similar edge devices).
- **Hardened Kernel**: Specifically designed to resist prompt-injection and data-leaking attacks.
- **Multi-Sensor Fusion**: Can process data from cameras, thermal sensors, and RF scanners in real-time.`,
  toolType: "Security / Ops",
  features: [
    "Zero-cloud dependency, fully offline",
    "NVIDIA Jetson edge device optimization",
    "Hardened kernel against prompt injection",
    "Multi-sensor fusion (camera, thermal, RF)",
    "Military and critical infrastructure grade",
  ],
  link: "https://edgerunner.ai",
  tags: ["Offline AI", "Edge Computing", "Military Grade"],
  dateAdded: "2026-04-14",
  emoji: "\u{1F6E1}\uFE0F",
}

// ---------------------------------------------------------------------------
// Exports
// ---------------------------------------------------------------------------

export const ALL_TOOLS: ToolProfile[] = [
  claude3Opus,
  n8nCopilotStudio,
  googleEloquent,
  midjourneyV6,
  warclaw,
]

export const TOOL_MAP = Object.fromEntries(ALL_TOOLS.map((t) => [t.id, t])) as Record<
  string,
  ToolProfile
>

export function getToolById(id: string): ToolProfile | undefined {
  return TOOL_MAP[id]
}
