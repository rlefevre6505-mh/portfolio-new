"use server";
import { Resend } from "resend";
const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (FormData) => {
  const name = FormData.get("name");
  const email = FormData.get("email");
  const message = FormData.get("message");

  //   await resend.emails.send({
  //     to: process.env.MY_EMAIL,
  //     from: name,
  //     email: email,
  //     html: message,
  //   });

  await resend.emails.send({
    to: process.env.MY_EMAIL,
    from: `${name} <onboarding@resend.dev>`,
    subject: `New message from ${name}`,
    html: `
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Message:</strong> ${message}</p>
    `,
  });
};
