import { PaymentElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React from "react";

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (elements == null) return;

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: "http://localhost:3001/success",
      },
    });
  };

  return (
    <form onSubmit={handleSubmit} className="h-full w-1/2 border border-red-500">
      <PaymentElement />
      <button type="submit" disabled={!stripe || !elements}>
        Pay now
      </button>
    </form>
  );
};

export default CheckoutForm;
