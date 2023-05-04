import React from "react";
import style from "./UserTable.module.css"

const UserTable = ({contents}) => {
    return (
        <table border={1} className={style.tableStyled}>
            <thead>
            <tr>
                <th>ID</th>
                <th>Username</th>
                <th>Age</th>
            </tr>
            </thead>
            <tbody>
            {contents.map(content =>
                <tr key={content.id}>
                    <td>{content.id}</td>
                    <td>{content.username}</td>
                    <td>{content.age}</td>
                </tr>
            )}
            </tbody>
        </table>
    )
}
export default UserTable;