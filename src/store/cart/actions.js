import {
    CHANGE_CART,
    CHANGE_CART_SUCCESS,
} from './actionTypes';

export const changeCart = (payload) => {
    return {
        type: CHANGE_CART,
        payload
    }
}

export const changeCartSuccess = (payload) => {
    return {
        type: CHANGE_CART_SUCCESS,
        payload
    }
}