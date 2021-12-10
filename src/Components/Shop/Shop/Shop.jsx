import React from "react";
import "../../../Styles/_variables.css";
import Gaming from "../Gaming/Gaming";
import Sound from "../Sound/Sound";
import "./shop.css";

const Shop = ({ store }) => {
  return (
    <div className="h-full w-full space-y-4 font-cabin mt-10 ">
      <h1 className="text-white text-center uppercase">Our Products</h1>
      <Gaming store={store} />
      <Sound store={store} />
    </div>
  );
};

export default Shop;
