import React, { useEffect, useState } from "react";
import { ChevronDoubleLeft, Trash } from "react-bootstrap-icons";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Form } from "../Components";
import { addToCart, deleteCart, deleteItem, removeOne } from "../Redux/Actions/cart.action";
// import "../Styles/cart.css";
import "../Styles/_variables.css";

const CartPage = () => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state?.cart.items);
  const form = document.querySelector("#form");
  const [formOpen, setFormOpen] = useState(false);
  const [formPosition, setFormPosition] = useState(0);
  // form validation variables
  const [inputFirstName, setInputFirstName] = useState("");
  const [inputLastName, setInputLastName] = useState("");
  const [inputEmail, setInputEmail] = useState("");
  const [inputAddress, setInputAddress] = useState("");
  const [inputPhone, setInputPhone] = useState("");
  const [inputCheckbox, setInputCheckbox] = useState(false);
  const [errorFirstName, setErrorFirstName] = useState("");
  const [errorLastName, setErrorLastName] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  const [errorAddress, setErrorAddress] = useState("");
  const [errorPhone, setErrorPhone] = useState("");
  const [errorCheckbox, setErrorCheckbox] = useState(false);
  const [formValidated, setFormValidated] = useState(false);
  const emailRegex =
    /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
  const zipRegex = /^[0-9]{5}$/;
  const phoneRegex = /^[0-9]{10}$/;
  //
  const [userOrder, setUserOrder] = useState({});

  useEffect(() => {
    window.scrollTo(0, 0);
    if (formOpen) {
      setFormPosition(form?.getBoundingClientRect().y);
      window.scrollTo(0, formPosition);
    }
  }, [formOpen, formPosition]);

  const handleAddToCart = (id) => {
    items.forEach((item) => {
      if (item.product.id === id) {
        dispatch(addToCart(item.product, item.quantity));
      }
    });
  };

  const handleRemoveOne = (id) => {
    items.forEach((item) => {
      if (item.product.id === id) {
        dispatch(removeOne(item.product, item.quantity));
      }
    });
  };

  const handleDeleteItem = (id) => {
    items.forEach((item) => {
      if (item.product.id === id) {
        dispatch(deleteItem(item.product));
      }
    });
  };
  const handleDeleteCart = () => {
    dispatch(deleteCart());
  };

  const totalPrice =
    items.length !== 0 &&
    items.reduce((acc, curr) => {
      return acc + curr.product.price.raw * curr.quantity;
    }, 0);

  const toggleForm = () => {
    setFormOpen((formOpen) => !formOpen);
  };

  const handleInput = (e) => {
    if (e.target === form.querySelector("#firstName")) return setInputFirstName(e.currentTarget.value);
    if (e.target === form.querySelector("#lastName")) return setInputLastName(e.currentTarget.value);
    if (e.target === form.querySelector("#email")) return setInputEmail(e.currentTarget.value);
    if (e.target === form.querySelector("#address")) return setInputAddress(e.currentTarget.value);
    if (e.target === form.querySelector("#phone")) return setInputPhone(e.currentTarget.value);
  };

  const validateForm = (e) => {
    e.preventDefault();
    if (inputFirstName.length === 0) return setErrorFirstName("Please enter your first name");
    if (inputLastName.length === 0) return setErrorLastName("Please enter your last name");
    if (inputEmail.length === 0) return setErrorEmail("Please enter a valid email");
    if (!inputEmail.match(emailRegex)) return setErrorEmail("Please enter a valid email");
    if (inputAddress.length === 0) return setErrorAddress("Please enter your address");
    if (inputPhone.length === 0) return setErrorPhone("Please enter your phone number");
    if (!inputPhone.match(phoneRegex)) return setErrorPhone("Please enter a valid phone number");
    // if (inputCheckbox === ) return setErrorCheckbox("You must accept the terms and conditions to confirm your order.");
    return saveOrder();
  };

  const saveOrder = () => {
    let order = {
      userFirstName: inputFirstName,
      userLastName: inputLastName,
      userEmail: inputEmail,
      userAddress: inputAddress,
      userPhone: inputPhone,
      userOrder: {
        items: items,
        totalPrice,
      },
    };
    return setUserOrder(order);
  };

  return (
    <div className="w-screen overflow-y-auto font-cabin">
      <div className="cart-container h-full w-full relative flex items-center justify-start bg-sound">
        <div
          className="items-list relative flex flex-col items-center justify-center gap-8 text-gray-900 pt-24 pb-32 px-1 md:px-8"
          style={{ width: items.length === 0 ? "100%" : "66.6%", minHeight: "calc(100vh - 64px)" }}
        >
          {items.length !== 0 && (
            <div className="w-full md:w-2/3 fixed left-0 top-16 flex items-center justify-between bg-sound py-6 px-1 md:pl-8 md:pr-20">
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
          )}
          {items.length !== 0 ? (
            items.map((item, i) => (
              <div
                key={i}
                className="item h-24 w-full md:h-48 md:w-2/3 flex items-center justify-start gap-1 md:gap-6 border-b border-gray-300 px-1 md:px-0"
              >
                <div
                  className="image h-24 w-full md:h-48 md:w-80"
                  style={{
                    backgroundColor: item.product.categories.find((x) => x.name === "limited") ? "black" : "white",
                  }}
                >
                  <img src={item.product.media.source} alt={item.product.name} className="object-cover h-full w-full" />
                </div>
                <div className="details h-full w-full md:w-1/3 flex items-center justify-center gap-2">
                  <div className="h-full w-full md:w-1/3 flex flex-col items-start justify-center gap-1 md:gap-2 pl-1 md:pl-6">
                    <div className="uppercase whitespace-nowrap">{item.product.name}</div>
                    <div>{item.product.price.formatted} €</div>
                    <div className="w-max flex items-center justify-center gap-1">
                      <div className=" w-max flex items-center justify-between gap-1">
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
                <div className="h-full flex items-center justify-center">
                  <button
                    onClick={() => handleDeleteItem(item.product.id)}
                    className="h-10 w-10 rounded-full flex items-center justify-center bg-transparent transition-color duration-300 hover:bg-gray-300"
                  >
                    <Trash className="pointer-events-none" size={22} />
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div className="w-screen flex flex-col items-center justify-center">YOUR CART IS EMPTY</div>
          )}
        </div>
        {items.length !== 0 && (
          <div className="recap h-20 md:h-full w-full md:w-1/3 fixed bottom-0 md:right-0 md:top-0 z-50 flex flex-col items-center justify-center gap-2 bg-white p-16">
            <>
              <div className="w-max flex items-center justify-center text-gray-900 pt-2 border-b border-black px-8">
                <span>TOTAL&nbsp;:</span> <span className="w-12 text-right">{totalPrice}</span>&nbsp;
                <span>€</span>
              </div>
              <button
                type="submit"
                className="w-48 flex items-center justify-center gap-2 text-sm font-bold uppercase text-white bg-black border border-black py-1 mt-4"
                onClick={!formOpen ? toggleForm : validateForm}
              >
                {!formOpen ? <span>next</span> : <span>order&nbsp;&nbsp;now</span>}
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
            </>
          </div>
        )}
      </div>
      {formOpen && (
        <Form
          inputFirstName={inputFirstName}
          inputLastName={inputLastName}
          inputEmail={inputEmail}
          inputPhone={inputPhone}
          inputCheckbox={inputCheckbox}
          handleInput={handleInput}
          totalPrice={totalPrice}
        />
      )}
    </div>
  );
};

export default CartPage;
