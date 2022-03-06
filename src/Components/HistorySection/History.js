import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import HistoryImg from "../../Assets/Images/history.png";
import CustomBtn from "../Button/CustomBtn";

import { ReactComponent as Leaf } from "../../Assets/Images/pizza-leaf01.svg";

import "./History.scss";

const HistorySection = () => {
  return (
    <section className="history-section mb-section ">
      {/* <Leaf className="history-leaf" /> */}

      <Container>
        <Row className="gx-5 ">
          <Col
            lg={6}
            className="order-2 order-lg-1  text-center text-lg-start align-self-center mt-5 mt-lg-0"
          >
            <h5 className="sub-heading">History of Figo</h5>
            <h3 className="heading">
              We Cook Tradition & <br />
              Family Recipes
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
            <div className="historyBtn mx-auto mx-lg-0">
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
    </section>
  );
};

export default HistorySection;
