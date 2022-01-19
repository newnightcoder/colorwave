import React, { useEffect, useState } from "react";
import { Check2Circle } from "react-bootstrap-icons";
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
    <div
      style={{ height: "calc(100vh - 64px)" }}
      className="bg-gray-300 w-screen  flex flex-col space-y-8 items-center justify-center"
    >
      <span className="text-center">
        Congratulations {userOrder?.userFirstName}! <br /> Your order n&deg;&nbsp;{orderId?.toUpperCase()} was
        successful. <br />
        Thank you for your purchase. <br />
      </span>
      <Check2Circle className="text-9xl text-green-500" />
    </div>
  );
};

export default ConfirmationPage;
