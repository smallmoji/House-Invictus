import React from 'react';
import {Badge, AppBar, Toolbar, Typography, Button, IconButton, Drawer, Menu, MenuItem } from '@material-ui/core';
import { AccountCircle } from '@material-ui/icons';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MenuIcon from '@material-ui/icons/Menu';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  appBar: {
    background: "none",
    boxShadow: "none"
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  toolbar: {
    justifyContent: "space-between"
  },
  title: {
    flexGrow: 1,
  }
});

class Appbar extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      drawer: false,
      anchorEl: null
    }
  }

  toggleDrawer(event){
    if(!this.state.drawer){
      this.setState({drawer:true});
    }else{
      this.setState({drawer:false});
    }
  }

  handleOpenAccount = (event) => {
    this.setState({anchorEl:event.currentTarget})
  };

  handleCloseAccount = () => {
     this.setState({anchorEl:null})
  };

  render(){
    const { classes } = this.props;
    return(
        <AppBar className={classes.appBar} position="static">
          <Toolbar className={classes.toolbar}>
            <IconButton onClick={this.toggleDrawer.bind(this)} className={classes.menuButton} edge="start" color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton>
            
            <div>
              <IconButton aria-label="show 17 new notifications" color="inherit">   
                <Badge badgeContent={3} color="secondary">
                  <NotificationsIcon />
                </Badge>
              </IconButton>

              <IconButton
                edge="end"
                aria-label="account of current user"
                aria-haspopup="true"
                onClick={this.handleOpenAccount.bind(this)}
                color="inherit"
                className={classes.iconButton}
              >
                <AccountCircle />
              </IconButton>
            </div>
          </Toolbar>

          <Drawer anchor='left' open={this.state.drawer} onClose={this.toggleDrawer.bind(this)}>Hello</Drawer>

          <Menu
            id="simple-menu"
            anchorEl={this.state.anchorEl}
            keepMounted
            open={Boolean(this.state.anchorEl)}
            onClose={this.handleCloseAccount.bind(this)}
          >
            <MenuItem>Profile</MenuItem>
            <MenuItem>My account</MenuItem>
            <MenuItem>Logout</MenuItem>
          </Menu>
        </AppBar>
    )
  }
}

export default withStyles(styles)(Appbar);