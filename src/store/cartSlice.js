
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cart: [],
    items: [],
    totalQuantity: 0,
    totalPrice: 0,
};


const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const find = state.cart.findIndex((item) => item.id === action.payload.id);

            if (find >= 0) {
                state.cart[find] = {
                    ...state.cart[find],
                    quantity: state.cart[find].quantity + 1
                };
                // state.cart[find].quantity += 1;
            } else {
                const tempProduct = { ...action.payload, quantity: 1 }
                state.cart.push(tempProduct);
            }
        },


        getCartTotal: (state) => {
            let { totalQuantity, totalPrice } = state.cart.reduce(
                (cartTotal, cartItem) => {
                    const { price, quantity } = cartItem;
                    const itemTotal = price * quantity;
                    cartTotal.totalPrice += itemTotal;
                    cartTotal.totalQuantity += quantity;
                    return cartTotal;
                },
                {
                    totalPrice: 0,
                    totalQuantity: 0,
                }
            );
            state.totalPrice = parseFloat(totalPrice.toFixed(2));
            state.totalQuantity = totalQuantity;
        },


        removeItem: (state, action) => {
            state.cart = state.cart.filter((item) => item.id !== action.payload);
        },

        increaseItemQuantity: (state, action) => {
            state.cart = state.cart.map((item) => {
                if (item.id === action.payload) {
                    return { ...item, quantity: item.quantity + 1 };
                }
                return item;
            });
        },

        decreaseItemQuantity: (state, action) => {
            state.cart = state.cart.map((item) => {
                if (item.id === action.payload) {
                    return { ...item, quantity: item.quantity - 1 };
                }
                return item;
            });
        },
    },
});

export const {
    addToCart,
    getCartTotal,
    removeItem,
    increaseItemQuantity,
    decreaseItemQuantity,
} = cartSlice.actions;

export default cartSlice.reducer;