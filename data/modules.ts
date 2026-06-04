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
  content: `## Imagine Having a Super-Smart Assistant Who Never Sleeps (And Doesn't Steal Your Lunch)

Picture this: You walk into your office Monday morning, and your emails are sorted by priority, social media posts are scheduled for the week, customer questions already have draft responses, and your calendar is optimised for deep work.

That's not a fantasy. That's AI working for you — today, for free, in under 10 minutes. And unlike that intern you had last summer, this one doesn't need coffee breaks or ask about your weekend plans.

---

## The 30-Second AI Demo

Open ChatGPT (free, no account needed for this). Paste this:

> *"I run a [your business type]. List 5 boring, repetitive tasks I do every week that AI could handle for me. For each one, name a specific free tool and give me the exact first prompt I should type."*

Watch what happens. Most people get chills the first time they see it.

---

## What AI Actually Is (No Jargon)

Think of AI as a **reasoning engine** — not a calculator, not a database, but something that can understand context, make judgments, and generate new content.

| Old Way | AI Way |
|---------|--------|
| Write emails from scratch | AI drafts 5 versions in seconds |
| Research competitors manually | AI analyses 20 sites in 1 minute |
| Create social posts one-by-one | AI generates a month's calendar |
| Debug code line by line | AI spots the bug and fixes it |
| Summarise long documents | AI gives you the 3 key points |

The magic isn't that AI is "smart" — it's that AI is **instant**. What takes you 30 minutes takes AI 10 seconds. Not 80% as good. Often better. (And it never shows up to a meeting saying "sorry, I was in another meeting.")

---

## Your First AI Win (5 Minutes)

**Task**: Generate a week of social media content.

**Prompt to copy-paste into ChatGPT**:

> *"Act as a social media manager for [your industry]. Create 5 LinkedIn posts for this week. Each post should:*
> *- Have a hook that stops the scroll*
> *- Share one actionable tip*
> *- End with a question to drive engagement*
> *- Be under 150 words*
> *Use a professional but warm tone. Start with Monday's post."*

**Why this works**: Instead of asking vaguely ("write social posts"), you've given the AI a role, format, constraints, and structure. This is the secret to every good AI interaction. It's the difference between "draw a horse" and "draw a horse wearing a top hat, riding a unicycle, on a Tuesday." Specificity matters.

---

## The Three Business Superpowers

### 1. Time Multiplication
Every hour you spend teaching an AI your workflow, you save 10 hours later. The most successful AI users treat it like an apprentice: show it once, it remembers forever.

### 2. Quality Amplification
AI removes the "blank page problem." Instead of staring at a cursor, you're editing something good into something great. The difference between good and great is easier than the difference between nothing and something.

### 3. Scale Without Headcount
Want to answer customer emails in 5 languages? Personalise outreach to 1,000 leads? AI does this today. Not next year. Today.

---

## 🛠️ Your 3-Step AI Adoption Plan

| Step | Action | Time | Impact |
|------|--------|------|--------|
| **1** | Try the social post prompt above | 5 min | Save 2 hrs/week |
| **2** | AI-automate one recurring task | 30 min | Save 5 hrs/week |
| **3** | Build a prompt library for your team | 2 hrs | Save 20 hrs/week across team |

---

## Why This Matters Right Now

The gap between AI leaders and laggards is widening fast. PwC's 2026 study found that **20% of companies are capturing 74% of AI's value**. The difference? They started — even imperfectly — while others were still planning.

You don't need to be a tech company. You don't need a data science team. You need to **start**. (And maybe cut one meeting from your calendar. You know the one — the one that could have been an email.)

---

**↳ Up next in the full course:** How to build custom GPTs for your specific business workflows, connect AI to your actual data (RAG), and automate multi-step processes with AI agents. Subscribers get the complete 50+ lesson curriculum, weekly updates, and a 5-tier badge system that makes learning genuinely addictive. (Warning: may cause uncontrollable urges to automate things unnecessarily.)`,

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
  lastUpdated: "2026-06-04",
  status: "published",
}
const aiFundamentals: Module = {
  id: "ai-fundamentals",
  title: "AI Fundamentals",
  description:
    "A comprehensive beginner's guide to the world of artificial intelligence — from simple explanations to actionable tips.",
  category: "ai-fundamentals",
  level: "beginner",
  content: `## How Computers Learned to Think (And Why Yours Still Asks for Updates at the Worst Time)

In 2012, a computer program saw a cat on YouTube. Not a labelled photo. Not a database search. It just watched 10 million videos and figured out what a cat looks like on its own.

That moment changed everything. (Also, it was probably watching cat videos instead of doing its actual job, which makes it remarkably similar to humans.)

Before that, computers only did what they were explicitly told. After that, they started teaching themselves.

---

## The Three Flavours of AI

### 🍦 Narrow AI (What We Have Now)
Every AI you've used — ChatGPT, Midjourney, Grammarly, Siri — is "Narrow AI." It's brilliant at one thing and useless at everything else. ChatGPT can write a sonnet but can't book a restaurant. That's fine. Narrow AI is incredibly useful.

### 🍦🍦 General AI (The Holy Grail)
A machine that can do anything a human can. Doesn't exist yet. Most experts say we're 10-30 years away. Ignore the hype.

### 🍦🍦🍦 Superintelligence (The Debate)
Smarter than all of humanity combined. Pure speculation. Not relevant to anything you'll build this year.

**Focus on Narrow AI. That's where 100% of business value lives today.**

---

## How AI Actually Works (In 60 Seconds)

Here's the simplest explanation you'll ever get:

**Traditional programming:** Human writes rules → Computer follows rules → Output

**AI/Machine Learning:** Data + desired output → Computer figures out the rules → Can now handle new data

The difference is that AI **discovers the patterns itself**. You don't tell it "if the customer spends over $500, send them a discount code." You show it 10,000 past transactions and it figures out who to target on its own.

---

## The Three Learning Styles

| Type | How it learns | Business example |
|------|--------------|------------------|
| **Supervised** | Learns from labelled examples | "Here are 1,000 emails marked 'spam' or 'not spam' — now classify a new one" |
| **Unsupervised** | Finds patterns without labels | "Here's your customer database — find me segments I didn't know existed" |
| **Reinforcement** | Learns through trial and error | "Here's a warehouse robot — figure out the fastest route by crashing a few times" |

---

## 🔬 Live Demo: See the Difference

Let's compare how a human and an AI approach the same task:

**Task**: Find which customer segments are most likely to churn next month.

**Human approach**: Look at a few spreadsheets, trust gut feeling, maybe check last month's numbers. Takes 2 hours. Gets it 60% right.

**AI approach**: Analyse 50 variables across 10,000 customers — login frequency, support tickets, payment history, feature usage, email opens — and identify the 4 variables that predict 89% of churn. Takes 30 seconds. Gets it 90% right.

**Who wins?** The person using AI. Always.

---

## The 80/20 of AI for Business

You don't need to understand neural networks, backpropagation, or transformers. You need to understand three things:

| Concept | What it means for you |
|---------|----------------------|
| **Better data = better AI** | Clean up your spreadsheets. AI is only as good as what you feed it. |
| **Garbage in = garbage out** | If your data is messy, your AI will be confused. Fix the data first. |
| **Start small, iterate fast** | Don't build the perfect AI system. Build something tiny, test it, improve it. |

---

## 🛠️ Your First AI Analysis

**Task**: Have AI analyse your business data.

**Prompt for ChatGPT (or Claude)**:

> *"I'm going to paste a sample of my customer data. I want you to:*
> *1. Identify any patterns or segments I might be missing*
> *2. Flag any data quality issues (missing fields, inconsistencies)*
> *3. Suggest 3 specific ways I could use this data with AI*
> *4. Tell me what additional data I should start collecting*
>
> *Here's the data:
> [paste a small sample of your customer/leads/products data]"*

**Why this works**: Most businesses have data goldmines they're ignoring. AI can spot opportunities in 10 seconds that would take a data analyst 2 days.

---

## The Three AI Myths (Debunked)

| Myth | Truth |
|------|-------|
| "AI will replace my job" | AI replaces *tasks*, not jobs. The people who use AI will replace those who don't. (Your job is safe. Your Excel-based busywork is not.) |
| "AI is too expensive" | ChatGPT is free. Many AI tools have generous free tiers. You can start for $0. That's less than a fancy coffee. |
| "AI is only for tech companies" | The biggest AI adopters are healthcare, finance, retail, and logistics. Every industry is being transformed. Even your uncle's plumbing business could use AI for scheduling. |

---

## What We've Covered

✅ How AI learns (supervised, unsupervised, reinforcement)
✅ Why Narrow AI is all that matters for business
✅ The 80/20: better data, start small, iterate fast
✅ A live demo prompt to analyse your own data
✅ The myths holding most people back

---

**↳ Up next in the full course:** Retrival-Augmented Generation — how to connect AI to your actual business documents so it can answer questions about your specific data. Plus building AI agents that handle multi-step workflows automatically. Subscribers get the full curriculum with 50+ lessons, weekly updates, and real-world projects.`,

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
  lastUpdated: "2026-06-04",
  status: "published",
}

