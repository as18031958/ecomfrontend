// store.js
import { configureStore } from '@reduxjs/toolkit';
import productReducer from './slice'; // Assuming the productSlice is in the same folder. If not, adjust the path accordingly.

const store = configureStore({
  reducer: {
    product: productReducer,
  },
});

export default store;
