import React, { useEffect, useState } from "react";
import { List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import PriceCheckIcon from '@mui/icons-material/PriceCheck';
import AlertaServicio from "../servicios/alerta_servicio";

function AlertList() {
    const alertaServicio = new AlertaServicio();
    const [alertas, setAlertas] = useState([]);

    const formatearFecha = (fechaString) => {
        const fecha = new Date(fechaString);
        const fechaFormateada = `${fecha.getFullYear()}/${('0' + (fecha.getMonth() + 1)).slice(-2)}/${('0' + fecha.getDate()).slice(-2)} a las ${('0' + fecha.getHours()).slice(-2)}:${('0' + fecha.getMinutes()).slice(-2)}`;
        return fechaFormateada;
    };

    useEffect(() => {
        alertaServicio.getAlertas().then((data) => {
            setAlertas(data);
        });
    }, []);

    return (
        <List>
            {alertas.map((alerta, index) => (
                <ListItem key={index}>
                    <ListItemIcon>
                        <PriceCheckIcon />
                    </ListItemIcon>
                    <ListItemText
                        primary={`${alerta.moneda} (${formatearFecha(alerta.fecha_hora)})`}
                        secondary={`Monto a seguir: ${alerta.monto}`}
                    />
                </ListItem>
            ))}
        </List>
    );
}

export default AlertList;
