import React from "react";
import { NavLink } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './index.css';

const Header = () => {
    return (
     
          <Navbar bg="dark" variant="dark" expand="lg">
             <div className="Header" >
            <Navbar.Brand href="/text">Digital Genesis Fall 2020</Navbar.Brand>
            <div><Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse>
                <Nav className="Header_nav-items">
                  <Nav.Link as={NavLink} to="/introduction">Introduction</Nav.Link>
                  <Nav.Link as={NavLink} to="/text">Text</Nav.Link>
                  <Nav.Link as={NavLink} to="/bibliography">Bibliography</Nav.Link>
                  <Nav.Link as={NavLink} to="/about">About</Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </div>
            </div>
        </Navbar>
     
    );
}

export default Header;