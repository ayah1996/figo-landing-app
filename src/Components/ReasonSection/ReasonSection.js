import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import "./Reason.scss";

const ReasonSection = () => {
  return (
    <section className="reason-section mb-section">
      <img src="/Assets/single-leaf.webp" className="reason-leaf" alt="figo" />

      <Container>
        <Row className="text-center">
          <h5 className="sub-heading">reason</h5>
          <h3 className="heading">Why Choose Us?</h3>
        </Row>
        <Row className="text-center justify-content-center gx-5">
          <Col sm={8} md={6} lg={4} className="mb-3 mb-lg-0">
            <div className="reason-item">
              <div className="icon">
                <img
                  src="/Assets/reason01.webp"
                  className="img-fluid"
                  alt="figo"
                />
              </div>
              <h3 className="reason-heading"> Various Menus</h3>
              <p>
                Etiam feugiat eleifend est, odio tempor vitaeVivamus maximus
                scelerisque ipsum nec commodo.
              </p>
            </div>
          </Col>

          <Col sm={8} md={6} lg={4} className="mb-3 mb-lg-0">
            <div className="reason-item active">
              <div className="icon">
                <img
                  src="/Assets/reason02.webp"
                  className="img-fluid"
                  alt="figo"
                />
              </div>
              <h3 className="reason-heading">Pocket Friendly Delivery </h3>
              <p>
                Etiam feugiat eleifend est, odio tempor vitaeVivamus maximus
                scelerisque ipsum nec commodo.
              </p>
            </div>
          </Col>

          <Col sm={8} md={6} lg={4} className="mb-3 mb-lg-0">
            <div className="reason-item">
              <div className="icon">
                <img
                  src="/Assets/reason03.webp"
                  className="img-fluid"
                  alt="figo"
                />
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
    </section>
  );
};

export default ReasonSection;
