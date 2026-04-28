import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().optional(),
  courseTitle: z.string(),
  courseSlug: z.string(),
  startDate: z.string(),
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const data = schema.parse(body);

    if (process.env.NODE_ENV === "development") {
      console.log("[Remind Me Submission]", data);
    }

    if (
      process.env.NODE_ENV === "production" &&
      process.env.SMTP_HOST
    ) {
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
        replyTo: data.email,
        subject: `Course Interest Registration — ${data.courseTitle}`,
        html: `
          <h2>Course Interest Registration</h2>
          <p><strong>Name:</strong> ${data.name}</p>
          <p><strong>Email:</strong> ${data.email}</p>
          ${data.phone ? `<p><strong>Phone:</strong> ${data.phone}</p>` : ""}
          <p><strong>Course:</strong> ${data.courseTitle}</p>
          <p><strong>Start Date:</strong> ${new Date(data.startDate).toLocaleDateString()}</p>
        `,
      });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("[Remind Me API Error]", err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
