import styles from "./AboutPage.module.css";
import StackIcon from "tech-stack-icons";

export default function AboutPage() {
  return (
    <div className={styles.about_container}>
      <div className={styles.about_div}>
        <h2>About Me</h2>

        <p>
          <strong>My Tech Stack</strong>
        </p>
        <div className={styles.stack_icons}>
          <div className={styles.tooltip_wrapper}>
            <StackIcon name="html5" className={styles.stack_icon} />
            <span className={styles.tooltip}>HTML5</span>
          </div>
          <div className={styles.tooltip_wrapper}>
            <StackIcon name="css3" className={styles.stack_icon} />
            <span className={styles.tooltip}>CSS3</span>
          </div>
          <div className={styles.tooltip_wrapper}>
            <StackIcon name="tailwindcss" className={styles.stack_icon} />
            <span className={styles.tooltip}>Tailwind CSS</span>
          </div>
          <div className={styles.tooltip_wrapper}>
            <StackIcon name="js" className={styles.stack_icon} />
            <span className={styles.tooltip}>Javascript</span>
          </div>
          <div className={styles.tooltip_wrapper}>
            <StackIcon name="typescript" className={styles.stack_icon} />
            <span className={styles.tooltip}>Typescript</span>
          </div>
          <div className={styles.tooltip_wrapper}>
            <StackIcon name="react" className={styles.stack_icon} />
            <span className={styles.tooltip}>React</span>
          </div>
          <div className={styles.tooltip_wrapper}>
            <StackIcon name="nextjs2" className={styles.stack_icon} />
            <span className={styles.tooltip}>Next.js</span>
          </div>

          <div className={styles.tooltip_wrapper}>
            <StackIcon name="laravel" className={styles.stack_icon} />
            <span className={styles.tooltip}>Laravel</span>
          </div>
          <div className={styles.tooltip_wrapper}>
            <StackIcon name="postgresql" className={styles.stack_icon} />
            <span className={styles.tooltip}>PostgreSQL</span>
          </div>
          <div className={styles.tooltip_wrapper}>
            <StackIcon name="mysql" className={styles.stack_icon} />
            <span className={styles.tooltip}>MySQL</span>
          </div>
          <div className={styles.tooltip_wrapper}>
            <StackIcon name="nodejs" className={styles.stack_icon} />
            <span className={styles.tooltip}>Node.js</span>
          </div>
        </div>

        <p>
          <strong>My Tech Journey</strong>
        </p>
        <p>
          I&apos;ve always enjoyed technology and had an interest in computing,
          from re-soldering the internals of a broken hand-held games console at
          the age of 12 to learning about binary and ASCII out of curiosity. I
          think creativity and problem solving have always been among the things
          that automatically appeal to me, and that played a big part in
          latching on to development once I started dabbling in the basics
          through FreeCodeCamp. About a year after taking these first steps,
          when the opportunity to join the Tech Educators Software Development
          Bootcamp came along and I finally decided I was no longer happy
          continuing in my management career, I made the decision to to go for
          it and haven&apos;t looked back! Having since graduated with a
          distinction from the foundation degree equivalent bootcamp, I am now
          actively seeking my first role in the field, while working on projects
          and continuing to expand into new languages and frameworks.
        </p>

        <p>
          <strong>My Background</strong>
        </p>
        <p>
          For many years I worked in the pub and restaurant trade, with a short
          detour into retail, and had worked my way up to management. Through
          this I gained a huge amount of experience and understanding around
          business organisation, and the value of good communication and
          collaboration. I was later able to carry this experience over to a
          position with a global food brand, acting as a business consultant and
          auditor, providing business support for franchisees, overseeing
          projects for the brand and coordinating reporting. This role
          encompassed a steep learning curve and was a huge learning experience
          overall, and one I look back on proudly. Having relocated to the East
          Midlands in 2023, I began a new role managing two food and retail
          units for a large company. Although I was able to work with another
          great team of people, after a time I decided that this career path was
          no longer what I wanted to pursue, and having begun to dabble in web
          development, took the plunge by joining a full time bootcamp and
          dedicating my time following graduation to starting a career in the
          field.
        </p>

        <p>
          <strong>My Current & Upcoming Projects</strong>
        </p>
        <p>
          At the time of writing, I am currently nearing completion of my
          ecommerce site built in React and now looking ahead to my next
          project, a full stack app with a Laravel back end and React front end,
          using Typescript for the first time in a fully fledged project.
        </p>
      </div>
    </div>
  );
}
