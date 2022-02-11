import React from "react";

import { Container, Nav, Navbar } from "react-bootstrap";

import { ReactComponent as LogoLeaf } from "../../Assets/Images/logo-part.svg";
import { ReactComponent as Cart } from "../../Assets/Images/cart.svg";

import "./Header.Styles.scss";
const Header = () => {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" variant="light">
        <Container>
          <Navbar.Brand href="#home">
            <h2 className="fs-1 position-relative text-lightBlack bold logo">
              Figo
              <LogoLeaf className="logo-leaf position-absolute" />
            </h2>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home" className="me-3 active">
                Home
              </Nav.Link>
              <Nav.Link href="#menu" className="me-3">
                Menu
              </Nav.Link>
              <Nav.Link href="#services" className="me-3">
                Services
              </Nav.Link>
              <Nav.Link href="#signin" className="me-3">
                Sign In
              </Nav.Link>
              <Nav.Link href="#home" className="me-3">
                <Cart />
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
