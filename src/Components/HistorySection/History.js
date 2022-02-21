import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import HistoryImg from "../../Assets/Images/history.png";
import CustomBtn from "../Button/CustomBtn";

const HistorySection = () => {
  return (
    <>
      <Container>
        <Row className="gx-5 mb-section">
          <Col
            lg={6}
            className="order-2 order-lg-1  text-center text-lg-start align-self-center mt-5 mt-lg-0"
          >
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
            <div className="aboutBtn mx-auto mx-lg-0">
              <CustomBtn text={"Explore Our Story"} />
            </div>
          </Col>
          <Col
            sm={8}
            md={6}
            className="order-1 order-xxl-2 mx-auto mx-lg-0 text-xl-end mt-5 mt-lg-0"
          >
            <img src={HistoryImg} class="img-fluid" alt="figo" />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default HistorySection;
