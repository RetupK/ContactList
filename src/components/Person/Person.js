import React from "react";
import "./Person.scss";
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button'
import { Link } from "react-router-dom";

class Person extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            sortOrder: null,
        };
    }

    render() {
        const { clicked, users } = this.props;

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
                    <td><Button variant="danger" onClick={() => clicked(user.id)}>Delete</Button></td>
                </tr>
            );
        })

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
