import React, { Component } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Typography from '@mui/material/Typography';
import Drawer from '@mui/material/Drawer';


class CustomAppBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isDrawerOpen: false,
    };
  }

  toggleDrawer = () => {
    this.setState({ isDrawerOpen: !this.state.isDrawerOpen });
  };

  render() {
    return (
      <div>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={this.toggleDrawer}
              aria-label="menu"
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6">Criptomonedas</Typography>
          </Toolbar>
        </AppBar>
        <Drawer
          anchor="left"
          open={this.state.isDrawerOpen}
          onClose={this.toggleDrawer}
        >
          
        </Drawer>
      </div>
    );
  }
}

export default CustomAppBar;
