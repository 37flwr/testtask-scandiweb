import { combineReducers } from "redux";

// currency
import Currency from './currency/reducer';

// cart
import Cart from './cart/reducer'

const rootReducer = combineReducers({ Currency, Cart })

export default rootReducer