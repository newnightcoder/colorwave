import React from "react";
import { NavLink } from "react-router-dom";
import "../../_variables.css";

const ProductCard = ({ soundItem }) => {
  console.log("cards", soundItem);
  return (
    <NavLink to="/product">
      <div className="h-full w-full font-cabin">
        <div className="">
          <img
            className="object-cover h-30 md:h-60 w-full"
            src={soundItem && soundItem.assets[0].url}
            alt=""
          />
        </div>
        <p className="text-center">{soundItem && soundItem.name}</p>
      </div>
    </NavLink>
  );
};

export default ProductCard;
