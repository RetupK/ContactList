import React, { Component } from "react";
import { connect } from "react-redux";
import * as actionTypes from "../store/actions";
import AddPerson from "../components/AddPerson/AddPerson";

class AddPersonContainer extends Component {

    render() {
        return (
            <div>
                <AddPerson personAdded={this.props.onAddedPerson} />
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {};
};

const mapDispatchToProps = dispatch => {
    return {
        onAddedPerson: (name, email) =>
            dispatch({
                type: actionTypes.ADD_PERSON,
                userData: { name: name, email: email }
            }),
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AddPersonContainer);
