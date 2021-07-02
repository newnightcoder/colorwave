import React from "react";
import ProductCard from "./ProductCard";
import "./gaming.css";

const Gaming = () => {
  return (
    <section className="bg-gaming h-full w-full text-gray-300 p-4 md:p-5 lg:p-6">
      <h2 className="mb-4 text-white text-center">Gaming</h2>
      <div className="h-full w-full grid place-items-center gap-4 grid-cols-2 md:grid-cols-3 xl:grid-cols-4 ">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </section>
  );
};

export default Gaming;
