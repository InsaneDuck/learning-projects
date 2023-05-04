import React, {useContext, useEffect, useState} from "react";
import FoodAppContext from "../../context/FoodAppContext";
import CartModalItem from "../CartModalItem/CartModalItem";
import Button from "../../../common/components/Buttons/Button/Button";
import styles from "./CartModal.module.css"

const CartModal = () => {
    const {cart} = useContext(FoodAppContext)

    const [cartTotal, setCartTotal] = useState(0.00)

    useEffect(() => {
        setCartTotal(cart.reduce((sum, item) => sum + ((item.price * 10000) * item.quantity) / 10000, 0.00))
    }, [cart])

    const placeOrder = (event) => {
        event.preventDefault()
    };

    return (
        <form onSubmit={placeOrder}>
            {cart.map(item => <CartModalItem
                id={item.id}
                name={item.name}
                image={item.image}
                price={item.price}
                quantity={item.quantity}/>)}
            <div className={styles.cartModalFooter}>
                Total Price :{cartTotal}
                <Button type={"submit"}>Place Order</Button>
            </div>

        </form>
    )
}


export default CartModal