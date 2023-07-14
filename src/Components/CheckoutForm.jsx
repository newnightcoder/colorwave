import { PaymentElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useState } from "react";
import { use100vh } from "react-div-100vh";
import { CardInfo, PaymentBanner } from ".";
import useWindowSize from "../utils/useWindowSize";

const CheckoutForm = ({ formValidated, isLoading, setIsLoading }) => {
  const elements = useElements();
  const stripe = useStripe();
  const { width } = useWindowSize();
  const responsiveHeight = use100vh();
  const [message, setMessage] = useState("");
  // const HEROKU_SUCCESS_URL = "https://colorwave-shop.netlify.app/success";
  const CYCLIC_SUCCESS_URL = "https://ruby-comfortable-oyster.cyclic.app/success";

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: CYCLIC_SUCCESS_URL,
        // return_url: "http://localhost:4242/success",
      },
    });
    if (error) return setIsLoading(false);
  };

  return (
    <div
      style={{
        height: width < 768 ? responsiveHeight - 64 : "calc(100vh - 192px)",
        visibility: formValidated ? "visible" : "hidden",
      }}
      className="w-full md:w-3/5 md:px-2 flex flex-col items-start justify-center md:flex-row md:items-center md:bg-white"
    >
      <div className="relative w-full md:w-3/4  md:max-w-5xl h-full flex flex-col items-center justify-start md:flex-row md:justify-center">
        <div
          style={{ height: width < 768 ? responsiveHeight - 64 : "83.33%" }}
          className="container w-full relative flex flex-col items-center justify-start md:justify-center bg-white md:bg-white"
        >
          {formValidated && width < 768 && <PaymentBanner />}

          <span className="text-black">{message}</span>
          <div className="h-full w-full overflow-hidden flex flex-col items-center justify-start md:justify-center">
            <form
              id="form-payment"
              action="post"
              className="relative h-full md:h-max w-full md:w-full flex flex-col items-center justify-start overflow-hidden px-3 md:px-0"
              onSubmit={handleSubmit}
            >
              <div
                style={{ height: width < 768 ? `calc(${responsiveHeight}px - 20.25rem)` : "100%" }}
                className="w-full flex justify-center overflow-x-hidden overflow-y-auto scrollbar-cart"
              >
                <div className="h-max w-full my-auto flex flex-col items-center justify-start">
                  <CardInfo formValidated={formValidated} />
                  <div className="h-max w-full my-auto flex items-start justify-center space-y-4 md:space-y-0 md:px-2">
                    <div className="h-auto w-full my-auto flex flex-col items-center justify-center space-y-8 md:space-y-0 py-8 md:py-0 md:pt-2 px-2 md:px-4">
                      <PaymentElement className="h-auto w-full md:pt-2 md:py-8 px-4" />
                      <div className="md:hidden h-16 w-11/12 flex items-center justify-center">
                        <button
                          type="submit"
                          form="form-payment"
                          className="h-full w-full rounded-sm uppercase md:text-lg text-gray-100 bg-blue-500"
                        >
                          <span className="h-full w-full flex items-center justify-center  ">
                            {isLoading ? (
                              <span className="flex items-center justify-center space-x-2">
                                <svg
                                  class="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                >
                                  <circle
                                    class="opacity-25"
                                    cx="12"
                                    cy="12"
                                    r="10"
                                    stroke="currentColor"
                                    strokeWidth="4"
                                  ></circle>
                                  <path
                                    className="opacity-75"
                                    fill="currentColor"
                                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                  ></path>
                                </svg>
                                <span className="text-white">processing...</span>
                              </span>
                            ) : (
                              <span className="h-full flex items-center justify-center">pay now</span>
                            )}
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutForm;
