import { useEffect, useState } from "react";
import { LOGO_URL } from "../utils/constants";

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
        <div className="logo-container">
          <img
            className="logo"
            src={LOGO_URL}
          />
        </div>
        <div className="nav-items">
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Cart</li>
            <button className="login" onClick={()=>
              {
                btnName === "Login"? setBtnName("logout") : setBtnName("Login")
              }
            }>{btnName}</button>
          </ul>
        </div>
      </div>
    );
  };

export default Header;