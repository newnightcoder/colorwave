import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import "../_variables.css";

const ProductPage = () => {
  const location = useLocation();
  const { item } = location.state;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const imgBgColor =
    item.categories[0].name === "gaming"
      ? { backgroundColor: "black" }
      : { backgroundColor: "white" };

  return (
    <div className="bg-black font-cabin">
      <div
        className="min-h-screen w-full flex flex-col md:flex-row items-center justify-center bg-black text-gray-300"
        style={imgBgColor}
      >
        <div className="w-full md:w-1/2 h-full flex items-center justify-center">
          {/* style={imgBgColor} */}
          <img
            className="object-cover"
            src={item.media.source}
            width="450"
            height="300"
            alt=""
          />
        </div>

        <div className="h-full w-full md:w-1/2 flex flex-col  justify-center border-l border-gray-600 border-opacity-60 text-left px-8 pt-8 space-y-8">
          <h2 className="text-2xl text-bold">{item.name}</h2>
          <span className="text-bold text-xl ">
            {item.price.formatted_with_code}{" "}
          </span>
          <button className="bg-sound text-black whitespace-nowrap w-36 uppercase py-1">
            add to cart
          </button>
          <div
            className="text-left pr-20"
            // DOMPURIFY OR SANITIZER NEEDED!!! OR REACT-HTML-PARSER!!
            dangerouslySetInnerHTML={{ __html: item.description }}
          ></div>
        </div>
      </div>
      <div className="border-t border-gray-600 border-opacity-60 bg-black text-gray-300 text-center pt-5">
        <h2 className="whitespace-nowrap underline uppercase">
          Related Products
        </h2>
        <div className="border-b border-gray-600 border-opacity-60 w-full flex items-center justify-center font-cabin pb-4 md:pb-8">
          {item.related_products.map((item, i) => (
            <div key={i} className="cursor-pointer">
              <img class="object-cover" src={item.media.source} alt="" />
              <div>{item.name}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
