import nodemailer from "nodemailer";
import { type NextRequest, NextResponse } from "next/server";

interface RequestData {
  name: string;
  email: string;
  message: string;
}

export async function POST(request: NextRequest) {
  const { name, email, message } = await request.json();

  const transport = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.SMTP_EMAIL,
      pass: process.env.SMTP_PASSWORD,
    },
  });

  const mailOptions = {
    from: email,
    to: process.env.SMTP_EMAIL,
    subject: `Message from ${name} and${email}`,
    text: message,
  };

  const mailPromise = async () => {
    new Promise((resolve, reject) => {
      transport.sendMail(mailOptions, function (err) {
        if (!err) {
          resolve("email sent successful");
        } else {
          reject(err.message);
        }
      });
    });
  };

  try {
    await mailPromise();
    return NextResponse.json("Email sent success");
  } catch (error) {
    return NextResponse.json({ error: error }, { status: 500 });
  }
}
