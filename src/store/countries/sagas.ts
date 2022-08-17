import { call, put, takeLatest } from "redux-saga/effects"
import { CountriesAction, CountriesActionTypes, CountryData } from "./types"
import * as countryServices from '../../services/countries'
import actions from "./actions"

export function* fetchAvailableCountryNames() {
    try {
        const availableCountries: string[] = yield call(countryServices.fetchAvailableCountryNames);
        console.log({ availableCountries })
        yield put(actions.setAvailableCountryNames(availableCountries))
    } catch (e: any) {
        yield put(actions.setError(e.message));
    }
}

export function* fetchCountryDataByName({ payload }: CountriesAction) {
    if (!payload) return;
    const { countryName } = payload;
    if (!countryName) return
    try {
        yield put(actions.setLoading(true))
        const currentCountryData: CountryData = yield call(countryServices.fetchCountryDataByName, countryName);
        console.log({ currentCountryData })
        yield put(actions.setSelectedCountryData(currentCountryData))

    } catch (e: any) {
        yield put(actions.setError(e.message));
    } finally {
        yield put(actions.setLoading(false))
    }

}

// export function* login({ payload }) {
//     if (!payload) return;
//     const { cpf, encryptedBase64Image } = payload;
//     if (!cpf || !encryptedBase64Image) return;
//     yield put(actions.setLoading(true));
//     yield put(actions.setError(undefined));
//     yield put(actions.setAuthenticated(false))
//     try {
//         yield call(loginService, cpf, encryptedBase64Image);
//         yield put(actions.setAuthenticated(true))
//     } catch (e) {
//         yield put(actions.setError(e.message));
//     } finally {
//         yield put(actions.setLoading(false));
//     }
// }

const sagas = [
    takeLatest(CountriesActionTypes.FETCH_AVAILABLE_COUNTRY_NAMES, fetchAvailableCountryNames),
    takeLatest(CountriesActionTypes.FETCH_COUNTRY_DATA_BY_NAME, fetchCountryDataByName),
    // takeLatest(authActionTypes.LOGIN, login),
];

export default sagas;
