import { combineReducers } from "redux";

// currency
import Currency from './currency/reducer';

const rootReducer = combineReducers({ Currency })

export default rootReducer