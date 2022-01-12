import React from "react";
import { Link } from "react-router-dom";

const CategoryCard = ({ categoryTitle, img, bgColor, btnColor, btnText, mirror }) => {
  return (
    <div
      className="h-40 sm:h-60 md:h-80 relative flex items-center justify-center transition duration-300 cursor-pointer"
      style={{ background: `${bgColor}` }}
    >
      {mirror && window.innerWidth < 768 && (
        <img
          src={img}
          alt=""
          className="object-contain h-full w-full relative top-0 transform -translate-x-24 sm:-translate-x-36"
        />
      )}
      <div
        style={{ left: mirror && window.innerWidth < 768 ? "60%" : "10%" }}
        className="absolute top-50 flex flex-col justify-center text-black z-10"
      >
        <span className="w-full text-lg text-center uppercase">{categoryTitle}</span>
        <Link
          to={`/categories/${categoryTitle}`}
          className="w-32 rounded-sm text-center shadow-md hover:shadow-sm"
          style={{
            background: `${btnColor}`,
            border: `1px solid ${btnColor}`,
            color: `${btnText}`,
            fontWeight: btnText === "black" && "bold",
          }}
        >
          See products
        </Link>
      </div>
      {(!mirror || window.innerWidth > 768) && (
        <img
          src={img}
          alt=""
          className="object-contain h-full w-full relative top-0 transform translate-x-24 md:translate-x-36"
        />
      )}
    </div>
  );
};

export default CategoryCard;
