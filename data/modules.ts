// =============================================================================
// MODULE / LESSON DATA — AI Mastery Hub
// =============================================================================
// Migrated from Hugo content/ directory. Full lesson text included as markdown.
// =============================================================================

export type ModuleLevel = "beginner" | "intermediate" | "advanced"

export interface Module {
  id: string
  title: string
  description: string
  category: string
  level: ModuleLevel
  content: string
  duration: string
  durationMinutes: number
  learningOutcomes: string[]
  tags: string[]
  dateAdded: string
  lastUpdated: string
  status: "published" | "draft"
}

// ---------------------------------------------------------------------------
// Beginner Modules
// ---------------------------------------------------------------------------

const whatIsAi: Module = {
  id: "what-is-ai",
  title: "What is AI and Why Your Business Needs It",
  description:
    "Discover what artificial intelligence really is and how it can transform your business starting today.",
  category: "ai-fundamentals",
  level: "beginner",
  content: `## Imagine Having a Super-Smart Assistant Who Never Sleeps

Picture this: You walk into your office Monday morning, and your emails are sorted, social media posts are scheduled, and you have a customer summary ready.

That's AI working for you.

## What Exactly IS Artificial Intelligence?

Think of AI as a smart computer program that can:
- Learn patterns from your business data
- Make predictions about customer behavior
- Handle repetitive tasks automatically
- Analyze information faster than humans

## Try This Today

Start with ChatGPT (free) and ask:
*"Write 5 social media posts for my [business type] targeting [your customers]"*

**Time**: 10 minutes
**Cost**: Free
**Impact**: Hours saved this week

## Next Steps

1. This week: Try ChatGPT for one business task
2. Next week: Explore industry-specific AI tools
3. This month: Implement your first automated workflow

Ready for more? Check out our Intermediate lessons to start implementing AI solutions.`,
  duration: "10 min",
  durationMinutes: 10,
  learningOutcomes: [
    "Understand what AI is in simple, practical terms",
    "Identify immediate business use cases for AI",
    "Complete your first AI-assisted task with ChatGPT",
    "Create a 3-step AI adoption plan for your workflow",
  ],
  tags: ["ai-basics", "business-ai", "getting-started"],
  dateAdded: "2025-01-09",
  lastUpdated: "2026-04-14",
  status: "published",
}

