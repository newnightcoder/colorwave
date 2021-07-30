import React from "react";
import { useHistory } from "react-router-dom";
import "../../_variables.css";

const ProductCard = ({ item }) => {
  const history = useHistory();

  return (
    <div
      className="h-full w-full cursor-pointer	font-cabin"
      onClick={() =>
        history.push({
          pathname: `/product/${item.name}`,
          state: { item },
        })
      }
    >
      <div className="bg-white">
        <img
          className="object-cover h-30 md:h-60 w-full"
          src={item && item.media.source}
          alt={item.name}
        />
      </div>
      <p className="text-center">{item && item.name}</p>
    </div>
  );
};

export default ProductCard;
