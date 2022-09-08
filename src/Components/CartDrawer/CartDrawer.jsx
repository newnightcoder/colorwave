import { ChevronDoubleLeft, ChevronDoubleRight, XCircle, XLg } from "react-bootstrap-icons";
import Div100vh from "react-div-100vh";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router";
import { useHistory } from "react-router-dom";
import { deleteItem, toggleCartDrawer } from "../../Redux/Actions/cart.action";
import "../../Styles/_globals.css";

const CartDrawer = () => {
  const history = useHistory();
  const location = useLocation();
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.items);
  const cartDrawerOpen = useSelector((state) => state?.cart.cartDrawerOpen);

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
    <Div100vh
      style={{
        transform: cartDrawerOpen && !location.pathname.includes("cart") ? "translateY(0)" : "translateY(-101%)",
        zIndex: 5000,
      }}
      className={`w-full fixed md:w-3/4 lg:w-2/3 xl:w-1/2 2xl:w-2/5 font-cabin flex flex-col items-center justify-center overflow-hidden  transition-transform duration-300 text-gray-900 right-0 top-0 bg-sound  pt-4 pb-8 md:px-10`}
    >
      <button onClick={() => dispatch(toggleCartDrawer())} className="h-max w-max">
        <XLg size={24} className="absolute top-8 right-10 z-50" />
      </button>
      <div className="h-full w-full flex flex-col items-center justify-center space-y-6">
        <div
          style={{ animation: cartDrawerOpen && items.length !== 0 && "750ms fadeIn 100ms forwards" }}
          className="opacity-0 w-max h-min relative"
        >
          <h1 className="text-xl md:text-2xl px-4 text-center uppercase">Your Cart</h1>
          <span className="h-px w-full absolute inset-x-0 mx-auto left-0 bottom-0.5 bg-black"></span>
        </div>

        <div className="h-4/5 w-full overflow-hidden pt-3 pb-0 ">
          <div
            className={`h-full w-full overflow-x-hidden ${
              items.length > 0 ? "overflow-y-auto" : "overflow-y-hidden flex items-center justify-center"
            } scrollbar-description`}
          >
            <div className="items-container h-auto w-full flex flex-col items-center justify-start space-y-2 pb-2">
              {items?.length !== 0 ? (
                items.map((item, i) => (
                  <div
                    key={item.product.id}
                    className="opacity-0 h-28 md:h-36 w-11/12 flex items-center justify-center bg-white pr-3"
                    style={{
                      animation: cartDrawerOpen && items.length !== 0 && `750ms fadeIn ${200 + i * 100}ms forwards`,
                    }}
                  >
                    <div
                      style={{
                        background: `${
                          item.product.categories.find((x) => x.name === "limited") ? "black" : "white"
                        } url("${item.product.media.source}") no-repeat center/contain`,
                      }}
                      className="h-28 md:h-36 w-4/12 border-r border-t border-b border-gray-200"
                    ></div>
                    <div className="w-4/12 text-left my-auto text-sm pl-2 pr-2 md:pl-5 md:pr-0 whitespace-nowrap truncate">
                      {item.product.name}
                    </div>
                    <div className="w-3/12 text-right text-sm flex items-center justify-center md:pr-2">
                      {item.product.price.formatted}&nbsp;€
                    </div>
                    <button
                      onClick={() => handleDeleteItem(item.product.id)}
                      className="h-10 w-1/12 rounded-full flex items-center justify-center bg-transparent transition-color duration-300 hover:bg-gray-300"
                    >
                      <XCircle className="pointer-events-none" size={18} />
                    </button>
                  </div>
                ))
              ) : (
                <div className="h-full w-full text-lg text-center my-auto">YOUR CART IS EMPTY</div>
              )}
            </div>
          </div>
        </div>
        <div
          style={{ animation: cartDrawerOpen && items.length !== 0 && "750ms fadeIn 400ms forwards" }}
          className="opacity-0 h-max flex flex-col md:flex-row items-center justify-center md:space-x-8 "
        >
          <button
            onClick={() => dispatch(toggleCartDrawer())}
            className="w-48 md:w-56 flex items-center justify-center space-x-2 text-sm md:text-base text-gray-900 py-3 shadow-md transition-shadow duration-100 hover:shadow-none bg-yellow-300 mt-4 uppercase outline-none"
          >
            <ChevronDoubleLeft size={16} /> <span>Continue shopping</span>
          </button>
          <button
            style={{ display: items.length === 0 ? "none" : "flex" }}
            className="w-48 md:w-56 items-center justify-center space-x-2 text-sm md:text-base text-gray-900 py-3 shadow-md transition-shadow duration-100 hover:shadow-none bg-yellow-300 mt-4 uppercase outline-none"
            onClick={() => {
              history.push("/cart");
              dispatch(toggleCartDrawer());
            }}
          >
            <span>checkout</span> <ChevronDoubleRight size={16} />
          </button>
        </div>
      </div>
    </Div100vh>
  );
};

export default CartDrawer;
