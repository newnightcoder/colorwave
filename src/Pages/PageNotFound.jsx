import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div className="h-screen w-screen bg-gray-300 text-gray-100 flex flex-col items-center justify-center space-y-8">
      <h1 className="text-8xl text-bold">404 - page not found</h1>
      <Link to="/" className="w-max group absolute inset-x-0 m-auto md:static">
        <div className="relative">
          <span
            className="block border border-black rounded-sm absolute -inset-1 transform transition-all duration-300 -skew-y-6 bg-yellow-300 group-hover:skew-y-3 group-hover:bg-blue-500"
            aria-hidden="true"
          ></span>
          <h1 className="relative text-lg transition-color duration-300 text-black group-hover:text-white px-2 uppercase">
            ColorWave
          </h1>
        </div>
      </Link>
    </div>
  );
};

export default PageNotFound;
