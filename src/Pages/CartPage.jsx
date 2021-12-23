import React from "react";
import { Trash } from "react-bootstrap-icons";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, deleteItem, removeOne } from "../Redux/Actions/cart.action";
import "../Styles/cart.css";
import "../Styles/_variables.css";

const CartPage = () => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state?.cart.items);

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
        dispatch(removeOne(item.product, item.quantity));
      }
    });
  };

  const handleDeleteItem = (e) => {
    items.forEach((item) => {
      if (item.product.name === e.target.parentElement.parentElement.firstChild.innerText) {
        dispatch(deleteItem(item.product));
      }
    });
  };
  const handleDeleteCart = () => {
    dispatch(deleteItem(items));
  };

  const totalPrice =
    items.length !== 0 &&
    items.reduce((acc, curr) => {
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
                <button onClick={(e) => handleDeleteItem(e)}>
                  <Trash className="pointer-events-none" />
                </button>
              </div>
            </div>
          ))
        ) : (
          <div className="w-screen flex flex-col items-center justify-center empty-cart">YOUR CART IS EMPTY</div>
        )}
        {items.length !== 0 && (
          <>
            <div className="w-3/12 flex justify-between text-gray-900 pt-2">
              <span>TOTAL:</span> <span>{totalPrice} EUR</span>{" "}
            </div>
            <button className="text-gray-900" onClick={handleDeleteCart}>
              empty the cart
            </button>
          </>
        )}
      </div>
      <div className="w-screen min-h-screen flex items-center justify-center text-gray-300 bg-gaming">FORM</div>
    </div>
  );
};

export default CartPage;
