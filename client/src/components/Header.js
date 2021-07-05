import React, { Component } from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';

export class Header extends Component {
    render() {
        return (
            <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand>POKIMON GALLERY</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Link to='/' style={{padding:'0 15px',color:'inherit',textDecoration:'none'}}>
                Home
              </Link>
              <Link to='/favorite' style={{padding:'0 15px',color:'inherit',textDecoration:'none'}}>
                Favorite
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
        )
    }
}

export default Header
