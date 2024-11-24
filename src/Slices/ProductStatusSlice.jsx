import { createSlice } from "@reduxjs/toolkit";
import productsData from '../products.js';  

const productStatusSlice = createSlice({
  name: "product status",
  initialState: {
    productsData: productsData || [],  
    addedProductsCount: 0,
    addedProducts: [],
    productQuantity: {}
  },
  reducers: {
    toggle: (state, action) => {
      const productId = action.payload;
      state[productId] = !state[productId];
      if (state[productId]) {
        state.addedProductsCount += 1;
      } else {
        state.addedProductsCount -= 1;
      }
    },
    addProducts: (state, action) => {
      const product = action.payload;
      state.addedProducts.push({ ...product, quantity: 1 });
    },
    removeProducts: (state, action) => {
      const productId = action.payload;
      state.addedProducts = state.addedProducts.filter(product => product.id !== productId);
    },
    addQuantity: (state, action) => {
      const { productAddedCount, productId } = action.payload;
      state.productQuantity[productId] = productAddedCount;
      state.addedProducts = state.addedProducts.map(product => {
        if (product.id === productId) {
          return { ...product, quantity: productAddedCount };
        }
        return product;
      });
    }
  }
});

export const { toggle, addProducts, removeProducts, addQuantity } = productStatusSlice.actions;
export default productStatusSlice.reducer;
