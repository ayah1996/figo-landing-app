import React from "react";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Container, Row, Col } from "react-bootstrap";
import { ReactComponent as RightLeaf } from "../../Assets/Images/pizza-leaf01.svg";
import { ReactComponent as LeftLeaf } from "../../Assets/Images/single-leaf.svg";

import "./Subscribe.scss";

const SubscribeSection = () => {
  return (
    <section className="subscribe-section mb-section">
      <RightLeaf className="right-subscribe-leaf" />
      <LeftLeaf className="left-subscribe-leaf" />

      <Container>
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
              <span
                class="input-group-text me-2"
                id="inputGroup-sizing-default"
              >
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
    </section>
  );
};

export default SubscribeSection;
