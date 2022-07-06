import { put, takeEvery } from 'redux-saga/effects';

import { changeCartSuccess } from './actions';
import { CHANGE_CART } from './actionTypes';

function* changeCartSaga({ payload }) {
    try {
        yield put(changeCartSuccess(payload));
    } catch (error) {
        console.log(error)
    }
}

function* cartSaga() {
    yield takeEvery(CHANGE_CART, changeCartSaga)
}

export default cartSaga