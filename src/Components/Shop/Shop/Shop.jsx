import React from "react";
import Gaming from "../Gaming/Gaming";
import Sound from "../Sound/Sound";
import "./shop.css";
import "../../_variables.css";

const Shop = ({ store }) => {
  return (
    <div className="h-full w-full space-y-4 font-cabin mt-32 ">
      <h1 className="text-white text-center">Our Products</h1>
      <Gaming store={store} />
      <Sound store={store} />
    </div>
  );
};

export default Shop;
