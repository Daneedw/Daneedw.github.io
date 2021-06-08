import React from 'react'
import styles from "./style.module.css"

export default function Footer() {
    return (
        <footer className={styles.footer}>
            
            <div className={styles.socialMedia}>
                <a href="https://github.com/Daneedw">
            <i class="fa fa-github" aria-hidden="true"></i>Github</a>

            <a href="https://www.linkedin.com/in/dane-edwards-38243467/">
                        <i class="fa fa-linkedin-square" aria-hidden="true"></i>LinkedIn
            </a>
            </div>
                     
            Copyright © 2021 Dane Edwards

        </footer>
    )
}
