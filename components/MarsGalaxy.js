import styles from '../styles/MarsGalaxy.module.css'
import { NextSeo } from 'next-seo'

export default function MarsGalaxy() {
  return (
    <>
      <NextSeo title='Mars' />
      <div className={styles.centerize}>
        <div className={styles.galaxy}></div>
        <div className={styles.planet}></div>
        <div className={styles.moon}></div>
        <div className={styles.star}></div>
      </div>
    </>
  )
}
