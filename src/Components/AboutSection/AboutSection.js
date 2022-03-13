import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import CustomBtn from "../Button/CustomBtn";

import "./AboutSection.scss";

const AboutSection = () => {
  return (
    <section className="about-section mb-section">
      <img src="/Assets/single-leaf.webp" className="about-leaf" alt="figo" />
      <Container>
        <Row className="gx-5 text-center text-lg-start ">
          <Col sm={8} md={6} className="mx-auto mx-lg-0">
            <img src="/Assets/welcome.webp" className="img-fluid" alt="figo" />
          </Col>
          <Col lg={6} className="align-self-center mt-5 mt-lg-0">
            <h5 className="sub-heading">welcome</h5>
            <h3 className="heading">
              Welcome to Figo <br /> Restaurant
            </h3>
            <p className="p-desc">
              Quickly predominate standards compliants architectures and
              prospective internal or "organic" sources. Synergistically mesh
              quality quality vectors for one-to-one leadership.
            </p>
            <p className="p-desc mb-xl-5 mb-4">
              Quickly predominate standards compliants architectures and
              prospective internal or "organic" sources. Synergistically mesh
              quality quality vectors for one-to-one leadership.
            </p>
            <div className="aboutBtn mx-auto mx-lg-0">
              <CustomBtn text={"Explore Our Story"} />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutSection;
