import { PaymentElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React from "react";

const CheckoutForm = ({ formOpen }) => {
  const elements = useElements();
  const stripe = useStripe();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: "http://localhost:3001/success",
      },
      // Uncomment below if you only want redirect for redirect-based payments
      // redirect: 'if_required',
    });
  };

  return (
    formOpen && (
      <form
        style={{ zIndex: "110000" }}
        action="post"
        className="h-screen w-screen bg-black text-white flex flex-col items-center md:items-start justify-evenly md:justify-start md:pl-8"
        onSubmit={handleSubmit}
      >
        <h1 className="w-full border">PAYMENT</h1>
        <div className="h-1/2 w-11/12 md:w-1/3  flex flex-col items-center justify-center border border-white">
          <PaymentElement />
        </div>
        <button>pay now</button>
      </form>
    )
  );
};

export default CheckoutForm;
