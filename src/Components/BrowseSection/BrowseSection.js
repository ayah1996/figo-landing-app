import React from "react";
import { Suspense, lazy } from "react";

import { Container, Row, Col, Tab, Nav } from "react-bootstrap";

// import "../../../node_modules/slick-carousel/slick/slick.css";
// import "../../../node_modules/slick-carousel/slick/slick-theme.css";

import "./Browse.scss";

const BreakfastSlideTapPane = lazy(() => import("./BreakfastSlideTapPane"));
const LunchTabPane = lazy(() => import("./LunchTabPane"));

const BrowseSection = () => {
  return (
    <section className="browse-section mb-section">
      <img src="/Assets/pizza-leaf01.webp" className="browse-leaf" alt="figo" />
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
                  <Suspense fallback={<div>Loading ...</div>}>
                    <BreakfastSlideTapPane />
                  </Suspense>
                </Tab.Pane>
                <Tab.Pane eventKey="lunch">
                  <Suspense fallback={<div>Loading ...</div>}>
                    <LunchTabPane />
                  </Suspense>
                </Tab.Pane>
                <Tab.Pane eventKey="dinner">
                  <Suspense fallback={<div>Loading ...</div>}>
                    <LunchTabPane />
                  </Suspense>
                </Tab.Pane>
                <Tab.Pane eventKey="desert">
                  <Suspense fallback={<div>Loading ...</div>}>
                    <LunchTabPane />
                  </Suspense>
                </Tab.Pane>
                <Tab.Pane eventKey="soups">
                  <Suspense fallback={<div>Loading ...</div>}>
                    <LunchTabPane />
                  </Suspense>
                </Tab.Pane>
                <Tab.Pane eventKey="drinks">
                  <Suspense fallback={<div>Loading ...</div>}>
                    <LunchTabPane />
                  </Suspense>
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
