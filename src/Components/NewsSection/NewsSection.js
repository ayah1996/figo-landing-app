import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import NewsCard from "./NewsCard";

import NewsImg01 from "../../Assets/Images/news01.webp";
import NewsImg02 from "../../Assets/Images/news02.webp";
import NewsImg03 from "../../Assets/Images/news03.webp";

const NewsSection = () => {
  return (
    <section className="mb-section">
      <Container>
        <Row className="text-center">
          <h5 className="sub-heading">News</h5>
          <h3 className="heading">Latest News</h3>
        </Row>
        <Row>
          <Col lg={4} md={6} className="mb-lg-0 mb-4">
            <NewsCard
              img={NewsImg01}
              title={"Spain Appetizer"}
              description={`Quickly of predominate and standards 
compliiants and an architectures.`}
            />
          </Col>
          <Col lg={4} md={6} className="mb-lg-0 mb-4">
            <NewsCard
              img={NewsImg02}
              title={"Wine And Cheese"}
              description={`Quickly of predominate and standards 
compliiants and an architectures.`}
            />
          </Col>
          <Col lg={4} md={6} className="mb-lg-0 mb-4">
            <NewsCard
              img={NewsImg03}
              title={"Cups Of Coffee"}
              description={`Quickly of predominate and standards 
compliiants and an architectures.`}
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default NewsSection;
