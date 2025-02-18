import React, { lazy, Suspense, useEffect,useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Contact from "./components/Contact";
import About from "./components/About";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Error from "./components/Error";

import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import RestaurantMenu from "./components/RestaurantMenu";
import UserContext from "./utils/UserContext";


// import Grocery from "./components/Grocery";


/* The below names are used to tell lazy loading for optimizing our app  
 * Chunking
 * Dynamic Bundling
 * code Splitting
 * lazy Loading
 * on demand loading
 * dynamic import
 */

const Grocery = lazy(() => import("./components/Grocery"));


const AppLayout = () => {

 const [userName, setUserName ] = useState();

 // just use the dummy fetch API setup

 useEffect(()=>
{
   // Make a API call and send userName and password
   
   //dummy data for testing 
   const data = {
    name:"Navee"
   }

   setUserName(data.name)
   
},[])

// Now we need to pass the userName to context file to update the value
   
  return (

     <UserContext.Provider value={{loggedInUser:userName ,setUserName}}>
    <div className="app">
      <Header />
      <Outlet />
    </div>
     </UserContext.Provider>

  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>LOADING....</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantMenu />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
