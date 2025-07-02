import React, {useContext, useState} from "react";
import {Link} from "react-router-dom";

const Navbar = ({ }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="">
      <div className="flex items-center justify-between h-16 mx-auto px-4 sm:px-6 md:px-8 p-2">
        <div className="flex items-center">
          <span>LOGO</span>
        </div>
        <div className="flex items-center">
          <div className="hidden md:flex items-center space-x-4">
            <Link
              to="/login"
              className="text-black hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            >
              <span className="bg-orange-400 hover:bg-orange-300 text-white font-bold py-2 px-4 border-b-4 border-orange-700 hover:border-orange-500 rounded">Login</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
