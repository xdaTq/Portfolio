import styles from '../styles/MarsGalaxy.module.css'

export default function MarsGalaxy() {
    return (
      <div className={styles.marsGalaxySection}>
        <div className={styles.centerize}>
          <div className={styles.galaxy}></div>
            <div className={styles.planet}>
            </div>
          <div className={styles.moon}></div>
          <div className={styles.star}></div>
        </div>
      </div>
    )
}