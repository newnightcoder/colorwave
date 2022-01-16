import React from "react";
import { useSelector } from "react-redux";
import useWindowSize from "../utils/useWindowSize";

const CartRecap = ({ formOpen, toggleForm, handleForm, totalPrice }) => {
  const items = useSelector((state) => state?.cart.items);
  const { height, width } = useWindowSize();

  return (
    <div
      style={{ height: width > 768 && "calc(100% - 45px)" }}
      className="recap h-20 w-full md:w-1/3 absolute md:fixed bottom-0 md:right-10 md:top-0 md:my-auto z-50 flex flex-col items-center justify-center gap-2 bg-black md:bg-white text-white md:text-gray-900 p-16"
    >
      <div className="w-full flex items-center justify-center pt-2 border-b border-white md:border-gray-900 px-8">
        <span>TOTAL&nbsp;:</span> <span className="w-12 text-right">{totalPrice}</span>&nbsp;
        <span>€</span>
      </div>
      <button
        type="submit"
        className="w-48 flex items-center justify-center gap-2 text-sm font-bold uppercase text-black bg-yellow-300 shadow-md py-1 mt-4"
        onClick={!formOpen ? toggleForm : handleForm}
      >
        {!formOpen ? <span>next</span> : <span>continue</span>}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 52.4 29.75"
          alt="Shopping Cart"
          fill="currentColor"
          width="1.75rem"
          height=".75rem"
          className="transition-color duration-300 group-hover:text-blue-500"
        >
          <path
            d="M158.92,284H127.83V267a1.5,1.5,0,0,0-1.5-1.5h-6.57a1.5,1.5,0,1,0,0,3h5.07v16.91a1.5,1.5,0,0,0,1.5,1.5h32.59a1.5,1.5,0,1,0,0-3Z"
            transform="translate(-118.26 -265.51)"
          ></path>
          <path
            d="M162.34,277.81h-30a1.5,1.5,0,1,0,0,3h30a1.5,1.5,0,0,0,0-3Z"
            transform="translate(-118.26 -265.51)"
          ></path>
          <path
            d="M165.75,271.66H132.33a1.5,1.5,0,1,0,0,3h33.42a1.5,1.5,0,0,0,0-3Z"
            transform="translate(-118.26 -265.51)"
          ></path>
          <path
            d="M169.16,265.51H132.33a1.5,1.5,0,0,0,0,3h36.83a1.5,1.5,0,0,0,0-3Z"
            transform="translate(-118.26 -265.51)"
          ></path>
          <path
            d="M127.83,288.7a3.29,3.29,0,1,0,3.29,3.28A3.29,3.29,0,0,0,127.83,288.7Z"
            transform="translate(-118.26 -265.51)"
          ></path>
          <path
            d="M151.66,288.7A3.29,3.29,0,1,0,155,292,3.28,3.28,0,0,0,151.66,288.7Z"
            transform="translate(-118.26 -265.51)"
          ></path>
        </svg>
      </button>
    </div>
  );
};

export default CartRecap;
