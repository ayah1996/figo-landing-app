import React from "react";
import Slider from "react-slick";
import MenuItem from "./MenuItem";

import MenuImg01 from "../../Assets/Images/menu01.png";
import MenuImg02 from "../../Assets/Images/menu02.png";
import MenuImg03 from "../../Assets/Images/menu03.png";

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
        img={MenuImg01}
        title={"Chicken Massala"}
        oldPrice={250}
        newPrice={100}
      />
      <MenuItem
        img={MenuImg02}
        title={"Western Sunrise"}
        oldPrice={200}
        newPrice={100}
      />
      <MenuItem
        img={MenuImg03}
        title={"Sandwich Soup"}
        oldPrice={220}
        newPrice={180}
      />
      <MenuItem
        img={MenuImg01}
        title={"Chicken "}
        oldPrice={250}
        newPrice={100}
      />
      <MenuItem img={MenuImg03} title={" Soup"} oldPrice={220} newPrice={180} />
    </Slider>
  );
};

export default BreakfastSlideTapPane;
