import React from "react";
import { Link } from "react-router-dom";
import "../../Styles/_variables.css";
import "./home.css";

const Home = () => {
  return (
    <div className="h-screen w-screen bg-gaming flex flex-col space-y-8 items-center justify-center text-blue-500 font-cabin">
      <h1 className="text-8xl text-bold">ColorWave</h1>
      <Link to="/shop">
        <button className="px-8 py-2 bg-blue-500 text-white shadow-md">Enter</button>
      </Link>
    </div>
  );
};

export default Home;
