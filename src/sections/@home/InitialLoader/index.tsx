import { Box, Typography } from "@mui/material";


export function InitialLoader() {
    return (
        <Box sx={{ position: "absolute", width: "100vw", height: "100vh", top: 0, left: 0, zIndex: 1, display: "grid", alignContent: "center", justifyItems: "center" }}>
            <Typography typography={"h5"}>Loading...</Typography>
            <img src="https://media.giphy.com/media/3o7TKv7S69WRS6awc8/giphy.gif"></img>
        </Box>
    )
}