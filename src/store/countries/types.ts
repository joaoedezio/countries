export enum CountriesActionTypes {
    FETCH_AVAILABLE_COUNTRY_NAMES = "countriesActionTypes@FETCH_AVAILABLE_COUNTRY_NAMES",
    SET_LOADING = "countriesActionTypes@SET_LOADING",
    SET_AVAILABLE_COUNTRY_NAMES = "countriesActionTypes@SET_AVAILABLE_COUNTRY_NAMES",
    FETCH_COUNTRY_DATA_BY_NAME = "countriesActionTypes@FETCH_COUNTRY_DATA_BY_NAME",
    SET_SELECTED_COUNTRY_DATA = "countriesActionTypes@SET_SELECTED_COUNTRY_DATA",
    SET_ERROR = "countriesActionTypes@SET_ERROR",
    CLEAR_STATE = "countriesActionTypes@CLEAR_STATE",
}

export type Currency = {
    name: string,
    symbol: string,
}


export type CountryData = {
    officialName: string,
    commonName: string,
    independent: boolean,
    unMember: boolean,
    currencies: Currency[],
    capital: string,
    region: string,
    subregion: string,
    languages: string[],
    latlng: { lat: number, lng: number }
    maps: {
        googleMaps: string,
        openStreetMaps: string,
    },
    population: number,
    timezones: string[],
    continents: string[]
    flags: {
        png: string,
        svg: string
    },
}


export type CountriesState = {
    initialLoading: boolean,
    isLoading: boolean,
    error: any,
    availableCountryNames: string[],
    currentCountryData?: CountryData,
    viewedCountriesData: CountryData[]
}

export type CountriesPayload = {
    initialLoading?: boolean,
    isLoading?: boolean,
    error?: any,
    availableCountryNames?: string[],
    currentCountryData?: CountryData,
    viewedCountriesData?: CountryData[],
    countryName?: string,
}

export type CountriesAction = { type: CountriesActionTypes; payload?: CountriesPayload };

export type CountriesReducer = (
    state: CountriesState,
    payload?: CountriesPayload,
) => CountriesState;
