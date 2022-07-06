import { all, fork } from 'redux-saga/effects';

import currencySaga from './currency/saga'
import cartSaga from './cart/saga'

export default function* rootSaga() {
    yield all([
        // currency
        fork(currencySaga),

        // cart
        fork(cartSaga),
    ])
}