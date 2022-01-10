import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { toggleSearchModal } from "../../Redux/Actions/shop.action";
import "../../Styles/_variables.css";
import "./product.css";

const ProductCard = ({ item, variants, bgColor }) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const searchModalOpen = useSelector((state) => state?.shop.searchModalOpen);

  const linkPage = () => {
    if (searchModalOpen) dispatch(toggleSearchModal());
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
    <div className="h-36 md:h-60 w-full font-cabin" onClick={linkPage}>
      <div className="h-28 md:h-56 w-full cursor-pointer" style={{ backgroundColor: `${bgColor}` }}>
        <img className="object-cover h-full w-full" src={item && item.media.source} alt={item.name} />
      </div>
      <p className="text-center text-sm pt-1 md:pt-2 pb-4">{item && item.name}</p>
    </div>
  );
};

export default ProductCard;
