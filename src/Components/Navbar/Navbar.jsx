import React from "react";
import { Handbag } from "react-bootstrap-icons";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const items = useSelector((state) => state.cart);
  console.log(items);
  const totalItems =
    items.length !== 0 &&
    items.reduce((acc, curr) => {
      return acc + curr.quantity;
    }, 0);
  console.log(totalItems);

  return (
    <>
      <div className="w-full bg-black shadow-lg fixed top-0 font-cabin">
        <div className="w-full mx-auto px-2 sm:px-6 lg:px-8">
          <div className="relative flex items-center justify-between h-16">
            {/* <!-- MOBILE MENU BUTTON--> */}
            <div className="absolute inset-y-0 right-0 mr-1 sm:mr-5 flex items-center lg:hidden">
              <button
                type="button"
                className="inline-flex items-center justify-center p-2 text-white hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open menu</span>
                {/* HAMBURGER ICON. Heroicon name: outline/menu   Menu open: "hidden", Menu closed: "block" */}
                <svg className="block h-9 w-9" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
                {/* X CLOSE ICON. Heroicon name: outline/x    Menu open: "block", Menu closed: "hidden" */}
                <svg className="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="w-full flex items-center justify-start lg:justify-between ">
              <div className="flex items-center text-gray-100 text-base p-3">COLORWAVE</div>
              <nav className="ml-10 flex  items-center space-x-4 justify-center hidden lg:flex">
                {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white"  */}
                <NavLink to="/shop" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2  text-base font-medium whitespace-nowrap">
                  Our products
                </NavLink>

                <NavLink to="/shop" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2  text-base font-medium whitespace-nowrap">
                  Categories
                </NavLink>

                <NavLink to="/shop" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2  text-base font-medium whitespace-nowrap">
                  Promotional
                </NavLink>

                <NavLink to="/shop" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2  text-base font-medium whitespace-nowrap">
                  This is art!
                </NavLink>
              </nav>
              <div className="w-40 sm:w-52 h-full  flex items-center justify-between px-6">
                <NavLink to="/login" className=" text-gray-300  hover:bg-gray-700 hover:text-white block px-3 py-2 text-base font-medium whitespace-nowrap">
                  Sign in{" "}
                </NavLink>
                <div className="w-12 h-full relative flex items-center justify-center sm:text-gray-400 text-white hover:bg-gray-700 ">
                  <NavLink to="/cart" className="z-10 text-gray-300 px-3 py-2 text-xl font-bold whitespace-nowrap">
                    <Handbag />
                  </NavLink>
                  {totalItems > 0 && <div className="h-5 w-5 flex items-center justify-center absolute top-0 right-0 text-sm text-gray-100 bg-gray-400 rounded-full">{totalItems}</div>}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- Mobile menu, show/hide based on menu state. --> */}
        <div className="hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
            <a href="#" className="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium" aria-current="page">
              Our products
            </a>

            <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
              Categories
            </a>

            <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
              Promotional
            </a>

            <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
              This is art!
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
