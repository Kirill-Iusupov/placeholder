import { configureStore } from "@reduxjs/toolkit";
import postsSlice from "./slices/postsSlice"
import limitSlice from "./slices/limitSlice";

export const store = configureStore({
    reducer :{
        postsSlice,
        limitSlice
    }
})