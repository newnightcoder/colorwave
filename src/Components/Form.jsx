import React from "react";

const Form = () => {
  return (
    <div
      id="form"
      className="form-container w-screen h-screen flex items-center justify-center text-gray-300 bg-gaming"
    >
      <form action="" className="w-10-12 flex flex-col items-center justify-center">
        <input type="text" class="form-input px-4 py-2 " />
        <input type="email" class="form-input px-4 py-2 " />
        <input type="text" class="form-input px-4 py-2 " />
        <input type="tel" class="form-input px-4 py-2 " />
      </form>
    </div>
  );
};

export default Form;
