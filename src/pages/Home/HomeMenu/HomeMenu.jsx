import React, { Fragment } from "react";
import { Tabs } from "antd";
import { NavLink } from "react-router-dom";
import moment from "moment";
import "./style.css";
const { TabPane } = Tabs;
function HomeMenu({ heThongRapChieu }) {
  const renderHeThongRapChieu = () => {
    return heThongRapChieu.map((heThongRap) => (
      <TabPane
        tab={
          <img
            src={heThongRap.logo}
            className="rounded-full w-10 h-10"
            alt=""
          />
        }
        key={heThongRap.maHeThongRap}
      >
        <Tabs tabPosition="left" className="tabs-custom-child">
          {heThongRap.lstCumRap?.map((cumRap) => (
            <TabPane
              tab={
                <div className="w-60 flex gap-3">
                  <img
                    src="https://s3img.vcdn.vn/123phim/2016/03/starlight-da-nang-14584559361877.jpg"
                    alt=""
                    className="w-14 h-14 object-cover"
                  />
                  <div className="text-left">
                    <p className="whitespace-normal text-sm">
                      {cumRap.tenCumRap}
                    </p>
                    <span className="text-xs text-red-500">Chi tiết</span>
                  </div>
                </div>
              }
              key={cumRap.maCumRap}
            >
              {cumRap.danhSachPhim?.map((phim) => (
                <div className="p-4 border-b-2" key={phim.maPhim}>
                  <div className="flex">
                    <img
                      className="flex-shrink-0 object-cover w-14 h-14"
                      src={phim.hinhAnh}
                      alt={phim.tenPhim}
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = "https://picsum.photos/200";
                      }}
                    />
                    <div className="flex-1 px-5">
                      <h3 className="font-semibold text-base">
                        {phim.tenPhim}
                      </h3>
                      <p className="text-sm">{cumRap.diaChi}</p>
                      <div className="mt-3 grid grid-cols-5 gap-5">
                        {phim.lstLichChieuTheoPhim.length > 4 ? (
                          <>
                            {phim.lstLichChieuTheoPhim
                              ?.slice(0, 4)
                              ?.map((lichChieu) => (
                                <NavLink
                                  className="py-2 text-center bg-gray-300 bg-opacity-50 text-green-800 font-semibold rounded hover:text-red-600"
                                  to="/123"
                                >
                                  {moment(lichChieu.ngayChieuGioChieu).format(
                                    "hh:mm A"
                                  )}
                                </NavLink>
                              ))}
                            <NavLink
                              className="py-2 text-center bg-gray-300 bg-opacity-50 text-green-800 font-semibold rounded hover:text-red-600"
                              to="/123"
                            >
                              +{phim.lstLichChieuTheoPhim.length - 4}
                            </NavLink>
                          </>
                        ) : (
                          phim.lstLichChieuTheoPhim
                            ?.slice(0, 4)
                            ?.map((lichChieu) => (
                              <NavLink
                                className="py-2 text-center bg-gray-300 bg-opacity-50 text-green-800 font-semibold rounded hover:text-red-600"
                                to="/123"
                              >
                                {moment(lichChieu.ngayChieuGioChieu).format(
                                  "hh:mm A"
                                )}
                              </NavLink>
                            ))
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </TabPane>
          ))}
        </Tabs>
      </TabPane>
    ));
  };
  return (
    <div className="pb-20 tabs-custom">
      <Tabs tabPosition="left">{renderHeThongRapChieu()}</Tabs>
    </div>
  );
}

export default HomeMenu;
