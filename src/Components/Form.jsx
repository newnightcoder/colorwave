import React from "react";
import { useSelector } from "react-redux";
import "../Styles/_variables.css";

const Form = ({ inputFirstName, inputLastName, inputEmail, inputPhone, inputAddress, inputCheckbox, handleInput }) => {
  const items = useSelector((state) => state?.cart.items);

  return (
    <div
      id="form"
      style={{
        width:
          items.length === 0
            ? "100%"
            : items.length !== 0 && window.innerWidth < 800
            ? "100%"
            : items.length !== 0 && window.innerWidth > 800 && "66.6%",
        minHeight: "calc(100vh - 64px)",
      }}
      className="form-container relative h-full w-full flex items-center justify-center text-gray-300 bg-gaming pt-16 pb-48 font-cabin"
    >
      <h1 className="w-screen text-left absolute top-5 left-0 uppercase pl-16">your delivery info</h1>
      <form className="form-solid h-full w-10/12 flex flex-col items-center justify-center gap-2 text-gray-900 border">
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
      </form>
    </div>
  );
};

export default Form;
