import {FoodItem} from "../FoodItem/FoodItem";
import styles from "./FoodItems.module.css"
import CardContainer from "../../../common/components/CardContainer/CardContainer";
import {useContext} from "react";
import FoodAppContext from "../../context/FoodAppContext";

const FoodItems = () => {
    const {foodItems} = useContext(FoodAppContext)


    const foodItemComponents = foodItems.map(foodItem =>
        <FoodItem
            key={foodItem.id}
            id={foodItem.id}
            name={foodItem.name}
            image={foodItem.image}
            price={foodItem.price}
            quantity={foodItem.quantity}
        />
    )

    return (
        <div className={styles.foodItems}>
            <CardContainer>
                {foodItemComponents}
            </CardContainer>
        </div>
    )
}


export default FoodItems;