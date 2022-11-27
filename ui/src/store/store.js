import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import categoryReducer from "./categorySlice";
import modalReducer from "./modalSlice";
import productReducer from "./productSlice";
export const store = configureStore({
    reducer:{
        category:categoryReducer,
        modal:modalReducer,
        product:productReducer,
        cart:cartReducer
    }
});

