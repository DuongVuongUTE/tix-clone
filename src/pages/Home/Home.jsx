import React, { useEffect } from "react";
import HomeMenu from "./HomeMenu/HomeMenu";
import { useDispatch, useSelector } from "react-redux";
import SliderFilm from "../../components/SliderFilm/SliderFilm";
import { getListPhimAction } from "../../redux/actions/quanLyPhim.action";

function Home() {
  const { phimList } = useSelector((state) => state.quanLyPhimReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getListPhimAction());
  }, [dispatch]);

  return (
    <div className="max-w-5xl mx-auto">
      <div className="px-5 py-20 mx-auto">
        <SliderFilm phimList={phimList} />
      </div>
      <HomeMenu />
    </div>
  );
}

export default Home;
