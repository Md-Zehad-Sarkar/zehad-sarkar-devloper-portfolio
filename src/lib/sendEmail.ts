"use server";
import { TFormData } from "@/components/shared_pages/Contact";
import nodemailer from "nodemailer";

export async function sendEmail(data: TFormData) {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.NEXT_PUBLIC_SMTP_EMAIL,
      pass: process.env.NEXT_PUBLIC_SMTP_PASSWORD,
    },
  });

  const mailOptions = {
    from: data.email,
    to: process.env.SMTP_EMAIL,
    subject: `Message from ${data.name} email: ${data.email}`,
    text: data.message,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    if (info.response) {
      return "Email send successful";
    }
  } catch (error) {
    console.error(error);
  }
}
