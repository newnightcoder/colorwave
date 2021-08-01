import React from "react";
import { Trash } from "react-bootstrap-icons";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../../Redux/Actions/cart.action";
import "../_variables.css";
import "./cart.css";

const Cart = () => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart);

  const handleAddToCart = (e) => {
    items.forEach((item) => {
      if (item.product.name === e.target.parentElement.parentElement.firstChild.innerText) {
        dispatch(addToCart(item.product, item.quantity));
      }
    });
  };
  const handleRemoveOne = (e) => {
    items.forEach((item) => {
      if (item.product.name === e.target.parentElement.parentElement.firstChild.innerText) {
        dispatch(removeFromCart(item.product, item.quantity));
      }
    });
  };

  const totalPrice = items.reduce((acc, curr) => {
    return acc + curr.product.price.raw * curr.quantity;
  }, 0);

  return (
    <div className="h-full overflow-x-hidden">
      <div className="w-screen min-h-screen flex flex-col items-center text-gray-900 bg-sound divide-y divide-gray-400">
        {items.length !== 0 ? (
          items.map((item, i) => (
            <div key={i} className="w-3/12 flex flex-col justify-between py-4">
              <div>{item.product.name}</div>
              <div>{item.product.price.formatted_with_code}</div>
              <div>{item.quantity}</div>
              <div className="flex justify-evenly">
                <button onClick={(e) => handleAddToCart(e)}>+</button>
                <button onClick={(e) => handleRemoveOne(e)}>-</button>
                <button>
                  <Trash />
                </button>
              </div>
            </div>
          ))
        ) : (
          <div className="w-screen flex flex-col items-center justify-center border border-red-500 empty-cart">YOUR CART IS EMPTY</div>
        )}
        {totalPrice !== 0 && (
          <div className="w-3/12 flex justify-between text-gray-900 pt-2">
            <span>TOTAL:</span> <span>{totalPrice} EUR</span>{" "}
          </div>
        )}
      </div>
      <div className="w-screen min-h-screen flex items-center justify-center text-gray-300 bg-gaming">FORM</div>
    </div>
  );
};

export default Cart;
