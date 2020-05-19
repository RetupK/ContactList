import React from "react";
import Button from 'react-bootstrap/Button';


export const Modal = ({removePerson, name, showModal, toggle, id}) => {
    let modal = showModal ? (
        <div className={`${showModal ? "modal-visible" : "modal-non-visible"}`}>
            <div className="modal-header">
                <p>Remove user</p>
            </div>
            <div className="modal-question-container">
                <p>Are you sure to remove <span className="modal-userName">{name}</span>?</p>
            </div>
            <div className="modal-buttons-container">
                <Button variant="danger" onClick={() => {removePerson(id); toggle();}}>Remove</Button>
                <Button variant="warning" onClick={toggle}>Cancel</Button>
            </div>
        </div>
    ) : null
    
    return (
        <>
            {modal}
        </>
    )
}