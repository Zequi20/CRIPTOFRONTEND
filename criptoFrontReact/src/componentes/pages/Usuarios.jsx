import { React, useEffect } from "react";
import BottomAppBar from "../navigation/BottomAppBar";
import CustomPaper from "../CustomPaper";
import { Divider, Typography } from "@mui/material";
import UserCard from "../UserCard";

function Usuarios() {
    return (
        <>
            <CustomPaper>
                <Typography variant="h5" style={{ margin: '6px', marginBottom: '0px' }}>
                    Datos del usuario
                </Typography>
                <Divider/>
                <UserCard/>
            </CustomPaper>
            <BottomAppBar />
        </>
    );

}

export default Usuarios;