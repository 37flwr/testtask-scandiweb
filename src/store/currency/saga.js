import { put, takeEvery } from 'redux-saga/effects';

import { changeCurrencySuccess } from './actions';
import { CHANGE_CURRENCY } from './actionTypes';

function* changeCurrencySaga({ payload }) {
    try {
        yield put(changeCurrencySuccess(payload));
    } catch (error) {
        console.log(error)
    }
}

function* currencySaga() {
    yield takeEvery(CHANGE_CURRENCY, changeCurrencySaga)
}

export default currencySaga