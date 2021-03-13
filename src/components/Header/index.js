import React, { Fragment } from "react";
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import './index.css';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const Header = (props) => {
  const classes = useStyles();

  const handleMenuClick = () => {
    props.setNavOpen(true);
  };

  return (

    <AppBar position="fixed" color="secondary">
      <Toolbar>  
        <IconButton 
          edge="start" 
          className={classes.menuButton} 
          color="inherit" 
          aria-label="menu"
          onClick={handleMenuClick}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" >        
          Digital Genesis         
        </Typography>
      </Toolbar>
    </AppBar>
    
  );
}

export default Header;

/* <Navbar bg="dark" variant="dark" expand="lg">
             <div className="Header" >
            <Navbar.Brand href="/text">Digital Genesis Fall 2020</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse>
                <Nav className="Header_nav-items">
                  <Nav.Link as={NavLink} to="/introduction">Introduction</Nav.Link>
                  <Nav.Link as={NavLink} to="/text">Text</Nav.Link>
                  <Nav.Link as={NavLink} to="/bibliography">Bibliography</Nav.Link>
                  <Nav.Link as={NavLink} to="/about">About</Nav.Link>
                </Nav>
              </Navbar.Collapse>
           
            </div>
        </Navbar>
        */