import { use100vh } from "react-div-100vh";
import "../Styles/form.css";
import "../Styles/_globals.css";
import useWindowSize from "../utils/useWindowSize";

const Form = ({
  inputFirstName,
  inputLastName,
  inputEmail,
  inputPhone,
  inputAddress,
  inputCity,
  inputZip,
  inputCheckbox,
  handleInput,
  errorAddress,
  errorCheckbox,
  errorCity,
  errorEmail,
  errorFirstName,
  errorPhone,
  errorZip,
  errorLastName,
  formOpen,
  handleForm,
}) => {
  const { width } = useWindowSize();
  const responsiveHeight = use100vh();

  return (
    <div
      id="userInfo-form"
      style={{
        height: width < 768 ? `calc(${responsiveHeight}px - 8rem)` : "100%",
        visibility: formOpen ? "visible" : "hidden",
      }}
      className="form-container w-full md:w-3/5 pt-16 md:pt-24 relative flex flex-col items-center justify-start space-y-2 md:space-y-0 transition duration-300 text-gray-900 md:bg-gaming"
    >
      <div
        style={{ height: width > 768 ? "8.33%" : "max-content" }}
        className="w-full relative flex flex-col items-start justify-center ml-3 md:pl-10"
      >
        <div className="h-max w-max relative ml-4 md:hidden">
          <h2 className="w-full text-center md:text-left uppercase text-xl md:text-2xl px-3 pt-6 md:pt-0 ">
            Your delivery information
          </h2>
          <span className="h-px w-full absolute inset-x-0 mx-auto left-0 bottom-0.5 bg-black"></span>
        </div>
      </div>
      <div
        style={{ height: width < 768 ? "100%" : "83.33%" }}
        className="w-full flex flex-col items-center justify-center overflow-hidden px-4 md:px-0"
      >
        <div className="h-max w-full md:w-9/12 md:max-w-5xl flex-col items-center justify-center overflow-y-auto scrollbar-description overflow-x-hidden ">
          <div className="h-max w-full px-2 flex items-start justify-center">
            <form
              noValidate={true}
              id="form-delivery"
              className="h-max w-full  form-solid flex flex-col items-center justify-start space-y-3 text-gray-900 md:text-white px-2 pt-4 pb-4 md:pt-0 md:pb-4"
              onSubmit={formOpen ? handleForm : undefined}
            >
              <div className="h-max w-full flex flex-col md:flex-row space-y-3 md:space-x-2 md:space-y-0">
                <div className="h-max flex flex-col h-max w-full md:w-1/2">
                  <label className="hidden md:block w-max text-left px-1" htmlFor="firstName">
                    First Name
                  </label>
                  <input
                    id="firstName"
                    type="text"
                    className="form-input text-black w-full border-3 border-transparent transition-colors duration-300 focus:border-yellow-300 border-3 border-transparent transition-colors duration-300 focus:border-yellow-300"
                    placeholder="Your first name"
                    value={inputFirstName}
                    onChange={handleInput}
                  />
                  <span className="input-error w-max text-sm text-left text-blue-500 italic font-bold pl-1">
                    {errorFirstName}
                  </span>
                </div>
                <div className="flex flex-col w-full md:w-1/2">
                  <label className="hidden md:block w- text-left px-1" htmlFor="lastName">
                    Last Name
                  </label>
                  <input
                    id="lastName"
                    type="text"
                    className="form-input text-black w-full border-3 border-transparent transition-colors duration-300 focus:border-yellow-300"
                    placeholder="Your last name"
                    value={inputLastName}
                    onChange={handleInput}
                  />
                  <span className="input-error w-max text-sm text-left text-blue-500 italic font-bold pl-1">
                    {errorLastName}
                  </span>
                </div>
              </div>
              <div className="w-full flex flex-col ">
                <label className="hidden md:block w-full text-left px-1" htmlFor="email">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  className="form-input text-black w-full border-3 border-transparent transition-colors duration-300 focus:border-yellow-300"
                  placeholder="abc@gmail.com"
                  value={inputEmail}
                  onChange={handleInput}
                />
                <span className="input-error w-full text-sm text-left text-blue-500 italic font-bold pl-1">
                  {errorEmail}
                </span>
              </div>
              <div className="w-full flex flex-col ">
                <label className="hidden md:block w-full text-left px-1" htmlFor="address">
                  Address
                </label>
                <input
                  id="address"
                  type="text"
                  className="form-input text-black w-full border-3 border-transparent transition-colors duration-300 focus:border-yellow-300"
                  placeholder="Your address"
                  value={inputAddress}
                  onChange={handleInput}
                />
                <span className="input-error w-full text-sm text-left text-blue-500 italic font-bold pl-1">
                  {errorAddress}
                </span>
              </div>
              <div className="w-full flex flex-col md:flex-row space-y-3 md:space-x-2 md:space-y-0">
                <div className="flex flex-col w-full md:w-2/3 ">
                  <label className="hidden md:block w-full text-left px-1" htmlFor="address">
                    City
                  </label>
                  <input
                    id="city"
                    type="text"
                    className="form-input text-black w-full border-3 border-transparent transition-colors duration-300 focus:border-yellow-300"
                    placeholder="Your city"
                    value={inputCity}
                    onChange={handleInput}
                  />
                  {/* ❗️ create errorCity */}
                  <span className="input-error w-full text-sm text-left text-blue-500 italic font-bold pl-1">
                    {errorCity}
                  </span>
                </div>
                <div className="flex flex-col w-full md:w-1/3 ">
                  <label className="hidden md:block w-full text-left px-1" htmlFor="address">
                    Zip Code
                  </label>
                  <input
                    id="zip"
                    type="text"
                    className="form-input text-black w-full border-3 border-transparent transition-colors duration-300 focus:border-yellow-300"
                    placeholder="Your Zip Code"
                    value={inputZip}
                    onChange={handleInput}
                  />
                  {/* ❗️ create errorZipCode */}
                  <span className="input-error w-full text-sm text-left text-blue-500 italic font-bold pl-1">
                    {errorZip}
                  </span>
                </div>
              </div>
              <div className="w-full flex flex-col ">
                <label className="hidden md:block w-full text-left px-1" htmlFor="phone">
                  {"Phone number (10 digits)"}
                </label>
                <input
                  id="phone"
                  type="tel"
                  className="form-input text-black w-full border-3 border-transparent transition-colors duration-300 focus:border-yellow-300"
                  placeholder={width < 768 ? "Phone number (10 digits)" : "1234567890"}
                  value={inputPhone}
                  onChange={handleInput}
                />
                <span className="input-error w-full text-sm text-left text-blue-500 italic font-bold pl-1">
                  {errorPhone}
                </span>
              </div>
              <div className="flex flex-col items-start justify-center self-start pt-1">
                <div className="flex items-center justify-center space-x-2">
                  <input
                    tabIndex="0"
                    type="checkbox"
                    name="checkbox"
                    id="checkbox"
                    className="rounded-sm  outline-0 focus:ring-2 focus:ring-yellow-300 checked:outline-0 focus:border-0 checked:ring-0 checked:border-0"
                    value={inputCheckbox}
                    onChange={handleInput}
                  />
                  <p>
                    I have read and I accept all <span className="capitalize underline">terms and services</span>
                  </p>
                </div>
                <span className="input-error w-full text-sm text-left text-blue-500 italic font-bold pl-1">
                  {errorCheckbox}
                </span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
