import React from "react";
import { Link } from "react-router-dom";
import "./categoryLink.css";

const CategoryLink = ({ title, img }) => {
  return (
    <div className="h-72 flex flex-col justify-center border transition duration-300 cursor-pointer test" style={{ background: `url("${img}") no-repeat center/cover` }}>
      <div className="w-36 flex flex-col justify-center text-black pl-4">
        <span className="w-full text-center uppercase">{title}</span>
        <Link to={`/categories/${title}`} className="w-full border rounded">
          See products
        </Link>
      </div>
    </div>
  );
};

export default CategoryLink;
