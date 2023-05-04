import styles from "./CartButton.module.css";
import Button from "../../../common/components/Buttons/Button/Button";
import React, {useContext, useEffect, useState} from "react";
import FoodAppContext from "../../context/FoodAppContext";
import CartModal from "../CartModal/CartModal";

const CartButton = ({onClick}) => {
    const {cart, setModalContent} = useContext(FoodAppContext);
    const cartModalData = <CartModal/>;
    const [cartTotalContents, setCartTotalContents] = useState(0);

    useEffect(() => {
        setCartTotalContents(cart.reduce((total, currentValue) => total + currentValue.quantity, 0));
    }, [cart]);

    return (
        <Button
            className={styles.cartButton}
            onClick={() => setModalContent(cartModalData)}
        >
            Cart ({cartTotalContents})
        </Button>
    );
};

export default CartButton;