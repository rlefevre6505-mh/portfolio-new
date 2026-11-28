import Image from "next/image";
import styles from "./Project.module.css";

export default function TomTheShop({ setProjectView }) {
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
          <h3 className={styles.project_title}>Tom The Shop Planner</h3>
          <p className={styles.project_blurb}>
            <strong>A planning tool for the UK&apos;s number one mobile general stores provider for festivals and outdoor events. This application facilitates scheduling of events and allocation of resources to each event, and includes an algorithmic clash detector that flags any clashes between resource allocation at overlapping events to users, as well as other issues such as the wrong number of vehicles or shop units allocated. Users are automatically warned of vehicles or shop units being incorrectly allocated to overlapping events, shortages of crucial equipment or the lack of a suitable vehicle for towing certain shop units, thereby avoiding business critical errors ahead of time.
              </strong></p>

          <p className={styles.project_blurb}>
            <strong>Origins</strong> - Following discussion with a senior manager about the shortcomings of the spreadsheet system used to schedule events and allocate resources to each event, it was clear that as the business continued to grow this was becoming unsustainable, with increased risk of critical errors not being caught. Following this, a call was arranged to define user stories and build an understanding of how features may need to be structured to facilitate potential future changes in the business.</p>

          <p className={styles.project_blurb}>
            <strong>Architecture</strong> - The front end is built in React with TypeScript and Redux, for a fast, reliable interface capable of utilising global states where needed. The clientside code is separated into &quot;views&quot; and &quot;components&quot; for the UI, a &quot;library&quot; of functions/hooks and types, and &quot;features&quot; including states for controlling certain views, persisting which event is currently selected between views, and controlling the calculation and generation of clash warnings globally.</p>

            <p className={styles.project_blurb}>The server API uses Node.js and Express, and has routes separated according to their functionality, such as &quot;vehicles&quot; or &quot;equipment&quot;. Cascading was implemented where needed to ensure that in instances where data in multiple tables needed to be deleted or overwritten, the changes would be rolled back if any part of the process was unsuccessful, avoiding the risk of breaking relationships in the database. To allow appropriately structured data to be served directly to the client, some dedicated endpoints were created to return specifically structured data for certain front end uses, using complex SQL queries.</p>

            <p className={styles.project_blurb}>A relation database was used for this application primarily due to the structure of data used needing to remain consistent, but also because the complex relationships between various points of data would need to be reliably created and updated, which could have become unnecessarily complex if a NoSQL database was used.</p>

            {/* My most recent project involved building a resource allocation tool for Tom The Shop - the UK’s number one mobile general stores provider for festivals and outdoor events. For years, Tom The Shop management have been using a messy and unreliable spreadsheet system to track and allocate equipment and vehicles to events, meaning that clashes between overlapping events were difficult to see, and equipment shortages were a real risk which has increased as the business has grown. I developed this tool as a full-stack app that facilitates scheduling and allocation of resources to events, and has a built-in clash-checker for resource allocation to overlapping events. The app itself consists of a React interface, a PostgreSQL database and uses a custom-built Node.js API. 
            
            During development of this tool, I focused on ensuring a clean, intuitive and responsive user interface, with any clashes highlighted clearly. It also uses dynamic forms with validation, and TypeScript to reduce bugs. This project was a great learning experience in turning a messy, real-world business system into a clean and practical tool, and I thoroughly enjoyed building this software, especially designing and creating the UI. To provide a clearer picture of how this app works, I’ve recorded a brief video demo, which you can view here:  LINK GOES HERE. */}

          <p className={styles.project_blurb}>
            <strong>UX</strong> - The interface uses a sidebar menu (or pop-in/out menu on smaller screens) to keep navigation simple and sections for adding or editing event information use simple forms with dynamic sections that adjust to the needs of the user, with successful submission navigating the user back to the appropriate view automatically. For an intuitive overview of scheduled events, the application uses a calendar view (with FullCalendar), with the option to view events as a filterable and sortable list if needed. </p>

            <p className={styles.project_blurb}>
            Users are given the ability to add, edit and remove certain data from the database via a dedicated UI section. This facilitates maintenance of the equipment inventory, the requirements for certain vehicle classes, equipment lists for shop units, and so on, allowing a significant degree of control for the management team. The app also features a help section that allows users to review a how-to guide or send a support request email for non-urgent issues and queries.</p>


{/* Maybe separate routes by PGPD instead of grouping by function? */}
             

          <p className={styles.project_blurb}>
            <strong>Development Notes</strong> - coming soon
          </p>
          <p className={styles.project_blurb}>
          </p>
   
        </div>
        <a
          className={styles.project_link}
          // href="https://"
          // target="_blank"
          // rel="noopener noreferrer"
        >
          Demo Video Coming Soon!{" "}
          <Image
            width={500}
            height={300}
            src="/tts.jpg"
            alt="a screenshot of the stoneleaf furnishing ecommerce page"
          />
        </a>
      </div>
    </div>
  );
}
