import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { ReactComponent as LogoLeaf } from "../../Assets/Images/logo-part.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./Footer.scss";

import {
  faFacebookF,
  faInstagram,
  faPinterestP,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
const Footer = () => {
  return (
    <footer>
      <Container>
        <Row>
          <Col
            xxl={4}
            md={4}
            sm={6}
            className="d-flex flex-column mb-5 mb-xxl-0"
          >
            <h2 className="fs-1 bold logo">
              Figo
              <LogoLeaf className="logo-leaf " />
            </h2>
            <p className="footer-p my-4">
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
          </Col>
          <Col
            xxl={2}
            md={4}
            sm={6}
            className="d-flex flex-column mb-5 mb-xxl-0"
          >
            <h4 className="col-title mb-5">Our Menu</h4>
            <span>Lunch</span>
            <span>Dinner</span>
            <span>Catering</span>
          </Col>
          <Col
            xxl={2}
            md={4}
            sm={6}
            className="d-flex flex-column mb-5 mb-xxl-0"
          >
            <h4 className="col-title mb-5">Links</h4>
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
          </Col>
          <Col
            xxl={3}
            md={4}
            sm={6}
            className="d-flex flex-column mb-5 mb-xxl-0"
          >
            <h4 className="col-title mb-5">Contacts</h4>
            <span>+8801622010442</span>
            <span>info@restaurant.com</span>
            <span>Daudkandi, Comilla</span>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
