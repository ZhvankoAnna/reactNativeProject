import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    posts: [],
}

export const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        setPostsList: (state, {payload}) => ({
            ...state,
            posts: payload,
        }),
        addUsersPost: (state, {payload}) => ({
            ...state,
            posts: [...state.posts, payload]
        }),
    }
})