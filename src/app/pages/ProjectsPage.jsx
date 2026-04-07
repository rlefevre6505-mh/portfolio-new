"use client";
import Image from "next/image";
import styles from "./ProjectsPage.module.css";
import { useState } from "react";
import Cookies from "../components/Cookies";
import DietDine from "../components/DietDine";
import Dogs from "../components/Dogs";
import GigLog from "../components/GigLog";
import Kickabout from "../components/Kickabout";
import Stoneleaf from "../components/Stoneleaf";

export default function ProjectsPage() {
  const [projectView, setProjectView] = useState("");

  if (projectView === "") {
    return (
      <div className={styles.project_container}>
        <div className={styles.project}>
          <div className={styles.project_text}>
            <h3 className={styles.project_title}>Stoneleaf Furnishings</h3>
            <p className={styles.project_blurb}>
              A front-end e-commerce storefront with custom payment server,
              built with Vite + React, Node.JS + Express, and Stripe checkout.
              Designed to be fast and scalable, this app recreates a real-world
              transactional flow, handles payemnts securely and demostrates
              ability to create production-ready web apps.
            </p>
          </div>
          <div
            className={styles.link}
            onClick={() => {
              setProjectView("stoneleaf");
            }}
          >
            View details{" "}
            <Image
              width={500}
              height={300}
              src="/stoneleaf.jpg"
              alt="a screenshot of the stoneleaf furnishings website"
            />
          </div>
        </div>

        <div className={styles.project}>
          <div className={styles.project_text}>
            <h3 className={styles.project_title}>Kickabout</h3>
            <p className={styles.project_blurb}>
              A full stack app created for a group bootcamp project and built
              with Vite + Next.JS, Node.JS + Express, and using a PostgreSQL
              database on Supabase. Designed to help users connect with each
              other to play sports on a purely casual level, wih
              preference-based match-making.
            </p>
          </div>
          <div
            className={styles.link}
            onClick={() => {
              setProjectView("kickabout");
            }}
          >
            View details{" "}
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
            postgreSQL database and custom server API built with Node.JS and
            Express.
          </p>
          <div
            className={styles.link}
            onClick={() => {
              setProjectView("dietdine");
            }}
          >
            View details
            <Image
              src="/diet_dine.jpg"
              alt="a screenshot of the diet dine app"
              width={500}
              height={300}
            />
          </div>
        </div>

        {/* <div className={styles.project}>
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
            View details
            <Image
              width={500}
              height={300}
              src="/giglog.jpg"
              alt="a screenshot of the gig log social networking site"
            />
          </div>
        </div> */}

        {/* 
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
            View details
            <Image
              width={500}
              height={300}
              src="/dogs.jpg"
              alt="a screenshot of a dog photo app"
            />
          </div>
        </div> */}

        {/* <div className={styles.project}>
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
            View details
            <Image
              width={500}
              height={300}
              src="/cookies.jpg"
              alt="a screenshot of a cookie clicker idle game"
            />
          </div>
        </div> */}
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
  } else if (projectView === "stoneleaf") {
    return <Stoneleaf setProjectView={setProjectView} />;
  }
}
