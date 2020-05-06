import React from "react";
import "./Person.scss";
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button'
import { Link } from "react-router-dom";

class Modal extends React.Component {
    render() {
        const {users, userName, userId, removePerson, showModal, toggle, modal} = this.props;
        let modals = users.map((item, index) => {
            return (
                <div className={`modal-portfolio ${showModal ? " modal-visible" : " modal-non-visible"}`}>
                    <p>Do you want delete? {item.name}</p>
                    <button onClick={() => removePerson(item.id)}>Remove</button>
                    <button onClick={toggle}>Cancel</button>
                </div>
            )
        })
        
        return (
            <>
                {modals}
            </>
        )
    }
}

class Person extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            sortOrder: null,
            showModal: false,
            modal: {id: null}
        };
        this.handleToggleModal = this.handleToggleModal.bind(this);
    }

    handleToggleModal() {
        this.setState({
            showModal: !this.state.showModal
        })
    }


    render() {
        const { removePerson, users } = this.props;
        

        let renderEditButton = (id) => (
            <Link to={`/update-person/${id}`}>
                <Button variant="warning">
                    Edit
                </Button>
            </Link>
        );

        let renderUsers = users.map((user) => {
            return (
                <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.username}</td>
                    <td>{user.email}</td>
                    <td>{user && user.address && user.address.city}</td>
                    <td>{renderEditButton(user.id)}</td>
                    <td>
                        <Button variant="danger" onClick={() => this.handleToggleModal()}>Delete</Button>
                    </td>
                </tr>
            );
        })

        //removePerson(user.id)

        let renderAddPersonButton = (
            <Link to="/add-person" className="table-header-buttonAdd">
                <Button variant="primary">
                    Add User
                </Button>
            </Link>
        );

        return (
            <>
                <div className="table-main-container">
                    <h1 className="table-main-h1">Dashboard</h1>
                    <div className="table-header-container">
                        <p className="table-header-text">Users List</p>
                        {renderAddPersonButton}
                    </div>
                    <Modal
                        users={users}
                        removePerson={removePerson}
                        toggle={this.handleToggleModal}
                        showModal={this.state.showModal}
                        modal={this.state.modal}
                    />
                    
                    <Table striped bordered hover variant="dark">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Name</th>
                                <th className="clickable" onClick={this.changeSortOrder}>
                                    UserName {this.renderSortOrder(this.state.sortOrder)}
                                </th>
                                <th>Email</th>
                                <th>City</th>
                                <th>Edit</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {renderUsers}
                        </tbody>
                    </Table>
                </div>
            </>
        )
    }

    renderSortOrder = (sortOrder) => {
        if (sortOrder === 1) {
            return 'A-Z'
        }
        if (sortOrder === -1) {
            return 'Z-A'
        }

        return ''
    }

    changeSortOrder = () => {
        const currentSortOrder = this.state.sortOrder;
        if (currentSortOrder === 1) {
            this.setState({
                sortOrder: -1
            })
            this.props.changeSortOrder(-1)
        } else {
            this.setState({
                sortOrder: 1
            })
            this.props.changeSortOrder(1)
        }
    }

}



export default Person;
