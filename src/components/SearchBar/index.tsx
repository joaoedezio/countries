import { Autocomplete, TextField, Typography } from "@mui/material";
import { Container } from "@mui/system";
import { useCountries } from "../../hooks/useCountries";
import { SearchBarProps } from "./types";

export function SearchBar({ onSelect, disabled }: SearchBarProps) {
    const { availableCountryNames } = useCountries();

    const onChange = (_: any, value: unknown) => {
        console.log({ value })
        onSelect(value as string)
    }
    return (
        <Container sx={{ backgroundColor: "white", padding: 2 }}>
            <Typography sx={{ paddingBottom: 2 }} typography={"h5"}>Select a country to see details: </Typography>
            <Autocomplete
                disablePortal
                disabled={disabled}
                options={availableCountryNames}
                onChange={onChange}
                renderInput={(params) => <TextField {...params} label="Country" />}
            />
        </Container>
    )
}