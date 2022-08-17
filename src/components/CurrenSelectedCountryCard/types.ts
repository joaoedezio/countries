import { CountryData } from "../../store/countries/types"


export type CurrentSelectedCountryCardProps = {
    countryData: CountryData,
    onClose: () => void;
}