import CartActionTypes from "./action-types"

export const addProductToCart = (payload) => ({
    type: CartActionTypes.ADD_PRODUCT,
    payload,
});

export const removeProductToCart = (payload) => ({
    type: CartActionTypes.REMOVE_PRODUCT,
    payload,
});

export const increaseProductToCart = (payload) => ({
    type: CartActionTypes.INCREASE_PRODUCT,
    payload,
});

export const decreaseProductToCart = (payload) => ({
    type: CartActionTypes.DECREASE_PRODUCT,
    payload,
});

