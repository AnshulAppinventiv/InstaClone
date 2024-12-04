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
    removeSavedPost: (state, action) => {
      state.savedPostIds = state.savedPostIds.filter(
        postId => postId !== action.payload
      );
    },
  },
});

export const { addSavedPost, removeSavedPost } = savedPostSlice.actions;
export default savedPostSlice.reducer;
