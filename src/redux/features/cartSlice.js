import { createSlice } from "@reduxjs/toolkit";

const loadFromLocalStorage = () => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  };
  

  const saveToLocalStorage = (state) => {
    localStorage.setItem("cart", JSON.stringify(state));
  };


export const cartSlice = createSlice({
     initialState: loadFromLocalStorage(), 
    name: "cartSlice",
    reducers: {
        ADD_TO_CART: (state, action) => {
            const existed = state.find((product) => product.id === action.payload.id);
            if (existed) {
                existed.qty += 1;  
            } else {
                const productClone = { ...action.payload, qty: 1 };
                state.push(productClone); 
            }
            saveToLocalStorage(state);
            setTimeout(() => {
            }, 2);
        },
        QTY_INCREMENT: (state, action) => {
            const existed = state.find((product) => product.id === action.payload.id);
            if (existed) {
                existed.qty += 1;  
            }
            saveToLocalStorage(state);
        },

        QTY_DECREMENT: (state, action) => {
            const existed = state.find((product) => product.id === action.payload.id);
            if (existed) {
                if (existed.qty > 1) {
                    existed.qty -= 1; 
                } else {
                    const updatedState = state.filter((product) => product.id !== action.payload.id);
                    saveToLocalStorage(updatedState); 
                    return updatedState; 
                }
            }
            saveToLocalStorage(state); 
            return state; 
        },
        
        REMOVE_FROM_CART: (state, action) => {
            const updatedCart = state.filter(product => product.id !== action.payload.id);
            saveToLocalStorage(updatedCart);
            return updatedCart;
        },

        CLEAR_CART: () => {
            localStorage.removeItem("cart");
            return [];
        }

    }
})

export const { ADD_TO_CART, REMOVE_FROM_CART, QTY_INCREMENT, QTY_DECREMENT, CLEAR_CART } = cartSlice.actions;
export default cartSlice.reducer;
