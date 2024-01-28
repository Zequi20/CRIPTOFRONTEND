import React from "react";
import { Divider, Typography } from "@mui/material";
import CoinDataGrid from "../datagrids/CoinDataGrid";
import SelectLineChart from "../charts/SelectLineChart";
import CustomPaper from "../CustomPaper";
import BottomAppBar from "../navigation/BottomAppBar";

function Tabla() {
    return (
        <>
            <CustomPaper>
                <Typography variant="h5" style={{ margin: '6px'  }}>
                    Top Criptomonedas
                </Typography>
                
                <Typography variant="subtitle1" style={{ marginLeft: '12px', marginBottom: '10px' }}>
                    Por Capital de Mercado
                </Typography>
                
                <CoinDataGrid />
            </CustomPaper>
            <Divider/>
            <CustomPaper>
                <SelectLineChart />
                <br />
                <br />
                <br />
                <BottomAppBar />
            </CustomPaper>

        </>
    );

}

export default Tabla;