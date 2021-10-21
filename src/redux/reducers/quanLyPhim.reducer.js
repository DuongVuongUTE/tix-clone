import { QUANLYPHIM_ACTION } from "../types/quanLyPhim.type";

const initialState = {
  phimList: [],
};

const quanLyPhimReducer = (state = initialState, action) => {
  switch (action.type) {
    case QUANLYPHIM_ACTION.GET_LIST_FILM:
      return { ...state, phimList: action.payload.data };

    default:
      return state;
  }
};

export default quanLyPhimReducer;
