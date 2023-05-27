import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/logo.svg";
import Button from "../Button";
import NavLinks from "./NavLinks";
const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav className="bg-white">
      <div className="flex items-center font-medium justify-around">
        <div className="z-50 p-5 md:w-auto w-full flex justify-between">
          <img src={Logo} alt="logo" className="md:cursor-pointer h-12" />
          <div className="text-3xl md:hidden" onClick={() => setOpen(!open)}>
            <ion-icon name={`${open ? "close" : "menu"}`}></ion-icon>
          </div>
        </div>
        <ul className="md:flex hidden uppercase items-center gap-8 font-[Poppins]">
          <li>
            <Link to="/" className="py-7 px-3 inline-block">
              Home
            </Link>
          </li>
          <NavLinks />
          <li>
            <Link to="/" className="py-7 px-3 inline-block">
              About Us
            </Link>
          </li>
        </ul>
        <div className="md:block hidden">
          <Button 
            name="Login"
            link="/auth"
          />
        </div>
        {/* Mobile nav */}
        <ul
          className={`
        md:hidden bg-white fixed w-full top-0 overflow-y-auto z-10 bottom-0 py-24 pl-4
        duration-500 ${open ? "left-0" : "left-[-100%]"}
        `}
        >
          <li>
            <Link to="/" className="py-7 px-3 inline-block">
              Home
            </Link>
          </li>
          <li>
            <Link to="/" className="py-7 px-3 inline-block">
              About Us
            </Link>
          </li>
          <NavLinks />
          <div className="py-5">
            <Button 
              name="Login"
              link="/auth"
            />
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
