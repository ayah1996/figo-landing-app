import React, { useState } from "react";
import { motion } from "framer-motion";

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
import {
  blurImgVariants,
  generalVariants,
  heroImageVariants,
  navbarVariants,
  santanceVariants,
} from "../../utils/framerMotionAnimation";
import "./Header.Styles.scss";
import AnimatedLetters from "../AnimatedLetters/AnimatedLetters";

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
      <motion.div variants={navbarVariants} initial="initial" animate="animate">
        <Navbar
          collapseOnSelect
          expanded={expanded}
          expand="md"
          variant="light"
        >
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
                <Nav.Link
                  href="#menu"
                  className="me-3"
                  onClick={handleExpanded}
                >
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
      </motion.div>
      <section className="hero">
        <Container>
          <Row className="justify-content-lg-between">
            <Col lg={6} xl={5} className="order-1 order-lg-0 align-self-center">
              <motion.h1
                variants={santanceVariants}
                initial="initial"
                animate="animate"
                className="bold hero-title"
              >
                <AnimatedLetters text={"All in Good Taste Food With Figo."} />
              </motion.h1>
              <motion.p
                variants={generalVariants}
                initial="initial"
                animate="whileInView"
                custom={3}
                className="hero-desc"
              >
                Quickly predominate standard compliant architecture <br />
                and may have prospective internal or organic sources.
              </motion.p>
              <motion.div
                variants={generalVariants}
                initial="initial"
                animate="whileInView"
                custom={3.5}
              >
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
              </motion.div>
            </Col>

            <Col lg={6} xl={5} className="order-0 order-lg-1 mx-auto mx-lg-0">
              <motion.div
                variants={heroImageVariants}
                initial="initial"
                whileInView="whileInView"
                transition={{ type: "tween" }}
                className="pizza-container"
              >
                <div className="circle mx-auto">
                  <motion.img
                    variants={blurImgVariants}
                    initial="initial"
                    animate="animate"
                    custom={1.6}
                    src="/Assets/pizza-leaf01.webp"
                    alt="figo"
                    className="leaf"
                  />
                  <motion.img
                    variants={blurImgVariants}
                    initial="initial"
                    animate="animate"
                    custom={1.7}
                    src="/Assets/pizza-leaf02.webp"
                    alt="figo"
                    className="leaf"
                  />

                  <motion.img
                    variants={blurImgVariants}
                    initial="initial"
                    animate="animate"
                    custom={1.8}
                    src="/Assets/pizza-leaf01.webp"
                    alt="figo"
                    className="leaf"
                  />

                  <motion.img
                    variants={blurImgVariants}
                    initial="initial"
                    animate="animate"
                    custom={1.9}
                    src="/Assets/pizza-leaf03.webp"
                    alt="figo"
                    className="leaf"
                  />

                  <motion.img
                    variants={blurImgVariants}
                    initial="initial"
                    animate="animate"
                    custom={1.2}
                    src="/Assets/pizza-leaf01.webp"
                    alt="figo"
                    className="leaf"
                  />

                  <motion.img
                    variants={blurImgVariants}
                    initial="initial"
                    animate="animate"
                    custom={1.3}
                    src="/Assets/pizza-leaf02.webp"
                    alt="figo"
                    className="leaf"
                  />

                  <motion.img
                    variants={blurImgVariants}
                    initial="initial"
                    animate="animate"
                    custom={1.4}
                    src="/Assets/pizza-leaf01.webp"
                    alt="figo"
                    className="leaf"
                  />

                  <motion.img
                    variants={blurImgVariants}
                    initial="initial"
                    animate="animate"
                    custom={1.5}
                    src="/Assets/pizza-leaf03.webp"
                    alt="figo"
                    className="leaf"
                  />

                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, rotate: 180 }}
                    transition={{ type: "tween", duration: 1 }}
                    className="inner-circle"
                  >
                    <img src="/Assets/pizza.webp" alt="figo" />
                  </motion.div>
                </div>
              </motion.div>
            </Col>
          </Row>
        </Container>
      </section>
    </header>
  );
};

export default Header;
