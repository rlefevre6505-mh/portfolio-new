"use client";
import styles from "./home.module.css";
import Image from "next/image";
import { useState } from "react";
import ProjectsPage from "./pages/ProjectsPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import { Analytics } from "@vercel/analytics/next";

export default function Home() {
  const [view, setView] = useState("about");
  const [profileHidden, setProfileHidden] = useState(false);

  return (
    <main
      className={`${styles.main} ${profileHidden ? styles.profileHidden : ""}`}
    >
      <Analytics />
      <div className={styles.bgWrapper}>
        <Image
          src="/desktopedit.webp"
          alt="a photo of a desk top with a laptop and cup of tea"
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
      <div className={styles.profileWrapper}>
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
                I&apos;m Richard, a <br />
                full-stack developer.
              </h3>
            </div>
          </div>
          <p className={styles.profile_blurb}>
            I&apos;m someone who loves translating problems into solutions by
            combining intuitive, user-friendly interfaces with clean,
            maintainable code. I&apos;m Currently focussed on building
            functional and performant web apps from the ground up, and expanding
            into new languages and frameworks. I&apos;m mostly working solo, but
            enjoy developing in Agile teams!
          </p>
        </div>
        <button
          type="button"
          className={styles.toggleProfileButton}
          onClick={() => setProfileHidden((prev) => !prev)}
        >
          {profileHidden ? "Show" : "Hide"}
        </button>
      </div>

      {/* NAV */}

      <nav className={styles.nav}>
        <button
          className={`${styles.nav_link} ${view === "about" ? styles.nav_link_active : ""}`}
          onClick={() => {
            setView("about");
          }}
        >
          About Me
        </button>

        <button
          className={`${styles.nav_link} ${view === "projects" ? styles.nav_link_active : ""}`}
          onClick={() => {
            setView("projects");
          }}
        >
          Projects
        </button>

        <button
          className={`${styles.nav_link} ${view === "contact" ? styles.nav_link_active : ""}`}
          onClick={() => {
            setView("contact");
          }}
        >
          Contact
        </button>
      </nav>

      <div className={styles.contentWrapper}>
        {view === "projects" && <ProjectsPage />}
        {view === "about" && <AboutPage />}
        {view === "contact" && <ContactPage />}
      </div>
    </main>
  );
}
