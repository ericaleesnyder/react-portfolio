import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";

function NavTabs({ currentPage, handlePageChange }) {
  return (
    <Navbar expand="lg" className="nav-style">
      <Container style={{alignItems:"center"}}>
        <Navbar.Brand style={{fontSize:"2rem", fontWeight:"500", color:"var(--primary)"}}>Erica Snyder</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav className="">
            <Nav.Link href="#about" onClick={() => handlePageChange('About')} className={currentPage === 'About' ? 'nav-link active' : 'nav-link es-inactive'}>About Me</Nav.Link>
            <Nav.Link href="#portfolio" onClick={() => handlePageChange('Portfolio')} className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link es-inactive'}>Portfolio</Nav.Link>
            <Nav.Link href="#resume" onClick={() => handlePageChange('Resume')} className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link es-inactive'}>Resume</Nav.Link>
            <Nav.Link href="#contact" onClick={() => handlePageChange('Contact')} className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link es-inactive'}>Contact Me</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavTabs;
