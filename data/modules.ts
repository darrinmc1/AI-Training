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

Not every question should be answered by AI. Design a clear escalation path.

```
Customer Inquiry
       │
       ▼
  AI Chatbot  ─── Can answer? ──► Instant reply
       │
       No
       ▼
  Smart Ticketing System
  (categorizes, prioritizes, routes)
       │
       ▼
  Human Support Agent
  (with AI-drafted response ready)
```

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
```csv
# Before: Duplicate customer entries
ID, Name, Email, Purchase
001, John Smith, john@email.com, $50
001, John Smith, john@email.com, $50  ← Duplicate!
```

```csv
# After
ID, Name, Email, Purchase
001, John Smith, john@email.com, $50
```

### Standardize Formats
- **Dates**: Make sure every date is `YYYY-MM-DD` (not a mix of "Jan 5, 2026" and "01/05/26")
- **Names**: Split "John Smith" consistently — or keep as full name, but pick one format
- **Currencies**: Use one currency format: `$50.00` not `50 dollars` or `50 USD`

### Fix Missing Values
- **Bad**: Blank cells, "N/A", "unknown", "-"
- **Good**: Decide a convention. For numerical data, use `0` or `NULL`. For text, use `"Unknown"`
- **Best**: Fill in missing data wherever you can from other records

## Step 2: Organize Your Data for AI

AI tools work best with structured data. Here's how to structure common business datasets:

### Customer Data
```csv
customer_id,first_name,last_name,email,purchase_total,lifetime_orders,last_purchase_date,segment
C001,Maria,Garcia,maria@email.com,2500,12,2026-04-15,high-value
C002,Alex,Chen,alex@email.com,350,2,2025-11-20,new
```

### Product Data
```csv
sku,name,category,price,cost,stock_count,is_active
SKU-1001,Ergonomic Chair,Furniture,349.00,210.00,45,true
SKU-1002,Desk Lamp,Furniture,79.00,42.00,120,true
```

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

```
Research → Outline → Draft → Edit → Optimize → Publish → Analyze
   │          │         │       │        │          │          │
   ▼          ▼         ▼       ▼        ▼          ▼          ▼
   AI        AI +     AI      You +    AI         You        AI
   Human     Draft    Human
```

The best approach is **human-led, AI-assisted**. You drive the strategy; AI handles the heavy lifting.

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
> Extract the following information from this invoice and return it as valid JSON:
> ```json
> {
>   "invoice_number": "string",
>   "vendor_name": "string",
>   "date": "YYYY-MM-DD",
>   "line_items": [
>     {
>       "description": "string",
>       "quantity": "number",
>       "unit_price": "number",
>       "total": "number"
>     }
>   ],
>   "subtotal": "number",
>   "tax": "number",
>   "total_due": "number"
> }
> ```
> Return ONLY valid JSON. No explanations, no extra text.

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

```
You are an AI assistant for [Business Name], a [business type].
You are helpful, concise, and professional.

## Core Rules
1. Never make up facts. If you don't know, say "I don't have that information."
2. Always use company-approved terminology.
3. Prioritize safety: never share customer data.
4. Stay on brand: professional but warm, never robotic.

## Response Format
- For questions: Start with a direct answer, then provide context.
- For requests: Acknowledge first, then deliver the output.
- For errors: Apologize, explain, and offer an alternative.

## Knowledge Boundary
Only answer questions related to [Business Domain]. For off-topic questions, politely redirect: "I'm specialized in helping with [domain]. Can I help you with something related to that?"
```

### Pro Tips for System Prompts
- **Be prescriptive**: Tell the AI what TO do, not just what NOT to do
- **Use section headers**: `## Rules`, `## Format`, `## Knowledge` — structure helps the AI parse it correctly
- **Test edge cases**: "What if the user swears?" → Add a handling rule
- **Version control**: Save your system prompts in a Google Doc with dates

## 3. Multi-Step Reasoning Chains

Complex business problems need the AI to think through multiple steps. Chain-of-Thought is just the beginning.

### Technique: Decomposition with Sub-Agents

For complex analyses, break the task into sequential steps where each step's output feeds into the next.

**Multi-step workflow for competitive analysis:**

```
STEP 1: Gather
Prompt: "List the top 5 competitors in [industry] in [region]"
Output: [List of competitors]

STEP 2: Compare
Prompt: "For each competitor above, create a table comparing:
- Pricing model
- Target customer
- Key differentiator
- Customer rating"
Output: [Comparison table]

STEP 3: Analyze
Prompt: "Based on this comparison, identify 3 gaps in the market that [Your Business] can exploit. Suggest specific strategies."
Output: [Strategic recommendations]
```

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
```
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
```

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
  promptEngineering101,
  aiEthicsHallucinations,
  automatingEverydayTasks,
  // Intermediate
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
