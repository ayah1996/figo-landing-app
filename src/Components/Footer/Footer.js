import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";

import "./Footer.scss";

import {
  faFacebookF,
  faInstagram,
  faPinterestP,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import {
  fromDownVariants,
  fromUpVariants,
} from "../../utils/framerMotionAnimation";

const Footer = () => {
  return (
    <footer>
      <img src="Assets/vegetables.webp" alt="figo" className="vegetables" />
      <img src="Assets/footer-leaf.webp" alt="figo" className="footer-leaf" />
      <Container>
        <Row>
          <Col md={4} sm={6}>
            <motion.div
              className="d-flex flex-column mb-5 mb-xxl-0 order-0"
              variants={fromUpVariants}
              initial="initial"
              whileInView="whileInView"
            >
              <h2 className="fs-1 bold logo">
                Figo
                {/* <LogoLeaf className="logo-leaf " /> */}
              </h2>
              <p className="footer-p my-3 my-xxl-4">
                Don't miss to subscribe to our new feeds, Kindly fill the form
                bellow.
              </p>
              <div className="d-flex social-icons">
                <div className="icon-wrap me-3">
                  <FontAwesomeIcon
                    className="icon"
                    icon={faFacebookF}
                    color="#ffffff"
                    fontSize="18"
                  />
                </div>
                <div className="icon-wrap me-3">
                  <FontAwesomeIcon
                    className="icon"
                    icon={faTwitter}
                    color="#ffffff"
                    fontSize="18"
                  />
                </div>
                <div className="icon-wrap me-3">
                  <FontAwesomeIcon
                    className="icon"
                    icon={faInstagram}
                    color="#ffffff"
                    fontSize="18"
                  />
                </div>
                <div className="icon-wrap me-3">
                  <FontAwesomeIcon
                    className="icon"
                    icon={faPinterestP}
                    color="#ffffff"
                    fontSize="18"
                  />
                </div>
              </div>
            </motion.div>
          </Col>
          <Col lg={2} md={4} sm={6}>
            <motion.div
              className="d-flex flex-column mb-xxl-0 order-3 order-lg-1"
              variants={fromDownVariants}
              initial="initial"
              whileInView="whileInView"
            >
              <h4 className="col-title mb-4 mb-lg-5">Our Menu</h4>
              <span>Lunch</span>
              <span>Dinner</span>
              <span>Catering</span>
            </motion.div>
          </Col>
          <Col lg={2} md={4} sm={6}>
            <motion.div
              className="d-flex flex-column mb-5 mb-xxl-0 order-2"
              variants={fromUpVariants}
              initial="initial"
              whileInView="whileInView"
            >
              <h4 className="col-title mb-4 mb-lg-5">Links</h4>
              <span>
                <a href="/#" className="link">
                  About Us
                </a>
              </span>
              <span>
                <a href="/#" className="link">
                  Terms Of Use
                </a>
              </span>
              <span>
                <a href="/#" className="link">
                  Privacy Policy
                </a>
              </span>
            </motion.div>
          </Col>
          <Col lg={3} md={4} sm={6}>
            <motion.div
              className="d-flex flex-column mb-5 mb-xl-0 order-1 order-lg-4"
              variants={fromDownVariants}
              initial="initial"
              whileInView="whileInView"
            >
              <h4 className="col-title mb-4 mb-lg-5">Contacts</h4>
              <span>+8801622010442</span>
              <span>info@restaurant.com</span>
              <span>Daudkandi, Comilla</span>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
