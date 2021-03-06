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

import "./Header.Styles.scss";

const Header = () => {
  // handle mobile menu
  const [expanded, setExpanded] = useState(false);

  const handleExpanded = () => {
    setTimeout(() => {
      setExpanded(false);
    }, 150);
  };

  return (
    <header className="mb-section">
      <Navbar collapseOnSelect expanded={expanded} expand="md" variant="light">
        <Container>
          <Navbar.Brand href="#home">
            <h2 className="fs-1 position-relative text-lightBlack bold logo">
              Figo
              <img
                src="/Assets/logo-part.webp"
                alt="figo"
                className="logo-leaf position-absolute"
                loading="lazy"
              />
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
                <img src="/Assets/cart.webp" alt="figo" />
              </Nav.Link>
              <Nav.Link
                className="me-3 d-md-none
"
                onClick={handleExpanded}
              >
                <img
                  src="/Assets/close-round.svg"
                  className="closeBtn"
                  alt="close"
                />
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <section className="hero">
        <Container>
          <Row className="justify-content-lg-between">
            <Col lg={6} xl={5} className="order-1 order-lg-0 align-self-center">
              <h1 className="bold hero-title">
                All in Good Taste Food With Figo.
              </h1>
              <p className="hero-desc">
                Quickly predominate standard compliant architecture <br />
                and may have prospective internal or organic sources.
              </p>
              <Row className="g-4 justify-content-center justify-content-lg-start">
                <Col md={6} sm={8} className="mx-md-0 mx-auto">
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
                <Col md={3} sm={8} className="mx-md-0 mx-auto">
                  <CustomBtn text={"Get Started"} />
                </Col>
              </Row>
            </Col>
            <Col lg={6} xl={5} className="order-0 order-lg-1 mx-auto mx-lg-0">
              <div className="pizza-container">
                <div className="circle mx-auto">
                  <img
                    src="/Assets/pizza-leaf01.webp"
                    alt="figo"
                    className="leaf"
                  />
                  <img
                    src="/Assets/pizza-leaf02.webp"
                    alt="figo"
                    className="leaf"
                  />

                  <img
                    src="/Assets/pizza-leaf01.webp"
                    alt="figo"
                    className="leaf"
                  />

                  <img
                    src="/Assets/pizza-leaf03.webp"
                    alt="figo"
                    className="leaf"
                  />

                  <img
                    src="/Assets/pizza-leaf01.webp"
                    alt="figo"
                    className="leaf"
                  />

                  <img
                    src="/Assets/pizza-leaf02.webp"
                    alt="figo"
                    className="leaf"
                  />

                  <img
                    src="/Assets/pizza-leaf01.webp"
                    alt="figo"
                    className="leaf"
                  />

                  <img
                    src="/Assets/pizza-leaf03.webp"
                    alt="figo"
                    className="leaf"
                  />

                  <div className="inner-circle">
                    <img src="/Assets/pizza.webp" alt="figo" />
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </header>
  );
};

export default Header;
