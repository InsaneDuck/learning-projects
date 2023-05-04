import Card from "../../../common/components/Card/Card";
import React from "react";

const CartModalItem = ({id, name, image, price, quantity}) => {
    return (
        <Card key={id}>
            <div>{name}</div>
            <div>{price}</div>
            <div>{quantity}</div>
        </Card>
    )
}

export default CartModalItem