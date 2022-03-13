import React, { useEffect } from "react";
import { Carousel } from "antd";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { getCarouselAction } from "../../../../redux/actions/CarouselActions";
import "./HomeCarousel.css";
const contentStyle = {
  height: "1000px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  backgroundPosition: "center top",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backgroundAttachment: "fixed",
  marginBottom: "0 ",
};
export default function HomeCarousel() {
  const { danhSachPhim } = useSelector((state) => state.CarouselReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCarouselAction());
  }, []);
  const renderImg = () => {
    return danhSachPhim.map((item, index) => {
      return (
        <div key={index}>
          <div
            style={{ ...contentStyle, backgroundImage: `url(${item.hinhAnh})` }}
          ></div>
        </div>
      );
    });
  };
  return (
    <Carousel autoplay effect="fade" style={{ position: "relative" }}>
      {renderImg()}
    </Carousel>
  );
}
