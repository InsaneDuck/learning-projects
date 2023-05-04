import React from "react";
import styles from "./NavBar.module.css"

const NavBar = ({children, title}) => {


    return (
        <nav className={styles.navbar}>
            <div className={styles.navContent}>
                {children}
            </div>
        </nav>
    )
}


export default NavBar;