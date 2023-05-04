import FoodItems from "./components/FoodItems/FoodItems";
import FoodAppContext, {FoodContextProvider} from "./context/FoodAppContext";
import Modal from "../common/components/Modals/Modal/Modal";
import React, {useContext} from "react";
import FoodBar from "./components/FoodBar/FoodBar";

const FoodApp = () => {
    return (
        <FoodContextProvider>
            <FoodAppSub/>
        </FoodContextProvider>
    );
};

const FoodAppSub = () => {
    const {modalContent, setModalContent} = useContext(FoodAppContext);
    return (
        <>
            <Modal title={"Cart"} onClose={() => setModalContent(null)}>
                {modalContent}
            </Modal>
            <FoodBar/>
            <FoodItems/>
        </>
    );
};

export default FoodApp;