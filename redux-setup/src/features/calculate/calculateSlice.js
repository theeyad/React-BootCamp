import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  result: null,
};

export const calculateSlice = createSlice({
  name: "calculate",
  initialState,
  reducers: {
    add: (currentState, action) => {
      currentState.result =
        action.payload.firstNumberInput + action.payload.secondNumberInput;
    },
    sub: (currentState, action) => {
      currentState.result =
        action.payload.firstNumberInput - action.payload.secondNumberInput;
    },
    mult: (currentState, action) => {
      currentState.result =
        action.payload.firstNumberInput * action.payload.secondNumberInput;
    },
    div: (currentState, action) => {
      currentState.result =
        action.payload.firstNumberInput / action.payload.secondNumberInput;
    },
  },
});

// Action creators are generated for each case reducer function
export const { add, sub, mult, div } = calculateSlice.actions;

export default calculateSlice.reducer;
