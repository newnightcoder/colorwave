import React from "react";
import { Trash } from "react-bootstrap-icons";
import { useSelector } from "react-redux";
import { CartNav } from ".";
import useWindowSize from "../utils/useWindowSize";

const CartContainer = ({ handleRemoveOne, handleAddToCart, handleDeleteItem, handleDeleteCart, formOpen }) => {
  const { height, width } = useWindowSize();
  const items = useSelector((state) => state?.cart.items);

  return (
    <div
      className="cart-container w-full md:w-2/3 relative flex flex-col items-center justify-center gap-4 text-gray-900 border-4 border-blue-500"
      style={{ height: width < 768 ? "calc(100vh - 236px)" : "calc(100vh - 108px)" }}
    >
      {items.length !== 0 && <CartNav handleDeleteCart={handleDeleteCart} />}

      {items.length === 0 ? (
        <div className="w-screen flex flex-col items-center justify-center">YOUR CART IS EMPTY</div>
      ) : (
        items.map((item, i) => (
          <div
            key={i}
            className="item h-24 md:h-48 w-11/12 md:w-10/12 flex items-center justify-start gap-1 md:gap-6 pr-1 md:px-0 border-b border-black "
          >
            <div
              className="image h-full w-full md:w-80"
              style={{
                backgroundColor: item.product.categories.find((x) => x.name === "limited") ? "black" : "white",
              }}
            >
              <img src={item.product.media.source} alt={item.product.name} className="object-contain h-full w-full" />
            </div>
            <div className="details h-full w-full md:w-1/3 flex items-center justify-center gap-2">
              <div className="h-full w-full flex flex-col items-start justify-center gap-1 md:gap-2 pl-1 xl:pl-4">
                <div className="uppercase whitespace-nowrap">{item.product.name}</div>
                <div>{item.product.price.formatted} €</div>
                <div className="w-max flex items-center justify-center gap-1">
                  <div className=" w-max flex items-center justify-between gap-1">
                    <button
                      className="h-6 w-6 rounded-full flex items-center justify-center bg-yellow-300 text-black outline-none shadow-sm"
                      onClick={() => handleRemoveOne(item.product.id)}
                    >
                      <span className="text-lg">-</span>
                    </button>
                    <div className="w-6 text-center">{item.quantity}</div>
                    <button
                      className="h-6 w-6 rounded-full flex items-center justify-center bg-yellow-300 text-black outline-none shadow-sm"
                      onClick={() => handleAddToCart(item.product.id)}
                    >
                      <span className="text-lg">+</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="h-full flex flex-col items-center justify-end md:justify-center">
              <button
                onClick={() => handleDeleteItem(item.product.id)}
                className="h-10 w-10 rounded-full flex items-center justify-center bg-transparent transition-color duration-300 hover:bg-gray-300"
              >
                <Trash className="pointer-events-none" size={22} />
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default CartContainer;
