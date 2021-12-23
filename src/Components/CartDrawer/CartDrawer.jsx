import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { addToCart, deleteItem, removeOne, toggleCartDrawer } from "../../Redux/Actions/cart.action";
import "../../Styles/cart.css";
import "../../Styles/_variables.css";

const CartDrawer = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.items);
  const cartDrawerOpen = useSelector((state) => state?.cart.cartDrawerOpen);

  const handleAddToCart = (e) => {
    items.forEach((item) => {
      if (item.product.name === e.target.parentElement.parentElement.firstChild.innerText) {
        dispatch(addToCart(item.product, item.quantity));
      }
    });
  };

  const handleRemoveOne = (e) => {
    items.forEach((item) => {
      if (item.quantity === 1) dispatch(deleteItem(item.product));
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
    items?.length !== 0 &&
    items?.reduce((acc, curr) => {
      return acc + curr.product.price.raw * curr.quantity;
    }, 0);

  return (
    <div
      style={{ transform: cartDrawerOpen ? "translateY(0)" : "translateY(-100%)" }}
      className="h-screen w-full md:w-2/3 lg:w-1/2 flex flex-col items-center justify-center overflow-x-hidden overflow-y-scroll fixed z-50 transition-transform duration-300 text-white right-0 top-0 bg-black pt-12 pb-12"
    >
      <div className="h-full w-full flex flex-col items-center justify-center gap-16">
        <div className="h-2/3 w-full overflow-y-auto overflow-x-hidden flex flex-col items-center justify-center pt-36 pb-12">
          {items?.length !== 0 ? (
            items.map((item, i) => (
              <div
                key={i}
                className="w-10/12 flex flex items-center justify-evenly border-b border-gray-900 pt-4 only:border-b-0 last:border-b-0"
              >
                <img src={`${item.product.media.source}`} alt="" className="h-24" />
                <div className="w-1/3 text-center">{item.product.name}</div>
                <div className="w-1/3 text-right">{item.product.price.formatted_with_code}</div>
                {/* <div>{item.quantity}</div>
                <div className="w-1/2 flex justify-evenly">
                  <button onClick={(e) => handleAddToCart(e)}>+</button>
                  <button onClick={(e) => handleRemoveOne(e)}>-</button>
                  <button onClick={(e) => handleDeleteItem(e)}>
                    <Trash className="pointer-events-none" />
                  </button>
                </div>
                <div className="h-max w-full text-white flex justify-center gap-3 pt-2">
                  <span>TOTAL :</span> <span>{totalPrice} EUR</span>{" "}
                </div> */}
              </div>
            ))
          ) : (
            <div className="h-screen w-screen flex flex-col items-center justify-center">YOUR CART IS EMPTY</div>
          )}
        </div>
        <div className="h-max flex flex-col items-center justify-center gap-2">
          <button
            style={{ display: items.length === 0 ? "none" : "block" }}
            className="w-48 text-white py-1 border border-white mt-4"
            onClick={() => {
              history.push("/cart");
              dispatch(toggleCartDrawer());
            }}
          >
            Checkout
          </button>
          <button
            onClick={() => dispatch(toggleCartDrawer())}
            className="w-48 text-white py-1 border border-white mt-4"
          >
            Continue shopping
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartDrawer;
