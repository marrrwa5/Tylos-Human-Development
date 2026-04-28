import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().optional(),
  subject: z.string().optional(),
  department: z.string().optional(),
  message: z.string().min(10),
  type: z.string().optional(),
  specialization: z.string().optional(),
  experience: z.string().optional(),
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const data = schema.parse(body);

    // Log in dev — swap for nodemailer in production
    if (process.env.NODE_ENV === "development") {
      console.log("[Contact Form Submission]", data);
    }

    // Production: send via nodemailer
    if (
      process.env.NODE_ENV === "production" &&
      process.env.SMTP_HOST &&
      process.env.SMTP_USER &&
      process.env.SMTP_PASS
    ) {
      const nodemailer = await import("nodemailer");
      const transporter = nodemailer.default.createTransport({
        host: process.env.SMTP_HOST,
        port: Number(process.env.SMTP_PORT) || 587,
        secure: false,
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS,
        },
      });

      const subject =
        data.type === "instructor-application"
          ? `Instructor Application — ${data.name}`
          : `Contact Form — ${data.subject || data.department || "General Inquiry"}`;

      await transporter.sendMail({
        from: `"Tylos HDC Website" <${process.env.SMTP_USER}>`,
        to: process.env.CONTACT_TO || "info@tylosthd.com",
        replyTo: data.email,
        subject,
        html: `
          <h2>${subject}</h2>
          <p><strong>Name:</strong> ${data.name}</p>
          <p><strong>Email:</strong> ${data.email}</p>
          ${data.phone ? `<p><strong>Phone:</strong> ${data.phone}</p>` : ""}
          ${data.department ? `<p><strong>Department:</strong> ${data.department}</p>` : ""}
          ${data.specialization ? `<p><strong>Specialization:</strong> ${data.specialization}</p>` : ""}
          ${data.experience ? `<p><strong>Experience:</strong> ${data.experience}</p>` : ""}
          <p><strong>Message:</strong></p>
          <p>${data.message.replace(/\n/g, "<br>")}</p>
        `,
      });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("[Contact API Error]", err);
    if (err instanceof z.ZodError) {
      return NextResponse.json(
        { error: "Validation failed", issues: err.issues },
        { status: 400 }
      );
    }
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
