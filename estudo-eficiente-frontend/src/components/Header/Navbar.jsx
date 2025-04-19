import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { faBars, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./Navbar.module.css";

const Navbar = ({ toggleSidebar }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { isAuthenticated, user } = useContext(AuthContext);

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
              <span className={styles.roundedBorder}>Login</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
