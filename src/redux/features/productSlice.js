import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
export const fetchProducts = createAsyncThunk("productSlice/fetchProducts", async ()=>{
    const res = await fetch("https://raw.githubusercontent.com/MoLabibb/productsData/main/products.json")
    const data = await res.json() ;    
    const products_page = data.products ; 
    const products = products_page.map((product, index) => product = { ...product, id: index + 1});   
    return products ; 
})
const productSlice = createSlice({
    initialState:[], 
    name:"productSlice", 
    reducer:{}, 
    extraReducers:(builder)=>{
        builder.addCase(fetchProducts.fulfilled, (state, action)=>{
            return action.payload; 
        })
    }
})

export default productSlice.reducer ; 