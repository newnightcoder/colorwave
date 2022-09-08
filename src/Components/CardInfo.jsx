import { useState } from "react";
import AnimateHeight from "react-animate-height";
import visa from "../Assets/cards/visa.png";
import "../Styles/_globals.css";

const CardInfo = ({ formValidated }) => {
  const [cardInfoHeight, setCardInfoHeight] = useState(0);

  const toggleCardInfo = () => {
    setCardInfoHeight(cardInfoHeight === 0 ? "auto" : 0);
  };

  return (
    <div
      style={{
        animation: formValidated && "500ms fadeInTop 300ms forwards ease-in",
      }}
      className="h-32 md:h-auto w-full md:w-11/12 md:overflow-y-auto opacity-0 absolute bottom-0 md:relative text-sm md:text-base text-black bg-yellow-300 md:border md:border-gray-100 flex flex-col items-center justify-start space-y-2 z-40 px-2 md:py-2"
    >
      <div className="hidden h-auto w-max whitespace-nowrap md:flex flex-col items-center justify-start my-auto">
        <button type="button" className="h-auto w-full" onClick={toggleCardInfo}>
          <span className="h-full w-full flex items-center justify-center space-x-3">
            <span className="uppercase underline font-bold text-center">Please use this credit card</span>
            <span
              style={{ animation: cardInfoHeight === 0 ? "bounceRight 1s infinite" : "none" }}
              className="h-6 w-9 rounded"
            >
              <img src={visa} alt="visa card logo" className="object-cover h-full w-full" />
            </span>
          </span>
        </button>
        <AnimateHeight duration={500} height={cardInfoHeight} className="w-full">
          <div className="h-max w-max flex flex-col items-start justify-start pt-2">
            <div className="flex items-center justify-center space-x-1 transform -translate-x-px">
              <span className="uppercase">Number:</span>
              <span className="font-bold">4242 4242 4242 4242</span>
            </div>
            <div className="flex space-x-2">
              <span className="uppercase">DATE:</span>
              <span>any future date</span>
            </div>
            <div className="flex space-x-2">
              <span className="uppercase">CVC:</span>
              <span>any 3 numbers</span>
            </div>
          </div>
        </AnimateHeight>
      </div>
      <div className="md:hidden h-28 flex flex-col items-start justify-center space-y-2">
        <h3 className="uppercase underline rounded-sm font-bold text-center text-lg">Please use this credit card</h3>
        <div className="h-max w-max flex flex-col items-start justify-center">
          <div className="flex items-center justify-center space-x-1 transform -translate-x-px">
            <div className="h-6 w-9 rounded">
              <img src={visa} alt="" className="object-cover h-full w-full" />
            </div>
            <span className="font-bold text-lg">4242 4242 4242 4242</span>
          </div>
          <div className="w-max md:w-full flex flex-col items-start">
            <div className="flex space-x-2">
              <span>DATE&nbsp;:</span>
              <span>any future date</span>
            </div>
            <div className="flex space-x-2">
              <span>CVC&nbsp;:</span>
              <span>any 3 numbers</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardInfo;
