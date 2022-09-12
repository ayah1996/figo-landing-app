import React from "react";
import { motion } from "framer-motion";

import { Container, Row, Col } from "react-bootstrap";
import Testimonial from "./Testimonial";
import {
  santanceVariants,
  blurImgVariants,
} from "../../utils/framerMotionAnimation";
import AnimatedLetters from "../AnimatedLetters/AnimatedLetters";
import "./Testimonials.scss";

const TestimonialsSection = () => {
  return (
    <section className="testimonials-section mb-section">
      <img
        src="Assets/single-leaf.webp"
        alt="figo"
        className="testimonials-leaf"
      />

      <Container>
        <Row className="text-center">
          <motion.h5
            className="sub-heading"
            variants={santanceVariants}
            initial="initial"
            whileInView="animate"
          >
            <AnimatedLetters text={"Testimonials"} />
          </motion.h5>
          <motion.h3
            className="heading"
            variants={santanceVariants}
            initial="initial"
            whileInView="animate"
          >
            <AnimatedLetters text={"Food Lover's Say"} />
          </motion.h3>
        </Row>

        <Row>
          <Col lg={4} md={6} className="mt-lg-5 mb-5 mb-lg-0">
            <motion.div
              variants={blurImgVariants}
              initial="initial"
              whileInView="animate"
              custom={1}
            >
              <Testimonial
                text={`Design is an evolutionary process, and filler text is just one tool
          in your progress-pushing arsenal. Use it where it makes sense
          process.`}
                img={"Assets/test01.webp"}
                name={"Lurch Schpellchek"}
                job={"UI & UX @ Microsoft"}
              />
            </motion.div>
          </Col>

          <Col lg={4} md={6} className=" mb-5 mb-lg-0">
            <motion.div
              variants={blurImgVariants}
              initial="initial"
              whileInView="animate"
              custom={1.3}
            >
              <Testimonial
                text={`Design is an evolutionary process, and filler text is just one tool
          in your progress-pushing arsenal. Use it where it makes sense
          process.`}
                img={"Assets/test02.webp"}
                name={"Theodore Handle"}
                job={"Design Lead @ Shopify"}
              />
            </motion.div>
          </Col>

          <Col lg={4} md={6} className="mt-lg-5 mb-5 mb-lg-0">
            <motion.div
              variants={blurImgVariants}
              initial="initial"
              whileInView="animate"
              custom={1.5}
            >
              <Testimonial
                text={`Design is an evolutionary process, and filler text is just one tool
          in your progress-pushing arsenal. Use it where it makes sense
          process.`}
                img={"Assets/test03.webp"}
                name={"Valentino Morose"}
                job={"Design Lead @ InVision"}
              />
            </motion.div>
          </Col>

          <Col lg={4} md={6} className="mt-lg-4 mb-5 mb-lg-0 offset-lg-2">
            <motion.div
              variants={blurImgVariants}
              initial="initial"
              whileInView="animate"
              custom={1.7}
            >
              <Testimonial
                text={`Design is an evolutionary process, and filler text is just one tool
          in your progress-pushing arsenal. Use it where it makes sense
          process.`}
                img={"Assets/test04.webp"}
                name={"Ingredia Nutrisha"}
                job={"Linux Things @ Exposure Digital"}
              />
            </motion.div>
          </Col>
          <Col lg={4} md={6} className="mt-lg-5 ">
            <motion.div
              variants={blurImgVariants}
              initial="initial"
              whileInView="animate"
              custom={1.9}
            >
              <Testimonial
                text={`Design is an evolutionary process, and filler text is just one tool
          in your progress-pushing arsenal. Use it where it makes sense
          process.`}
                img={"Assets/test05.webp"}
                name={"Hermann P. Schnitzel"}
                job={"Sr.Designer @ Stepsize"}
              />
            </motion.div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default TestimonialsSection;
