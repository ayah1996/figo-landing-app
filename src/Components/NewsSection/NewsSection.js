import React from "react";
import { motion } from "framer-motion";
import AnimatedLetters from "../AnimatedLetters/AnimatedLetters";
import { Col, Container, Row } from "react-bootstrap";
import NewsCard from "./NewsCard";
import {
  cardVariants,
  santanceVariants,
} from "../../utils/framerMotionAnimation";

const NewsSection = () => {
  return (
    <section className="mb-section">
      <Container>
        <Row className="text-center">
          <motion.h5
            className="sub-heading"
            variants={santanceVariants}
            initial="initial"
            whileInView="animate"
          >
            <AnimatedLetters text={"News"} />
          </motion.h5>
          <motion.h3
            className="heading"
            variants={santanceVariants}
            initial="initial"
            whileInView="animate"
          >
            <AnimatedLetters text={"Latest News"} />
          </motion.h3>
        </Row>
        <Row>
          <Col lg={4} md={6} className="mb-lg-0 mb-4">
            <motion.div
              variants={cardVariants}
              initial="initial"
              whileInView="whileInView"
            >
              <NewsCard
                img={"Assets/news01.webp"}
                title={"Spain Appetizer"}
                description={`Quickly of predominate and standards 
compliiants and an architectures.`}
              />
            </motion.div>
          </Col>
          <Col lg={4} md={6} className="mb-lg-0 mb-4">
            <motion.div
              variants={cardVariants}
              initial="initial"
              whileInView="whileInView"
            >
              <NewsCard
                img={"Assets/news02.webp"}
                title={"Wine And Cheese"}
                description={`Quickly of predominate and standards 
compliiants and an architectures.`}
              />
            </motion.div>
          </Col>
          <Col lg={4} md={6} className="mb-lg-0 mb-4">
            <motion.div
              variants={cardVariants}
              initial="initial"
              whileInView="whileInView"
            >
              <NewsCard
                img={"Assets/news03.webp"}
                title={"Cups Of Coffee"}
                description={`Quickly of predominate and standards 
compliiants and an architectures.`}
              />
            </motion.div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default NewsSection;
