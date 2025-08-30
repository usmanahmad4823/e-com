import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../Features/cart/CartSlice";
import adReducer from "../Features/post/adSlice"

export const store = configureStore({
  reducer: {
    cart: cartReducer,
      ad: adReducer, 
  },
});

export default store;
