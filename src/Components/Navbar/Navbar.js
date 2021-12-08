import React, { Component } from 'react';
import {Navbar, Nav, NavDropdown} from 'react-bootstrap'
import Container from 'react-bootstrap/Container';
// import {ReactComponent as Logo} from '../../assets/icons/akgec.svg';
import path from '../../assets/icons/navlogo.png';

class NavigationBar extends Component {
    state = { clicked: false }

    render() {
        return(

  <Navbar sticky="top" id="navbar-white" collapseOnSelect expand="lg" bg="light" variant="light">
    <Container>
      <Navbar.Brand href="#home">
        <img src={path} height="50px"></img>
        {' '}
      </Navbar.Brand>

      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      
    </Nav>
    <Nav>
      <Nav.Link className="navlinks-grey navlinks-top" href="#motivation">Motivation</Nav.Link>
      <Nav.Link className="navlinks-grey navlinks-top" href="#theme">Conference Theme</Nav.Link>
      <Nav.Link className="navlinks-grey navlinks-top" href="#date">Date and Venue</Nav.Link>
      <Nav.Link className="navlinks-grey navlinks-top" href="#call">Call for Papers</Nav.Link>
      <Nav.Link className="navlinks-grey navlinks-top" href="#timeline">Important Timelines</Nav.Link>
      <Nav.Link className="navlinks-grey navlinks-top" href="#registration">Registration Fee</Nav.Link>      
    </Nav>
  </Navbar.Collapse>


    </Container>
  </Navbar>
        )
    }
}

export default NavigationBar