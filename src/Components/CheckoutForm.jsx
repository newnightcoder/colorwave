import { PaymentElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { validatePayment } from "../Redux/Actions/cart.action";

const CheckoutForm = ({ formValidated }) => {
  const elements = useElements();
  const stripe = useStripe();
  const userOrder = useSelector((state) => state?.cart.userOrder);
  const dispatch = useDispatch();

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
        height: "calc(100vh - 64px)",
        opacity: formValidated ? "1" : "0",
        zIndex: formValidated ? 9999 : -1,
      }}
      className="w-full bg-black text-white fixed top-0 left-0 flex flex-col items-center justify-start gap-16 md:gap-10 xl:gap-16 transition duration-300 "
    >
      <h1 className="w-full text-center py-8 border">PAYMENT</h1>
      <form
        action="post"
        className="h-max w-max flex flex-col items-center justify-center gap-4"
        onSubmit={handleSubmit}
      >
        <div className="h-max w-11/12 md:w-full bg-white relative flex flex-col items-center justify-center border border-white pt-8 pb-24 md:pb-32 px-10 rounded-sm">
          <PaymentElement />
          <button className="w-9/12 absolute bottom-5 py-2 md:py-3 uppercase text-gray-900 font-bold bg-blue-400 rounded-sm mb-2 md:mb-4">
            pay now
          </button>
        </div>
      </form>
    </div>
  );
};

export default CheckoutForm;
