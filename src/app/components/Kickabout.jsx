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
              A full stack app designed to help people connect with each other.
              The app is built in Next.JS using a PostgreSQL database with
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
            other comparable apps. Notetaking was compiled in a Figjam board on
            Figma, with low fidelity wireframes, user-flow diagrams and a
            routing structure later added to the same board. The database schema
            was planned using drawsql.app and high fidelity wireframes were
            created in figma. Using an agile workflow, the group set up a kanban
            board on Trello, using this to structure and track our work in
            combination with multiple daily standup meetings.
            <ul className={styles.project_list}>
              Our user stories were:
              <li className={styles.li}>
                As a user i want to be able to find other people in my area who
                are interested in the same activities as me (at a
                casual/beginner level)
              </li>
              <li className={styles.li}>
                As a user I want to be matched with people based on activity,
                activity level and location
              </li>
              <li className={styles.li}>
                As a user, when I sign up I want to create a profile including
                my location, what activities I&apos;m interested in and my
                preferred level for each activity
              </li>
              <li>As a user I want to be able to edit my profile later</li>
              <li className={styles.li}>
                As a dev I want to start with a pre-set list of activities for
                users to choose from
              </li>
            </ul>{" "}
          </p>
          <p className={styles.project_blurb}>
            <strong>Authentication & Onboarding</strong> - Once on the landing
            page, users are able to sign up or sign in using Clerk
            authentication. It was decided early on that users would be guided
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
            nested query), with one then filtered based on the content of the
            other and returning only the relevant data.
            {/* db seeding */}
          </p>
          <p className={styles.project_blurb}>
            <strong>Stretch Goals</strong> -
            <ul className={styles.project_list}>
              {" "}
              The group had high ambitions for this concept, despite a tight
              timeline for development of this first version, so had several
              stretch goals we hoped to work on if time allowed. Our stretch
              user stories were:
              <li className={styles.li}>Implement messaging between users.</li>
              <li className={styles.li}>
                Implement true location based matching and mapping features such
                as recommended safe locations.
              </li>
              <li className={styles.li}>Allow users to set up group events.</li>
              <li className={styles.li}>Add user stats to profile pages.</li>
              <li className={styles.li}>
                Allowing users to add new/custom activity types.
              </li>
            </ul>
          </p>
          <p className={styles.project_blurb}>
            <strong>Development Notes</strong> - My role in this project, as
            with all group members, covered many aspects of development. I took
            a lead role in setting up authentication and designing the custom
            onboarding flow, as well as guiding user flow through the whole app.
            I designed the database schema based on the needs of the project, as
            defined collaboratively by whole group, and set up the database.
          </p>

          <p className={styles.project_blurb}>
            I also tackled the complex SQL query that handles automated matching
            of users. I volunteered to take this on mainly because I had been
            conscious that my SQL skills were not as advanced as they could be
            and had recently been working to improve, so wanted to challenge
            myself. I fell into the role of go-to debugger, as I not only made
            myself readily available for this, but found that I was able to work
            well in this capacity with my group, making good use of my
            communication and coaching skills, combined with a collaborative
            attitude.
          </p>
          <p className={styles.project_blurb}>
            As a group we were pleased with how this MVP for the app concept
            turned out, although all felt some measure of disappointment over
            not having time to implement some of our stretch stories. For my
            part, I particularly enjoyed handling the database and SQL queries,
            and overall really enjoyed the opportunity to develop as part of a
            team.
          </p>
        </div>
        <a
          className={styles.project_link}
          href="https://kickaboutapp.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Click to visit{" "}
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
