import React from "react";
import MenuItem from "./MenuItem";

import { Col, Row } from "react-bootstrap";

import "./Browse.scss";

const LunchTabPane = () => {
  return (
    <Row>
      <Col md={6} lg={4} className="mb-lg-0 mb-4">
        <MenuItem
          img={"Assets/menu01.webp"}
          title={"Chicken Massala"}
          oldPrice={250}
          newPrice={100}
        />
      </Col>

      <Col md={6} lg={4} className="mb-lg-0 mb-4">
        <MenuItem
          img={"Assets/menu03.webp"}
          title={"Sandwich Soup"}
          oldPrice={220}
          newPrice={180}
        />
      </Col>

      <Col md={6} lg={4} className="mb-lg-0 mb-4">
        <MenuItem
          img={"Assets/menu02.webp"}
          title={"Western Sunrise"}
          oldPrice={200}
          newPrice={100}
        />
      </Col>
    </Row>
  );
};

export default LunchTabPane;
