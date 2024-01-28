import React from "react";
import BottomAppBar from "../navigation/BottomAppBar";
import { Typography } from "@mui/material";

function Alertas() {
    return (
        <>
            <Typography variant="h4" component="div" display="flex" alignItems="center">
                Alertas del Carajo
            </Typography>
            <BottomAppBar />
        </>
    );

}

export default Alertas;