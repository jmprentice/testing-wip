import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/core/styles';

const drawerWidth = 240;
const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  closeMenuButton: {
    marginRight: 'auto',
    marginLeft: 0,
  },
  offset: theme.mixins.toolbar,
}));
function Navigation() {
  const navigationLinks = [
    {
      text: "Introduction",
      location: "/introduction"
    },
    {
      text: "Text",
      location: "/text"
    },
    {
      text: "Bibliography",
      location: "/bibliography"
    },
    {
      text: "About",
      location: "/about"
    }
  ]
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);
function handleDrawerToggle() {
    setMobileOpen(!mobileOpen)
  }
const drawer = (
    <div>
      <List>
        {navigationLinks.map((link, index) => (
          <ListItem button component={NavLink} to={link.location} key={link.text}>
            <ListItemText primary={link.text} />
          </ListItem>
        ))}
      </List>
    </div>
  );
return (
    <div className={classes.root}>

      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="Open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Digital Genesis
          </Typography>
        </Toolbar>
      </AppBar>
      <div className={classes.offset} />
      
      <nav className={classes.drawer}>
   
          <Drawer
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            <IconButton onClick={handleDrawerToggle} className={classes.closeMenuButton}>
              <CloseIcon/>
            </IconButton>
            {drawer}
          </Drawer>
      
      </nav>
      </div>
  );
}

export default Navigation;