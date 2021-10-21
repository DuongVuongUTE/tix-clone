import { quanLyPhimSevice } from "../../services/quanLyPhim.service";
import { QUANLYPHIM_ACTION } from "../types/quanLyPhim.type";

export const getListPhimAction = () => {
  return async (dispatch) => {
    try {
      const result = await quanLyPhimSevice.layDanhSachPhim();
      dispatch({
        type: QUANLYPHIM_ACTION.GET_LIST_FILM,
        payload: {
          data: result.data.content,
        },
      });
    } catch (error) {
      console.log("errors", error);
    }
  };
};
