import React from "react";
import "./Person.scss";
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button'
import { Link } from "react-router-dom";
import {RenderPersons} from "./RenderPersons";
import {Modal} from "./Modal";


class Person extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sortOrder: null,
            showModal: false,
            id: null,
            name: null
        };
        this.handleToggleModal = this.handleToggleModal.bind(this);
    }

    handleToggleModal = (id, name) => {
        this.setState({
            showModal: !this.state.showModal,
            id: id,
            name: name
        })
    }

    render() {
        const { removePerson, users } = this.props;
        
        let renderEditButton = (id) => (
            <Link to={`/ContactList/update-person/${id}`}>
                <Button variant="warning">
                    Edit
                </Button>
            </Link>
        );

        let renderAddPersonButton = (
            <Link to="/ContactList/add-person" className="table-header-buttonAdd">
                <Button variant="primary">
                    Add User
                </Button>
            </Link>
        );

        return (
            <>
                <Modal
                    removePerson={removePerson}
                    toggle={this.handleToggleModal}
                    showModal={this.state.showModal}
                    id={this.state.id}
                    name={this.state.name}
                />
                <div className="table-main-container">
                    <h1 className="table-main-h1">Dashboard</h1>
                    <div className="table-header-container">
                        <p className="table-header-text">Users List</p>
                        {renderAddPersonButton}
                    </div>
                    <Table responsive="lg md sm" striped bordered hover variant="dark">
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
                            <RenderPersons 
                                users={users}
                                handleToggleModal={this.handleToggleModal}
                                renderEditButton={renderEditButton}
                            />
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
