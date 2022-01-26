import { PaymentElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { PaymentBanner } from ".";
import amex from "../Assets/cards/amex.png";
import mastercard from "../Assets/cards/mastercard.png";
import visa from "../Assets/cards/visa.png";
import { validatePayment } from "../Redux/Actions/cart.action";
import useWindowSize from "../utils/useWindowSize";

const CheckoutForm = ({ formValidated }) => {
  const elements = useElements();
  const stripe = useStripe();
  const userOrder = useSelector((state) => state?.cart.userOrder);
  const dispatch = useDispatch();
  const { height, width } = useWindowSize();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(userOrder);
    dispatch(validatePayment());
    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: "http://localhost:3001/success",
      },
    });
    if (error) return;
  };

  return (
    <div
      style={{
        // height: "calc(100vh - 64px)",
        opacity: formValidated ? "1" : "0",
        zIndex: formValidated ? 9999 : -1,
      }}
      className="h-full w-full bg-sound text-gray-900 fixed top-0 left-0 flex flex-col items-center justify-center md:justify-start transition duration-300 border-4 border-red-500"
    >
      <div
        style={{ height: width > 768 ? "calc(100vh - 226px)" : "calc(100vh - 64px)" }}
        className="w-full flex flex-col items-center justify-center overflow-auto md:pt-8 2xl:pt-0 gap-4 2xl:gap-8"
      >
        <div className="hidden md:block w-max relative px-3 pt-4 2xl:pt-8">
          <h2 className="font-bold text-xl md:text-2xl">PAYMENT</h2>
          <span className="h-px w-full absolute inset-x-0 mx-auto left-0 bottom-0.5 md:bottom-1 bg-blue-500"></span>
        </div>
        <form
          action="post"
          className="h-max w-max flex flex-col items-center justify-center gap-4"
          onSubmit={handleSubmit}
        >
          <div className="h-max w-11/12 md:w-full bg-white relative flex flex-col items-center justify-center pt-8 pb-24 md:pb-32 px-10 rounded-sm">
            <PaymentElement />
            <button className="w-9/12 absolute bottom-5 py-2 md:py-3 uppercase font-bold text-gray-900 font-bold bg-blue-400 rounded-sm mb-2 md:mb-4">
              pay now
            </button>
          </div>
        </form>
      </div>
      <PaymentBanner />
      <div className="h-max w-full text-sm text-white fixed top-0 bg-gray-500 flex flex-col items-start justify-center gap-2 z-40 px-4 py-2">
        <h3 className="uppercase italic underline font-bold">
          Please use one of the following credit card numbers to proceed to payment :{" "}
        </h3>
        <div className="h-full w-full flex flex-col md:flex-row items-start justify-center gap-1">
          <div className="flex items-center justify-center gap-2">
            <div className="h-6 w-8 border border-white rounded overflow-hidden">
              <img src={visa} alt="" className="object-cover h-full w-full overflow-hidden" />
            </div>
            <span>4242 4242 4242 4242</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <div className="h-6 w-8 border border-white rounded overflow-hidden">
              <img src={mastercard} alt="" className="object-cover h-full w-full" />
            </div>
            <span>5555 5555 5555 4444</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <div className="h-6 w-8 border border-white rounded overflow-hidden">
              <img src={amex} alt="" className="object-cover h-full w-full" />
            </div>
            <span>3782 822463 10005</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutForm;
