import { Elements, PaymentElement } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
// fetch api key from backend for loadStripe
let stripePromise;
(async () => {
  const { key } = await fetch("http://localhost:4242/").then((res) => res.json());
  stripePromise = loadStripe(key);
})();

const CheckoutForm = ({ formOpen }) => {
  const [clientSecret, setClientSecret] = useState("");
  const items = useSelector((state) => state?.cart.items);

  useEffect(() => {
    fetchPaymentIntentSecret();
    console.log(clientSecret);
  }, []);

  const fetchPaymentIntentSecret = async () => {
    const request = {
      method: "post",
    };
    const paymentIntentUrl = "http://localhost:4242/payment-intent-secret";
    const response = await fetch(paymentIntentUrl, request);
    const data = await response.json();
    setClientSecret(data.clientSecret);
  };

  const appearance = {
    theme: "night", // flat, night, stripe, none
  };

  const options = {
    clientSecret,
    appearance,
  };
  return (
    clientSecret &&
    items.length !== 0 &&
    formOpen && (
      <Elements stripe={stripePromise} options={options}>
        <form
          style={{ zIndex: "110000" }}
          action="post"
          className="h-screen w-screen bg-gray-900 flex flex-col items-center md:items-start justify-evenly md:justify-start md:pl-8"
        >
          <h1 className="w-full text-white border">PAYMENT</h1>
          <div className="h-1/2 w-11/12 md:w-1/3 bg-gray-900 flex flex-col items-center justify-center border border-white">
            <PaymentElement />
          </div>
          <button>pay now</button>
        </form>
      </Elements>
    )
  );
};

export default CheckoutForm;
