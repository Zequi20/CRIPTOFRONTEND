import React, { useEffect, useState } from "react";
import { List, ListItem, ListItemButton, ListItemIcon, ListItemText, Popover, MenuItem } from "@mui/material";
import PriceCheckIcon from '@mui/icons-material/PriceCheck';
import AlertaServicio from '../servicios/alerta_servicio';

function AlertList() {
    const alertaServicio = new AlertaServicio();
    const [alertas, setAlertas] = useState([]);
    const [loading, setLoading] = useState(true);
    const [anchorEl, setAnchorEl] = useState(null);
    const [selectedAlertId, setSelectedAlertId] = useState(null);
    const [reload, setReload] = useState(false);

    const formatearFecha = (fechaString) => {
        const fecha = new Date(fechaString);
        const fechaFormateada = `${fecha.getFullYear()}/${('0' + (fecha.getMonth() + 1)).slice(-2)}/${('0' + fecha.getDate()).slice(-2)} a las ${('0' + fecha.getHours()).slice(-2)}:${('0' + fecha.getMinutes()).slice(-2)}`;
        return fechaFormateada;
    };

    useEffect(() => {
        alertaServicio.getAlertas().then((data) => {
            setAlertas(data);
            setLoading(false);
        });
    }, [reload]);

    const handleMenuOpen = (event, alertaId) => {
        setAnchorEl(event.currentTarget);
        setSelectedAlertId(alertaId);
    };

    const handleMenuPress = () => {
        if (selectedAlertId !== null) {
            const delParam = { "id": selectedAlertId };
            alertaServicio.delAlerta(delParam).then(() => {
                setReload(prev => !prev);
            });
        }
        setSelectedAlertId(null);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    const openMenu = Boolean(anchorEl);

    return (
        <List>
            {loading ? (
                <ListItem>
                    <ListItemText primary="Cargando alertas..." />
                </ListItem>
            ) : (
                alertas.map((alerta, index) => (
                    <React.Fragment key={index}>
                        <ListItemButton divider={true} onClick={(event) => handleMenuOpen(event, alerta.id)}>
                            <ListItemIcon>
                                <PriceCheckIcon />
                            </ListItemIcon>
                            <ListItemText
                                primary={`${alerta.moneda} (${formatearFecha(alerta.fecha_hora)})`}
                                secondary={`Monto a seguir: ${alerta.monto.toLocaleString()}`}
                            />
                        </ListItemButton>
                        <Popover
                            open={openMenu}
                            anchorEl={anchorEl}
                            onClose={handleMenuClose} 
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                        >
                            <MenuItem onClick={handleMenuPress}>Eliminar alerta</MenuItem>
                        </Popover>
                    </React.Fragment>
                ))
            )}
        </List>
    );
}

export default AlertList;
