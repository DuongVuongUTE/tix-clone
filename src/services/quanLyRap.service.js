import { GROUP_ID } from "../utils/settings/config";
import { baseService } from "./base.service";

class QuanLyRapSevice extends baseService {
  constructor() {
    super();
  }

  layDanhSachHeThongRap = () => {
    return this.get(
      `/api/QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=${GROUP_ID}`
    );
  };
}

export const quanLyRapSevice = new QuanLyRapSevice();
