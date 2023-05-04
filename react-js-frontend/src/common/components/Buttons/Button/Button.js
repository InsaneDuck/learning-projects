import React from "react";
import style from "./Button.module.css"

const Button = ({className,type, children, onClick}) => {
    return (
        <button
            className={`${style.buttonRounded} ${className}`}
            type={type}
            onClick={onClick}>
            {children}
        </button>
    )
}

export default Button;