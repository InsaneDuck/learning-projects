import React from "react";
import Card from "../../Card/Card";
import styles from "./Modal.module.css";
import headerStyles from "./ModalHeader.module.css";
import CloseButton from "../../Buttons/CloseButton/CloseButton";

const Modal = ({children, title, onClose}) => {
    if (!children) {
        return null;
    }

    const closeModal = (event) => {
        if (event.target === event.currentTarget) {
            onClose();
        }
    };

    return (
        <div className={styles.modalOverlay} onClick={closeModal}>
            <Card className={styles.modal}>
                <ModalHeader title={title} onClick={onClose}/>
                {children}
            </Card>
        </div>
    );
};

const ModalHeader = ({title, onClick}) => {
    return (
        <div className={headerStyles.container}>
            <span className={`${headerStyles.textCenter}`}>
                <span className={headerStyles.pill}>{title}</span>
            </span>
            <CloseButton onClick={onClick}/>
        </div>
    );
};

export default Modal;