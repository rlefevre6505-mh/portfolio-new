"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async () => {
  await resend.emails.sent({
    to: process.env.MY_EMAIL,
    from: "OrcDev<onboarding@resend.dev>",
    subject: "this is a subject...",
    html: "this is a message!",
  });
};
