"use server";
import { TFormData } from "@/components/shared_pages/Contact";
import nodemailer from "nodemailer";

export async function sendEMail(data: TFormData) {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.SMTP_EMAIL,
      pass: process.env.SMTP_PASSWORD,
    },
  });

  const mailOptions = {
    from: data.email,
    to: process.env.SMTP_EMAIL,
    subject: `Message from ${data.name} email: ${data.email}`,
    text: data.message,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      throw new Error("error");
    } else {
      return true;
    }
  });
}

export async function sendEmail(data: FormData) {
  const apiEndpoint = "/api/contact";

  fetch(apiEndpoint, {
    method: "POST",
    body: JSON.stringify(data),
    cache: "no-store",
  })
    .then((res) => res.json())
    .then((response) => {
      alert(response.message);
    })
    .catch((err) => {
      alert(err);
    });
}
