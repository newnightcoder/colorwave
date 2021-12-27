import React from "react";
import { useSelector } from "react-redux";
import "../Styles/_variables.css";

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
}) => {
  const items = useSelector((state) => state?.cart.items);

  return (
    <div
      id="userInfo-form"
      style={{ minHeight: "calc(100vh - 64px)" }}
      className="form-container h-full w-full relative flex flex-col items-center md:items-start justify-center bg-gray-400 text-white"
    >
      <h1 className="w-screen absolute top-0 left-0 text-left uppercase pl-16 py-8 border border-white">
        Your delivery information
      </h1>
      <form className="form-solid h-max w-10/12 md:w-3/5 md:ml-8 flex flex-col items-center justify-center gap-2 text-gray-900">
        <label className="w-full text-gray-100 text-left px-1" htmlFor="firstName">
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
        <span className="input-error w-full text-left text-black font-bold pl-2 -mt-2">{errorFirstName}</span>
        <label className="w-full text-gray-100 text-left px-1" htmlFor="lastName">
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
        <span className="input-error w-full text-left text-black font-bold pl-2 -mt-2">{errorLastName}</span>

        <label className="w-full text-gray-100 text-left px-1" htmlFor="email">
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
        <span className="input-error w-full text-left text-black font-bold pl-2 -mt-2">{errorEmail}</span>

        <label className="w-full text-gray-100 text-left px-1" htmlFor="address">
          Address
        </label>
        <input
          id="address"
          type="text"
          className="form-input h-48 w-full px-4 py-1"
          placeholder="Your address"
          value={inputAddress}
          onChange={handleInput}
        />
        <span className="input-error w-full text-left text-black font-bold pl-2 -mt-2">{errorAddress}</span>

        <label className="w-full text-gray-100 text-left px-1" htmlFor="phone">
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
        <span className="input-error w-full text-left text-black font-bold pl-2 -mt-2">{errorPhone}</span>
      </form>
    </div>
  );
};

export default Form;
