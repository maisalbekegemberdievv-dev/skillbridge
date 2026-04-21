import { appendFile, mkdir } from "node:fs/promises";
import path from "node:path";
import { NextResponse } from "next/server";
import { getSupabaseAdmin } from "../../../lib/supabaseAdmin";

const MAX_FIELD_LENGTH = 2000;
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function normalizeString(value) {
  return typeof value === "string" ? value.trim() : "";
}

function clamp(value, max = MAX_FIELD_LENGTH) {
  return value.slice(0, max);
}

function createReferenceId() {
  const iso = new Date()
    .toISOString()
    .replaceAll("-", "")
    .replaceAll(":", "")
    .replaceAll("T", "")
    .replaceAll("Z", "")
    .replaceAll(".", "")
    .slice(0, 14);
  const suffix = Math.random().toString(36).slice(2, 7).toUpperCase();
  return `SB-${iso}-${suffix}`;
}

export async function POST(request) {
  try {
    const body = await request.json();

    const name = clamp(normalizeString(body?.name));
    const email = clamp(normalizeString(body?.email));
    const company = clamp(normalizeString(body?.company));
    const message = clamp(normalizeString(body?.message));
    const language = clamp(normalizeString(body?.language), 10);
    const website = clamp(normalizeString(body?.website));

    if (website) {
      return NextResponse.json({ ok: true, referenceId: null });
    }

    if (!name || !email || !company || !message || !EMAIL_REGEX.test(email)) {
      return NextResponse.json(
        { ok: false, code: "invalid_input" },
        { status: 400 }
      );
    }

    const referenceId = createReferenceId();
    const createdAt = new Date().toISOString();

    const submission = {
      referenceId,
      createdAt,
      name,
      email,
      company,
      message,
      language: language || "en",
      source: "landing-contact-form"
    };

    const supabase = getSupabaseAdmin();
    if (supabase) {
      const { error } = await supabase.from("contact_submissions").insert({
        reference_id: submission.referenceId,
        created_at: submission.createdAt,
        full_name: submission.name,
        business_email: submission.email,
        company_name: submission.company,
        hiring_needs: submission.message,
        language: submission.language,
        source: submission.source
      });

      if (error) {
        return NextResponse.json(
          { ok: false, code: "db_insert_failed" },
          { status: 500 }
        );
      }
    } else if (process.env.NODE_ENV !== "production") {
      // Local dev fallback when Supabase is not configured yet.
      const submissionsDir = path.join(process.cwd(), "data", "submissions");
      await mkdir(submissionsDir, { recursive: true });
      await appendFile(
        path.join(submissionsDir, "contact-submissions.jsonl"),
        `${JSON.stringify(submission)}\n`,
        "utf8"
      );
    } else {
      return NextResponse.json(
        { ok: false, code: "supabase_not_configured" },
        { status: 500 }
      );
    }

    if (process.env.CONTACT_WEBHOOK_URL) {
      try {
        await fetch(process.env.CONTACT_WEBHOOK_URL, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(submission)
        });
      } catch {
        // The lead is already persisted locally; webhook forwarding is best-effort.
      }
    }

    return NextResponse.json({ ok: true, referenceId });
  } catch {
    return NextResponse.json(
      { ok: false, code: "server_error" },
      { status: 500 }
    );
  }
}
