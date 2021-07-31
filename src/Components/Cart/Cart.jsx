import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../Redux/Actions/cart.action";
import "../_variables.css";

const Cart = () => {
  const dispatch = useDispatch();
  // const location = useLocation();
  // console.log(location);
  // const { item } = location.state;
  const items = useSelector((state) => state.cart);
  console.log(items);
  const handleAddToCart = () => {
    dispatch(addToCart());
  };

  return (
    <div>
      <div className="w-screen h-screen flex flex-col items-center justify-center text-gray-900 bg-sound divide-y divide-gray-400">
        {items.length !== 0
          ? items.map((item, i) => (
              <div key={i} className="w-3/12 flex flex-col justify-between py-4">
                <div>{item.product.name}</div>
                <div>{item.product.price.formatted_with_code}</div>
                <div>{item.quantity}</div>
                <div className="flex justify-evenly">
                  <button onClick={handleAddToCart}>+</button>
                  <button>-</button>
                </div>
              </div>
            ))
          : "EMPTY CART"}
      </div>
      <div className="w-screen h-screen flex items-center justify-center text-gray-300 bg-gaming">FORM</div>
    </div>
  );
};

export default Cart;
