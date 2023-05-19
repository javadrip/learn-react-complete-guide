import { configureStore } from "@reduxjs/toolkit";
import uiSlice from "./uiSlice";
import cartSlice from "./cartSlice";

const store = configureStore({
  // The keys may be utilised by useSelector() to access the state slices.
  reducer: { ui: uiSlice, cart: cartSlice },
});

export default store;
