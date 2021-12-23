import React from "react";
import { useSelector } from "react-redux";
import { Product } from "../Components";
import "../Styles/_variables.css";

const ShopPage = () => {
  const shop = useSelector((state) => state?.shop);
  return (
    <div className="h-full w-full space-y-4 font-cabin mt-10 ">
      <h1 className="text-white text-center uppercase">Our Products</h1>
      <div className="h-full w-full grid place-items-center gap-4 md:gap-10 grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 px-6">
        {shop
          .sort((a, b) =>
            a.categories[0]?.name < b.categories[0]?.name ? -1 : a.categories[0]?.name > b.categories[0]?.name ? 1 : 0
          )
          .map((item, i) => (
            <Product item={item} key={i + 1} />
          ))}
      </div>{" "}
    </div>
  );
};

export default ShopPage;
