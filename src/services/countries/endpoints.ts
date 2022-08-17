const API_URL = 'https://restcountries.com/v3'


export const endpoints = {
    fechAvailableCountryNames: `${API_URL}/all?fields=name`,
    fetchByName: (name: string) => `${API_URL}/name/${name}`
}