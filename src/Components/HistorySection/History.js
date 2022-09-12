import React from "react";
import { motion } from "framer-motion";
import { Col, Container, Row } from "react-bootstrap";
import CustomBtn from "../Button/CustomBtn";

import "./History.scss";
import {
  generalVariants,
  imgVariants,
  santanceVariants,
} from "../../utils/framerMotionAnimation";
import AnimatedLetters from "../AnimatedLetters/AnimatedLetters";

const HistorySection = () => {
  return (
    <section className="history-section mb-section ">
      <img
        src="/Assets/pizza-leaf01.webp"
        className="history-leaf"
        alt="figo"
      />

      <Container>
        <Row className="gx-5 ">
          <Col
            lg={6}
            className="order-2 order-lg-1  text-center text-lg-start align-self-center mt-5 mt-lg-0"
          >
            <motion.h5
              className="sub-heading"
              variants={santanceVariants}
              initial="initial"
              whileInView="animate"
            >
              <AnimatedLetters text={"History of Figo"} />
            </motion.h5>
            <motion.h3
              className="heading"
              variants={santanceVariants}
              initial="initial"
              whileInView="animate"
            >
              <AnimatedLetters text={`We Cook Tradition &`} />
              <br />
              <AnimatedLetters text={"Family Recipes"} />
            </motion.h3>
            <motion.p
              className="p-desc"
              variants={generalVariants}
              initial="initial"
              whileInView="whileInView"
              custom={1}
            >
              Quickly predominate standards compliants architectures and
              prospective internal or "organic" sources. Synergistically mesh
              quality quality vectors for one-to-one leadership.
            </motion.p>
            <motion.p
              className="p-desc mb-5"
              variants={generalVariants}
              initial="initial"
              whileInView="whileInView"
              custom={1.2}
            >
              Quickly predominate standards compliants architectures and
              prospective internal or "organic" sources. Synergistically mesh
              quality quality vectors for one-to-one leadership.
            </motion.p>
            <motion.div
              className="historyBtn mx-auto mx-lg-0"
              variants={generalVariants}
              initial="initial"
              whileInView="whileInView"
              custom={1.4}
            >
              <CustomBtn text={"Explore Our Story"} />
            </motion.div>
          </Col>
          <Col
            sm={8}
            md={6}
            className="order-1 order-xxl-2 mx-auto mx-lg-0 text-xl-end mt-5 mt-lg-0"
          >
            <motion.img
              variants={imgVariants}
              initial="initial"
              whileInView="whileInView"
              src="/Assets/history.webp"
              className="img-fluid"
              alt="figo"
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HistorySection;
