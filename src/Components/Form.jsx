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
      className="form-container w-full z-30 relative flex flex-col items-center justify-center md:justify-start transition duration-300 text-gray-900"
    >
      <h1 className="h-12 md:h-16 w-full absolute top-0 xl:top-4 left-0 text-center uppercase text-lg md:text-xl font-bold px-4 py-4 shadow md:shadow-none">
        Your delivery information
      </h1>

      <form
        // style={{ height: width < 768 ? "calc(100vh - 300px)" : "calc(100vh - 128px)" }}
        className="form-solid md:self-end h-max w-10/12 max-w-3xl overflow-y-auto flex flex-col items-center justify-start gap-2 text-gray-900 pb-48 md:pt-2 md:pb-12 mt-16 md:mt-20 xl:mt-24 2xl:mt-32"
      >
        <div className="w-full flex flex-col md:flex-row gap-2">
          <div className="flex flex-col w-full md:w-1/2">
            <label className="hidden md:block w-max text-left px-1" htmlFor="firstName">
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
            <label className="hidden md:block w- text-left px-1" htmlFor="lastName">
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
          <label className="hidden md:block w-full text-left px-1" htmlFor="email">
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
          <label className="hidden md:block w-full text-left px-1" htmlFor="address">
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

        <div className="w-full flex flex-col md:flex-row gap-2">
          <div className="flex flex-col w-full md:w-2/3 ">
            <label className="hidden md:block w-full text-left px-1" htmlFor="address">
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
            <label className="hidden md:block w-full text-left px-1" htmlFor="address">
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
          <label className="hidden md:block w-full text-left px-1" htmlFor="phone">
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
        <div className="flex flex-col items-start justify-center self-start pt-1">
          <div className="flex items-center justify-center gap-2">
            <input
              type="checkbox"
              name=""
              id="checkbox"
              className="rounded-sm ring-0 outline-0 focus:outline-0 checked:outline-0 focus:border-0 checked:ring-0 checked:border-0 focus:ring-0"
              onChange={handleInput}
            />

            <p>
              I have read and I accept all <span className="capitalize underline">terms and services</span>
            </p>
          </div>
          <span className="input-error w-full text-sm text-left text-black font-bold pl-1">{errorCheckbox}</span>
        </div>
      </form>
    </div>
  );
};

export default Form;
