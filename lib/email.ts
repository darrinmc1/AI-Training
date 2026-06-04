// lib/email.ts — Resend transactional send
// Install: npm i resend
//
// Usage:
//   import { sendWelcome, sendAdminNotification } from "@/lib/email";
//   await sendWelcome({ email, name });

import { Resend } from "resend";

const apiKey = process.env.RESEND_API_KEY;
const FROM = process.env.RESEND_FROM ?? "noreply@example.com";
const REPLY_TO = process.env.RESEND_REPLY_TO ?? undefined;
const SITE_NAME = process.env.NEXT_PUBLIC_SITE_NAME ?? "Our site";
const NOTIFY = process.env.NOTIFY_EMAIL; // e.g. darrinmc1@yahoo.com

const resend = apiKey ? new Resend(apiKey) : null;

type SendResult = { ok: true } | { ok: false; reason: string };

async function send(
  to: string | string[],
  subject: string,
  html: string
): Promise<SendResult> {
  if (!resend) {
    console.warn("[email] RESEND_API_KEY not set — skipping send");
    return { ok: false, reason: "resend_not_configured" };
  }
  const { error } = await resend.emails.send({
    from: FROM,
    to,
    subject,
    html,
    replyTo: REPLY_TO,
  });
  if (error) {
    console.error("[email] send failed", error);
    return { ok: false, reason: error.name ?? "send_error" };
  }
  return { ok: true };
}

export async function sendWelcome(args: { email: string; name?: string }) {
  const subject = `Welcome to ${SITE_NAME}`;
  const greeting = args.name ? `Hi ${args.name},` : "Hi there,";
  const html = `
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: 560px; margin: 0 auto; padding: 24px;">
      <h2 style="color: #2E4A7C;">Welcome to ${SITE_NAME}</h2>
      <p>${greeting}</p>
      <p>Thanks for signing up. You'll be the first to know about new modules, updates, and early-access features.</p>
      <p>If this wasn't you, just ignore this email and you won't hear from us again.</p>
      <p style="margin-top: 32px; color: #888; font-size: 14px;">— The ${SITE_NAME} team</p>
    </div>
  `;
  return send(args.email, subject, html);
}

export async function sendAdminNotification(args: {
  kind: "subscribe" | "feedback";
  payload: Record<string, unknown>;
}) {
  if (!NOTIFY) return { ok: false as const, reason: "notify_email_not_set" };
  const subject =
    args.kind === "subscribe"
      ? `[${SITE_NAME}] New subscriber`
      : `[${SITE_NAME}] New feedback`;
  const rows = Object.entries(args.payload)
    .map(
      ([k, v]) =>
        `<tr><td style="padding:4px 12px;color:#666;">${k}</td><td style="padding:4px 12px;"><code>${String(v)}</code></td></tr>`
    )
    .join("");
  const html = `
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: 560px;">
      <h3 style="color:#2E4A7C;">${subject}</h3>
      <table style="border-collapse:collapse;">${rows}</table>
    </div>
  `;
  return send(NOTIFY, subject, html);
}

// ── Weekly newsletter send ───────────────────────────────────────────────────

export async function sendWeeklyUpdate(args: {
  email: string
  name?: string
  updateTitle: string
  updateUrl: string
  tier: "founder" | "standard" | "premium"
}) {
  const greeting = args.name ? `Hi ${args.name},` : "Hi there,"
  const tierLabel = args.tier === "founder" ? "🚀 Founder" : args.tier === "standard" ? "⚡ Standard" : "🧠 Premium"
  const html = `
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: 600px; margin: 0 auto; padding: 32px 24px; background: #0f172a; color: #e2e8f0; border-radius: 16px;">
      <div style="text-align: center; margin-bottom: 32px;">
        <div style="font-size: 40px; margin-bottom: 8px;">🤖</div>
        <h1 style="font-size: 24px; font-weight: 800; color: #06b6d4; margin: 0;">AI Mastery Hub</h1>
        <p style="color: #64748b; font-size: 14px; margin: 4px 0 0;">Weekly AI Update — ${tierLabel}</p>
      </div>

      <h2 style="font-size: 20px; font-weight: 700; color: #f1f5f9; margin: 0 0 4px;">This Week in AI</h2>
      <p style="color: #94a3b8; font-size: 16px; line-height: 1.5; margin: 0 0 24px;">${args.updateTitle}</p>

      <a href="${args.updateUrl}" style="display: inline-block; padding: 12px 24px; background: linear-gradient(135deg, #06b6d4, #3b82f6); color: #fff; text-decoration: none; border-radius: 12px; font-weight: 700; font-size: 14px; margin-bottom: 32px;">Read the Full Update →</a>

      <div style="border-top: 1px solid #1e293b; padding-top: 24px; margin-top: 24px;">
        <p style="color: #64748b; font-size: 13px; margin: 0 0 8px;">
          ${args.tier === "founder"
            ? "🚀 You're on the Founder plan — your pricing is locked forever. New premium lessons and weekly updates included."
            : args.tier === "standard"
              ? "⚡ Standard plan: you get weekly updates + all current lessons + new lessons as they drop."
              : "🧠 Premium plan: everything in Standard + deep-dives, cheat sheets, early access, and monthly live Q&A."
          }
        </p>
        <p style="color: #475569; font-size: 12px; margin: 0;">
          AI Mastery Hub — Master the AI Revolution<br/>
          <a href="{{unsubscribe_url}}" style="color: #475569;">Unsubscribe</a>
        </p>
      </div>
    </div>
  `
  return send(args.email, `AI Weekly: ${args.updateTitle}`, html)
}
