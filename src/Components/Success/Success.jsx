import React from "react";
import { CheckCircle } from "react-bootstrap-icons";

const Success = () => {
  return (
    <div className="bg-gray-300 w-screen h-screen flex flex-col space-y-8 items-center justify-center">
      <span className="text-center">
        Congratulations! <br /> Your order xxx was successful. <br />
        Thank you for your purchase. <br />
      </span>
      <CheckCircle className="text-9xl text-green-500" />
    </div>
  );
};

export default Success;
