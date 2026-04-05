import Image from "next/image";
import styles from "./Project.module.css";

export default function Cookies({ setProjectView }) {
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
          <h3 className={styles.project_title}>Cookies In Space</h3>
          <p className={styles.project_blurb}>
            A full stack app designed to help people with connect with other
          </p>
        </div>
        <a href="" target="_blank" rel="noopener noreferrer">
          Click to view{" "}
          <Image
            className={styles.project_link}
            width={500}
            height={300}
            src="/cookies.jpg"
            alt="a screenshot of the kickabout app"
          />
        </a>
      </div>
    </div>
  );
}
