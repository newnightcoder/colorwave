import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { withRouter } from "react-router-dom";
import { CartContainer, CartRecap, CheckoutForm, Form } from "../Components";
import { addToCart, deleteCart, deleteItem, removeOne, saveOrder } from "../Redux/Actions/cart.action";
import "../Styles/_variables.css";
import useWindowSize from "../utils/useWindowSize";

let stripePromise;

(async () => {
  const { key } = await fetch("http://localhost:4242/").then((res) => res.json());
  stripePromise = await loadStripe(key);
})();

const CartPage = () => {
  const dispatch = useDispatch();
  const { height, width } = useWindowSize();
  const items = useSelector((state) => state?.cart.items);
  const form = document.querySelector("#userInfo-form");
  const [formOpen, setFormOpen] = useState(false);
  const [formPosition, setFormPosition] = useState(0);
  const checkoutForm = document.querySelector("#payment-form");
  const [checkoutFormOpen, setCheckoutFormOpen] = useState(false);
  const [checkoutFormPosition, setCheckoutFormPosition] = useState(0);
  const [userOrder, setUserOrder] = useState({});
  const [clientSecret, setClientSecret] = useState("");

  // FORM VALIDATION variables
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
  const [errorCheckbox, setErrorCheckbox] = useState("");
  const [formChecked, setFormChecked] = useState(false);
  const [formValidated, setFormValidated] = useState(false);
  const emailRegex =
    /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
  const zipRegex = /^[0-9]{5}$/;
  const phoneRegex = /^[0-9]{10}$/;
  let errorFirstNameRef = "";
  let errorLastNameRef = "";
  let errorEmailRef = "";
  let errorEmailRegexRef = "";
  let errorPhoneRef = "";
  let errorPhoneRegexRef = "";
  let errorAddressRef = "";

  const totalPrice =
    items.length !== 0 &&
    items.reduce((acc, curr) => {
      return acc + curr.product.price.raw * curr.quantity;
    }, 0);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (formOpen) {
      setFormPosition(form?.getBoundingClientRect().y - 64);
      window.scrollTo(0, formPosition);
    }
  }, [formOpen, formPosition]);

  const fetchPaymentIntentSecret = async () => {
    const request = {
      method: "post",
    };
    const paymentIntentUrl = "http://localhost:4242/payment-intent-secret";
    const response = await fetch(paymentIntentUrl, request);
    const data = await response.json();
    setClientSecret(data.clientSecret);
  };

  useEffect(() => {
    fetchPaymentIntentSecret();
    console.log(clientSecret);
  }, []);

  const createOrder = () => {
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
    console.log("userOrder", order);
    dispatch(saveOrder(order));
  };

  useEffect(() => {
    if (formValidated) {
      alert("form validated", formValidated);
      createOrder();
    }
  }, [formValidated]);

  const appearance = {
    theme: "night", // flat, night, stripe, none
  };

  const options = {
    clientSecret,
    appearance,
  };

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

  const checkFormErrors = () => {
    const errorMsg = {
      firstName: "Please enter your first name",
      lastName: "Please enter your last name",
      email: "Please enter your email",
      emailRegex: "Please enter a valid email",
      address: "Please enter your address",
      phoneNumber: "Please enter your phone number",
      phoneNumberRegex: "Please enter a valid phone number",
    };

    if (inputFirstName.length === 0) {
      setErrorFirstName(errorMsg.firstName);
      errorFirstNameRef = errorMsg.firstName;
    } else {
      setErrorFirstName("");
      errorFirstNameRef = "";
    }
    if (inputLastName.length === 0) {
      setErrorLastName(errorMsg.lastName);
      errorLastNameRef = errorMsg.lastName;
    } else {
      setErrorLastName("");
      errorLastNameRef = "";
    }
    if (inputEmail.length === 0) {
      setErrorEmail(errorMsg.email);
      errorEmailRef = errorMsg.email;
    } else {
      setErrorEmail("");
      errorEmailRef = "";
    }
    if (!inputEmail.match(emailRegex)) {
      setErrorEmail(errorMsg.emailRegex);
      errorEmailRegexRef = errorMsg.emailRegex;
    } else {
      setErrorEmail("");
      errorEmailRegexRef = "";
    }
    if (inputAddress.length === 0) {
      setErrorAddress(errorMsg.address);
      errorAddressRef = errorMsg.address;
    } else {
      setErrorAddress("");
      errorAddressRef = "";
    }
    if (inputPhone.length === 0) {
      setErrorPhone(errorMsg.phoneNumber);
      errorPhoneRef = errorMsg.phoneNumber;
    } else {
      setErrorPhone("");
      errorPhoneRef = "";
    }
    if (!inputPhone.match(phoneRegex)) {
      setErrorPhone(errorMsg.phoneNumberRegex);
      errorPhoneRegexRef = errorMsg.phoneNumberRegex;
    } else {
      setErrorPhone("");
      errorPhoneRegexRef = "";
    }
    return setFormChecked(true);
    // if (inputCheckbox === ) return setErrorCheckbox("You must accept the terms and conditions to confirm your order.");
  };

  const validateForm = () => {
    if (
      errorFirstNameRef.length === 0 &&
      errorLastNameRef.length === 0 &&
      errorAddressRef.length === 0 &&
      errorEmailRef.length === 0 &&
      errorPhoneRef.length === 0 &&
      errorPhoneRegexRef.length === 0
    )
      setFormValidated(true);
  };

  const handleForm = (e) => {
    e.preventDefault();
    checkFormErrors();
    validateForm();
  };

  return (
    clientSecret && (
      <Elements stripe={stripePromise} options={options}>
        {/* WHOLE PAGE */}
        <div
          style={{ height: "calc(100vh - 64px)" }}
          className="page relative w-screen overflow-y-hidden font-cabin flex flex-col items-center justify-center bg-sound border-4 border-blue-400"
        >
          {/*  PAGE CONTAINER */}
          <div
            style={{ contain: "content" }}
            className="page-container h-full w-full relative max-w-screen-2xl overflow-y-hidden flex flex-col items-start justify-start bg-sound border-4 border-red-500"
          >
            {items.length !== 0 && (
              <CartRecap totalPrice={totalPrice} handleForm={handleForm} toggleForm={toggleForm} formOpen={formOpen} />
            )}
            <div
              className="cart-content-wrapper h-max w-full transition-transform duration-300"
              style={{
                transform:
                  formOpen && width < 768
                    ? "translateY(calc(-100vh + 172px))"
                    : formOpen && width > 768
                    ? "translateY(calc(-100vh + 44px))"
                    : formValidated && "translateY(-200vh)",
              }}
            >
              <CartContainer
                handleRemoveOne={handleRemoveOne}
                handleAddToCart={handleAddToCart}
                handleDeleteItem={handleDeleteItem}
                handleDeleteCart={handleDeleteCart}
                formOpen={formOpen}
              />
              {/* {formOpen && ( */}
              <Form
                formOpen={formOpen}
                inputFirstName={inputFirstName}
                inputLastName={inputLastName}
                inputEmail={inputEmail}
                inputPhone={inputPhone}
                inputCheckbox={inputCheckbox}
                handleInput={handleInput}
                totalPrice={totalPrice}
                errorAddress={errorAddress}
                errorCheckbox={errorCheckbox}
                errorEmail={errorEmail}
                errorFirstName={errorFirstName}
                errorLastName={errorLastName}
                errorPhone={errorPhone}
              />
              {/* )} */}
              {formValidated && <CheckoutForm />}
            </div>
          </div>
        </div>
      </Elements>
    )
  );
};

export default withRouter(CartPage);
