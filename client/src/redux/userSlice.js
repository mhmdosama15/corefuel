import { createSlice } from "@reduxjs/toolkit";

const initialState = { motivationalQuote: null, note: null, foodData: null };

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setMotivationalQuote: (state, action) => {
      state.motivationalQuote = action.payload;
    },
    setNoteState: (state, action) => {
      state.note = action.payload;
    },
    setUserFoodData: (state, action) => {
      state.foodData = action.payload;
    },
  },
});

export const { setMotivationalQuote, setNoteState, setUserFoodData } =
  userSlice.actions;
export default userSlice.reducer;
