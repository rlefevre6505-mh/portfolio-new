"use client";
import Image from "next/image";
import styles from "./ProjectsPage.module.css";
import { useState } from "react";
import Cookies from "../components/Cookies";
import DietDine from "../components/DietDine";
import Dogs from "../components/Dogs";
import GigLog from "../components/GigLog";
import Kickabout from "../components/Kickabout";

export default function ProjectsPage() {
  const [projectView, setProjectView] = useState("");

  if (projectView === "") {
    return (
      <div className={styles.project_container}>
        <div className={styles.project}>
          <div className={styles.project_text}>
            <h3 className={styles.project_title}>Kickabout</h3>
            <p className={styles.project_blurb}>
              A full stack app designed to help people with connect with other
              users to play sports on a purely casual level. The app is built in
              Next.JS using a PostgreSQL database with authentication by Clerk.
              This app was the outcome of a group project with Amy Tuck, Tom
              Stevenson & Sinéad McIntyre, and fulfilled the brief of providing
              a minimum viable product, ready for presentation as proof of
              concept.
            </p>
          </div>
          <div
            className={styles.link}
            onClick={() => {
              setProjectView("kickabout");
            }}
          >
            Click to view{" "}
            <Image
              width={500}
              height={300}
              src="/kickabout.jpg"
              alt="a screenshot of the kickabout app"
            />
          </div>
        </div>

        <div className={styles.project}>
          <div className={styles.project_text}></div>
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
          <div
            className={styles.link}
            onClick={() => {
              setProjectView("dietdine");
            }}
          >
            Click to view
            <Image
              src="/diet_dine.jpg"
              alt="a screenshot of the diet dine app"
              width={500}
              height={300}
            />
          </div>
        </div>

        <div className={styles.project}>
          <div className={styles.project_text}>
            <h3 className={styles.project_title}>Gig Log</h3>
            <p className={styles.project_blurb}>
              A social network built in NextJS, with authentication from Clerk
              middleware. With the brief to produce a social network in NextJS,
              with full user authentication, user profiles, a feed and allowing
              users the ability to create, edit and delete posts and comments.
              The concept allows users to share music events they are excited
              about on a dedicated platform, with a strong focus on sharing your
              interest and intent to attend.
            </p>
          </div>
          <div
            className={styles.link}
            onClick={() => {
              setProjectView("giglog");
            }}
          >
            Click to view
            <Image
              width={500}
              height={300}
              src="/giglog.jpg"
              alt="a screenshot of the gig log social networking site"
            />
          </div>
        </div>

        <div className={styles.project}>
          <div className={styles.project_text}>
            <h3 className={styles.project_title}>Daily Dose Of Dogs</h3>
            <p className={styles.project_blurb}>
              A photo gallery built in React that loads image links from the
              Unsplash image API, using a query specifying images of dogs only.
              This app allows users to load a randomised slecetion of images and
              use a search bar to filter them by keywords (from the image
              descriptions provided via the API). The app makes use of React
              specific features including useState to store data from the API,
              store the currently selected image, store data about image
              filtering searches, useEffect to ensure that states are only
              updated when needed, and conditional rendering to control which
              array of thumbnail images is displayed at any given time.
            </p>
          </div>
          <div
            className={styles.link}
            onClick={() => {
              setProjectView("dogs");
            }}
          >
            Click to view
            <Image
              width={500}
              height={300}
              src="/dogs.jpg"
              alt="a screenshot of a dog photo app"
            />
          </div>
        </div>

        <div className={styles.project}>
          <div className={styles.project_text}>
            <h3 className={styles.project_title}>Cookies In Space</h3>
            <p className={styles.project_blurb}>
              A project with the brief of creating an idle game such as a cookie
              clicker in HTML, CSS and Javascript, and making use of a specific
              API for the game&apos;s upgrade data. This app also make use of
              the browser&apos;s local storage to track and the maintain
              user&apos;s score. A pixel-art style was adopted to give the app a
              sense of identity and the small amount of animation present was
              implemented using CSS only to reduce the system resources required
              compared to the Javascript equivalent.
            </p>
          </div>
          <div
            className={styles.link}
            onClick={() => {
              setProjectView("cookies");
            }}
          >
            Click to view
            <Image
              width={500}
              height={300}
              src="/cookies.jpg"
              alt="a screenshot of a cookie clicker idle game"
            />
          </div>
        </div>
      </div>
    );

    // PROJECT DETAIL PAGES
  } else if (projectView === "kickabout") {
    return <Kickabout setProjectView={setProjectView} />;
  } else if (projectView === "dietdine") {
    return <DietDine setProjectView={setProjectView} />;
  } else if (projectView === "giglog") {
    return <GigLog setProjectView={setProjectView} />;
  } else if (projectView === "dogs") {
    return <Dogs setProjectView={setProjectView} />;
  } else if (projectView === "cookies") {
    return <Cookies setProjectView={setProjectView} />;
  }
}
