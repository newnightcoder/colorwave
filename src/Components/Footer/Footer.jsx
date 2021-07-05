import React from "react";
import { Facebook, Github, Linkedin, Twitter } from "react-bootstrap-icons";
import "../_variables.css";

const Footer = () => {
  return (
    <div className="h-full w-full bg-black text-gray-300 text-center px-8 font-cabin">
      <div className="grid grid-col-1 md:grid-cols-3 gap-6 py-5">
        <div className="flex flex-col ">
          <h3>ColorWave</h3>
          <p>
            Making your world a better place through creative customizations!
          </p>
          <ul className="flex flex-row justify-evenly">
            <li>
              <Facebook className="text-2xl" />
            </li>
            <li>
              {" "}
              <Twitter className="text-2xl" />
            </li>
            <li>
              {" "}
              <Github className="text-2xl" />
            </li>
            <li>
              {" "}
              <Linkedin className="text-2xl" />
            </li>
          </ul>
        </div>
        <div className=" md:col-span-2 grid grid-cols-2 gap-3 sm:grid-cols-3 text-center sm:text-left px-8">
          <div>
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
          <div></div>
        </div>
      </div>
      <div className="border-t border-gray-600 border-opacity-60	py-5">
        &copy; ColorWare, Inc. All rights reserved
      </div>
    </div>
  );
};

export default Footer;
