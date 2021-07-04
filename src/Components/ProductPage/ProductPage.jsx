import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import "../_variables.css";

const ProductPage = () => {
  const location = useLocation();
  const { item } = location.state;
  console.log(item);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const background =
    item.categories[0].name === "gaming" ? "bg-black-rgba" : "bg-white";

  return (
    <div className="h-screen w-screen bg-gaming text-gray-300 flex flex-col items-center justify-center space-y-5">
      <h2>{item.name}</h2>
      <div className={background}>
        <img
          className="object-cover h-40 md:h-80 w-full"
          src={item.media.source}
          alt=""
        />
      </div>
      <span className="text-bold  text-xl italic">
        {item.price.formatted_with_code}{" "}
      </span>
    </div>
  );
};

export default ProductPage;
