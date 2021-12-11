import React from "react";
import { useSelector } from "react-redux";
import "../../../Styles/_variables.css";
import ProductCard from "../../Product/Product";
import Loader from "./LoaderSound";

const Sound = () => {
  const items = useSelector((state) => state?.shop);

  return (
    <section className="h-full w-full bg-sound p-4 md:p-5 lg:p-6">
      <h2 className="font-bold text-xl text-left mb-4 ml-8 ">Sound</h2>
      <div className="h-full w-full grid place-items-center gap-4 grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 ">
        {items?.length !== 0 ? items.map((item, i) => item?.categories[0]?.name === "sound" && <ProductCard key={i + 1} item={item} variants={item.variant_groups} />) : <Loader />}
      </div>
    </section>
  );
};

export default Sound;
