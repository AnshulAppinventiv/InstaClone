import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  savedPostIds: [],
};

const savedPostSlice = createSlice({
  name: 'savedPost',
  initialState,
  reducers: {
    addSavedPost: (state, action) => {
      if (!state.savedPostIds.includes(action.payload)) {
        state.savedPostIds.push(action.payload);
      }
    },
  },
});

export const { addSavedPost, removeSavedPost } = savedPostSlice.actions;
export default savedPostSlice.reducer;
