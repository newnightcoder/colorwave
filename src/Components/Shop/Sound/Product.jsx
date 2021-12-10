import React from "react";
import { useHistory } from "react-router-dom";
import "../../../Styles/_variables.css";

const ProductCard = ({ item, variants }) => {
  const history = useHistory();

  const linkPage = () => {
    if (variants.length !== 0) {
      console.log(variants);
      return history.push({
        pathname: `/categories/${item.name}`,
        state: { variants },
      });
    }
    history.push({
      pathname: `/product/${item.name}`,
      state: { item },
    });
  };

  return (
    <div className="h-full w-full cursor-pointer	font-cabin" onClick={linkPage}>
      <div className="bg-white">
        <img className="object-cover h-30 md:h-60 w-full" src={item && item.media.source} alt={item.name} />
      </div>
      <p className="text-center">{item && item.name}</p>
    </div>
  );
};

export default ProductCard;
