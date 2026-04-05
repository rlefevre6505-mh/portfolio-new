"use client";
import styles from "./ContactPage.module.css";
import { sendEmail } from "@/lib/resend";

export default function ContactPage() {
  return (
    <div className={styles.contact_container}>
      <h2 className={styles.contact_h2}>
        Please send me a message using the form below or connect with me on{" "}
        <a
          className={styles.linkedin_link}
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.linkedin.com/in/r-le-fevre/"
        >
          Linkedin
        </a>
        .
      </h2>
      <p className={styles.contact_p}>
        You are more than welcome to ask questions about my work, request my CV
        or get in touch for any other reason.
      </p>
      <form className={styles.contact_form} action={sendEmail}>
        <div className={styles.form_group}>
          {" "}
          <label htmlFor="name">Name</label>
          <input
            className={styles.input}
            name="name"
            id="name"
            type="text"
            placeholder="Your name"
            required
          ></input>
        </div>

        <div className={styles.form_group}>
          {" "}
          <label htmlFor="email">Email</label>
          <input
            className={styles.input}
            name="email"
            id="email"
            type="email"
            placeholder="Your email address"
            required
          ></input>
        </div>

        <div className={styles.form_group}>
          {" "}
          <label htmlFor="message">Message</label>
          <textarea
            name="message"
            id="message"
            className={`${styles.message} ${styles.input}`}
            type="text"
            placeholder="Your message..."
            required
          ></textarea>
        </div>
        <button type="submit" className={styles.form_button}>
          Send
        </button>
      </form>
    </div>
  );
}
