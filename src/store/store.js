import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice';
import wishlistReducer from './wishlistSlice';


const store = configureStore({
    reducer: {
        allCart: cartReducer,
        allwishlist:wishlistReducer
    },
});

export default store;