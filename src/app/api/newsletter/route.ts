import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const schema = z.object({
  email: z.string().email(),
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const data = schema.parse(body);

    if (process.env.NODE_ENV === "development") {
      console.log("[Newsletter Subscription]", data.email);
    }

    if (process.env.NODE_ENV === "production" && process.env.SMTP_HOST) {
      const nodemailer = await import("nodemailer");
      const transporter = nodemailer.default.createTransport({
        host: process.env.SMTP_HOST,
        port: Number(process.env.SMTP_PORT) || 587,
        secure: false,
        auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
      });

      await transporter.sendMail({
        from: `"Tylos HDC" <${process.env.SMTP_USER}>`,
        to: process.env.CONTACT_TO || "info@tylosthd.com",
        subject: "New Newsletter Subscription",
        html: `<p>New subscriber: <strong>${data.email}</strong></p>`,
      });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("[Newsletter API Error]", err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
