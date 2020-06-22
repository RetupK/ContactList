import React, { Component } from "react";
import "./AddPerson.scss";
import Button from 'react-bootstrap/Button';
import { NavLink as Link } from 'react-router-dom';
import Form from 'react-bootstrap/Form'

const emailValidator = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

class AddPerson extends Component {
    constructor() {
        super();
        this.state = {
            name: "",
            emailAddress: "",
            firstNameError: "",
            emailAddressError: "",
            isFormSubmitted: false
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleBlur = this.handleBlur.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
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

    handleSubmit(event) {
        event.preventDefault();
        let formFileds = [
            "name",
            "emailAddress",
        ];
        let isValid = true;
        formFileds.forEach(field => {
            isValid = this.validateField(field) && isValid;
        });

        if (isValid) this.setState({ isFormSubmitted: true });
        else this.setState({ isFormSubmitted: false });

        return this.state.isFormSubmitted;
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
        const {emailAddressError, firstNameError, name, emailAddress} = this.state;
        let disabled = (!emailAddressError && !firstNameError && emailAddress) == "";
        return (
            <>
            <h1 className="userForm-main-h1">Dashboard</h1>
            <div className="userForm-main-container">
                <div className="userForm-header-container">
                    <h3>Add User</h3>
                </div>
                <Form className="userForm-form-container" onSubmit={this.handleSubmit}>
                    <Form.Group controlId="formGroupEmail">
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
                    <Form.Group controlId="formGroupPassword">
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
                    <div className="userForm-add-cancel-buttons">
                        <Link className="userForm-cancel-button" to="/ContactList">
                            <Button variant="warning">Cancel</Button>
                        </Link>
                        <Link to="/ContactList">
                            <Button
                                className="userForm-addUser-button"
                                variant="primary"
                                disabled={disabled}
                                onClick={() => this.props.personAdded(name, emailAddress)}
                            >
                                Add User
                            </Button>
                        </Link> 
                    </div>
                </Form>
            </div>
            </>
        );
    }
}

export default AddPerson;