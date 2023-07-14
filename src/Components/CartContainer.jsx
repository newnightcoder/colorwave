import { ChevronDoubleLeft, Trash } from "react-bootstrap-icons";
import { use100vh } from "react-div-100vh";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "../Styles/_globals.css";
import useWindowSize from "../utils/useWindowSize";

const CartContainer = ({ handleRemoveOne, handleAddToCart, handleDeleteItem, handleDeleteCart, formOpen }) => {
  const { width } = useWindowSize();
  const responsiveHeight = use100vh();
  const items = useSelector((state) => state?.cart.items);
  const cloudinaryCdnPrefix = "https://my-cloud-cdn.mo.cloudinary.net/colorwave";
  const commercejsCdn = "https://cdn.chec.io";

  return (
    <div className="cart-container h-full w-full relative flex flex-col items-center justify-center text-gray-900 bg-sound md:bg-gaming">
      {items.length === 0 ? (
        <div className="fixed z-50 inset-0 m-auto w-max flex flex-col items-center justify-center space-y-4">
          <h1 className="text-lg md:text-xl md:text-gray-100 uppercase border-b-2 border-yellow-400 px-4 font-bold">
            YOUR CART IS EMPTY...
          </h1>
          <Link
            to="/shop"
            className="flex items-center justify-center space-x-1 text-blue-500 hover:underline hover:font-bold"
          >
            <ChevronDoubleLeft size={12} />
            <span className="text-base uppercase">go back to the shop</span>
          </Link>
        </div>
      ) : (
        <>
          <div className="md:hidden z-50 h-max w-full bg-sound flex flex-col items-start justify-center md:flex-row md:items-center md:justify-between space-y-2 md:space-x-0 pt-4 md:pt-0 pl-4 md:pl-10">
            <div className="w-max relative">
              <h2 className="text-center text-xl md:text-2xl uppercase px-3 md:px-6">Your cart</h2>
              <span className="h-px w-full absolute inset-x-0 mx-auto left-0 bottom-0.5 bg-black"></span>
            </div>
            <Link
              to="/shop"
              className="flex items-center justify-center space-x-1 text-blue-500 hover:underline hover:font-bold group md:pl-6 md:pt-2"
            >
              <ChevronDoubleLeft size={12} />
              <span className="whitespace-nowrap">Continue shopping</span>
            </Link>
            <button
              className="w-max absolute right-5 flex items-center justify-center space-x-2 text-sm uppercase text-white bg-black px-3 py-1 shadow-md hover:shadow-none transition duration-300"
              onClick={handleDeleteCart}
            >
              <span className="whitespace-nowrap">delete cart</span>
              <Trash size={16} />
            </button>
          </div>
          <div
            style={{ height: width > 768 ? "83.33%" : responsiveHeight - 308 }}
            className="items-container relative  w-full flex flex-col justify-center items-center  pt-4 md:pt-0"
          >
            <div className="w-11/12 h-max md:min-h-32 md:w-9/12 md:max-w-5xl h-full flex flex-col items-center justify-center overflow-hidden">
              <div className="w-full h-auto overflow-x-hidden overflow-y-auto scrollbar-description pb-6">
                <div className="items h-auto w-full flex flex-col items-center justify-start space-y-4 md:pr-4">
                  {items.map((item, i) => (
                    <div
                      key={i}
                      style={{ animation: `750ms fadeInTop ${100 + i * 50}ms forwards` }}
                      className="item opacity-0 h-28 md:h-44 w-11/12 md:w-full flex items-center justify-start space-x-1 md:space-x-6 pr-1 md:px-0 bg-white shadow"
                    >
                      <div
                        className="h-28 md:h-44 w-2/5 border-r border-gray-100"
                        style={{
                          background: `${
                            item.product.categories.find((x) => x.name === "limited") ? "black" : "white"
                          } url("${item.product.media.source.replace(
                            commercejsCdn,
                            cloudinaryCdnPrefix
                          )}") no-repeat center/contain`,
                        }}
                      ></div>
                      <div className="details h-full w-2/5 flex items-center justify-center space-x-2">
                        <div className="h-full w-full flex flex-col items-start justify-center space-y-1 md:space-y-2 pl-2 md:pl-1">
                          <div className="capitalize w-full whitespace-nowrap truncate">{item.product.name}</div>
                          <div>{item.product.price.formatted} €</div>
                          <div className="w-max flex items-center justify-center space-x-1">
                            <div className=" w-max flex items-center justify-between space-x-1">
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
                      <div className="h-full w-1/5 flex flex-col items-center justify-center md:pr-4">
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
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default CartContainer;
