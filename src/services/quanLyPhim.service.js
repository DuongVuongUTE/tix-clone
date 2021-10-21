import { GROUP_ID } from "../utils/settings/config";
import { baseService } from "./base.service";

class QuanLyPhimSevice extends baseService {
  layDanhSachBanner = () => {
    return this.get(`/api/QuanLyPhim/LayDanhSachBanner`);
  };

  layDanhSachPhim = () => {
    return this.get(`/api/QuanLyPhim/LayDanhSachPhim?maNhom=${GROUP_ID}`);
  };
}

export const quanLyPhimSevice = new QuanLyPhimSevice();
