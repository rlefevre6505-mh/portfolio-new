"use client";
import styles from "./ContactPage.module.css";
import { sendEmail } from "@/lib/resend";
// import emailjs, { send } from "@emailjs/browser";

export default function ContactPage() {
  // function sendMail() {
  //   let params = {
  //     name: name,
  //     email: email,
  //     message: document.getElementById("message"),
  //   };

  //   emailjs.send(
  //     "service_qlmig7a",
  //     "template_vfxpo0a",
  //     params,
  //     "pEFG2wlsFjk_FtDw_",
  //   );
  // }

  function send() {
    sendEmail();
  }

  return (
    <div className={styles.contact_container}>
      <h2>Contact Page</h2>
      <form action={send}>
        <div className={styles.form_group}>
          {" "}
          <label htmlFor="name">Name</label>
          <input
            name="name"
            id="name"
            type="text"
            placeholder="Your name"
          ></input>
        </div>

        <div className={styles.form_group}>
          {" "}
          <label htmlFor="email">Email</label>
          <input
            name="email"
            id="email"
            type="email"
            placeholder="Your email address"
          ></input>
        </div>

        <div className={styles.form_group}>
          {" "}
          <label htmlFor="message">Message</label>
          <input
            name="name"
            id="name"
            type="text"
            placeholder="Your message..."
          ></input>
        </div>
        <button type="submit" className="form_button">
          Send
        </button>
      </form>
    </div>
  );
}
