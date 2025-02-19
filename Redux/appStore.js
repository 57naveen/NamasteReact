import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../Redux/cartSlice"


const appStore = configureStore({
      /*
       * This is the main app reducer 
       * And this reducer contain all the small reducer from the each slice
       * For the each slice we have the reducer.
       */
      reducer : {
        cart: cartReducer // this the small reducer from the cartSlice
      }
  }
);


export default appStore;