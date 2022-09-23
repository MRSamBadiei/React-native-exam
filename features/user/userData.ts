import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { user } from "../../types";
import { RootState } from "../store";

const init: user[] = [];

const userData = createSlice({
  name: "userData",
  initialState: init,
  reducers: {
    add: (state, action: PayloadAction<user>) => {
      state.push(action.payload);
    },
  },
});

export const { add } = userData.actions;
export const selectUser = (state: RootState) => state.userData;
export default userData.reducer;
