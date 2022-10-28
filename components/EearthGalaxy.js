import styles from '../styles/EearthGalaxy.module.css'
import { NextSeo } from 'next-seo'

export default function EarthGalaxy() {
  return (
    <>
      <NextSeo title='Earth' />
      <div className={styles.centerize}>
        <div className={styles.galaxy}></div>
        <div className={styles.planet}>
          <div className={styles.clouds}></div>
          <div className={styles.land}></div>
        </div>
        <div className={styles.moon}></div>
      </div>
    </>
  )
}
