import {
    CHANGE_CART, CHANGE_CART_SUCCESS,
} from './actionTypes';

const initialState = {
    error: false,
    cart: null,
}

const currency = (state = initialState, action) => {
    switch(action.type) {
        case CHANGE_CART:
            return {
                ...state,
            }
        case CHANGE_CART_SUCCESS:
            return {
                ...state,
                cart: action.payload,
            }
        default:
            return state
    }
}

export default currency