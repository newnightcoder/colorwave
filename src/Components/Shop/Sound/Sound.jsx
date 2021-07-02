import React from "react";
import ProductCard from "../Product";
import "../../_variables.css";

const Sound = () => {
  return (
    <section className="h-full w-full bg-sound p-4 md:p-5 lg:p-6">
      <h2 className="font-bold text-xl mb-4 ml-8 text-left">Sound</h2>
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

export default Sound;
