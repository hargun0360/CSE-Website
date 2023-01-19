import React, { useState } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import NotificationsIcon from '@material-ui/icons/Notifications'
import './Navbar.css'
import { Link } from 'react-router-dom'
import Popup from '../popup/Popup'

function Navigationbar(props) {
  const [modalShow, setModalShow] = useState(false);
  return (
    <>
      <Navbar collapseOnSelect expand="md" bg="dark" variant="dark" className='px-3 navbarcolor'>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <div className='d-flex d-md-none'>
          <div className='text-white p-1 me-4' style={{ fontSize: "12px", border: '1px solid white' }}>Date&nbsp;:&nbsp;9&nbsp;-&nbsp;10&nbsp;Feb&nbsp;2024</div>
          {/* <NotificationsIcon onClick={() => setModalShow(true)} className='m-0 p-0' style={{color:"white"}}/> */}
        </div>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="d-flex justify-content-around w-100 nav-options">
            <Link to='/' className={props.active === 'home' ? 'p-2 activeLink active d-flex align-items-center' : 'p-2 inactiveLink inactive d-flex align-items-center'}>Home</Link>
            <Link to='/about' className={props.active === 'about' ? 'p-2 active activeLink d-flex align-items-center' : 'p-2 inactiveLink inactive d-flex align-items-center'}>About</Link>
            <Link to='/committee' className={props.active === 'committee' ? 'p-2 active activeLink d-flex align-items-center' : 'p-2 inactiveLink inactive d-flex align-items-center'}>Committee</Link>
            <Link to='/call-for-paper' className={props.active === 'call' ? 'p-2 active activeLink d-flex align-items-center' : 'p-2 inactiveLink inactive d-flex align-items-center'}>Call for Paper</Link>
            <Link to='/dates' className={props.active==='dates'?'p-2 active activeLink d-flex align-items-center':'p-2 inactiveLink inactive d-flex align-items-center'}>Important Dates</Link>
            <Link to='/registration' className={props.active === 'registration' ? 'p-2 active activeLink d-flex align-items-center' : 'p-2 inactiveLink inactive d-flex align-items-center'}>Registration</Link>
            {/* <Link to='/dates' className={props.active === 'dates' ? 'p-2 active activeLink d-flex align-items-center' : 'p-2 inactiveLink inactive d-flex align-items-center'}>Important Dates</Link> */}
            <Link to='/accomodation' className={props.active === 'accomodation' ? 'p-2 active activeLink d-flex align-items-center' : 'p-2 inactiveLink inactive d-flex align-items-center'}>Accomodation</Link>

          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <Popup
        show={modalShow}
        onHide={() => setModalShow(false)}
      />

    </>
  );
}

export default Navigationbar;
