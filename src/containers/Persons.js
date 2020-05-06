import React, { Component } from "react";
import { connect } from "react-redux";
import Person from "../components/Person/Person";
import * as actionTypes from "../store/actions";

class Persons extends Component {

    render() {
        const { loading, users, error } = this.props;
        if (loading) return <span>loading...</span>;
        if (error) return <span>error!</span>;
        return (
            <div>
                <Person
                    users={users}
                    removePerson={this.props.onRemovePerson}
                    changeSortOrder={this.props.onChangeSortOrder}
                />
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        users: state.data,
        loading: state.loading,
        error: state.error,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onRemovePerson: id =>
            dispatch({ type: actionTypes.REMOVE_PERSON, personId: id }),
        onChangeSortOrder: (order) =>
            dispatch({
                type: actionTypes.CHANGE_SORT_ORDER,
                order,
            }),
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Persons);
