import React from 'react'
import styles from './footer.module.scss'

const Footer = () => {
    const year = new Date().getFullYear()
    return (
        <footer>
            <div className={styles.name}>
                <span>&copy; {year} by Kevin LaCarrubba</span>
            </div>
        </footer>
    )
}

export default Footer
