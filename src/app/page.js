"use client";
import styles from "./home.module.css";
import Image from "next/image";
import { useState } from "react";
import ProjectsPage from "./pages/ProjectsPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";

export default function Home() {
  const [view, setView] = useState("projects");

  return (
    <main className={styles.main}>
      <div className={styles.bgWrapper}>
        <Image
          src="/desktopedit.jpg"
          alt="a grid background"
          fill
          priority
          // width={500}
          // height={300}
          className={styles.bg}
        />
      </div>

      {/* <Image
        src="/notepad.png"
        alt="A notepad"
        width={500}
        height={300}
        className={styles.notepad}
      /> */}
      <div className={styles.profile}>
        <div className={styles.profile_intro}>
          <Image
            src="/sketch.png"
            alt="A charcoal sketch of myself"
            width={500}
            height={300}
            className={styles.sketch}
          />
          <div className={styles.intro_text}>
            <h2>Hello World!</h2>
            <h3>
              I&apos;m Richard, a front-end leaning, full-stack developer.
            </h3>
          </div>
        </div>
        <p className={styles.profile_blurb}>
          I&apos;m someone who loves translating problems into solutions by
          combining clean, effective code with user-friendly design
          implementation. I&apos;m Currently focussed on building functional and
          performant web apps from the ground up, and expanding into new
          languages and frameworks. I&apos;m mostly working solo, but love
          developing as part of a team!
        </p>
      </div>

      {/* NAV */}

      <nav className={styles.nav}>
        <button
          className={styles.nav_link}
          onClick={() => {
            setView("about");
          }}
        >
          About Me
        </button>

        <button
          className={styles.nav_link}
          onClick={() => {
            setView("projects");
          }}
        >
          Projects
        </button>

        <button
          className={styles.nav_link}
          onClick={() => {
            setView("contact");
          }}
        >
          Contact
        </button>
      </nav>

      {view === "projects" && <ProjectsPage />}
      {view === "about" && <AboutPage />}
      {view === "contact" && <ContactPage />}
    </main>
  );
}
