"use server";
import { Resend } from "resend";
const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (FormData) => {
  const name = FormData.get("name");
  const email = FormData.get("email");
  const message = FormData.get("message");

  await resend.emails.send({
    to: process.env.MY_EMAIL,
    from: name,
    email: email,
    html: message,
  });
};
