import Image from "next/image";
import styles from "./Project.module.css";

export default function DietDine({ setProjectView }) {
  return (
    <div className={styles.project_container}>
      <button
        className={styles.back_button}
        onClick={() => {
          setProjectView("");
        }}
      >
        Back
      </button>
      <div className={styles.project}>
        <div className={styles.project_text}>
          <h3 className={styles.project_title}>Diet Dine</h3>
          <p className={styles.project_blurb}>
            An app designed to help people with specific dietary needs or
            preferences find restaurants and other food vendors suitable for
            them, primarily via user feedback. The app is built in HTML, CSS and
            Javascript and makes use of the OpenSteetMap API as well as a
            postgreSQL database and custom server API. The layout is intended to
            mimic a single page app. This app was the outcome of a group project
            with Amy Tuck and Ulrike Kunze, and fulfilled the brief of providing
            a minimum viable product, ready for presentation as proof of
            concept.
          </p>

          <p className={styles.project_blurb}>
            <strong>NB. </strong> This app uses a limited set of test data, so
            covers a small range fo food outlets in Norwich, Peterborough and
            Hull areas. Please zoom out or scroll the map to view these.
          </p>
          <p className={styles.project_blurb}>
            Additionally, if any tiles showing an error code appear in the map,
            this is due to your browser settings. You may need to temporarily
            disable any ad-blockers to remove these, due to certain terms
            associated with the OpenStreetMap API though the app will function
            regardless.
          </p>
        </div>
        <a
          href="https://diet-dine-client.onrender.com/"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.project_link}
        >
          Click to visit{" "}
          <Image
            className={styles.project_link}
            width={500}
            height={300}
            src="/diet_dine.jpg"
            alt="a screenshot of the Diet Dine app"
          />
        </a>
      </div>
    </div>
  );
}
