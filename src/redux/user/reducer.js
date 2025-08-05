// armazena o state do user

const initialState = {
    currentUser: null,
}


// recebe dois parâmentros - state e action
// state - estado que vai ser aplicado
// action - objeto com type e payload
const userReducer = (state = initialState, action) => {
    if (action.type === 'user/login') {
        return {
            ...state, 
            currentUser: action.payload,
        };
    }

    return state;
};

export default userReducer;