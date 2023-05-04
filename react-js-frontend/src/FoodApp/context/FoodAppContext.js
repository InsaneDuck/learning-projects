import React, {createContext, useEffect, useState} from "react";
import {fetchData} from "../../common/hooks/Hooks";

const FoodAppContext = createContext({});

export const FoodContextProvider = ({children}) => {
    const [food, setFood] = useState([]);

    useEffect(() => {
        fetchData(
            "http://localhost:8080/foodMenus",
            "satya",
            "password").then(data => setFood(data._embedded.foodMenus));
    }, [food]);

    // const [data] = useFetch(
    //     "http://localhost:8080/foodMenus",
    //     "satya",
    //     "password")
    // useEffect(() => {
    //     setFood(data._embedded.foodMenus)
    // }, [])

    const [cart, setCart] = useState([]);
    const [modalContent, setModalContent] = useState(null);

    const addToCart = (foodItem) => {
        const item = cartHasItem(cart, foodItem);
        console.log(item);
        setCart(item);
    };

    return (
        <FoodAppContext.Provider
            value={{
                foodItems: food,
                cart: cart,
                addToCart: addToCart,
                modalContent: modalContent,
                setModalContent: setModalContent
            }}>
            {children}
        </FoodAppContext.Provider>);

};
const cartHasItem = (cart, foodItem) => {
    const cartItem = cart.find(obj => obj.id === foodItem.id);
    if (cartItem) {
        foodItem.quantity = cartItem.quantity + foodItem.quantity;
        return [...cart.filter(obj => obj.id !== foodItem.id), foodItem];
    } else {
        return [...cart, foodItem];
    }
};
export default FoodAppContext;