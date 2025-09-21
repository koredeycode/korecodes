import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { firstname, lastname, email, message } = body;

    await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>", // can be a verified domain/email
      to: process.env.TO_EMAIL as string,
      subject: "New Contact Form Submission",
      html: `
        <h2>New Contact Form Submission</h2>
        <p><b>FirstName:</b> ${firstname}</p>
        <p><b>LastName:</b> ${lastname}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Message:</b></p>
        <p>${message}</p>
      `,
    });

    return NextResponse.json({
      success: true,
      message: "Email sent successfully",
    });
  } catch (error) {
    console.error("Email send error:", error);
    return NextResponse.json(
      {
        success: false,
        error:
          typeof error === "object" && error !== null && "message" in error
            ? (error as { message: string }).message
            : "An unknown error occurred",
      },
      { status: 500 }
    );
  }
}
