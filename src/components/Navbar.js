

import React from 'react';

import logo from '../image/logo2.png'

import 'bootstrap/dist/css/bootstrap.min.css'
import './NavBarStyle.css';
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Image from 'react-bootstrap/Image'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import LinkContainer from 'react-router-bootstrap/LinkContainer'

const NavbarComponent = () => {
 
   
    return (
        <>
            <Navbar expand="lg" style={{backgroundColor: "#009879"}}  className="navbar-dark py-2">
                <Container>
                    <LinkContainer to="/">
                    <Navbar.Brand><Image src={logo} height="50px"></Image></Navbar.Brand>
                    </LinkContainer>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            
                            <LinkContainer to="/">
                            <Nav.Link>Home</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to="/whole-number">
                            <Nav.Link>Whole Number</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to="/fraction">
                            <Nav.Link>Fraction</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to="/converter">
                            <Nav.Link>Convert any!</Nav.Link>
                            </LinkContainer>
                            
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </>
    )
}

export default NavbarComponent