import { configureStore } from "@reduxjs/toolkit";
import cardReducer from "./CardSlice";
import navReducer from './NavSlice';
import categoryReducer from './CategorySlice';

export const store = configureStore({
  reducer: {
    card: cardReducer,
    nav : navReducer,
    category : categoryReducer,
  },
});

export default store;
