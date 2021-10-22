import { quanLyRapSevice } from "../../services/quanLyRap.service";
import { QUANLYRAP_ACTION } from "../types/quanLyRap.type";

export const getDanhSachHeThongRapAction = () => {
  return async (dispatch) => {
    try {
      const result = await quanLyRapSevice.layDanhSachHeThongRap();
      dispatch({
        type: QUANLYRAP_ACTION.GET_HETHONGRAPCHIEU,
        payload: {
          heThongRap: result.data,
        },
      });
    } catch (error) {
      console.log("errors", error);
    }
  };
};
