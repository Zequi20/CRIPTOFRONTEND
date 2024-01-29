import { React, useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import { styled } from '@mui/material/styles';
import Fab from '@mui/material/Fab';
import MenuIcon from '@mui/icons-material/Menu';
import CustomDrawer from "../CustomDrawer";
import AlertModal from '../modals/AlertModal';
import CenterFab from '../CenterFab';
import InfoButton from '../modals/InfoButton';
import AlertCheck from '../../utils/AlertCheck';

function BottomAppBar() {

    const [drawerOpen, setDrawerOpen] = useState(false);

    const handleDrawerOpen = () => {
        setDrawerOpen(true);
    };

    const handleDrawerClose = () => {
        setDrawerOpen(false);
    };
    const StyledFab = styled(Fab)({
        position: 'absolute',
        zIndex: 1,
        top: -30,
        left: 0,
        right: 0,
        margin: '0 auto',
    });
    return (<>
        <AppBar position="fixed" color="primary" sx={{ top: 'auto', bottom: 0 }}>
            <AlertCheck></AlertCheck>
            <Toolbar>
                <IconButton edge="start" color="inherit" onClick={handleDrawerOpen}>
                    <MenuIcon />
                </IconButton>
                <AlertModal>
                <CenterFab/>
                </AlertModal>

                <Box sx={{ flexGrow: 1 }} />
                <InfoButton/>
            </Toolbar>
        </AppBar>
        <CustomDrawer open={drawerOpen} onClose={handleDrawerClose} /></>
    );
}

export default BottomAppBar;