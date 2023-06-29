import { LOGO_URL } from "../utils/constants";
import Logo from "../images/logo.svg";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  // let btnName="Login";
  console.log("header rendered");
  const [btnName, setBtnName] = useState("login");
  const onlineStatus = useOnlineStatus();
  // if no dependency array, useEffect is called on every component render.
  // if dependency array is empty, useEffect is called on initial render (just once).
  // if dependency array is [btnName], called everytime btnName changes.
  useEffect(() => {
    console.log("useEffect rendered");
  }, [btnName]);

  return (
    <div className="flex justify-between bg-gray-100 shadow-lg mb-2 sm:bg-yellow-100 lg:bg-gray-100 sticky top-0">
      <div className="logo-container">
        <a href="/">
          <img className="w-20" src={Logo} />
        </a>
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          {/* <li className="px-4">Online Status: {onlineStatus ? "✅" : "⛔"}</li> */}
          <li className="px-4">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-4">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-4">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="px-4">Cart</li>
          <button
            className="login"
            onClick={() => {
              btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
            }}
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
