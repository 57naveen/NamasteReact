import React from "react";
import ReactDOM from "react-dom/client";



/*
 * Header
 *  - Logo
 *  - Nav Items
 * Body
 *  - Search
 *  - RestaurantContainer
 *    - RestaurantCard
 * Footer
 *  - Copyright
 *  - Links
 *  - Address
 *  - Contact
 */

const Header = () =>
{
  return (

    <div className="header">
    <div className="logo-container">
        <img className="logo" src="https://marketplace.canva.com/EAFMme8qKdk/1/0/1600w/canva-modern-restaurant-bar-and-grill-food-logo-qG0JgcwrqHQ.jpg"/>
    </div>
    <div className="nav-items">
      <ul>
        <li>Home</li>
        <li>About Us</li>
        <li>Contact Us</li>
        <li>Cart</li>
      </ul>
    </div>
    </div>
  )
}

const RestaurantCard = () =>
{
  return(
    <div className="res-card" style={{backgroundColor:"#f0f0f0"}}>
      <img 
      className="res-logo"
      alt="res-logo"
      src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/xb2nbyytblwf2jdfdicc"
      />
      <h3>Mehfil</h3>
      <h4>Biryani Nort Indian, Asain</h4>
      <h4>4.5 stars</h4>
      <h4>38 minutes</h4>
    </div>
  )
}


const Body = () =>
{
  return(
    <div className="body">
      <div className="search"></div>
      <div className="res-container">
         <RestaurantCard />
      </div>
    </div>
  )
}

const AppLayout =() =>
{
  return <div className="app">
      <Header />
      <Body />
  </div>
}



const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);

