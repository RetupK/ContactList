import React from "react";
import Button from 'react-bootstrap/Button'

export let RenderPersons = ({users, renderEditButton, handleToggleModal}) => 
users.map((user) => {
    return (
        <tr key={user.id}>
            <td>{user.id}</td>
            <td>{user.name}</td>
            <td>{user.username}</td>
            <td>{user.email}</td>
            <td>{user && user.address && user.address.city}</td>
            <td>{renderEditButton(user.id)}</td>
            <td>
                <Button variant="danger" onClick={() => handleToggleModal(user.id, user.name)}>Delete</Button>
            </td>
        </tr>
    );
})