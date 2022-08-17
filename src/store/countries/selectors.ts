import { ApplicationState } from "../types";

const getData = (state: ApplicationState) => state.Countries;

const getAvailableCountryNames = (state: ApplicationState) => getData(state).availableCountryNames;

const isLoading = (state: ApplicationState) => getData(state).isLoading;

const getError = (state: ApplicationState) => getData(state).error;

const getCurrentCountryData = (state: ApplicationState) => getData(state).currentCountryData;

const getViewedCountriesData = (state: ApplicationState) => getData(state).viewedCountriesData;

const isInitialLoading = (state: ApplicationState) => getData(state).initialLoading;


export default {
    getAvailableCountryNames,
    isLoading,
    getError,
    getCurrentCountryData,
    getViewedCountriesData,
    isInitialLoading
}