import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Testimonial from "./Testimonial";
import TestimonialImg01 from "../../Assets/Images/test01.webp";
import TestimonialImg02 from "../../Assets/Images/test02.webp";
import TestimonialImg03 from "../../Assets/Images/test03.webp";
import TestimonialImg04 from "../../Assets/Images/test04.webp";
import TestimonialImg05 from "../../Assets/Images/test05.webp";
import { ReactComponent as Leaf } from "../../Assets/Images/single-leaf.svg";

import "./Testimonials.scss";

const TestimonialsSection = () => {
  return (
    <section className="testimonials-section mb-section">
      {/* <Leaf className="testimonials-leaf" /> */}

      <Container>
        <Row className="text-center">
          <h5 className="sub-heading">Testimonials</h5>
          <h3 className="heading">Food Lover's Say</h3>
        </Row>

        <Row>
          <Col lg={4} md={6} className="mt-lg-5 mb-5 mb-lg-0">
            <Testimonial
              text={`Design is an evolutionary process, and filler text is just one tool
          in your progress-pushing arsenal. Use it where it makes sense
          process.`}
              img={TestimonialImg01}
              name={"Lurch Schpellchek"}
              job={"UI & UX @ Microsoft"}
            />
          </Col>

          <Col lg={4} md={6} className=" mb-5 mb-lg-0">
            <Testimonial
              text={`Design is an evolutionary process, and filler text is just one tool
          in your progress-pushing arsenal. Use it where it makes sense
          process.`}
              img={TestimonialImg02}
              name={"Theodore Handle"}
              job={"Design Lead @ Shopify"}
            />
          </Col>

          <Col lg={4} md={6} className="mt-lg-5 mb-5 mb-lg-0">
            <Testimonial
              text={`Design is an evolutionary process, and filler text is just one tool
          in your progress-pushing arsenal. Use it where it makes sense
          process.`}
              img={TestimonialImg03}
              name={"Valentino Morose"}
              job={"Design Lead @ InVision"}
            />
          </Col>

          <Col lg={4} md={6} className="mt-lg-4 mb-5 mb-lg-0 offset-lg-2">
            <Testimonial
              text={`Design is an evolutionary process, and filler text is just one tool
          in your progress-pushing arsenal. Use it where it makes sense
          process.`}
              img={TestimonialImg04}
              name={"Ingredia Nutrisha"}
              job={"Linux Things @ Exposure Digital"}
            />
          </Col>
          <Col lg={4} md={6} className="mt-lg-5 ">
            <Testimonial
              text={`Design is an evolutionary process, and filler text is just one tool
          in your progress-pushing arsenal. Use it where it makes sense
          process.`}
              img={TestimonialImg05}
              name={"Hermann P. Schnitzel"}
              job={"Sr.Designer @ Stepsize"}
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default TestimonialsSection;