const aiTerminology: Module = {
  id: "ai-terminology",
  title: "AI Terminology 101: Speaking the Language",
  description:
    "The essential AI words and phrases explained in plain English — no prior knowledge needed.",
  category: "ai-fundamentals",
  level: "beginner",
  content: `## Why You Need to Know These Words (Or: How to Sound Smart at Parties)

You don't need to be a programmer to use AI. But knowing 10 key terms turns you from someone who "tries AI" into someone who **commands** it.

Think of this like learning to drive. You don't need to know how an engine works. But you should know what the pedals do. Also, knowing the words makes you sound terrifyingly intelligent in meetings. Use "context window" three times in one sentence and watch people nod respectfully.

---

## The 10 Words You Actually Need

| Term | Plain English | Why It Matters |
|------|--------------|----------------|
| **LLM** | A giant brain trained on most of the internet. ChatGPT, Claude, and Gemini are all LLMs. | Every AI tool you'll use runs on an LLM. They're the engine. |
| **Prompt** | The message you type into the AI. That's it. A question, an instruction, a request. | Better prompts = better results. The whole point of this course. |
| **Token** | A chunk of text — roughly ¾ of a word. "Hello world" = 2 tokens. | Determines how much you can type and how long the AI's response can be. |
| **Context Window** | How much the AI can "remember" in one conversation. Like its short-term memory. | Bigger context = the AI can handle entire books, not just paragraphs. |
| **Hallucination** | When the AI confidently says something completely wrong. It sounds real but isn't. Like that coworker who nods along in meetings and then says something wildly incorrect with total conviction. | Always fact-check AI outputs. It's not lying — it's guessing confidently. |
| **Training** | The process of teaching an AI by showing it millions of examples. Like showing a child 10,000 pictures of dogs until they finally stop calling everything with four legs a "dog." | Happens once, before you ever use it. You don't need to do this. |
| **Inference** | When the AI uses its training to answer your question. | Every time you type a prompt, you're running inference. That's the magic. |
| **Fine-tuning** | Taking a pre-trained AI and teaching it extra stuff (like your company's writing style). | Advanced. Most people never need this. Useful for specialised tasks. |
| **Temperature** | How "creative" the AI is allowed to be. Low = predictable. High = surprising. | Low (0.1) for facts. High (0.8) for creative writing. Default is usually fine. |
| **API** | A way for programs to talk to each other. Lets you plug AI into your own apps. | Advanced. But this is how businesses automate with AI. |

---

## 🧠 A Quick Way to Sound Like You Know What You're Talking About

| Don't Say | Say Instead |
|-----------|-------------|
| "The AI chat thing" | "I'm using an LLM" |
| "It made stuff up" | "It hallucinated" |
| "I ran out of room" | "I hit the context limit" |
| "How creative is it?" | "What temperature setting?" |
| "Tell me about..." | "Here's my prompt..." |

---

## 🛠️ 30-Second Practice

Open ChatGPT or Claude right now. Type this:

> *"Explain the term 'context window' using a sandwich analogy. Keep it under 3 sentences."*

See? Now you already know enough to test whether the AI understands the concept correctly. That's the power of knowing the vocabulary.

---

## What We've Covered

✅ LLM — the engine behind every AI tool
✅ Prompt — the message you send
✅ Token — how AI measures text
✅ Context window — AI's short-term memory
✅ Hallucination — when AI is wrong but sounds right
✅ Temperature — how creative the AI gets`,

  duration: "5 min",
  durationMinutes: 5,
  learningOutcomes: [
    "Define 10 essential AI terms in plain English",
    "Recognise AI jargon when you hear it",
    "Understand what an LLM is and how it works",
    "Identify when an AI might be hallucinating",
  ],
  tags: ["terminology", "basics", "glossary"],
  dateAdded: "2026-06-04",
  lastUpdated: "2026-06-04",
  status: "published",
}

