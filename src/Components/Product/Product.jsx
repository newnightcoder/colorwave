import React from "react";
import { useHistory } from "react-router-dom";
import "../../Styles/_variables.css";
import "./product.css";

const ProductCard = ({ item, variants }) => {
  const history = useHistory();

  const linkPage = () => {
    if (variants !== null) {
      return history.push(`/categories/${item.name}`);
    }
    history.push({
      pathname: `/product/${item.name}`,
      state: { item },
    });
  };

  return (
    <div className="h-full w-full cursor-pointer	font-cabin" onClick={linkPage}>
      <div className="bg-black-rgba">
        <img className="object-cover h-30 md:h-60 w-full" src={item && item.media.source} alt={item.name} />
      </div>
      <p className="text-center text-sm md:text-base">{item && item.name}</p>
    </div>
  );
};

export default ProductCard;
