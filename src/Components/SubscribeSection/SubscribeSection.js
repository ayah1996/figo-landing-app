import { faStar } from "@fortawesome/free-regular-svg-icons";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import "./Subscribe.scss";
const SubscribeSection = () => {
  return (
    <Container className="mb-section">
      <Row className="text-center">
        <h5 className="sub-heading">Subscription</h5>
        <h3 className="heading">Wants to get update ?</h3>
      </Row>
      <Row className="justify-content-center">
        <Col lg={6}>
          <div class="input-group input-group-lg mt-5">
            <input
              type="email"
              className="form-control subscribe-input"
              placeholder="Enter Your Email Address"
              aria-label="Enter Your Email Address"
              aria-describedby="inputGroup-sizing-default"
            />
            <span class="input-group-text me-2" id="inputGroup-sizing-default">
              <FontAwesomeIcon
                className="arrow-icon"
                icon={faArrowRightLong}
                color="#ffffff"
              />
            </span>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default SubscribeSection;
