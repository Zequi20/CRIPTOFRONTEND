import React from "react";
import BottomAppBar from "../BottomAppBar";
import { Typography } from "@mui/material";
import CoinDataGrid from "../datagrids/CoinDataGrid";
import SelectLineChart from "../charts/SelectLineChart";

function Tabla(){
    return (
    <>
        <Typography variant="h4" style={{margin: '8px'}}>
            Top 5 Monedas
        </Typography>
        <CoinDataGrid/>
        <SelectLineChart/>
        <br />
        <br/>
        <BottomAppBar/>
    </>
    );
   
}

export default Tabla;