import React from "react";
import BottomAppBar from "../BottomAppBar";
import { Divider, Typography } from "@mui/material";
import CoinDataGrid from "../datagrids/CoinDataGrid";
import SelectLineChart from "../charts/SelectLineChart";
import CustomPaper from "../CustomPaper";

function Tabla() {
    return (
        <>
            <CustomPaper>
                <Typography variant="h5" style={{ margin: '6px', marginBottom: '0px' }}>
                    Top Criptomonedas
                </Typography>
                <Typography variant="STRING" style={{ marginLeft: '12px', marginBottom: '8px' }}>
                    Por Capital de Mercado
                </Typography>
                <CoinDataGrid />
            </CustomPaper>
            <Divider/>
            <CustomPaper>
                <SelectLineChart />
                <br />
                <br />
                <BottomAppBar />
            </CustomPaper>

        </>
    );

}

export default Tabla;