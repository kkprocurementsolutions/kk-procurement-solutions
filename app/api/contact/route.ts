import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";

const emailAddress = "sourcing@kk-procurement-solutions.com";

function clean(value: unknown, maxLength = 200): string {
  return typeof value === "string"
    ? value.trim().slice(0, maxLength)
    : "";
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const name = clean(body.name);
    const company = clean(body.company);
    const email = clean(body.email);
    const phone = clean(body.phone);
    const spend = clean(body.spend);
    const engagement = clean(body.engagement);
    const message = clean(body.message, 3000);
    const website = clean(body.website);

    // Hidden field catches basic automated submissions.
    if (website) {
      return NextResponse.json({ success: true });
    }

    if (
      !name ||
      !company ||
      !email ||
      !message ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
    ) {
      return NextResponse.json(
        { error: "Please complete all required fields." },
        { status: 400 }
      );
    }

    if (!process.env.RESEND_API_KEY) {
      console.error("Missing RESEND_API_KEY");
      return NextResponse.json(
        { error: "Email service is not configured." },
        { status: 500 }
      );
    }

    const resend = new Resend(process.env.RESEND_API_KEY);

    const { error } = await resend.emails.send({
      from: "KK Procurement Website <inquiries@kk-procurement-solutions.com>",
      to: [emailAddress],
      replyTo: email,
      subject: `New Sourcing Inquiry - ${company.replace(/[\r\n]/g, " ")}`,
      text: [
        "New KK Procurement Solutions inquiry",
        "",
        `Name: ${name}`,
        `Company: ${company}`,
        `Email: ${email}`,
        `Phone: ${phone || "Not provided"}`,
        `Annual Supplier Spend: ${spend || "Not provided"}`,
        `Engagement Type: ${engagement || "Not specified"}`,
        "",
        "Sourcing Needs:",
        message,
      ].join("\n"),
    });

    if (error) {
      console.error("Resend delivery error:", error);
      return NextResponse.json(
        { error: "Unable to send your inquiry. Please try again." },
        { status: 502 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Unable to process your request." },
      { status: 500 }
    );
  }
}
