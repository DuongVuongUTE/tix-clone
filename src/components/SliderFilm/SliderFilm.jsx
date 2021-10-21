import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import CardFilm from "../CardFilm/CardFilm";
import styleSlick from "./MultipleRowSlick.module.css";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} ${styleSlick["slick-prev"]}`}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    ></div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} ${styleSlick["slick-prev"]}`}
      style={{ ...style, display: "block", left: "-35px" }}
      onClick={onClick}
    ></div>
  );
}

function SliderFilm({ phimList }) {
  const settings = {
    className: "variable-width",
    infinite: true,
    centerPadding: "0",
    slidesToShow: 4,
    slidesToScroll: 4,
    speed: 1000,
    rows: 1,
    slidesPerRow: 2,
    variableWidth: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  const renderFilms = () => {
    return phimList?.slice(0, 12).map((item, index) => {
      return (
        <div className={`${styleSlick["width-item"]}`} key={index}>
          <CardFilm film={item} />
        </div>
      );
    });
  };
  return (
    <div>
      <Slider {...settings}>{renderFilms()}</Slider>
    </div>
  );
}

export default SliderFilm;
