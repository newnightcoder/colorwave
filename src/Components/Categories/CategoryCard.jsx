import React from "react";
import { Link } from "react-router-dom";

const CategoryCard = ({ title, img, color }) => {
  return (
    <div className="h-72 flex flex-col justify-center border border-gray-300 transition duration-300 cursor-pointer" style={{ background: `url("${img}") no-repeat center/cover` }}>
      <div className="w-36 flex flex-col justify-center text-black pl-4">
        <span className="w-full text-center uppercase">{title}</span>
        <Link to={`/categories/${title}`} className="w-full rounded text-center shadow-md hover:shadow-sm " style={{ background: `${color}`, border: `1px solid ${color}` }}>
          See products
        </Link>
      </div>
    </div>
  );
};

export default CategoryCard;
