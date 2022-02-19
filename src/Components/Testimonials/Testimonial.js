import React from "react";

import "./Testimonials.scss";

const Testimonial = ({ text, img, name, job }) => {
  return (
    <div className="testimonial-wrap">
      <div className="testimonial-text">
        <p>{text}</p>
      </div>
      <div className="testimonial-info d-flex mt-5 ms-3">
        <img src={img} alt="figo" className="img-fluid testimonial-img me-4" />
        <div className="d-flex flex-column align-self-center">
          <h4 className="person-name mb-3">{name}</h4>
          <h5 className="person-job">{job}</h5>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
