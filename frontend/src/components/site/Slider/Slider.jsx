import React, { Fragment } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Slider.css";
import bg1 from "../../../assets/bg_1.jpg";
import bg2 from "../../../assets/bg_2.jpg";
import bg3 from "../../../assets/bg_3.jpg";


function SimpleSlider() {
  var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Fragment>
      <Slider {...settings}>
          <div>
            <img className="img-fluid" src={bg1} alt="" />
          </div>
          <div>
            <img className="img-fluid" src={bg2} alt="" />
          </div>
          <div>
            <img className="img-fluid" src={bg3} alt="" />
          </div>
      </Slider>
    </Fragment>
  );
}

export default SimpleSlider;
