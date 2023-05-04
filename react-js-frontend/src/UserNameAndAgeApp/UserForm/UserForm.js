import React, {useState} from "react";
import Input from "../../common/components/Input/Input";
import Card from "../../common/components/Card/Card";
import Button from "../../common/components/Buttons/Button/Button";

const UserForm = ({getUser}) => {
    const [user, setUser] = useState(
        {
            username: "",
            age: ""
        })

    let valueChangeListener = (value, key) => {
        setUser(prevState => ({
            ...prevState,
            [key]: value,
        }))
    };

    const onSubmit = (event) => {
        event.preventDefault();
        getUser({...user, id: Math.random()})
    }

    return (
        <Card>
            <form onSubmit={onSubmit}>
                <Input label={"Username"} type={"text"} name={"username"} id={"username"}
                       onChange={(value) => valueChangeListener(value, "username")}/>
                <Input label={"Age (years)"} type={"number"} name={"age"} id={"age"}
                       onChange={(value) => valueChangeListener(value, "age")}/>
                <Button type={"submit"}>Add User</Button>
            </form>
        </Card>
    )
}

export default UserForm;