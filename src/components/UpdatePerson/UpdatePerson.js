import React, { Component } from "react";
import "../AddPerson/AddPerson.scss";
import Button from 'react-bootstrap/Button';
import { NavLink as Link } from 'react-router-dom';
import Form from 'react-bootstrap/Form'

const emailValidator = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

class UpdatePerson extends Component {
    constructor(props) {
        super(props);
        const { person } = props
        this.state = {
            id: person.id,
            name: person.name || '',
            city: (person.address && person.address.city) || '',
            username: person.username || '',
            emailAddress: person.email || '',
            firstNameError: "",
            emailAddressError: "",
            isFormSubmitted: false,
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleBlur = this.handleBlur.bind(this);
        this.validateFirstName = this.validateFirstName.bind(this);
        this.validateEmailAddress = this.validateEmailAddress.bind(this);
        this.validateField = this.validateField.bind(this);
    }

    handleChange(event) {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
        return;
    }

    handleBlur(event) {
        const { name } = event.target;
        this.validateField(name);
        return;
    }

    validateField(name) {
        let isValid = false;
        if (name === "name") isValid = this.validateFirstName();
        else if (name === "emailAddress") isValid = this.validateEmailAddress();
        return isValid;
    }

    validateFirstName() {
        let firstNameError = "";
        const value = this.state.name;
        if (value.trim() === "") firstNameError = "First Name is required";

        this.setState({
            firstNameError
        });
        return firstNameError === "";
    }

    validateEmailAddress() {
        let emailAddressError = "";
        const value = this.state.emailAddress;
        if (value.trim === "") emailAddressError = "Email Address is required";
        else if (!emailValidator.test(value))
            emailAddressError = "Email is not valid";
        this.setState({
            emailAddressError
        });
        return emailAddressError === "";
    }

    render() {
        const {emailAddressError, firstNameError, name, emailAddress, username, city} = this.state;
        let disabled = (!emailAddressError && !firstNameError && username && city) == "";
        return (
            <div className="userForm-main-container">
                <div className="userForm-header-container">
                    <h3>Update User</h3>
                </div>
                <Form className="userForm-form-container" onSubmit={this.handleSubmit}>
                    <Form.Group>
                        <Form.Label>Name</Form.Label>
                        <Form.Control 
                            type="text"
                            placeholder="First Name"
                            name="name"
                            value={name}
                            onChange={this.handleChange}
                            onBlur={this.handleBlur}
                            autoComplete="off" 
                        />
                    </Form.Group>
                    {firstNameError && (
                        <div className="errorMsg">{firstNameError}</div>
                    )}
                    <Form.Group controlId="formGroupEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control 
                            type="email"
                            placeholder="Email Address"
                            name="emailAddress"
                            value={emailAddress}
                            onChange={this.handleChange}
                            onBlur={this.handleBlur}
                            autoComplete="off"
                        />
                        
                    </Form.Group>
                    {emailAddressError && (
                        <div className="errorMsg">{emailAddressError}</div>
                    )}
                    <Form.Group>
                        <Form.Label>userName</Form.Label>
                        <Form.Control 
                            type="text"
                            placeholder="User Name"
                            name="username"
                            value={username}
                            onChange={this.handleChange}
                            onBlur={this.handleBlur}
                            autoComplete="off"
                        />
                        
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>City</Form.Label>
                        <Form.Control 
                            type="text"
                            placeholder="city"
                            name="city"
                            value={city}
                            onChange={this.handleChange}
                            onBlur={this.handleBlur}
                            autoComplete="off"
                        /> 
                    </Form.Group>
                    <div className="userForm-add-cancel-buttons">
                        <Link to="/ContactList" className="userForm-cancel-button">
                            <Button variant="warning">Cancel</Button>
                        </Link>
                        <Link to="/ContactList">
                            <Button
                                variant="primary"
                                disabled={disabled}
                                onClick={() => this.props.onUpdatePerson({
                                    id: this.props.person.id,
                                    name: name,
                                    username: username,
                                    email: emailAddress,
                                    address: { city: city },
                                })}
                            >
                                Update Person
                            </Button>
                        </Link>
                    </div>
                </Form>
            </div>
        );
    }
}

export default UpdatePerson;
