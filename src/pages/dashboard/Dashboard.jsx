import React from 'react'
import styles from './Dashboard.module.css'

const Dashboard = () => {
  return (
    <div className={styles.Dashboard}>
        <h1 className={styles.title}>Welcome</h1>
        <div className={styles.cardContainer}>
            <div className={styles.dashboardCards}>
                <span className={styles.score}>93</span>
                <p className={styles.nameOfPage}>Movies</p>
            </div>
            <div className={styles.dashboardCards}>
                <span className={styles.score}>26</span>
                <p className={styles.nameOfPage}>TV Shows</p>
            </div>
            <div className={styles.dashboardCards}>
                <span className={styles.score}>7</span>
                <p className={styles.nameOfPage}>Suggestions</p>
            </div>
            <div className={styles.dashboardCards}>
                <span className={styles.score}>3</span>
                <p className={styles.nameOfPage}>Manual Suggestions</p>
            </div>
        </div>
        <a href="/" className={styles.throwLink}>Quick Links</a>
        <div className={styles.actionsContainer}>
            <button className={styles.actions}>Suggestion</button>
            <button className={styles.actions}>Add</button>
        </div>
    </div>
  )
}

export default Dashboard