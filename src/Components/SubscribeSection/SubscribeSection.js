import React from "react";
import { motion } from "framer-motion";

import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Container, Row, Col } from "react-bootstrap";
import AnimatedLetters from "../AnimatedLetters/AnimatedLetters";
import "./Subscribe.scss";
import {
  generalVariants,
  santanceVariants,
} from "../../utils/framerMotionAnimation";

const SubscribeSection = () => {
  return (
    <section className="subscribe-section mb-section">
      <img
        src="Assets/pizza-leaf01.webp"
        alt="figo"
        className="right-subscribe-leaf"
      />
      <img
        src="Assets/single-leaf.webp"
        alt="figo"
        className="left-subscribe-leaf"
      />

      <Container>
        <Row className="text-center">
          <motion.h5
            className="sub-heading"
            variants={santanceVariants}
            initial="initial"
            whileInView="animate"
          >
            <AnimatedLetters text={"Subscription"} />
          </motion.h5>
          <motion.h3
            className="heading"
            variants={santanceVariants}
            initial="initial"
            whileInView="animate"
          >
            <AnimatedLetters text={"Wants to get update ?"} />
          </motion.h3>
        </Row>
        <Row className="justify-content-center">
          <Col lg={6}>
            <motion.div
              variants={generalVariants}
              initial="initial"
              whileInView="whileInView"
              custom={0.5}
              class="input-group input-group-lg mt-5"
            >
              <input
                type="email"
                className="form-control subscribe-input"
                placeholder="Enter Your Email Address"
                aria-label="Enter Your Email Address"
                aria-describedby="inputGroup-sizing-default"
              />
              <span
                class="input-group-text me-2"
                id="inputGroup-sizing-default"
              >
                <FontAwesomeIcon
                  className="arrow-icon"
                  icon={faArrowRightLong}
                  color="#ffffff"
                />
              </span>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default SubscribeSection;
