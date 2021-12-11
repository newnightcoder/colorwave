import React from "react";
import { Gaming, Sound } from "../Components";
import "../Styles/_variables.css";

const ShopPage = ({ store }) => {
  return (
    <div className="h-full w-full space-y-4 font-cabin mt-10 ">
      <h1 className="text-white text-center uppercase">Our Products</h1>
      <Gaming store={store} />
      <Sound store={store} />
    </div>
  );
};

export default ShopPage;
