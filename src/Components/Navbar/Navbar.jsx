import { useEffect, useState } from "react";
import { ChevronLeft, Search } from "react-bootstrap-icons";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router";
import { Link, NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { toggleCartDrawer } from "../../Redux/Actions/cart.action";
import { toggleSearchModal } from "../../Redux/Actions/shop.action";

const Navbar = () => {
  const items = useSelector((state) => state?.cart.items);
  const [menuOpen, setMenuOpen] = useState(false);
  const [categoriesOpen, setCategoriesOpen] = useState(false);
  const dispatch = useDispatch();
  const { pathname } = useLocation();

  const toggleMenu = () => {
    setMenuOpen((menuOpen) => !menuOpen);
  };

  const toggleMenuCategories = () => {
    setCategoriesOpen((categoriesOpen) => !categoriesOpen);
  };

  useEffect(() => {
    if (categoriesOpen) toggleMenuCategories();
  }, [pathname]);

  const totalItems =
    items.length !== 0 &&
    items.reduce((acc, curr) => {
      return acc + curr.quantity;
    }, 0);

  return (
    <>
      <div
        style={{ zIndex: 3000 }}
        className="h-16 md:h-20 w-full bg-black shadow-lg fixed top-0 font-cabin border-b-8 border-yellow-300 shadow-lg shadow-yellow-300"
      >
        <div className="nav-container h-full w-full mx-auto px-4 2xl:px-8">
          {/* 
                /////////////////////////
                ///      PART 1       ///
                //////////////////////// */}
          <div className="h-full relative flex items-center justify-between md:pl-4">
            {/* HAMBURGER ICON. Heroicon name: outline/menu   Menu open: "hidden", Menu closed: "block" */}
            <div className="flex items-center">
              <button
                type="button"
                className=" md:hidden inline-flex items-center justify-center p-2 text-white hover:text-blue-500 focus:outline-none"
                aria-controls="mobile-menu"
                aria-expanded="false"
                onClick={toggleMenu}
              >
                <span className="sr-only">Open menu</span>
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
              <NavLink to="/" className="w-max group absolute inset-x-0 m-auto md:static">
                <div className="relative">
                  <span
                    className="block absolute -inset-1 transform transition-all duration-300 -skew-y-6 bg-yellow-300 group-hover:skew-y-3 group-hover:bg-blue-500"
                    aria-hidden="true"
                  ></span>
                  <h1 className="relative text-lg transition-color duration-300 text-black group-hover:text-white px-1">
                    COLORWAVE
                  </h1>
                </div>
              </NavLink>
            </div>
            {/* <!-- END MOBILE MENU BUTTON--> */}

            {/* 
                /////////////////////////
                ///      PART 2       ///
                //////////////////////// */}
            <div className="w-full flex items-center justify-between px-8 2xl:pl-12 2xl:pr-8">
              {/* <!-- DESKTOP NAVLINKS CONTAINER --> */}
              <nav className="hidden md:flex items-center justify-center lg:space-x-4">
                <NavLink
                  to="/shop"
                  className="relative text-gray-300 hover:text-white text-base whitespace-nowrap group px-3 py-2"
                >
                  <span className="absolute inline-block inset-x-0 bottom-2 mx-auto h-0.5 w-full bg-yellow-300 transform scale-x-0 transition-scale origin-center duration-100 group-hover:scale-x-100"></span>
                  <span className="capitalize">Products</span>
                </NavLink>
                <NavLink
                  to="/categories/limited"
                  className="relative text-gray-300 hover:text-white text-base whitespace-nowrap group px-3 py-2"
                >
                  <span className="absolute inline-block inset-x-0 bottom-2 mx-auto h-0.5 w-full bg-yellow-300 transform scale-x-0 transition-scale origin-center duration-100 group-hover:scale-x-100"></span>

                  <span className="capitalize">limited</span>
                </NavLink>
                <NavLink
                  to="/promotional"
                  className="relative text-gray-300 hover:text-white text-base whitespace-nowrap group px-3 py-2"
                >
                  <span className="absolute inline-block inset-x-0 bottom-2 mx-auto h-0.5 w-full bg-yellow-300 transform scale-x-0 transition-scale origin-center duration-100 group-hover:scale-x-100"></span>
                  <span>Promotional</span>
                </NavLink>
              </nav>
              {/* <!-- END DESKTOP NAVLINKS CONTAINER --> */}

              {/* 
                  ///////////////////////////////////////////////////
                  ///      SEARCH + CHECKOUT BTNS CONTAINER      ///
                  ////////////////////////////////////////////////// */}

              <div className="w-max h-full absolute md:static right-4 flex items-center justify-center space-x-4 lg:space-x-8">
                {/* search btn*/}
                {!pathname.includes("success") && (
                  <button
                    onClick={() => {
                      dispatch(toggleSearchModal());
                    }}
                    className="h-10/12 w-max relative group flex items-center justify-center space-x-2 text-gray-300"
                  >
                    <span className="hidden absolute md:inline-block inset-x-0 bottom-0 mx-auto h-0.5 w-full bg-blue-500 transform scale-x-0 transition-scale origin-left duration-100 group-hover:scale-x-100"></span>
                    <span className="hidden md:inline-block group-hover:text-white">Search</span>
                    <Search size={18} className="text-white transition-color duration-300 group-hover:text-blue-500" />
                  </button>
                )}
                {/* Checkout btn*/}
                {!pathname.includes("success") && pathname !== "/cart" && (
                  <button
                    onClick={() => dispatch(toggleCartDrawer())}
                    className="w-max h-max relative flex items-center justify-center space-x-1 z-10 text-gray-300 text-base group"
                  >
                    <span className="hidden md:block text-gray-300 group-hover:text-white">Checkout</span>
                    <span className="hidden absolute md:inline-block inset-x-0 bottom-0 mx-auto h-0.5 w-full bg-blue-500 transform scale-x-0 transition-scale origin-left duration-100 group-hover:scale-x-100"></span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 52.4 29.75"
                      alt="Shopping Cart"
                      fill="currentColor"
                      width="2rem"
                      height="1rem"
                      className="transition-color duration-300 group-hover:text-blue-500 z-50"
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
                    <>
                      {totalItems > 0 && (
                        <div className="h-5 w-5 rounded-full flex items-center justify-center absolute -top-3 -right-3 text-sm text-black font-bold transition duration-300 bg-yellow-300 group-hover:bg-white">
                          {totalItems}
                        </div>
                      )}
                    </>
                  </button>
                )}
              </div>
              {/* <!-- SEARCH + CHECKOUT BTNS CONTAINER --> */}
            </div>
            {/* <!-- END PART 2  --> */}
          </div>
          {/* <!-- END PART 1  --> */}
        </div>
        {/* <!-- END NAVBAR CONTAINER  --> */}

        {/* 
            /////////////////////////////////////////////////////////
            ///   MOBILE MENU  - SHOW/HIDE BASED ON MENU STATE   ///
            /////////////////////////////////////////////////////// */}
        <div
          style={{ transform: menuOpen ? "scale(1, 1)" : "scale(0, 1)", height: "calc(100vh - 3.5rem)" }}
          className="w-full relative flex flex-col items-center justify-center bg-yellow-300 origin-left transition-scale duration-100"
          id="mobile-menu"
        >
          {/* START menu for categories - within mobile menu */}
          <div
            className={`menu-categories transform transition duration-100 z-50 ${
              categoriesOpen ? "translate-x-0" : "translate-x-full "
            } absolute inset-0  w-full h-full bg-gray-500`}
          >
            <button
              className="absolute top-1/2 left-6 transform -translate-y-1/2 bounce-right"
              onClick={toggleMenuCategories}
            >
              <ChevronLeft size={38} className="fw-bold text-white hover:text-blue-500 transition duration-300" />
            </button>
            <div className="w-full h-full px-2 pt-2 pb-3 space-y-1 flex flex-col items-center justify-evenly">
              <Link
                style={{ animation: categoriesOpen && `750ms fadeIn 100ms forwards` }}
                onClick={toggleMenu}
                to="/categories/gaming"
                className="text-white font-bold text-center block px-3 py-2 rounded-md text-base uppercase opacity-0 transform translate-y-100"
                aria-current="page"
              >
                <div className="w-max group">
                  <span>Gaming</span>
                  <div className="h-1 bg-yellow-300 transform scale-x-0 origin-left transition duration-300 group-hover:scale-x-100"></div>
                </div>
              </Link>
              <Link
                style={{ animation: categoriesOpen && `750ms fadeIn 200ms forwards` }}
                onClick={toggleMenu}
                to="/categories/sound"
                className="text-white font-bold text-center block px-3 py-2 rounded-md text-base uppercase opacity-0 transform translate-y-100"
                aria-current="page"
              >
                <div className="w-max group">
                  <span> Headphones </span>
                  <div className="h-1 bg-yellow-300 transform scale-x-0 origin-left transition duration-300 group-hover:scale-x-100"></div>
                </div>
              </Link>
              <HashLink
                style={{ animation: categoriesOpen && `750ms fadeIn 300ms forwards` }}
                onClick={toggleMenu}
                to="/categories/sound#mics"
                className="text-white font-bold text-center block px-3 py-2 rounded-md text-base uppercase opacity-0 transform translate-y-100"
                aria-current="page"
              >
                <div className="w-max group">
                  <span> Mics </span>
                  <div className="h-1 bg-yellow-300 transform scale-x-0 origin-left transition duration-300 group-hover:scale-x-100"></div>
                </div>
              </HashLink>
              <Link
                style={{ animation: categoriesOpen && `750ms fadeIn 400ms forwards` }}
                onClick={toggleMenu}
                to="/categories/skins"
                className="text-white font-bold text-center block px-3 py-2 rounded-md text-base uppercase opacity-0 transform translate-y-100"
                aria-current="page"
              >
                <div className="w-max group">
                  <span> Skins </span>
                  <div className="h-1 bg-yellow-300 transform scale-x-0 origin-left transition duration-300 group-hover:scale-x-100"></div>
                </div>
              </Link>
              <Link
                style={{ animation: categoriesOpen && `750ms fadeIn 500ms forwards` }}
                onClick={toggleMenu}
                to="/categories/accessories"
                className="text-white font-bold text-center block px-3 py-2 rounded-md text-base uppercase opacity-0 transform translate-y-100"
                aria-current="page"
              >
                <div className="w-max group">
                  <span> Accessories </span>
                  <div className="h-1 bg-yellow-300 transform scale-x-0 origin-left transition duration-300 group-hover:scale-x-100"></div>
                </div>
              </Link>
            </div>
          </div>
          {/* END menu for categories - within mobile menu */}
          {/*  MENU */}
          <div className="w-full h-full px-2 pt-2 pb-3 space-y-1 flex flex-col items-center justify-evenly z-10">
            <Link
              style={{ animation: menuOpen && `750ms fadeIn 100ms forwards` }}
              onClick={toggleMenu}
              to="/"
              className="text-black font-bold text-center block px-3 py-2 rounded-md text-base uppercase opacity-0 transform translate-y-100"
              aria-current="page"
            >
              <div className="w-max group">
                <span> Home </span>
                <div className="h-1 bg-white transform scale-x-0 origin-left transition duration-300 group-hover:scale-x-100"></div>
              </div>
            </Link>
            <Link
              style={{ animation: menuOpen && `750ms fadeIn 200ms forwards` }}
              onClick={toggleMenu}
              to="/shop"
              className="text-black font-bold text-center block px-3 py-2 rounded-md text-base uppercase opacity-0 transform translate-y-100"
              aria-current="page"
            >
              <div className="w-max group">
                <span> store </span>
                <div className="h-1 bg-white transform scale-x-0 origin-left transition duration-300 group-hover:scale-x-100"></div>
              </div>
            </Link>

            <Link
              style={{ animation: menuOpen && `750ms fadeIn 300ms forwards` }}
              onClick={toggleMenu}
              to="/categories/limited"
              className="text-black font-bold text-center block px-3 py-2 rounded-md text-base uppercase opacity-0 transform translate-y-100"
            >
              <div className="w-max group">
                <span> limited </span>
                <div className="h-1 bg-white transform scale-x-0 origin-left transition duration-300 group-hover:scale-x-100"></div>
              </div>
            </Link>
            <button
              style={{ animation: menuOpen && `750ms fadeIn 400ms forwards` }}
              onClick={toggleMenuCategories}
              className="text-center outline-none px-3 py-2 rounded-md text-base uppercase opacity-0 transform translate-y-100"
            >
              <div className="w-max group">
                <span className="text-black font-bold"> categories </span>
                <div className="h-1 bg-white transform scale-x-0 origin-left transition duration-300 group-hover:scale-x-100"></div>
              </div>
            </button>

            <Link
              style={{ animation: menuOpen && `750ms fadeIn 500ms forwards` }}
              onClick={toggleMenu}
              to="/promotional"
              className="text-black font-bold text-center block px-3 py-2 rounded-md text-base uppercase opacity-0 transform translate-y-100"
            >
              <div className="w-max group">
                <span> promotional </span>
                <div className="h-1 bg-white transform scale-x-0 origin-left transition duration-300 group-hover:scale-x-100"></div>
              </div>
            </Link>
            {pathname !== "/cart" && (
              <Link
                style={{ animation: menuOpen && `750ms fadeIn 600ms forwards` }}
                onClick={toggleMenu}
                to="/cart"
                className="text-black font-bold text-center block px-3 py-2 rounded-md text-base uppercase opacity-0 transform translate-y-100"
              >
                <div className="w-max group">
                  <span> cart </span>
                  <div className="h-1 bg-white transform scale-x-0 origin-left transition duration-300 group-hover:scale-x-100"></div>
                </div>
              </Link>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
