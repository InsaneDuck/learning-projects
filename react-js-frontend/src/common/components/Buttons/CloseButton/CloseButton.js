import React from "react";
import styles from "./CloseButton.module.css";

const CloseButton = ({onClick}) => {
    return (
        <button
            className={styles.closeButton}
            onClick={onClick}
            aria-label={"Close"}>
            <svg
                viewBox="0 0 12 12"
                width="12"
                height="12"
                fill="currentColor">
                <path
                    d="M 1 1 L 11 11 M 11 1 L 1 11"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"/>
            </svg>
        </button>
    )
}

export default CloseButton;