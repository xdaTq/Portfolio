import styles from '../styles/WelcomePage.module.css'
import { NextSeo } from 'next-seo'

export default function WelcomePage() {
  return (
    <>
      <NextSeo title='About' />
      <div className={styles.welcomePage}>
        <div className={`${styles.typewriter} ${styles.welcomeText}`}>
          <h1>
            <span className={styles.namePrimary}>Welcome</span>
            <span>, to my Portfolio.</span>
          </h1>
          <p>
            Hey, im <span className={styles.nameSecondary}>xdaTq</span> and you just found my
            personal space on the internet.
          </p>
        </div>
      </div>
    </>
  )
}
