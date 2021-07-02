import React from "react";
import ProductCard from "../Product";
import "./gaming.css";
import "../../_variables.css";

const Gaming = ({ store }) => {
  console.log("gaing store", store);
  return (
    <section className="bg-gaming h-full w-full text-gray-300 px-4 md:p-5 lg:p-6  ">
      <h2 className="mb-4 ml-8 text-white text-left">Gaming</h2>
      <div className="h-full w-full grid place-items-center gap-4 grid-cols-2 md:grid-cols-3 xl:grid-cols-4 ">
        {store.map((storeItem, i) => (
          <ProductCard key={i} storeItem={storeItem} />
        ))}
      </div>
    </section>
  );
};

export default Gaming;
