import { useEffect, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const Header = () => {

    const [btnName,setBtnName] = useState("Login")
    console.log("Header render");


/*
 * if no dependency array => useEffect is called on every render
 * if dependency array is empty = [] => useEffect is called on initial render(just once)
 * if dependency array is [btnNameReact] = > called everytime btnNameReact is updated
 */
   
    useEffect(()=>
    {
      console.log("UseEffect called")
    },[]);
   
    return (
      <div className="header">
      {/* Logo Section */}
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} alt="Logo" />
      </div>

      

      {/* Navigation Items */}
      <div className="nav-items">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
          <li>Cart</li>
          <button
            className="login-btn"
            onClick={() => setBtnName(btnName === "Login" ? "Logout" : "Login")}
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
    );
  };

export default Header;