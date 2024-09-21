import { configureStore } from '@reduxjs/toolkit';
import productSlice from './features/productSlice';
import cartSlice from './features/cartSlice';
import favoriteSlice from './features/favoriteSlice';
export const store = configureStore({
    reducer: {
        products: productSlice, 
        cart:cartSlice ,
        wish:favoriteSlice , 
        product: productSlice,
    },


});

export default store;