const aiFundamentals: Module = {
  id: "ai-fundamentals",
  title: "AI Fundamentals",
  description:
    "A comprehensive beginner's guide to the world of artificial intelligence — from simple explanations to actionable tips.",
  category: "ai-fundamentals",
  level: "beginner",
  content: `**Welcome to the World of Artificial Intelligence (AI): A Beginner's Guide**

Artificial intelligence is a rapidly evolving field that has revolutionized the way we live and work. As a fundamental technology, AI is transforming industries, businesses, and our daily lives in unprecedented ways. In this article, we'll delve into the basics of AI, exploring its simple explanation, why it matters for business, providing practical examples, and offering actionable tips to get you started.

## Simple Explanation

Imagine you're at a restaurant ordering food. You tell the waiter what you want (e.g., "I'd like a chicken sandwich, please"). The waiter takes note of your request and uses that information to prepare your meal. A few minutes later, the waiter brings out your dish. In this scenario, the waiter has used human intelligence to recognize your order and take action based on that understanding.

AI works in a similar way, but with machines learning from vast amounts of data. AI algorithms analyze patterns and relationships in data to make predictions, classify objects, or even control physical systems. The key difference lies in the type of intelligence: human-like reasoning and decision-making in AI, versus computational power and processing speed in traditional computers.

## Why it Matters for Business

Artificial intelligence is no longer a topic of debate; it's a necessary force in modern business. Here are just a few reasons why:

1. **Increased Efficiency**: AI can automate routine tasks, freeing up human resources to focus on high-value activities. This leads to increased productivity and competitiveness.
2. **Improved Accuracy**: AI-powered systems can detect patterns and anomalies that humans might miss, resulting in improved accuracy and reduced errors.
3. **Enhanced Decision-Making**: AI-driven insights can help businesses make data-driven decisions, reducing the risk of costly mistakes.
4. **Competitive Advantage**: Companies adopting AI early will have a significant advantage over those that don't, setting them up for long-term success.

## Practical Example

Let's consider a real-world example: online customer service chatbots. These AI-powered systems use natural language processing (NLP) to understand and respond to user queries. For instance, if a customer asks "Why is my order delayed?", the chatbot can analyze their previous interactions, product information, and weather forecasts to provide an accurate answer.

## Actionable Tips for Beginners

Now that you've got a solid understanding of AI fundamentals, here are three actionable tips to get you started:

### Tip 1: Learn the Basics of Machine Learning

Machine learning is a key component of AI. To become proficient in machine learning, start by exploring the following topics:

* Supervised learning: Understand how to train models on labeled data
* Unsupervised learning: Learn about clustering and dimensionality reduction techniques
* Deep learning: Discover the basics of neural networks and their applications

### Tip 2: Practice with AI-Powered Tools

There are many AI-powered tools available that can help you explore and learn more about AI. Some popular options include:

* Google Cloud AI Platform: Try out various machine learning models, including TensorFlow and PyTorch
* Microsoft Azure Machine Learning: Experiment with different algorithms and datasets
* Amazon SageMaker: Develop and deploy AI models using a range of programming languages

### Tip 3: Stay Up-to-Date with Industry News

The field of AI is rapidly evolving. To stay ahead of the curve, follow industry leaders, researchers, and news outlets:

* Follow AI experts on Twitter and LinkedIn
* Read blogs and articles from reputable sources like The New York Times, Forbes, and TechCrunch
* Attend conferences and workshops to network with peers and learn about the latest developments

## Conclusion

Artificial intelligence is a powerful tool that can revolutionize your business. By understanding its fundamentals, staying up-to-date with industry news, and practicing with AI-powered tools, you'll be well on your way to harnessing the benefits of AI for yourself or your organization.

As you embark on this exciting journey, remember that AI is not a replacement for human intelligence — it's an augmentation of our capabilities. By embracing AI, we can unlock new possibilities, drive innovation, and create a brighter future for all.`,
  duration: "15 min",
  durationMinutes: 15,
  learningOutcomes: [
    "Explain what AI is using simple analogies",
    "Understand why AI matters for modern business",
    "Differentiate between supervised, unsupervised, and deep learning",
    "Identify AI-powered tools to practice with",
  ],
  tags: ["ai", "business", "beginner", "tutorial"],
  dateAdded: "2025-08-11",
  lastUpdated: "2026-04-14",
  status: "published",
}

const promptEngineering101: Module = {
  id: "prompt-engineering-101",
  title: "Prompt Engineering 101: Mastering the Art of AI Communication",
  description:
    "Learn the foundational frameworks for getting consistent, high-quality results from any LLM.",
  category: "ai-fundamentals",
  level: "beginner",
  content: `Prompt engineering is the core skill of the AI era. It's not about "magic words," but about providing **structure, context, and intent** to a large language model.

## The PREP Framework

A simple way to structure any prompt is the **PREP** method:

1. **P - Persona**: Tell the AI who it should be (e.g., "Act as a senior marketing consultant").
2. **R - Request**: Be specific about the task (e.g., "Write a 3-paragraph email campaign...").
3. **E - Examples**: Give it a few examples of the style or format you want.
4. **P - Parameters**: Set constraints (e.g., "Keep it under 200 words, use a friendly tone").

## Pro Tip: Chain-of-Thought

Simply adding the phrase **"Let's think step by step"** to your prompt can significantly increase the reasoning accuracy of models like GPT-4 or Claude 3 Opus.

## Real-World Workflow: The Meeting Summarizer

**The Goal**: Turn a messy transcript into actionable notes.

**The Prompt**:
> "Act as a professional executive assistant. I am going to provide a transcript of a meeting. Please:
> 1. Summarize the 3 key decisions made.
> 2. List all action items with their respective owners.
> 3. Format this as a clean markdown table.
> Let's think step by step to ensure nothing is missed."`,
  duration: "12 min",
  durationMinutes: 12,
  learningOutcomes: [
    "Apply the PREP framework to structure any prompt",
    "Use chain-of-thought prompting for better reasoning",
    "Build a real-world meeting summarizer workflow",
    "Write prompts that produce consistent, high-quality output",
  ],
  tags: ["Prompt Engineering", "Foundations", "Productivity"],
  dateAdded: "2026-04-14",
  lastUpdated: "2026-04-14",
  status: "published",
}

