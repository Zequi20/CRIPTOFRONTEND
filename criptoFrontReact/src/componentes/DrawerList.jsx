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

function DrawerList() {
    const tema = useTheme();
    return (
        <Box style={{ backgroundColor: tema.palette.primary.main, color: 'white', width: 250, height: '100vh' }}>
            
            <nav>
                <List>
                    <ListItem>
                        <ListItemIcon> <HomeIcon style={{ color: 'white' }}/> </ListItemIcon>
                        <ListItemText primary="Inicio" />
                    </ListItem>
                    <ListItem>
                    <ListItemIcon> <HistoryIcon style={{ color: 'white' }}/> </ListItemIcon>
                        <ListItemText primary="Historial" />
                    </ListItem>
                    <ListItem>
                    <ListItemIcon> <WarningIcon style={{ color: 'white' }}/> </ListItemIcon>
                        <ListItemText primary="Alertas" />
                    </ListItem>
                    <ListItem>
                    <ListItemIcon> <ManageAccountsIcon style={{ color: 'white' }}/> </ListItemIcon>
                        <ListItemText primary="Usuario" />
                    </ListItem>
                    <ListItem>
                    <ListItemIcon> <LogoutIcon style={{ color: 'white' }}/> </ListItemIcon>
                        <ListItemText primary="Salir" />
                    </ListItem>
                </List>
            </nav>
        </Box>
    )
}

export default DrawerList;