import { Box } from "@mui/system";
import { useCallback, useEffect } from "react";
import { CurrentSelectedCountryCard } from "../../components/CurrenSelectedCountryCard";
import { SearchBar } from "../../components/SearchBar";
import { useCountries } from "../../hooks/useCountries";
import { InitialLoader } from "../../sections/@home/InitialLoader";

export function Home() {
    const { initialLoading, isLoading, currentCountryData, fetchAvailableCountryNames, fetchCountryDataByName, clearSelectedCountryData } = useCountries();


    const onSelectCountry = useCallback((countryName: string) => {
        fetchCountryDataByName(countryName)
    }, [fetchCountryDataByName])

    useEffect(() => {
        fetchAvailableCountryNames();
    }, [fetchAvailableCountryNames])


    if (initialLoading) {
        return <InitialLoader />
    }
    return (
        <Box sx={{ padding: 14, flex: 1 }}>
            <SearchBar onSelect={onSelectCountry} disabled={isLoading} />
            {currentCountryData && <CurrentSelectedCountryCard countryData={currentCountryData} onClose={clearSelectedCountryData} />}
        </Box>
    )
}