import { configureStore } from "@reduxjs/toolkit";
import cardReducer from "./CardSlice";
import navReducer from './NavSlice';

export const store = configureStore({
  reducer: {
    card: cardReducer,
    nav : navReducer,
  },
});

export default store;
