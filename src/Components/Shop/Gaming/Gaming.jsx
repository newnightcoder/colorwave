import React from "react";
import { useSelector } from "react-redux";
import "../../_variables.css";
import "./gaming.css";
import LoaderGaming from "./LoaderGaming";
import ProductCard from "./Product";

const Gaming = () => {
  const items = useSelector((state) => state.shop);

  return (
    <section className="bg-gaming min-h-screen w-full text-gray-300 px-4 md:p-5 lg:p-6  ">
      <h2 className="mb-4 ml-8 text-white text-left">Gaming</h2>
      <div className="h-full w-full grid place-items-center gap-4 grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 ">
        {items.length !== 0 ? (
          items.map(
            (item, i) =>
              item.categories[0].name === "gaming" && (
                <ProductCard key={i} item={item} />
              )
          )
        ) : (
          <LoaderGaming />
        )}
      </div>
    </section>
  );
};

export default Gaming;
