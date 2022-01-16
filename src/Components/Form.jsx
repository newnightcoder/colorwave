import React from "react";
import { useSelector } from "react-redux";
import "../Styles/form.css";
import "../Styles/_variables.css";
import useWindowSize from "../utils/useWindowSize";

const Form = ({
  inputFirstName,
  inputLastName,
  inputEmail,
  inputPhone,
  inputAddress,
  inputCheckbox,
  handleInput,
  errorAddress,
  errorCheckbox,
  errorEmail,
  errorFirstName,
  errorPhone,
  errorLastName,
  formOpen,
}) => {
  const items = useSelector((state) => state?.cart.items);
  const { height, width } = useWindowSize();

  return (
    <div
      id="userInfo-form"
      style={{ height: "calc(100vh - 64px)" }}
      className="form-container w-full z-30 relative flex flex-col items-center justify-start md:justify-center transition duration-300 bg-gray-200 text-gray-900"
    >
      <h1 className="h-12 md:h-16 w-full absolute top-0 xl:top-4 left-0 text-center uppercase text-lg md:text-xl font-bold px-4 py-4 shadow md:shadow-none">
        Your delivery information
      </h1>

      <form
        style={{ height: width < 768 ? "calc(100vh - 300px)" : "calc(100vh - 128px)" }}
        className="form-solid md:absolute bottom-0 mx-auto w-10/12 max-w-lg overflow-y-auto flex flex-col items-center justify-start xl:justify-center gap-2 md:gap-4 xl:gap-6 text-gray-900 pb-4 md:pt-2 md:pb-12 mt-16 md:mt-0"
      >
        <div className="w-full flex flex-col md:flex-row gap-4">
          <div className="flex flex-col w-full md:w-1/2">
            <label className="w-max text-left px-1" htmlFor="firstName">
              First Name
            </label>
            <input
              id="firstName"
              type="text"
              className="form-input w-full flex items-left justify-left px-4 py-2"
              placeholder="Your first name"
              value={inputFirstName}
              onChange={handleInput}
            />
            <span className="input-error w-max text-sm text-left text-black font-bold pl-1">{errorFirstName}</span>
          </div>
          <div className="flex flex-col w-full md:w-1/2">
            <label className="w- text-left px-1" htmlFor="lastName">
              Last Name
            </label>
            <input
              id="lastName"
              type="text"
              className="form-input w-full flex items-left justify-left px-4 py-2"
              placeholder="Your last name"
              value={inputLastName}
              onChange={handleInput}
            />
            <span className="input-error w-max text-sm text-left text-black font-bold pl-1">{errorLastName}</span>
          </div>
        </div>

        <div className="w-full flex flex-col ">
          <label className="w-full text-left px-1" htmlFor="email">
            Email
          </label>
          <input
            id="email"
            type="email"
            className="form-input w-full flex items-left justify-left px-4 py-2"
            placeholder="abc@gmail.com"
            value={inputEmail}
            onChange={handleInput}
          />
          <span className="input-error w-full text-sm text-left text-black font-bold pl-1">{errorEmail}</span>
        </div>

        <div className="w-full flex flex-col ">
          <label className="w-full text-left px-1" htmlFor="address">
            Address
          </label>
          <input
            id="address"
            type="text"
            className="form-input w-full px-4 py-2"
            placeholder="Your address"
            value={inputAddress}
            onChange={handleInput}
          />
          <span className="input-error w-full text-sm text-left text-black font-bold pl-1">{errorAddress}</span>
        </div>

        <div className="w-full flex flex-col md:flex-row gap-4">
          <div className="flex flex-col w-full md:w-2/3 ">
            <label className="w-full text-left px-1" htmlFor="address">
              City
            </label>
            <input
              id="address"
              type="text"
              className="form-input w-full px-4 py-2"
              placeholder="Your city"
              value={inputAddress}
              onChange={handleInput}
            />
            {/* ❗️ create errorCity */}
            <span className="input-error w-full text-sm text-left text-black font-bold pl-1">{errorAddress}</span>
          </div>
          <div className="flex flex-col w-full md:w-1/3 ">
            <label className="w-full text-left px-1" htmlFor="address">
              Zip Code
            </label>
            <input
              id="address"
              type="text"
              className="form-input w-full px-4 py-2"
              placeholder="Your Zip Code"
              value={inputAddress}
              onChange={handleInput}
            />
            {/* ❗️ create errorZipCode */}
            <span className="input-error w-full text-sm text-left text-black font-bold pl-1">{errorAddress}</span>
          </div>
        </div>

        <div className="w-full flex flex-col ">
          <label className="w-full text-left px-1" htmlFor="phone">
            Phone number
          </label>
          <input
            id="phone"
            type="tel"
            className="form-input w-full flex items-left justify-left px-4 py-2"
            placeholder="+33623456789"
            value={inputPhone}
            onChange={handleInput}
          />
          <span className="input-error w-full text-sm text-left text-black font-bold pl-1">{errorPhone}</span>
        </div>
      </form>
    </div>
  );
};

export default Form;
