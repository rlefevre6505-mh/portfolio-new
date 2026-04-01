import styles from "./ContactPage.module.css";
import { emailjs } from "@emailjs";

export default function ContactPage() {
  function sendMail() {
    let params = {
      name: document.getElementById("name"),
      email: document.getElementById("email"),
      message: document.getElementById("message"),
    };

    emailjs.send(
      "service_qlmig7a",
      "template_vfxpo0a",
      params,
      "pEFG2wlsFjk_FtDw_",
    );
  }

  return (
    <div className={styles.contact_container}>
      <h2>Contact Page</h2>
      <form>
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
          <label htmlFor="" name>
            Message
          </label>
          <input
            name="name"
            id="name"
            type="text"
            placeholder="Your message..."
          ></input>
        </div>
        <button type="submit" onClick={sendMail()} className="form_button">
          Send
        </button>
      </form>
    </div>
  );
}
