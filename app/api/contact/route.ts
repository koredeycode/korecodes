import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();

  // TODO: save to DB or send email
  console.log("Contact form submission:", body);

  return NextResponse.json({ success: true });
}
