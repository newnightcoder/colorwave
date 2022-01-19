import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Footer, LoaderGaming, LoaderSound, ProductCard } from "../Components";
import "../Styles/page.css";
import "../Styles/_variables.css";

const ShopPage = () => {
  const shop = useSelector((state) => state?.shop.shop);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const categories = {
    limited: "limited",
    gaming: "gaming",
    headphones: "headphones",
    mics: "mics",
    skins: "skins",
    accessories: "accessories",
  };

  const limitedItems = shop.filter((item) => item?.categories?.find((cat) => cat.name === "limited"));
  const gamingItems = shop.filter((item) => item?.categories?.find((cat) => cat.name === "gaming"));
  const headphonesItems = shop.filter((item) => item?.categories?.find((cat) => cat.name === "headphones"));
  const micsItems = shop.filter((item) => item?.categories?.find((cat) => cat.name === "mics"));
  const accessoriesItems = shop.filter((item) => item?.categories?.find((cat) => cat.name === "accessories"));
  const skinsItems = shop.filter((item) => item?.categories?.find((cat) => cat.name === "skins"));

  return (
    <div className="h-full w-full font-cabin">
      <header className="h-full flex flex-col items-center justify-center gap-6 text-black pt-6 pb-4">
        <div className="w-max relative">
          <h1 className="text-center text-3xl font-bold uppercase">Products</h1>
          <span className="h-0.5 w-full absolute inset-x-0 mx-auto left-0 bottom-0.5  bg-black"></span>
        </div>
        <ul className="hidden md:flex items-center justify-center gap-2 whitespace-nowrap text-sm">
          <li>
            <Link className="capitalize hover:underline hover:font-bold" to="/categories/gaming">
              gaming
            </Link>
          </li>
          |
          <li>
            <Link className="capitalize hover:underline hover:font-bold" to="/categories/sound">
              headphones
            </Link>
          </li>
          |
          <li>
            <Link className="capitalize hover:underline hover:font-bold" to="/categories/sound">
              mics
            </Link>
          </li>
          |
          <li>
            <Link className="capitalize hover:underline hover:font-bold" to="/categories/skins">
              iPhone skins
            </Link>
          </li>
          |
          <li>
            <Link className="capitalize hover:underline hover:font-bold" to="/categories/accessories">
              accessories
            </Link>
          </li>
        </ul>
      </header>
      <main className="h-full w-screen flex flex-col items-center justify-center px-2">
        <section
          style={{ backgroundColor: "#171717" }}
          className="h-full w-screen text-gray-300 flex flex-col items-center justify-center py-6"
        >
          <div className="h-full w-max relative">
            <h2 className="relative capitalize text-center text-3xl px-8">ColorWave {categories.limited}</h2>
            <span className="h-0.5 w-full absolute inset-x-0 mx-auto left-0 bottom-0.5 bg-yellow-300"></span>
          </div>
          <div className="h-full w-full grid place-items-center gap-4 md:gap-10 grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 p-6">
            {limitedItems.length === 0 ? (
              <LoaderGaming />
            ) : (
              limitedItems.map((item, i) => (
                <ProductCard key={i + 1} item={item} variants={item.variant_groups} bgColor={"rgba(0,0,0,1)"} />
              ))
            )}
          </div>
        </section>
        <section className="h-full w-screen text-gray-300 flex flex-col items-center justify-center py-6 bg-sound">
          <div className="h-full w-max relative mb-2">
            <h2 className="relative capitalize text-center text-3xl px-8">{categories.gaming}</h2>
            <span className="h-0.5 w-full absolute inset-x-0 mx-auto left-0 bottom-0.5 bg-blue-400"></span>
          </div>
          <div className="h-full w-full grid place-items-center gap-4 md:gap-10 grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 p-6">
            {gamingItems.length === 0 ? (
              <LoaderGaming />
            ) : (
              gamingItems.map((item, i) => (
                <ProductCard key={i + 1} item={item} variants={item.variant_groups} bgColor={"rgba(250,250,250,1)"} />
              ))
            )}
          </div>
        </section>
        <section
          style={{ backgroundColor: "#171717" }}
          className="h-full w-screen text-gray-300 flex flex-col items-center justify-center py-6"
        >
          <div className="h-full w-max relative">
            <h2 className="relative capitalize text-center text-3xl px-8">{categories.headphones}</h2>
            <span className="h-0.5 w-full absolute inset-x-0 mx-auto left-0 bottom-0.5  bg-gray-100"></span>
          </div>{" "}
          <div className="h-full w-full grid place-items-center gap-4 md:gap-10 grid-cols-2 md:grid-cols-3 lg:md:grid-cols-4 2xl:grid-cols-5 p-6">
            {headphonesItems.length === 0 ? (
              <LoaderSound />
            ) : (
              headphonesItems.map((item, i) => (
                <ProductCard key={i + 1} item={item} variants={item.variant_groups} bgColor={"rgba(250,250,250,1)"} />
              ))
            )}
          </div>
        </section>
        <section
          style={{ backgroundColor: "#171717" }}
          className="h-full w-screen text-gray-300 flex flex-col items-center justify-center py-6"
        >
          <div className="h-full w-max relative">
            <h2 className="relative capitalize text-center text-3xl px-8">{categories.mics}</h2>
            <span className="h-0.5 w-full absolute inset-x-0 mx-auto left-0 bottom-0.5  bg-gray-100"></span>
          </div>{" "}
          <div className="h-full w-full grid place-items-center gap-4 md:gap-10 grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 p-6">
            {micsItems.length === 0 ? (
              <LoaderSound />
            ) : (
              micsItems.map((item, i) => (
                <ProductCard key={i + 1} item={item} variants={item.variant_groups} bgColor={"rgba(250,250,250,1)"} />
              ))
            )}
          </div>
        </section>
        <section className="h-full w-screen text-gray-300 flex flex-col items-center justify-center py-6 bg-sound">
          <div className="h-full w-max relative">
            <h2 className="relative capitalize text-center text-3xl px-8">{categories.skins}</h2>
            <span className="h-0.5 w-full absolute inset-x-0 mx-auto left-0 bottom-0.5  bg-blue-400"></span>
          </div>{" "}
          <div className="h-full w-full grid place-items-center gap-4 md:gap-10 grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 p-6">
            {skinsItems.map((item, i) => (
              <ProductCard key={i + 1} item={item} variants={item.variant_groups} bgColor={"rgba(250,250,250,1)"} />
            ))}
          </div>
        </section>
        <section className="h-full w-screen text-gray-300 flex flex-col items-center justify-center py-6 bg-sound">
          <div className="h-full w-max relative">
            <h2 className="relative capitalize text-center text-3xl px-8">{categories.accessories}</h2>
            <span className="h-0.5 w-full absolute inset-x-0 mx-auto left-0 bottom-0.5  bg-yellow-300"></span>
          </div>{" "}
          <div className="h-full w-full grid place-items-center gap-4 md:gap-10 grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 p-6">
            {accessoriesItems.map((item, i) => (
              <ProductCard key={i + 1} item={item} variants={item.variant_groups} bgColor={"rgba(250,250,250,1)"} />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ShopPage;
