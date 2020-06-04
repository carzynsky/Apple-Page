import React, {useState} from 'react';
import {Navbar, Nav, Button} from 'react-bootstrap';
import {NavLink} from 'react-router-dom';
import logo from './images/apple-icon.png';
import './NavBar.css';

const NavBar = () => {
    return(
            <div className="myNavBar">
                <Navbar style={{width: '20%', marginLeft: 'auto', marginRight: 'auto'}}expand ="lg">
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="myNav">
                            <NavLink exact activeStyle={{ color: '#ffffff' }} className="Nav-Link" to= '/Apple-Page/'><img src={logo} className="pic" alt="logo"/></NavLink>
                            <NavLink activeStyle={{ color: '#ffffff' }} className="Nav-Link" to="/Apple-Page/mac">Mac</NavLink>
                            <NavLink activeStyle={{ color: '#ffffff' }} className="Nav-Link" to="/Apple-Page/iPad">iPad</NavLink>
                            <NavLink activeStyle={{ color: '#ffffff' }} className="Nav-Link" to="/Apple-Page/iPhone">iPhone</NavLink>
                        </Nav>
                     </Navbar.Collapse>
                </Navbar>
            </div>              
    );
}
export default NavBar