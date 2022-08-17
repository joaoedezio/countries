import {
    CountriesActionTypes, CountriesState, CountriesAction, CountriesPayload, CountriesReducer
} from './types';

const INITIAL_STATE: CountriesState = {
    availableCountryNames: [],
    viewedCountriesData: [],
    error: undefined,
    initialLoading: true,
    isLoading: false,
    currentCountryData: undefined
};

const setLoading: CountriesReducer = (
    state: CountriesState,
    payload?: CountriesPayload,
) => ({
    ...state,
    isLoading: !!payload!.isLoading,
});


const setError: CountriesReducer = (
    state: CountriesState,
    payload?: CountriesPayload,
) => ({
    ...state,
    error: payload!.error,
});

const setAvailableCountryNames: CountriesReducer = (
    state: CountriesState,
    payload?: CountriesPayload,
) => ({
    ...state,
    availableCountryNames: payload!.availableCountryNames ?? [],
    initialLoading: false,
});
const setSelectedCountryData: CountriesReducer = (
    state: CountriesState,
    payload?: CountriesPayload,
) => ({
    ...state,
    currentCountryData: payload!.currentCountryData,
    viewedCountriesData: [
        ...state.viewedCountriesData,
        payload!.currentCountryData!
    ]
});

const clearStateReducer: CountriesReducer = () => ({
    ...INITIAL_STATE,
});

const countriesReducerMap = new Map<CountriesActionTypes, CountriesReducer>([
    [CountriesActionTypes.SET_LOADING, setLoading],
    [CountriesActionTypes.SET_AVAILABLE_COUNTRY_NAMES, setAvailableCountryNames],
    [CountriesActionTypes.SET_ERROR, setError],
    [CountriesActionTypes.SET_SELECTED_COUNTRY_DATA, setSelectedCountryData],
    [CountriesActionTypes.CLEAR_STATE, clearStateReducer],
]);

const countriesReducer = (
    state: CountriesState = INITIAL_STATE,
    action: CountriesAction,
) => {
    const reducer = countriesReducerMap.get(action.type);
    if (reducer) return reducer(state, action.payload);

    return state;
};

export default countriesReducer;
