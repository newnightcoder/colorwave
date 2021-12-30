import { Elements, PaymentElement } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React, { useEffect, useState } from "react";
const stripePromise = loadStripe(
  "pk_test_51KAs83AQM9VhttYapgW5CE3MQtJKxWS1I8dHN8zVnq1UdGBjL5mCAjaduDKhJMXRy7AF4x0o8J7sbHogLGaAiBvR00Ql1cozQS"
);
const Checkout = () => {
  const [clientSecret, setClientSecret] = useState("");

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
    theme: "night",
  };

  const options = {
    clientSecret,
    appearance,
  };
  return (
    clientSecret && (
      <Elements stripe={stripePromise} options={options}>
        <PaymentElement />
      </Elements>
    )
  );
};

export default Checkout;
