import React, { Fragment } from "react";
import { NavLink } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import './index.css';

const Header = () => {
    return (
     
         

<AppBar position="static" color="default">
  <Toolbar>
    <div  className="Header">
    
    <Typography variant="h6" >
    
      Digital Genesis
    
    </Typography>
    <div>
    <Button color="inherit" component={NavLink} to="/introduction">Intro</Button>
    <Button color="inherit" component={NavLink} to="/text">Text</Button>
    <Button color="inherit" component={NavLink} to="/bibliography">Bibliography</Button>
    <Button color="inherit" component={NavLink} to="/about">About</Button>
    </div>
    </div>
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