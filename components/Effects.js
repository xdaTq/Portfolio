import styles from '../styles/Effects.module.css'

export default function Effects() {
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