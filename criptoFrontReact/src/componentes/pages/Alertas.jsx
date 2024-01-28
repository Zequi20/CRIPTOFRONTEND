import React from "react";
import BottomAppBar from "../BottomAppBar";
import AlertList from "../AlertList";
import { Typography } from "@mui/material";

function Alertas() {
    return (
        <>
            <Typography variant="h3" component="div" display="flex" alignItems="center">
                Alertas del Carajo
            </Typography>
            <AlertList></AlertList>
            <BottomAppBar />
        </>
    );

}

export default Alertas;