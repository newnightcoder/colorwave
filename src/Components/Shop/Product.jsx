import React from "react";
import "../_variables.css";

const ProductCard = () => {
  return (
    <div className="h-full w-full font-cabin">
      <div className="">
        <img className="" src="https://source.unsplash.com/random" alt="" />
      </div>
      <a href="">
        <span className="text-gray-300">image test</span>
      </a>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, odit!
      </p>
    </div>
  );
};

export default ProductCard;
