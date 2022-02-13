import React from "react";

import "./Btn.scss";

const CustomBtn = ({ text }) => {
  return (
    <a href="/#" className="custom-btn">
      {text}
    </a>
  );
};

export default CustomBtn;
