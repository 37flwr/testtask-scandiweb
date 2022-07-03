import {
    CHANGE_CURRENCY,
    CHANGE_CURRENCY_SUCCESS,
} from './actionTypes';

export const changeCurrency = (payload) => {
    return {
        type: CHANGE_CURRENCY,
        payload
    }
}

export const changeCurrencySuccess = (payload) => {
    return {
        type: CHANGE_CURRENCY_SUCCESS,
        payload
    }
}