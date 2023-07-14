import { useCallback, useState } from "react";
import AnimateHeight from "react-animate-height";
import { ChevronDoubleLeft, CreditCardFill, EyeFill, PlayFill, Trash } from "react-bootstrap-icons";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { MobileRecap } from ".";
import useWindowSize from "../utils/useWindowSize";

const CartRecap = ({ formValidated, formOpen, toggleForm, totalPrice, handleDeleteCart, isLoading }) => {
  const items = useSelector((state) => state?.cart.items);
  const { width } = useWindowSize();
  const [itemsDivHeight, setItemsDivHeight] = useState(0);
  const [btnContent, setBtnContent] = useState("View");
  const [openMobileRecap, setOpenMobileRecap] = useState(false);
  const cloudinaryCdnPrefix = "https://my-cloud-cdn.mo.cloudinary.net/colorwave";
  const commercejsCdn = "https://cdn.chec.io";

  const toggleCartInRecap = useCallback(() => {
    setItemsDivHeight(itemsDivHeight === 0 ? "auto" : 0);
    setTimeout(() => {
      setBtnContent(btnContent === "View" ? "Hide" : "View");
    }, 250);
  }, [setItemsDivHeight, setBtnContent, btnContent, itemsDivHeight]);

  const toggleMobileRecap = () => {
    setOpenMobileRecap((prevState) => !prevState);
  };

  const totalItems =
    items.length !== 0 &&
    items.reduce((acc, curr) => {
      return acc + curr.quantity;
    }, 0);

  return (
    <>
      <div
        style={{
          display: formValidated && width < 768 ? "none" : "flex",
          minWidth: width > 768 ? "300px" : "",
          maxWidth: width > 768 ? "500px" : "",
          zIndex: 2000,
        }}
        className="recap relative h-full w-full md:h-5/6 md:w-2/3 bg-black md:bg-white text-white md:text-gray-900 font-cabin overflow-hidden md:border md:border-black"
      >
        <div className="scroll-container md:px-0 md:max-h-700 md:my-auto h-full w-full flex flex-col items-center justify-start md:flex-none md:grid md:grid-rows-recap md:grid-cols-1 space-y-1.5 md:space-y-0 overflow-x-hidden overflow-y-hidden md:overflow-y-auto scrollbar-cart">
          {/* row 1 */}
          <div className="hidden h-full w-full md:flex flex-col items-center justify-center relative py-4">
            <div className="w-max">
              <span className="text-lg text-center uppercase px-5 pb-px border-b border-black">Your order</span>
            </div>
          </div>
          {/* row 2 */}
          <div className="flex h-max w-full items-center justify-center">
            {width > 768 && !formOpen && (
              <button
                type="button"
                className="h-max w-max bg-white group bg-white transition-colors duration-300 hover:bg-gray-300"
                onClick={handleDeleteCart}
              >
                <span className="w-max h-full flex items-center justify-center space-x-2 text-sm uppercase text-black underline py-1 px-2 group">
                  <span className="w-max">delete cart</span>
                  <Trash size={16} />
                </span>
              </button>
            )}
          </div>
          {/* row 3 */}
          <div className="h-max md:min-h-68">
            {formOpen && (
              <div className="h-full w-full">
                <div className="h-max w-full flex justify-center">
                  <button
                    className="w-full h-max md:h-12 text-sm md:py-2 relative"
                    onClick={width < 768 ? toggleMobileRecap : toggleCartInRecap}
                  >
                    <span className="h-full w-full flex items-center justify-center space-x-1">
                      <EyeFill size={16} className="md:hidden text-yellow-300" />
                      <span className="uppercase italic font-bold md:underline whitespace-nowrap text-yellow-300 md:text-black">
                        {btnContent} items in the cart
                      </span>
                      <PlayFill
                        size={16}
                        className="hidden md:block transition-transform duration-300"
                        style={{
                          color: "rgb(17 24 39)",
                          // color: "rgb(59 130 246)
                          transform: itemsDivHeight !== 0 && "rotate(90deg)",
                        }}
                      />
                    </span>
                  </button>
                </div>
                <div className="hidden w-full md:flex justify-center h-max max-h-56 overflow-hidden">
                  <div
                    className={`w-11/12 h-max max-h-56 overflow-y-auto overflow-x-hidden scrollbar-description transition-colors duration-300  ${
                      itemsDivHeight === "auto" ? "border border-yellow-300" : "border border-transparent"
                    }`}
                  >
                    <div className="w-full">
                      <AnimateHeight duration={500} height={itemsDivHeight} className="">
                        <div className="w-full h-auto md:flex flex-col items-end justify-start space-y-1">
                          {items.map((item, i) => (
                            <div
                              key={item.product.id}
                              className="h-20 w-full flex items-center justify-left bg-white border border-gray-100"
                            >
                              <div
                                className="h-20 w-4/12 border-t border-r border-b border-gray-100"
                                style={{
                                  background: `${
                                    item.product.categories.find((x) => x.name === "limited") ? "black" : "white"
                                  } url("${item.product.media.source.replace(
                                    commercejsCdn,
                                    cloudinaryCdnPrefix
                                  )}") no-repeat center/contain`,
                                }}
                              ></div>
                              <div className="w-4/12 text-left text-sm pl-2 whitespace-nowrap truncate">
                                {item.product.name}
                              </div>
                              <div className="w-4/12 text-right text-sm pr-2">
                                {item.product.price.formatted}&nbsp;€
                              </div>
                            </div>
                          ))}
                        </div>
                      </AnimateHeight>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
          {/* row 4 */}
          <div className="h-max md:h-full w-full md:w-10/12 md:mx-auto md:max-w-175 flex flex-col items-center justify-center">
            <div className="hidden md:w-full md:flex flex-col items-center justify-center space-y-0">
              <div className="w-full flex items-center justify-between py-4 border-b border-gray-200">
                <span>Total items:</span>
                <span>{totalItems}</span>
              </div>
              <div className="w-full flex items-center justify-between py-4">
                <span>Delivery fees:</span>
                <span className="italic">free</span>
              </div>
            </div>
            <div className="h-max w-max md:w-full font-bold flex items-center justify-between md:pt-6 md:px-1 border-b border-white md:border-b-0 md:border-t md:border-yellow-300">
              <div className="uppercase h-max w-4/5 whitespace-nowrap">
                TOTAL&nbsp;
                <span className="lowercase italic">
                  &#40;<span className="uppercase">VAT</span> included&#41;
                </span>
                &nbsp;&#58;
              </div>
              <span className="w-1/5 text-right whitespace-nowrap">&nbsp;{totalPrice}&nbsp;€</span>
            </div>
          </div>
          {/* row 5  */}
          <div className="h-max md:h-full md:py-4 flex flex-col items-center justify-center md:space-y-0">
            {!formOpen && (
              <div className="md:h-full md:flex flex-col items-center justify-evenly md:space-y-4">
                <Link
                  to="/"
                  className="hidden w-48 md:flex items-center justify-center space-x-2 text-sm  text-white py-2 shadow-md transition-shadow duration-100 hover:shadow-none bg-blue-400  uppercase outline-none"
                >
                  <ChevronDoubleLeft size={16} /> <span>Continue shopping</span>
                </Link>
                <button
                  type="button"
                  tabIndex="0"
                  className="h-max w-48 text-sm md:text-base uppercase font-bold text-black bg-yellow-300 shadow-md hover:shadow-none transition-shadow duration-300 py-2"
                  onClick={toggleForm}
                >
                  <span className="flex items-center justify-center space-x-2 ">
                    <span>checkout</span>
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
                  </span>
                </button>
              </div>
            )}
            {formOpen && !formValidated && (
              <button
                type="submit"
                form="form-delivery"
                tabIndex="0"
                className="h-max w-48 text-sm md:text-base uppercase font-bold text-black bg-yellow-300 shadow-md hover:shadow-none transition-shadow duration-300 py-2"
              >
                <span className="flex items-center justify-center">
                  <span>next</span>
                </span>
              </button>
            )}
            {formValidated && (
              <button
                className="h-max w-48 text-sm md:text-base uppercase font-bold text-white shadow-md hover:shadow-none transition-shadow duration-300 py-2 bg-blue-500"
                type="submit"
                form="form-payment"
              >
                <span className="h-full w-full flex items-center justify-center  ">
                  {isLoading ? (
                    <span className="flex items-center justify-center space-x-2">
                      <svg
                        className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      <span className="text-white">processing...</span>
                    </span>
                  ) : (
                    <span className="h-full flex items-center justify-center space-x-2">
                      <span>payment</span>
                      <CreditCardFill size={20} color="#fff" className="transform -translate-y-px" />
                    </span>
                  )}
                </span>
              </button>
            )}
          </div>
        </div>
      </div>
      <MobileRecap openMobileRecap={openMobileRecap} toggleMobileRecap={toggleMobileRecap} />
    </>
  );
};

export default CartRecap;
