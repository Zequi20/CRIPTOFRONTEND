import React, { Component } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MoreIcon from '@mui/icons-material/MoreVert';
import FavoriteIcon from '@mui/icons-material/Favorite';
import DrawerComponent from './CustomDrawer.jsx';

const pages = ['Inicio', 'Alertas', 'Historial'];
const settings = ['Perfil', 'Cuenta', 'Configuracion', 'Cerrar Sesion'];

class BottomAppBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      anchorElNav: null,
      anchorElUser: null,
    };
  }


  render() {

    return (
      <AppBar position="fixed" color="primary" sx={{ top: 'auto', bottom: 0 }}>
        <Toolbar>
          <DrawerComponent/>
          <Box sx={{ flexGrow: 1 }} />
          <IconButton color="inherit">
            <FavoriteIcon />
          </IconButton>
          <IconButton color="inherit">
            <MoreIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    );
  }
}

export default BottomAppBar;
