import React, { Component } from 'react';
import {Navbar, Nav, NavDropdown} from 'react-bootstrap'
import Container from 'react-bootstrap/Container';
import {ReactComponent as Logo} from '../../assets/icons/akgec.svg';

class NavigationBar extends Component {
    state = { clicked: false }

    render() {
        return(

  <Navbar id="navbar-white" collapseOnSelect expand="md" bg="light" variant="light">
    <Container>
      <Navbar.Brand href="#home">
        <Logo />
        {' '}
      </Navbar.Brand>

      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      
    </Nav>
    <Nav>
      <Nav.Link className="navlinks-grey" href="#deets">Motivation</Nav.Link>
      <Nav.Link className="navlinks-grey" href="#deets">Conference Theme</Nav.Link>
      <Nav.Link className="navlinks-grey" href="#deets">Date and Venue</Nav.Link>
      <Nav.Link className="navlinks-grey" href="#deets">Call for Papers</Nav.Link>
      <Nav.Link className="navlinks-grey" href="#deets">Important Timelines</Nav.Link>
      <Nav.Link className="navlinks-grey" href="#deets">Registration Fee</Nav.Link>      
    </Nav>
  </Navbar.Collapse>


    </Container>
  </Navbar>
        )
    }
}

export default NavigationBar