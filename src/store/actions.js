export const ADD_PERSON = "ADD_PERSON";
export const UPDATE_PERSON = "UPDATE_PERSON";
export const REMOVE_PERSON = "REMOVE_PERSON";
export const LOADING_USERS = "LOADING_USERS";
export const LOAD_USERS_SUCCESS = "LOAD_USERS_SUCCESS";
export const LOAD_USERS_ERROR = "LOAD_USERS_ERROR";
export const CHANGE_SORT_ORDER = "CHANGE_SORT_ORDER";

export function fetchDataRequest() {
    return {
        type: LOADING_USERS
    };
}

export function fetchDataSuccess(data) {
    return {
        type: LOAD_USERS_SUCCESS,
        data
    };
}

export function fetchDataError(error) {
    return {
        type: LOAD_USERS_ERROR,
        payload: { error }
    };
}