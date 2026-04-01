import Image from "next/image";
import styles from "./Project.module.css";

export default function Kickabout({ setProjectView }) {
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
          <h3 className={styles.project_title}>Kickabout</h3>
          <p className={styles.project_blurb}>
            <strong>
              A full stack app designed to help people connect with other. The
              app is built in Next.JS using a PostgreSQL database with
              authentication by Clerk. This app was the outcome of a group
              project with Amy Tuck, Tom Stevenson and Sinéad McIntyre, and
              fulfilled the brief of providing a minimum viable product as a
              proof of concept.
            </strong>
          </p>

          <p className={styles.project_blurb}>
            <strong>Project Planning</strong> - The project group began our
            planning by identifying a problem domain and generating user stories
            for the essential aspects of the app, before further researching
            other comparible apps. Notetaking was compiled in a Figjam board on
            Figma, with low fidelity wireframes, user-flow diagrams and a
            routing structure later added to the same board. The database schema
            was planned using drawsql.app and high fidelity wireframes were
            created in figma. Using an agile workflow, the group set up a kanban
            board on Trello, using this to structure and track our work in
            combination with multiple with daily standup meetings.
          </p>

          <p className={styles.project_blurb}>
            <strong>Authentication & Onboarding</strong> - Once on the landing
            page, users are able to sign up or sign in using Clerk
            authtnication. It was decided early on that users would be guided
            through a custom onboarding flow, integrating Clerk sign up with
            forms to be completed by the user for the app&apos;s own database.
            With use of Clerk&apos;s &quot;route-matcher&quot;, protected routes
            could be created and configured so that users would be unable to
            access the app without being signed up.
          </p>

          <p className={styles.project_blurb}>
            <strong>Matchmaking</strong> - User matching is achieved by taking
            data on user&apos;s preferred locations and sports from the
            database, and only returning data for other user&apos;s who match at
            least one sport in the same location. Central to the functionality
            of this is the matchmaking built into the &quot;feed&quot; page.
            While some of this could be done using Javascript logic in the app
            after data fetching, it was a clear choice to set up a more complex
            SQL query to limit the need for clientside processing. This was
            achieved using a query comprising of 2 CTEs (each from a multi-level
            nested query), with one then filtered base don the ocntent of the
            other and returning only the relevant data.
            {/* db seeding */}
          </p>

          <p className={styles.project_blurb}>
            <strong>Stretch Goals</strong> -
          </p>

          <p className={styles.project_blurb}>
            <strong>Development Notes</strong> - my role - sql - auth
          </p>
        </div>
        <a
          className={styles.project_link}
          href="https://kickaboutapp.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Click to view{" "}
          <Image
            width={500}
            height={300}
            src="/kickabout.jpg"
            alt="a screenshot of the kickabout app"
          />
        </a>
      </div>
    </div>
  );
}
