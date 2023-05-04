import Button from "../common/components/Buttons/Button/Button";
import Modal from "../common/components/Modals/Modal/Modal";
import UserForm from "./UserForm/UserForm";
import Card from "../common/components/Card/Card";
import UserTable from "./UserTable/UserTable";
import {useState} from "react";
import ErrorModal from "../common/components/Modals/ErrorModal/ErrorModal";

const UserNameAndAgeApp = () => {
    const [users, setUsers] = useState([
        {
            age: 20,
            id: 1,
            username: "John Doe",
        },
        {
            age: 20,
            id: 2,
            username: "Jane Doe",
        },
        {
            age: 27,
            id: 3,
            username: "Satya Nalluri",
        },
    ]);
    //console.log(Object.values(users[0]))

    const addUser = (user) => {
        setUsers(prevState => {
            return [...prevState, user]
        })
    };

    const [modalContent, setModalContent] = useState(null)

    const errorModal = <ErrorModal message={"Enter valid age"}/>

    return (
        <>

            <Button onClick={() => setModalContent(errorModal)}>
                Open Modal
            </Button>
            <Modal
                title={"Modal title"}
                onClose={() => setModalContent(null)}>
                {modalContent}
            </Modal>
            <UserForm getUser={(user) => addUser(user)}/>
            {users.length > 0 && <Card>
                <UserTable contents={users}/>
            </Card>}
        </>
    )
}

export default UserNameAndAgeApp;