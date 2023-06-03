import { LOGO_URL } from "../utils/constants";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  // let btnName="Login";
console.log("header rendered");
  const [btnName, setBtnName] = useState("login");
  // if no dependency array, useEffect is called on every component render.
  // if dependency array is empty, useEffect is called on initial render (just once).
  // if dependency array is [btnName], called everytime btnName changes.
  useEffect(()=>{
    console.log("useEffect rendered")},[btnName])

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>          
          <li>Cart</li>
          <button
            className="login"
            onClick={() => {
              btnName==="Login"? setBtnName("Logout"):setBtnName("Login");
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
