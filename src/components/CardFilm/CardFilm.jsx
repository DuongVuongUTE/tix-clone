import React from "react";

function CardFilm({ film }) {
  return (
    <div className="p-2">
      <div className="drop-shadow-sm">
        <img
          className="h-72 rounded w-full object-cover"
          src={film.hinhAnh}
          alt="content"
        />
        <div className="py-3">
          <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">
            Đánh giá {film.danhGia} sao
          </h3>
          <h2 className="text-lg text-gray-900 font-medium truncate">
            {film.tenPhim}
          </h2>
        </div>
      </div>
    </div>
  );
}

export default CardFilm;
