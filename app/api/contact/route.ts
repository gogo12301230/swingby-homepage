import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  const { name, phone, email, message } = await req.json();

  // Gmail 기준으로 작성했어. 다른 서비스면 host 설정을 바꿔야 해.
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });
  console.log(process.env.EMAIL_USER)
  try {
    await transporter.sendMail({
      from: email,
      to: process.env.EMAIL_USER, // 받는 사람 (결국 나)
      subject: `[SWINGBY PROJECT] ${name}님으로부터의 문의`,
      text: `이름: ${name}\n연락처: ${phone}\n이메일: ${email}\n내용: ${message}`,
    });

    return NextResponse.json({ message: "성공적으로 보냈어!" }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "메일 전송 실패..." }, { status: 500 });
  }
}
