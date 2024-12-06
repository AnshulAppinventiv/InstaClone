import {configureStore} from '@reduxjs/toolkit';
import savedPostReducer from './slices/savedPostSlice';

export const store = configureStore({
  reducer: {
    savedPost: savedPostReducer,
  },
});
