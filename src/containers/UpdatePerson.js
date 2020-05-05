import React, { Component } from "react";
import { connect } from "react-redux";
import * as actionTypes from "../store/actions";
import UpdatePerson from "../components/UpdatePerson/UpdatePerson";

class UpdatePersonContainer extends Component {

    render() {
        const person = this.props.users.find(user => user.id == this.props.match.params.id);
        if (!person) {
            return <div>Loading...</div>
        }
        return (
            <div>
                <UpdatePerson person={person} onUpdatePerson={this.props.updatePerson} />
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        users: state.data
    };
};

const mapDispatchToProps = dispatch => {
    return {
        updatePerson: (person) =>
            dispatch({
                type: actionTypes.UPDATE_PERSON,
                person,
            }),
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(UpdatePersonContainer);
