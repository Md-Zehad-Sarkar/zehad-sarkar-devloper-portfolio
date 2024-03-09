import nodemailer from "nodemailer";
type TSendMail = {
  to: string;
  name: string;
  email: string;
  subject?: string;
  message?: string;
  body?: string;
};
export async function sendMAil({ to, name, email, message, body }: TSendMail) {
  const { SMTP_PASSWORD, SMTP_EMAIL } = process.env;
  const transport = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: SMTP_EMAIL,
      pass: SMTP_PASSWORD,
    },
    secure: true,
    tls: {
      rejectUnauthorized: false,
    },
  });

  try {
    const testResult = await transport.verify();
    console.log("testResult", testResult);
  } catch (error) {
    console.log("testResult error", error);
    return;
  }

  try {
    const sendResult = await transport.sendMail({
      from: SMTP_EMAIL,
      to,
      html: body,
    });
    console.log("sendMAil result", sendResult);
  } catch (error) {
    console.log("sendMail error", error);
  }
}