const aiEthicsHallucinations: Module = {
  id: "ai-ethics-hallucinations",
  title: "AI Ethics & Hallucinations: Trusting (but verifying) AI",
  description:
    "Understand the limitations of AI, avoid common pitfalls, and maintain data privacy.",
  category: "ai-fundamentals",
  level: "beginner",
  content: `As powerful as AI is, it is not a "truth engine." It is a probabilistic model that predicts the next most likely word or pixel. This means it can, and will, make mistakes.

## What is a Hallucination?

A hallucination occurs when an AI confidently states a fact that is incorrect. This often happens because the AI is optimized to be helpful and conversational, leading it to "fill in the gaps" when it doesn't have specific data.

### How to spot them:
- **Check Citations**: AI often makes up realistic-sounding URLs or book titles.
- **Math & Logic**: LLMs still struggle with complex arithmetic and multi-step logic.
- **Recent Events**: If the model hasn't been updated recently, it may guess at current events.

## Data Privacy 101

Unless you are using an Enterprise or "Team" version of an AI tool, your data might be used to train future versions of the model.

**Rule of Thumb**: Never paste sensitive customer data, trade secrets, or personal identification numbers (SSNs, passwords) into a public AI chat.

## Real-World Workflow: The Verification Loop

Always treat AI output as a **draft**, not a finished product.

1. **Generate**: Ask the AI to draft the content.
2. **Review**: Look for claims that seem too specific or "too perfect."
3. **Verify**: Use a search engine or internal documents to confirm key facts.
4. **Refine**: Correct the AI and ask it to rewrite if necessary.`,
  duration: "10 min",
  durationMinutes: 10,
  learningOutcomes: [
    "Identify AI hallucinations and when they commonly occur",
    "Apply the Verification Loop to any AI-generated content",
    "Understand data privacy risks with public AI tools",
    "Establish safe AI usage policies for your team",
  ],
  tags: ["Safety", "Data Privacy", "Hallucinations"],
  dateAdded: "2026-04-14",
  lastUpdated: "2026-04-14",
  status: "published",
}

// ---------------------------------------------------------------------------
// Intermediate Modules
// ---------------------------------------------------------------------------

const ragBasics: Module = {
  id: "rag-basics",
  title: "Retrieval-Augmented Generation (RAG): Chatting with Your Data",
  description:
    "Learn how to connect AI to your private business documents safely and effectively.",
  category: "ai-data",
  level: "intermediate",
  content: `One of the biggest frustrations with AI is its "knowledge cutoff." **RAG (Retrieval-Augmented Generation)** solves this by allowing the AI to "read" your private documents before answering a question.

## Why use RAG instead of Fine-Tuning?

- **Cost**: RAG is significantly cheaper and faster than fine-tuning a model.
- **Accuracy**: It reduces hallucinations by forcing the AI to cite specific parts of your text.
- **Privacy**: You don't need to send your data to train a public model.

## How RAG Works (The Simple Version)

1. **The Library**: You store your documents (PDFs, Wikis, CSVs) in a "Vector Database."
2. **The Search**: When you ask a question, the system searches your library for the most relevant paragraphs.
3. **The Prompt**: The system sends your question *plus* those relevant paragraphs to the AI.
4. **The Answer**: The AI answers based *only* on the provided paragraphs.

## Real-World Workflow: The Internal Product Expert

**The Goal**: Help customer support agents find technical specs in a 500-page manual instantly.

**The Setup**:
- **Tools**: Pinecone or Weaviate (Vector DB), OpenAI API, and LangChain.
- **The Flow**:
    1. Agent asks: "Does the Model X support 240v power?"
    2. RAG system finds Page 42, Paragraph 3 of the Model X manual.
    3. AI responds: "Yes, according to the technical specs on page 42, Model X supports 240v power natively."`,
  duration: "15 min",
  durationMinutes: 15,
  learningOutcomes: [
    "Explain how RAG works and why it beats fine-tuning for most use cases",
    "Understand the role of vector databases in AI workflows",
    "Design a basic RAG pipeline for internal document search",
    "Evaluate when to use RAG vs. fine-tuning vs. prompt engineering",
  ],
  tags: ["RAG", "Vector Database", "Knowledge Base"],
  dateAdded: "2026-04-14",
  lastUpdated: "2026-04-14",
  status: "published",
}

