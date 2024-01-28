import { Box, ListItemIcon } from "@mui/material";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { useTheme } from '@mui/material/styles';
import HomeIcon from '@mui/icons-material/Home';
import HistoryIcon from '@mui/icons-material/History';
import WarningIcon from '@mui/icons-material/Warning';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import LogoutIcon from '@mui/icons-material/Logout';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import { useNavigate } from "react-router-dom";
import Typography from '@mui/material/Typography';

function DrawerList() {
    const tema = useTheme();
    const navegar = useNavigate();
    const onSalirClick = () => {
        navegar('/');
    };
    const onInicioClick = () => {
        navegar('/tabla');
    };
    const onHistorialClick = () => {
        navegar('/historial');
    };
    const onAlertasClick = () => {
        navegar('/alertas');
    };
    const onUsuariosClick = () => {
        navegar('/usuarios');
    };
    return (
        <Box style={{ backgroundColor: tema.palette.primary.main, color: 'white', width: 250, height: '100vh' }}>
            <nav>
                {/* <MonetizationOnIcon style={{ fontSize: 30, marginRight: 8, marginTop: 8 }} /> */}
                <Typography color="secondary" variant="h6" component="div" display="flex" alignItems="center">
                    <MonetizationOnIcon style={{ margin: '8px' }} />
                    CryptoApp
                </Typography>
                <List>
                    <ListItem onClick={onInicioClick}>
                        <ListItemIcon> <HomeIcon style={{ color: 'white' }} /> </ListItemIcon>
                        <ListItemText primary="Inicio" />
                    </ListItem>
                    <ListItem onClick={onHistorialClick}>
                        <ListItemIcon> <HistoryIcon style={{ color: 'white' }} /> </ListItemIcon>
                        <ListItemText primary="Historial" />
                    </ListItem>
                    <ListItem onClick={onAlertasClick}>
                        <ListItemIcon> <WarningIcon style={{ color: 'white' }} /> </ListItemIcon>
                        <ListItemText primary="Alertas" />
                    </ListItem>
                    <ListItem onClick={onUsuariosClick}>
                        <ListItemIcon> <ManageAccountsIcon style={{ color: 'white' }} /> </ListItemIcon>
                        <ListItemText primary="Usuario" />
                    </ListItem>
                    <ListItem onClick={onSalirClick}>
                        <ListItemIcon> <LogoutIcon style={{ color: 'white' }} /> </ListItemIcon>
                        <ListItemText primary="Cerrar Sesion" />
                    </ListItem>
                </List>
            </nav>
        </Box>
    )
}

export default DrawerList;