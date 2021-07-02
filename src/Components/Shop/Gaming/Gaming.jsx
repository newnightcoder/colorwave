import React, { useEffect, useState } from "react";
import ProductCard from "./Product";
import "./gaming.css";
import "../../_variables.css";

const Gaming = ({ store }) => {
  const [gamingStore, setGamingStore] = useState([]);

  const getGamingStore = () => {
    let storeCategory = [];
    store.map((item) => {
      item.categories[0].name === "gaming" && storeCategory.push(item);
      setGamingStore(storeCategory);
    });
  };

  useEffect(() => {
    getGamingStore();
  }, []);

  return (
    <section className="bg-gaming h-full w-full text-gray-300 px-4 md:p-5 lg:p-6  ">
      <h2 className="mb-4 ml-8 text-white text-left">Gaming</h2>
      <div className="h-full w-full grid place-items-center gap-4 grid-cols-2 md:grid-cols-3 2xl:grid-cols-4 ">
        {gamingStore.map((gamingItem, i) => (
          <ProductCard key={i} gamingItem={gamingItem} />
        ))}
      </div>
    </section>
  );
};

export default Gaming;
