// armazena o state do user

import UserActionTypes from "./action-types";

const initialState = {
    currentUser: null,
}

// recebe dois parâmentros - state e action
// state - estado que vai ser aplicado
// action - objeto com type e payload
const userReducer = (state = initialState, action) => {
    if (action.type === UserActionTypes.LOGIN) {
        return {
            ...state, 
            currentUser: action.payload,
        };
    }

    if (action.type === UserActionTypes.LOGOUT) {
        return {
            ...state, 
            currentUser: null,
        };
    }

    return state;
};

export default userReducer;