const aiToolkit: Module = {
  id: "ai-toolkit",
  title: "Your AI Toolkit: The 5 Tools You'll Use Every Day",
  description:
    "A no-nonsense guide to the most common AI tools — what they do, what they cost, and when to use each one.",
  category: "ai-fundamentals",
  level: "beginner",
  content: `## Stop Downloading Everything. Pick the Right Tool. (Your Computer Thanks You.)

There are thousands of AI tools. You need exactly five. Maybe six if you count the one that turns your selfies into renaissance paintings. (You don't need that one either.)

Each of these tools is free to start, runs in your browser, and solves a different problem. Learn these five and you cover 95% of what AI can do for you today. The other 5% is generating pictures of cats in space.

---

## The Big Five

| Tool | Best For | Free? | Also Try... |
|------|----------|-------|-------------|
| **ChatGPT** | Writing, analysis, coding, brainstorming, research | ✅ Free tier (GPT-3.5). $20/mo for GPT-4 | The most versatile. Start here. |
| **Claude** | Long documents, careful analysis, safe outputs | ✅ Free tier. $20/mo for Sonnet | Better than ChatGPT at handling 100+ page documents. |
| **Gemini** | Google integration, YouTube analysis, image understanding | ✅ Free tier | Great if you live in Google Workspace. |
| **Perplexity** | Research with citations — like a smart search engine | ✅ Free tier. $20/mo for Pro | It shows you *where* it got the information. |
| **Copilot** | Coding assistance inside VS Code / GitHub | ✅ Free tier | The standard for writing and understanding code. |

---

## 🔬 Demo: Same Question, Four Answers

To see how they differ, ask all four the same question:

> *"What are 3 emerging trends in [your industry] for 2026? Cite your sources."*

| Tool | What You'll Notice |
|------|-------------------|
| **ChatGPT** | Long, detailed answer. Good structure. May guess sources. |
| **Claude** | More cautious. Will say "I don't have real-time data" if it can't browse. Safer. |
| **Gemini** | Pulls from Google Search. More current. Links to actual articles. |
| **Perplexity** | Every claim has a citation. Best for research you need to verify. |

**The pro move:** Use Perplexity for research, then ChatGPT or Claude to turn that research into output.

---

## How to Choose

| You Want To... | Use This |
|----------------|----------|
| Write an email, blog post, or proposal | ChatGPT or Claude |
| Research a topic with verified sources | Perplexity |
| Analyse a 50-page PDF | Claude (huge context window) |
| Brainstorm ideas quickly | ChatGPT or Gemini |
| Write or debug code | Copilot or ChatGPT |
| Check facts with live search | Gemini or Perplexity |
| Draft social media content | ChatGPT |
| Summarise a YouTube video | Gemini |

---

## 🛠️ 30-Second Practice

Open **two** of these tools in separate tabs. Ask them both:

> *"Explain [a topic you understand well] in 3 sentences."*

Compare the answers. Notice how each tool has a different personality. This is the fastest way to learn which tool fits your brain.

---

## What We've Covered

✅ ChatGPT — the all-rounder. Start here.
✅ Claude — best for long documents and safe outputs
✅ Gemini — Google integration and live search
✅ Perplexity — research with citations
✅ Copilot — coding assistant
✅ How to pick the right tool for any task`,

  duration: "6 min",
  durationMinutes: 6,
  learningOutcomes: [
    "Name the 5 most important AI tools and their strengths",
    "Choose the right tool for any common task",
    "Compare output quality across different AI models",
    "Start using at least 2 AI tools immediately",
  ],
  tags: ["tools", "chatgpt", "claude", "beginner"],
  dateAdded: "2026-06-04",
  lastUpdated: "2026-06-04",
  status: "published",
}

const aiFirstConversation: Module = {
  id: "ai-first-conversation",
  title: "Your First AI Conversation: How to Talk to AI",
  description:
    "The simplest guide to having your first real conversation with an AI — and getting something useful out of it.",
  category: "ai-fundamentals",
  level: "beginner",
  content: `## You've Opened ChatGPT. Now What? (The Most Terrifying Blank Box in Technology)

This is the moment where most people freeze. They stare at the blank input box like it's a microphone at karaoke night. Then they type something like:

> *"Hello"*

And the AI says "Hello! How can I help you today?" and they think "Cool, now what?" and close the tab, never to return.

This lesson gives you a dead-simple formula for getting something useful every single time. No stage fright required.

---

## The Three-Question Formula

Every great AI conversation follows the same three steps:

| Step | What You Do | Example |
|------|-------------|---------|
| **1. Ask** | Type what you want — even if it's messy | "Help me write a happy birthday email for my boss" |
| **2. React** | Tell the AI what you like and don't like | "Too formal. Make it funnier." |
| **3. Refine** | Give one more direction | "Add a joke about golf. He loves golf." |

That's it. Ask, react, refine. You're now having an AI conversation.

---

## 🛠️ Live Demo: Your First Conversation

**Step 1**: Open ChatGPT and type exactly this:

> *"I need to write a short email. I'm recommending a colleague for a promotion. Give me a draft that I can personalise."*

**What happens**: The AI writes a solid draft email. It won't be perfect — but it gives you a 7/10 starting point instead of staring at a blank page.

**Step 2**: Now type:

> *"Shorten it. Make it sound more like me — casual but professional."*

**What happens**: The AI adjusts. It doesn't start over, it iterates.

**Step 3**: Type:

> *"Add a specific example of a project we worked on together. Use [project name] as a placeholder I can fill in."*

**What happens**: The AI adds the detail. Now you have a 9/10 email that needs 30 seconds of personalisation.

---

## The Golden Rule of AI Conversations

**The first response is never the best response.**

Treat the AI like a junior employee. It needs feedback. The magic doesn't happen on prompt #1 — it happens on the third or fourth exchange when the AI has learned what you actually want.

| Round | What to Say | Why |
|-------|-------------|-----|
| 1 | Your raw request | Gets the first draft |
| 2 | "Make it shorter / longer / funnier / more formal" | Narrows the direction |
| 3 | "Add [specific detail]. Remove [something]. Change the tone to [X]." | Polishes to exactly what you need |

---

## Three Things NOT to Worry About

| Don't Worry About | Why |
|-------------------|-----|
| **"Am I typing this wrong?"** | There's no wrong way. The AI adapts to you. |
| **"Will it remember previous chats?"** | Each conversation is fresh. AI has no memory of your other chats. |
| **"Am I being rude?"** | The AI doesn't have feelings. You can say "this is terrible, do it again" and it won't cry. (Try that with a human coworker.) |

---

## A Quick Safety Rule (Don't Be That Person)

Don't paste anything you wouldn't want the internet to see. AI companies use conversations to improve their models. No passwords, no financial data, no client lists unless you're on a paid plan with privacy guarantees.

---

## 🛠️ Your First Assignment

Before your next coffee break:

1. Open ChatGPT
2. Type exactly: *"I want to [do something]. Give me 3 ways AI can help. Show me the first prompt I should type for each."*
3. Pick one of the three and actually try it
4. React and refine until you're happy

You've just had your first productive AI conversation. Welcome to the future of work.

---

## What We've Covered

✅ The Ask → React → Refine formula
✅ Why the first response is never the best
✅ How to iterate toward great output
✅ Privacy basics: don't paste sensitive data
✅ Your first real AI conversation`,

  duration: "5 min",
  durationMinutes: 5,
  learningOutcomes: [
    "Have your first productive conversation with an AI",
    "Use the Ask → React → Refine formula",
    "Know how to iterate from a 7/10 response to a 9/10",
    "Understand basic AI safety and privacy practices",
  ],
  tags: ["beginner", "conversation", "first-steps"],
  dateAdded: "2026-06-04",
  lastUpdated: "2026-06-04",
  status: "published",
}