const agenticWorkflows: Module = {
  id: "agentic-workflows",
  title: "Introduction to Agentic Workflows: From Chatbots to Agents",
  description:
    "Learn how to build semi-autonomous systems that handle multi-step business tasks.",
  category: "ai-automation",
  level: "intermediate",
  content: `In 2026, the value of AI has shifted from "talking" to "doing." **Agentic workflows** are systems designed to carry out a sequence of actions with minimal human intervention.

## What is an AI Agent?

Unlike a standard chatbot which responds to a single prompt, an agent follows a loop:

1. **Perceive**: Understand the goal and the available tools.
2. **Plan**: Break the goal into smaller, logical steps.
3. **Act**: Execute those steps using external tools (Email, CRM, Web Search).
4. **Reflect**: Check the output and adjust if the goal hasn't been met.

## The Power of Iterative Thinking

Standard workflows are linear (Step A -> Step B). Agentic workflows are **iterative**. If an agent drafts an email and realizes it's missing a key detail, it can "search" for that detail and rewrite the draft autonomously.

## Real-World Workflow: The Research & Outreach Agent

**The Goal**: Find 10 potential partners in a specific industry and draft personalized intro emails.

**How it works (using n8n or Python)**:

1. **Search Tool**: The agent searches Google for companies matching the criteria.
2. **Scraper Tool**: It visits the company websites to find their "About" section and mission.
3. **LinkedIn Tool**: It identifies a key contact (e.g., Head of Marketing).
4. **LLM Brain**: It synthesizes the company's mission and the contact's role into a tailored pitch.
5. **Output**: It saves the personalized drafts into a shared spreadsheet for your final approval.`,
  duration: "15 min",
  durationMinutes: 15,
  learningOutcomes: [
    "Define what an AI agent is and how it differs from a chatbot",
    "Understand the Perceive-Plan-Act-Reflect loop",
    "Design a multi-step agentic workflow using n8n or Python",
    "Identify business processes ripe for agentic automation",
  ],
  tags: ["Agents", "Workflows", "n8n", "Copilot"],
  dateAdded: "2026-04-14",
  lastUpdated: "2026-04-14",
  status: "published",
}

// ---------------------------------------------------------------------------
// Advanced Modules
// ---------------------------------------------------------------------------

const aiStrategyRoi: Module = {
  id: "ai-strategy-roi",
  title: "AI Strategy & ROI: Building a Sustainable Roadmap",
  description:
    "How to frame AI initiatives as business investments and measure their true impact.",
  category: "ai-strategy",
  level: "advanced",
  content: `For executives and strategic leaders, the question is no longer "should we use AI?" but "where will AI provide the highest return on investment (ROI)?"

## The AI Value Lever

Not all AI projects are created equal. Use this framework to categorize your initiatives:

1. **Efficiency Gains**: Reducing time/cost on existing tasks (e.g., automated support).
2. **Quality Uplift**: Improving the quality of output (e.g., AI-augmented medical diagnosis).
3. **New Revenue**: Creating products that weren't possible before (e.g., AI-personalized educational paths).

## Measuring ROI: Beyond "Time Saved"

While time-savings is the most common metric, it can be misleading if that time isn't reallocated to high-value work. Better metrics include:

- **Error Reduction Rate**: Specifically in high-stakes fields like legal or finance.
- **Speed to Market**: How much faster can you launch a new product or campaign?
- **Employee NPS**: Does the AI reduce burnout by removing "grunty" work?

## Real-World Workflow: The AI Governance Council

**The Goal**: Establish a cross-functional team to evaluate and approve AI projects.

**The Structure**:
- **CEO/COO**: For strategic alignment.
- **CTO**: For technical feasibility and data security.
- **Head of Legal**: For compliance and ethical oversight.
- **Department Leads**: To ensure the AI actually solves real-world pain points.`,
  duration: "20 min",
  durationMinutes: 20,
  learningOutcomes: [
    "Categorize AI initiatives using the Value Lever framework",
    "Measure ROI beyond simple time-savings metrics",
    "Structure an AI Governance Council for your organization",
    "Build a sustainable AI roadmap aligned with business strategy",
  ],
  tags: ["ROI", "Roadmap", "Leadership"],
  dateAdded: "2026-04-14",
  lastUpdated: "2026-04-14",
  status: "published",
}

