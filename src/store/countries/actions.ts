import { CountriesActionTypes, CountriesAction, CountryData } from './types'

const setLoading = (isLoading: boolean): CountriesAction => ({
    payload: { isLoading },
    type: CountriesActionTypes.SET_LOADING,
})

const setError = (error: any): CountriesAction => ({
    payload: { error },
    type: CountriesActionTypes.SET_ERROR,
})
const setSelectedCountryData = (currentCountryData: CountryData): CountriesAction => ({
    payload: { currentCountryData },
    type: CountriesActionTypes.SET_SELECTED_COUNTRY_DATA,
})
const setAvailableCountryNames = (availableCountryNames: string[]): CountriesAction => ({
    payload: { availableCountryNames },
    type: CountriesActionTypes.SET_AVAILABLE_COUNTRY_NAMES,
})

const fetchAvailableCountryNames = (): CountriesAction => ({
    type: CountriesActionTypes.FETCH_AVAILABLE_COUNTRY_NAMES
})

const fetchCountryDataByName = (countryName: string) => ({
    payload: { countryName },
    type: CountriesActionTypes.FETCH_COUNTRY_DATA_BY_NAME,
})

const clearSelectedCountryData = () => ({
    payload: { currentCountryData: undefined },
    type: CountriesActionTypes.SET_SELECTED_COUNTRY_DATA,
})

const clearStateReducer = () => ({
    type: CountriesActionTypes.CLEAR_STATE
})

export default {
    setLoading,
    setError,
    setAvailableCountryNames,
    setSelectedCountryData,
    clearStateReducer,
    fetchAvailableCountryNames,
    fetchCountryDataByName,
    clearSelectedCountryData
}