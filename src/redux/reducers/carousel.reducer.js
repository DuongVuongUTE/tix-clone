import { CAROUSEL_ACTION } from "../types/carousel.type";

const initialState = {
  carouselList: [
    {
      maBanner: 1,
      maPhim: 1282,
      hinhAnh: "http://movieapi.cyberlearn.vn/hinhanh/ban-tay-diet-quy.png",
    },
    {
      maBanner: 2,
      maPhim: 1283,
      hinhAnh: "http://movieapi.cyberlearn.vn/hinhanh/lat-mat-48h.png",
    },
    {
      maBanner: 3,
      maPhim: 1284,
      hinhAnh: "http://movieapi.cyberlearn.vn/hinhanh/cuoc-chien-sinh-tu.png",
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
