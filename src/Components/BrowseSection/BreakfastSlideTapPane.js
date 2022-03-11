import React from "react";
import Slider from "react-slick";
import MenuItem from "./MenuItem";

import "./Browse.scss";

const BreakfastSlideTapPane = () => {
  const settings = {
    arrows: true,
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,

    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings} className="menu-slider">
      <MenuItem
        img={"Assets/menu01.webp"}
        title={"Chicken Massala"}
        oldPrice={250}
        newPrice={100}
      />
      <MenuItem
        img={"Assets/menu02.webp"}
        title={"Western Sunrise"}
        oldPrice={200}
        newPrice={100}
      />
      <MenuItem
        img={"Assets/menu03.webp"}
        title={"Sandwich Soup"}
        oldPrice={220}
        newPrice={180}
      />
      <MenuItem
        img={"Assets/menu01.webp"}
        title={"Chicken "}
        oldPrice={250}
        newPrice={100}
      />
      <MenuItem
        img={"Assets/menu03.webp"}
        title={" Soup"}
        oldPrice={220}
        newPrice={180}
      />
    </Slider>
  );
};

export default BreakfastSlideTapPane;
