import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React from "react";

const CheckoutForm = () => {
  // STRIPE CONFIG //
  const stripe = useStripe();
  const elements = useElements();

  /////////////

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) return console.log("no stripe or no elements, sorry😭");

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: "http://localhost:3001/success",
      },
    });
  };

  return (
    <div
      id="payment-form"
      className="w-screen bg-black flex items-center justify-center md:justify-start"
      style={{ height: "calc(100vh - 64px)" }}
    >
      <form
        onSubmit={handleSubmit}
        className="h-1/2 w-10/12 md:w-3/5 flex flex-col items-start justify-center md:ml-10 border border border-red-500"
      >
        {/* <CardNumberElement />
      <CardExpiryElement />
      <CardCvcElement /> */}
        <CardElement className="w-3/4 h-8 bg-white text-black border border-2 border-red-500 p-0" />
        <button type="submit" disabled={!stripe || !elements} className="w-48 border border-white text-white">
          Pay now
        </button>
      </form>
    </div>
  );
};

export default CheckoutForm;
