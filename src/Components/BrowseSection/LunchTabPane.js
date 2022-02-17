import React from "react";
import MenuItem from "./MenuItem";

import MenuImg01 from "../../Assets/Images/menu01.png";
import MenuImg02 from "../../Assets/Images/menu02.png";
import MenuImg03 from "../../Assets/Images/menu03.png";

import "./Browse.scss";
import { Col, Row } from "react-bootstrap";

const LunchTabPane = () => {
  return (
    <Row>
      <Col md={6} lg={4} className="mb-lg-0 mb-4">
        <MenuItem
          img={MenuImg01}
          title={"Chicken Massala"}
          oldPrice={250}
          newPrice={100}
        />
      </Col>

      <Col md={6} lg={4} className="mb-lg-0 mb-4">
        <MenuItem
          img={MenuImg03}
          title={"Sandwich Soup"}
          oldPrice={220}
          newPrice={180}
        />
      </Col>

      <Col md={6} lg={4} className="mb-lg-0 mb-4">
        <MenuItem
          img={MenuImg02}
          title={"Western Sunrise"}
          oldPrice={200}
          newPrice={100}
        />
      </Col>
    </Row>
  );
};

export default LunchTabPane;
