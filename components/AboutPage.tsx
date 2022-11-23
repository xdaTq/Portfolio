import styles from '../styles/AboutPage.module.css'
import { NextSeo } from 'next-seo'

export default function AboutPage() {
  return (
    <>
      <NextSeo title='About' />
      <div className={styles.aboutSection}>
        <h1>
          My <span className={styles.nameSecondary}>About</span> Page{' '}
        </h1>
        <p>Welcome to my about page here you will find information about me and my intrests.</p>

        <br />

        <div className={styles.gridAbout}>
          <div className={styles.cardAbout}>
            <h2>Languages</h2>
            <p>These are the different programming languages i have worked with in the past.</p>
            <div className={styles.grid}>
              <div className={styles.cardLang}>Javascript</div>
              <div className={styles.cardLang}>Typescript</div>
              <div className={styles.cardLang}>Python</div>
              <div className={styles.cardLang}>PHP</div>
              <div className={styles.cardLang}>GO</div>
              <div className={styles.cardLang}>SQL</div>
            </div>
          </div>

          <div className={styles.cardAbout}>
            <h2>Intrests</h2>
            <p>
              I have a huge intrests in Music and Cars especially cars from japan those 90s some of my personal 
              favorites are S15 and 240sx huge fan of those :), As for music I like all kinds of music but for the most i listen to lo-fi
              which i find is great for working or relaxing.{' '}
            </p>
            <div className={styles.grid}>
              <div className={styles.cardLang}>Cars</div>
              <div className={styles.cardLang}>Music</div>
            </div>
          </div>

          <div className={styles.cardAbout}>
            <h2>About my blog</h2>
            <p>Blog is coming soon...</p>
            <div className={styles.grid}>
              <div className={styles.cardLang}>Blog</div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
