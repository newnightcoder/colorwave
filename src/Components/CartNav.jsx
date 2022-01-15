import React from "react";
import { ChevronDoubleLeft, Trash } from "react-bootstrap-icons";
import { Link } from "react-router-dom";

const CartNav = ({ handleDeleteCart }) => {
  return (
    <div className="top-links-container w-full md:w-11/12 xl:w-10/12 max-w-screen-2xl absolute top-14 md:top-16 mx-auto flex items-center justify-between bg-sound py-2 md:py-0 pl-4 pr-4 md:pl-6 xl:pl-8 md:pr-0">
      <Link to="/shop" className="flex items-center justify-center gap-1 text-gray-900 hover:underline">
        <ChevronDoubleLeft size={12} />
        <span>Continue shopping</span>
      </Link>
      <button
        className="w-max md:w-48 flex items-center justify-center gap-2 text-sm uppercase text-white bg-black border border-black px-3 md:px-0 py-1"
        onClick={handleDeleteCart}
      >
        <span>delete cart</span>
        <Trash size={16} />
      </button>
    </div>
  );
};

export default CartNav;
