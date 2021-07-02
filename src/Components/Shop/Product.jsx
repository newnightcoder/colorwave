import React from "react";
import { NavLink } from "react-router-dom";
import "../_variables.css";

const ProductCard = ({ storeItem }) => {
  console.log("cards", storeItem);
  return (
    <NavLink to="/product">
      <div className="h-full w-full font-cabin">
        <div className="">
          <img
            className="object-cover h-30 md:h-60 w-full"
            src={storeItem && storeItem.assets[0].url}
            alt=""
          />
        </div>
        <p className="text-center">{storeItem && storeItem.name}</p>
      </div>
    </NavLink>
  );
};

export default ProductCard;
