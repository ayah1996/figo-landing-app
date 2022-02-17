import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import AboutImg from "../../Assets/Images/welcome.png";
import CustomBtn from "../Button/CustomBtn";
import "./AboutSection.scss";

const AboutSection = () => {
  return (
    <>
      <Container>
        <Row className="gx-5 text-center text-xl-start mb-section">
          <Col xl={6}>
            <img src={AboutImg} class="img-fluid" alt="figo" />
          </Col>
          <Col xl={6} className="align-self-center mt-5 mt-xl-0">
            <h5 className="sub-heading">welcome</h5>
            <h3 className="heading">
              Welcome to Figo <br /> Restaurant
            </h3>
            <p className="p-desc">
              Quickly predominate standards compliants architectures and
              prospective internal or "organic" sources. Synergistically mesh
              quality quality vectors for one-to-one leadership.
            </p>
            <p className="p-desc mb-5">
              Quickly predominate standards compliants architectures and
              prospective internal or "organic" sources. Synergistically mesh
              quality quality vectors for one-to-one leadership.
            </p>
            <div className="aboutBtn mx-auto mx-xl-0">
              <CustomBtn text={"Explore Our Story"} />
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default AboutSection;
