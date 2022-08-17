import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import selectors from "../store/countries/selectors";
import actions from "../store/countries/actions"


export function useCountries() {
    const availableCountryNames = useSelector(selectors.getAvailableCountryNames);
    const isLoading = useSelector(selectors.isLoading);
    const error = useSelector(selectors.getError);
    const currentCountryData = useSelector(selectors.getCurrentCountryData);
    const viewedCountriesData = useSelector(selectors.getViewedCountriesData);
    const initialLoading = useSelector(selectors.isInitialLoading);


    const dispatch = useDispatch();

    const fetchAvailableCountryNames = useCallback(() => {
        dispatch(actions.fetchAvailableCountryNames())
    }, [dispatch])

    const fetchCountryDataByName = useCallback((countryName: string) => {
        dispatch(actions.fetchCountryDataByName(countryName))
    }, [dispatch])

    const clearSelectedCountryData = useCallback(() => {
        dispatch(actions.clearSelectedCountryData())
    }, [dispatch])


    return {
        availableCountryNames,
        isLoading,
        error,
        currentCountryData,
        viewedCountriesData,
        initialLoading,
        fetchAvailableCountryNames,
        fetchCountryDataByName,
        clearSelectedCountryData
    }
}