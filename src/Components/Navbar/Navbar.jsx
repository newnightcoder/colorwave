import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const items = useSelector((state) => state.cart);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    return setMenuOpen((menuOpen) => !menuOpen);
  };

  console.log(items);
  const totalItems =
    items.length !== 0 &&
    items.reduce((acc, curr) => {
      return acc + curr.quantity;
    }, 0);
  console.log(totalItems);

  return (
    <>
      <div className="nav-container h-16 w-screen bg-black shadow-lg fixed top-0 z-50 font-cabin">
        <div className="w-full mx-auto px-2 sm:px-6 lg:px-8">
          <div className="h-16 relative flex items-center justify-between">
            {/* <!-- MOBILE MENU BUTTON--> */}
            <div className="absolute inset-y-0 left-0 mr-1 sm:mr-5 flex items-center lg:hidden">
              <button
                type="button"
                className="inline-flex items-center justify-center p-2 text-white hover:text-blue-500 focus:outline-none"
                aria-controls="mobile-menu"
                aria-expanded="false"
                onClick={toggleMenu}
              >
                <span className="sr-only">Open menu</span>
                {/* HAMBURGER ICON. Heroicon name: outline/menu   Menu open: "hidden", Menu closed: "block" */}
                <svg
                  className="h-9 w-9"
                  style={{ display: menuOpen ? "none" : "block" }}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
                {/* X CLOSE ICON. Heroicon name: outline/x    Menu open: "block", Menu closed: "hidden" */}
                <svg
                  style={{ display: menuOpen ? "block" : "none" }}
                  className="h-9 w-9"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="w-full flex items-center justify-start lg:justify-between">
              <nav className="ml-10 flex items-center space-x-4 justify-center hidden lg:flex">
                <NavLink to="/" className="flex items-center text-gray-100 text-base p-3 transform -translate-x-10">
                  COLORWAVE
                </NavLink>
                {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white"  */}
                <NavLink
                  to="/shop"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 text-base font-medium whitespace-nowrap"
                >
                  Products
                </NavLink>

                <NavLink
                  to="/categories/skins"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 text-base font-medium whitespace-nowrap"
                >
                  Skins
                </NavLink>

                <NavLink
                  to="/promotional"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 text-base font-medium whitespace-nowrap"
                >
                  Promotional
                </NavLink>

                <NavLink
                  to="/support"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 text-base font-medium whitespace-nowrap"
                >
                  Support
                </NavLink>
              </nav>
              <div className="w-max h-full flex items-center justify-center sm:text-gray-400 text-white hover:bg-gray-700 absolute right-0 mr-2">
                <Link
                  to="/cart"
                  className="w-max h-max flex items-center justify-center gap-2 z-10 text-gray-300 text-xl "
                >
                  <span className="hidden md:block text-white">Checkout</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 52.4 29.75"
                    alt="Shopping Cart"
                    fill="white"
                    width="2rem"
                    height="1rem"
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
                </Link>
                {totalItems > 0 && (
                  <div className="h-5 w-5 rounded-full flex items-center justify-center absolute top-0 right-0 text-sm text-white bg-white ">
                    {totalItems}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* <!-- Mobile menu, show/hide based on menu state. --> */}
        <div
          style={{ transform: menuOpen ? "scaleX(100%)" : "scaleX(0)" }}
          className="w-max pl-2 pr-10 flex flex-col bg-black origin-left transition-scale duration-100"
          id="mobile-menu"
        >
          <div className="px-2 pt-2 pb-3 space-y-1">
            {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
            <Link
              onClick={toggleMenu}
              to="/shop"
              className="text-gray-300 hover:text-blue-500 hover:font-bold block px-3 py-2 rounded-md text-base font-medium capitalize"
              aria-current="page"
            >
              Products
            </Link>

            <Link
              onClick={toggleMenu}
              to="/categories/skins"
              className="text-gray-300 hover:text-blue-500 hover:font-bold block px-3 py-2 rounded-md text-base font-medium capitalize"
            >
              Skins
            </Link>

            <Link
              onClick={toggleMenu}
              to="/promotional"
              className="text-gray-300 hover:text-blue-500 hover:font-bold block px-3 py-2 rounded-md text-base font-medium capitalize"
            >
              Promotional
            </Link>

            <Link
              onClick={toggleMenu}
              to="/support"
              className="text-gray-300 hover:text-blue-500 hover:font-bold block px-3 py-2 rounded-md text-base font-medium capitalize"
            >
              Support
            </Link>
            <Link
              onClick={toggleMenu}
              to="/cart"
              className="text-gray-300 hover:text-blue-500 hover:font-bold block px-3 py-2 rounded-md text-base font-medium capitalize"
            >
              Cart
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
