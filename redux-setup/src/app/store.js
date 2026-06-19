import { configureStore } from "@reduxjs/toolkit";
import calculateSlice from "../features/calculate/calculateSlice";

export const store = configureStore({
  reducer: {
    calculate: calculateSlice,
  },
});
