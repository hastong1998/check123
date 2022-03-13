import React, { Fragment, useEffect, useState } from "react";
import { Tabs, Radio, Space } from "antd";
import { useDispatch } from "react-redux";
import { layDanhSachHeThongRapAction } from "../../../redux/actions/QuanLyRapAction";
import { NavLink } from "react-router-dom";
import moment from "moment";
import { history } from "../../../App";

export default function HomeMenu(props) {
  const { TabPane } = Tabs;
  const dispatch = useDispatch();
  const tabPosition = "left";
  const { heThongRapChieu } = props;
  const renderHeThongRap = () => {
    return heThongRapChieu.map((rap, index) => {
      return (
        <TabPane
          key={index}
          tab={<img src={rap.logo} className="rounded-full w-10" />}
        >
          <Tabs key={index} tabPosition={"left"}>
            {rap.lstCumRap?.map((cumRap, index) => {
              return (
                <TabPane
                  key={index}
                  tab={
                    <div style={{ width: "360px", display: "flex" }}>
                      <div
                        style={{
                          backgroundImage: `url(${rap.logo})`,
                          width: "50px",
                          backgroundSize: "100%",
                          backgroundRepeat: "no-repeat",
                          borderRadius: "100%",
                          backgroundPosition: "center",
                        }}
                      ></div>
                      {/* <img src={rap.logo} className="rounded-full w-1/6" /> */}

                      <div className="text-left ml-2 text-white font-bold">
                        {cumRap.tenCumRap}
                        <p className="text-red-200 font-semibold">Chi Tiết</p>
                      </div>
                    </div>
                  }
                >
                  {cumRap.danhSachPhim.slice(0, 4).map((phim, index) => {
                    return (
                      <Fragment key={index}>
                        <div className="my-5" style={{ display: "flex" }}>
                          <div style={{ display: "flex" }}>
                            <div>
                              <img
                                style={{ cursor: "pointer" }}
                                onClick={() => {
                                  history.push(`/detail/${phim.maPhim}`);
                                }}
                                onError={(e) => {
                                  e.target.onerror = null;
                                  e.target.src =
                                    "https://picsum.photos/150/150";
                                }}
                                width={150}
                                height={150}
                                src={phim.hinhAnh}
                                alt={phim.hinhAnh}
                              />
                            </div>
                            <div className="ml-2">
                              <h1
                                style={{ cursor: "pointer" }}
                                onClick={() => {
                                  history.push(`/detail/${phim.maPhim}`);
                                }}
                                className="text-2xl text-pink-400"
                              >
                                {phim.tenPhim}
                              </h1>
                              <p className="text-white text-xl">
                                Địa chỉ:{" "}
                                <span className="font-bold">
                                  {cumRap.diaChi}
                                </span>
                              </p>
                              <div className="grid grid-cols-5 gap-2">
                                <p className="text-red-500 font-bold">
                                  Lịch chiếu:{" "}
                                </p>
                                {phim.lstLichChieuTheoPhim
                                  ?.slice(0, 12)
                                  .map((lichChieu, index) => {
                                    return (
                                      <NavLink
                                        className="text-2xl text-yellow-300"
                                        to={`/checkout/${lichChieu.maLichChieu}`}
                                        key={index}
                                      >
                                        {moment(
                                          lichChieu.ngayChieuGioChieu
                                        ).format("hh:mm A")}
                                      </NavLink>
                                    );
                                  })}
                              </div>
                            </div>
                          </div>
                        </div>
                        <hr />
                      </Fragment>
                    );
                  })}
                </TabPane>
              );
            })}
          </Tabs>
          ;
        </TabPane>
      );
    });
  };
  return (
    <>
      <Tabs tabPosition={tabPosition}>{renderHeThongRap()}</Tabs>
    </>
  );
}
