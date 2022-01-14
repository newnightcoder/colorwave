import React from "react";
import { Link } from "react-router-dom";
import useWindowSize from "../../utils/useWindowSize";

const CategoryCard = ({ categoryTitle, img, bgColor, btnColor, btnText, mirror }) => {
  const { height, width } = useWindowSize();

  return (
    <div
      className="h-40 sm:h-60 md:h-80 relative flex items-center justify-center transition duration-300 cursor-pointer"
      style={{ background: `${bgColor}` }}
    >
      {mirror && width < 768 && (
        <img
          src={img}
          alt=""
          style={{ transform: "translateX(-25%)" }}
          className="object-contain h-full w-full relative top-0"
        />
      )}
      <div
        style={{
          left: mirror && width < 500 ? "55%" : mirror && width < 768 ? "65%" : !mirror && width < 500 ? "7.5%" : "15%",
        }}
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
      {(!mirror || width > 768) && (
        <img
          src={img}
          alt=""
          style={{ transform: width > 768 ? "translateX(15%)" : "translateX(22%)" }}
          className="object-contain h-full w-full relative top-0"
        />
      )}
    </div>
  );
};

export default CategoryCard;
