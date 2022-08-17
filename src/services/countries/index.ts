import { CountryData } from '../../store/countries/types';
import api from './api';


type ResponseName = {
    name: {
        common: string,
        official: string,
        nativeName: Object
    }
}


type ResponseCountryData = {
    capital: string[],
    name: {
        common: string,
        official: string,
    },
    continents: string[],
    currencies: any,
    flags: string[],
    independent: boolean,
    languages: any,
    latlng: number[],
    maps: {
        googleMaps: string,
        openStreetMaps: string
    },
    population: number,
    region: string,
    subregion: string,
    timezones: string[],
    unMember: boolean
}

const parseAvailableNamesResponse = (rawData: ResponseName[]): string[] => {
    return rawData.map((data: ResponseName) => data.name.common)
}

const parseCountryDataResponse = (response: ResponseCountryData): CountryData => ({
    capital: response.capital[0],
    commonName: response.name.common,
    officialName: response.name.official,
    continents: response.continents,
    currencies: Object.keys(response.currencies).map(key => response.currencies[key] && ({ name: response.currencies[key].name, symbol: response.currencies[key].symbol })),
    flags: {
        png: response.flags[1], svg: response.flags[0]
    },
    independent: response.independent,
    languages: Object.keys(response.languages).map(key => response.languages[key]),
    latlng: { lat: response.latlng[0], lng: response.latlng[1] },
    maps: response.maps,
    population: response.population,
    region: response.region,
    subregion: response.subregion,
    timezones: response.timezones,
    unMember: response.unMember
})

export const fetchAvailableCountryNames = async (): Promise<string[]> => {
    try {
        const response = await api.fetchAvailableCountryNames();
        return parseAvailableNamesResponse(response);
    } catch (e) {
        throw e;
    }
}
export const fetchCountryDataByName = async (countryName: string): Promise<CountryData> => {
    try {
        const response = await api.fetchCountryDataByName(countryName);
        console.log(JSON.stringify(response))
        if (response.length > 0) return parseCountryDataResponse(response[0])
        return parseCountryDataResponse(response)
        // return parseAvailableNamesResponse(response);
    } catch (e) {
        throw e;
    }
}