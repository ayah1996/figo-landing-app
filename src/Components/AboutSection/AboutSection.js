import React from "react";
import { motion } from "framer-motion";
import { Col, Container, Row } from "react-bootstrap";
import CustomBtn from "../Button/CustomBtn";

import "./AboutSection.scss";
import AnimatedLetters from "../AnimatedLetters/AnimatedLetters";
import {
  generalVariants,
  imgVariants,
  santanceVariants,
} from "../../utils/framerMotionAnimation";

const AboutSection = () => {
  return (
    <section className="about-section mb-section">
      <img src="/Assets/single-leaf.webp" className="about-leaf" alt="figo" />
      <Container>
        <Row className="gx-5 text-center text-lg-start ">
          <Col sm={8} md={6} className="mx-auto mx-lg-0">
            <motion.img
              variants={imgVariants}
              initial="initial"
              whileInView="whileInView"
              src="/Assets/welcome.webp"
              className="img-fluid"
              alt="figo"
            />
          </Col>
          <Col lg={6} className="align-self-center mt-5 mt-lg-0">
            <motion.h5
              variants={santanceVariants}
              initial="initial"
              whileInView="animate"
              className="sub-heading"
            >
              <AnimatedLetters text={"welcome"} />
            </motion.h5>
            <motion.h3
              variants={santanceVariants}
              initial="initial"
              whileInView="animate"
              className="heading"
            >
              <AnimatedLetters text={"Welcome to Figo"} />
              <br />
              <AnimatedLetters text={"Restaurant"} />
            </motion.h3>
            <motion.p
              className="p-desc"
              variants={generalVariants}
              initial="initial"
              whileInView="whileInView"
              custom={0.5}
            >
              Quickly predominate standards compliants architectures and
              prospective internal or "organic" sources. Synergistically mesh
              quality quality vectors for one-to-one leadership.
            </motion.p>
            <motion.p
              variants={generalVariants}
              initial="initial"
              whileInView="whileInView"
              custom={0.7}
              className="p-desc mb-xl-5 mb-4"
            >
              Quickly predominate standards compliants architectures and
              prospective internal or "organic" sources. Synergistically mesh
              quality quality vectors for one-to-one leadership.
            </motion.p>
            <motion.div
              variants={generalVariants}
              initial="initial"
              whileInView="whileInView"
              custom={0.9}
              className="aboutBtn mx-auto mx-lg-0"
            >
              <CustomBtn text={"Explore Our Story"} />
            </motion.div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutSection;
