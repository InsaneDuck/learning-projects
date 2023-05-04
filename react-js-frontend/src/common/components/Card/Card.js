import React from "react";
import style from "./Card.module.css"

const Card = ({children, className, id, onClick}) => {

    return (
        <div
            className={`${style.card} ${className}`}
            onClick={onClick}
            key={id}
        >
            {children}
        </div>
    )
}

export default Card;