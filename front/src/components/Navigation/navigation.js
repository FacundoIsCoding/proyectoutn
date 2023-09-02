import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Navigation = () => {
  return (
    <Navbar expand="lg">
      <Container>
        <img src="./images/logo.png" width={80} alt='to ocean' />
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav.Link className='navfont' href="/">To Ocean</Nav.Link>
          <Nav className="navbaractive">
            <Nav.Link className='navfont' href="/">Inicio</Nav.Link>
            <Nav.Link className='navfont' href="servicios">Servicios</Nav.Link>
            <Nav.Link className='navfont' href="habitaciones">Habitaciones</Nav.Link>
            <Nav.Link className='navfont' href="destinos">Destinos</Nav.Link>
            <Nav.Link className='navfont' href="registrarse">Registrarse</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
