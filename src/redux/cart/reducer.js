import { act } from "react";
import CartActionTypes from "./action-types";

const initialState = {
    products: [],
    productsTotalPrice: 0,
}

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case CartActionTypes.ADD_PRODUCT:
        {
            // verificar se existe no carrinho
            const productIsAlreadyInCart = state.products.some(product => product.id === action.payload.id);
            
            // se existir adicionar +1 na quantidade
            if (productIsAlreadyInCart) {
                return{
                    ...state,
                    products: state.products.map(product => product.id === action.payload.id ? { ...product, quantity: product.quantity + 1} : product),
                };
            }         
            
            // se não existir adicionar ao carrinho
            return {
                ...state,
                products: [
                    ...state.products,
                    { ...action.payload, quantity: 1 }
                ],
            }
        }

        case CartActionTypes.REMOVE_PRODUCT:
        {
            return {
                ...state,
                products: state.products.filter(product => product.id !== action.payload),
            };
        }

        case CartActionTypes.INCREASE_PRODUCT:
        {
            return {
                ...state,
                products: state.products.map(product => product.id === action.payload.id ? { ...product, quantity: product.quantity + 1} : product),
            };
        }
        
        default:
        return state;
    }
}

export default cartReducer;
