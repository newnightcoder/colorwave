import React from "react";
import "../_variables.css";

const Login = () => {
  return (
    <div className="h-screen w-screen bg-black text-gray-200 flex flex-col space-y-4 items-center justify-center">
      <p className="">Login to you account</p>
      <button className="px-8 py-2 bg-green-400 text-black">Login</button>
    </div>
  );
};

export default Login;
