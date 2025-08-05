// armazena o state do user

import { act } from "react";
import UserActionTypes from "./action-types";

const initialState = {
    currentUser: null,
}

// recebe dois parâmentros - state e action
// state - estado que vai ser aplicado
// action - objeto com type e payload
const userReducer = (state = initialState, action) => {
    switch (action.type){
        case UserActionTypes.LOGIN:
            return {
                ...state, 
                currentUser: action.payload,
            };
    
        case UserActionTypes.LOGOUT:
            return {
                ...state, 
                currentUser: null,
            };
        
        default:
            return state;
    }
};

export default userReducer;