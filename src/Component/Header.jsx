import React from "react";
import { Link, Links } from "react-router";

const Header = () => {
  return (
    <div className="flex justify-center items-center bg-[url(/more/15.jpg)] bg-cover bg-center bg-no-repeat text-base-200 pb-2 px-2">
      <div className="flex items-center justify-center gap-6 w-full">
        <Link to="/">
          
          <div className="flex justify-center items-center">
            <img className="w-20 h-24" src="/logo1.png" alt="logo" />
            <p className="sm:text-6xl text-5xl rancho">Espresso Emporium</p>
          </div>
        </Link>
        <div className="flex md:flex-row flex-col justify-end items-center sm:gap-4 gap-2">
          <Link to="/signin">
            <span className="rancho sm:text-xl btn border-2 border-primary hover:bg-primary hover:text-base-200 hover:border-primary-content duration-600 hover:scale-110 transition">
              SignIn
            </span>
          </Link>
          <Link to="/signup">
            <span className="rancho sm:text-xl btn border-2 border-primary hover:bg-primary hover:text-base-200 hover:border-primary-content duration-600 hover:scale-110 transition">
              SignUp
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
