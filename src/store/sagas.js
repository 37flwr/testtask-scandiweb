import { all, fork } from 'redux-saga/effects';

import currencySaga from './currency/saga'

export default function* rootSaga() {
    yield all([
        // theme
        fork(currencySaga),
    ])
}