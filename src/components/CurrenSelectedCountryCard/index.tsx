import { Box, Card, Grid, Typography } from "@mui/material"
import { Stack } from "@mui/system";
import { CurrentSelectedCountryCardProps } from "./types";

export function CurrentSelectedCountryCard({ countryData, onClose }: CurrentSelectedCountryCardProps) {
    return (
        <Box sx={{ position: "absolute", width: "100vw", height: "100vh", backgroundColor: "rgba(0,0,0,0.5)", top: 0, left: 0, zIndex: 1, display: "grid", alignItems: "center", justifyItems: "center" }}>
            <Card sx={{ backgrdounColor: "white", borderRadius: 4, padding: 4, minWidth: 420, position: "relative" }}>
                <a style={{ position: "absolute", top: 10, right: 10, textDecoration:"underline", cursor:"pointer"}} onClick={onClose}>Close [x]</a>
                <Typography typography={"h4"}>{countryData.commonName}</Typography>
                <Grid display={"flex"} flexDirection={"column"} sx={{ paddingTop: 2 }}>
                    <Grid item>
                        <Grid display={"flex"} flexDirection={"row"} sx={{ paddingTop: 2 }}>
                            <Grid item>
                                <Grid display={"flex"} flexDirection={"column"}>
                                    <Grid item>
                                        <Grid display={"flex"} flexDirection={"row"} alignItems={"center"}>
                                            <Grid item>
                                                <Typography fontWeight={"bold"}>Official name:</Typography>
                                            </Grid>
                                            <Grid item sx={{ paddingLeft: 2 }}>
                                                <Typography >{countryData.officialName}</Typography>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                    <Grid item>
                                        <Grid display={"flex"} flexDirection={"row"} alignItems={"center"}>
                                            <Grid item>
                                                <Typography fontWeight={"bold"}>Capital:</Typography>
                                            </Grid>
                                            <Grid item sx={{ paddingLeft: 2 }}>
                                                <Typography >{countryData.capital}</Typography>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                    <Grid item>
                                        <Grid display={"flex"} flexDirection={"row"} alignItems={"center"}>
                                            <Grid item>
                                                <Typography fontWeight={"bold"}>Continents:</Typography>
                                            </Grid>
                                            <Grid item>
                                                <Grid display={"flex"} flexDirection={"row"} alignItems={"center"}>
                                                    {countryData.continents.map(continent => <Grid item key={continent}><Typography sx={{ paddingLeft: 2 }}>{continent}</Typography> </Grid>)}
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                    <Grid item>
                                        <Grid display={"flex"} flexDirection={"row"} alignItems={"center"}>
                                            <Grid item>
                                                <Typography fontWeight={"bold"}>Currencies:</Typography>
                                            </Grid>
                                            <Grid item>
                                                <Grid display={"flex"} flexDirection={"row"} alignItems={"center"}>
                                                    {countryData.currencies.map(currency => <Grid item key={currency.symbol}> <Typography sx={{ paddingLeft: 2 }}>{`${currency.name} (${currency.symbol})`}</Typography> </Grid>)}
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                    <Grid item>
                                        <Grid display={"flex"} flexDirection={"row"} alignItems={"center"}>
                                            <Grid item>
                                                <Typography fontWeight={"bold"}>Is independent?:</Typography>
                                            </Grid>
                                            <Grid item sx={{ paddingLeft: 2 }}>
                                                <Typography>{countryData.independent ? "Yes" : "No"}</Typography>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                    <Grid item>
                                        <Grid display={"flex"} flexDirection={"row"} alignItems={"center"}>
                                            <Grid item>
                                                <Typography fontWeight={"bold"}>Languages:</Typography>
                                            </Grid>
                                            <Grid item>
                                                <Grid display={"flex"} flexDirection={"row"} alignItems={"center"}>
                                                    {countryData.languages.map(language => <Grid item key={language}> <Typography sx={{ paddingLeft: 1 }}>{language}</Typography> </Grid>)}
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                    <Grid item>
                                        <Grid display={"flex"} flexDirection={"row"} alignItems={"center"}>
                                            <Grid item>
                                                <Typography fontWeight={"bold"}>Population:</Typography>
                                            </Grid>
                                            <Grid item sx={{ paddingLeft: 2 }}>
                                                <Typography >{countryData.population}</Typography>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                    <Grid item>
                                        <Grid display={"flex"} flexDirection={"row"} alignItems={"center"}>
                                            <Grid item>
                                                <Typography fontWeight={"bold"}>Region:</Typography>
                                            </Grid>
                                            <Grid item sx={{ paddingLeft: 2 }}>
                                                <Typography >{`${countryData.region} (${countryData.subregion})`}</Typography>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                    <Grid item>
                                        <Grid display={"flex"} flexDirection={"row"} alignItems={"center"}>
                                            <Grid item>
                                                <Typography fontWeight={"bold"}>UN Member?:</Typography>
                                            </Grid>
                                            <Grid item sx={{ paddingLeft: 2 }}>
                                                <Typography >{countryData.unMember ? "Yes" : "No"}</Typography>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                    <Grid item>
                                        <Grid display={"flex"} flexDirection={"row"} alignItems={"center"}>
                                            <Grid item>
                                                <Typography fontWeight={"bold"}>Timezones:</Typography>
                                            </Grid>
                                            <Grid item>
                                                <Grid display={"flex"} flexDirection={"row"} alignItems={"center"}>
                                                    {countryData.timezones.map(timezone => <Grid item key={timezone}> <Typography sx={{ paddingLeft: 1 }}>{timezone}</Typography> </Grid>)}
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item sx={{ paddingLeft: 10 }}>
                                <img src={countryData.flags.png} alt={countryData.commonName} />
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item>
                        <Grid display={"flex"} flexDirection={"row"} alignItems={"center"}>
                            <Grid item>
                                <a href={countryData.maps.googleMaps} target="_about:blank">Google maps</a>
                            </Grid>
                            <Grid item sx={{ paddingLeft: 2 }}>
                                <a href={countryData.maps.openStreetMaps} target="_about:blank">OpenStreet maps</a>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Card>
        </Box >
    )
}   