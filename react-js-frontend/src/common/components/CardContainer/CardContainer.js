import React from "react";
import styles from "./CardContainer.module.css"

const CardContainer = ({children, className}) => {
    return (
        <div className={`${styles.cardContainer} ${className}`}>{children}</div>
    )
}

export default CardContainer