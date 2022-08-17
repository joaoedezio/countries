import { endpoints } from "./endpoints"

const fetchAvailableCountryNames = async () => {
    try {
        const response = await fetch(endpoints.fechAvailableCountryNames, {
            method: "GET",
            headers: {
                "Content-type": "application/json"
            }
        });

        if (response.status !== 200) {
            throw new Error();
        } else {
            return await response.json();
        }
    } catch (e) {
        console.error("UnexpectedError on fetchAvailableCountryNames: ", e)
        throw (e)
    }
}
const fetchCountryDataByName = async (countryName: string) => {
    try {
        const response = await fetch(endpoints.fetchByName(countryName), {
            method: "GET",
            headers: {
                "Content-type": "application/json"
            }
        });

        if (response.status !== 200) {
            throw new Error();
        } else {
            return await response.json();
        }
    } catch (e) {
        console.error("UnexpectedError on fetchAvailableCountryNames: ", e)
        throw (e)
    }
}

export default {
    fetchAvailableCountryNames,
    fetchCountryDataByName
}