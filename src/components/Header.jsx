import { useContext, useEffect, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";


const Header = () => {

    const [btnName,setBtnName] = useState("Login")
    console.log("Header render");

    const onlineStatus = useOnlineStatus();

    // This is access the useContext file using useContext.
    const {loggedInUser} = useContext(UserContext)


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
      <div className="flex justify-between bg-orange-300 shadow-lg">
      {/* Logo Section */}
      <div className="">
        <img className="w-36" src={LOGO_URL} alt="Logo" />
      </div>

      

      {/* Navigation Items */}
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-4">Online Status :{onlineStatus? "🟢" : "🔴"}</li>
          <li className="px-4"><Link to="/">Home</Link></li>
          <li className="px-4"><Link to="/about">About Us</Link></li>
          <li className="px-4"><Link to="/contact">Contact Us</Link></li>
          <li className="px-4"><Link to="/grocery">Grocery</Link></li>
          <li className="px-4">Cart</li>
          <button
            className="className= px-4"
            onClick={() => setBtnName(btnName === "Login" ? "Logout" : "Login")}
          >
            {btnName}
          </button>
          <li className="px-4  font-bold" >{loggedInUser}</li>
        </ul>
      </div>
    </div>
    );
  };

export default Header;