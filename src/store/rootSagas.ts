import { all } from "redux-saga/effects"
import countriesSagas from './countries/sagas'

function* rootSagas() {
    yield all([
        ...countriesSagas
    ]);
}

export default rootSagas;
