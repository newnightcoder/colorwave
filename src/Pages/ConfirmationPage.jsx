import { useEffect } from "react";
import { Check2Circle, HouseFill } from "react-bootstrap-icons";
import Div100vh from "react-div-100vh";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import sunsetImg from "../Assets/sunset.jpg";
import { Footer, Navbar, Steps } from "../Components";
import { confirmSuccess, deleteCart, validatePayment } from "../Redux/Actions/cart.action";
import useWindowSize from "../utils/useWindowSize";

const ConfirmationPage = () => {
  const userOrder = useSelector((state) => state?.cart.userOrder);
  const orderId = useSelector((state) => state?.cart.userOrder.orderId);
  const dispatch = useDispatch();
  const { width } = useWindowSize();
  const cloudinaryCdnPrefix_static = "https://my-cloud-cdn.mo.cloudinary.net/colorwave-static";

  useEffect(() => {
    dispatch(validatePayment(userOrder));
    dispatch(confirmSuccess());
    dispatch(deleteCart());
    return () => {
      dispatch(confirmSuccess());
    };
  }, []);

  return (
    <div>
      {width < 768 ? <Navbar /> : <Steps />}
      <Div100vh
        style={{ background: `url("${cloudinaryCdnPrefix_static}${sunsetImg}") no-repeat center/cover` }}
        className="pt-16 w-screen relative bg-gray-300 flex items-center justify-center"
      >
        <div
          style={{ backgroundColor: "rgba(0,0,0,.5)" }}
          className="h-max w-max flex flex-col space-y-8 items-center justify-center text-center text-white text-lg rounded p-7"
        >
          <div className="text-base">
            Congratulations <span className="capitalize">{userOrder?.userFirstName}</span>! <br /> Your order
            n&deg;&nbsp;
            <span className="underline">{orderId?.toUpperCase()}</span> was successful. <br />
            You'll receive a confirmation email shortly.
          </div>
          <Check2Circle className="text-9xl text-green-500" />
          <span className="text-base">Thank you for your purchase!</span>
          <Link
            to={"/"}
            className="w-48 flex items-center justify-center space-x-2 text-base uppercase text-black bg-yellow-300 transition duration-300 hover:text-white hover:bg-blue-500 shadow-md hover:shadow-none py-2 mt-4 group"
          >
            <HouseFill size={24} className="text-black transition-color duration-300 group-hover:text-white" />
            <span>go back home</span>
          </Link>
        </div>
      </Div100vh>
      <Footer />
    </div>
  );
};

export default ConfirmationPage;
