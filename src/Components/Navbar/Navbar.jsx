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
      <div className="w-screen bg-black shadow-lg fixed top-0 z-50 font-cabin">
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
              <nav className="ml-10 flex items-center space-x-4 justify-center hidden lg:flex">
                <NavLink to="/" className="flex items-center text-gray-100 text-base p-3 transform -translate-x-10">
                  COLORWAVE
                </NavLink>
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
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52.4 29.75" alt="Shopping Cart" fill="white">
                      <path d="M158.92,284H127.83V267a1.5,1.5,0,0,0-1.5-1.5h-6.57a1.5,1.5,0,1,0,0,3h5.07v16.91a1.5,1.5,0,0,0,1.5,1.5h32.59a1.5,1.5,0,1,0,0-3Z" transform="translate(-118.26 -265.51)"></path>
                      <path d="M162.34,277.81h-30a1.5,1.5,0,1,0,0,3h30a1.5,1.5,0,0,0,0-3Z" transform="translate(-118.26 -265.51)"></path>
                      <path d="M165.75,271.66H132.33a1.5,1.5,0,1,0,0,3h33.42a1.5,1.5,0,0,0,0-3Z" transform="translate(-118.26 -265.51)"></path>
                      <path d="M169.16,265.51H132.33a1.5,1.5,0,0,0,0,3h36.83a1.5,1.5,0,0,0,0-3Z" transform="translate(-118.26 -265.51)"></path>
                      <path d="M127.83,288.7a3.29,3.29,0,1,0,3.29,3.28A3.29,3.29,0,0,0,127.83,288.7Z" transform="translate(-118.26 -265.51)"></path>
                      <path d="M151.66,288.7A3.29,3.29,0,1,0,155,292,3.28,3.28,0,0,0,151.66,288.7Z" transform="translate(-118.26 -265.51)"></path>
                    </svg>
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
