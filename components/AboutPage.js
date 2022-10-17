import styles from '../styles/AboutPage.module.css'

export default function AboutPage() {
    return (
        <div id='about' className={styles.aboutSection}>

          <h1> About Page </h1>
          <p>Welcome to my about page here you will find some info about me and my hobbies.</p>

          <div className={styles.gridAbout}>

            <div className={styles.cardAbout}>
              <h2>About me</h2>
              <p>Discover and deploy boilerplate example Next.js projects. awdawawdawawwadawawdaw wadawdaw.</p>
            </div>

            <div className={styles.cardAbout}>
              <h2>About my intrests</h2>
              <p>Discover and deploy boilerplate example Next.js projects.</p>
            </div>

            <div className={styles.cardAbout}>
              <h2>About my blog</h2>
              <p>Discover and deploy boilerplate example Next.js projects. </p>
            </div>

            <div className={styles.cardAbout}>
              <h2>About my something</h2>
              <p>Discover and deploy boilerplate example Next.js projects. </p>
            </div>

          </div>

        </div>
    )
}