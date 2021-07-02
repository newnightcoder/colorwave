import React from "react";
import ProductCard from "./ProductCard";

const Gaming = () => {
  return (
    <section className="h-full w-full prose max-w-none  p-4 md:p-5 lg:p-6 border-4 border-blue-500">
      <h2>Gaming</h2>
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
