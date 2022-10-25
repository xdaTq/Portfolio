import styles from '../styles/EearthGalaxy.module.css'

export default function EarthGalaxy() {
  return (
    <div className={styles.centerize}>
      <div className={styles.galaxy}></div>
      <div className={styles.planet}>
        <div className={styles.clouds}></div>
        <div className={styles.land}></div>
      </div>
      <div className={styles.moon}></div>
    </div>
  )
}
