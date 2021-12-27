import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./App";
import "./index.css";
import { getShopData } from "./Redux/Actions/shop.action";
import store from "./Redux/store";
(async () => {
  const stripePromise = await loadStripe(`${process.env.STRIPE_PUBLIC_KEY}`);
  store.dispatch(getShopData);

  ReactDOM.render(
    <Provider store={store}>
      <React.StrictMode>
        <Elements stripe={stripePromise}>
          <App />
        </Elements>
      </React.StrictMode>
    </Provider>,
    document.getElementById("root")
  );
})();
