import React, { useEffect, useState } from "react";
import { CheckCircle } from "react-bootstrap-icons";
import { useDispatch, useSelector } from "react-redux";
import { deleteCart } from "../Redux/Actions/cart.action";

const ConfirmationPage = () => {
  const userOrder = useSelector((state) => state?.cart.userOrder);
  const dispatch = useDispatch();
  const [orderId, setOrderId] = useState(null);

  const getConfirmation = async () => {
    const url = "http://localhost:4242/user-order";
    const request = {
      headers: {
        "Content-type": "Application/json",
      },
      method: "post",
      body: JSON.stringify(userOrder),
    };
    const confirmation = await fetch(url, request).then((res) => res.json());
    setOrderId(confirmation.orderId);
  };

  useEffect(() => {
    getConfirmation();
    dispatch(deleteCart());
  }, [userOrder]);

  return (
    <div className="bg-gray-300 w-screen h-screen flex flex-col space-y-8 items-center justify-center">
      <span className="text-center">
        Congratulations {userOrder?.userFirstName}! <br /> Your order n&deg;&nbsp;{orderId?.toUpperCase()} was
        successful. <br />
        Thank you for your purchase. <br />
      </span>
      <CheckCircle className="text-9xl text-green-500" />
    </div>
  );
};

export default ConfirmationPage;
