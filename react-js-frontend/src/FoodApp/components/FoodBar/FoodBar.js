import React from "react";
import styles from "./FoodBar.module.css";
import CartButton from "../CartButton/CartButton";
import NavBar from "../../../common/components/NavBar/NavBar";

const FoodBar = () => {

    return (
        <NavBar>
            <div className={styles.navbarTitle}>Burger App</div>
            <CartButton/>
        </NavBar>
    );
};


export default FoodBar;