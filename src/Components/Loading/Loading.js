import React from "react";

import "./Loading.scss";

const Loading = () => {
  return (
    <div className="loading-container mx-auto d-flex justify-content-center align-items-center">
      <img
        src="/Assets/loading-leaf.webp"
        alt="loading"
        className="loading-leaf"
      />
      <img
        src="/Assets/loading-leaf.webp"
        alt="loading"
        className="loading-leaf"
      />
      <img
        src="/Assets/loading-leaf.webp"
        alt="loading"
        className="loading-leaf"
      />
    </div>
  );
};

export default Loading;