const promptEngineering101: Module = {
  id: "prompt-engineering-101",
  title: "Prompt Engineering 101: Mastering the Art of AI Communication",
  description:
    "Learn the foundational frameworks for getting consistent, high-quality results from any LLM.",
  category: "ai-fundamentals",
  level: "beginner",
  content: `## The Most Valuable Skill You'll Learn This Year (Seriously, This One)

Every day, millions of people type things like this into ChatGPT:

> *"Write a blog post about AI."*

And every day, they get back generic, forgettable, useless garbage. Then they shrug and say "AI isn't ready yet."

They're wrong. AI is ready. **Their prompting isn't.** It's like blaming the oven because you burned a frozen pizza.

The difference between a useless response and a mind-blowing one is 30 seconds of structured thinking. This lesson teaches you the framework that turns AI from a toy into a 10x productivity tool. (Or at least stops it from writing like a motivational poster.)

---

## The PREP Framework

There are four ingredients to every great prompt. Miss any and the AI guesses. Use all four and it delivers exactly what you need.

| Letter | Meaning | Example |
|--------|---------|---------|
| **P** | **Persona** — Who is the AI? | "Act as a senior marketing strategist" |
| **R** | **Request** — What exactly do you want? | "Write a 5-email nurture sequence" |
| **E** | **Examples** — Show the style/format | "Like this example: [paste one]" |
| **P** | **Parameters** — Constraints & rules | "200 words max, friendly tone, no jargon" |

---

## 🔬 Live Demo: PREP in Action

Let's see the difference. Same request, two different prompts.

### ❌ Without PREP
> *"Write an email about our new feature."*

**Result:** Generic, boring, sounds like every other SaaS email. Gets deleted. Unread. Into the void.

### ✅ With PREP
> *"Act as a senior copywriter for a B2B SaaS company. Write a launch email for our new AI-powered reporting feature. The tone should be excited but confident — like an Apple product reveal. Keep it under 150 words. Include a subject line, a pain point, the solution, and a single CTA. Here's the feature: it turns messy spreadsheets into beautiful dashboards automatically."*

**Result:** An email you could send immediately. Compelling, specific, on-brand.

---

## The Secret Weapon: Chain of Thought

Here's a single phrase that improves AI responses by up to 40%:

> **"Let's think step by step."**

Add it to the end of any complex prompt. It forces the AI to reason through the problem rather than jumping to a conclusion.

**Without it:** *"What's the best marketing strategy for a coffee shop?"* → Generic answer about loyalty cards.

**With it:** *"What's the best marketing strategy for a coffee shop? Let's think step by step."* → The AI considers location, demographic, seasonality, local competition, and budget before giving a tailored recommendation.

---

## 🛠️ Your First Advanced Workflow

Let's build a **Meeting Summarizer** — one of the most practical AI tools you'll ever use.

**The goal:** Turn any meeting transcript into actionable notes in 5 seconds.

**The prompt (copy-paste this):**

> *"Act as a professional executive assistant. I will provide a meeting transcript. Please:*
> *1. Summarise the 3 key decisions made*
> *2. List all action items with specific owners and deadlines*
> *3. Flag any risks or unresolved issues*
> *4. Suggest follow-up topics for the next meeting*
> *5. Format this as a clean markdown document*
>
> *Let's think step by step to ensure nothing is missed.*
>
> *Here is the transcript:
> [paste your transcript here]"*

**Try it right now.** Paste a real transcript from your last meeting. The result will be better than what your executive assistant would produce — and it takes 5 seconds.

---

## The 5 Prompt Patterns Every Pro Knows

| Pattern | When to use | Example |
|---------|------------|---------|
| **Role-play** | Need expert-level output | "Act as a Fortune 500 CFO reviewing this budget" |
| **Format-first** | Need specific structure | "Respond as a JSON object with keys: summary, action_items, risks" |
| **Few-shot** | Have a style example | "Here are 3 examples of the tone I want. Now write a 4th." |
| **Constraint bomb** | AI is being too creative | "Strictly 100 words. No adjectives. Use only data from this document." |
| **Iterative refine** | First result is close but not perfect | "Good, but make it more formal and add a table of contents." |

---

## The Single Most Important Prompting Lesson

**AI doesn't read your mind. It reads your words.** (Which is unfortunate, because if it could read your mind, you wouldn't have to write so many emails.)

Every vague word in your prompt is an invitation for the AI to guess. Every specific word is a constraint that forces quality.

| Instead of... | Write... | Why it matters |
|--------------|----------|----------------|
| "Write something about..." | "Write a 3-paragraph analysis of..." | Specifics constrain the output |
| "Make it good" | "Use a professional but warm tone" | Good is subjective; tone is actionable |
| "A few ideas" | "Exactly 5 ideas, each with a 1-sentence explanation" | Numbers force completeness |
| "I need help with..." | "Act as a [role] and help me with [specific task] under [constraints]" | Role + task + constraints = magic |

---

## Your Cheat Sheet (Screenshot This)

Before you write any prompt, ask yourself:

☐ **Persona** — Who is the AI supposed to be?
☐ **Request** — What is the exact deliverable?
☐ **Examples** — Have I shown the format I want?
☐ **Parameters** — What are my constraints (length, tone, format)?
☐ **Chain of thought** — Did I add "let's think step by step"?

Follow this checklist for one week. You will never go back to vague prompting. (Your coworkers will wonder why your emails suddenly sound like they were written by a team of professional copywriters. They don't need to know.)

---

## What We've Covered

✅ The PREP framework (Persona, Request, Examples, Parameters)
✅ Chain of thought prompting (+40% accuracy)
✅ Your own Meeting Summarizer workflow
✅ 5 pro-level prompt patterns
✅ The one rule that changes everything

---

**↳ Up next in the full course:** Advanced Prompt Engineering — structured outputs, system prompts, prompt chains, and multi-step reasoning for complex business workflows. Plus building custom GPTs that embed your business knowledge. Subscribers get hands-on projects, downloadable prompt libraries, and weekly prompt challenges.`,

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
  lastUpdated: "2026-06-04",
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

const automatingEverydayTasks: Module = {
  id: "automating-everyday-tasks",
  title: "Automating Everyday Business Tasks with AI",
  description:
    "Discover how to use free and low-cost AI tools to automate repetitive tasks and reclaim hours each week.",
  category: "ai-automation",
  level: "beginner",
  content: `Every small business owner wears too many hats. The good news? AI can take over the repetitive, time-consuming work so you can focus on growing your business.

## What Can You Automate Today?

The sweet spot for AI automation is tasks that are **repetitive, structured, and don't require deep human judgment**. Here are the top candidates for any SMB:

### 1. Email Management
- **Auto-reply drafting**: Have AI draft replies based on email content
- **Inbox sorting**: Categorize emails (urgent, customer inquiry, spam)
- **Follow-up reminders**: AI can track which emails need a response

### 2. Social Media Scheduling
- **Content generation**: Ask AI to write posts based on your blog or product updates
- **Calendar planning**: Let AI suggest optimal posting times
- **Hashtag research**: Automatically find trending hashtags in your industry

### 3. Customer Inbox Responses
- **FAQ handling**: Auto-respond to common questions
- **Appointment scheduling**: AI can handle booking requests 24/7
- **Order status updates**: Automatically inform customers about their orders

## Getting Started: The 5-Minute Automation

Try this right now:

**The "Delegate to AI" exercise:**
1. Pick one task you do daily that takes 15+ minutes
2. Open your favorite AI tool (ChatGPT, Claude, Gemini)
3. Describe the task in detail and ask the AI to do it
4. Review and refine the output

**Example prompt:**
> "I own a small bakery and spend 20 minutes every morning writing the daily specials board for social media. Create 5 templates I can reuse — each should include the flavor description, price, and a mouth-watering closing sentence. Keep each under 50 words."

## Building a Simple Automation Workflow

You don't need to code to build powerful automations. Tools like **Zapier** and **Make (formerly Integromat)** connect AI with your existing apps.

**Real-World Example: New Review → Social Proof Post**

1. A customer leaves a 5-star Google Review
2. Zapier detects the review and sends it to ChatGPT
3. ChatGPT rewrites it as a social media testimonial post
4. The post gets drafted and queued in your social scheduler

**No coding required.** Set-up time: ~20 minutes. Hours saved per month: countless.

## Your 7-Day Automation Plan

| Day | Task |
|-----|------|
| Day 1 | Audit your week — write down everything you do for 3 days |
| Day 2 | Circle tasks that feel repetitive |
| Day 3 | Ask an AI tool to do one circled task |
| Day 4 | Refine the AI output to match your voice |
| Day 5 | Connect AI + Zapier for one task |
| Day 6 | Add a second automation |
| Day 7 | Review time saved and plan next week |

**Remember**: Automation is a marathon, not a sprint. Start with one task, get it working, then expand.`,
  duration: "10 min",
  durationMinutes: 10,
  learningOutcomes: [
    "Identify the top repetitive tasks in your business ripe for AI automation",
    "Use AI to draft emails, social posts, and customer responses",
    "Set up a no-code automation workflow with tools like Zapier",
    "Create a 7-day plan to automate at least one business process",
  ],
  tags: ["automation", "productivity", "zapier", "smb-tools"],
  dateAdded: "2026-05-31",
  lastUpdated: "2026-05-31",
  status: "published",
}

const aiCustomerService: Module = {
  id: "ai-customer-service",
  title: "AI-Powered Customer Service for SMBs",
  description:
    "Set up intelligent, always-on customer support using AI chatbots, knowledge bases, and smart ticketing — without breaking the bank.",
  category: "ai-automation",
  level: "intermediate",
  content: `Your customers expect answers fast — 24 hours a day, 7 days a week. For small businesses, staffing round-the-clock support is impossible. AI-powered customer service bridges that gap affordably.

## Why AI Customer Service Matters for SMBs

| Challenge | AI Solution |
|-----------|-------------|
| Customers ask the same questions repeatedly | AI chatbot answers instantly from your FAQ |
| Support team is overwhelmed during rush hours | AI handles first-line inquiries, escalates complex ones |
| Missed leads after hours | 24/7 automated responses capture every inquiry |
| Inconsistent answers between team members | AI responses stay on-brand and accurate |

## Building Your AI Support Stack

### Tier 1: Smart FAQ with AI

The easiest win. Take your most common questions and feed them into an AI chatbot.

**Tools to try:**
- **Tidio AI** — Affordable chatbot for e-commerce ($25/mo)
- **Intercom Fin** — Powerful AI agent for support ($39/mo)
- **Chatbase** — Build a custom chatbot from your website content (free tier available)

**Setup prompt for your custom bot:**
> "You are the customer support AI for [Business Name]. We sell [products/services] and our top FAQ topics are: shipping times (2-5 business days), return policy (30-day no-questions-asked), and sizing (see size chart at /size-guide). Answer every question using only the provided knowledge base. If you don't know, escalate to a human."

### Tier 2: AI + Human Handoff

Not every question should be answered by AI. Design a clear escalation path:

Customer Inquiry -> AI Chatbot -> Can answer? -> Instant reply
                                      |
                                      No
                                      v
                             Smart Ticketing System
                          (categorizes, prioritizes, routes)
                                      |
                                      v
                             Human Support Agent
                          (with AI-drafted response ready)

### Tier 3: Proactive AI Support

Go beyond reactive. Use AI to reach out before customers ask for help.

- **Order delay notifications**: AI monitors shipping data and proactively emails customers
- **Onboarding sequences**: New customers get automated tips and walkthroughs
- **Review requests**: AI sends personalized follow-ups after purchase or support resolution

## Real-World Workflow: The 30-Minute Chatbot Setup

**Goal**: Launch a basic AI customer support chatbot on your website in under an hour.

1. **Collect your top 20 FAQs** from email and chat history (10 min)
2. **Create a knowledge base document** with clear answers (10 min)
3. **Paste it into Chatbase or Tidio** as your bot's training data (5 min)
4. **Set the fallback message**: "I'm not sure about that — let me connect you with a human" (2 min)
5. **Add the chat widget** to your website (copy-paste a script snippet) (3 min)

**That's it.** You now have 24/7 customer support running on your site.

## Metrics to Track

| Metric | Target | Why It Matters |
|--------|--------|----------------|
| First response time | < 10 seconds | Customer satisfaction |
| Resolution rate | 60%+ handled by AI | Cost savings |
| Escalation rate | < 40% sent to human | Chatbot effectiveness |
| Customer satisfaction | Same as human support | Quality assurance |`,
  duration: "15 min",
  durationMinutes: 15,
  learningOutcomes: [
    "Design a 3-tier AI customer support stack for your business",
    "Set up an AI chatbot from your existing FAQ content",
    "Implement smart human handoff with context preservation",
    "Track key metrics to measure AI support effectiveness",
  ],
  tags: ["customer-service", "chatbot", "automation", "support"],
  dateAdded: "2026-05-31",
  lastUpdated: "2026-05-31",
  status: "published",
}

const dataPreparationForAI: Module = {
  id: "data-preparation-for-ai",
  title: "Preparing Your Business Data for AI",
  description:
    "Learn how to clean, organize, and structure your business data so AI tools can actually use it effectively.",
  category: "ai-data",
  level: "intermediate",
  content: `AI is only as good as the data it receives. Garbage in, garbage out — it's the #1 reason AI projects fail in small businesses. This lesson will teach you how to prepare your data so AI can deliver real results.

## The Data Hierarchy for AI

Not all data is equally useful. Rank your business data by value:

1. **Tier 1 (Highest Value)**: Transaction records, CRM data, customer support logs
2. **Tier 2 (High Value)**: Product catalogs, inventory lists, pricing sheets
3. **Tier 3 (Medium Value)**: Marketing emails, social media posts, blog content
4. **Tier 4 (Supporting)**: Website analytics, PDF manuals, internal wikis

## Step 1: Clean Your Data

Messy data = messy AI results. Run through this checklist:

### Remove Duplicates

Before — duplicate customer entries:
  ID, Name, Email, Purchase
  001, John Smith, john@email.com, $50
  001, John Smith, john@email.com, $50  (duplicate!)

After:
  ID, Name, Email, Purchase
  001, John Smith, john@email.com, $50

### Standardize Formats
- **Dates**: Make sure every date is YYYY-MM-DD (not a mix of "Jan 5, 2026" and "01/05/26")
- **Names**: Split "John Smith" consistently — or keep as full name, but pick one format
- **Currencies**: Use one currency format: $50.00 not "50 dollars" or "50 USD"

### Fix Missing Values
- **Bad**: Blank cells, "N/A", "unknown", "-"
- **Good**: Decide a convention. For numerical data, use 0 or NULL. For text, use "Unknown"
- **Best**: Fill in missing data wherever you can from other records

## Step 2: Organize Your Data for AI

AI tools work best with structured data. Here's how to structure common business datasets:

### Customer Data

  customer_id, first_name, last_name, email, purchase_total, lifetime_orders, last_purchase_date, segment
  C001, Maria, Garcia, maria@email.com, 2500, 12, 2026-04-15, high-value
  C002, Alex, Chen, alex@email.com, 350, 2, 2025-11-20, new

### Product Data

  sku, name, category, price, cost, stock_count, is_active
  SKU-1001, Ergonomic Chair, Furniture, 349.00, 210.00, 45, true
  SKU-1002, Desk Lamp, Furniture, 79.00, 42.00, 120, true

## Step 3: Create a Simple Data Pipeline

You don't need a data engineer. Here's a practical pipeline any SMB can implement:

1. **Collect** — Use your existing tools (Square, Shopify, QuickBooks, HubSpot)
2. **Export** — Most tools can export to CSV or Excel
3. **Clean** — Use Google Sheets or Excel to apply the checklist above
4. **Store** — Save clean CSVs in Google Drive or Dropbox
5. **Use** — Upload to AI tools, chatbots, or analytics dashboards

**Pro Tip**: Create a monthly "Data Health Day" — spend 1 hour cleaning and updating your exports.

## Real-World Example: From Messy Data to AI Insights

**Before**: A local retailer exported their sales data and found dates like "2/3/26", "March 5th", and "2026/01/15" in the same column. No customer IDs. Product names were inconsistently spelled ("T-shrt", "Tee", "T-Shirt").

**After cleaning**: Standardized dates (2026-01-15), assigned customer IDs, normalized product names, and ran it through an AI analysis tool.

**Result**: The AI spotted that T-shirt sales spiked every Friday afternoon — leading to a targeted email campaign every Thursday evening that increased weekend sales by 23%.

## Quick Data Readiness Checklist

Before feeding data to any AI tool, ask:

- [ ] Are all column names clear and consistent?
- [ ] Are dates in a single format?
- [ ] Are there no blank rows where I expect data?
- [ ] Are numbers stored as numbers (not text)?
- [ ] Have I removed obvious duplicates?
- [ ] Is sensitive data (names, emails, SSNs) properly handled?
- [ ] Do I understand what each column means?

Check all 7 boxes, and your AI is ready to deliver.`,
  duration: "15 min",
  durationMinutes: 15,
  learningOutcomes: [
    "Identify and rank business data sources by AI-readiness value",
    "Clean and standardize messy data using a repeatable checklist",
    "Structure CSV data for optimal AI consumption",
    "Build a simple monthly data pipeline for your small business",
  ],
  tags: ["data-prep", "data-cleaning", "csv", "analytics"],
  dateAdded: "2026-05-31",
  lastUpdated: "2026-05-31",
  status: "published",
}

const contentMarketingWithAI: Module = {
  id: "content-marketing-with-ai",
  title: "Content Marketing with AI: From Strategy to Publication",
  description:
    "Build a complete AI-assisted content marketing engine — research, draft, edit, and publish consistently without burning out.",
  category: "ai-strategy",
  level: "intermediate",
  content: `Consistent content marketing is one of the highest-ROI activities for SMBs — but it's also the first thing dropped when things get busy. AI can be your content co-pilot, not your replacement.

## The AI Content Marketing Funnel

The best approach is human-led, AI-assisted. You drive the strategy; AI handles the heavy lifting:

Research -> Outline -> Draft -> Edit -> Optimize -> Publish -> Analyze
   |            |          |       |         |           |          |
   AI        AI+Draft     AI     You+AI      AI         You        AI

## Phase 1: Research with AI

Before writing anything, understand what your audience wants.

### Topic Discovery
Ask AI:
> "I run a [business type]. My customers are [audience description]. What are 20 content topics they would find valuable? Focus on practical, actionable advice — no fluff."

### Keyword & SEO Research
Use AI tools like **Ahrefs free tools** or **AnswerThePublic**, plus this AI prompt:
> "For each of these topics, suggest 3 long-tail keyword phrases with search intent (informational, commercial, transactional). Format as a table."

### Competitor Content Analysis
> "Analyze this blog post from a competitor: [paste URL]. What angle are they using? What questions are they leaving unanswered? Suggest 3 ways I can cover this topic better for my audience."

## Phase 2: AI-Assisted Drafting

### The "Outline First" Method
Never ask AI to write a full post from scratch. Start with an outline.

**Prompt:**
> "Act as a content strategist for a [business type]. Create a detailed outline for a blog post titled '[Topic]'. Include:
> - The hook (3 options)
> - 5 main sections with bullet points for each
> - Key statistics or data points to include
> - A call-to-action idea
> - Target length: 1200 words"

### Section-by-Section Drafting
Once you approve the outline, generate one section at a time. This gives you control and quality.

**Prompt:**
> "Write Section 3 of the blog post '[Topic]'. The section is titled '[Section Title]'. Use a conversational but professional tone. Include a real-world example or analogy to make the point stick. Keep it to 3-4 paragraphs."

### Editing with AI
After you've written or assembled the draft, use AI as your editor:

> "Review this blog post draft for clarity, tone, and flow. Suggest:
> 1. A stronger opening hook
> 2. Any redundant paragraphs to cut
> 3. Places where I need more specific examples
> 4. A more compelling call-to-action
> Keep your feedback concise and actionable."

## Phase 3: Content Repurposing Engine

One piece of content → Many formats. This is where AI truly shines for SMBs.

**From a single blog post, AI can generate:**

| Format | AI Prompt |
|--------|-----------|
| 5 social media posts | "Turn this blog post into 5 LinkedIn posts, each with a hook, key insight, and CTA" |
| Email newsletter | "Write a 200-word email newsletter summarising this post with a link to read more" |
| 60-second video script | "Write a 60-second TikTok/Reel script covering the main point of this post" |
| Podcast talking points | "Create 5 discussion questions based on this post for a 15-minute podcast segment" |
| Customer FAQ entry | "Extract 3 common questions this post answers and format them as FAQ entries" |

## Real-World Workflow: The Weekly Content Loop

**Total time: 3 hours per week** (down from 8-10 hours without AI)

| Day | Task | AI Role | Time |
|-----|------|---------|------|
| Monday | Research topics & keywords | Brainstorm and analyze | 30 min |
| Tuesday | Outline and draft 1 post | Generate outline + sections | 60 min |
| Wednesday | Edit, add examples, fact-check | Suggest improvements | 45 min |
| Thursday | Repurpose into social/email | Generate 5+ formats | 30 min |
| Friday | Schedule and publish | Draft social captions | 15 min |

## Content Quality Checklist

Before publishing anything AI-assisted, verify:

- [ ] Does the content reflect YOUR voice and experience, not generic AI text?
- [ ] Are claims, stats, and examples verified (AI often fabricates)?
- [ ] Does it solve a specific problem for your customer?
- [ ] Is there a clear, human perspective or story?
- [ ] Does the CTA feel natural, not robotic?

**Rule of thumb**: If it reads like it could have been written by anyone, rewrite it. Your unique perspective is what makes content valuable.`,
  duration: "15 min",
  durationMinutes: 15,
  learningOutcomes: [
    "Build an AI-assisted content marketing workflow from research to publication",
    "Use the 'Outline First' method to maintain quality and control",
    "Repurpose a single piece of content into 5+ formats using AI",
    "Apply a content quality checklist to ensure human value in AI outputs",
  ],
  tags: ["content-marketing", "seo", "social-media", "strategy"],
  dateAdded: "2026-05-31",
  lastUpdated: "2026-05-31",
  status: "published",
}

const advancedPromptEngineering: Module = {
  id: "advanced-prompt-engineering",
  title: "Advanced Prompt Engineering: Structured Outputs, System Prompts & Multi-Step Reasoning",
  description:
    "Move beyond simple prompts. Learn structured output formatting, system prompt design, and multi-step reasoning chains for complex business tasks.",
  category: "ai-fundamentals",
  level: "advanced",
  content: `You know the basics of prompt engineering. Now it's time to level up. Advanced prompt engineering is what separates "AI as a toy" from "AI as a production tool" in your business.

## 1. Structured Outputs with JSON Mode

For business workflows, you need predictable, machine-readable output — not freeform text. JSON mode forces the AI to return structured data you can feed directly into your apps.

### Business Use Case: Automating Invoice Data Extraction

**Prompt:**
> Extract the following information from this invoice and return it as valid JSON with these fields: invoice_number (string), vendor_name (string), date (YYYY-MM-DD), line_items array (each with description, quantity, unit_price, total), subtotal (number), tax (number), total_due (number). Return ONLY valid JSON. No explanations, no extra text.

**Why this matters**: You can pipe the JSON output directly into QuickBooks, Xero, or a Google Sheet via API. Zero manual data entry.

### Other Structured Formats

| Format | Use Case | Example Prompt Request |
|--------|----------|----------------------|
| JSON | Data pipelines, APIs | "Return as JSON with fields: id, name, price" |
| Markdown table | Human-readable reports | "Format the comparison as a markdown table" |
| CSV | Spreadsheet import | "Output as CSV with headers: Product, Qty, Price" |
| YAML | Configuration files | "Return the settings as YAML" |
| XML | Legacy system integration | "Format as XML with root <products>" |

## 2. System Prompts: Your AI's Personality Manual

System prompts are the most powerful lever for production use. They set the rules, constraints, and behavior that apply to every user message.

### Template: The Business AI Assistant

System prompt template:

  You are an AI assistant for [Business Name], a [business type].
  You are helpful, concise, and professional.

  Core Rules:
  1. Never make up facts. If you don't know, say "I don't have that information."
  2. Always use company-approved terminology.
  3. Prioritize safety: never share customer data.
  4. Stay on brand: professional but warm, never robotic.

  Response Format:
  - For questions: Start with a direct answer, then provide context.
  - For requests: Acknowledge first, then deliver the output.
  - For errors: Apologize, explain, and offer an alternative.

  Knowledge Boundary:
  Only answer questions related to [Business Domain]. For off-topic questions,
  politely redirect: "I'm specialized in helping with [domain]. Can I help you with something related to that?"

### Pro Tips for System Prompts
- **Be prescriptive**: Tell the AI what TO do, not just what NOT to do
- **Use section headers**: "## Rules", "## Format", "## Knowledge" — structure helps the AI parse it correctly
- **Test edge cases**: "What if the user swears?" — Add a handling rule
- **Version control**: Save your system prompts in a Google Doc with dates

## 3. Multi-Step Reasoning Chains

Complex business problems need the AI to think through multiple steps. Chain-of-Thought is just the beginning.

### Technique: Decomposition with Sub-Agents

For complex analyses, break the task into sequential steps where each step's output feeds into the next.

**Multi-step workflow for competitive analysis:**

STEP 1 - Gather:
Prompt: "List the top 5 competitors in [industry] in [region]"
Output: List of competitors

STEP 2 - Compare:
Prompt: "For each competitor above, create a table comparing pricing model, target customer, key differentiator, and customer rating."
Output: Comparison table

STEP 3 - Analyze:
Prompt: "Based on this comparison, identify 3 gaps in the market that [Your Business] can exploit. Suggest specific strategies."
Output: Strategic recommendations

Each step narrows the focus and builds on the previous — dramatically improving output quality.

### Technique: Self-Critique Loop

Ask the AI to critique its own output and improve it.

> "Generate a draft email campaign for re-engaging dormant customers."
> *[AI produces draft]*
>
> "Now critique that draft. Identify 3 weaknesses in tone, clarity, or call-to-action."
> *[AI critiques its own work]*
>
> "Rewrite the email addressing all 3 weaknesses you identified."

This creates a **feedback loop** that produces much higher quality output than a single pass.

## 4. Few-Shot Prompting with Examples

Instead of describing what you want, show the AI examples. This is the most reliable way to get consistent output.

**Template:**

  You are an email classification assistant. For each email, classify it and return the category and priority.

  Example 1:
  Email: "I'd like to return order #12345, the shoes don't fit."
  Category: Returns
  Priority: Medium

  Example 2:
  Email: "Your product saved me hours! Here's a testimonial you can use."
  Category: Testimonial
  Priority: Low

  Example 3:
  Email: "I've been charged twice for my subscription. Fix this immediately."
  Category: Billing Issue
  Priority: High

  Now classify this email:
  Email: "[actual email content]"

## Real-World Workflow: The Customer Email Pipeline

Combine all techniques for a production-grade system:

1. **System Prompt** → Sets personality and rules for the AI
2. **Few-Shot Classification** → Routes email to correct department
3. **JSON Output** → Structured data for your CRM
4. **Self-Critique** → Improves draft quality before human review

**Result**: Incoming emails are classified, routed, and a draft response is ready before a human even opens the inbox.`,
  duration: "15 min",
  durationMinutes: 15,
  learningOutcomes: [
    "Design production-ready system prompts with rules and constraints",
    "Generate structured JSON outputs for automated data pipelines",
    "Implement multi-step reasoning chains with self-critique loops",
    "Use few-shot prompting with examples for reliable classification tasks",
  ],
  tags: ["prompt-engineering", "advanced", "JSON", "system-prompts"],
  dateAdded: "2026-05-31",
  lastUpdated: "2026-05-31",
  status: "published",
}

// ── Premium: Prompt Library ───────────────────────────────────────────────────

const promptLibrary: Module = {
  id: "prompt-library",
  title: "Building Your AI Prompt Library: The System That Saves 10 Hours a Week",
  description:
    "Stop writing prompts from scratch. Build a reusable prompt library that turns AI from a toy into a 10x productivity engine.",
  category: "ai-productivity",
  level: "intermediate",
  content: `## The Dirty Secret of AI Power Users

They don't write better prompts than you. They write the **same prompts** — over and over — until they're perfect. Then they save them in a library and reuse them forever.

The difference between someone who "tries AI" and someone who gets 10 hours back every week is a folder of tested, refined prompts. That's it.

This lesson walks you through building your own prompt library in under 30 minutes.

---

## Why a Prompt Library Changes Everything

| Without a Library | With a Library |
|------------------|----------------|
| Start from scratch every time | One-click access to proven prompts |
| Inconsistent results | Reliable, predictable output |
| Forget what worked last week | Iterate and improve over time |
| Waste 10 mins writing prompts | Spend 10 seconds running them |
| AI feels like a toy | AI feels like a 10x productivity tool |

---

## 🛠️ Step 1: Set Up Your System

You need three things:

1. **A place to store prompts** — Notion, Google Doc, or even a plain markdown file in your notes app. Start simple.
2. **A naming convention** — Every prompt needs a clear, searchable name.
3. **A testing workflow** — Use a prompt 3 times before adding it to your library.

**Your template for each prompt entry:**

| Field | Example |
|-------|---------|
| **Name** | "Meeting Summarizer" |
| **Category** | Productivity |
| **Best for** | Turning transcripts into action items |
| **The Prompt** | *"Act as an executive assistant. Summarise this transcript into decisions, action items, and risks. Format as markdown. Let's think step by step."* |
| **Notes** | Works best with Claude (longer context). Add attendees manually for accuracy. |

---

## 🛠️ Step 2: The 5 Prompts Everyone Needs

Start with these five. They cover 80% of everyday AI use:

### 1. The Better Email Writer
> *"Act as a professional copywriter. Rewrite the following email to be [shorter/more formal/more persuasive/warmer]. Keep my key points but improve the structure and tone. Here's my draft: [paste]"*

### 2. The Research Assistant
> *"I need to understand [topic]. Research it and give me: 1) A one-paragraph summary for beginners, 2) The 3 most important things to know, 3) 2-3 specific action items. Cite sources where possible."*

### 3. The Decision Framework
> *"Help me decide between [option A] and [option B]. Create a pros/cons table considering: cost, time, quality, risk. Give me a recommendation with your reasoning. Let's think step by step."*

### 4. The Brainstorming Engine
> *"I need [number] creative ideas for [goal]. For each idea, give me: a one-sentence summary, why it might work, and one potential risk. Be creative — don't just give me obvious answers."*

### 5. The Learning Accelerator
> *"I want to learn [topic]. Create a 30-day learning plan for a complete beginner. Include: what to study each week, specific resources (free), practice exercises, and how to know when I've 'got it'."*

---

## 🛠️ Step 3: Your Prompt Testing Cycle

A prompt isn't "done" until it's been tested 3 times with good results.

| Round | What to Check | Action |
|-------|---------------|--------|
| 1 | Does it produce usable output? | If no, add more structure |
| 2 | Does it work with different inputs? | If no, narrow the scope |
| 3 | Can someone else use it? | If no, add more examples |

**Pro tip:** After round 3, add the prompt to a shared company/team library. The real ROI multiplies when your whole team uses the same battle-tested prompts.

---

## What You're Building

By the end of this week:

- A searchable prompt library with 5+ tested prompts
- A template for adding new prompts
- A testing workflow that guarantees quality
- A system that saves you 10+ hours per week

The best part? Every prompt you add makes every future prompt faster. It's compounding productivity.

---

**↳ Up next:** Automating your prompt library with AI — connecting prompts together into workflows that run without you. Subscribers get access to a downloadable prompt library template, Notion template, and weekly prompt challenges.`,

  duration: "20 min",
  durationMinutes: 20,
  learningOutcomes: [
    "Set up a searchable prompt library in under 30 minutes",
    "Build 5 essential prompts that cover 80% of daily AI use",
    "Apply a 3-round testing cycle to guarantee prompt quality",
    "Create a system that compounds in value over time",
  ],
  tags: ["prompt-library", "productivity", "workflow", "intermediate"],
  dateAdded: "2026-06-04",
  lastUpdated: "2026-06-04",
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
- CEO/COO: For strategic alignment.
- CTO: For technical feasibility and data security.
- Head of Legal: For compliance and ethical oversight.
- Department Leads: To ensure the AI actually solves real-world pain points.`,
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
  aiTerminology,
  aiToolkit,
  aiFirstConversation,
  promptEngineering101,
  aiEthicsHallucinations,
  automatingEverydayTasks,
  // Intermediate
  promptLibrary,
  ragBasics,
  agenticWorkflows,
  aiCustomerService,
  dataPreparationForAI,
  contentMarketingWithAI,
  // Advanced
  aiStrategyRoi,
  governanceScaling,
  advancedPromptEngineering,
]

/** Total count for client-side consumption (avoids pulling entire module data into client bundles) */
export const TOTAL_MODULE_COUNT = ALL_MODULES.length

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
    duration: "1h",
  },
  {
    id: "intermediate-track",
    level: "intermediate",
    emoji: "⚙️",
    category: "intermediate",
    title: "Agentic Workflows",
    description:
      "Go beyond chat. Learn to build RAG systems, customer service bots, data pipelines, and content engines — all with AI.",
    lessons: INTERMEDIATE_MODULES.length,
    duration: "1h 15m",
  },
  {
    id: "advanced-track",
    level: "advanced",
    emoji: "🧠",
    category: "advanced",
    title: "Strategic AI",
    description:
      "How to lead an AI transformation, measure ROI, implement governance, and master advanced prompting techniques.",
    lessons: ADVANCED_MODULES.length,
    duration: "55 min",
  },
]
