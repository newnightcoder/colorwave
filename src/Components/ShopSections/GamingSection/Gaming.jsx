import React from "react";
import { useSelector } from "react-redux";
import "../../../Styles/_variables.css";
import ProductCard from "../../Product/Product";
import LoaderGaming from "./LoaderGaming";

const Gaming = () => {
  const items = useSelector((state) => state?.shop);
  console.log("items", items);

  return (
    <section className="bg-gaming h-full w-full text-gray-300 px-4 md:p-5 lg:p-6  ">
      <h2 className="font-bold text-xl text-left text-white mb-4 ml-8 ">Gaming</h2>
      <div className="h-full w-full grid place-items-center gap-4 grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 ">
        {items.length !== 0 ? items.map((item, i) => item?.categories[0]?.name === "gaming" && <ProductCard key={i + 1} item={item} />) : <LoaderGaming />}
      </div>
    </section>
  );
};

export default Gaming;
