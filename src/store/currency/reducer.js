import {
    CHANGE_CURRENCY, CHANGE_CURRENCY_SUCCESS,
} from './actionTypes';

const initialState = {
    error: false,
    currency: 'usd',
}

const currency = (state = initialState, action) => {
    switch(action.type) {
        case CHANGE_CURRENCY:
            return {
                ...state,
            }
        case CHANGE_CURRENCY_SUCCESS:
            return {
                ...state,
                currency: action.payload,
            }
        default:
            return state
    }
}

export default currency