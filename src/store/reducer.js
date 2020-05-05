import * as actionTypes from "./actions";

const initialState = {
    loading: false,
    data: [],
    error: null
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.LOADING_USERS:
            return { ...state, loading: true };
        case actionTypes.LOAD_USERS_SUCCESS:
            return {
                ...state,
                data: action.users,
                loading: false
            };
        case actionTypes.LOAD_USERS_ERROR:
            return {
                ...state,
                error: action.error,
                loading: false
            };
        case actionTypes.ADD_PERSON:
            const newPerson = {
                id: generateId(),
                name: action.userData.name,
                email: action.userData.email
            };
            return {
                ...state,
                data: state.data.concat(newPerson)
            };
        case actionTypes.UPDATE_PERSON:
            const changedData = state.data.map(person => {
                if (person.id === action.person.id) {
                    return action.person
                } else {
                    return person
                }
            })
            return {
                ...state,
                data: changedData,
            };
        case actionTypes.REMOVE_PERSON:
            return {
                ...state,
                data: state.data.filter(person => person.id !== action.personId)
            };
        case actionTypes.CHANGE_SORT_ORDER:
            const order = action.order
            const newData = state.data.sort((a, b) => order * a.username.localeCompare(b.username))
            return {
                ...state,
                data: newData,
            }
        default:
            return state;
    }
};

function generateId() {
    return Math.floor((Math.random() * 1000)) + 10;
}

export default reducer;
