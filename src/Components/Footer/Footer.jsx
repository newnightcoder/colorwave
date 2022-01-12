import React from "react";
import { Facebook, Github, Linkedin, Twitter } from "react-bootstrap-icons";
import "../../Styles/_variables.css";

const Footer = () => {
  return (
    <div className="h-max w-screen bg-black text-gray-300 flex flex-col items-center justify-center px-8 py-8 font-cabin border-t-4 border-yellow-300">
      <div className="max-w-2/3 flex items-center justify-center gap-4 py-5">
        <div className="w-full md:col-span-2 grid grid-cols-3 gap-3 sm:grid-cols-3 text-center sm:text-left px-8">
          <div className="">
            <h4>Shop</h4>
            <ul>
              <li>Products</li>
              <li>Skins</li>
              <li>My Cart</li>
              <li>Your brand</li>
            </ul>
          </div>
          <div>
            <h4>Support</h4>
            <ul>
              <li>My Account</li>
              <li>Shipping</li>
              <li>Legal</li>
              <li>Contact Us</li>
            </ul>
          </div>
          <div>
            <h4>Resources</h4>
            <ul>
              <li>Gallery</li>
              <li>Press</li>
              <li>Partners</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col">
          <h3>ColorWave</h3>
          <p>Making your world a better place through creative customizations!</p>
          <ul className="flex flex-row justify-evenly">
            <li>
              <Facebook className="text-2xl" />
            </li>
            <li>
              <Twitter className="text-2xl" />
            </li>
            <li>
              <Github className="text-2xl" />
            </li>
            <li>
              <Linkedin className="text-2xl" />
            </li>
          </ul>
        </div>
      </div>
      <div className="w-10/12 flex items-center justify-center border-t border-gray-600 border-opacity-60 py-5">
        &copy; ColorWare, Inc. All rights reserved
      </div>
    </div>
  );
};

export default Footer;
