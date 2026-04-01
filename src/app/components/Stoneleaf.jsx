import Image from "next/image";
import styles from "./Project.module.css";

export default function Stoneleaf({ setProjectView }) {
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
          <h3 className={styles.project_title}>Stoneleaf Furnishings</h3>
          <p className={styles.project_blurb}>
            <strong>
              I wanted to create a fully functional e-commerce storefront as a
              first project made entirely for my portfolio and chose to build in
              React in order to utilise its reusable components, state
              management and speed. The result is a smooth, self-contained
              shopping experience with an integrated secure payment solution.
            </strong>
          </p>
          <p className={styles.project_blurb}>
            <strong>React Hooks</strong> - State is utilised primarily in the
            shop page to control various filter/sort options, and app uses the
            React Context API to provide real-time cart updates and persist cart
            contents throughout a session without passing props through numerous
            layers of components. Local storage is used to persist cart contents
            between sessions for improved UX. UseRef was also used in the shop
            view to allow users to click away from the filter/cart panels by
            clicking other parts of the view.
          </p>
          <p className={styles.project_blurb}>
            <strong>SPA Routing</strong> - React Router is used to provide
            routes to a home page, about page, shop page and checkout page,
            while each uses state management and conditional rendering to
            control the componnets displayed within each page view.
          </p>
          <p className={styles.project_blurb}>
            <strong>Third Party Assets</strong> - The range slider for filtering
            price in the shop view is provided by the React-Range package and
            needed to be customised to work with 2 sliders for maximum and
            minimum price. Icons were sourced from the Google Material library
            and simpleicons.org.
          </p>
          <p className={styles.project_blurb}>
            <strong>Secure Checkout (Stripe API, Node.JS, Express)</strong> -
            Stripe payment is integrated using sandbox mode, allowing the
            service to process a dummy payment and reroute the user back to the
            storefront. The app creates a Stripe checkout session and passes
            this to the dedicated server created for the project, which includes
            error handling.
          </p>

          <p className={styles.project_blurb}>
            <strong>Development Notes</strong> - While developing this app I
            found challenges in some aspects of React that were relatively new
            to me, primarily utilising the context API. While this is something
            I had looked at in ther past, this was my first implementation
            context into a functioning app. Using context to provide the cart
            contents to the whole app was fairly simple, but as I building out
            the logic to manage the cart contents and refactoring parts to
            include local storage for persistence between sessions was more
            complex.
          </p>
          <p className={styles.project_blurb}>
            I had some difficulty integrating Stripe due to in part the range of
            different options for payment processing (checkout session, payment
            intent, setup intents, etc), as the process for implementing each is
            quite different. It was also a little challenging to work out
            exactly what should/could be passed to my server, leading to a bug
            that crashed the payment at one point due to an invalid format of
            link. Seeking assistance from the Stripe AI assistant was helpful to
            a point, but would sometimes guide me to change a setting in the
            dashboard that only applied ot test mode, which is deprecated.
          </p>
          <p className={styles.project_blurb}>
            Overall, this project was a good refresher on building with React as
            a standalone front-end library and allowed me to make use of context
            and useRef in a project for the first time. It also served as a
            refresher on project design, as although I am happy with the result,
            having failed to takem a mobile-first approach to styling did make
            responsive styling more of a chore than necessary. This is something
            I would definitely do differently moving forward.
          </p>

          <p className={styles.project_blurb}>
            <strong>NB. </strong> to try out payment in this app, please use
            dummy card number &quot;4242 4242 4242 4242&quot; with any name, any
            CVC code and any future date. Unfortunately, Stripe sandbox no
            longer allows email receipts for test transactions, so if you enter
            your email you will not receive a receipt.
          </p>
        </div>
        <a
          className={styles.project_link}
          href="https://furniture-storefront.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Click to view{" "}
          <Image
            width={500}
            height={300}
            src="/stoneleaf.jpg"
            alt="a screenshot of the stonelewaf furnishing ecommerce page"
          />
        </a>
      </div>
    </div>
  );
}
