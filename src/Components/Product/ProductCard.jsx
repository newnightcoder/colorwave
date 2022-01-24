import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { addToCart, toggleCartDrawer } from "../../Redux/Actions/cart.action";
import { toggleSearchModal } from "../../Redux/Actions/shop.action";
import "../../Styles/_variables.css";
import "./product.css";

const ProductCard = ({ item, variants, bgColor }) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const searchModalOpen = useSelector((state) => state?.shop.searchModalOpen);
  const limitedItem = item?.categories?.find((cat) => cat.name === "limited");

  const linkPage = () => {
    if (searchModalOpen) dispatch(toggleSearchModal());
    if (variants !== undefined && variants?.length !== 0) {
      return history.push({
        pathname: `/categories/${item.name}`,
        state: { item, variants: true },
      });
    }
    history.push({
      pathname: `/product/${item.name}`,
      state: { item },
    });
  };

  const handleAddToCart = () => {
    const qty = 1;
    dispatch(addToCart(item, qty));
    dispatch(toggleCartDrawer());
  };

  return (
    <div className="h-36 md:h-60 w-full font-cabin group">
      <div
        className="h-28 md:h-56 w-full cursor-pointer relative overflow-hidden"
        style={{ backgroundColor: `${bgColor}` }}
      >
        <img
          className="object-contain h-full w-full relative transition duration-300 transform group-hover:scale-125"
          src={item && item.media.source}
          alt={item.name}
          onClick={linkPage}
        />
        <div
          style={{ backgroundColor: limitedItem ? "rgba(250,250,250,.5)" : "rgba(0,0,0,.5)" }}
          className="hidden z-10 h-1/4 w-full md:flex items-center justify-between px-2 absolute bottom-0 bg-white transform translate-y-full transition duration-300 group-hover:translate-y-0"
        >
          <div>{item.price.raw}&nbsp;€</div>
          <button
            style={{ backgroundColor: limitedItem ? "black" : "white", color: limitedItem ? "white" : "black" }}
            className="uppercase py-2 px-3 rounded-sm text-sm"
            onClick={handleAddToCart}
          >
            add to cart
          </button>
        </div>
      </div>
      <p className="text-center text-sm pt-1 md:pt-2 pb-4 2xl:pb-8 transition-color duration-300 group-hover:text-blue-500">
        {item && item.name}
      </p>
    </div>
  );
};

export default ProductCard;
