import { SkewLoader } from "react-spinners";

const Loader = ({ color, bg }) => {
  return (
    <>
      <div
        className={`product-card transform translate-y-1/4 opacity-0 h-28 md:h-60 w-full grid place-items-center ${
          bg === "white" ? "bg-white" : "bg-black"
        }`}
      >
        <SkewLoader color={color === "yellow" ? "#FCD34D" : "#60A5FA"} />
      </div>
      <div
        className={`product-card transform translate-y-1/4 opacity-0 h-28 md:h-60 w-full grid place-items-center ${
          bg === "white" ? "bg-white" : "bg-black"
        }`}
      >
        <SkewLoader color={color === "yellow" ? "#FCD34D" : "#60A5FA"} />
      </div>
      <div
        className={`product-card transform translate-y-1/4 opacity-0 h-28 md:h-60 w-full grid place-items-center ${
          bg === "white" ? "bg-white" : "bg-black"
        }`}
      >
        <SkewLoader color={color === "yellow" ? "#FCD34D" : "#60A5FA"} />
      </div>
      <div
        className={`product-card transform translate-y-1/4 opacity-0 h-28 md:h-60 w-full grid place-items-center ${
          bg === "white" ? "bg-white" : "bg-black"
        }`}
      >
        <SkewLoader color={color === "yellow" ? "#FCD34D" : "#60A5FA"} />
      </div>
      <div
        className={`product-card transform translate-y-1/4 opacity-0 h-28 md:h-60 w-full grid place-items-center ${
          bg === "white" ? "bg-white" : "bg-black"
        }`}
      >
        <SkewLoader color={color === "yellow" ? "#FCD34D" : "#60A5FA"} />
      </div>
      <div
        className={`product-card transform translate-y-1/4 opacity-0 h-28 md:h-60 w-full grid place-items-center ${
          bg === "white" ? "bg-white" : "bg-black"
        }`}
      >
        <SkewLoader color={color === "yellow" ? "#FCD34D" : "#60A5FA"} />
      </div>
      <div
        className={`product-card transform translate-y-1/4 opacity-0 h-28 md:h-60 w-full grid place-items-center ${
          bg === "white" ? "bg-white" : "bg-black"
        }`}
      >
        <SkewLoader color={color === "yellow" ? "#FCD34D" : "#60A5FA"} />
      </div>
    </>
  );
};

export default Loader;
