import React from "react";

const ProductCard = () => {
  return (
    <div className="border-4 border-green-500 h-full w-full">
      <div className="mt-0">
        <img
          className="border-2 border-red-500 mt-0"
          src="https://source.unsplash.com/random"
          alt=""
        />
      </div>
      <h3>image test</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, odit!
      </p>
    </div>
  );
};

export default ProductCard;
