import {useContext, useState} from "react";
import Card from "../../../common/components/Card/Card";
import styles from "./FoodItem.module.css";
import Button from "../../../common/components/Buttons/Button/Button";
import FoodAppContext from "../../context/FoodAppContext";

export const FoodItem = ({id, name, image, price}) => {
    const {addToCart} = useContext(FoodAppContext);
    const [quantity, setQuantity] = useState(1);
    const updateQuantity = (event) => {
        setQuantity(event.target.value);
    };

    const add = (event) => {
        event.preventDefault();
        addToCart(
            {
                id: id,
                name: name,
                image: image,
                price: price,
                quantity: Number(quantity)
            });
        //reset after adding
        setQuantity(1);
    };

    return (
        <Card className={styles.mainCard}>
            <div className={styles.cardContent}>
                <img className={styles.cardImage} src={image} alt={name}/>
                <div style={{width: "70%"}}>
                    <form>
                        <div className={styles.foodCard}>
                            <h3>{name}</h3>
                            <input
                                type={"number"}
                                value={quantity}
                                onChange={updateQuantity}
                                min={1}
                                max={10}
                            />
                        </div>
                        <div className={styles.foodCard}>
                            <h2>{price}</h2>
                            <Button type={"submit"} onClick={add}>+ Add</Button>
                        </div>
                    </form>
                </div>
            </div>
        </Card>
    );
};