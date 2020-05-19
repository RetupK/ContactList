import React, { Component } from "react";
import Persons from "./containers/Persons";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import AddPersonContainer from "./containers/AddPerson";
import UpdatePersonContainer from "./containers/UpdatePerson";
import * as actionTypes from './store/actions';
import { connect } from "react-redux";


class App extends Component {

    componentDidMount() {
        const { fetchUsers } = this.props;
        fetchUsers();
    }

    render() {
        return (
            <div className="App">
                <Router basename="/">
                    <Redirect exact from="/" to="/ContactList"/>
                    <Route path="/ContactList" exact={true} component={Persons} />
                    <Route path="/ContactList/add-person" component={AddPersonContainer} />
                    <Route path="/ContactList/update-person/:id" component={UpdatePersonContainer} />
                </Router>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchUsers: () => {
            dispatch({ type: actionTypes.LOADING_USERS })
            return fetch("https://jsonplaceholder.typicode.com/users")
                .then(response => response.json())
                .then(users => {
                    dispatch({
                        type: actionTypes.LOAD_USERS_SUCCESS,
                        users
                    });
                })
                .catch(error => {
                    dispatch({
                        type: actionTypes.LOAD_USERS_ERROR,
                        error
                    });
                });
        }
    };
};

const mapStateToProps = state => {
    return {};
};


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
