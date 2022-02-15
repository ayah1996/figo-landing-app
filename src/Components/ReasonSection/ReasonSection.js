import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import { ReactComponent as ReasonIcon01 } from "../../Assets/Images/reason01.svg";
import { ReactComponent as ReasonIcon02 } from "../../Assets/Images/reason02.svg";
import { ReactComponent as ReasonIcon03 } from "../../Assets/Images/reason03.svg";

import "./Reason.scss";

const ReasonSection = () => {
  return (
    <Container className="mb-section">
      <Row className="text-center">
        <h5 className="sub-heading">reason</h5>
        <h3 className="heading">Why Choose Us?</h3>
      </Row>
      <Row className="text-center justify-content-center gx-5">
        <Col xs={8} sm={6} lg={4} className="mb-3 mb-lg-0">
          <div className="reason-item">
            <div className="icon">
              <ReasonIcon01 />
            </div>
            <h3 className="reason-heading"> Various Menus</h3>
            <p>
              Etiam feugiat eleifend est, odio tempor vitaeVivamus maximus
              scelerisque ipsum nec commodo.
            </p>
          </div>
        </Col>

        <Col xs={8} sm={6} lg={4} className="mb-3 mb-lg-0">
          <div className="reason-item active">
            <div className="icon">
              <ReasonIcon02 />
            </div>
            <h3 className="reason-heading">Pocket Friendly Delivery </h3>
            <p>
              Etiam feugiat eleifend est, odio tempor vitaeVivamus maximus
              scelerisque ipsum nec commodo.
            </p>
          </div>
        </Col>

        <Col xs={8} sm={6} lg={4} className="mb-3 mb-lg-0">
          <div className="reason-item">
            <div className="icon">
              <ReasonIcon03 />
            </div>
            <h3 className="reason-heading">Best Offers</h3>
            <p>
              Etiam feugiat eleifend est, odio tempor vitaeVivamus maximus
              scelerisque ipsum nec commodo.
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ReasonSection;
