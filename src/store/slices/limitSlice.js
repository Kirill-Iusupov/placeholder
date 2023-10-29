import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    limit: 10
}

export const limitSlice = createSlice({
    name: "filter",
    initialState,
    reducers:{
        setLimit: (state, action) => {
            state.limit = action.payload
        }
    }
})

export const { setLimit } = limitSlice.actions

export default limitSlice.reducer