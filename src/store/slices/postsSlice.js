import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


const initialState = {
    isLoading: false,
    error: '',
    posts: [],
    total: 0
}

export const fetchPosts = createAsyncThunk(
    'posts/fetchPosts',
    async ( {limit, page} ) => {
        const res = await axios(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}&_page=${page}`)
        const {data} =  res
        const count = res.headers["x-total-count"]
        const info = {
            data, count
        }
        return info
    }
)


export const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(fetchPosts.pending, (state)=>{
            state.isLoading=true;
        }),
        builder.addCase(fetchPosts.fulfilled, (state, action)=>{
            state.isLoading=false;
            state.posts = action.payload.data
            state.total = action.payload.count
        }),
        builder.addCase(fetchPosts.rejected, (state, action)=>{
            state.isLoading=false;
            state.error = action.payload
        })
    }
})

export default postsSlice.reducer