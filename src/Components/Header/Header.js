import React, { useState } from "react";

import {
  Col,
  Container,
  FloatingLabel,
  Form,
  Nav,
  Navbar,
  Row,
} from "react-bootstrap";

import CustomBtn from "../Button/CustomBtn";

import { ReactComponent as LogoLeaf } from "../../Assets/Images/logo-part.svg";
import { ReactComponent as Cart } from "../../Assets/Images/cart.svg";
import { ReactComponent as Close } from "../../Assets/Images/close-round.svg";
import { ReactComponent as Leaf01 } from "../../Assets/Images/pizza-leaf01.svg";
import { ReactComponent as Leaf02 } from "../../Assets/Images/pizza-leaf02.svg";
import { ReactComponent as Leaf03 } from "../../Assets/Images/pizza-leaf03.svg";

import Pizza from "../../Assets/Images/pizza.png";
import "./Header.Styles.scss";
const Header = () => {
  const [expanded, setExpanded] = useState(false);

  const handleExpanded = () => {
    setTimeout(() => {
      setExpanded(false);
    }, 150);
  };

  return (
    <>
      <Navbar collapseOnSelect expanded={expanded} expand="md" variant="light">
        <Container>
          <Navbar.Brand href="#home">
            <h2 className="fs-1 position-relative text-lightBlack bold logo">
              Figo
              <LogoLeaf className="logo-leaf position-absolute" />
            </h2>
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="responsive-navbar-nav"
            onClick={() => setExpanded(expanded ? false : "expanded")}
          />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link
                href="#home"
                className="me-3 active"
                onClick={handleExpanded}
              >
                Home
              </Nav.Link>
              <Nav.Link href="#menu" className="me-3" onClick={handleExpanded}>
                Menu
              </Nav.Link>
              <Nav.Link
                href="#services"
                className="me-3"
                onClick={handleExpanded}
              >
                Services
              </Nav.Link>
              <Nav.Link
                href="#signin"
                className="me-3"
                onClick={handleExpanded}
              >
                Sign In
              </Nav.Link>
              <Nav.Link href="/#" className="me-3" onClick={handleExpanded}>
                <Cart />
              </Nav.Link>
              <Nav.Link
                className="me-3 d-md-none
"
                onClick={handleExpanded}
              >
                <Close className="closeBtn" />
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {/* <section className="hero">
        <Container>
          <Row className="justify-content-between">
            <Col md={6} className="align-self-center">
              <h1 className="bold hero-title">
                All in Good Taste Food With Figo.
              </h1>
              <p className="hero-desc">
                Quickly predominate standard compliant architecture <br />
                and may have prospective internal or organic sources.
              </p>
              <Row className="g-4">
                <Col md={6}>
                  <FloatingLabel
                    controlId="floatingInputGrid"
                    label="Enter Your Address"
                  >
                    <Form.Control
                      type="text"
                      placeholder="Enter your address"
                    />
                  </FloatingLabel>
                </Col>
                <Col md={3}>
                  <CustomBtn text={"Get Started"} />
                </Col>
              </Row>
            </Col>
            <Col md={5}>
              <div className="pizza-container center">
                <div className="circle">
                  <Leaf01 className="leaf" />
                  <Leaf02 className="leaf" />
                  <Leaf01 className="leaf" />
                  <Leaf03 className="leaf" />
                  <Leaf01 className="leaf" />
                  <Leaf02 className="leaf" />
                  <Leaf01 className="leaf" />
                  <Leaf03 className="leaf" />
                  <div className="inner-circle">
                    <img src={Pizza} alt="figo" />
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section> */}
    </>
  );
};

export default Header;
