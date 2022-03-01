import React from "react";
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";

import "../../../node_modules/slick-carousel/slick/slick.css";
import "../../../node_modules/slick-carousel/slick/slick-theme.css";

import BreakfastSlideTapPane from "./BreakfastSlideTapPane";
import LunchTabPane from "./LunchTabPane";
import { ReactComponent as Leaf } from "../../Assets/Images/pizza-leaf01.svg";

import "./Browse.scss";

const BrowseSection = () => {
  return (
    <section className="browse-section mb-section">
      <Leaf className="browse-leaf" />
      <Container>
        <Row className="text-center">
          <h5 className="sub-heading">Browse</h5>
          <h3 className="heading">Explore Our Menu</h3>
        </Row>

        <Tab.Container id="menu-tabs" defaultActiveKey="breakfast">
          <Row>
            <Col lg={2} xl={3}>
              <Nav
                variant="pills"
                className="flex-lg-column mb-5 mb-lg-0 justify-content-center justify-content-lg-start nav-tabs"
              >
                <Nav.Item>
                  <Nav.Link eventKey="breakfast">breakfast</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="lunch">lunch</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="dinner">dinner</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="desert">desert</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="soups">soups</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="drinks">drinks</Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
            <Col lg={10} xl={9}>
              <Tab.Content>
                <Tab.Pane eventKey="breakfast">
                  <BreakfastSlideTapPane />
                </Tab.Pane>
                <Tab.Pane eventKey="lunch">
                  <LunchTabPane />
                </Tab.Pane>
                <Tab.Pane eventKey="dinner">
                  <LunchTabPane />
                </Tab.Pane>
                <Tab.Pane eventKey="desert">
                  <LunchTabPane />
                </Tab.Pane>
                <Tab.Pane eventKey="soups">
                  <LunchTabPane />
                </Tab.Pane>
                <Tab.Pane eventKey="drinks">
                  <LunchTabPane />
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </Container>
    </section>
  );
};

export default BrowseSection;
