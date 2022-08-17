import { combineReducers } from 'redux';
import countriesReducer from "./countries/reducer"

const reducers = combineReducers({
    Countries: countriesReducer
});

export default reducers;