const governanceScaling: Module = {
  id: "governance-scaling",
  title: "AI Governance & Scaling: Managing Enterprise Transformation",
  description:
    "Navigate the complex landscape of AI regulation, ethics, and human-machine collaboration at scale.",
  category: "ai-strategy",
  level: "advanced",
  content: `As AI moves from individual "pilots" to enterprise-wide infrastructure, the risks shift from "accuracy" to "governance." Scaling AI requires a robust framework for compliance and ethics.

## Navigating the Regulatory Landscape

In 2026, frameworks like the **EU AI Act** and various national guidelines have set clear boundaries for AI usage.

- **High-Risk Systems**: AI used in HR, education, or essential services requires rigorous testing and transparency.
- **Copyright & Provenance**: Ensuring that the data used for training and inference is legally compliant.

## Scaling the "Human-Machine" Collaboration

Transformation is not just about the tech; it's about the people.

1. **The AI Center of Excellence (CoE)**: A dedicated team to share best practices and standard templates across the company.
2. **Standardization**: Ensuring that every department uses the same base models or "system prompts" to maintain consistency.
3. **Continuous Auditing**: AI models "drift" over time. Regularly audit your agents to ensure they are still performing within ethical and accuracy bounds.

## Real-World Workflow: The AI Incident Response Plan

**The Goal**: Prepare for when (not if) an AI system makes a mistake.

**The Plan**:
- **Monitoring**: Automated alerts for high-hallucination probability or toxic output.
- **Human-in-the-Loop**: A clear "kill switch" and a path to escalate to a human expert.
- **Post-Mortem**: Analysis of why the error occurred and how to adjust the RAG database or system prompt to prevent it.`,
  duration: "20 min",
  durationMinutes: 20,
  learningOutcomes: [
    "Navigate the EU AI Act and key regulatory frameworks",
    "Design an AI Center of Excellence for your organization",
    "Implement continuous auditing for AI model drift",
    "Build an AI Incident Response Plan for enterprise use",
  ],
  tags: ["Compliance", "Scaling", "Risk Management"],
  dateAdded: "2026-04-14",
  lastUpdated: "2026-04-14",
  status: "published",
}

import { ALL_UPDATES } from "./updates"
import { ALL_TOOLS } from "./tools"

// ---------------------------------------------------------------------------
// Exports
// ---------------------------------------------------------------------------

export const ALL_MODULES: Module[] = [
  // Beginner
  whatIsAi,
  aiFundamentals,
  promptEngineering101,
  aiEthicsHallucinations,
  // Intermediate
  ragBasics,
  agenticWorkflows,
  // Advanced
  aiStrategyRoi,
  governanceScaling,
]

export const BEGINNER_MODULES = ALL_MODULES.filter((m) => m.level === "beginner")
export const INTERMEDIATE_MODULES = ALL_MODULES.filter((m) => m.level === "intermediate")
export const ADVANCED_MODULES = ALL_MODULES.filter((m) => m.level === "advanced")

export const MODULE_MAP = Object.fromEntries(ALL_MODULES.map((m) => [m.id, m])) as Record<
  string,
  Module
>

export function getModuleById(id: string): Module | undefined {
  return MODULE_MAP[id]
}

export function getModulesByLevel(level: ModuleLevel): Module[] {
  return ALL_MODULES.filter((m) => m.level === level)
}

export function getModulesByCategory(category: string): Module[] {
  return ALL_MODULES.filter((m) => m.category === category)
}

// ---------------------------------------------------------------------------
// Home Page View Models
// ---------------------------------------------------------------------------

/** Map updates to the structure expected by the Home Page UI */
export const latestUpdates = ALL_UPDATES.slice(0, 3).map((u) => ({
  ...u,
  emoji: u.category === "Security" ? "🛡️" : u.category === "Business Strategy" ? "📈" : "📰",
  tag: u.category,
}))

/** Map tools to the structure expected by the Home Page UI */
export const aiTools = ALL_TOOLS.map((t) => ({
  ...t,
  category: t.toolType,
}))

/** Define the structured learning tracks for the Home Page */
export const learningPaths = [
  {
    id: "beginner-track",
    level: "beginner",
    emoji: "🌱",
    category: "beginner",
    title: "AI Foundations",
    description:
      "Master the basics of AI, from understanding the core technology to writing your first expert prompts.",
    lessons: BEGINNER_MODULES.length,
    duration: "45 min",
  },
  {
    id: "intermediate-track",
    level: "intermediate",
    emoji: "⚙️",
    category: "intermediate",
    title: "Agentic Workflows",
    description:
      "Go beyond chat. Learn to build RAG systems and autonomous AI agents for your business processes.",
    lessons: INTERMEDIATE_MODULES.length,
    duration: "1h 30m",
  },
  {
    id: "advanced-track",
    level: "advanced",
    emoji: "🧠",
    category: "advanced",
    title: "Strategic AI",
    description:
      "How to lead an AI transformation, measure ROI, and implement enterprise-grade governance and scaling.",
    lessons: ADVANCED_MODULES.length,
    duration: "2h 45m",
  },
]
