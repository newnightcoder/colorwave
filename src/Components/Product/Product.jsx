import React from "react";
import { useHistory } from "react-router-dom";
import "../../Styles/_variables.css";
import "./product.css";

const ProductCard = ({ item, variants }) => {
  const history = useHistory();

  const linkPage = () => {
    if (variants !== undefined && variants?.length !== 0) {
      return history.push({
        pathname: `/categories/${item.name}`,
        state: { variants: true, item },
      });
    }
    history.push({
      pathname: `/product/${item.name}`,
      state: { item },
    });
  };

  return (
    <div className="h-30 md:h-60 w-full cursor-pointer font-cabin" onClick={linkPage}>
      <div className="bg-black-rgba h-full w-full ">
        <img className="object-cover h-30 md:h-60 w-full" src={item && item.media.source} alt={item.name} />
      </div>
      <p className="text-center text-sm md:text-base pt-1">{item && item.name}</p>
    </div>
  );
};

export default ProductCard;
