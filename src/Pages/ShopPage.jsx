import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Footer, Product } from "../Components";
import "../Styles/_variables.css";

const ShopPage = () => {
  const shop = useSelector((state) => state?.shop);
  console.log(shop);

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
      <header className="h-full flex flex-col items-center justify-center text-black py-3">
        <h1 className="text-center text-2xl font-bold uppercase">Our Products</h1>
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
      <main className="h-full w-screen px-2 flex flex-col items-center justify-center">
        <section className="h-full w-screen bg-gaming text-gray-300 py-6">
          <div className="h-full w-full relative mb-2">
            <h2 className="relative capitalize text-center text-xl">ColorWave {categories.limited}</h2>
            <span className="h-0.5 w-1/3 absolute inset-x-0 mx-auto left-0 bottom-0.5  bg-yellow-300"></span>
          </div>
          <div className="h-full w-full bg-gaming grid place-items-center gap-4 md:gap-10 grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 p-6">
            {limitedItems.map((item, i) => (
              <Product key={i + 1} item={item} bgColor={"rgba(0,0,0,1)"} />
            ))}
          </div>
        </section>
        <section className="h-full w-screen bg-sound py-6">
          <div className="h-full w-full relative mb-2">
            <h2 className="relative capitalize text-center text-xl z-10">{categories.gaming}</h2>
            <span className="h-0.5 w-1/3 absolute inset-x-0 mx-auto left-0 bottom-0.5 bg-blue-400"></span>
          </div>
          <div className="h-full w-full grid place-items-center gap-4 md:gap-10 grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 p-6">
            {gamingItems.map((item, i) => (
              <Product key={i + 1} item={item} bgColor={"rgba(250,250,250,1)"} />
            ))}
          </div>
        </section>
        <section className="h-full w-screen bg-gaming text-gray-300 py-6">
          <div className="h-full w-full relative">
            <h2 className="relative capitalize text-center text-xl z-10">{categories.headphones}</h2>
            <span className="h-0.5 w-1/3 absolute inset-x-0 mx-auto left-0 bottom-0.5  bg-gray-100"></span>
          </div>{" "}
          <div className="h-full w-full grid place-items-center gap-4 md:gap-10 grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 p-6">
            {headphonesItems.map((item, i) => (
              <Product key={i + 1} item={item} bgColor={"rgba(250,250,250,1)"} />
            ))}
          </div>
        </section>
        <section className="h-full w-screen bg-gaming text-gray-300 py-6">
          <div className="h-full w-full relative">
            <h2 className="relative capitalize text-center text-xl z-10">{categories.mics}</h2>
            <span className="h-0.5 w-1/3 absolute inset-x-0 mx-auto left-0 bottom-0.5  bg-gray-100"></span>
          </div>{" "}
          <div className="h-full w-full grid place-items-center gap-4 md:gap-10 grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 p-6">
            {micsItems.map((item, i) => (
              <Product key={i + 1} item={item} bgColor={"rgba(250,250,250,1)"} />
            ))}
          </div>
        </section>
        <section className="h-full w-screen bg-sound py-6">
          <div className="h-full w-full relative">
            <h2 className="relative capitalize text-center text-xl z-10">{categories.skins}</h2>
            <span className="h-0.5 w-1/3 absolute inset-x-0 mx-auto left-0 bottom-0.5  bg-blue-400"></span>
          </div>{" "}
          <div className="h-full w-full grid place-items-center gap-4 md:gap-10 grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 p-6">
            {skinsItems.map((item, i) => (
              <Product key={i + 1} item={item} bgColor={"rgba(250,250,250,1)"} />
            ))}
          </div>
        </section>
        <section className="h-full w-screen bg-sound py-6">
          <div className="h-full w-full relative">
            <h2 className="relative capitalize text-center text-xl z-10">{categories.accessories}</h2>
            <span className="h-0.5 w-1/3 absolute inset-x-0 mx-auto left-0 bottom-0.5  bg-yellow-300"></span>
          </div>{" "}
          <div className="h-full w-full grid place-items-center gap-4 md:gap-10 grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 p-6">
            {accessoriesItems.map((item, i) => (
              <Product key={i + 1} item={item} bgColor={"rgba(250,250,250,1)"} />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ShopPage;
