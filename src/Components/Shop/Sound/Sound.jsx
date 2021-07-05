import React, { useEffect, useState } from "react";
import ProductCard from "./Product";
import "../../_variables.css";
import Loader from "./LoaderSound";

const Sound = ({ store }) => {
  const [soundStore, setSoundStore] = useState([]);

  useEffect(() => {
    let storeCategory = [];
    store.map(
      (item) => item.categories[0].name === "sound" && storeCategory.push(item)
    );
    setSoundStore(storeCategory);
  }, [store]);

  return (
    <section className="h-full w-full bg-sound p-4 md:p-5 lg:p-6">
      <h2 className="font-bold text-xl mb-4 ml-8 text-left">Sound</h2>
      <div className="h-full w-full grid place-items-center gap-4 grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 ">
        {soundStore.length !== 0 ? (
          soundStore.map((item, i) => <ProductCard key={i} item={item} />)
        ) : (
          <Loader />
        )}
      </div>
    </section>
  );
};

export default Sound;
