import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  //config the slice with name and initialstate
  name: "cart",
  initialState: {
    items: [],
  },

  // The reducers is a object this object have different types of action that we can take
  reducers: {
    // inside these are actions
    addItem: (state, action) => {
      state.items.push(action.payload); //updating the state
    },
    removeItem: (state, action) => {
      state.items.pop();
    },
    clearCart: (state, action) => {
      state.items.length = 0;
    },
  },
});

//exporting the actions from the slice
export const { addItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
