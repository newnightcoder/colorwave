import React from "react";
import { XCircle } from "react-bootstrap-icons";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { deleteItem, toggleCartDrawer } from "../../Redux/Actions/cart.action";
import "../../Styles/cart.css";
import "../../Styles/_variables.css";

const CartDrawer = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.items);
  const cartDrawerOpen = useSelector((state) => state?.cart.cartDrawerOpen);

  // const handleAddToCart = (e) => {
  //   items.forEach((item) => {
  //     if (item.product.name === e.target.parentElement.parentElement.firstChild.innerText) {
  //       dispatch(addToCart(item.product, item.quantity));
  //     }
  //   });
  // };

  // const handleRemoveOne = (e) => {
  //   items.forEach((item) => {
  //     if (item.quantity === 1) dispatch(deleteItem(item.product));
  //     if (item.product.name === e.target.parentElement.parentElement.firstChild.innerText) {
  //       dispatch(removeOne(item.product, item.quantity));
  //     }
  //   });
  // };

  // const handleDeleteCart = () => {
  //   dispatch(deleteItem(items));
  // };

  const handleDeleteItem = (id) => {
    items.forEach((item) => {
      if (item.product.id === id) {
        dispatch(deleteItem(item.product));
      }
    });
  };

  const totalPrice =
    items?.length !== 0 &&
    items?.reduce((acc, curr) => {
      return acc + curr.product.price.raw * curr.quantity;
    }, 0);

  return (
    <div
      style={{ transform: cartDrawerOpen ? "translateY(0)" : "translateY(-100%)" }}
      className="h-screen w-full font-cabin md:w-2/3 lg:w-1/2 flex flex-col items-center justify-center overflow-x-hidden overflow-y-auto fixed z-50 transition-transform duration-300 text-gray-900 right-0 top-0 bg-sound pt-12 pb-12 px-4 md:px-12"
    >
      <div className="h-full w-full flex flex-col items-center justify-center gap-16">
        <div className="h-2/3 w-full overflow-y-auto overflow-x-hidden flex flex-col items-center justify-center gap-2 pt-36 pb-12">
          {items?.length !== 0 ? (
            items.map((item, i) => (
              <div
                key={i}
                className="w-full md:w-2/3 flex flex items-center justify-left border-b border-gray-300 only:border-b-0 last:border-b-0"
              >
                <div
                  style={{
                    backgroundColor: item.product.categories.find((x) => x.name === "limited") ? "black" : "white",
                  }}
                >
                  <img src={item.product.media.source} alt="" className="object-cover h-24" />
                </div>
                <div className="w-1/3 text-left text-sm whitespace-nowrap pl-2 md:pl-8">{item.product.name}</div>
                <div className="w-1/3 text-right text-sm pr-5">{item.product.price.formatted}&nbsp;€</div>
                <button
                  onClick={() => handleDeleteItem(item.product.id)}
                  className="h-10 w-10 rounded-full flex items-center justify-center bg-transparent transition-color duration-300 hover:bg-gray-300"
                >
                  <XCircle className="pointer-events-none" size={18} />
                </button>
              </div>
            ))
          ) : (
            <div className="h-screen w-screen flex flex-col items-center justify-center">YOUR CART IS EMPTY</div>
          )}
        </div>
        <div className="h-max flex flex-col items-center justify-center gap-2">
          <button
            onClick={() => dispatch(toggleCartDrawer())}
            className="w-48 block text-sm font-bold text-gray-900 py-2 shadow-md transition-shadow duration-100 hover:shadow-none bg-yellow-300 mt-4 uppercase outline-none"
          >
            Continue shopping
          </button>
          <button
            style={{ display: items.length === 0 ? "none" : "block" }}
            className="w-48 text-sm font-bold text-gray-900 py-2 shadow-md transition-shadow duration-100 hover:shadow-none bg-yellow-300 mt-4 uppercase outline-none"
            onClick={() => {
              history.push("/cart");
              dispatch(toggleCartDrawer());
            }}
          >
            view cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartDrawer;
