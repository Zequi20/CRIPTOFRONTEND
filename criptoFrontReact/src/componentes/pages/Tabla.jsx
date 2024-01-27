import React from "react";
import BottomAppBar from "../BottomAppBar";
import { Typography } from "@mui/material";
import CoinDataGrid from "../datagrids/CoinDataGrid";

function Tabla(){
    return (
    <>
        <Typography variant="h4" style={{margin: '8px'}}>
            Top 5 Monedas
        </Typography>
        
        <CoinDataGrid/>
        <BottomAppBar/>
    </>
    );
   
}

export default Tabla;