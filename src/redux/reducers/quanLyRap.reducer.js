import { QUANLYRAP_ACTION } from "../types/quanLyRap.type";

const initialState = {
  heThongRapChieu: [],
};

const quanLyRapReducer = (state = initialState, action) => {
  switch (action.type) {
    case QUANLYRAP_ACTION.GET_HETHONGRAPCHIEU: {
      const { heThongRap } = action.payload;
      return { ...state, heThongRapChieu: heThongRap };
    }

    default:
      return state;
  }
};

export default quanLyRapReducer;
