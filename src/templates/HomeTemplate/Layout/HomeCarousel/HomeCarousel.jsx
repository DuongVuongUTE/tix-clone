import React, { useEffect } from "react";

import { Carousel } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { getCarouselAction } from "../../../../redux/actions/carousel.action.js";
import "./carousel.css";

const bannerStyle = {
  paddingBottom: "43%",
  backgroundPosition: "center",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
};

function HomeCarousel() {
  const { carouselList } = useSelector((state) => state.carouselReducer);

  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(getCarouselAction());
  // }, [dispatch]);
  const renderBanner = () => {
    return carouselList.map((slide) => (
      <div key={slide.maBanner}>
        <div style={{ background: `url(${slide.hinhAnh})`, ...bannerStyle }}>
          <img
            className="w-full h-0 object-cover hidden opacity-0"
            src={slide.hinhAnh}
            alt={slide.hinhAnh}
          />
        </div>
      </div>
    ));
  };
  return <Carousel autoplay>{renderBanner()}</Carousel>;
}

export default HomeCarousel;
