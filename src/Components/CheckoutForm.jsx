import { PaymentElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React from "react";
import { useSelector } from "react-redux";

const CheckoutForm = () => {
  const elements = useElements();
  const stripe = useStripe();
  const userOrder = useSelector((state) => state?.cart.userOrder);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(userOrder);
    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: "http://localhost:3001/success",
      },
    });
    if (error) return;
  };

  return (
    <form
      action="post"
      className="h-screen w-screen bg-black text-white  flex-col items-center md:items-start justify-evenly md:justify-start md:pl-8"
      onSubmit={handleSubmit}
    >
      <h1 className="w-full border">PAYMENT</h1>
      <div className="h-1/2 w-11/12 md:w-1/3  flex flex-col items-center justify-center border border-white">
        <PaymentElement />
      </div>
      <button>pay now</button>
    </form>
  );
};

export default CheckoutForm;
