import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';


export const fetchProducts = createAsyncThunk(
  'product/fetchProducts',
  async () => {
    const response = await axios.get('https://ecombackend-qgpr.onrender.com/product');
    return response.data;
  }
);

const productSlice = createSlice({
  name: 'product',
  initialState: { products: [],cart: [], total: 0 },
  reducers: {
    setProducts(state, action) {
      state.products = action.payload;
    },
    addToCart: (state, action) => {
      const itemToAdd = state.products.find(item => item.id === action.payload);
      const existingCartItem = state.cart.find(item => item.id === action.payload);

      if (itemToAdd) {
        if (existingCartItem) {
          existingCartItem.count += 1;
          state.total += itemToAdd.price;
        } else {
          state.cart.push({ ...itemToAdd, count: 1 });
          state.total += itemToAdd.price;
        }
      }
    },

    removeFromCart: (state, action) => {
      const itemIdToRemove = action.payload;
      const removedItem = state.cart.find(item => item.id === itemIdToRemove);

      if (removedItem) {
        state.total -= removedItem.price * removedItem.count;
        state.cart = state.cart.filter(item => item.id !== itemIdToRemove);
      }
    },

    increment: (state, action) => {
      const itemToIncrement = state.cart.find(item => item.id === action.payload);

      if (itemToIncrement) {
        state.total += itemToIncrement.price;
        itemToIncrement.count += 1;
      }
    },
    
    decrement: (state, action) => {
      const itemToDecrement = state.cart.find(item => item.id === action.payload);

      if (itemToDecrement) {
        if (itemToDecrement.count === 1) {
          state.total -= itemToDecrement.price;
          state.cart = state.cart.filter(item => item.id !== action.payload);
        } else {
          itemToDecrement.count -= 1;
          state.total -= itemToDecrement.price;
        }
      }
    },
  },
  extraReducers: builder => {
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.products = action.payload;
    });
  },
});

export const { setProducts, addToCart, removeFromCart, increment, decrement } = productSlice.actions;

export default productSlice.reducer;

// enter your javascript code here
