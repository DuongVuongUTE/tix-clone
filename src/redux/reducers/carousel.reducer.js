import { CAROUSEL_ACTION } from "../types/carousel.type";

const initialState = {
  carouselList: [
    {
      maBanner: 1,
      maPhim: 1282,
      hinhAnh:
        "https://s3img.vcdn.vn/123phim/2021/04/ban-tay-diet-quy-evil-expeller-16177781815781.png",
    },
    {
      maBanner: 2,
      maPhim: 1283,
      hinhAnh:
        "https://s3img.vcdn.vn/123phim/2021/04/trang-ti-16194117174325.jpg",
    },
    {
      maBanner: 3,
      maPhim: 1284,
      hinhAnh:
        "https://s3img.vcdn.vn/123phim/2021/04/lat-mat-48h-16177782153424.png",
    },
  ],
};

const carouselReducer = (state = initialState, action) => {
  switch (action.type) {
    case CAROUSEL_ACTION.GET_CAROUSEL:
      return { ...state, carouselList: action.carouselList };

    default:
      return state;
  }
};

export default carouselReducer;
