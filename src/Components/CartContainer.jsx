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
      className="cart-container w-full md:w-2/3 relative flex flex-col items-center justify-center gap-4 text-gray-900 bg-sound"
      style={{ height: width < 768 ? "calc(100vh - 172px)" : "calc(100vh - 44px)" }}
    >
      <h1 className="h-12 md:h-16 w-full z-50 flex flex-col justify-center absolute top-0 left-0 text-left md:text-center font-bold text-lg md:text-xl uppercase pl-6 md:pl-0 shadow md:shadow-none">
        Your Cart
      </h1>

      {items.length !== 0 && <CartNav handleDeleteCart={handleDeleteCart} />}

      {items.length === 0 ? (
        <div className="w-screen flex flex-col items-center justify-center">YOUR CART IS EMPTY</div>
      ) : (
        <div
          style={{ height: width < 768 ? "calc(100vh - 250px)" : "calc(100vh - 210px)" }}
          className="items-container border border-black w-full md:w-11/12 xl:w-10/12 overflow-y-auto flex flex-col items-center md:items-start justify-center gap-4 pb-16 md:pb-4 md:pt-24 2xl:pt-0  mt-24 md:mt-14"
        >
          {items.map((item, i) => (
            <div
              key={i}
              style={{ height: width < 500 ? "7rem" : width < 768 && "12rem" }}
              className="item w-11/12 flex items-center justify-start gap-1 md:gap-6 pb-4 pr-1 md:px-0 border-b border-gray-600 last:border-b-0"
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
                  <div className="capitalize font-bold w-full">{item.product.name}</div>
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
          ))}
        </div>
      )}
    </div>
  );
};

export default CartContainer;
