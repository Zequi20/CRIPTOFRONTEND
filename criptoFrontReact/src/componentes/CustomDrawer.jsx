// DrawerComponent.js
import React from 'react';
import Drawer from '@mui/material/Drawer';
import DrawerList from './DrawerList';

function CustomDrawer({ open, onClose }) {
    
    return (
        <Drawer anchor="left" open={open} onClose={onClose}>
            <DrawerList/>
        </Drawer>
    );
}

export default CustomDrawer;
